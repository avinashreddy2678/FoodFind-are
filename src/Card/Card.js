import React, { useEffect, useState } from 'react';
import './Card.css';
import { useDispatch, useSelector } from 'react-redux';
import { add,remove } from '../store/CartSlice';

function Card({ product }) {
  const selector=useSelector(state=>state.cart)
  const dispatch = useDispatch();
  const [addtocart, setAddToCart] = useState(true);
  const { id, name, price, image } = product;



  useEffect(()=>{
    const productIsInCart=selector.find(cartItem => cartItem.id === id )
    if(productIsInCart){
      setAddToCart(true);
      }
      else{
        setAddToCart(false);
      }
  },[selector,id])
  const addToCart = (product) => {
    dispatch(add(product));
   
  };

  const removeFromCart = (product) => {
    
   
    dispatch(remove(product))
    
  };
  
  return (
    <div>
      
      <div className="container" key={id}>
        <div className="cardimage">
            <img src={image} alt="" />
        </div>
        <div className="cardname">
           <p>{name}</p>
        </div>
        <div className="priceandbuttons">
        <p><span>$</span>{price}</p>
            {addtocart ? (
              <button className='removebtn' onClick={() => removeFromCart(product)}>Remove</button>
            ) : (
              <button className='addbtn' onClick={()=>addToCart(product)}> Add To Cart</button>
            )}
        </div>
        
      </div>
    </div>
  );
}

export default Card;
