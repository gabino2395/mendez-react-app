
import CartWidget from "./CartWidget"
const Header = () => {
	return (
		<>
		<header>
			<div>

      <a href="" class="logo">Salitre</a> <img className='imgLogo' src="/img/surfboard.png" alt="imagen de logo" />
			</div>
      <ul>
         <li className='' > <a href="">Home</a></li>
         <li> <a href="">about</a></li>
         <li> <a href="">catalog</a></li>
        
   <CartWidget />
      </ul>
   </header>
   <section class="banner"></section>
		
		</>
	)
}



export default Header