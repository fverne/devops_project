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

    courseExample = [{name: "Test Course", maxcap: 60, id: Math.ceil(Math.max(Math.random()*99999, 10000)), weekday: "Random Weekday2", time: "08:00 - 22:00"}];

    postCourse() {
        fetch(baseUrl + "rest/courses", {
            method: "POST",
            body: JSON.stringify(this.courseExample)
        }).then(
            (response) => response.json.then(
                (json) => runInAction(()=>this.courses.push(json))
            )
        )
    }
}
