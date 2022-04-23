import React from "react";
const Authcontext = React.createContext({
  isLoggedIn: false,
  onConfirmation: () => {},
});
export default Authcontext;
