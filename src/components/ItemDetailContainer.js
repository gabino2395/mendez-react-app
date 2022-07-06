//hooks
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
//firebase
import { getDoc,doc} from "firebase/firestore"
import { productsCollection } from "../Firebsae";
//styles
import Skeleton from '@mui/material/Skeleton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    .catch((error) => {
      if (error) {
        toast("API ERROR", { className: "error-toast", draggable: true })
      }
    })
    },[id])


  return (
<>
<ToastContainer />

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
