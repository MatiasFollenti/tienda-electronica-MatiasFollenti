import { ProductionQuantityLimitsRounded } from "@mui/icons-material";
import React, { useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ prod }) => {
  

  return (
    <div className="containerIDetail">
      <h2 className="tituloIDetail"> {prod.title} </h2>
      <img src={prod.img} alt="" className="imgIDetail"/>
      <h3 className="descripcionIDetail"> {prod.description} </h3>
      <h4 className="precioIDetail"> ${prod.price} </h4>
      <ItemCount prod={prod} className="countIDetail"/>
    </div>
  );
};

export default ItemDetail;

/* HACER CAMBIOS ACA */
