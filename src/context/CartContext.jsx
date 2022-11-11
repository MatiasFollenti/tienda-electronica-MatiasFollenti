import React,{ createContext, useState } from 'react';

export const CartContext = createContext();

const ContextProvider = (props) => {

    const [cart, setCart] = useState([]);

    const addToCart = (prod, qty) => {
        if (cart.some( el=>el.id === prod.id )) { //cuando si hay un producto con ese id
            
            const newCarrito = cart.map( el => {
                if(el.id === prod.id){
                    el.qty = el.qty + qty
                }
                return el;
            });
            setCart(newCarrito);
        }else{ // cuando no hay un producto con ese id en el carrito
            setCart([...cart,{...prod,qty }]);
        }
    }

    const deleteProdById = (id) => {

        const newCarrito = cart.filter( el => el.id !== id );
        setCart(newCarrito);

    }

    const deleteAllCart = () => {
        setCart([]);
    }



    return(

        <CartContext.Provider
            value={{ // aca va todo lo que quiero que se distribuya a traves del context
                addToCart,
                cart,
                deleteProdById,
                deleteAllCart
            }}
        >

            { props.children }

        </CartContext.Provider>

    )

}

export default ContextProvider;