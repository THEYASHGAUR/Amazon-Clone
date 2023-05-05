import React from 'react';
import {useDispatch} from 'react-redux';
import './Product.css';
import { setAddItemCart } from "../../store/CartSlice";

const Product = ({ id, title, price, rating, image }) => {
    const dispatch = useDispatch();

    function  handleClick(){
        console.log("added to cart this product");
        dispatch(setAddItemCart({ id, title, image, price }))
    }


    return (
    <>
        <div className="product" >
            <div className="product__info">
                <p className="title">{title}</p>
                <p className='price'>₹{price}</p>
                <div className="product__rating">
                    {/* {Array(rating).fill().map((_, i) => (
                        <p className="rating">⭐</p>
                    ))} */}
                </div>
            </div>
            <div className="product__img">
                <img src={image} alt="" />
            </div>
            <div className="cart">
                <button onClick={handleClick}>Add to Cart</button>
            </div>
        </div >
    </>
);
};


export default Product;
