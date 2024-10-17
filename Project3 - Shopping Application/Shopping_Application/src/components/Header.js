import React from "react";
import "./Header.css";
import { UseCart } from "../context/CartContext";
export default function Header() {
    const {amount} = UseCart();
    return (
        <header>
            <p>Shopping Application</p>
            <p>Product : {amount}</p>
        </header>
    )
}
