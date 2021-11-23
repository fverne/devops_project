package DTOs;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.io.Serializable;
import org.apache.catalina.Role;

import java.util.*;
@Entity
@Data
@Table(name = "UserDTO")
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class UserDTO implements Serializable{
    public static final String userNameString="userName";

    String userName;
    String password;
    List<Role> roles = new ArrayList<>();
    private transient boolean isAdminOfCourses = false;


    public UserDTO(String username) {
        this.userName = username;
    }

    @Id @GeneratedValue
    @Column(name = "db_id")
    private long db_id;
}