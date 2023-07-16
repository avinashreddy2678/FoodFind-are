import React from 'react'
import './Navbar.css';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
function Navbar() {
  const selector=useSelector(state=>state.cart);
  return (
    <div className='nav'>
      <div className="nav_left">
                <img src="data:image/png;base64,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" width ='40px' height='40px' alt="" />
                <h3>Food Finder</h3>
      </div>
      <div className='nav-mid'>
           
            <Link to={'/'}> <button  className="home">Home</button></Link>
           <Link to={'/cart'}><button  className="cart">Cart</button></Link> 
          </div>
      <div className="nav_right">
            <p>Cart:<span>{selector.length}</span></p>
      </div>
      
    </div>
  )
}
export default Navbar