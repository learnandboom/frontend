import { useState } from "react";
import Logout from "./component/Logout";
import LoginBtn from "./component/LoginBtn";
function App() {
  const islogin = true;
  // return islogin && <Logout />;
  // return islogin ? <Logout /> : <LoginBtn />;
  // if (islogin) {
  //   return <Logout />;
  // } else {
  //   return <LoginBtn />;
  // }
  return (
    <div>
      <h1>this is a login or logout page</h1>
      <div> {islogin ? <LoginBtn /> : <Logout />} </div>
    </div>
  );
}

export default App;
