package chatter.networking.gossip;

import chatter.networking.core.Connection;
import chatter.networking.core.Processor;
import chatter.networking.core.ServerConnection;

import java.io.IOException;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.UnknownHostException;
import java.nio.channels.ClosedChannelException;
import java.util.Optional;

/**
 * Created by alexisvincent on 2016/08/03.
 */
public class GossipNode {

    ServerConnection serverConnection;
    public Processor processor = new Processor();
    public int port;
    public int[] portRange;

    public NetworkStatus status = new NetworkStatus();

    public GossipNode(int[] portRange) throws IOException {
        this.portRange = portRange;

        for (int port : portRange)
            try {
                serverConnection = ServerConnection.listen(port);
                this.port = port;
                System.out.println(":: Binding to port " + port);
                break;
            } catch (IOException ignored) {
            }

        if (serverConnection == null)
            throw new IOException();

        serverConnection.addListener(this::registerConnection);

        processor.register(serverConnection);
        processor.start();

        discoverAndJoin();
    }

    public void registerConnection(Connection connection) {
        try {
            processor.register(connection);
        } catch (ClosedChannelException e) {
            e.printStackTrace();
        }

        connection.addListener(new Connection.Listener() {
            @Override
            public void dataReceived(Object data) {
                if (data instanceof Gossip.Message) {
                    try {
                        Gossip.Message msg = (Gossip.Message) data;
                        switch (msg.tag) {
                            case STATUS_RES:
                                registerNetworkStatus((NetworkStatus) msg.payload);
                                break;
                            case STATUS_REQ:
                                connection.send(new Gossip.Message(Gossip.Message.Tag.STATUS_RES, status));
                        }
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                } else if (data instanceof String) {
                    try {
                        System.out.println(":: Data Received from " + connection.channel.getRemoteAddress() + " [" + data + "]");
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }

            @Override
            public void disconnected(Connection connection) throws IOException {
                System.out.println(":: Client Disconnected: " + connection.channel.socket().getRemoteSocketAddress());
            }
        });


        System.out.println(":: Client Connected: " + connection.channel.socket().getRemoteSocketAddress());
    }

    public void registerNetworkStatus(NetworkStatus status) {
        this.status = status;
        System.out.println(":: Leader discovered: " + status.getLeader());
    }

    public Connection getLeaderConnection() throws IOException, Gossip.NoLeaderException {
        if (status.leader != null) {
            Optional<Connection> leader = processor.getConnections().stream().filter(connection -> {
                try {
                    return connection.channel.getRemoteAddress().equals(status.getLeader());
                } catch (IOException e) {
                    return false;
                }
            }).findFirst();

            if (leader.isPresent()) {
                return leader.get();
            } else {
                registerConnection(Connection.open(status.getLeader()));
                return getLeaderConnection();
            }
        } else {
            try {
                Thread.sleep(100);
            } finally {
                if (status.leader != null) {
                    return getLeaderConnection();
                } else {
                    throw new Gossip.NoLeaderException();
                }
            }
        }
    }

    public boolean join(InetSocketAddress address) {
        try {
            InetAddress localhost = InetAddress.getLocalHost();
            if (!(address.getAddress().equals(localhost) && address.getPort() == port)) {
                Connection connection = Connection.open(address);
                registerConnection(connection);
                connection.send(new Gossip.Message(Gossip.Message.Tag.STATUS_REQ, null));
                System.out.println(":: Network Discovered");
                System.out.println(":: Joining Network through " + address);
                return true;
            }
        } catch (IOException ignored) {
        }

        return false;
    }

    public void discoverAndJoin() {
        System.out.println(":: Searching for Gossip Network");
        try {
            byte[] ip = InetAddress.getLocalHost().getAddress();

            for (int i = 1; i <= 254; i++) {
                ip[3] = (byte) i;
                try {
                    InetAddress address = InetAddress.getByAddress(ip);
                    if (address.isReachable(30)) {
                        for (int port : portRange) {
                            if (join(new InetSocketAddress(address, port)))
                                return;
                        }
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }

        System.out.println(":: No network found");
        System.out.println(":: Promoting self to leader");
        NetworkStatus status = new NetworkStatus();
        status.setLeader((InetSocketAddress) serverConnection.serverChannel.socket().getLocalSocketAddress());
        registerNetworkStatus(status);
    }

    public boolean isLeader() throws UnknownHostException {
        return status.getLeader() != null
                && status.getLeader().getAddress().equals(InetAddress.getLocalHost())
                && status.getLeader().getPort() == this.port;
    }

    public boolean isFollower() throws UnknownHostException {
        return !isLeader();
    }
}
