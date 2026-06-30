import React from 'react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onCheckout 
}) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div 
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Drawer Panel */}
      <div 
        className={`absolute top-0 right-0 h-full w-full sm:w-96 bg-surface border-l-4 border-on-surface shadow-[-8px_0px_0px_0px_rgba(26,28,28,1)] flex flex-col p-6 transition-transform duration-300 ease-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b-4 border-on-surface pb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary font-bold">shopping_basket</span>
            <h2 className="font-display-xl text-title-md uppercase text-primary italic">Your Cart</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1 border-2 border-on-surface bg-primary text-white brutalist-shadow-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            aria-label="Close cart"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Scrollable list */}
        <div className="flex-grow overflow-y-auto pr-2 space-y-4 custom-scrollbar">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <span className="material-symbols-outlined text-6xl text-primary-fixed mb-4">local_pizza</span>
              <p className="font-title-md text-on-surface-variant">Your cart is empty!</p>
              <p className="font-body-md text-sm text-outline mt-1">Fill it up with deliciousness</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                key={item.id} 
                className="brutalist-card p-4 bg-white flex justify-between items-center text-left"
              >
                <div className="space-y-1 max-w-[60%]">
                  <h4 className="font-title-md text-sm uppercase truncate">{item.name}</h4>
                  <p className="text-primary font-bold text-sm">₹{item.price} each</p>
                  <p className="text-on-surface-variant text-xs font-semibold">Total: ₹{item.price * item.quantity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center border-2 border-on-surface bg-secondary-container hover:bg-primary-fixed-dim text-on-surface font-bold text-sm brutalist-shadow-sm active:translate-y-0.5 active:shadow-none transition-all"
                  >
                    -
                  </button>
                  <span className="font-title-md text-sm px-1 min-w-[20px] text-center">{item.quantity}</span>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center border-2 border-on-surface bg-secondary-container hover:bg-primary-fixed-dim text-on-surface font-bold text-sm brutalist-shadow-sm active:translate-y-0.5 active:shadow-none transition-all"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info and Checkout */}
        {cartItems.length > 0 && (
          <div className="border-t-4 border-on-surface pt-6 mt-4 space-y-4 text-left">
            <div className="flex justify-between items-center font-bold text-lg">
              <span className="font-title-md">SUBTOTAL:</span>
              <span className="font-display-xl text-2xl text-primary">₹{subtotal}/-</span>
            </div>
            <p className="text-[10px] text-on-surface-variant uppercase font-extrabold text-center">
              GST & Delivery Charges Calculated at Checkout
            </p>
            <button 
              onClick={onCheckout}
              className="w-full bg-primary text-white py-4 font-title-md text-center border-2 border-on-surface brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-wider active-press flex items-center justify-center gap-2"
            >
              Checkout Now
              <span className="material-symbols-outlined">payments</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
