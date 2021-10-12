import {makeAutoObservable, runInAction} from "mobx";


const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev environment

export default class CourseStore {
    courses = [
        "loading courses..."
    ];

    constructor() {
        makeAutoObservable(this,{},{autoBind:true});
        this.fetchCourses();
    }

    fetchCourses() {
        fetch(baseUrl + "rest/courses").then(
            (response) => response.json().then(
                (json) => runInAction(()=>this.courses=json)
            )
        )
    }

    postCourse(course) {
        fetch(baseUrl + "rest/courses", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course),
        }).then(
            (response) => response.json().then(
                (json) => runInAction(()=>this.courses.push(json))
            )
        )
    }
}
