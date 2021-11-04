package Services;

import DTOs.LoginData;
import DTOs.User;
import Exceptions.NotAuthorizedException;
import Login.JWTHandler;
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
    public String callback(@QueryParam("ticket") String cnTicket) throws NotAuthorizedException {
        boolean authorized = false;

        System.out.println(cnTicket); //Check if we got something back
        String body = Unirest.get( "https://auth.dtu.dk/dtu/validate?service=http://localhost:8080/rest/campusnet/redirect&ticket="
                        + cnTicket)
                .asString()
                .getBody();
        //Validate body to see if login succeeded!!
        User loggedInUser = JWTHandler.validate(body);
        if (loggedInUser != null) {
            authorized = true;
        } else {
            throw new Exceptions.NotAuthorizedException("bad login");
        }
        if (authorized) {
            String tokenString = JWTHandler.generateJwtToken(new User());
            return tokenString;
        }
        throw new NotAuthorizedException("you are not allowed to do this");
    }


    @POST
    @Path("login")
    public String postLoginData(LoginData login) throws NotAuthorizedException
    {
        if (login!=null && "brian".equals(login.getUsername()) && "kodeord".equals(login.getPassword())){
            return JWTHandler.generateJwtToken(new User(login.getUsername()));
        }
        throw new NotAuthorizedException("forkert brugernavn/kodeord");
    }

    @GET @Path("testtoken")
    public User testToken(@HeaderParam("Authorization") String authentication) throws NotAuthorizedException {
        System.out.println(authentication);
        User validate = JWTHandler.validate(authentication);
        return validate;
    }
}


