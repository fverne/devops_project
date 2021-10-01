import javax.ws.rs.core.MediaType;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import java.util.Arrays;
import java.util.List;

@Produces(MediaType.APPLICATION_JSON)
@Path("courses")
public class CourseService {
    List<String> courses = Arrays.asList("Devops", "cpp");
    @GET
    public List<String> getCourses(){
        return courses;
    }
}