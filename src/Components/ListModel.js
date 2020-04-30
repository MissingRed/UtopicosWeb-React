import React from "react";
import "../styles/home.css";

const ListModel = () => {
  return (
    <React.Fragment>
      <div className="models">
        <span className="uno">
          <input type="checkbox" />
          <img src="Img/folderRed.svg" alt="buscar" className="search" />
          <h4>Nombre</h4>
        </span>
        <span>
          <h4>02/15/20</h4>
        </span>
        <span></span>
      </div>
    </React.Fragment>
  );
};

export default ListModel;
