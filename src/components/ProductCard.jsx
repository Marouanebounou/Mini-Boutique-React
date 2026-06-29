import React from 'react';

export default function ProductCard({ product, onAddToCart , onDelete }) {
    return (
    <div className="border rounded-lg p-4 shadow-sm bg-white flex flex-col h-full hover:shadow-md transition-shadow relative">
      <button
        onClick={() => onDelete(product.id)}
        className="absolute top-3 right-3 bg-red-100 text-red-600 hover:bg-red-200 w-8 h-8 flex items-center justify-center rounded-full transition-colors shadow-sm"
        title="Supprimer du catalogue"
      >
        ✕
      </button>
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="flex-grow">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="text-lg font-semibold text-gray-800 mt-1">{product.name}</h3>
        <p className="text-xl font-bold text-indigo-600 mt-2">{product.price.toFixed(2)} MAD</p>
      </div>
      <button 
        onClick={() => onAddToCart(product)}
        className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors font-medium"
      >
        Ajouter au panier
      </button>
    </div>
  );
}