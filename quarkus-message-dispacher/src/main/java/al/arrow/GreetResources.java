package al.arrow;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import io.quarkus.mailer.Mail;
import io.quarkus.mailer.Mailer;
@Path("/hello")
public class GreetResources {
    @Inject Mailer mailer;
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello RESTEasy";
    }
    
    @GET
    @Path("/mail")
    @Produces(MediaType.TEXT_PLAIN)
    public Response mail() {
        Mail mail = Mail.withText("berthe.moussa@example.com", "moussa.berthe@example.com","Sujet de l'e-mail");
        mailer.send(mail);
        return Response.ok().build();
    }
}