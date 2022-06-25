import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { useState } from "react";
import { contexto } from "../contexto/cartContext";

const CartWidget = () => {
  const resultado = useContext(contexto)
  return (
    <>
      
        <NavLink to="/carrito" className="href">
        
          <i className="fa-solid fa-cart-shopping cart-icon">{resultado.totalAmmount }</i>
        </NavLink>
      
    </>
  );
};

export default CartWidget;


