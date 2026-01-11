import React, { createContext, useState }  from 'react'
import { useContext } from 'react';

// context
const CartContext = createContext();
// provider cart
export const CartProvider = ({children})=>{
const [cartItems , setCartItems]=useState([]);
// add item to cart
const addToCart = (product)=>{
    // if the product already here add the quantity
    setCartItems((prev) => {
        const exists = prev.find((item) => item.id ===product.id);
        if (exists){
            return prev.map((item)=>
            item.id===product.id ? {...item,quantity: item.quantity + 1}:item
        );
        }else{
            return[...prev, {...product, quantity:1}];
        }
    });
};
// remove prodcut
const removeFromCart = (productId)=> {
    setCartItems((prev) => prev.filter((item)=>item.id!==productId));
};
// update quantity
const updateQuantity =(productId , quantity)=>{
    if (quantity < 1 ) return;
    setCartItems((prev)=>
    prev.map((item)=>
        item.id===productId ? { ...item , quantity} : item
));
};
// total price
const totalPrice = cartItems.reduce(
    (acc , item) => acc + item.price*item.quantity,0
);
return (
    <CartContext.Provider 
    value={{cartItems,addToCart ,removeFromCart ,updateQuantity ,totalPrice}}
    >
        {children}
    </CartContext.Provider>
);
};
// to use the cart very easy
export const useCart = () =>useContext(CartContext);