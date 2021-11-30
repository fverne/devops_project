package Services;

import DTOs.User;
import Login.JWTHandler;
import config.Config;
import kong.unirest.Unirest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;
import java.net.URI;

@Path("campusnet")
public class CampusNetLogin {

    @Path("login")
    @GET
    public Response getLogin() {
        URI uri = URI.create(Config.CAMPUSNET_LOGIN_URL + "?service=" + Config.GODINSIDE + "rest/campusnet/redirect");
        return Response.temporaryRedirect(uri).build();
    }

    @GET @Path("redirect")
    public Response callback(@QueryParam("ticket") String cnTicket){
        System.out.println(cnTicket); //Check if we got something back
        //Tjek ticket mod CampusNet

        try {
            String body = Unirest.get( "https://auth.dtu.dk/dtu/validate?service=" + Config.GODINSIDE + "rest/campusnet/redirect&ticket="
                            + cnTicket)
                    .asString()
                    .getBody();

            String validationReply = body;
            System.out.println("validationreply =" + validationReply);
            String[] validationArray = validationReply.split("\n");
            String jwtToken = "";
            if (validationArray.length == 2 && validationArray[0].toLowerCase().trim().equals("yes")) { //Login success
                System.out.println("test");
                //JWTHandler.validate(validationArray[1].trim()); //validationArray[1] contains campusnet username.
    //                user.setLastLoggedIn(LocalDateTime.now());
    //                userController.saveUser(user);
                jwtToken = JWTHandler.generateJwtToken(new User(validationArray[1].trim(), ""));
                //Generating redirection page and returning it.
                String html = Config.GODINSIDE + "?token=" + jwtToken;
                return Response.seeOther(UriBuilder.fromUri(html)
                        .build())
                        .header("Authorization", "Bearer " + jwtToken)
                        .build();
            } else {
                return Response.status(401).entity("Login failed, reply was: "  + validationReply).build();
            }
        } catch (Exception e) {
            return Response.serverError().entity("Could not connect to campusnet").build();
        }
    }

}