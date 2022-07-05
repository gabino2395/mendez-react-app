import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDoc,doc} from "firebase/firestore"
import { productsCollection } from "../Firebsae";
import Skeleton from '@mui/material/Skeleton';

import Stack from '@mui/material/Stack';
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
  loading?
  <Stack spacing={1}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton variant="rectangular" width={210} height={118} />

      </Stack>:<ItemDetail product={product} />
}
</>

  )
};

export default ItemDetailContainer;
