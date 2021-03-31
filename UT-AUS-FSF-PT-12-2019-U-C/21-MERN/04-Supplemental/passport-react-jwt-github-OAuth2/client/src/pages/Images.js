import React, { Component, Fragment } from "react";
import "../App.css"; 
import AuthManager from "../utils/AuthManager";
import API from "../utils/API";
import Nav from "../components/Nav";

class Images extends Component {

  state = {
    isAuthenticated: AuthManager.isAuthenticated(),
    images: [],
    imageInput: ""
  };

  componentDidMount() {
    if(this.state.isAuthenticated) {
      this.loadImages();
    }
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  loadImages = () => {
    API.getImages()
      .then(res => {
        this.setState({ images: res.data });
      })
      .catch((error) =>{
        AuthManager.logOut();
        this.setState({isAuthenticated: false});
      });
  }

  addImage = () => {
    if(this.state.imageInput && this.state.imageInput !== "") {
    API.addImage(this.state.imageInput)
      .then(res =>{
          console.log(res.data);
          const copyImages = this.state.images;
          this.setState({ images: [...copyImages, res.data], imageInput: "" });
      })
      .catch((error) =>{
        AuthManager.logOut();
        this.setState({isAuthenticated: false, imageInput: "" });
      });
    }
  }

  handleLogOut = () => {
    AuthManager.logOut();
    this.setState({isAuthenticated: false});
  }

  render() {
    return (
      <Fragment>
        <Nav />
        {
          this.state.isAuthenticated ? (
            <Fragment>
              <input type="text" name="imageInput" value={this.imageInput} onChange={this.handleInputChange} />
              <button className="button button-blue" onClick={this.addImage}>
                <span className="fa fa-list-alt"></span>Add Image
              </button>
              {
                this.state.images.map((image) => <img key={image._id} src={image.link} alt="image" /> )
              }
            </Fragment>
          ) : (
            <h3>Sorry your unauthorized to access this page.</h3>
          )
        }
      </Fragment>
    );
  }
}

export default Images;