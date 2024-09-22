// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import superagent from "superagent";
import cookie from "react-cookies";

export const LoginContext = React.createContext();

export default function LoginProvider(props) {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ username: "" });
  //const [loginInfo, setLoginInfo] = useState({});
  const loginFunction = async (username, password, ip, port, apiKey) => {
    console.log("------Login Function------>>", username, password);
    const encodedCredentials = utf8ToB64(`${username}:${password}`);
    console.log("------user+pass encoded ------>>", encodedCredentials);
    console.log("------URL Login ------>>", `${ip}:${port}/login/`, apiKey);
    try {
      const response = await superagent
        .get(`${ip}:${port}/login/`)
        .set("Authorization", `Basic ${encodedCredentials}`)
        // .set("User-Agent", "{{useragent}}")
        .set("Accept", "application/json")
        .set("x-api-key", `${apiKey}`);
      console.log("------Login Function------>>", response.body);
      cookie.save("x-session-id", response.body.session_id); // save session id
    } catch (err) {
      console.log("------Login Function (Error)------>>", err);
    }
  };
  const logoutFunction = () => {
    console.log("------Logout Function------>>");
    setLoggedIn(false);
    setUser({});
    cookie.remove("x-session-id");
  };

  // const validateMyToken = async (data) => {
  //   if (data) {
  //     const username = data.username;
  //     console.log(data.token, "kkkkkkkkkkkkk");

  //     setLoggedIn(true);
  //     setUser(username);
  //     cookie.save("token", data);
  //     console.log(data.token);
  //   } else {
  //     setLoggedIn(false);
  //     setUser({});
  //   }
  // };

  // useEffect(() => {
  // check the token

  //   const session_id = cookie.load("x-session-id");
  //   if (session_id) {
  //     console.log("------session_id from cookies------>>", session_id);
  //   }
  // }, []);

  const state = {
    LoggedIn: LoggedIn,
    loginFunction: loginFunction,
    logoutFunction: logoutFunction,
    user: user,
  };
  function utf8ToB64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );
}
