import React from 'react';

export default function SnacksSides({ addToCart, cartItems = [], updateQuantity }) {
  const getQuantity = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  const renderAddToCartButton = (itemId, itemName, itemPrice, sizeClass = "py-2 px-3 text-xs") => {
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
            className={`flex-grow bg-primary text-white ${sizeClass} border-2 border-on-surface font-title-md uppercase tracking-widest brutalist-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active-press flex items-center justify-center`}
          >
            ADD (+{qty})
          </button>
        </div>
      );
    }
    return (
      <button 
        onClick={() => addToCart({ id: itemId, name: itemName, price: itemPrice })}
        className={`w-full bg-primary text-white ${sizeClass} border-2 border-on-surface font-title-md uppercase tracking-widest brutalist-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active-press flex items-center justify-center gap-1`}
      >
        <span className="material-symbols-outlined text-[14px]">add_shopping_cart</span>
        ADD TO CART
      </button>
    );
  };

  const categories = [
    {
      title: 'Sure Crispy Fries',
      color: 'bg-primary-container text-on-primary-container',
      items: [
        { id: 'fries-classic', name: 'Classic French Fries', price: 79, desc: 'Crispy golden fries lightly salted.', img: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500&auto=format&fit=crop&q=60' },
        { id: 'fries-peri-peri', name: 'Peri Peri Fries', price: 99, desc: 'Golden fries tossed in spicy peri peri mix.', img: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&auto=format&fit=crop&q=60' },
        { id: 'fries-cheese-burst', name: 'Cheese Burst Fries', price: 129, desc: 'Fries loaded with gooey melted liquid cheese.', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=60' }
      ]
    },
    {
      title: 'Tacos',
      color: 'bg-secondary text-on-secondary',
      items: [
        { id: 'taco-mexican', name: 'Taco Mexican', price: 99, desc: 'Traditional crispy shell packed with Mexican beans and salsa.', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&auto=format&fit=crop&q=60' },
        { id: 'taco-mexican-paneer', name: 'Mexican Paneer Veggie Taco', price: 99, desc: 'Loaded with spiced paneer cubes, veggies, and tangy sauce.', img: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=500&auto=format&fit=crop&q=60' }
      ]
    },
    {
      title: 'Burgers',
      color: 'bg-primary text-white',
      items: [
        { id: 'burger-cheese-slice-extra', name: 'Cheese Slice Extra', price: 10, desc: 'Add a premium slice of cheese to your burger.', img: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500&auto=format&fit=crop&q=60' },
        { id: 'aloo-tikki-burger', name: 'Aloo Tikki Burger', price: 49, desc: 'Crispy potato patty with signature spices.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkXJUNhrBs5MKCvYLaWZTEk5L4dvkfFoGbhwsffeewBzN-FlBXyF-3eWc_YdCCrwYl6I5jKkfmdCsqCo5m-XT0TkENIOvTpmC5n33ZSbf5KcQqxo2Li1kBaArhG2OcjDvsd8vt6ZiDVD5vapbainuDn1ew2oFzO3pXwiV-F6_e9OHvBid06Zfm0-XOmqND0XKmMQiMWSgG5nGuxECND_8ubDhaz722JwAsksW5I9NWvsEZOznlstY8VeozmhL8q_zvFd-1LzIWy_JJ' },
        { id: 'masala-grill-burger', name: 'Masala Grill Burger', price: 59, desc: 'Charred grill paneer patty with secret masala blend.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh5ovI1v5b2Ja-QgzNf7W3OMcwozL7-DtS2fa4OZRljPRE4ZeUeXgNN2FIh38RbG2tCKsV0D0qwKwh1EVN8ThVbh4ic5QKUXCk49jqwQv1mhbpvZh34q_IE5t_QBlMuFnvv_6IU9Wp3QWndeLRYOxBsqpN9qRkWCQhzRMz2JCpH-KFC-oLmgLqHhJvwG62HBS4-MRDG5wFgMmIFDiqvhFuYKrAnm4eGK-wENPy2ka0fuqYfGJ2XP0X4GT1EulqSDcgnm1_3NLcUIqw' },
        { id: 'burger-chef-special', name: 'Chef Special Burger', price: 69, desc: 'Handcrafted patty with extra sauces and toppings.', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60' },
        { id: 'burger-spicy-veggies', name: 'Spicy Veggies Burger', price: 69, desc: 'Spiced mixed vegetable patty with jalapenos.', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60' },
        { id: 'burger-momos', name: 'Momos Burger', price: 59, desc: 'A fusion burger stuffed with crispy fried momos.', img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60' },
        { id: 'jumbo-burger', name: 'Jumbo Burger', price: 109, desc: 'The ultimate double patty stack for the hungriest maniacs.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpkKsrDWNmlLPfOQG5cPoHgqQg547FEs0Z6EfdFr4sQEuL8AGyAjV6dkHy-JPQKz6vd7zuZ2gqUt6JqjkpNGVHrhuVLQkUI36NPyypFG1T9TWbmTM8vK9L-78tIQxF0gcXnrhHc7QhKeF5pjediXSkeTfmYGiSDGu1cmXcGcJsyS5mEAh-OhZksDnAJHaEULcUa44rVo3sD981bJNBXuSa9p3lPNla8sKyvJ0oN_nE2I34d9Ui6dQdwWOmJfrf1C4xkn1mqr3w7QYo' },
        { id: 'burger-zingy-paneer', name: 'Zingy Paneer Burger', price: 109, desc: 'Crunchy paneer patty inside soft buns with zingy dressing.', img: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500&auto=format&fit=crop&q=60' }
      ]
    },
    {
      title: 'Sandwiches',
      color: 'bg-tertiary-container text-on-tertiary-container',
      items: [
        { id: 'sandwich-masala-grill', name: 'Masala Grill Sandwich', price: 99, desc: 'Spiced veggies grilled in brown or white bread.', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&auto=format&fit=crop&q=60' },
        { id: 'corn-lover-sandwich', name: 'Corn Lover Sandwich', price: 109, desc: 'Sweet corn & melted cheese bliss.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCj33kHc8TsQyzIZtm_hCj7JI4AEv4ZhKKinEOgnXVa3IBNG2E1PmHjcLoZEQ9e-cXSRMLz8SEKLc27aXSMgKXI8ELc-N4qESnGdax0z4FrFnSPHdKaMCEupYVikNKTVhx6ct1Dipy2xMyi_My9sbHEe_N-C-eZNrNd5MWm2eX83izGKUnTO-PC3YkGwAxvx20Ol9jinSjCFFbVCMzq2KWYdlffavr90cHwW8ttDQV9GXUthWqvwKo8m28RGjIeZFXPDKQoSsEEYlH' },
        { id: 'sandwich-cheese-lover', name: 'Cheese Lover Sandwich', price: 109, desc: 'Loaded with mozzarella, cheddar, and cheese sauce.', img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60' },
        { id: 'sandwich-tangy-paneer', name: 'Tangy Paneer Sandwich', price: 139, desc: 'Tangy paneer tikka cubes sandwiched and grilled.', img: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=500&auto=format&fit=crop&q=60' },
        { id: 'sandwich-tandoori', name: 'Tandoori Sandwich', price: 139, desc: 'Spicy tandoori spiced veggies and cottage cheese.', img: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=500&auto=format&fit=crop&q=60' },
        { id: 'cpp-club-sandwich', name: 'CPP Club Sandwich', price: 149, desc: 'Our signature triple-decker masterpiece.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBT_ClRrmX-NsdRh89ZX1-LqwFk7XFqS1dshuNQmgnqeNH9a0LF6IXyoFCYGVJZm9uLtILl1IyQYpP7GN-ELw_2Xg2CvhlhTcpFr2MHIVjf8HQ8tyd7Q5x_9aVQkBSxdojY2TEToAlBq7cjCvny0o0tXfoYro21ibE2w-Ayr6JVBm-BdDtdhjcS4R11jYxc4wGwr_5OoxzZGUMc2L7MPP2XH1VeWwBgEtgOwcOJKl5XLCp2j-USmQOPtH2GGstKTxSVr7ZkFkytnFe0' }
      ]
    },
    {
      title: 'Maggie',
      color: 'bg-surface-variant text-on-surface-variant',
      items: [
        { id: 'maggi-cheese', name: 'Cheese Maggi', price: 79, desc: 'Classic noodles cooked with melted cheese slice.', img: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=500&auto=format&fit=crop&q=60' },
        { id: 'maggi-paneer-masala', name: 'Paneer Masala Maggi', price: 89, desc: 'Maggi noodles tossed with fried paneer chunks.', img: 'https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=500&auto=format&fit=crop&q=60' },
        { id: 'maggi-tandoori-paneer', name: 'Tandoori Paneer Maggi', price: 99, desc: 'Smokey tandoori sauce combined with noodles & paneer.', img: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&auto=format&fit=crop&q=60' }
      ]
    },
    {
      title: 'Pasta',
      color: 'bg-primary-container text-on-primary-container',
      items: [
        { id: 'alfredo-pasta', name: 'Alfredo Pasta', price: 109, desc: 'Penne cooked in rich, creamy white sauce.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCut7WrGXSM1D0_1ZM2tYO5qGJCbLyST7haYBZ2vx-6NIqa9sPOCzcW2VDxoNn8pF2fP7TkuNJIJZNwQf2T1ymjBN9oxiYGNhcUiwjW0_knHiDXm1Fc_fKKy_qoO0uKkH0Rh9DrwHTXwVASinV965eLYG5F_MrtuLNDD1GGyTGZ1C8yIJlZG5dwbwIA_RbxwyU4EXq5_kxEBGuiLi0xHvT-o0iF9s2rwscmgxfV_x_b6yyTb5cUxep58Xxi1I-lbz3TdNhowFb2ZJFu' },
        { id: 'pasta-red-sauce', name: 'Penne Red Sauce Pasta', price: 109, desc: 'Penne tossed in spicy Italian tomato concasse.', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=60' },
        { id: 'mix-sauce-pasta', name: 'Mix Sauce Pasta', price: 119, desc: 'Blend of red and white sauce with exotic veggies.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWmR_U5Z7UrSCBdQEhsPQZv1H9pxGGhxe7wYqeaiQ7jIeXC80bC-CbWTlKemO5kdVmIp-_y5vowoCeRaqe3cBgMzIrYIvUdyXqSnjrlNWS2y8J2ldTtSs_45LQJPpFAIBN_hyKijXDB26_712ls7gi_oUkJf99VumsrH3MXsAOJbKjaxvfKybVUAvgeQFhGSCZNR9PpDLLTnG5MX4SYAf6q1VtTMAFnVg3O-3iXY3goBwgWYrr9O17aTkdjmrhmtMyS7YiRtnjkMfG' },
        { id: 'makhani-pasta', name: 'Makhani Pasta', price: 119, desc: 'Penne cooked in rich, spicy Indian gravy.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmL1f4TO9vBST8Jv_8xhDdqFal9CsmdE6nRGMWDCCsMe8Jz2sMqZWDNGvmZR1ac7nw7Bpwpp43zf-SDyQxPAYkEe4lS1A8R9lBL6cP0le_MCp7frYuXSayULXYuTGSSEUprUs_ts8djfk5dqgK4UYdkIcUECKIkBwMIbhyOP9lS_dyJY7OoQiOFLlnlg68OC1LxF-xO4HHfFg4tszEIILlmHYMKaSf6_4848OvIoS1MEdsCfEQXsTV9ajZUpBygPWcfWaMIQiXMZWx' },
        { id: 'pasta-tandoori-cheese', name: 'Tandoori Cheese Pasta', price: 129, desc: 'Penne in smokey tandoori sauce baked with cheese.', img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&auto=format&fit=crop&q=60' }
      ]
    },
    {
      title: 'Calzone',
      color: 'bg-on-secondary-fixed text-white',
      items: [
        { id: 'calzone-paneer-tikka', name: 'Paneer Tikka Calzone', price: 129, desc: 'Pockets folded and stuffed with spiced paneer tikka filling.', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop&q=60' },
        { id: 'calzone-cheese-veggie', name: 'Cheese Veggie Delight Calzone', price: 129, desc: 'Folded pizza pockets stuffed with cheese and mixed vegetables.', img: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?w=500&auto=format&fit=crop&q=60' }
      ]
    },
    {
      title: 'Garlic Bread & Sides',
      color: 'bg-secondary-container text-on-secondary-container',
      items: [
        { id: 'garlic-bread-sticks', name: 'Garlic Bread Sticks', price: 99, desc: 'Cheese bread sticks baked to perfection. Tastes best with dips.', img: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=500&auto=format&fit=crop&q=60' },
        { id: 'stuff-garlic-bread', name: 'Stuff Garlic Bread', price: 129, desc: 'Freshly baked garlic bread stuffed with sweet corn & cheese.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPz2-ZfjQ6zWiLwv2iND8bmpL81MpIUfBBwkylAewoC7F-EOIX3YRDzBf33VJmUV1X3sfzUxg4n8YvGBcKDZzhCtRjsFqag79wKMo9m9MApLF8-Mq8EAAb14QjANC-iq3uUmI2fMDZcRfLfX7lyuTiSxaGLEkFI6TaU050Yk_WlNwU5W5CXNXfLgo6nsVFnjYw-tHYXcGr29dF8Sb4Q5SLyKq4e0o7UGJgdeD_CpnkcSg24h2h1CakVjTQXd2OcGrfFWqCKUwI5AwJ' },
        { id: 'garlic-bread-corn-jalapeno', name: 'Corn Jalapeno Garlic Bread', price: 139, desc: 'Garlic bread topped with corn and spicy jalapenos.', img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&auto=format&fit=crop&q=60' },
        { id: 'sides-pizza-puff', name: 'Pizza Puff 5pcs', price: 99, desc: 'Crispy dough puffs filled with pizza sauce and cheese.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=60' },
        { id: 'choco-lava', name: 'Choco Lava Cake', price: 90, desc: 'Hot chocolate cake with a rich liquid chocolate center.', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60' }
      ]
    },
    {
      title: 'Wraps',
      color: 'bg-outline-variant text-on-surface-variant',
      items: [
        { id: 'wrap-aloo-tikki', name: 'Aloo Tikki Wrap', price: 69, desc: 'Crispy potato patty wrapped with fresh onion and dressing.', img: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=60' },
        { id: 'wrap-masala', name: 'Masala Wrap', price: 79, desc: 'Spiced veggies wrapped in warm tortilla.', img: 'https://images.unsplash.com/photo-1562059390-a761a084768e?w=500&auto=format&fit=crop&q=60' },
        { id: 'wrap-special', name: 'Special Wrap', price: 99, desc: 'Chef\'s special loaded wrap with extra paneer.', img: 'https://images.unsplash.com/photo-1584031036380-3fb6f2d51880?w=500&auto=format&fit=crop&q=60' },
        { id: 'wrap-salsa-paneer', name: 'Salsa Paneer Wrap', price: 109, desc: 'Spicy Mexican salsa mixed with grilled paneer chunks.', img: 'https://images.unsplash.com/photo-1562059390-a761a084768e?w=500&auto=format&fit=crop&q=60' }
      ]
    },
    {
      title: 'Chinese Hut',
      color: 'bg-tertiary text-on-tertiary',
      items: [
        { id: 'chinese-paneer-momos-gravy', name: 'Paneer Momos Gravy', price: 99, desc: 'Momos filled with paneer served in thick gravy.', img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=60' },
        { id: 'chinese-malai-momos-gravy', name: 'Malai Momos Gravy', price: 99, desc: 'Creamy malai momos served in white gravy.', img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=60' },
        { id: 'chinese-tandoori-momos-gravy', name: 'Tandoori Momos Gravy', price: 119, desc: 'Spicy tandoori momos served in rich orange gravy.', img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=60' },
        { id: 'chinese-makhani-momos-gravy', name: 'Makhani Gravy Momos', price: 119, desc: 'Momos tossed in buttery, sweet and spicy makhani gravy.', img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=60' },
        { id: 'chinese-spring-roll', name: 'Veg Spring Roll', price: 99, desc: 'Crispy fried rolls packed with Hakka noodles & veggies.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=60' },
        { id: 'chinese-kfc-momos', name: 'KFC Momos', price: 139, desc: 'Super crunchy, breaded and deep-fried crispy momos.', img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=60' }
      ]
    },
    {
      title: 'Refreshers',
      color: 'bg-secondary-fixed text-on-secondary-fixed',
      items: [
        { id: 'refresher-mojito', name: 'Virgin Mojito', price: 79, desc: 'Mint leaves, lemon chunks, sugar syrup and soda.', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=60' },
        { id: 'refresher-strawberry-mojito', name: 'Strawberry Mojito', price: 89, desc: 'Strawberry flavored fresh mint mocktail.', img: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=500&auto=format&fit=crop&q=60' },
        { id: 'refresher-green-apple', name: 'Green Apple Drink', price: 89, desc: 'Tangy green apple syrup with soda and ice.', img: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=500&auto=format&fit=crop&q=60' }
      ]
    },
    {
      title: 'Shakes',
      color: 'bg-primary text-on-primary',
      items: [
        { id: 'cold-coffee', name: 'Cold Coffee', price: 99, desc: 'Rich espresso blended with milk and vanilla ice cream.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMW_9dfsNIjq9HEaiw87v5Bvr1xI1eutLbO2Qd8LLrtRF6iJ4VZuVO3gQt8-E9wubeHqA3wTmR_ZKHFOCTTVCnboQU3Y4x_W0hx0LbGnuCXpskD8aXMgxKud2E1AMJ5oBVjImfCSND26RVt2ZE5yql3KsxGl1onMbyNUpHN_QgYuWoVNG0nlzUEy9x0uPuziS5cSGatyX562IRN5d9ccgTI5m8vsIQij91gDyZaKSEZi8CWjVfJzwmB0q_QN7Oikzbw587N-LKQjCU' },
        { id: 'shake-vanilla', name: 'Vanilla Shake', price: 99, desc: 'Creamy shake with pure vanilla extract.', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60' },
        { id: 'shake-strawberry', name: 'Strawberry Shake', price: 99, desc: 'Fresh strawberry blend with cream and milk.', img: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&auto=format&fit=crop&q=60' },
        { id: 'shake-oreo', name: 'Oreo Choco Shake', price: 109, desc: 'Oreo biscuits blended with chocolate syrup.', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60' },
        { id: 'kit-kat-shake', name: 'Kit Kat Shake', price: 109, desc: 'Crunchy Kit Kat pieces blended in chocolate shake.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9-iAqsxVL6smfw6S9IJ-efUK9gPH8GbeZKdVQz0vdzfyHGTfFQZHrXLO7EafneqMQ7tzVXusR3sp6YXSLE_Vln5GOTowyv9FZn4zqQItQYRQdB2M9az1st81SV4ddnqAqG9n18M0UNHW9L7GL0FOdzWqtY6LIV1J4ZKwz_fx5zIWsCZmkQr60VHbuDRWD6umncH29CNFJFEcgAKlVLN8os_-KdZP6E4lY7ACh6VuhNOMV9op92fd63cvNQzDs9UTGMgIdan-cV-uE' },
        { id: 'brownie-shake', name: 'Brownie Shake', price: 109, desc: 'Rich chocolate brownie blended in thick milkshake.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFcii7ComGnlzMcDfh4xw3w9mMz4gmRY0DaNYo6R6chgMPAmMvTo4KasQ00I7w4nd081cAnuUVLTNEH1l_EfZ-NXLJX4r91eKmk-bXI4enTsSpFR3QPVqiSIcf_TgIIDt-ff2jcdvWJYhVKEhRamlnykSsGetn-7ZnOKeRtR-W4lNsrrjvO21OhK-qjmH3f4rXK64hA65MPiFvnehhVTIsUpZDGrrq649X1T44Fl7ERRiqDS0Tm8vDM65Ff3pYyjdQor_ZhfPlYGO6' }
      ]
    },
    {
      title: 'Dips',
      color: 'bg-outline text-surface',
      items: [
        { id: 'dip-chipotle', name: 'Cheese Dip Chipotle', price: 20, desc: 'Spicy chipotle cheese dipping sauce.', img: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&auto=format&fit=crop&q=60' },
        { id: 'dip-cheese', name: 'Cheese Dip', price: 20, desc: 'Classic cheddar cheese sauce.', img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop&q=60' },
        { id: 'dip-chili-garlic', name: 'Chili Garlic Dip', price: 20, desc: 'Spicy garlic chili dip.', img: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&auto=format&fit=crop&q=60' }
      ]
    }
  ];

  return (
    <div className="space-y-16">
      {categories.map((category, idx) => (
        <section key={idx} className="mb-16" id={category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
          <div className="flex items-center gap-4 mb-8">
            <h2 className={`font-title-md text-title-md uppercase px-4 py-1 border-2 border-on-surface brutalist-card ${category.color}`}>
              {category.title}
            </h2>
            <div className="flex-grow h-1 bg-on-surface-variant opacity-20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {category.items.map((item) => (
              <div key={item.id} className="brutalist-card bg-surface border-2 border-on-surface p-base flex flex-col justify-between group overflow-hidden">
                <div>
                  <div className="relative h-48 mb-4 overflow-hidden border-2 border-on-surface">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={item.img} alt={item.name} />
                    <div className="absolute top-2 right-2 bg-secondary-container text-on-secondary-container font-title-md text-body-lg px-3 py-1 border-2 border-on-surface price-badge">
                      {item.price}/-
                    </div>
                  </div>
                  <div className="text-left mb-4">
                    <h3 className="font-title-md text-title-md uppercase leading-tight">{item.name}</h3>
                    <p className="text-on-surface-variant text-xs mt-1 min-h-[32px] line-clamp-2">{item.desc}</p>
                  </div>
                </div>
                {renderAddToCartButton(item.id, item.name, item.price)}
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Promotion / Delivery Banner */}
      <section className="mb-16 bg-on-surface text-surface p-8 border-4 border-primary brutalist-card relative overflow-hidden text-left">
        <div className="relative z-10">
          <h2 className="font-display-xl text-headline-lg italic uppercase text-secondary-container">
            Fast & Free Delivery
          </h2>
          <p className="font-title-md text-body-lg mt-2">MINIMUM ORDER 300/- | WITHIN 2 KM</p>
          <div className="mt-6 flex gap-4">
            <div className="flex items-center gap-2 border-2 border-surface px-4 py-2">
              <span className="material-symbols-outlined">call</span>
              <span className="font-bold">7988907987</span>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4 pointer-events-none">
          <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>moped</span>
        </div>
      </section>
    </div>
  );
}
