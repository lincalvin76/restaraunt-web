import { useCart } from "./Cart"

export default function CartPopup() {
    const {cartItems, totalPrice, removeFromCart, clearCart, cartOpen, setCartOpen} = useCart();

    if (!cartOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50" onClick={() => setCartOpen(false)}>
            <div className="bg-slate-900 rounded-2xl shadow-lg w-96 p-6 text-white" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-mono mb-4 text-center">Your Cart</h2>

                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-400">Your cart is empty.</p>
                ) : (
                    <div className="space-y-3">
                        {cartItems.map((item, i) => (
                            <div key={i} className="flex justify-between items-center">
                                <div>
                                    <p className="font-mono">{item.name}</p>
                                    <p className="text-sm text-gray-400">
                                        {item.quantity} × ${item.price.toFixed(2)}
                                    </p>
                                </div>
                                <div className="item-right flex flex-row gap-3">
                                    <p className="font-bold">${item.total.toFixed(2)}</p>
                                    <button
                                        onClick={() => removeFromCart(item.name)}
                                        className="text-red-400 hover:text-red-500"
                                    >
                                    ✕
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="border-t border-gray-700 pt-3 mt-3 text-right">
                            <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
                        </div>

                        <div className="flex justify-between mt-4">
                            <button onClick={clearCart} className="bg-red-600 px-3 py-1 rounded hover:bg-red-700">
                                Clear
                            </button>

                            <button onClick={() => setCartOpen(false)} className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-800">
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}