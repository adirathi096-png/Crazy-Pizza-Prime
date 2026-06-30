import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';

export default function Layout({ children, cartCount, onCartClick, containerClass = "" }) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-background">
      {/* Header bar */}
      <Header cartCount={cartCount} onCartClick={onCartClick} />

      {/* Main page content wrapper */}
      <main className={`flex-grow pt-24 pb-24 md:pb-12 px-4 md:px-margin-desktop max-w-container-max mx-auto w-full ${containerClass}`}>
        {children}
      </main>

      {/* Floating Action Button (Cart) */}
      <button 
        onClick={onCartClick}
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 w-16 h-16 bg-primary text-white rounded-full border-4 border-on-surface brutalist-shadow-lg flex items-center justify-center hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(26,28,28,1)] transition-all active:scale-95 z-40"
        aria-label="Checkout Basket"
      >
        <span className="material-symbols-outlined text-3xl">shopping_basket</span>
      </button>

      {/* Navigation bar for mobile screens */}
      <MobileNav />

      {/* Footer for desktop screens */}
      <Footer />
    </div>
  );
}
