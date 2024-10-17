import React from 'react'
import "./Item.css";
import { UseCart } from '../context/CartContext';
export default function Item(props) {
    const {id,name,price,image,quantity} = props;
    const {formatMoney,removeItem,addItem,minusItem} = UseCart();
    return (
        <div className="card">
            <img src={image} alt={id} />
            <div className="product">
                <p className='name'>Name Product : {name}</p>
                <p className='price'>Price : {formatMoney(price)} THB</p>
            </div>
            <div className="quantity">
                <button onClick={()=>addItem(id)}>+</button>
                <input type="text" value={quantity} disabled />
                <button onClick={()=>minusItem(id)}>-</button>
            </div>
            <div className="total-price">{formatMoney(quantity * price)}</div>
            <button onClick={()=>removeItem(id)}>X</button>
        </div>
    )
}
