package chatter.networking.example;

import chatter.networking.gossip.Gossip;
import chatter.networking.gossip.GossipNode;

import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;

/**
 * Created by alexisvincent on 2016/08/03.
 */
public class GossipTest {
    public static void main(String[] args) throws IOException {

        int[] ports = {8003, 8001, 8002, 8004};
        Collections.shuffle(Arrays.asList(ports));

        GossipNode node = new GossipNode(ports);

        try {
            if (node.isFollower())
                node.getLeaderConnection().send("I am a client bound to port " + node.port);
        } catch (Gossip.NoLeaderException e) {
            e.printStackTrace();
        }
    }
}
