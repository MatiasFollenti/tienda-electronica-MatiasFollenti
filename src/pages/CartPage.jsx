import React, { useContext } from 'react'
import CartProductsDisplay from '../Components/CartProductsDisplay/CartProductsDisplay';
import { CartContext } from '../context/CartContext';

import './styles/CartPage.css';

const CartPage = () => {

    const { cart } = useContext(CartContext);

  return (
    <main>
        

        <CartProductsDisplay cart={cart} />


    </main>
  )
}

export default CartPage