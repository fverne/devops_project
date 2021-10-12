package Services;

import DTOs.CourseDTO;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import java.util.Arrays;
import java.util.List;

import static java.lang.Math.*;

@Produces(MediaType.APPLICATION_JSON)
@Path("courses")
public class CourseService {
    SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();

    @GET
    public List<CourseDTO> getCourses(){
        Session session = sessionFactory.openSession();
        CriteriaQuery<CourseDTO> query = session.getCriteriaBuilder().createQuery(CourseDTO.class);
        Root<CourseDTO> from = query.from(CourseDTO.class);
        query.select(from);
        List<CourseDTO> resultList = session.createQuery(query).getResultList();

        return resultList;
    }

    @POST
    public CourseDTO save(CourseDTO courseDTO) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();

        session.save(courseDTO);
        transaction.commit();
        session.close();

        return courseDTO;
    }
}

