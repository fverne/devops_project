import {makeObservable, observable, runInAction} from "mobx";

import {tokenStore} from "./TokenStore";

const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev environment


const Loginstates = {LOGGING_IN:"Loading", LOGGEDOUT:"Logout", LOGGED_IN:"LoggedIn"};
export default class UserStore {

    state = Loginstates.LOGGEDOUT;
    token = null;
    logindata = {username:"",password:""};

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
        this.state=Loginstates.LOGGING_IN;
        fetch(baseUrl + "rest/users",{
            method:"POST",
            body:JSON.stringify(this.logindata),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            (response)=> {
                if (!response.ok) {
                    console.log(response);
                    this.state = Loginstates.LOGGEDOUT;
                } else {
                    response.text().then(
                        (token)=> {
                            console.log("Got Token: " + token)
                            this.token=token;
                            localStorage.setItem("loginToken",token);
                            this.state=Loginstates.LOGGED_IN;
                        }
                    )
                }
            }
        ).catch(()=>this.state = Loginstates.LOGGEDOUT )
    }





 postUser(user) {
        const token = tokenStore.token;
        fetch(baseUrl + "rest/users" + user, {
            method: "POST",
            headers: {
                Authorization: token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
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
