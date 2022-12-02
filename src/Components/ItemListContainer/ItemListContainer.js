import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems, getItemsByCondition } from "../../helpers/firestore.controller";
import ItemList from "../ItemList/ItemList";

const ItemListContainer= ({greeting})=> {
  
  

    const { category } = useParams();

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
      try {
        const response = await getItems('productos');
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    }

    const getProductsByCategory = async () => {
      try {
        const response = await getItemsByCondition('category','==',category,'productos');
        setProducts(response);   
      } catch (error) {
        console.error(error);
      }

    }

    useEffect(() => {

      if(category){
        getProductsByCategory();
      }else{
        getProducts();
      }

      

    }, [category])
    




    return (
        <>
          <h1 style= {style.container}>{greeting}</h1>
          { products.length > 0 ? <ItemList products={products} /> : <p>Cargando productos...</p> }
        </>
        
    )
}


export default ItemListContainer


const style = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alingItems: 'center',
      background: 'black',
      color: 'white',
      width: '100%',
      padding: 30,
      marginTop: 0,
    }
  }
  