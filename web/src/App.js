import './App.css';
import Navbar from './components/Navbar';
import {Switch, Route} from "react-router-dom";
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import Assignments from "./pages/Assignments"
import Content from "./pages/Content"
import Calendar from "./pages/Calendar"
import Support from "./pages/Support"
import CourseSingle from "./pages/CourseSingle";
import {tokenStore} from "./store/TokenStore";
import {observer} from "mobx-react-lite";
import Login from "./pages/Login";


function App() {
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    const token = getParameterByName("token");
    if (token!=null && token.length>0) {
        Store token and redirect to baseURL
        localStorage.setItem("portal-jwt-Token",token);
        console.log(localStorage.getItem("portal-jwt-Token"))
        tokenStore.state = "LoggedIn";
        //window.location.replace("/");
    }

    if (tokenStore.state !== "LoggedIn") {
      window.location.replace("/rest/campusnet/login")
        return (
            <Login/>
        )
    }

  return (
    <>
        <Navbar />
        <Switch>
            <Route exact path="/">
                <Home data-testid="hometest"/>
            </Route>
            <Route path='/courses/:course'>
                   <CourseSingle/>
            </Route>
            <Route path='/courses'>
                   <Courses/>
            </Route>
            <Route path='/assignments' exact component={Assignments}/>
            <Route path='/content' exact component={Content}/>
            <Route path='/calendar' exact component={Calendar}/>
            <Route path='/support' exact component={Support}/>
            <Route render={()=><h1>404</h1>}/>
        </Switch>
    </>
  );
}

export default observer(App);
