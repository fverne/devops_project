import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.corba.se.spi.ior.ObjectId;
import lombok.Data;

import java.io.Serializable;

@Data
public class CourseDTO implements Serializable {
    @JsonIgnore //
    private ObjectId _id;
    String name;
    int maxcap;
    String id;
    String weekday;
    String time;

    public CourseDTO(String name, int maxcap, String id, String weekday, String time) {
        this.name = name;
        this.maxcap = maxcap;
        this.id = id;
        this.weekday = weekday;
        this.time = time;
    }

}
