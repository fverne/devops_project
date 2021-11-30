package Filters;

import DTOs.User;
import Login.JWTHandler;

import javax.annotation.Priority;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ResourceInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;
import java.io.IOException;

@Provider @Priority(1000) //For at CORS filter bliver kørt først
public class AuthFilter implements ContainerRequestFilter {
    private static final String DELIMITER = " ";
    public static final String USER = "user";

    @Context
    ResourceInfo resourceInfo;

    @Context
    HttpHeaders headers;

    @Override
    public void filter(ContainerRequestContext containerRequestContext) throws IOException {
        System.out.println("Caught in Authfilter!");
        if (!("login".equals(containerRequestContext.getUriInfo().getPath()))) {
            User user;
            try {
                user = resolveUser();
                System.out.println("User validated: " + user);
            } catch (Exception e) {
                //containerRequestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());
            }
        }
    }


    private User resolveUser()  {
        String authHeader = headers.getHeaderString(HttpHeaders.AUTHORIZATION);
        if (authHeader == null) {
            System.out.println("No securityToken - You need to login!");
        } else {
            String[] splitAuthHeader = authHeader.split(DELIMITER);
            if (splitAuthHeader.length != 2) {
                System.out.println("Authorization header malformed: " + authHeader + ", Should be: 'Authorization: Bearer <JWTTOKEN>'");
            } else {
                User user = JWTHandler.validate(splitAuthHeader[1]);
                System.out.println("User found: " + user);
                return user;
            }
        }
        return null;
    }
}