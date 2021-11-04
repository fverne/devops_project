import {useParams} from "react-router-dom";
import CourseStore from "../store/CourseStore";
import {useState} from "react";

const courseStore = new CourseStore();

export default function CourseSingle() {
    const [isLoading, setLoading] = useState(true);

    const param = useParams()
    console.log(param);

    const courseNumber = param.course;
    console.log(courseNumber);

    courseStore.fetchCourse(courseNumber)

    return (
        <div>
            <h1>
                {courseStore.courses.id}
            </h1>
        </div>
    );
}