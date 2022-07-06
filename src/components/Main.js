import React from "react";
import ItemListContainer from "./ItemListContainer";
import Carrito from "./Carrito";
import Checkout from "./Checkout";
import ItemDetailContainer from "./ItemDetailContainer";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/List" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default Main;
