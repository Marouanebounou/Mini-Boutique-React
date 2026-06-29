import React, { useState } from 'react';
import productsData from './data/products.json';
import CategoryFilter from './components/CategoryFilter';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {

  const [products , setProducts] = useState(productsData);
  const [cart , setCart] = useState([]);
  const [selectedCategory , setSelectedCategory] = useState('All'); 

  const categories = ["All" , ...new Set(productsData.map(product => product.category))]

  const filteredProducts = selectedCategory === "All" ? products : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (productToAdd) => {
    setCart([...cart, productToAdd]);
  }

  const handleRemoveFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  }

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
    setCart(cart.filter(item => item.id !== productId));
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
      
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600 text-red-500">Mini Boutique</h1>
          <div className="text-sm font-semibold bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
            Panier: {cart.length} articles
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 flex flex-col lg:flex-row gap-6 mt-4">
        
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
              onAddToCart={handleAddToCart}
              onDeleteProduct={handleDeleteProduct}
            />
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-white p-4 rounded-lg shadow-sm sticky top-24">
            <h2 className="text-lg font-semibold mb-4 border-b pb-2">Mon Panier</h2>
            <Cart cartItems={cart} onRemoveFromCart={handleRemoveFromCart} />
          </div>
        </div>

      </main>

      <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
        <p className="text-sm">© 2026 Mini Boutique React</p>
      </footer>

    </div>
  );
}

export default App;