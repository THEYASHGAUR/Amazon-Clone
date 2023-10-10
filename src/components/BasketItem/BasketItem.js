import React from 'react';
import './BasketItem.css';
import { useDispatch } from "react-redux";
import { setDecreaseItem, setIncreaseItem, setRemoveItemFromCart } from '../../store/CartSlice';

const BasketItem = ({item:{ title, price, image, cartQuantity }}) => {
  const dispatch = useDispatch();

    const onRemoveItem = () => {
        dispatch(setRemoveItemFromCart({  title, image,  price, cartQuantity }))
      }
    
      const onIncreaseItemQTY = () => {
        dispatch(setIncreaseItem({ title,  image,  price, cartQuantity }))
      }
      const onDecreaseItemQTY = () => {
        dispatch(setDecreaseItem({title,  image,  price, cartQuantity }))
      }
  return (
    
      <div className="basket-item-wrapper">

        <img className='basket_img' src={image} alt="" width="200px" />

        <div className="desc-area">
          <div className="description">
            <h2 className="item_">{title}</h2>
            <p className="price">₹ {price}</p>
          </div>
          <div className='buttons'>
            <button className="decrease" onClick={onDecreaseItemQTY}>-</button>
            <span> {cartQuantity}</span>
            <button className="increase" onClick={onIncreaseItemQTY}>+</button>
          </div>
          <div className="remove-item" onClick={onRemoveItem}>
            Remove Item
          </div>
        </div>
      </div>
    
  )
}

export default BasketItem;
