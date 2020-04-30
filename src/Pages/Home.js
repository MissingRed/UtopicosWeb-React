import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import "../styles/home.css";
import ListModel from "../Components/ListModel";
// import app from "../Components/base";
// import * as firebase from "firebase/app";

const Home = () => {
  const [lista] = useState([1, 2]);

  return (
    <React.Fragment>
      <Sidebar></Sidebar>

      <div className="contenedor">
        <div className="principal">
          <div className="navbar">
            <img src="Img/reducido.png" alt="Logo" />
            <img src="Img/search.svg" alt="buscar" className="search" />
          </div>

          <div className="contenido">
            <h3>Contenido</h3>
            <div className="box">
              <div className="modelos">
                <div className="titulo">
                  <img src="Img/target.svg" alt="buscar" className="icon" />
                  <h4>Tarjetas</h4>
                </div>
                <div className="number">
                  <h2>10</h2>
                </div>
              </div>
              <div className="modelos">
                <div className="titulo">
                  <img src="Img/objeto.svg" alt="buscar" className="icon" />
                  <h4>Objetos</h4>
                </div>
                <div className="number">
                  <h2>15</h2>
                </div>
              </div>
              <div className="modelos">
                <div className="titulo">
                  <img src="Img/folder.svg" alt="buscar" className="search" />
                  <h4>Modelos</h4>
                </div>
                <div className="number">
                  <h2>5</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="operaciones">
            <div className="titulo">
              <h3>Archivos</h3>
            </div>
            <div className="botones">
              <button className="delete">Eliminar</button>
              <button className="add">Agregar</button>
            </div>
          </div>
          <div className="modelsTag">
            <span className="uno">
              <input type="checkbox" />
              <img src="Img/folder.svg" alt="buscar" className="search" />
              <h4>Nombre</h4>
            </span>
            <span>
              <h4>Fecha</h4>
            </span>
            <span></span>
          </div>
          <div className="modelsBox">
            {lista.map((itemLista) => {
              return <ListModel key={itemLista} />;
            })}
          </div>
        </div>
        <div className="lateral">
          <h3>Agregar Modelo</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
