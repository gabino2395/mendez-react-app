import { Link } from 'react-router-dom';
import React from 'react'

const Item = ({ item }) => {
  return (
    
      <div className='itemsList'>
          <img width="200px" src={item.img} alt="producto" />
          <h2>{item.name}</h2>
          <p>${item.price}</p>
          <Link className='btn btn-primary' to={`/detail/${item.id}`}>ver detalle</Link>
      </div>


    
  );
}
export default Item