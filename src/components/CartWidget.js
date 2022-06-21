import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { useState } from "react";
import { contexto } from "./cartContext";

const CartWidget = () => {
  const resultado = useContext(contexto)
  return (
    <>
      
        <NavLink to="/carrito" className="href">
        
          <i className="fa-solid fa-cart-shopping cart-icon">{resultado.cantidad_total}</i>
        </NavLink>
      
    </>
  );
};

export default CartWidget;
