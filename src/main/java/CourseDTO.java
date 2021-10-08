import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.io.Serializable;

@Data
public class CourseDTO implements Serializable {
    @JsonIgnore
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
