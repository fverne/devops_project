import React from "react";
import Box from "@mui/material/Box";
import {FormControl, Input, InputLabel} from "@mui/material";
import {tokenStore} from "../store/TokenStore";
import Button from "@mui/material/Button";

export default function Login() {
    return(
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
            <FormControl variant="standard">
                <Button onClick={()=>tokenStore.doLogin()}>Login</Button>
            </FormControl>
        </Box>
    )
}