package al.myservices;

public class Message {
    public String myassociation;
    public String destinator;
    public String topic;
    public String message;
    public Message(String assoc,String dest,String topic, String messsage){
        this.myassociation=assoc;
        this.destinator=dest;
        this.topic=topic;
        this.message=messsage;
    }
    @Override
    public String toString() {
        String chaine="\n association = "+this.myassociation+"\n mail of destinator = "+this.destinator+"\n topic = "+this.topic+"\n message = "+this.message;
        return chaine ;
    }
}
