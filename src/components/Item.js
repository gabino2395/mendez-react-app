import { Link } from 'react-router-dom';
import React from 'react'

const Item = ({ item }) => {
  return (
    
      <div className='itemsList'>
        <Link className='btn ' to={`/detail/${item.id}`} >
          <img  height ="250px" width="200px" src={item.img} alt="producto" />
          <h2>{item.name}</h2>
          <p>${item.price}</p>
          </Link>
      </div>


    
  );
}
export default Item