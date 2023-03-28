import React from 'react';
import { useStateValue } from '../StateProvider';
import './Product.css';

const Product = ({ id, title, price, rating, image }) => {
    return (
        <>
            const [state, dispatch] = useStateValue();


            const addToCart = () => {
                //dispatch the item into the data layer
                dispatch({
                    type: "ADD_TO_CART",
                    item: {
                        id: id,
                        title: title,
                        image: image,
                        price: price,
                        rating: rating,
                    },
                })};



    };
            <div className="product" >
                <div className="product__info">
                    <p className="title">{title}</p>
                    <p className='price'>₹{price}</p>
                    <div className="product__rating">
                        {Array(rating).fill().map((_, i) => (
                            <p className="rating">⭐</p>
                        ))}
                    </div>
                </div>
                <div className="product__img">
                    <img src={image} alt="" />
                </div>
                <div className="cart">
                    <button onClick="addToCart">Add to Cart</button>
                </div>
            </div >
        </>
    );
};

export default Product;
