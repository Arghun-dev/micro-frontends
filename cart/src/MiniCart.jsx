import React, { useState, useEffect } from "react";

import { cart, clearCart } from "./cart";
import { currency } from "home/products";

export default function MiniCart() {
  const [items, setItems] = useState();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    return cart.subscribe((c) => {
      setItems(c?.cartItems);
    });
  }, []);

  if (!items) return null;

  return (
    <>
      <span onClick={() => setShowCart(!showCart)} className="cursor-pointer">
        <i className="ri-fingerprint-line text-2xl" id="showlogin"></i>
        {items.length}
      </span>
      {showCart && (
        <>
          <div className="absolute p-5 border-4 border-blue-800 bg-white text-black top-2 w-[200px] -left-[250px]">
            <div
              className="grid gap-3 text-sm"
              style={{
                gridTemplateColumns: "1fr 3fr 10fr 2fr",
              }}
            >
              {items.map((item) => (
                <React.Fragment key={item.id}>
                  <div>{item.quantity}</div>
                  <img src={item.image} alt={item.name} className="" />
                  <div>{item.name}</div>
                  <div className="text-right">
                    {currency.format(item.quantity * item.price)}
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="mt-8 flex justify-end text-lg">
              <span className="mr-2">Total: </span>
              {currency.format(
                items.reduce((a, v) => a + v.quantity * v.price, 0)
              )}
            </div>
            <div className="flex">
              <div className="flex-grow">
                <button
                  id="clearcart"
                  className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
