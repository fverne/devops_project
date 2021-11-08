import {makeObservable, observable, runInAction} from "mobx";
import {tokenStore} from "./TokenStore";



const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev environment

export default class CourseStore {
    courses = [
        "loading courses..."
    ];

    constructor() {
        //makeAutoObservable(this,{},{autoBind:true});
        makeObservable(this, {
            courses: observable
        })
    }

    fetchCourse(courseNumber) {
        const token = tokenStore.token;

        return fetch(baseUrl + "rest/courses/" + courseNumber, {
            headers: {
                Authorization: token
            }
        }).then(
            (response) => response.json().then(
                (json) => {
                    runInAction(() => this.courses = json);
                    return json;
                }
            ).catch((e) => {
                console.error(e)
            })
        )
    }

    fetchCourses() {
        const token = tokenStore.token;
        let state = tokenStore.state;
        this.loading = state.LOADING;
        fetch(baseUrl + "rest/courses", {
            headers: {
                Authorization: token
            }
        }).then(
            (response) => response.json().then(
                (json) => runInAction(()=>this.courses=json)
            )
        ).catch(
            (error) => {
                console.error('Error:', error);
            }
        )
    }

    postCourse(course) {
        const token = tokenStore.token;
        fetch(baseUrl + "rest/courses", {
            method: "POST",
            headers: {
                Authorization: token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course),
        }).then(
            (response) => response.json().then(
                (json) => runInAction(()=>this.courses.push(json))
            )
        ).catch((e) => {
            console.log(e)
        }
        )
    }
}
