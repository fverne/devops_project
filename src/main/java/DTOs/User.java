package DTOs;


import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;

@Data
@NoArgsConstructor
public class User  {
    public static final String userNameString="userName";

    private String userName;
    private String Email;
    private String firstName;
    private String lastName;
    private List<String> roles = new ArrayList<>();
    private transient boolean isAdminOfCourses = false;


    public User(String username) {
        this.userName = username;
    }
}