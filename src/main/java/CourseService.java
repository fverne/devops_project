import javax.ws.rs.POST;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import java.util.Arrays;
import java.util.List;

import static java.lang.Math.*;

@Produces(MediaType.APPLICATION_JSON)
@Path("courses")
public class CourseService {
    CourseDTO devopscourse = new CourseDTO("Devops", 30, "62582", "Tuesday", "8:00 - 12:00");
    CourseDTO cppcourse = new CourseDTO("Programming in cpp", 200, "02393", "Tuesday", "18:00 - 22:00");
    CourseDTO networkcourse = new CourseDTO("Network Security", 15, "62530", "Monday", "13:00 - 17:00");

    List<CourseDTO> courses = Arrays.asList(devopscourse, cppcourse, networkcourse);
    @GET
    public List<CourseDTO> getCourses(){
        return courses;
    }

    @POST
    public CourseDTO postCourse() {
        String courseidrandomizer = String.valueOf(ceil(max(random()*99999, 10000)));

        return new CourseDTO("TestCourse", 50, courseidrandomizer, "RandomDay", "08:00 - 12:00");
    }
}
