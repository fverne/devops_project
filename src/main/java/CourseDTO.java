import java.io.Serializable;

public class CourseDTO implements Serializable {
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMaxcap() {
        return maxcap;
    }

    public void setMaxcap(int maxcap) {
        this.maxcap = maxcap;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getWeekday() {
        return weekday;
    }

    public void setWeekday(String weekday) {
        this.weekday = weekday;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
