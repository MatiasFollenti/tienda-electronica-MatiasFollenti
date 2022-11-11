import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./itemCount.css";



const ItemCount =({ prod })=> {

    const { stock } = prod;

    const { addToCart } = useContext(CartContext);

    const [count, setCount] = useState(1)

    const add =()=>{
        if (count < stock) {
            setCount(count + 1)
        }
    }
        
    const subtrack =()=>{
        if (count > 1) {
            setCount(count - 1) 
    }}


    return (
        <>
        <div className="containerBotones">
                <button onClick={add} className="BotonesCount">+</button>
                <h3>{count}</h3>
                <button onClick={subtrack} className="BotonesCount">-</button>
        </div>
        <button className="BotonAddToCart" onClick={()=>{
            addToCart(prod,count)
            }} disabled={stock === 0} >
            {stock=== 0 ? <span>Sin Stock</span> :<span>Agregar al carrito</span>}
            </button>
        </>
        



    )
}
export default ItemCount

 