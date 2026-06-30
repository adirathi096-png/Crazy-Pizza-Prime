import React from 'react';

export default function Deals({ addToCart, cartItems = [], updateQuantity }) {
  const getQuantity = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  const combos = [
    {
      id: 'combo-1',
      tag: 'COMBO #01',
      tagClass: 'bg-primary text-on-primary rotate-[2deg]',
      name: 'Starter Duo',
      price: 119,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA18Rg8bgXRimYfRKzbRHEHhows2cA7XpwIORcMpRGdQ3Pec4iFbSfU_s8ZrvU4IVLh8cegAg-LhEP5DsSSoT1tSILtX5iU6uBxEjcNuQwPPC4r1UfQi_NY_7eLaPXWy6V_qlG7a9PnnbzMfyqX-IeN4uol97Oa6P0Swwn495NWok0DT_KzRErzBY8wYjhmKBd7I_BuJlVN2Jw1xibv0YJ9G9FGB_ciCdkkHWoP0wwyMp-qDi1BA-iSjbJGpf3J4d4OgH4nvXpgzG7U',
      items: [
        { icon: 'lunch_dining', text: '1 Aloo Tikki Burger' },
        { icon: 'coffee_maker', text: '1 Cold Coffee' }
      ],
      colSpan: 'lg:col-span-5',
      cardClass: 'bg-surface-container-lowest'
    },
    {
      id: 'combo-2',
      tag: 'CHEF\'S SPECIAL',
      tagClass: 'bg-secondary text-on-secondary rotate-[-1deg]',
      name: 'The Triple Treat',
      price: 199,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaguTbHN0bvd1Qo5B7RZC9iaNfOY5ed-wACYwh0geAvzvN510vtL3dmI262H1Ocb6neFHBfai5SHK7p3o2Ts-THnSiD8AinIPd0Ubv7Nu3e8rkXPoEMgARBaPGA0aQ86F3307bThHC8DanxNCrke5Y--aBa8d1VFGs9qZNy_iyfLdO_xtialdx3Ol_B0RC0OhF3j-hP28qMdOGRFrfenVtByyFmdWVCE5pm6zdKwK0JhiX5DsuVvSAD3J5JhTxgQ0bLqJ2Ms7sk4Lb',
      items: [
        { icon: 'stars', text: '1 Chef Spl. Burger' },
        { icon: 'coffee_maker', text: '1 Cold Coffee' },
        { icon: 'breakfast_dining', text: '1 Masala Sandwich' }
      ],
      colSpan: 'lg:col-span-7',
      cardClass: 'bg-surface-container',
      showPizzaIcon: true
    },
    {
      id: 'combo-3',
      tag: 'FEAST FOR TWO',
      tagClass: 'bg-on-surface text-surface',
      name: 'Paneer Lover\'s Pack',
      price: 349,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATL-L6WKHVG7rC1F-9DWL7umT7Hoa-pMzyfhBg3rSTgrgxGU5g1wCWTCOLq1DPOGlNL1Zo1-49ioVDzze8kigFOcjw60NCTsi2mfzIGQrGouSapiPZVS2-kAUPoJARG0Z8beMcmYuZttZWktxvBRD5FYaS9dGjOBKrfgQwzQTZOgIDlbjJ7-D7wI-dnOzvHnptC9caxp48WmeA1HS1npqlXW-ICm6fjDcM7srCqTZG3ZIfxczsVw2_1icDX_lB4p8PyzFfJ2SKgNy-',
      items: [
        { icon: 'lunch_dining', text: '2 Aloo Tikki Burger' },
        { icon: 'nutrition', text: '1 Classic Fries' },
        { icon: 'local_pizza', text: '1 Reg. Paneer Pizza' }
      ],
      colSpan: 'lg:col-span-6',
      cardClass: 'bg-surface-bright',
      showBottomImage: true
    },
    {
      id: 'combo-4',
      tag: 'MEGA COMBO',
      tagClass: 'bg-error text-on-primary animate-pulse',
      name: 'Ultimate Family Pack',
      price: 639,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ7npKe0FYBbLcdjuNuXYuNMrdLHG21Q9wTq-h1OLcfBO6oh-xRGASTj7qVtWuyXEIyieLxJT_g-Db600B_b2Ur4hGnY14jcd22D4wiVMH_RurY94220otqOe00kZukdyJ7BrNK5mLDvJJP4pAzACOLWPSDh2FE78EmoYjDs2Qbtc5EM6Q-ff7tMuV5r8eER9xrGaDCaK-3Qg59Ql-4-0m4tE6R81PuhSP1aFmt-a_Jc0jBYjhcSCeIpsPttJTamsPWbCHIEEuDaDf',
      items: [
        { icon: 'lunch_dining', text: '4 Aloo Tikki Burger' },
        { icon: 'nutrition', text: '1 Classic Fries' },
        { icon: 'rice_bowl', text: '1 Fried Momos' },
        { icon: 'local_pizza', text: '1 Med. Kadhai Paneer Pizza' }
      ],
      colSpan: 'lg:col-span-6',
      cardClass: 'bg-secondary-fixed text-on-secondary-fixed',
      showMonsterImage: true
    },
    {
      id: 'combo-5',
      tag: 'SUPER SAVER #05',
      tagClass: 'bg-tertiary-container text-on-tertiary-container',
      name: 'Mega Feast Pack',
      price: 799,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60',
      items: [
        { icon: 'lunch_dining', text: '4 Aloo Tikki Burger' },
        { icon: 'breakfast_dining', text: '2 Tandoori Sandwich' },
        { icon: 'local_pizza', text: '1 Med. Farm House Pizza' },
        { icon: 'local_drink', text: '1 Ltr. Cold Drink' }
      ],
      colSpan: 'lg:col-span-12',
      cardClass: 'bg-surface-bright',
      showBottomImage: true
    }
  ];

  const renderAddToCartButton = (itemId, itemName, itemPrice, sizeClass = "py-3 px-6 text-sm") => {
    const qty = getQuantity(itemId);
    if (qty > 0) {
      return (
        <div className="flex items-center gap-2 text-left">
          <button 
            onClick={() => updateQuantity(itemId, qty - 1)}
            className="w-12 h-12 flex items-center justify-center border-2 border-on-surface bg-secondary-container hover:bg-surface-variant font-extrabold text-xl brutalist-shadow-sm active:translate-y-0.5 active:shadow-none transition-all flex-none text-on-surface"
          >
            -
          </button>
          <button 
            onClick={() => addToCart({ id: itemId, name: itemName, price: itemPrice })}
            className={`bg-primary text-white ${sizeClass} border-2 border-on-surface font-title-md uppercase tracking-widest brutalist-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active-press flex items-center justify-center gap-1.5`}
          >
            ADD TO CART (+{qty})
          </button>
        </div>
      );
    }
    return (
      <button 
        onClick={() => addToCart({ id: itemId, name: itemName, price: itemPrice })}
        className={`bg-secondary-container text-on-secondary-container font-title-md ${sizeClass} border-2 border-on-surface brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active-press flex items-center gap-1.5`}
      >
        <span className="material-symbols-outlined text-base">add_shopping_cart</span>
        ADD TO CART
      </button>
    );
  };

  return (
    <div className="space-y-16">
      {/* Header Info */}
      <div className="mb-12 text-center md:text-left">
        <div className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 mb-4 brutalist-border brutalist-shadow-sm rotate-[-1deg]">
          <span className="font-title-md text-label-sm uppercase tracking-widest">Limited Time Offers</span>
        </div>
        <h2 className="font-display-xl text-headline-lg md:text-display-xl uppercase italic leading-none text-on-surface mb-4">
          COMBO OFFERS
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Fuel your hunger with our massive value bundles. Curated for the ultimate pizza maniacs!
        </p>
      </div>

      {/* Combo Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-left">
        {combos.map((combo) => (
          <div 
            key={combo.id} 
            className={`${combo.colSpan} group brutalist-border brutalist-shadow ${combo.cardClass} p-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col justify-between relative overflow-hidden`}
          >
            {combo.showPizzaIcon && (
              <div className="absolute -top-10 -right-10 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  local_pizza
                </span>
              </div>
            )}

            <div>
              <div className="flex justify-between items-start mb-6">
                <div className={`px-3 py-1 brutalist-border brutalist-shadow-sm font-bold uppercase text-xs ${combo.tagClass}`}>
                  {combo.tag}
                </div>
                {!combo.showBottomImage && !combo.showMonsterImage && (
                  <div className="w-24 h-24 rounded-full border-4 border-primary overflow-hidden brutalist-shadow-sm flex-none">
                    <img className="w-full h-full object-cover" src={combo.image} alt={combo.name} />
                  </div>
                )}
              </div>
              <h3 className="font-title-md text-title-md uppercase mb-4 text-on-surface">
                {combo.name}
              </h3>

              {combo.showBottomImage || combo.showMonsterImage ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ul className="space-y-2 font-body-md text-on-surface-variant">
                    {combo.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-sm font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>
                          {item.icon}
                        </span> 
                        {item.text}
                      </li>
                    ))}
                  </ul>
                  <div className="relative">
                    <img 
                      className="w-full h-32 object-cover brutalist-border" 
                      src={combo.image} 
                      alt={combo.name} 
                    />
                  </div>
                </div>
              ) : (
                <ul className="space-y-3 font-body-lg text-on-surface-variant">
                  {combo.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {item.icon}
                      </span> 
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-8 flex items-end justify-between">
              <div className="text-primary font-display-xl text-headline-lg tracking-tighter">
                ₹{combo.price}/-
              </div>
              {renderAddToCartButton(combo.id, combo.name, combo.price, combo.id === 'combo-5' ? 'px-8 py-3' : 'px-4 py-3 text-xs')}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Delivery Banner */}
      <section className="mt-16 brutalist-border brutalist-shadow bg-primary text-on-primary p-8 overflow-hidden relative text-left">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-on-primary-fixed-variant opacity-20 transform skew-x-[-20deg] pointer-events-none"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex items-center gap-6 flex-col md:flex-row text-center md:text-left">
            <div className="bg-on-primary p-4 brutalist-border brutalist-shadow-sm text-primary flex-none">
              <span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                delivery_dining
              </span>
            </div>
            <div>
              <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg leading-none uppercase italic">
                Fast & Free Delivery
              </h2>
              <div className="flex gap-4 mt-2 justify-center md:justify-start">
                <span className="font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">payments</span> 
                  MIN. ORDER 300/-
                </span>
                <span className="font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">distance</span> 
                  DISTANCE 2 KM
                </span>
              </div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="font-label-sm uppercase tracking-widest opacity-80 mb-2">Need help ordering?</p>
            <div className="font-title-md text-title-md">7988907987 / 8307725922</div>
            <p className="font-body-md text-sm mt-1 opacity-70">
              VIKAS NAGAR, GALI NO.5, NEAR DAYANAND HOSPITAL
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
