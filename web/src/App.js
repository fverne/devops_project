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

function App() {
  return (
    <>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/courses/:course' exact component={CourseSingle}/>
            <Route path='/courses' exact component={Courses}/>
            <Route path='/assignments' exact component={Assignments}/>
            <Route path='/content' exact component={Content}/>
            <Route path='/calendar' exact component={Calendar}/>
            <Route path='/support' exact component={Support}/>
            <Route render={()=><h1>404</h1>}/>
        </Switch>

    </>
  );
}

export default App;
