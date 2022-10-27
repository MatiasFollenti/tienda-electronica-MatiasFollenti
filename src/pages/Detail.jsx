import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer';

const Detail = () => {

    const { id } = useParams();

  return (
    <ItemDetailContainer id={id} />
  )
}

export default Detail