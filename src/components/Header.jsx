import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ cartCount, onCartClick }) {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pizzas', path: '/menu' },
    { name: 'Snacks & Sides', path: '/snacks' },
    { name: 'Deals', path: '/deals' },
  ];

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-12 h-16 bg-surface border-b-4 border-on-surface shadow-[4px_4px_0px_0px_rgba(26,28,28,1)]">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDrawer}
            className="p-2 active:scale-95 transition-transform hover:text-primary"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-primary text-3xl font-bold">menu</span>
          </button>
          
          <Link to="/" className="flex items-center">
            <h1 className="font-display-xl text-headline-lg-mobile md:text-headline-lg italic uppercase tracking-tighter text-primary select-none">
              CRAZY PIZZA PRIME
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-title-md text-lg uppercase tracking-wider transition-colors hover:text-primary ${
                  isActive ? 'text-primary border-b-4 border-primary' : 'text-on-surface-variant'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Cart and Action Buttons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onCartClick}
            className="relative p-2 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active:scale-95"
            aria-label="Shopping Cart"
          >
            <span className="material-symbols-outlined text-primary text-3xl font-bold">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-on-surface animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Slide-out Drawer */}
      <div 
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          onClick={toggleDrawer}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Drawer Content */}
        <div 
          className={`absolute top-0 left-0 h-full w-80 bg-surface border-r-4 border-on-surface shadow-[8px_0px_0px_0px_rgba(26,28,28,1)] flex flex-col p-6 transition-transform duration-300 ease-out transform ${
            isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center mb-8 border-b-4 border-on-surface pb-4">
            <h2 className="font-display-xl text-title-md uppercase text-primary italic">Navigation</h2>
            <button 
              onClick={toggleDrawer}
              className="p-1 border-2 border-on-surface bg-primary text-white brutalist-shadow-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <div className="flex flex-col gap-4 flex-grow">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={toggleDrawer}
                  className={`brutalist-card p-4 uppercase font-title-md text-left transition-all ${
                    isActive 
                      ? 'bg-primary text-white brutalist-shadow-sm translate-x-1 translate-y-1 shadow-none' 
                      : 'bg-white text-on-surface hover:bg-secondary-container hover:text-on-secondary-container'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="border-t-4 border-on-surface pt-4 text-center">
            <p className="font-display-xl text-sm italic text-primary uppercase">CRAZY PIZZA PRIME</p>
            <p className="font-label-sm text-[10px] text-on-surface-variant mt-1">THE ultimate pizza crave</p>
          </div>
        </div>
      </div>
    </>
  );
}
