package chatter.networking.gossip;

import java.io.Serializable;

/**
 * Created by alexisvincent on 2016/08/03.
 */
public abstract class Gossip {
    public static class NoLeaderException extends java.lang.Exception {
    }

    public static class Message implements Serializable {

        public Tag tag;

        public enum Tag {
            STATUS_REQ,
            STATUS_RES,
            HEARTBEAT
        }

        public Serializable payload;

        public Message(Tag tag, Serializable payload) {
            this.tag = tag;
            this.payload = payload;
        }
    }
}
