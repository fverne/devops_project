package Services;

import DTOs.CourseDTO;
import DTOs.User;
import Exceptions.NoImplementationException;
import Login.JWTHandler;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import java.util.List;


@Produces(MediaType.APPLICATION_JSON)
@Path("courses")
public class CourseService {
    static SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();

    @GET
    @Path("{courseNumber}")
    public CourseDTO getCourse(@HeaderParam("Authorization") String authHeader, @PathParam("courseNumber") String courseNumber) {
        Session session = sessionFactory.openSession();
        CriteriaQuery<CourseDTO> query = session.getCriteriaBuilder().createQuery(CourseDTO.class);
        Root<CourseDTO> from = query.from(CourseDTO.class);

        query.select(from).where(session.getCriteriaBuilder().equal(from.get("id"), courseNumber));

        CourseDTO result = session.createQuery(query).uniqueResult();

        return result;
    }

    @GET
    public List<CourseDTO> getCourses(@HeaderParam("Authorization") String authHeader){
        System.out.println(authHeader);
        User user = JWTHandler.validate(authHeader);
        System.out.println("User accessing giraffes: " + user);


        Session session = sessionFactory.openSession();
        CriteriaQuery<CourseDTO> query = session.getCriteriaBuilder().createQuery(CourseDTO.class);
        Root<CourseDTO> from = query.from(CourseDTO.class);
        query.select(from);
        List<CourseDTO> resultList = session.createQuery(query).getResultList();

        return resultList;
    }

    @POST
    public CourseDTO save(@HeaderParam("Authorization") String authHeader, CourseDTO courseDTO) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();

        session.save(courseDTO);
        transaction.commit();
        session.close();

        return courseDTO;
    }
}

