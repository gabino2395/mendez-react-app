import React from "react";



import Item from "./Item";

const ItemList = ({ items }) => {
  return (

<>

<div className="items">
  {items.map((item) => (
    <Item key={item.id} item={item} />
  ))}
</div>
        {/* <img className="surfboard" src="/imgLogo/pukasBanner1.png" alt="" /> */}

</>
  );

};

export default ItemList;
