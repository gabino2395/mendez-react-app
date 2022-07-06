import React, { useContext } from "react";
// router-dom
import { NavLink } from "react-router-dom";
//provider
import { contexto } from "../contexto/cartContext";

const CartWidget = () => {
  const {totalAmmount} =  useContext(contexto)

  return (
    <>
      
        <NavLink to="/carrito" className="href">

          <i className="fa-solid fa-cart-shopping cart-icon"> {totalAmmount() !== 0 && totalAmmount()}</i>
        </NavLink>
      
    </>
  );
};

export default CartWidget;


