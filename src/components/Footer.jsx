import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="hidden md:block bg-on-surface text-surface py-16 border-t-8 border-primary">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <h2 className="font-display-xl text-headline-lg italic uppercase text-primary mb-6">
            CRAZY PIZZA PRIME
          </h2>
          <p className="font-body-lg text-surface-variant max-w-sm mb-8">
            The boldest flavors in town, delivered fast and fresh. We don't just make pizza; we make memories.
          </p>
          <div className="flex gap-4">
            <button className="w-12 h-12 bg-surface text-on-surface border-2 border-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>

        <div>
          <h5 className="font-title-md text-xl mb-6 uppercase text-secondary-container">
            Quick Links
          </h5>
          <ul className="space-y-4 font-body-md text-surface-variant">
            <li>
              <Link to="/menu" className="hover:text-primary transition-colors">
                Our Menu
              </Link>
            </li>
            <li>
              <Link to="/deals" className="hover:text-primary transition-colors">
                Hot Deals
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Order History
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-title-md text-xl mb-6 uppercase text-secondary-container">
            Find Us
          </h5>
          <p className="font-body-md text-surface-variant mb-4">
            Vikas Nagar, Gali No.5, Near Dayanand Hospital
          </p>
          <p className="font-title-md text-primary">7988907987</p>
          <p className="font-title-md text-primary">8307725922</p>
        </div>
      </div>
      
      <div className="max-w-container-max mx-auto px-margin-desktop mt-16 pt-8 border-t border-surface-variant/20 text-center text-label-sm text-surface-variant/50">
        © 2024 CRAZY PIZZA PRIME. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
