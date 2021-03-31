// eslint-disable-next-line no-unused-vars
const getUser = () => {
  if (!auth.isAuthenticated()) {
    return Promise.reject("UNAUTHORIZED");
  }

  axios.defaults.headers.common.Authorization = `Bearer ${Cookies.get("jwt")}`;
  return axios.get("/api/user_data");
};
