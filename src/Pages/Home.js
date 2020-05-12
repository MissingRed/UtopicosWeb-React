import React, { useState, useEffect } from "react";

import Sidebar from "../Components/Sidebar";
import "../styles/home.css";
import "../styles/input.css";

import ListModel from "../Components/ListModel";
import Loader from "../Components/Loader";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Home = () => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState([]);
  const [openAgregar, setOpenAgregar] = useState(false);
  const [loading, setLoading] = useState(false);

  const Alerta = withReactContent(Swal);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let cont = 0;
    try {
      await axios
        .get("http://danielrf.com/api_vuforia/GetAllTargets.php")
        .then((res) => {
          console.log(res.data);

          for (const valor in res.data) {
            if (res.data[valor].target_record.active_flag === true) {
              cont++;
            }
          }
          setActive(cont);

          console.log(res.data[0].target_record.active_flag);
          setData(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPost = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    setLoading(true);
    await fetch("http://danielrf.com/api_vuforia/PostNewTarget.php", {
      mode: "no-cors",
      method: "POST",
      body: data,
    })
      .then(function (res) {
        return res;
      })
      .then(function (res) {
        Alerta.fire({
          position: "center",
          icon: "success",
          title: "El Target se ah subido con exito",
          showConfirmButton: false,
          timer: 1500,
        });
        fetchData();
        setLoading(false);
        console.log(res);
      })
      .catch(function () {
        Alerta.fire({
          position: "center",
          icon: "error",
          title: "Error al subir el Target",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
      });
    setLoading(false);
  };

  return (
    <React.Fragment>
      <Sidebar></Sidebar>

      <div className="contenedor">
        <div className="principal">
          <div className="fragment">
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
                    <h4>Targets</h4>
                  </div>
                  <div className="number">
                    <h2>{data.length}</h2>
                  </div>
                </div>
                <div className="modelos1">
                  <div className="titulo">
                    <img src="Img/target.svg" alt="buscar" className="icon" />
                    <h4>Activos</h4>
                  </div>
                  <div className="number">
                    <h2>{active}</h2>
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
                <button className="add" onClick={() => setOpenAgregar(true)}>
                  Agregar
                </button>
                {openAgregar ? (
                  <div
                    className="fix"
                    onClick={() => setOpenAgregar(false)}
                  ></div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="listado">
            {/* <div className="modelsTag">
              <span className="uno">
                <input type="checkbox" />
                <img src="Img/folder.svg" alt="buscar" className="search" />
                <h4>Nombre</h4>
              </span>
              <span>
              <h4>Fecha</h4>
            </span>
              <span></span>
            </div> */}
            <div className="modelsBox">
              {data.map((valores) => {
                return (
                  <React.Fragment key={valores.target_record.name}>
                    <ListModel
                      name={valores.target_record.name}
                      rank={valores.target_record.tracking_rating}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <div className="lateral">
          {openAgregar ? (
            <div className="form">
              <h3>Agregar Target</h3>
              {loading ? (
                <div className="container-loader">
                  <Loader />
                  <h3>Cargando</h3>
                </div>
              ) : (
                <div className="formulario" id="form">
                  <form onSubmit={fetchPost}>
                    <p>Nombre</p>
                    <input
                      id="targetName"
                      name="targetName"
                      type="text"
                      required
                    />
                    <p>Tarjeta</p>
                    {/* <div class="input-group mb-3">
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="inputGroupFile01"
                        />
                        <label class="custom-file-label" for="inputGroupFile01">
                          Elija el archivo
                        </label>
                      </div>
                    </div> */}
                    <label className="file">
                      <input
                        id="fileToUpload"
                        name="fileToUpload"
                        type="file"
                        required
                        aria-label="File browser example"
                      ></input>
                      <span className="file-custom"></span>
                    </label>
                    {/* <input
                      id="fileToUpload"
                      name="fileToUpload"
                      type="file"
                      required
                    /> */}
                    <p>Video</p>
                    <label className="file">
                      <input
                        id="metadata"
                        name="metadata"
                        type="file"
                        required
                        aria-label="File browser example"
                      ></input>
                      <span className="file-custom"></span>
                    </label>
                    {/* <input id="metadata" name="metadata" type="file" required /> */}
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
              )}
            </div>
          ) : (
            <div className="infoPanel">
              <h3>Selecciona algunas de las Opciones</h3>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
