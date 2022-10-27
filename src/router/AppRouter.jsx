import React from 'react';
import Home from '../pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
import Products from '../pages/Products';
import Questions from '../pages/Questions';
import Detail from '../pages/Detail';


const AppRouter = () => {


  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/products' element={ <Products /> }>
                <Route path=':category' element={ <Products /> }  />
            </Route>
            <Route path='/questions' element={ <Questions  /> } />
            <Route path='/detail/:id' element={ <Detail /> } />
        </Routes>
    
    </BrowserRouter>
  )
}

export default AppRouter