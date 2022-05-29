

const Header = () => {
  return (
    <>
    <header>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Salitre</a> 
    {/* <img src="./src/img/surfboard:salitre.png" alt="" /> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
        <li clasName="nav-item">
          <a className="nav-link" href="#">Catalogo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
  <i className="fa-solid fa-cart-shopping cart-icon"></i>
</nav>

 </header>
 <div>

 </div>
    </>
  )
}

export default Header