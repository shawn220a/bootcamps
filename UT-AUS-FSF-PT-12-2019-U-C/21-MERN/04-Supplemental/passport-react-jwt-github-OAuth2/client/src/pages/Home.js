import React, { Component } from "react";
import "../App.css"; 
import AuthManager from "../utils/AuthManager";
import Nav from "../components/Nav";

class Home extends Component {

  state = {
    isAuthenticated: AuthManager.isAuthenticated()
  };

  handleLogOut = () => {
    AuthManager.logOut();
    this.setState({isAuthenticated: false});
  }

  render() {
    return (
      <div>
        <Nav />
        {
          this.state.isAuthenticated ? (
            <button className="button button-blue" onClick={this.handleLogOut}>
            LOGOUT
            </button>
          ) : (
            <a className="button button-blue" href={process.env.REACT_APP_PROD_URL_LOGIN || "http://localhost:3001/login"}>
            LOGIN
            </a>
          )
        
        }
      </div>
    );
  }
}

export default Home;