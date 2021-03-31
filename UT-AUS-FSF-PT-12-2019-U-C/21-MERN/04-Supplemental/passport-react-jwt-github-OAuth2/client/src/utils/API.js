import axios from "axios";
import Cookies from "js-cookie";
import AuthManager from "./AuthManager";

export default {
  getImages: () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('jwt')}`;
    return (AuthManager.isAuthenticated() && axios.get("/api/image")) || Promise.reject("UNAUTHORIZED");
  },
  addImage: (image) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('jwt')}`;
    return (AuthManager.isAuthenticated() && axios.post("/api/image", {link: image})) || Promise.reject("UNAUTHORIZED");
  }
};