import CartWidget from "./CartWidget";
//router-dom
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <header className="header">
        <div>
          <Link to="/" className="logo">
            Salitre
          </Link>
          <img
            className="imgLogo"
            src="/imgLogo/surfboard.png"
            alt="imagen de logo"
          />
        </div>
        <ul className="header-ul">
          <li className="header-li">
            <NavLink to="/" className="href">
              home
            </NavLink>
          </li>



          <ul className="header-li header-ul">
            <li className="header-li">
              <NavLink to="category/1" className="href">
                surfboards
              </NavLink>
            </li>
            <li className="header-li">
              <NavLink to="category/2" className="href">
                t-shirts
              </NavLink>
            </li>
            <li className="header-li">
              <NavLink to="category/3" className="href">
                shorts
              </NavLink>
            </li>
          </ul>



          <li className="header-li">
            <CartWidget />
          </li>
        </ul>
      </header>
      <section className="banner"></section>
    </>
  );
};

export default NavBar;
