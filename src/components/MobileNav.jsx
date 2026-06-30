import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MobileNav() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Pizzas', path: '/menu', icon: 'local_pizza' },
    { name: 'Snacks', path: '/snacks', icon: 'lunch_dining' },
    { name: 'Deals', path: '/deals', icon: 'local_offer' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe bg-surface border-t-4 border-on-surface">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center p-2 transition-all duration-100 ${
              isActive
                ? 'bg-secondary-container text-on-secondary-container rounded-lg border-2 border-on-surface shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-y-1'
                : 'text-on-surface-variant hover:bg-primary-fixed-dim'
            }`}
          >
            <span 
              className="material-symbols-outlined text-2xl" 
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
            >
              {item.icon}
            </span>
            <span className="font-label-sm uppercase text-[10px] mt-1">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
