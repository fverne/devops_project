import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from "react-router-dom";

//Some code to extract a potential token....
const token = getParameterByName("token");
console.log(token);
if (token!=null && token.length>0){
    //Store token and redirect to baseURL
    localStorage.setItem("loginToken",token);
    window.location.replace("/");
}


ReactDOM.render(
    <HashRouter>
    <App />
    </HashRouter>,
  document.getElementById('root')
);


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    //name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
