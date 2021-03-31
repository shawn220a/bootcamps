import React, { useEffect } from "react";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";
import useUserModel from "./utils/useUserModel";
import UserContext from "./utils/UserContext";
import "./App.css";

const App = () => {
  const userModel = useUserModel();

  useEffect(() => {
    console.log(userModel);
  }, [userModel]);

  return (
    <div className="container text-center">
      <h1 className="mt-4 mb-4">Welcome to the Person Creator!</h1>
      <div className="jumbotron">
        <UserContext.Provider value={userModel}>
          <UserForm />
          <UserCard />
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default App;
