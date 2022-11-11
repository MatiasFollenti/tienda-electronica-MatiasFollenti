import { ProductionQuantityLimitsRounded } from "@mui/icons-material";
import React, { useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ prod }) => {
  

  return (
    <div className="containerIDetail">
      <h2 className="tituloIDetail"> {prod.nombre} </h2>
      <img src={prod.URLimage} alt="" className="imgIDetail"/>
      <h3 className="descripcionIDetail"> {prod.descripcion} </h3>
      <h4 className="precioIDetail"> ${prod.precio} </h4>
      <ItemCount prod={prod} className="countIDetail"/>
    </div>
  );
};

export default ItemDetail;

/* HACER CAMBIOS ACA */
