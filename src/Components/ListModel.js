import React, { useState, useEffect } from "react";

import "../styles/home.css";

const ListModel = (props) => {
  return (
    <React.Fragment>
      <div className="models">
        <span className="uno">
          <input type="checkbox" />
          <img src="Img/pack.svg" alt="buscar" className="search" />
          <h4>{props.name}</h4>
        </span>
        <span className="dos">
          <h4>Rating: {props.rank}</h4>
        </span>
        <span></span>
      </div>
    </React.Fragment>
  );
};

export default ListModel;
