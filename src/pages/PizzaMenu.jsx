import React from 'react';

export default function PizzaMenu({ addToCart, cartItems = [], updateQuantity }) {
  const getQuantity = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  const simplyVegPizzasTier1 = [
    {
      id: 'margherita',
      name: 'Margherita',
      description: 'A Classic Delight With 100% Real Mozzarella Cheese. Timeless and simple.',
      basePrice: 149,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=60',
      prices: { reg: 149, med: 269, lrg: 420 }
    },
    {
      id: 'cheese-corn',
      name: 'Cheese & Corn',
      description: 'Sweet & Juicy Golden Corn & Real Mozzarella Cheese In A Delectable Combination.',
      basePrice: 230,
      image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&auto=format&fit=crop&q=60',
      prices: { reg: 230, med: 349, lrg: 499 }
    },
    {
      id: 'veg-indiana',
      name: 'Veg Indiana',
      description: 'Tomato, Jalapeno, Corn, Mushroom & Crushed Masala Patty In A Pan Crust.',
      basePrice: 230,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60',
      prices: { reg: 230, med: 349, lrg: 499 }
    },
    {
      id: 'kadhai-paneer-pizza',
      name: 'Kadhai Paneer',
      description: 'Flavor Full Twist Of Spicy Kadhai Sauce With Crunchy Onion, Green Capsicum, Juicy Tomato, Creamy Paneer & Spicy Red Peprika.',
      basePrice: 149,
      image: 'https://images.unsplash.com/photo-1601924582970-d7d522f52e55?w=500&auto=format&fit=crop&q=60',
      prices: { reg: 149, med: 269, lrg: 420 }
    }
  ];

  const simplyVegPizzasTier2 = [
    {
      id: 'indian-choice',
      name: 'Indian Choice',
      description: 'Delight Full Combination Of Onion, capsicum, paneer, Green Chilli & Post Baked Coriander.',
      basePrice: 230,
      image: 'https://images.unsplash.com/photo-1594007654729-407edd1a22c2?w=500&auto=format&fit=crop&q=60',
      prices: { reg: 230, med: 349, lrg: 499 }
    },
    {
      id: 'country-king',
      name: 'Country King',
      description: 'Crunchy Onion, Green Capsicum & Juicy Sweet Corn.',
      basePrice: 230,
      image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=500&auto=format&fit=crop&q=60',
      prices: { reg: 230, med: 349, lrg: 499 }
    },
    {
      id: 'fresh-farm-house',
      name: 'Fresh Farm House',
      description: 'Delight Full Combination Of Onion, Capsicum, Juicy Tomato & Mushroom.',
      basePrice: 230,
      image: 'https://images.unsplash.com/photo-1571066811602-71683a3f680d?w=500&auto=format&fit=crop&q=60',
      prices: { reg: 230, med: 349, lrg: 499 }
    },
    {
      id: 'paneer-lovers',
      name: 'Paneer Lovers',
      description: 'Creamy Paneer, Crispy Capsicum & Spicy Red Peprika.',
      basePrice: 230,
      image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500&auto=format&fit=crop&q=60',
      prices: { reg: 230, med: 349, lrg: 499 }
    },
    {
      id: 'italian-green-wave',
      name: 'Italian Green Wave',
      description: 'Crunchy Onion, Green Capsicum, Juicy Tomato & Jalapeno On Mexican Herbs Sprinkled.',
      basePrice: 230,
      image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=500&auto=format&fit=crop&q=60',
      prices: { reg: 230, med: 349, lrg: 499 }
    }
  ];

  const simplyVegPizzasTier3 = [
    {
      id: 'tandoori-paneer-pizza-large',
      name: 'Tandoori Paneer',
      description: "It's Hot, It's Spicy, It's Indian Tandoori Sauce with Onion, Capsicum, Red Peprika, Jalapeno & Paneer.",
      basePrice: 249,
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop&q=60',
      prices: { reg: 249, med: 399, lrg: 599 }
    },
    {
      id: 'deluxe-veggie',
      name: 'Deluxe Veggie',
      description: 'Onion, Capsicum, Corn, Mushroom & Paneer With Extra Cheese.',
      basePrice: 249,
      image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?w=500&auto=format&fit=crop&q=60',
      prices: { reg: 249, med: 399, lrg: 599 }
    },
    {
      id: 'cpp-king',
      name: 'CPP King',
      description: 'Onion, Capsicum, Tomato, Corn, Jalapeno, Black Olives, Paneer & Pineapple.',
      basePrice: 249,
      image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&auto=format&fit=crop&q=60',
      prices: { reg: 249, med: 399, lrg: 599 }
    },
    {
      id: 'smokey-spicy-paneer',
      name: 'Smokey Spicy Paneer',
      description: 'Achari Twist With Onion, Capsicum, Mushroom, Paneer & Black Olives.',
      basePrice: 249,
      image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=500&auto=format&fit=crop&q=60',
      prices: { reg: 249, med: 399, lrg: 599 }
    },
    {
      id: 'tangy-paneer',
      name: 'Tangy Paneer',
      description: 'Tangy & Spicy Harissa Sauce, Paneer, Capsicum & Onion.',
      basePrice: 249,
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=60',
      prices: { reg: 249, med: 399, lrg: 599 }
    }
  ];

  const maniaSpecialPizzas = [
    {
      id: 'veg-loaded',
      name: 'Veg Loaded',
      description: 'Tomato, Jalapeno, Mushroom & Crushed Arancini Patty in A Fresh Pan Crust.',
      price: 149,
      image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 'golden-choice',
      name: 'Golden Choice',
      description: 'Sweet corn, paneer with extra cheese in A fresh pan crust.',
      price: 149,
      image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 'paneer-tikka',
      name: 'Paneer Tikka',
      description: 'Crunchy Onion & Creamy Paneer With Tandoori Flavour.',
      price: 149,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 'tandoori-paneer-pizza-mania',
      name: 'Tandoori Paneer Pizza',
      description: 'Capsicum, Paneer & Red Peprika on a Tandoori Base.',
      price: 149,
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 'makhani-paneer-pizza-mania',
      name: 'Makhani Paneer Pizza',
      description: 'Capsicum, Paneer & Makhani Sauce.',
      price: 149,
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=60'
    }
  ];

  const pizzaManiaSingles = [
    { id: 'mania-single-tomato', name: 'Tomato Single', price: 69, desc: 'Juicy tomato toppings with loaded mozzarella' },
    { id: 'mania-single-onion', name: 'Onion Single', price: 69, desc: 'Sweet onion slices with classic pizza base' },
    { id: 'mania-single-capsicum', name: 'Capsicum Single', price: 79, desc: 'Crunchy capsicum toppings' },
    { id: 'mania-single-sweetcorn', name: 'Sweet Corn Single', price: 89, desc: 'Juicy golden sweet corn toppings' },
    { id: 'mania-single-paneer', name: 'Paneer Single', price: 89, desc: 'Creamy cubes of soft paneer' }
  ];

  const pizzaManiaDoubles = [
    { id: 'mania-double-onion-capsicum', name: 'Onion + Capsicum Double', price: 99, desc: 'Perfect green capsicum and onion duo' },
    { id: 'mania-double-tomato-corn', name: 'Tomato + Corn Double', price: 99, desc: 'Tangy tomato slices and golden sweet corn' },
    { id: 'mania-double-peprika', name: 'Red Peprika Double', price: 99, desc: 'Spicy red paprika slices' },
    { id: 'mania-double-onion-corn', name: 'Onion + Corn Double', price: 99, desc: 'Sweet corn and red onion slices' },
    { id: 'mania-double-onion-paneer', name: 'Onion + Paneer Double', price: 99, desc: 'Creamy paneer cubes and red onions' }
  ];

  const chefPizzaQty = getQuantity('chef-special-pizza');

  const renderAddToCartButton = (itemId, itemName, itemPrice, sizeClass = "py-2.5 text-xs") => {
    const qty = getQuantity(itemId);
    if (qty > 0) {
      return (
        <div className="flex items-center gap-2 w-full text-left">
          <button 
            onClick={() => updateQuantity(itemId, qty - 1)}
            className="w-10 h-10 flex items-center justify-center border-2 border-on-surface bg-secondary-container hover:bg-surface-variant font-extrabold text-lg brutalist-shadow-sm active:translate-y-0.5 active:shadow-none transition-all flex-none"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <button 
            onClick={() => addToCart({ id: itemId, name: itemName, price: itemPrice })}
            className={`flex-grow bg-primary text-white ${sizeClass} border-2 border-on-surface font-title-md uppercase tracking-widest brutalist-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active-press flex items-center justify-center gap-1.5`}
          >
            ADD TO CART (+{qty})
          </button>
        </div>
      );
    }
    return (
      <button 
        onClick={() => addToCart({ id: itemId, name: itemName, price: itemPrice })}
        className={`w-full bg-primary text-white ${sizeClass} border-2 border-on-surface font-title-md uppercase tracking-widest brutalist-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active-press flex items-center justify-center gap-1.5`}
      >
        <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
        ADD TO CART
      </button>
    );
  };

  const renderPizzaCard = (pizza, isMania = false) => {
    const price = isMania ? pizza.price : pizza.basePrice;
    return (
      <div key={pizza.id} className="brutalist-card bg-surface overflow-hidden group flex flex-col justify-between">
        <div>
          <div className="h-48 overflow-hidden relative">
            <img 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              src={pizza.image || 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60'} 
              alt={pizza.name} 
            />
            <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container p-3 rounded-full border-2 border-on-surface font-bold text-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              ₹{price}{!isMania && '+'}
            </div>
          </div>
          <div className="p-6 space-y-2 text-left">
            <h4 className="font-title-md text-primary uppercase text-lg">{pizza.name}</h4>
            <p className="text-on-surface-variant text-sm line-clamp-3">{pizza.description}</p>
          </div>
        </div>
        
        <div className="p-6 pt-0 space-y-4">
          {!isMania && pizza.prices && (
            <div className="grid grid-cols-3 gap-2 py-3 border-y-2 border-dotted border-outline-variant text-center">
              <div>
                <p className="text-[10px] uppercase font-bold text-outline">Reg</p>
                <p className="font-title-md text-sm">₹{pizza.prices.reg}</p>
              </div>
              <div className="border-x-2 border-outline-variant">
                <p className="text-[10px] uppercase font-bold text-outline">Med</p>
                <p className="font-title-md text-sm">₹{pizza.prices.med}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-outline">Lrg</p>
                <p className="font-title-md text-sm">₹{pizza.prices.lrg}</p>
              </div>
            </div>
          )}
          {renderAddToCartButton(pizza.id, pizza.name, price)}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center mb-16">
        <div className="space-y-6 text-left">
          <div className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 border-2 border-on-surface font-title-md rotate-[-2deg]">
            HOT & FAST DELIVERY
          </div>
          <h2 className="font-display-xl text-headline-lg md:text-[80px] leading-none uppercase italic">
            The Ultimate Pizza Crave.
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-md">
            Maximum flavor, bold ingredients, and that perfect crust you've been dreaming of. Order now and get it while it's hot!
          </p>
          <div className="flex gap-4 items-center">
            {chefPizzaQty > 0 ? (
              <div className="flex items-center gap-2 text-left">
                <button 
                  onClick={() => updateQuantity('chef-special-pizza', chefPizzaQty - 1)}
                  className="w-12 h-12 flex items-center justify-center border-2 border-on-surface bg-secondary-container hover:bg-surface-variant font-extrabold text-xl brutalist-shadow active:translate-y-0.5 active:shadow-none transition-all"
                >
                  -
                </button>
                <button 
                  onClick={() => addToCart({ id: 'chef-special-pizza', name: 'Chef Special Pizza', price: 230 })}
                  className="bg-primary text-white px-8 py-4 font-title-md uppercase tracking-wide border-2 border-on-surface brutalist-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active-press"
                >
                  ADD TO CART (+{chefPizzaQty})
                </button>
              </div>
            ) : (
              <button 
                onClick={() => addToCart({ id: 'chef-special-pizza', name: 'Chef Special Pizza', price: 230 })} 
                className="brutalist-button bg-primary text-on-primary px-8 py-4 font-title-md uppercase tracking-wide active-press"
              >
                ADD TO CART
              </button>
            )}
            <button className="brutalist-button bg-secondary-container text-on-secondary-container px-8 py-4 font-title-md uppercase tracking-wide active-press">
              View Deals
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <img 
            className="w-full h-auto relative z-10 drop-shadow-[20px_20px_0px_rgba(26,28,28,0.1)]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUdRempbzIrZ-IFcCHzdUiLHgFFXMgqLSqmMo14j72eIv2e37xU-ZlQmSSR6GT1pXze_zJjbHcOf9H-qZVDsDZtvuVwDPm8xF9DpjkXle8WqaLcVxDRXPhRF6sK1lXyE2O9TnMSKq3hu6-0RfaXdQETqQV3wQ68pE6VMoxLTkpDCNmS6ZBhEiJcFJa2ZmtIkiNXtJWWdfqN5CZ4a36Z5g5xs7YFB4JFOy_GQwrxBpDNyrf_WlNJEq7lP2v-f3YtS6asjJSOmLmqPWJ" 
            alt="Delicious steaming hot pizza cheese pull" 
          />
        </div>
      </section>

      {/* Category: Simply Veg TIER 1 (149 / 269 / 420) */}
      <section className="mb-20" id="simply-veg-149">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-1 bg-on-surface flex-grow"></div>
          <h3 className="font-display-xl text-headline-lg-mobile md:text-headline-lg bg-primary text-on-primary px-6 py-2 border-2 border-on-surface rotate-[1deg] uppercase select-none">
            SIMPLY VEG (₹149 / ₹269 / ₹420)
          </h3>
          <div className="h-1 bg-on-surface flex-grow"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {simplyVegPizzasTier1.map(pizza => renderPizzaCard(pizza))}
        </div>
      </section>

      {/* Category: Simply Veg TIER 2 (230 / 349 / 499) */}
      <section className="mb-20" id="simply-veg-230">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-1 bg-on-surface flex-grow"></div>
          <h3 className="font-display-xl text-headline-lg-mobile md:text-headline-lg bg-secondary text-on-secondary px-6 py-2 border-2 border-on-surface rotate-[-1deg] uppercase select-none">
            SIMPLY VEG (₹230 / ₹349 / ₹499)
          </h3>
          <div className="h-1 bg-on-surface flex-grow"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {simplyVegPizzasTier2.map(pizza => renderPizzaCard(pizza))}
        </div>
      </section>

      {/* Category: Simply Veg TIER 3 (249 / 399 / 599) */}
      <section className="mb-20" id="simply-veg-249">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-1 bg-on-surface flex-grow"></div>
          <h3 className="font-display-xl text-headline-lg-mobile md:text-headline-lg bg-on-surface text-surface px-6 py-2 border-2 border-on-surface rotate-[1deg] uppercase select-none">
            SIMPLY VEG (₹249 / ₹399 / ₹599)
          </h3>
          <div className="h-1 bg-on-surface flex-grow"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {simplyVegPizzasTier3.map(pizza => renderPizzaCard(pizza))}
        </div>
      </section>

      {/* Upgrade Section */}
      <section className="my-20 p-8 bg-secondary-container border-4 border-on-surface shadow-[10px_10px_0px_0px_rgba(26,28,28,1)] relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rotate-12 opacity-10"></div>
        <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/3 text-left">
            <h3 className="font-display-xl text-headline-lg-mobile md:text-headline-lg leading-tight uppercase mb-4">
              UPGRADE YOUR PIZZA
            </h3>
            <p className="font-body-lg text-on-secondary-container font-bold">
              Max out your flavor profile with our premium add-ons.
            </p>
          </div>
          <div className="lg:w-2/3 w-full bg-surface border-2 border-on-surface p-4 overflow-x-auto">
            <table className="w-full text-left font-bold min-w-[400px]">
              <thead className="border-b-2 border-on-surface">
                <tr>
                  <th className="py-2">OPTIONS</th>
                  <th className="py-2 text-center text-primary">R</th>
                  <th className="py-2 text-center text-primary">M</th>
                  <th className="py-2 text-center text-primary">L</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-surface-variant text-on-surface">
                <tr>
                  <td className="py-3">Extra Cheese</td>
                  <td className="text-center">40/-</td>
                  <td className="text-center">70/-</td>
                  <td className="text-center">90/-</td>
                </tr>
                <tr>
                  <td className="py-3">Cheese Burst</td>
                  <td className="text-center">60/-</td>
                  <td className="text-center">100/-</td>
                  <td className="text-center">150/-</td>
                </tr>
                <tr>
                  <td className="py-3">Extra Toppings</td>
                  <td className="text-center">20/-</td>
                  <td className="text-center">30/-</td>
                  <td className="text-center">50/-</td>
                </tr>
                <tr>
                  <td className="py-3">Italian Thin Crust</td>
                  <td className="text-center">-</td>
                  <td className="text-center">20/-</td>
                  <td className="text-center">40/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Category: Mania Special */}
      <section className="mb-20" id="mania-special">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-1 bg-on-surface flex-grow"></div>
          <h3 className="font-display-xl text-headline-lg-mobile md:text-headline-lg bg-secondary text-on-secondary px-6 py-2 border-2 border-on-surface rotate-[-1deg] uppercase select-none">
            MANIA SPECIAL (₹149/-)
          </h3>
          <div className="h-1 bg-on-surface flex-grow"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {maniaSpecialPizzas.map(pizza => renderPizzaCard(pizza, true))}
        </div>
      </section>

      {/* Pizza Mania Section */}
      <section className="mb-20 border-4 border-on-surface bg-surface-bright p-8 brutalist-shadow-lg rounded-xl text-left" id="pizza-mania">
        <div className="text-center mb-8">
          <span className="bg-primary text-white font-title-md px-4 py-1 border-2 border-on-surface inline-block transform -rotate-1">
            BUDGET PIZZAS
          </span>
          <h3 className="font-display-xl text-headline-lg uppercase italic text-primary mt-3">
            PIZZA MANIA
          </h3>
          <p className="text-on-surface-variant font-bold max-w-md mx-auto mt-2 text-center text-sm">
            Enjoy single-topping & double-topping value mini-pizzas baked fresh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Veg Singles */}
          <div className="space-y-4">
            <h4 className="font-title-md text-headline-lg-mobile border-b-4 border-on-surface pb-2 text-secondary uppercase">
              Veg Single
            </h4>
            <div className="space-y-3">
              {pizzaManiaSingles.map((pizza) => {
                return (
                  <div key={pizza.id} className="brutalist-card bg-surface p-4 flex justify-between items-center text-left">
                    <div className="max-w-[50%]">
                      <h5 className="font-title-md text-sm uppercase">{pizza.name}</h5>
                      <p className="text-xs text-on-surface-variant line-clamp-1">{pizza.desc}</p>
                      <p className="text-primary font-bold text-sm mt-1">₹{pizza.price}/-</p>
                    </div>
                    <div className="max-w-[48%] flex-grow flex justify-end">
                      {renderAddToCartButton(pizza.id, pizza.name, pizza.price, "py-1.5 px-3 text-[10px]")}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Veg Doubles */}
          <div className="space-y-4">
            <h4 className="font-title-md text-headline-lg-mobile border-b-4 border-on-surface pb-2 text-secondary uppercase">
              Veg Double
            </h4>
            <div className="space-y-3">
              {pizzaManiaDoubles.map((pizza) => {
                return (
                  <div key={pizza.id} className="brutalist-card bg-surface p-4 flex justify-between items-center text-left">
                    <div className="max-w-[50%]">
                      <h5 className="font-title-md text-sm uppercase">{pizza.name}</h5>
                      <p className="text-xs text-on-surface-variant line-clamp-1">{pizza.desc}</p>
                      <p className="text-primary font-bold text-sm mt-1">₹{pizza.price}/-</p>
                    </div>
                    <div className="max-w-[48%] flex-grow flex justify-end">
                      {renderAddToCartButton(pizza.id, pizza.name, pizza.price, "py-1.5 px-3 text-[10px]")}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Banner Ad */}
      <section className="mb-20 bg-error text-white p-8 border-4 border-on-surface shadow-[8px_8px_0px_0px_rgba(26,28,28,1)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-display-xl text-headline-lg-mobile md:text-headline-lg uppercase italic leading-none">
            BUY 1 & GET 1 FREE
          </h4>
          <p className="font-title-md">ONLY ON SATURDAY & THURSDAY</p>
          <p className="text-sm opacity-90 mt-2 font-bold uppercase">
            Medium with Medium | Regular with Regular
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white text-error p-4 border-2 border-on-surface flex flex-col items-center rotate-[-3deg]">
            <span className="text-xs font-bold uppercase">Saturday</span>
            <span className="material-symbols-outlined text-4xl">celebration</span>
          </div>
          <div className="bg-secondary-container text-on-secondary-container p-4 border-2 border-on-surface flex flex-col items-center rotate-[3deg]">
            <span className="text-xs font-bold uppercase">Thursday</span>
            <span className="material-symbols-outlined text-4xl">timer</span>
          </div>
        </div>
      </section>
    </div>
  );
}
