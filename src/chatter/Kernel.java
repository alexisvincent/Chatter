package chatter;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by alexisvincent on 2016/07/20.
 */
public class Kernel {
    private static Kernel INSTANCE = new Kernel();

    ArrayList<Peer> peers;

    static Kernel getInstance() {
        return INSTANCE;
    }

    private Kernel() {
        peers = new ArrayList<>();
        mock();
    }

    private void mock() {
        this.peers.add(new Peer("alexisvincent"));
        this.peers.add(new Peer("emmabotha"));
        this.peers.add(new Peer("julienvincent"));
        this.peers.add(new Peer("sharonvincent"));
    }

    public List<Peer> getPeers() {
        return peers;
    }

    public boolean requestUsername(String username) {
        return true;
    }

    public boolean requestUsernameAvailability(String username) {
        return Math.random() < 0.5;
    }
}