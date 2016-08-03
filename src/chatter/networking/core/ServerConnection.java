package chatter.networking.core;

import java.io.IOException;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.nio.channels.ClosedChannelException;
import java.nio.channels.SelectionKey;
import java.nio.channels.ServerSocketChannel;
import java.util.ArrayList;

/**
 * Created by alexisvincent on 2016/08/02.
 */
public class ServerConnection {

    public ServerSocketChannel serverChannel;
    private ArrayList<Listener> listeners = new ArrayList<>();

    public ServerConnection(ServerSocketChannel serverChannel) throws IOException {
        this.serverChannel = serverChannel;
        serverChannel.configureBlocking(false);
    }

    public void bind(int port) throws IOException {
        serverChannel.socket().bind(new InetSocketAddress(InetAddress.getLocalHost(), port));
    }

    public static ServerConnection listen(int port) throws IOException {
        ServerConnection serverConnection = new ServerConnection(ServerSocketChannel.open());
        serverConnection.bind(port);
        return serverConnection;
    }

    public void accept(SelectionKey key) throws IOException {
        Connection connection = new Connection(serverChannel.accept());
        for (Listener listener : listeners)
            listener.connectionEstablished(connection);
    }

    public void addListener(Listener listener) {
        listeners.add(listener);
    }

    public interface Listener {
        public void connectionEstablished(Connection connection) throws ClosedChannelException;
    }
}
