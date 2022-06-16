import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { traerProducto } from "../utils/productos";
import ItemDetail from "./ItemDetail";
const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(typeof id)
  useEffect(() => {
    traerProducto(parseInt(id))
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
