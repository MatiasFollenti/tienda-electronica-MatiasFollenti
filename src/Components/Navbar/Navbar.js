import React from "react";
import "./Navbar.css";
import logotipo from "../../images/logotipo.png";
import AppleIcon from "@mui/icons-material/Apple";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <img src={logotipo} alt="Logo de la tienda" />
        <Link to={'/'}>
          <h1 className="tituloNavBar">
            AccesoriosManzanita <AppleIcon />
          </h1>
        </Link>

        <nav>
          <Link to={"/products/celulares"} className="linksNavbar">Celulares</Link>
          <Link to={"/products/cargadores  y auriculares"} className="linksNavbar">
            Cargadores y Auriculares
          </Link>
          <Link to={"/products/Fundas y Templados"} className="linksNavbar">Fundas y Templados</Link>
          <Link to={"/questions"} className="linksNavbar" >Preguntas Frecuentes</Link>
        </nav>
        <CartWidget />
      </header>
    </>
  );
};
export default Navbar;
