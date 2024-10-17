import products from "../data/products";

const cartReducer = (state,action)=> {
    // กระบวนการจัดการ State ผ่าน Action
    if(action.type === "CALCULATE_TOTAL"){
        const {total,amount} = state.products.reduce((cartTotal,item)=>{
            const {price,quantity} = item;
            const totalprice = price * quantity; //ยอดรวมสินค้าเเต่ละรายการ
            cartTotal.total += totalprice //จำนวนเงินรวม
            cartTotal.amount += quantity //จำนวนสินค้า
            return cartTotal;
        },{
            total : 0,
            amount : 0
        })
        return {
            ...state,
            total,
            amount
        }
    }
    if(action.type === "REMOVE"){
        return {
            ...state,
            products : state.products.filter((item)=>item.id !== action.playload)

        }
    }
    if(action.type === "ADD"){
        let updateProduct = state.products.map((item)=>{
            if(item.id === action.playload){
                return {
                    ...item,
                    quantity:item.quantity + 1
                }
            }
            return item;
        })
        return {
            ...state,
            products:updateProduct
        }
    }
    if(action.type === "MINUS"){
        let updateProduct = state.products.map((item)=>{
            if(item.id === action.playload){
                return {
                    ...item,
                    quantity:item.quantity - 1
                }
            }
            return item;
        }).filter((item)=>item.quantity !== 0)
        return {
            ...state,
            products:updateProduct
        }
    }
}

export default cartReducer;