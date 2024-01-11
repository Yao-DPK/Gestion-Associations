package al.arrow;

import java.nio.charset.StandardCharsets;
import java.util.concurrent.locks.ReentrantLock;

import javax.enterprise.context.ApplicationScoped;

import org.eclipse.microprofile.reactive.messaging.Incoming;

import al.myservices.UseServices;
import io.quarkus.mailer.Mail;
import io.quarkus.mailer.Mailer;
import al.myservices.Message;
import io.vertx.core.json.JsonObject;


@ApplicationScoped
public class RabbitMQConsumer  {

    //definition de verrou
    public  static ReentrantLock lock = new ReentrantLock();

    UseServices util= new UseServices ();

    private Mailer mailer;
    public RabbitMQConsumer(Mailer mailer){
        this.mailer=mailer;
    }

    //methode principale de traitement du microservice
    @Incoming("books_queue")
    public void consume(byte[] p) {

        //Extraction de donnée dans le flux recu par le canal
        String string_data = new String(p, StandardCharsets.UTF_8);
        JsonObject jsonobject_data = new JsonObject(new String(string_data));
        JsonObject data = jsonobject_data.getJsonObject("data");
        //Traitement de la donnée par la classe ServiceUtil
        Message msg = this.util.mapData(data);
        System.out.println("**Message recu :"+msg.toString());
        //Envoie du mail au destinataire

        Runnable ran = ()->{
            try {
         
            String email=msg.destinator;
            String topic=msg.topic;
            String message=msg.message;
            Mail mail= Mail.withText(email,topic,message);
            lock.lock();
            mailer.send(mail);
            System.out.println("**Section critique**");

            } catch (Exception e) {
                System.out.println("echec d'envoie de mail au l'adresse email : "+msg.destinator+"");
            }
            finally{
                lock.unlock();
            }
        };

        Thread td = new Thread(ran);
        td.start();
    }
}  

