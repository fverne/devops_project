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

    if (tokenStore.state !== "LoggedIn") {
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
