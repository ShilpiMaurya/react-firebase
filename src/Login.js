import React, { Component } from "react";
import fire from "./fire";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u);
      })
      .catch(err => {
        console.log(err);
      });
  };

  signup = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Enter email address"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br />
          <br />
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Enter password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <br />
          <br />
          <button onClick={this.login}>Login</button>
          <button onClick={this.signup}>SignUp</button>
        </form>
      </div>
    );
  }
}

export default Login;

// import React, { useState } from "react";
// import fire from "./fire";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleChangeEmail = e => {
//     setEmail({
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleChangePassword = e => {
//     setPassword({
//       [e.target.name]: e.target.value
//     });
//   };

//   const login = e => {
//     e.preventDefault();
//     fire
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(users => {
//         console.log(users);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   const signup = e => {
//     e.preventDefault();
//     fire
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(users => {
//         console.log(users);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   return (
//     <>
//       <form>
//         <input
//           name="email"
//           type="email"
//           id="email"
//           placeholder="enter email address"
//           onChange={handleChangeEmail}
//           value={email}
//         />
//         <br />
//         <br />
//         <input
//           name="password"
//           type="password"
//           id="password"
//           placeholder="enter password"
//           onChange={handleChangePassword}
//           value={password}
//         />
//         <br />
//         <br />
//         <button onClick={login}>Login</button>
//         <button onClick={signup}>SignUp</button>
//       </form>
//     </>
//   );
// };

// export default Login;
