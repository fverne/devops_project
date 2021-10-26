import {useParams} from "react-router-dom";
import {useObserver} from "mobx-react-lite";
import CourseStore from "../store/CourseStore";

const courseStore = new CourseStore();

export default function CourseSingle() {

    const param = useParams()
    console.log(param);

    const courseNumber = param.course;
    console.log(courseNumber);

    courseStore.fetchCourse(courseNumber)


    return useObserver( () =>
        <div>
            <h1>
                {courseStore.courses.id}
            </h1>
        </div>
    );
}