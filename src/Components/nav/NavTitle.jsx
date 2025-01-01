import React, { useState } from "react"; 
import "./NavHeader.css";
import { PersonCircle } from "react-bootstrap-icons";
import { Mayuscula } from "../../helpers/Mayusculas";


const NavTitle = ({titulo, user}) => {

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">{Mayuscula(titulo)}</h1>
        <nav className="header-nav">
          <ul>
            <li><a><PersonCircle size={20}/> </a></li>
            <li><a>{user}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};


export default NavTitle;
