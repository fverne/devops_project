import {makeObservable, observable, runInAction} from "mobx";

import {tokenStore} from "./TokenStore";

const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev environment


const Loginstates = {LOGGING_IN:"Loading", LOGGEDOUT:"Logout", LOGGED_IN:"LoggedIn"};
export default class UserStore {

    users = [
        "loading Users..."
    ];


    constructor() {
        //makeAutoObservable(this,{},{autoBind:true});
        makeObservable(this, {
            Users: observable
        })
    }

    fetchUser(user) {
        const token = tokenStore.token;

        return fetch(baseUrl + "rest/users/" + user, {
            headers: {
                Authorization: token
            }
        }).then(
            (response) => response.json().then(
                (json) => {
                    runInAction(() => this.Users = json);
                    return json;
                }
            ).catch((e) => {
                console.error(e)
            })
        )
    }



    postUser(user) {
        const token = tokenStore.token;
        fetch(baseUrl + "rest/users/" + user, {
            method: "POST",
            headers: {
                Authorization: token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UserName),
        }).then(
            (response) => response.json().then(
                (json) => runInAction(() => this.users.push(json))
            )
        ).catch((e) => {
                console.log(e)
            }
        )
    }

}
