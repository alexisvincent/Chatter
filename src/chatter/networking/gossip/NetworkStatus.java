package chatter.networking.gossip;

import java.io.Serializable;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.SocketAddress;

/**
 * Created by alexisvincent on 2016/08/03.
 */
public class NetworkStatus implements Serializable{
    InetSocketAddress leader;

    public InetSocketAddress getLeader() {
        return leader;
    }

    public void setLeader(InetSocketAddress leader) {
        this.leader = leader;
    }
}
