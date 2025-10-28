import { createContext, useContext, useState } from "react";

const Cart = createContext();

export function GlobalCart({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);

    const addToCart = (name, price, quantity = 1) => {
        setCartItems((prevItems) => {
            const exist = prevItems.find((item) => item.name === name);

            if (exist) {
                return prevItems.map((item) =>
                    item.name === name ? {...item, quantity: item.quantity + quantity, total: (item.quantity + quantity) * item.price} : item
                )
            } else {
                return [...prevItems, {name, price, quantity, total: price * quantity}];
            }
        })
    }

    const removeFromCart = (name) => {
        setCartItems((prev) => prev.filter((item) => item.name !== name));
    }

    const clearCart = () => setCartItems([]);

    const totalPrice = cartItems.reduce((sum, item) => sum + item.total, 0);

    return (
        <Cart.Provider
            value = {{
                cartItems, addToCart, removeFromCart, clearCart, totalPrice, cartOpen, setCartOpen,
            }}>
                {children}
        </Cart.Provider>
    )
}

export function useCart() {
    return useContext(Cart)
}