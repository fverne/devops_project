const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev environment

const Loginstates = {LOGGING_IN:"Loading", LOGGEDOUT:"Logout", LOGGED_IN:"LoggedIn"};
class TokenStore {
    state = Loginstates.LOGGEDOUT;
    token = null;
    logindata = {username:"",password:""};

    constructor() {
        this.token = localStorage.getItem("loginToken")
    }

    doLogin() {
        this.state=Loginstates.LOGGING_IN;
        fetch(baseUrl + "rest/campusnet/login",{
            method:"POST",
            body:JSON.stringify(this.logindata),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            (response)=> {
                response.text().then(
                    (token)=> {
                        console.log("Got Token: " + token)
                        this.token=token;
                        localStorage.setItem("loginToken",token);
                        this.state=Loginstates.LOGGED_IN;}

                )}
        ).catch(()=>this.state = Loginstates.LOGGEDOUT )
    }

}

export const tokenStore = new TokenStore();
