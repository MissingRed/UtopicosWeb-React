import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import "../styles/home.css";
import ListModel from "../Components/ListModel";
import axios from "axios";

// import app from "../Components/base";
// import * as firebase from "firebase/app";

const Home = () => {
  const [lista] = useState([1, 2]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      await axios
        .get("http://danielrf.com/api_vuforia/GetAllTargets.php")
        .then((res) => {
          console.log(res.data.results.length);
          setData(res.data.results);
        });
    } catch (error) {}
  };

  const fetchData1 = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("http://danielrf.com/api_vuforia/PostNewTarget.php", {
      mode: "no-cors",
      method: "POST",
      body: data,
    });
    alert("enviado");
  };

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
                  <h2>{data.length}</h2>
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
          <div className="formulario">
            <form onSubmit={fetchData1}>
              <p>Nombre</p>
              <input id="targetName" name="targetName" type="text" />
              <p>Tarjeta</p>
              <input id="fileToUpload" name="fileToUpload" type="file" />
              <p>Video</p>
              <input id="metadata" name="metadata" type="file" />
              <input
                id="type"
                name="type"
                type="text"
                defaultValue="1"
                className="type"
              />
              <div className="boton">
                <button>Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
