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
import {FormControl, Input, InputLabel, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useObserver} from "mobx-react-lite";


function App() {
  return useObserver(() =>
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

        <h2>Loginstatus = {tokenStore.state}</h2>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <FormControl variant="standard">
                <InputLabel htmlFor="username" value={tokenStore.logindata.username}>Username</InputLabel>
                <Input id="username" onChange={(e) => tokenStore.logindata.username=e.target.value}/>
            </FormControl>
            <FormControl variant="standard">
                <InputLabel htmlFor="password" value={tokenStore.logindata.password}>Password</InputLabel>
                <Input id="password" onChange={(e) => tokenStore.logindata.password=e.target.value}/>
            </FormControl>
            <Button onClick={()=>tokenStore.doLogin()}>Login</Button>
        </Box>

    </>
  );
}

export default App;
