import React from "react";
import { useCart } from "../../context/CartContext";
import { FaTrash } from "react-icons/fa";
import PrimaryButtons from "../layout/PrimaryButtons";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cartItems.length === 0)
    return <p className="text-center pt-10">Your cart is empty</p>;

  return (
    <div className="cart pt-10 p-5 shadow-md">
<h3>Subtotal <span className="">EGP</span> {48 * totalPrice.toFixed(0)} </h3>
<PrimaryButtons className="w-full ">Checkout</PrimaryButtons>
<hr className="my-3" />
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center mb-1 bg-gray-200 h-35 "
        >
            <div className="h-35 pl-2 grid items-center">
              <img src={item.thumbnail} alt={item.title} className="w-25 " />
              <div className="border rounded-lg flex justify-between px-1">
                <button className="text-sm font-normal cursor-pointer">
                  <FiMinus />
                </button>
                <p
                  value={item.quantity}
                  min={1}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className=""
                >
                  {item.quantity}
                </p>

                <button className="text-sm font-normal cursor-pointer">
                  <GoPlus />
                </button>
              </div>
            </div>
          <div className="flex items-center justify-between w-full px-4">
            <div className="grid gap-3">
              <h1 className="font-bold">{item.brand}</h1>
              <h4>{item.title}</h4>
              <p>{48 * item.price.toFixed(0)}</p>
            </div>
            
              <button onClick={() => removeFromCart(item.id)}>
                <FaTrash />
              </button>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
