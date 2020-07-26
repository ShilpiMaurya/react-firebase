import React, { Component } from "react";
import fire from "./fire";
import Home from "./Home";
import Login from "./Login";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <div className="container">
        <div>{this.state.user ? <Home /> : <Login />}</div>
      </div>
    );
  }
}

export default App;

// import React, { useState, useEffect } from "react";
// import fire from "./fire";
// import Home from "./Home";
// import Login from "./Login";

// const App = () => {
//   const [user, setUser] = useState({});
//   useEffect(() => {
//     authListener();
//   });
//   const authListener = () => {
//     fire.auth().onAuthStateChanged(user => {
//       if (user) {
//         setUser({ user });
//       } else {
//         setUser({});
//       }
//     });
//   };

//   return <div>{user ? <Home /> : <Login />}</div>;
// };

// export default App;
