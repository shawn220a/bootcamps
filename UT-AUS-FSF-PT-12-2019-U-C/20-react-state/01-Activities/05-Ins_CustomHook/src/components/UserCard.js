import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import profileImage from "../assets/images/profile.png";

const UserCard = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="container">
      <div className="card mx-auto" style={{ width: "400px" }}>
        <img
          className="center-block mt-3"
          style={{ width: "200px", margin: "0 auto" }}
          src={profileImage}
          alt="profile"
        />
        <div className="card-body">
          <h4 className="card-title">{userContext.name.value}</h4>
          <p className="card-text">{userContext.status.value}</p>
          <a href="#" className="btn btn-primary">
            Save Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
