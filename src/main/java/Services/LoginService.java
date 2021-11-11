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
        String URI = "https://auth.dtu.dk/dtu/?service=http://localhost:8080/rest/campusnet/redirect";
        return Response.seeOther(UriBuilder.fromUri(URI).build()).build();
    }

    //Tager imod en ticket i queryparams
    @GET
    @Path("redirect")
    public Response callback(@QueryParam("ticket") String cnTicket) throws NotAuthorizedException {
            System.out.println(cnTicket); //Check if we got something back
            String body = Unirest.get( "https://auth.dtu.dk/dtu/validate?service=http://localhost:8080/rest/campusnet/redirect&ticket="
                            + cnTicket)
                    .asString()
                    .getBody();
            //Validate body to see if login succeeded!!
            boolean authorized = false;
            String insideID = "";
            if (body.contains("yes")) {
                authorized = true;
                insideID = body.split("\n")[1];
            }
            if (authorized) {
                String token = JWTHandler.generateJwtToken(new User(insideID));
                return Response.seeOther(UriBuilder.fromUri("http://localhost:8080/?token="+ token).build()).build();
            }
            throw new NotAuthorizedException("DTU user not authorized");
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
    public User testToken(@HeaderParam("Authorization") String authentication) throws Exceptions.NotAuthorizedException {
        System.out.println(authentication);
        User validate = JWTHandler.validate(authentication);
        return validate;
    }
}


