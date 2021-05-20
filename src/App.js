import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import AuthLayout from "./components/authLayout";
import BaseLayout from "./components/baseLayout";
import Home from "./components/home/Home";

import DepartmentType from "./components/settings/DepartmentType/DepartmentType";
import WorkingHour from "./components/settings/WorkingHour/WorkingHour";

//////////////////////////END OF SETTINGS COMPONENT CALL////////////////////////////////

function App() {
  return (
    <Router>
      <Switch>

      <Route exact path="/">
          <Redirect to="/Signin" />
        </Route>

        <AuthLayout exact path="/Signin" component={Signin}  />
        <AuthLayout exact path={["/Signup"]} component={Signup} />
        

        {/* <React.Fragment> */}
        <div className="App">
        <BaseLayout exact path="/Home" component={Home} />
        <BaseLayout exact path="/DepartmentType" component={DepartmentType} />
        <BaseLayout exact path="/WorkingHour" component={WorkingHour} />
        </div>
        {/* </React.Fragment> */}

      </Switch>
    </Router>
  );
}
export default App;
