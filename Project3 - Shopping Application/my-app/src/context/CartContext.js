import {createContext,useContext,useReducer,useEffect } from "react";
import products from "../data/products";
import cartReducer from "../reducer/cartReducer";
// การสร้าง context
const CartContext = createContext();
const initState = {
    products : products,
    total : 0,
    amount : 0
}

export const CartProvider = ({children})=>{
    const [state,dispatch] = useReducer(cartReducer,initState);

    function formatMoney(money){
        return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    function removeItem(id){
        // playload คือเงื่อนไขในการลบ
        dispatch({type:"REMOVE",playload:id})
    }

    function addItem(id){
        dispatch({type:"ADD",playload:id})
    }

    function minusItem(id){
        dispatch({type:"MINUS",playload:id})
    }

    useEffect(()=>{
        dispatch({type:"CALCULATE_TOTAL"})
    },[state.products])

    return (
        // CartContext.Providerส่งข้อมูลให้ components ต่างๆ
        <CartContext.Provider value={{...state,formatMoney,removeItem,addItem,minusItem}}>
            {children}
        </CartContext.Provider>
    );
};

// การนำเอา context ไปใช้งานข้างนอก
export const UseCart=()=> {
    return useContext(CartContext);
}