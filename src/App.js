import React from "react";
import ContextProvider from "./context/CartContext";
import AppRouter from "./router/AppRouter";



const App= ()=> {

  return (

    <ContextProvider>
      <AppRouter />
    </ContextProvider>
    
  )
}

export default App

