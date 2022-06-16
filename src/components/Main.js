import React from "react";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
const Main = () => {
  return (
    <>
      {/* <ItemListContainer greeting="Sean bienvenidos a mi tienda " /> */}
      {/* <ItemDetailContainer /> */}
      <Routes>
        {/* <Route
          path="/catalog"
          element={
            <ItemListContainer greeting="Sean bienvenidos a mi tienda " />
          }
        ></Route> */}
        <Route path="/home" element={<ItemListContainer />} />

        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
      </Routes>
    </>
  );
};

export default Main;
