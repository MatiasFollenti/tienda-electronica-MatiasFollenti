import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer'

const Home = () => {

    const mensaje = "Bienvenido a nuestra tienda donde podras encontrar telefonos Apple y todos sus accesorios al mejor precio!"
  return (
    <main>
        <ItemListContainer greeting={mensaje} />
    </main>
  )
}

export default Home