import React from 'react';

export default function CartItem({ item , index , onRemove }) {
    return (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
      <div className="flex items-center gap-3">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-12 h-12 object-cover rounded-md border"
        />
        <div>
          <p className="text-sm font-semibold text-gray-800">{item.name}</p>
          <p className="text-sm text-gray-500">{item.price.toFixed(2)} MAD</p>
        </div>
      </div>
      <button
        onClick={() => onRemove(index)}
        className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
      >
        Retirer
      </button>
    </div>
  );
}
