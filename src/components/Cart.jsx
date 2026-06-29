import React from 'react';
import CartItem from './CartItem';

export default function Cart({ cartItems , onRemoveFromCart }) {
    const totalAmount = cartItems.reduce((total , item) => total + item.price, 0);

    if (cartItems.length === 0) {
        return (
        <div className="text-center py-10 text-gray-400">
            <p className="text-5xl mb-3">🛒</p>
            <p className="text-sm font-medium">Votre panier est vide.</p>
        </div>
        );
    }

    return (
    <div className="flex flex-col h-full">
        <div className="flex-grow max-h-[400px] overflow-y-auto pr-2 mb-4">
            {cartItems.map((item, index) => (
            <CartItem
                key={`${item.id}-${index}`}
                item={item}
                index={index}
                onRemove={onRemoveFromCart}
            />
            ))}
        </div>
        
        <div className="pt-4 border-t-2 border-gray-100">
            <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-600">Total Articles:</span>
            <span className="font-bold text-gray-800">{cartItems.length}</span>
            </div>
            <div className="flex justify-between items-center mb-6">
            <span className="font-medium text-gray-600">Montant Total:</span>
            <span className="text-xl font-bold text-indigo-600">{totalAmount.toFixed(2)} MAD</span>
            </div>
            <button className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-colors font-bold shadow-sm">
            Passer la commande
            </button>
        </div>
        </div>
    );
  }
