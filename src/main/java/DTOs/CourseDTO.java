package DTOs;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "CourseDTO")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CourseDTO implements Serializable {
    String name;
    int maxcap;
    String id;
    String weekday;
    String time;

    @Id @GeneratedValue
    @Column(name = "db_id")
    private Long db_id;
}
