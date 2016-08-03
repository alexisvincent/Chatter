package chatter.networking.core;

import java.io.*;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.SelectionKey;
import java.nio.channels.SocketChannel;
import java.util.ArrayList;

/**
 * Created by alexisvincent on 2016/08/02.
 */
public class Connection {
    public SocketChannel channel;
    private ArrayList<Connection.Listener> listeners = new ArrayList<>();

    public Connection(SocketChannel channel) throws IOException {
        this.channel = channel;
        this.channel.configureBlocking(false);
    }

    public static Connection open(String host, int port) throws IOException {
        return open(new InetSocketAddress(host, port));
    }

    public static Connection open(InetSocketAddress address) throws IOException {
        return new Connection(SocketChannel.open(address));
    }

    public void close() throws IOException {
        channel.close();
        for (Listener listener : listeners)
            listener.disconnected(this);
    }

    public void send(Serializable data) throws IOException {
        //TODO: Close streams and stuff
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        ObjectOutputStream os = new ObjectOutputStream(out);
        os.writeObject(data);
        os.close();

        byte[] payload = out.toByteArray();

        ByteBuffer[] msg = {
                ByteBuffer.allocate(4).putInt(payload.length),
                ByteBuffer.wrap(payload)
        };

        msg[0].flip();

        channel.write(msg);
    }

    public void read(SelectionKey key) throws IOException {
        //TODO: Close streams and stuff
        ByteBuffer buffer = ByteBuffer.allocate(4);
        int numRead = channel.read(buffer);
        if (numRead == -1) {
            close();
            key.cancel();
            return;
        }

        buffer.flip();

        buffer = ByteBuffer.allocate(buffer.getInt());
        numRead = channel.read(buffer);
        if (numRead == -1) {
            close();
            key.cancel();
            return;
        }
        buffer.flip();

        try {
            Object data = new ObjectInputStream(new ByteArrayInputStream(buffer.array())).readObject();
            for (Listener listener : listeners)
                listener.dataReceived(data);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public void addListener(Listener listener) {
        listeners.add(listener);
    }

    public interface Listener {
        void dataReceived(Object data);
        void disconnected(Connection connection) throws IOException;
    }
}