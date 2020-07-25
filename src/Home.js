import React, { Component } from "react";
import fire from "./fire";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logout = () => {
    fire.auth().signOut();
  };
  render() {
    return (
      <div>
        <h1>You are logged in !!!</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}
export default Home;

// import React from "react";
// import fire from "./fire";

// const Home = () => {
//   const logout = () => {
//     fire.auth().signOut();
//   };
//   return (
//     <div>
//       <h1>Welcome to my page</h1>
//       <h1>You are logged in !!!</h1>
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// };
// export default Home;
