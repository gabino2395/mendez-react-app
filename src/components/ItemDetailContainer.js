import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../utils/productos";
import ItemDetail from "./ItemDetail";
import { getDoc,doc, collection , query , where } from "firebase/firestore"
import { productsCollection } from "../Firebsae";
const ItemDetailContainer = () => {



  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true)
  const { id } = useParams();
  useEffect(() => {
    
    const ref=doc(productsCollection,id)
    const consulta= getDoc(ref)
    
    consulta
    .then((resultado)=>{
     const productDetail= resultado.data()
    
      
     
     setProduct(productDetail)
     setLoading(false)
    })
    .catch((error)=>{
     console.log(error)
    })
    },[id])


  return (
<>
{
  loading?<p>cargando..</p>:<ItemDetail product={product} />
}
</>

  )
};

export default ItemDetailContainer;
