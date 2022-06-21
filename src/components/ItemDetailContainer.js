import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../utils/productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {



  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true)
  const { id } = useParams();
  useEffect(() => {
      setLoading(true)


      new Promise((res, rej) => {
        setTimeout(() => {
          res(productos.find(productos => productos.id == id))
        }, 2000)
      })
        .then(respuesta => {
           setLoading(false)
          setProduct(respuesta)
        })
  
    },[])


  return (

 <ItemDetail product={product} />

  )
};

export default ItemDetailContainer;
