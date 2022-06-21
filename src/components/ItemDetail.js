import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({ product }) => {


  const [quantity, setQuantity] = useState(0);
  const OnAdd = (cantidadSeleccionada) => {
    console.log(cantidadSeleccionada);
    setQuantity(cantidadSeleccionada)
  };

  return (
    <div className="detail">
      <img src={product.img} alt={product.name} width="400" />
      <div>
        <h1>{product.name}</h1>
        <h2>{product.description}</h2>
        <h3>$ {product.price}</h3>
        <h4>Stock: {product.stock}</h4>

        {quantity ? undefined : (
          <ItemCount OnAdd={OnAdd} stock={product.stock} initial={1} />
        )}

        <Link className="btn btn-primary" to="/carrito">
          confirmar
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
