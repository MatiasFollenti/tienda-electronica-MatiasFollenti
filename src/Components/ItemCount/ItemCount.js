import React, { useState } from "react";

const ItemCount =(stock)=> {

    
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

    const addToCart =()=>{console.log("Producto añadido al carrito");}


    return (
        <div>
            <button onClick={add}>+</button>
            <h3>{count}</h3>
            <button onClick={subtrack}>-</button>
            <button onClick={addToCart} disabled={stock === 0} >
            {stock=== 0 ? <span>Sin Stock</span> :<span>Agregar al carrito</span>}
            </button>
        </div>



    )
}
export default ItemCount

 