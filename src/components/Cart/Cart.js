import React from 'react';
import './Cart.css';
import BasketItem from '../BasketItem/BasketItem';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/CartSlice';
    

const Cart = () => {
    
    const cartItems = useSelector(selectCartItems);

    return (
        <>
            <img className='cart__banner' src="banner.jpg" alt="" />
            <div className="container">
                <div className="cart__left">
                    <h1 className='checkout__title'>Your Shopping Basket</h1>
                    <div>
                         {cartItems?.length === 0 ? (
                        <div>
                            <h1>Cart empty  </h1>
                        </div>
                        ) : (
                        
                        <div className="box">
                        {cartItems?.map((item,i) => (
                            <BasketItem key={i} item={item}  />
                        ))} 
                        </div>
                        )}
                    </div>
                </div>
                <div className="cart__right">
                    <div className="products__total">
                        <h3> Subtotal (3 items): ₹  418.00</h3>
                        <div className="checkbox">
                            <input type="checkbox" name="" id="" />
                            <p>This order contains a gift</p>
                        </div>
                        <div className="button">

                            <button className='checkout__button'>Procced to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
            )
}

            export default Cart;
