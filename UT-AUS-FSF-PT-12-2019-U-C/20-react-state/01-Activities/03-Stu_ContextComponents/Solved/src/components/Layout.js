import React from "react";

const Layout = props => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Consuming Context</h1>
      <div style={{ margin: "0 auto" }}>{props.children}</div>
    </div>
  );
};

export default Layout;
