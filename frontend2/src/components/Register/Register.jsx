import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "./Register.scss";

const cookies = new Cookies();

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      isAuthenticated: false,
    };
  }

  componentDidMount() {
    this.getSession();
  }

  getSession = () => {
    fetch("/api/session", { credentials: "same-origin" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.is_authenticated) {
          this.setState({ isAuthenticated: true });
        } else {
          this.setState({ isAuthenticated: false });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  whoami = () => {
    fetch("/api/whoami/", {
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("You are logged in as: " + data.username);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Update input change handlers
  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handlePassword2Change = (event) => {
    this.setState({ password2: event.target.value });
  };

  isResponseOk = (response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  };

  login = (event) => {
    event.preventDefault();
    fetch("/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": cookies.get("csrftoken"),
      },
      credentials: "same-origin",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then(this.isResponseOk)
      .then((data) => {
        console.log(data);
        this.setState({
          isAuthenticated: true,
          username: "",
          loggedInUser: data.username,
          password: "",
          error: "",
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "Wrong username or password" });
      });
  };

  register = (event) => {
    event.preventDefault();
    fetch("/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": cookies.get("csrftoken"),
      },
      credentials: "same-origin",
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
      }),
    })
      .then(this.isResponseOk)
      .then((data) => {
        console.log(data);
        this.setState({
          username: "",
          email: "",
          password: "",
          password2: "",
          error: "",
        });
        window.location.href = "/login"; // Redirect to login page after successful registration
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "Registration failed: " + error.message });
      });
  };

  logout = () => {
    fetch("/api/logout/", {
      credentials: "same-origin",
    })
      .then(this.isResponseOk)
      .then((data) => {
        console.log(data);
        this.setState({ isAuthenticated: false, loggedInUser: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (!this.state.isAuthenticated) {
      return (
        <div className="register-container">
          <h2>Register</h2>
          <br />

          <form onSubmit={this.register}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                value={this.state.username}
                name="username"
                onChange={this.handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={this.state.email}
                name="email"
                onChange={this.handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={this.state.password}
                name="password"
                onChange={this.handlePasswordChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="password"
                value={this.state.password2}
                name="password2"
                onChange={this.handlePassword2Change}
              />
            </div>
            <button type="submit">Register</button>
            <div>
              {this.state.error && (
                <small className="text-danger">{this.state.error}</small>
              )}
            </div>
          </form>
        </div>
      );
    }
    <div className="register-container">
      <div className="user-info">
        <span>Welcome, {this.state.loggedInUser}</span>
        <button onClick={this.logout}>Logout</button>
      </div>
    </div>;
  }
}

export default Register;
