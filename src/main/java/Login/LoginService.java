package Login;

import DTOs.LoginData;
import DTOs.User;
import kong.unirest.Unirest;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;


@Produces(MediaType.APPLICATION_JSON)
@Path("campusnet")
public class LoginService {
    @GET
    @Path("login")
    public Response login(){
        String URI =  "https://auth.dtu.dk/dtu/?service=http://localhost:8080/rest/campusnet/redirect";
        return Response.seeOther(UriBuilder.fromUri(URI).build()).build();
    }

    @GET
    @Path("redirect")
    public String callback(@QueryParam("ticket") String cnTicket){
        System.out.println(cnTicket); //Check if we got something back
        //Tjek ticket mod CampusNet
        String body = Unirest.get( "https://auth.dtu.dk/dtu/validate?service=http://localhost:8080/rest/campusnet/redirect&ticket="
                        + cnTicket)
                .asString()
                .getBody();
        return body; //Just return the result for now
    }


    @POST
    @Path("login")
    public String postLoginData(LoginData login) throws Exceptions.NotAuthorizedException
    {
        if (login!=null && "brian".equals(login.getUsername()) && "kodeord".equals(login.getPassword())){
            return JWTHandler.generateJwtToken(new User(login.getUsername(), ""));
        }
        throw new Exceptions.NotAuthorizedException("forkert brugernavn/kodeord");
    }

}


