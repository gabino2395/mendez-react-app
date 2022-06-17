import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div>
          <a href="#" class="logo">
          <img
            className="imgLogo"
            src="/imgLogo/surfboard.png"
            alt="imagen de logo"
          />
          </a>
          
        </div>
        <ul className="footer-ul">
          <li className="footer-li">
            
            <a href=""> <i className="fa-solid fa-cart-shopping cart-icon"></i></a>
          </li>
          <li className="footer-li">
            
            <a href="#"> <i className="fa-solid fa-cart-shopping cart-icon"></i></a>
          </li>
          <li className="footer-li">
            
            <a href="#">catalog</a>
          </li>

        </ul>
      </div>
    </>
  )
}

export default Footer