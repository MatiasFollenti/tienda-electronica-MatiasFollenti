import React from "react";
import "./Navbar.css"
import logotipo from "../../images/logotipo.png"
import AppleIcon from '@mui/icons-material/Apple';
import CartWidget from "./CartWidget"

const Navbar= ()=>{
    return (
        <>
        <header>
        <img src={logotipo} alt="Logo de la tienda" />
        <h1>AccesoriosManzanita <AppleIcon/></h1>
            <nav>
                <a href="#">Iphones</a> 
                <a href="#">Cargadores y Auriculares</a>
                <a href="#">Templados y fundas</a> 
                <a href="#">Preguntas Frecuentes</a> 
            </nav>
        <CartWidget/>
        </header>
        </>
    )
}
export default Navbar