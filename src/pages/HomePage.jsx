import React, { useState } from 'react'
import productsData from '../data/products.json'
import CategoryFilter from '../components/CategoryFilter'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'

export default function HomePage({ products, cart, onAddToCart, onRemoveFromCart, onDeleteProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(productsData.map(p => p.category))]

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="lg:w-2/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Filtres</h2>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Catalogue</h2>
          <ProductList
            products={filteredProducts}
            onAddToCart={onAddToCart}
            onDeleteProduct={onDeleteProduct}
          />
        </div>
      </div>
      <div className="lg:w-1/3">
        <div className="bg-white p-4 rounded-lg shadow-sm sticky top-20">
          <h2 className="text-lg font-semibold mb-4">Panier</h2>
          <Cart cartItems={cart} onRemoveFromCart={onRemoveFromCart} />
        </div>
      </div>
    </div>
  )
}
