package chatter.networking.example;

import chatter.networking.core.Connection;
import chatter.networking.core.Processor;
import chatter.networking.core.ServerConnection;
import chatter.networking.gossip.Gossip;

import java.io.IOException;

/**
 * Created by alexisvincent on 2016/08/01.
 */
public class Server {

    public static void main(String[] args) throws IOException {
        Processor processor = new Processor();
        ServerConnection server = ServerConnection.listen(12345);

        server.addListener(connection -> {
            try {
                System.out.println(":: Client Connected [" + connection.channel.getRemoteAddress() + "]");
            } catch (IOException e) {
                e.printStackTrace();
            }
            processor.register(connection);

            connection.addListener(
                    new Connection.Listener() {
                        @Override
                        public void dataReceived(Object data) {
                            try {
                                if (data instanceof Gossip.Message) {
                                    switch (((Gossip.Message) data).tag) {
                                        case HEARTBEAT:
                                            connection.send(new Gossip.Message(Gossip.Message.Tag.HEARTBEAT, null));
                                    }
                                } else {

                                }
                            } catch (IOException e) {
                                e.printStackTrace();
                            }
                        }

                        @Override
                        public void disconnected(Connection connection) {
                            System.out.println(":: Client Disconnected [" +
                                    connection.channel.socket().getRemoteSocketAddress() + "]");
                        }
                    }
            );
        });

        processor.register(server);
        processor.start();
    }
}

