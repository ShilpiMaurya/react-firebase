import React, { useState, useEffect } from "react";
import fire from "./fire";
import Home from "./Home";
import Login from "./Login";
import "./App.css";

const App = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    authListener();
  });
  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser();
      }
    });
  };

  return <div className="container">{user ? <Home /> : <Login />}</div>;
};

export default App;
