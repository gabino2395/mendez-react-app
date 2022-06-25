import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import {contexto } from "../contexto/cartContext";
import  { useContext } from "react";



const ItemDetail = ({ product }) => {
  // const context =useContext(contexto)
  // const {addToCart} = useContext()

   const {addToCart,cartList}= useContext(contexto)

  const [quantity, setQuantity] = useState(0);
  const OnAdd = (cantidadSeleccionada) => {
    setQuantity(cantidadSeleccionada)

    addToCart({...product, cantidadSeleccionada})
    
  };
   console.log(cartList)

  return (
<div className=" detail container">
  <div className="row">
    <div className="col">
    <img className="detail-image" src={product.img} alt={product.name} width="400" />

    <h1>{product.name}</h1>
        <h3>$ {product.price}</h3>
        <h4>Stock: {product.stock}</h4>
    </div>
    <div className="col description-box">
        <h2 className="detail-description">{product.description}</h2>
    </div>
    <div className="col counter-box">
    {quantity ? undefined : (
      <ItemCount OnAdd={OnAdd} stock={product.stock} initial={1} />
      )}

        <NavLink className="btn-confirmar" to="/carrito">
          confirmar
        </NavLink>
        <NavLink className="btn-continuar" to="/">
          Seguir comprando
        </NavLink>
    </div>
  </div>
</div>
    );
  };
  
  export default ItemDetail;

