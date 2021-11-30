package Services;

import DTOs.LoginData;
import DTOs.User;
import Login.JWTHandler;
import io.prometheus.client.Counter;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import static Metrics.Metrics.attemptCounter;
import static Metrics.Metrics.failCounter;


@Path("login")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LoginService {
    @POST
    public String postLoginData(LoginData login){
        attemptCounter.inc();
        if (login!=null &&"brian".equals(login.getUsername()) && "kodeord".equals(login.getPassword())){
            return JWTHandler.generateJwtToken(new User(login.getUsername(), ""));
        }
        failCounter.inc();
        throw new NotAuthorizedException("forkert brugernavn/kodeord");
    }

    @POST @Path("tokentest")
    public User postToken(String token){
        User validate = JWTHandler.validate(token);
        return validate;
    }

}