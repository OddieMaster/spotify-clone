import React from "react";
import "../login/index.css";
import { loginURL, getTokenFromURL } from "../spotify";
// import { Container } from './styles';

function Login() {
    console.log('getTokenFromURL', getTokenFromURL());
    return (
        <div className="login">
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="spotifyLogo"
            ></img>
            <a href={loginURL}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;
