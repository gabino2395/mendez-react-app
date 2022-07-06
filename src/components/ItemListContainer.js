import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//styles
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//firebase
import { getDocs,  query, where } from "firebase/firestore"
import { productsCollection } from "../Firebsae";


const ItemListContainer = (props) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams();

  useEffect(() => {
    const ref = categoryId
      ? query(productsCollection, where("categoryId", "==", categoryId))
      : productsCollection

    getDocs(ref)
      .then((resultado) => {
        const productsFromMap = resultado.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }

        })
        setProducts(productsFromMap)
        setLoading(false)
      })
      .catch((error) => {
        if (error) {
          toast("API ERROR", { className: "error-toast", draggable: true })
        }
      })

  }, [categoryId])







  return (
    <>

      <ToastContainer />
      <div className="titulo">
        <h1>{props.greeting}</h1>
        {
          loading ? <Stack spacing={1}>
            <Skeleton variant="text" />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton variant="rectangular" width={210} height={118} />

          </Stack>
            : < ItemList items={products} />
        }
      </div>
      <img className="surfboard" src="/imgLogo/pukasBanner1.png" alt="" />
    </>

  );
  ;
}
export default ItemListContainer;
