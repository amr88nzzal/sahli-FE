// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import superagent from "superagent";
import cookie from "react-cookies";

export const LoginContext = React.createContext();

export default function LoginProvider(props) {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ username: "" });
  //const [api, setApi] = useState({ ip: "192.168.0.73", port: 10105, apiKey: "r0cc266dc5544bfd9232b27ebdfcc7fd" });
  const api = {
    ip: "",
    port: 10105,
    apiKey: "",
  };
  //const [loginInfo, setLoginInfo] = useState({});
  const loginFunction = async (username, password) => {
    console.log("------Login Function------>>", username, password);
    console.log("------URL Login ------>>", `${api.ip}:${api.port}/login/`);
    try {
      const response = await superagent
        .get(`${api.ip}:${api.port}/login/`)
        .auth(`${username}`, `${password}`)
        //.set("User-Agent", "{{useragent}}")
        .set("Accept", "application/json")
        .set("x-api-key", `${api.apiKey}`);
      console.log("------Login Function------>>", response.body);
      //cookie.save("x-session-id", response.body.session_id); // save session id
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
  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );
}
