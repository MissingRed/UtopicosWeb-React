import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "../src/Database/Auth";
import PrivateRoute from "../src/Components/PrivateRoute";

import Home from "../src/Pages/Home";
import Login from "../src/Pages/Login";
import Cloud from "../src/Pages/Cloud";
import Info from "../src/Pages/Info";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/cloud" component={Cloud} />
          <PrivateRoute exact path="/info" component={Info} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
