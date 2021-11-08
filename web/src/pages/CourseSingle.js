import {useParams} from "react-router-dom";
import CourseStore from "../store/CourseStore";
import {useEffect, useState} from "react";

const courseStore = new CourseStore();

export default function CourseSingle() {
    const [courseData, setCourseData] = useState({id : "loading course data"});

    const param = useParams()
    const courseNumber = param.course;

    let jsonData = courseData;

    useEffect(() => {
        courseStore.fetchCourse(courseNumber).then(
            (data) => {
                jsonData = data;
                setCourseData(jsonData);
            }
        )
    }, [])


    console.log(jsonData)

    return (
        <div>
            <h1>
                {courseData.id}
            </h1>
        </div>
    );
}