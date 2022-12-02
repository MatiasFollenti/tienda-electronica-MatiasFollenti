import React, { useEffect, useState } from 'react'
import { getItemById } from '../../helpers/firestore.controller';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({id}) => {
    const [product, setProduct] = useState(null);

    const getProductById = async () => {
        try {
            const response = await getItemById(id,'productos')
            setProduct(response); 
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