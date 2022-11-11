import React, { useContext } from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";
import { getTotalProducts } from "../../helpers/calcFunctions";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <button
      className="widget-container"
      disabled={cart.length === 0 ? true : false}
      onClick={()=>{
        navigate('/cart');
      }}
    >
      <LocalMallIcon fontSize="large" />

      <div className="widget-container__count">{getTotalProducts(cart)}</div>
    </button>
  );
};

export default CartWidget;
