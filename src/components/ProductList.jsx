import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({products , onAddToCart, onDeleteProduct}) {
    if (products.length === 0) {
        return (
            <div className="text-center text-gray-500">
                Aucun produit disponible.
            </div>
        );
    }
    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart} 
          onDelete={onDeleteProduct}
        />
      ))}
    </div>
  );
}