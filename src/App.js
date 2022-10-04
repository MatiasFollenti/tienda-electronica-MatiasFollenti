import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer"



const App= ()=> {

  const mensaje = "Bienvenido a nuestra tienda donde podras encontrar telefonos Apple y todos sus accesorios al mejor precio!"

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={mensaje} />
    </>
  )
}

export default App

