import React from "react";

const UserContext = React.createContext({
  name: {
    value: "",
    onChange: () => {}
  },
  image: "",
  status: {
    value: "",
    onChange: () => {}
  },
  lifeLongLearner: false,
  excitementLevel: 0
});

export default UserContext;
