import { ProductionQuantityLimitsRounded } from '@mui/icons-material'
import React from 'react'
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({prod}) => {


  return (
    <div>
    <h2> {prod.nombre} </h2>
    <img src= {prod.URLimage} alt="" />
    <h3> {prod.descripcion} </h3>
    <h4> ${prod.precio}  </h4>
    <ItemCount/>
    </div>
   
  )
}

export default ItemDetail

/* HACER CAMBIOS ACA */

