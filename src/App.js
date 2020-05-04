import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../src/Database/Auth";
import PrivateRoute from "../src/Components/PrivateRoute";

import Home from "../src/Pages/Home";
import Login from "../src/Pages/Login";
import Cloud from "../src/Pages/Cloud";
import Info from "../src/Pages/Info";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/cloud" component={Cloud} />
          <PrivateRoute exact path="/info" component={Info} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
