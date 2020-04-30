import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";

import app from "../Database/base.js";
import { AuthContext } from "../Database/Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
        <label>
          Correo
          <input name="email" type="email" />
        </label>
        <label>
          Contraseña
          <input name="password" type="password" />
        </label>
        <button type="submit">Iniciar Sesion</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
