import React from 'react'
//router-dom
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <footer className="footer">
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
            
          </li>
          <li className="footer-li">
            
            <Link to="/List"className='catalog' href="#">catalog</Link>
          </li>

        </ul>
      </footer>
    </>
  )
}

export default Footer