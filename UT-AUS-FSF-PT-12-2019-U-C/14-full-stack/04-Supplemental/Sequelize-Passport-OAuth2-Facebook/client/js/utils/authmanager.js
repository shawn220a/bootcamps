class AuthManager {
  // eslint-disable-next-line no-empty-function
  constructor() {}

  isAuthenticated() {
    const jwt = Cookies.get("jwt");
    return jwt !== null && jwt !== "";
  }

  logOut() {
    Cookies.remove("jwt");
  }
}

// eslint-disable-next-line no-unused-vars
const auth = new AuthManager();
