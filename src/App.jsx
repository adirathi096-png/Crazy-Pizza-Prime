import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PizzaMenu from './pages/PizzaMenu';
import SnacksSides from './pages/SnacksSides';
import Deals from './pages/Deals';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      setCartItems((prevItems) => prevItems.filter((i) => i.id !== id));
    } else {
      setCartItems((prevItems) =>
        prevItems.map((i) => (i.id === id ? { ...i, quantity: newQty } : i))
      );
    }
  };

  const handleCheckout = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const confirmCheckout = window.confirm(
      `Confirm checkout for a total of ₹${subtotal}/-?`
    );
    if (confirmCheckout) {
      alert("Thank you for ordering with CRAZY PIZZA PRIME! Your order is being prepared.");
      setCartItems([]);
      setIsCartOpen(false);
    }
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout cartCount={cartCount} onCartClick={() => setIsCartOpen(true)}>
              <Home addToCart={addToCart} cartItems={cartItems} updateQuantity={updateQuantity} />
            </Layout>
          } 
        />
        <Route 
          path="/menu" 
          element={
            <Layout cartCount={cartCount} onCartClick={() => setIsCartOpen(true)}>
              <PizzaMenu addToCart={addToCart} cartItems={cartItems} updateQuantity={updateQuantity} />
            </Layout>
          } 
        />
        <Route 
          path="/snacks" 
          element={
            <Layout cartCount={cartCount} onCartClick={() => setIsCartOpen(true)}>
              <SnacksSides addToCart={addToCart} cartItems={cartItems} updateQuantity={updateQuantity} />
            </Layout>
          } 
        />
        <Route 
          path="/deals" 
          element={
            <Layout cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} containerClass="bg-pattern">
              <Deals addToCart={addToCart} cartItems={cartItems} updateQuantity={updateQuantity} />
            </Layout>
          } 
        />
      </Routes>
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onCheckout={handleCheckout}
      />
    </Router>
  );
}
