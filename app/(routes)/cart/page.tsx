"use client";
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import React, { useEffect, useState } from "react";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

const Cart = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return false;
  }
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">No items added to the cart</p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            {cart.items.length > 0 && <Summary />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
