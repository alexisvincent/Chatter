package chatter.networking.core;

import java.io.IOException;
import java.nio.channels.*;
import java.util.*;

/**
 * Created by alexisvincent on 2016/08/02.
 */
public class Processor implements Runnable {
    private Thread thread = new Thread(this);

    public Selector selector = Selector.open();

    private Map<SocketChannel, Connection> connections = new HashMap<>();
    private Map<ServerSocketChannel, ServerConnection> serverConnections = new HashMap<>();

    public Processor() throws IOException {
    }

    public void register(Connection connection) throws ClosedChannelException {
        connections.put(connection.channel, connection);
        connection.channel.register(selector, SelectionKey.OP_READ);
    }

    public void register(ServerConnection connection) throws ClosedChannelException {
        serverConnections.put(connection.serverChannel, connection);
        connection.serverChannel.register(selector, SelectionKey.OP_ACCEPT);
    }

    private boolean processing = false;

    public boolean isProcessing() {
        return processing;
    }

    public void setProcessing(boolean processing) {
        this.processing = processing;
    }

    public void start() {
        setProcessing(true);
        thread.start();
    }

    public void stop() {
        setProcessing(false);
    }

    public Collection<Connection> getConnections() {
        return connections.values();
    }

    public Collection<ServerConnection> getServerConnections() {
        return serverConnections.values();
    }

    @Override
    public void run() {
        while (isProcessing()) {
            try {
                selector.select(100);

                Iterator keys = this.selector.selectedKeys().iterator();
                while (keys.hasNext()) {
                    SelectionKey key = (SelectionKey) keys.next();

                    keys.remove();

                    if (key.isValid())
                        if (key.isAcceptable())
                            serverConnections.get(key.channel()).accept(key);
                        else if (key.isReadable())
                            connections.get(key.channel()).read(key);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}