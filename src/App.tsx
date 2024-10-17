import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import AccessoriesPage from './pages/AccessoriesPage';
import SalePage from './pages/SalePage';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number; quantity: number; image: string }[]>([]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const addToCart = (product: { id: number; name: string; price: number; image: string }) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header toggleCart={toggleCart} cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage addToCart={addToCart} />} />
            <Route path="/men" element={<MenPage addToCart={addToCart} />} />
            <Route path="/women" element={<WomenPage addToCart={addToCart} />} />
            <Route path="/accessories" element={<AccessoriesPage addToCart={addToCart} />} />
            <Route path="/sale" element={<SalePage addToCart={addToCart} />} />
          </Routes>
        </main>
        <Footer />
        <Cart isOpen={isCartOpen} toggleCart={toggleCart} cartItems={cartItems} />
      </div>
    </Router>
  );
}

export default App;