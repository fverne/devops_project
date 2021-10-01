import {makeAutoObservable, makeObservable, observable, runInAction} from "mobx";


const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev environment

export default class CourseStore {
    courses = [
        "loading courses..."
    ];

    constructor() {
        makeAutoObservable(this,{},{autoBind:true});
        this.fetchCourses();
    }

    fetchCourses () {
        fetch(baseUrl + "rest/courses").then(
            (response) => response.json().then(
                (json) => runInAction(()=>this.courses=json)
            )
        )
    }
}
