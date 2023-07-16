import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {remove} from '../store/CartSlice';
import './Cart.css'
function Cart() {
    const selector=useSelector(state=>state.cart);
    const dispatch=useDispatch();
    const removef=(product)=>{
          dispatch(remove(product))
    }
  return (
    <div>
      <div className="carthead">
                <h1>Cart Items: <span>{selector.length}</span></h1> 
              </div>
        {
            selector.map((product=>
            <div className='main'>
              
              <div className="cartcard">
                  <div className="image" >
                      <img src={product.image} alt="" width='50px'/>
                  </div>
                  <div className="name">
                     {product.name}
                  </div>
                  <div className="price">
                    <span>$</span>{product.price}
                  </div>
                  <div className="Button">
                    <button className='removebtn' onClick={()=>{removef(product)}}>Remove</button>
                  </div>
              </div> 
              </div>
                ))

        }
    </div>
  )
}

export default Cart
