import React from "react";
import Box from "@mui/material/Box";
import {FormControl, Input, InputLabel} from "@mui/material";
import {tokenStore} from "../store/TokenStore";
import Button from "@mui/material/Button";
import {CardMedia} from "@material-ui/core";

export default function Login() {
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
                <Button variant="contained" color="secondary" style={btnstyle} fullWidth  > Login with inside</Button>
                <grid>

                    <CardMedia

                        src="C:\Users\sande\Documents\GitHub\login_page\src\dtu_icon.jpg"
                        title="dtu icon"
                        style={{width: "100%", height: "100%", objectFit: "auto"}}

                    />
                </grid>

            </Paper>
        </Grid>
    )
}