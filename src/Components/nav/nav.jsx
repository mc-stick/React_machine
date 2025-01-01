import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ItemListContainer from "../listas/ItemListContainer";
import CartWidgets from "../widgets/CartWidgets";
import {
  BoxArrowLeft,
  BoxFill,
  CardChecklist,
  CheckCircleFill,
  Coin,
  HouseFill,
  InfoCircle,
  Newspaper,
  PersonCircle,
  Tools,
  Shop
} from "react-bootstrap-icons";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo">
          <Shop color="green" size={28} /> Bread APP
        </Link>

        <ul className="menu">
          <li>
            <Link className="menu-link" to="/">
              <HouseFill size={28} color="olive" className="centericon" />{" "}
              Inicio
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/credito">
              <Coin size={28} color="orange" className="centericon" />
              Créditos
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/Productos/Maquinas">
              <CheckCircleFill size={28} color="green" className="centericon" />
              Estado
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/Reportes">
              <CardChecklist size={28} color="gray" className="centericon" />
              Reportes
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/Productos/Herramientas">
              <Tools size={28} color="darkgray" className="centericon" />
              Herramientas
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/Productos/Perfil">
              <PersonCircle size={28} color="blue" className="centericon" />
              Perfil
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/Nosotros">
              <Newspaper size={28} color="green" className="centericon" />
              Noticias
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/Contacto">
              <InfoCircle size={28} color="blue" className="centericon" />
              Acerca de
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/" onClick={()=> window.location.reload()}>
              <BoxArrowLeft size={28} color="red" className="centericon" />
              Salir
            </Link>
          </li>
          {/* <li><CartWidgets/></li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
