import { ProductionQuantityLimitsRounded } from "@mui/icons-material";
import React, { useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ prod }) => {
  

  return (
    <div>
      <h2> {prod.nombre} </h2>
      <img src={prod.URLimage} alt="" />
      <h3> {prod.descripcion} </h3>
      <h4> ${prod.precio} </h4>
      <ItemCount prod={prod} />
    </div>
  );
};

export default ItemDetail;

/* HACER CAMBIOS ACA */
