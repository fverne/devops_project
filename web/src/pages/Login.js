import React from "react";
import Box from "@mui/material/Box";
import {FormControl, Input, InputLabel} from "@mui/material";
import {tokenStore} from "../store/TokenStore";
import Button from "@mui/material/Button";
import {CardMedia} from "@material-ui/core";
import UserStore from "../store/UserStore";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default function Login() {
    let studentExample;
    studentExample ={userName: "s21" + Math.ceil(Math.max(Math.random()*9999, 1000)), password: "PlsLogin", role: "Student" }

    let teacherExample;
    teacherExample ={userName: "Teacher" + Math.ceil(Math.max(Math.random()*99, 10)), password: "PlsLogin", role: "Teacher" }




    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1a83ff'}
    const btnstyle={margin:'8px 0', backgroundColor: '#1a83ff'}

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
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
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
                <Button variant="contained" color="secondary" style={btnstyle} fullWidth onClick={()=>tokenStore.doCampusLogin()}  > Login with inside</Button>
                <Button variant="contained" color="secondary" style={btnstyle} fullWidth onClick={() => UserStore.postUser(studentExample)} > Create Student</Button>
                <Button variant="contained" color="secondary" style={btnstyle} fullWidth onClick={() => UserStore.postUser(teacherExample)} > Create Teacher</Button>
                <grid>


                </grid>

            </Paper>
        </Grid>
    )
}