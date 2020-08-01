import React from "react";
import fire from "./fire";

const Home = () => {
  const logout = () => {
    fire.auth().signOut();
  };
  return (
    <div>
      <h1>Welcome to my page</h1>
      <h1>You are logged in !!!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
export default Home;
