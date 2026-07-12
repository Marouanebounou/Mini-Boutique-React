import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import productsData from './data/products.json'
import HomePage from './pages/HomePage'
import AddProductPage from './pages/AddProductPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const [products, setProducts] = useState(productsData)
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }

  const handleRemoveFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id))
    setCart(cart.filter(item => item.id !== id))
  }

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }])
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Mini Boutique</h1>
          <nav className="flex gap-4">
            <Link to="/" className="text-indigo-600 hover:underline">Accueil</Link>
            <Link to="/add" className="text-indigo-600 hover:underline">Ajouter Produit</Link>
          </nav>
          <div className="text-sm font-semibold bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
            Panier: {cart.length} articles
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                products={products}
                cart={cart}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
                onDeleteProduct={handleDeleteProduct}
              />
            }
          />
          <Route
            path="/add"
            element={<AddProductPage onAddProduct={handleAddProduct} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App