import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


const ItemListContainer= ({greeting})=> {
  
  

    const url = 'https://run.mocky.io/v3/4f92f3f0-509f-4c69-ab7d-86d209f15c71';

    const { category } = useParams();

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    const getProductsByCategory = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const result = data.filter( prod => prod.categoria == category );
        console.log(data);
        setProducts(result);   
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
  