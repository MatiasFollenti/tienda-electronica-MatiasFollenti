import React from 'react'
import Item from '../Item/Item'

import './ItemList.css'
const ItemList = ({ products }) => {
  return (
    <div className='products-container'>

        {
            products.map( prod => <Item prod={prod} key={prod.id} />)
        }

    </div>
  )
}

export default ItemList