import React, { useState } from "react";
import fire from "./fire";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const signup = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(users => {
        console.log(users);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <form>
        <input
          name="email"
          type="email"
          id="email"
          placeholder="enter email address"
          onChange={handleChangeEmail}
          value={email}
        />
        <br />
        <br />
        <input
          name="password"
          type="password"
          id="password"
          placeholder="enter password"
          onChange={handleChangePassword}
          value={password}
        />
        <br />
        <br />
        <button onClick={login}>Login</button>
        <button onClick={signup}>SignUp</button>
      </form>
    </>
  );
};

export default Login;
