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
          <h1>
            AccesoriosManzanita <AppleIcon />
          </h1>
        </Link>

        <nav>
          <Link to={"/products/celulares"}>Celulares</Link>
          <Link to={"/products/cargadores  y auriculares"}>
            Cargadores y Auriculares
          </Link>
          <Link to={"/products/Fundas y Templados"}>Fundas y Templados</Link>
          <Link to={"/questions"}>Preguntas Frecuentes</Link>
        </nav>
        <CartWidget />
      </header>
    </>
  );
};
export default Navbar;
