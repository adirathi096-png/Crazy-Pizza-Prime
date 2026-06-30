import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home({ addToCart, cartItems = [], updateQuantity }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const getQuantity = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  const handleCategoryClick = (category) => {
    if (category.toLowerCase() === 'pizzas') {
      navigate('/menu');
    } else {
      navigate('/snacks');
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    
    const query = searchQuery.toLowerCase();
    if (query.includes('pizza')) {
      navigate('/menu');
    } else if (query.includes('burger') || query.includes('shake') || query.includes('pasta') || query.includes('sandwich')) {
      navigate('/snacks');
    } else {
      navigate('/menu');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => {
      section.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const vegIndianaQty = getQuantity('veg-indiana');
  const tandooriBurgerQty = getQuantity('tandoori-paneer-burger');
  const kitKatShakeQty = getQuantity('kit-kat-shake');
  const garlicBreadQty = getQuantity('stuff-garlic-bread');
  const satComboQty = getQuantity('combo-saturday');

  const renderHomeAddToCartButton = (itemId, itemName, itemPrice, sizeClass = "py-2.5 text-xs") => {
    const qty = getQuantity(itemId);
    if (qty > 0) {
      return (
        <div className="flex items-center gap-1.5 w-full text-left">
          <button 
            onClick={() => updateQuantity(itemId, qty - 1)}
            className="w-8 h-8 flex items-center justify-center border-2 border-on-surface bg-secondary-container hover:bg-surface-variant font-extrabold text-sm brutalist-shadow-sm active:translate-y-0.5 active:shadow-none transition-all flex-none"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <button 
            onClick={() => addToCart({ id: itemId, name: itemName, price: itemPrice })}
            className={`flex-grow bg-primary text-white ${sizeClass} border-2 border-on-surface font-title-md uppercase tracking-widest brutalist-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active-press flex items-center justify-center gap-1`}
          >
            ADD (+{qty})
          </button>
        </div>
      );
    }
    return (
      <button 
        onClick={() => addToCart({ id: itemId, name: itemName, price: itemPrice })}
        className={`bg-secondary-container text-on-secondary-container p-1.5 border-2 border-on-surface brutalist-shadow-sm active-press hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all`}
      >
        <span className="material-symbols-outlined text-sm font-bold">add</span>
      </button>
    );
  };

  return (
    <div className="space-y-16">
      {/* Hero & Search Section */}
      <section className="relative animate-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center bg-secondary-container border-4 border-on-surface p-8 brutalist-shadow-lg rounded-xl overflow-hidden">
          <div className="z-10 order-2 md:order-1">
            <span className="bg-primary text-white font-title-md px-4 py-1 border-2 border-on-surface mb-4 inline-block transform -rotate-2">
              NEW CRUNCHY RANGE!
            </span>
            <h2 className="font-display-xl text-headline-lg md:text-[80px] uppercase text-on-secondary-container leading-tight mb-6">
              BITE INTO <br/>
              <span className="text-primary italic">CRAZINESS</span>
            </h2>
            <form onSubmit={handleSearchSubmit} className="relative max-w-md">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-4 bg-surface border-4 border-on-surface font-body-lg focus:outline-none focus:ring-0 focus:border-primary brutalist-shadow" 
                placeholder="Search for Pizzas, Burgers..." 
              />
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary font-bold">
                search
              </span>
            </form>
          </div>
          <div className="relative order-1 md:order-2 h-64 md:h-96">
            <img 
              className="w-full h-full object-contain transform rotate-6 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgk-T_mHZ3vGRMe3v85j4XPC_y6i_UPBvYBy-HNOdLLocY83Kzj26sfTKoBP1ToZbkBHxXSauYXylRRYGdr4tmkbhu7fh35_538RisooXiPTyJ0eVU_UKDdFQOdVHWa5irjc_E2MVazyKmhLNAIYQ_NiS9oN35xfxHbjZk1EulZ_68K2DYTG8n_AO7iF-0QbyI6RpLqUM0LbqnKOEQ8zbYLUXmaVkC_YcqY0vHGS-TYuG_lHT0-1ZCD42tZuI4izX1K_xaPkAtjBl9" 
              alt="Artisanal pepperoni pizza" 
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="animate-section">
        <div className="flex justify-between items-end mb-8">
          <h3 className="font-title-md text-headline-lg-mobile md:text-headline-lg border-l-8 border-primary pl-4">
            POPULAR BITES
          </h3>
          <button 
            onClick={() => navigate('/menu')}
            className="font-label-sm uppercase text-primary underline decoration-4 underline-offset-4 font-bold hover:text-secondary"
          >
            View All Menu
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          <button 
            onClick={() => handleCategoryClick('pizzas')}
            className="group bg-surface border-2 border-on-surface p-6 brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col items-center gap-4 active-press"
          >
            <div className="w-20 h-20 bg-primary-fixed-dim rounded-full flex items-center justify-center border-2 border-on-surface group-hover:bg-secondary-container transition-colors">
              <span className="material-symbols-outlined text-4xl text-on-primary-fixed-variant" style={{ fontVariationSettings: "'FILL' 1" }}>local_pizza</span>
            </div>
            <span className="font-title-md text-title-md uppercase">Pizzas</span>
          </button>

          <button 
            onClick={() => handleCategoryClick('burgers')}
            className="group bg-surface border-2 border-on-surface p-6 brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col items-center gap-4 active-press"
          >
            <div className="w-20 h-20 bg-secondary-fixed rounded-full flex items-center justify-center border-2 border-on-surface group-hover:bg-secondary-container transition-colors">
              <span className="material-symbols-outlined text-4xl text-on-secondary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>lunch_dining</span>
            </div>
            <span className="font-title-md text-title-md uppercase">Burgers</span>
          </button>

          <button 
            onClick={() => handleCategoryClick('shakes')}
            className="group bg-surface border-2 border-on-surface p-6 brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col items-center gap-4 active-press"
          >
            <div className="w-20 h-20 bg-outline-variant rounded-full flex items-center justify-center border-2 border-on-surface group-hover:bg-secondary-container transition-colors">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 1" }}>icecream</span>
            </div>
            <span className="font-title-md text-title-md uppercase">Shakes</span>
          </button>

          <button 
            onClick={() => handleCategoryClick('pasta')}
            className="group bg-surface border-2 border-on-surface p-6 brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col items-center gap-4 active-press"
          >
            <div className="w-20 h-20 bg-tertiary-fixed rounded-full flex items-center justify-center border-2 border-on-surface group-hover:bg-secondary-container transition-colors">
              <span className="material-symbols-outlined text-4xl text-on-tertiary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>dinner_dining</span>
            </div>
            <span className="font-title-md text-title-md uppercase">Pasta</span>
          </button>
        </div>
      </section>

      {/* Hot Deals Carousel */}
      <section className="animate-section">
        <div className="flex items-center gap-4 mb-8">
          <span className="material-symbols-outlined text-primary text-4xl">local_fire_department</span>
          <h3 className="font-title-md text-headline-lg-mobile md:text-headline-lg">HOT DEALS OF THE WEEK</h3>
        </div>
        <div className="flex gap-gutter overflow-x-auto pb-8 snap-x no-scrollbar">
          {/* Deal Card 1 */}
          <div className="flex-none w-[85%] md:w-[450px] snap-center bg-primary border-4 border-on-surface p-8 brutalist-shadow rounded-2xl relative overflow-hidden text-white text-left">
            <div className="relative z-10">
              <span className="bg-secondary-container text-on-secondary-container font-label-sm uppercase px-3 py-1 border-2 border-on-surface mb-4 inline-block">
                Saturday Special
              </span>
              <h4 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-white mb-2 leading-none">BUY 1 & GET 1</h4>
              <p className="font-body-lg text-primary-fixed mb-6">ON ALL MEDIUM PIZZAS</p>
              <button 
                onClick={() => navigate('/menu')}
                className="bg-surface text-primary font-title-md px-6 py-3 border-2 border-on-surface brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active-press"
              >
                ORDER NOW
              </button>
            </div>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 opacity-20 transform rotate-12">
              <span className="material-symbols-outlined text-[180px] text-white">confirmation_number</span>
            </div>
          </div>
          {/* Deal Card 2 */}
          <div className="flex-none w-[85%] md:w-[450px] snap-center bg-on-secondary-fixed text-white border-4 border-on-surface p-8 brutalist-shadow rounded-2xl relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full border-2 border-on-surface flex flex-col items-center justify-center rotate-12 brutalist-shadow">
              <span className="text-[10px] font-bold uppercase">Starts at</span>
              <span className="font-display-xl text-xl leading-none">119/-</span>
            </div>
            <h4 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-secondary-container mb-2 leading-none">COMBO OFFER</h4>
            <p className="font-body-md text-surface-variant mb-6">1 Aloo Tikki Burger + 1 Cold Coffee</p>
            <div className="space-y-2 mb-6 text-left">
              <div className="flex items-center gap-2 text-surface-container-high">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span className="font-label-sm">SAVE UP TO 20%</span>
              </div>
              <div className="flex items-center gap-2 text-surface-container-high">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span className="font-label-sm">FREE DELIVERY</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-8">
              <div className="text-white font-display-xl text-headline-lg tracking-tighter">119/-</div>
              {satComboQty > 0 ? (
                <div className="flex items-center gap-2 text-left">
                  <button 
                    onClick={() => updateQuantity('combo-saturday', satComboQty - 1)}
                    className="w-10 h-10 flex items-center justify-center border-2 border-on-surface bg-secondary-container hover:bg-surface-variant font-extrabold text-lg brutalist-shadow-sm active:translate-y-0.5 active:shadow-none transition-all flex-none text-on-surface"
                  >
                    -
                  </button>
                  <button 
                    onClick={() => addToCart({ id: 'combo-saturday', name: 'Combo Offer (Aloo Tikki + Cold Coffee)', price: 119 })}
                    className="bg-secondary-container text-on-secondary-container font-title-md px-4 py-2.5 border-2 border-on-surface brutalist-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active-press text-xs uppercase"
                  >
                    ADD TO CART (+{satComboQty})
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => addToCart({ id: 'combo-saturday', name: 'Combo Offer (Aloo Tikki + Cold Coffee)', price: 119 })}
                  className="bg-secondary-container text-on-secondary-container font-title-md px-6 py-3 border-2 border-on-surface brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active-press"
                >
                  ADD TO CART
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items Bento */}
      <section className="animate-section">
        <h3 className="font-title-md text-headline-lg-mobile md:text-headline-lg mb-8 text-center uppercase tracking-widest">
          Chef's Picks
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Large Item */}
          <div className="md:col-span-8 bg-surface border-4 border-on-surface p-8 rounded-2xl brutalist-shadow flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                className="w-full h-auto rounded-xl border-2 border-on-surface" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0TGXI1c8B6W8d6F18R6xbf2UVoEJWgVzQ_OklNT6b2otDw-9LmHx2eDnpirUAn8y_J7v1pVfPeVLpjlYfO6QggrlHYGZ0f6r1N0frBQyq63SPX-O8cYMUs5AEDwgC1mC0Y4g5fnn87uCKCigxGRPW6vusEel3Yf86MZa2AsfI0P6Z5iVCS3upl0KhESkDGKTIRFUtPU6LHKiwdQsgBNLnwgTEYsFs9SlktzMjaPXeSkbcCJ1-p4xUX30GZiTzTG_uC4L5BA_6Y5d-" 
                alt="Veg Indiana Pizza" 
              />
            </div>
            <div className="md:w-1/2 text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-600 w-3 h-3 rounded-full"></span>
                <span className="font-label-sm text-green-600 uppercase">Best Seller</span>
              </div>
              <h4 className="font-title-md text-headline-lg-mobile text-primary mb-2">VEG INDIANA PIZZA</h4>
              <p className="text-on-surface-variant mb-6">Tomato, Jalapeno, Corn, Mushroom & Crushed Masala Patty in a Pan Crust.</p>
              <div className="flex items-center justify-between">
                <span className="font-display-xl text-2xl text-on-surface">₹230/-</span>
                {vegIndianaQty > 0 ? (
                  <div className="flex items-center gap-2 text-left">
                    <button 
                      onClick={() => updateQuantity('veg-indiana', vegIndianaQty - 1)}
                      className="w-10 h-10 flex items-center justify-center border-2 border-on-surface bg-secondary-container hover:bg-surface-variant font-extrabold text-lg brutalist-shadow-sm active-translate"
                    >
                      -
                    </button>
                    <button 
                      onClick={() => addToCart({ id: 'veg-indiana', name: 'Veg Indiana Pizza', price: 230 })}
                      className="bg-primary text-white py-2.5 px-6 border-2 border-on-surface font-title-md uppercase text-xs tracking-widest brutalist-shadow-sm active-press flex items-center gap-1.5"
                    >
                      ADD TO CART (+{vegIndianaQty})
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => addToCart({ id: 'veg-indiana', name: 'Veg Indiana Pizza', price: 230 })}
                    className="bg-primary text-white p-3 border-2 border-on-surface brutalist-shadow active-press hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-sm transition-all"
                    aria-label="Add Veg Indiana Pizza to cart"
                  >
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Small Items Column */}
          <div className="md:col-span-4 space-y-gutter">
            {/* Item 1 */}
            <div className="bg-surface border-2 border-on-surface p-4 rounded-xl brutalist-shadow flex items-center gap-4 text-left group">
              <div className="w-20 h-20 flex-none">
                <img 
                  className="w-full h-full object-cover rounded-lg border-2 border-on-surface" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4X7zql2yazbsZcx_63gn7gzDfruQi_niMxFdRTl7PyekOG9gKJ2AdTu5kFHCTTiQgmxvhXq8ql1jSf1gA-Wr0vePonv6Sx-BgnSGESVxolHFkPy-b4RRC6sakYSuIKoid1U5rxpUlghSYBUcq8TJmiX5Yx4X9vbxUTiJanet6oxj68tBCoxtuPIHuGYYNdQPGQANumMLJL1OC5uZQNdOkYfq2lIvxj1ItOW4z24Z_cbOrZgOmAHFYNj5H7eRsqb470zqUjzna6Fbl" 
                  alt="Tandoori Paneer Burger" 
                />
              </div>
              <div className="flex-grow">
                <h5 className="font-title-md text-body-lg">Tandoori Paneer Burger</h5>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-primary font-bold">₹109/-</span>
                  {renderHomeAddToCartButton('tandoori-paneer-burger', 'Tandoori Paneer Burger', 109)}
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-surface border-2 border-on-surface p-4 rounded-xl brutalist-shadow flex items-center gap-4 text-left group">
              <div className="w-20 h-20 flex-none">
                <img 
                  className="w-full h-full object-cover rounded-lg border-2 border-on-surface" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDeMxSxM7OI_lpMkKPzzs0x94gc9_Q-NXVGvVfvZfxGhlfuYJ8SkXJQJNSjp-an6yMZPN8Om27y0o9fsA2AO9LeHv_82zIhWtolbIjm4BMKGB8ygK3x3R_XAC12L8S4YnO1U81Y404P1BnWSM4EblsWy66uDOeThulvmE5BgcBLCmqZ8WAtO5mLNIPFwZ2j5UEaD6hG1wpbP7EPK6XVcvmeJZAbrcLt9ZouDjqiwl2mFlQJPgNU25x33_AruLfFDvT-XUL29UGJBBY" 
                  alt="Kit Kat Shake" 
                />
              </div>
              <div className="flex-grow">
                <h5 className="font-title-md text-body-lg">Kit Kat Shake</h5>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-primary font-bold">₹109/-</span>
                  {renderHomeAddToCartButton('kit-kat-shake', 'Kit Kat Shake', 109)}
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-surface border-2 border-on-surface p-4 rounded-xl brutalist-shadow flex items-center gap-4 text-left group">
              <div className="w-20 h-20 flex-none">
                <img 
                  className="w-full h-full object-cover rounded-lg border-2 border-on-surface" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPz2-ZfjQ6zWiLwv2iND8bmpL81MpIUfBBwkylAewoC7F-EOIX3YRDzBf33VJmUV1X3sfzUxg4n8YvGBcKDZzhCtRjsFqag79wKMo9m9MApLF8-Mq8EAAb14QjANC-iq3uUmI2fMDZcRfLfX7lyuTiSxaGLEkFI6TaU050Yk_WlNwU5W5CXNXfLgo6nsVFnjYw-tHYXcGr29dF8Sb4Q5SLyKq4e0o7UGJgdeD_CpnkcSg24h2h1CakVjTQXd2OcGrfFWqCKUwI5AwJ" 
                  alt="Stuff Garlic Bread" 
                />
              </div>
              <div className="flex-grow">
                <h5 className="font-title-md text-body-lg">Stuff Garlic Bread</h5>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-primary font-bold">₹129/-</span>
                  {renderHomeAddToCartButton('stuff-garlic-bread', 'Stuff Garlic Bread', 129)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Badge Section */}
      <section className="flex flex-col items-center py-12 border-4 border-dashed border-primary rounded-3xl bg-primary-fixed mb-16 animate-section">
        <div className="flex items-center gap-6 flex-col md:flex-row text-center md:text-left">
          <div className="relative">
            <span className="material-symbols-outlined text-[80px] text-primary">delivery_dining</span>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-container rounded-full border-2 border-on-surface animate-bounce"></div>
          </div>
          <div>
            <h3 className="font-display-xl text-headline-lg-mobile md:text-headline-lg uppercase text-primary leading-none">
              Fast & Free Delivery
            </h3>
            <p className="font-title-md text-on-primary-fixed-variant mt-2">
              MINIMUM ORDER 300/- | DISTANCE 2 KM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
