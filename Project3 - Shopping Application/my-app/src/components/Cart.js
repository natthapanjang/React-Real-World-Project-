import React from "react";
import Item from "./Item";
import { UseCart } from "../context/CartContext";

export default function Cart() {
    const { products,total,formatMoney } = UseCart();
    return (
        <div className="cart">
            <h1 style={{textAlign:"center"}}>
                {products.length > 0 ? `Total : ${formatMoney(total)} THB`: "Empty Product"}
            </h1>
            {products.map((data)=>{
                return <Item key={data.id} {...data}/>
            })}
        </div>
    );
}
