import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import * as firebase from "firebase/app";
import app from "../Database/base";

const Sidebar = () => {
  const [openPerfil, setOpenPerfil] = useState(false);

  function formatName() {
    var correo;
    var usuario = firebase.auth().currentUser;

    if (usuario != null) {
      usuario.providerData.forEach(function (perfil) {
        correo = perfil.email;
      });

      return correo;
    }
  }
  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="container">
          <div className="perfil" onClick={() => setOpenPerfil(!openPerfil)}>
            <img src="Img/img.svg" alt="Usuario" className="user" />
          </div>
          {openPerfil ? (
            <div className="modal">
              {" "}
              <p>{formatName()}</p>
              <button onClick={() => app.auth().signOut()}>
                Cerrar Sesión
              </button>
            </div>
          ) : (
            ""
          )}
          <NavLink to="/" activeClassName="selectedNav" className="links">
            <img src="Img/tablero.svg" alt="Inicio" className="dash" />
          </NavLink>

          <NavLink to="/cloud" activeClassName="selectedNav" className="links">
            <img src="Img/cloud.svg" alt="Nube" className="cloud" />
          </NavLink>
        </div>
        <NavLink to="/info" activeClassName="selectedNav" className="links">
          <img src="Img/Info.svg" alt="Info" className="info" />
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
