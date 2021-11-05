import {useParams} from "react-router-dom";
import CourseStore from "../store/CourseStore";
import {useState} from "react";

const courseStore = new CourseStore();

export default function CourseSingle() {
    const [courseData, setCourseData] = useState({id : "loading course data"});

    const param = useParams()
    console.log(param);

    const courseNumber = param.course;
    console.log(courseNumber);

    console.log(courseData)
    let jsonData = courseData;
    courseStore.fetchCourse(courseNumber).then(
        (data) => {
            jsonData = data;
            setCourseData(jsonData);
        }
    )

    console.log(courseData)
    console.log(courseData.id)

    return (
        <div>
            <h1>
                {courseData.id}
            </h1>
        </div>
    );
}