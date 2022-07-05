import { createContext, useState } from "react";

export const contexto = createContext();

const Provider = contexto.Provider;
//Provider : Es un componente que viene adentro de un contexto y sirve para : 1) Determina quienes tienen acceso a la informacion y 2) Determina el valor del contexto

export const MiProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);


 
  const addToCart = (producto,cantidad) => {
    const copia = [...cartList];
    
     const new_Product = { ...producto, cantidad };

    copia.push(new_Product);
    setCartList(copia);
  };

  function isInCart(id) {
    let repeat = cartList.find((repeat) => repeat.id === id);
    if (repeat === undefined) {
      return false;
    } else {
      return true;
    }
  }

  const removeProduct = (id) => {
    setCartList(cartList.filter((prod) => prod.id !== id));

   
  };
  const removeProd = (id) => {
    const filtrados = cartList.filter(prod => prod.id !== id )
      setCartList([...filtrados])
      
  }

  const totalAmmount = () => {
     return cartList.reduce((acc,{cantidadSeleccionada}) => acc + cantidadSeleccionada,0);

   };

  const totalPrice = () => {
    return cartList.reduce(
      (count, product) => count + product.cantidadSeleccionada * product.price,
      0
    );
  };

  const cleanCart = () => {
    setCartList([]);
  };


  return (
    <Provider
      value={{
        removeProd ,
        cartList,
        isInCart,
        addToCart,
        cleanCart,
        removeProduct,
        totalAmmount,
        totalPrice,
      }}
    >
      {children}
    </Provider>
  );
};
export default MiProvider;
