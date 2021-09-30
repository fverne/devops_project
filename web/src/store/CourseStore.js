import {makeObservable, observable} from "mobx";

export default class CourseStore {
    constructor() {
        makeObservable(this, {
            courses: observable,
        })
    }

    courses = [
        {
            name: "Devops",
            maxcap: 50,
            id: "62582",
            time: "08:00 - 12:00",
            weekday: "Tuesday",
        },
        {
            name: "Programming in cpp",
            maxcap: 250,
            id: "02393",
            time: "18:00 - 22:00",
            weekday: "Tuesday",
        },
        {
            name: "Network Security",
            maxcap: 15,
            id: "62530",
            time: "13:00 - 17:00",
            weekday: "Monday",
        }]
}
