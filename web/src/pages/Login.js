import React from "react";
import {FormControl, Input, InputLabel} from "@mui/material";
import {tokenStore} from "../store/TokenStore";
import Button from "@mui/material/Button";
import {Avatar, Paper} from "@material-ui/core";
import Grid from "@mui/material/Grid";
import {LockOutlined} from "@mui/icons-material";
import Config from "../config";

export default function Login() {
    let studentExample;
    studentExample ={userName: "s21" + Math.ceil(Math.max(Math.random()*9999, 1000)), password: "PlsLogin", role: "Student" }

    let teacherExample;
    teacherExample ={userName: "Teacher" + Math.ceil(Math.max(Math.random()*99, 10)), password: "PlsLogin", role: "Teacher" }

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1a83ff'}
    const btnstyle={margin:'8px 0', backgroundColor: '#1a83ff'}


    const cnLogin = () =>{
        const redirectUrl = Config.ApiPath ? Config.ApiPath + Config.campusNetServiceUrl : Config.campusNetServiceUrl;
        window.location.replace(redirectUrl);
    }

    return(
        <Grid
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlined/></Avatar>
                    <h2>DTU INSIDE</h2>
                </Grid>

                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="username" value={tokenStore.logindata.username}  fullWidth>Username</InputLabel>
                    <Input id="username" onChange={(e) => tokenStore.logindata.username=e.target.value} />
                </FormControl>
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="password"  value={tokenStore.logindata.password} fullWidth>Password</InputLabel>
                    <Input id="password"  onChange={(e) => tokenStore.logindata.password=e.target.value } />
                </FormControl>


                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={()=>tokenStore.doLogin()}>Sign in</Button>
                <Button variant="contained" color="secondary" style={btnstyle} fullWidth onClick={cnLogin}  > Login with inside</Button>
                <Button variant="contained" color="secondary" style={btnstyle} fullWidth onClick={() => console.log(studentExample)} > Create Student</Button>
                <Button variant="contained" color="secondary" style={btnstyle} fullWidth onClick={() => console.log(teacherExample)} > Create Teacher</Button>
            </Paper>
        </Grid>
    )
}