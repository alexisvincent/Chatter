package chatter.networking.example;

import chatter.networking.core.Connection;
import chatter.networking.core.Processor;

import java.io.IOException;

/**
 * Created by alexisvincent on 2016/08/01.
 */
public class Client {
    public static void main(String[] args) throws IOException {
        Connection connection = Connection.open("localhost", 12345);
        connection.send(5);
        Processor processor = new Processor();

        processor.register(connection);

        connection.addListener(new Connection.Listener() {
            @Override
            public void dataReceived(Object data) {
                System.out.println(data.getClass());
                if (data instanceof String)
                    System.out.println(":: Data Received " +  data);
            }

            @Override
            public void disconnected(Connection connection) throws IOException {
                System.out.println(":: Server Disconnected " +  connection.channel.socket().getRemoteSocketAddress());
                connection.close();
            }
        });

        processor.start();

    }
}