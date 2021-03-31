import React from "react";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: props.theme === "green" ? "#5cb85c" : "white",
        textAlign: "center"
      }}
    >
      <div
        style={{
          color: props.theme === "light" ? "white" : "black",
          textAlign: "center"
        }}
      >
        The theme is: {props.theme}
      </div>
    </div>
  );
}

export default Card;
