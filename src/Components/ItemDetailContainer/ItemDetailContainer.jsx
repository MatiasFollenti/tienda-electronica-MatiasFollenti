import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({id}) => {
    const url = 'https://run.mocky.io/v3/4f92f3f0-509f-4c69-ab7d-86d209f15c71';
    const [product, setProduct] = useState(null);

    const getProductById = async () => {
        try {
            const response = await fetch(url).then( res => res.json());
            const result = response.find( prod => prod.id == id );
            setProduct(result); 
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
      getProductById();
    }, [id])
    

  return (
    <main>

        { product ? <ItemDetail prod={product} /> : <p>Cargando productos...</p> }

    </main>
  )
}

export default ItemDetailContainer