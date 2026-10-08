const productData = [
  {
    id: 'niacinamide-serum',
    name: 'Niacinamide Serum',
    category: 'Face',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
    description: 'A silky brightening serum formulated to smooth texture and refine the complexion.',
    rating: 4.8,
    ingredients: 'Niacinamide, Oat, Rosewater',
    skinType: 'All skin types'
  },
  {
    id: 'vitamin-c-serum',
    name: 'Vitamin C Serum',
    category: 'Face',
    price: 4199,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    description: 'Radiance-boosting citrus care that visibly energizes dull, tired-looking skin.',
    rating: 4.9,
    ingredients: 'Vitamin C, Kakadu Plum, Squalane',
    skinType: 'Dull or tired skin'
  },
  {
    id: 'rose-face-wash',
    name: 'Rose Face Wash',
    category: 'Face',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
    description: 'A creamy rose cleanser that lifts away impurities while staying soft and soothing.',
    rating: 4.7,
    ingredients: 'Rosewater, Chamomile, Glycerin',
    skinType: 'Sensitive to normal skin'
  },
  {
    id: 'aloe-vera-face-gel',
    name: 'Aloe Vera Face Gel',
    category: 'Face',
    price: 2299,
    image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=900&q=80',
    description: 'Cooling hydration for skin that needs a refreshing, balanced finish.',
    rating: 4.8,
    ingredients: 'Aloe Vera, Cucumber, Hyaluronic Acid',
    skinType: 'Dry or irritated skin'
  },
  {
    id: 'rose-mist',
    name: 'Rose Mist',
    category: 'Face',
    price: 2149,
    image: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=900&q=80',
    description: 'A botanical veil of hydration that wakes up skin with a dewy soft finish.',
    rating: 4.6,
    ingredients: 'Rose Hydrosol, Aloe, Watermelon',
    skinType: 'All skin types'
  },
  {
    id: 'caffeine-eye-cream',
    name: 'Caffeine Eye Cream',
    category: 'Face',
    price: 3199,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
    description: 'A plush cream that comforts and visibly brightens tired-looking under-eyes.',
    rating: 4.9,
    ingredients: 'Caffeine, Peptides, Shea Butter',
    skinType: 'All skin types'
  },
  {
    id: 'onion-shampoo',
    name: 'Onion Shampoo',
    category: 'Hair',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    description: 'A clarifying shampoo designed to support stronger-looking strands and shine.',
    rating: 4.7,
    ingredients: 'Onion Extract, Biotin, Rosemary',
    skinType: 'Hair concern support'
  },
  {
    id: 'keratin-mask',
    name: 'Keratin Hair Mask',
    category: 'Hair',
    price: 3899,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    description: 'A repair mask that nourishes and smooths strands for a softer finish.',
    rating: 4.8,
    ingredients: 'Keratin, Argan, Coconut Oil',
    skinType: 'Dry or damaged hair'
  },
  {
    id: 'argan-oil',
    name: 'Argan Hair Oil',
    category: 'Hair',
    price: 2899,
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80',
    description: 'Lightweight nourishment that seals in softness and adds sleek shine.',
    rating: 4.8,
    ingredients: 'Argan, Jojoba, Vitamin E',
    skinType: 'Frizz-prone or dry hair'
  },
  {
    id: 'aloe-body-lotion',
    name: 'Aloe Vera Body Lotion',
    category: 'Body',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
    description: 'A comforting lotion that hydrates and cushions skin with a silky finish.',
    rating: 4.7,
    ingredients: 'Aloe Vera, Shea Butter, Oat',
    skinType: 'Dry skin'
  },
  {
    id: 'almond-body-oil',
    name: 'Almond Body Oil',
    category: 'Body',
    price: 2199,
    image: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=900&q=80',
    description: 'Nourishing body oil that glows and softens from head to toe.',
    rating: 4.8,
    ingredients: 'Sweet Almond, Rosehip, Vitamin E',
    skinType: 'Dry or dull skin'
  },
  {
    id: 'vanilla-cream',
    name: 'Vanilla Cream',
    category: 'Body',
    price: 2789,
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
    description: 'Creamy body comfort with soft vanilla notes and rich hydration.',
    rating: 4.6,
    ingredients: 'Vanilla, Shea, Cocoa Butter',
    skinType: 'All skin types'
  },
  {
    id: 'strawberry-lip-balm',
    name: 'Strawberry Lip Balm',
    category: 'Lips',
    price: 699,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    description: 'A soft, cushiony lip balm with balanced hydration and a berry finish.',
    rating: 4.8,
    ingredients: 'Strawberry, Coconut Oil, Beeswax',
    skinType: 'All lips'
  },
  {
    id: 'coffee-lip-scrub',
    name: 'Coffee Lip Scrub',
    category: 'Lips',
    price: 899,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
    description: 'Gentle exfoliation for smoother lips and a fresh awake finish.',
    rating: 4.7,
    ingredients: 'Coffee, Sugar, Jojoba Oil',
    skinType: 'Dry lips'
  },
  {
    id: 'rose-lip-oil',
    name: 'Rose Lip Oil',
    category: 'Lips',
    price: 1150,
    image: 'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=900&q=80',
    description: 'A glossy, cushiony oil that softens lips with a delicate pink sheen.',
    rating: 4.9,
    ingredients: 'Rose Seed Oil, Castor Oil, Peptides',
    skinType: 'All lips'
  }
];

const state = {
  cart: loadCart(),
  currentFilter: 'all',
  searchQuery: '',
  activeProductId: 'niacinamide-serum',
  testimonialIndex: 0,
  wishlist: new Set()
};

function loadCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem('curology-cart') || '[]');
    if (!Array.isArray(savedCart)) return [];
    return savedCart
      .filter((item) => productData.some((product) => product.id === item.id))
      .map((item) => ({ id: item.id, quantity: Math.max(1, Math.min(99, Number(item.quantity) || 1)) }));
  } catch {
    return [];
  }
}

const productGrid = document.getElementById('productGrid');
const filterButtons = [...document.querySelectorAll('.filter-btn')];
const cartCountEl = document.getElementById('cartCount');
const navMenu = document.getElementById('navMenu');
const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');
const backToTop = document.querySelector('.back-to-top');
const modal = document.getElementById('quickViewModal');
const modalContent = document.getElementById('modalContent');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletter-email');
const newsletterMessage = document.getElementById('newsletterMessage');
const quantityValue = document.querySelector('.quantity-value');
const testimonialItems = [...document.querySelectorAll('.testimonial-item')];
const catalogSearch = document.getElementById('catalogSearch');
const routineConcern = document.getElementById('routineConcern');
const storeToast = document.getElementById('storeToast');
let quickViewTrigger = null;

function formatPrice(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
}

function renderProducts() {
  const filteredProducts = productData.filter((product) => {
    const matchesCategory = state.currentFilter === 'all' || product.category.toLowerCase() === state.currentFilter.toLowerCase();
    const searchableText = `${product.name} ${product.category} ${product.ingredients} ${product.description} ${product.skinType}`.toLowerCase();
    return matchesCategory && searchableText.includes(state.searchQuery);
  });

  if (!productGrid) return;

  if (!filteredProducts.length) {
    productGrid.innerHTML = '<p class="no-products">No results found. Try another search or category.</p>';
    return;
  }

  productGrid.innerHTML = filteredProducts
    .map((product) => {
      const wishlisted = state.wishlist.has(product.id) ? 'active' : '';
      return `
        <article class="product-card reveal" data-product-id="${product.id}">
          <button class="quick-view-btn" type="button" data-product-id="${product.id}" aria-label="Quick view ${product.name}">
            <i class="fa-regular fa-eye"></i>
          </button>
          <button class="wishlist-btn ${wishlisted}" type="button" data-wishlist-id="${product.id}" aria-label="Add ${product.name} to wishlist">
            <i class="fa-solid fa-heart"></i>
          </button>
          <div class="product-visual">
                <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async" />
          </div>
          <div class="product-info">
            <div class="product-meta">
              <span class="product-category">${product.category}</span>
              <span class="product-rating">★★★★★ ${product.rating}</span>
            </div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <button class="product-details-link" type="button" data-product-details="${product.id}">PRODUCT DETAILS <span aria-hidden="true">+</span></button>
            <div class="product-footer">
              <span class="product-price">${formatPrice(product.price)}</span>
              <button class="add-bag-btn" type="button" data-product-id="${product.id}" aria-label="Add ${product.name} to bag">Add To Bag</button>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  bindProductCardEvents();
  revealElements();
}

function bindProductCardEvents() {
  document.querySelectorAll('.add-bag-btn').forEach((button) => {
    button.addEventListener('click', () => addToCart(button.dataset.productId));
  });

  document.querySelectorAll('.wishlist-btn').forEach((button) => {
    button.addEventListener('click', () => toggleWishlist(button.dataset.wishlistId, button));
  });

  document.querySelectorAll('.quick-view-btn').forEach((button) => {
    button.addEventListener('click', () => openQuickView(button.dataset.productId));
  });

  document.querySelectorAll('.product-details-link').forEach((button) => {
    button.addEventListener('click', () => openQuickView(button.dataset.productDetails));
  });
}

function saveCart() {
  try {
    localStorage.setItem('curology-cart', JSON.stringify(state.cart));
  } catch {
    showToast('Your bag is available for this visit, but could not be saved on this device.');
  }
  updateCart();
}

function addToCart(productId, quantity = 1, sourceButton) {
  const product = productData.find((item) => item.id === productId);
  if (!product) return;

  const existingItem = state.cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity = Math.min(99, existingItem.quantity + quantity);
  } else {
    state.cart.push({ id: productId, quantity: Math.min(99, quantity) });
  }
  saveCart();

  const button = sourceButton || document.querySelector(`.add-bag-btn[data-product-id="${productId}"]`);
  if (button) {
    const originalText = button.textContent;
    button.textContent = 'ADDED TO BAG';
    button.setAttribute('aria-label', `${product.name} added to bag`);
    setTimeout(() => {
      button.textContent = originalText;
      button.setAttribute('aria-label', `Add ${product.name} to bag`);
    }, 900);
  }
  showToast(`${product.name} added to your bag.`);
}

function cartSubtotal() {
  return state.cart.reduce((total, item) => {
    const product = productData.find((entry) => entry.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function updateCart() {
  const itemCount = state.cart.reduce((total, item) => total + item.quantity, 0);
  if (cartCountEl) {
    cartCountEl.textContent = String(itemCount);
    cartCountEl.parentElement.setAttribute('aria-label', `Shopping bag, ${itemCount} items`);
  }
  const itemCountLabel = document.getElementById('cartItemCount');
  const itemsContainer = document.getElementById('cartItems');
  const emptyState = document.getElementById('cartEmpty');
  const summary = document.getElementById('cartSummary');
  const subtotal = document.getElementById('cartSubtotal');
  if (itemCountLabel) itemCountLabel.textContent = `(${itemCount})`;
  if (subtotal) subtotal.textContent = formatPrice(cartSubtotal());
  if (emptyState) emptyState.hidden = state.cart.length > 0;
  if (summary) summary.hidden = state.cart.length === 0;
  if (!itemsContainer) return;

  itemsContainer.innerHTML = state.cart.map((item) => {
    const product = productData.find((entry) => entry.id === item.id);
    if (!product) return '';
    return `<article class="cart-item" data-cart-item="${product.id}">
      <img src="${product.image}" alt="" loading="lazy" />
      <div class="cart-item-info"><span class="product-category">${product.category}</span><h3>${product.name}</h3><span class="cart-item-price">${formatPrice(product.price)}</span>
        <div class="cart-item-controls" aria-label="Quantity for ${product.name}">
          <button type="button" data-cart-action="decrease" data-product-id="${product.id}" aria-label="Decrease ${product.name} quantity">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-cart-action="increase" data-product-id="${product.id}" aria-label="Increase ${product.name} quantity">+</button>
          <button class="cart-remove" type="button" data-cart-action="remove" data-product-id="${product.id}">Remove</button>
        </div>
      </div>
      <strong class="cart-line-total">${formatPrice(product.price * item.quantity)}</strong>
    </article>`;
  }).join('');
}

let toastTimer;
function showToast(message) {
  if (!storeToast) return;
  storeToast.textContent = message;
  storeToast.classList.add('visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => storeToast.classList.remove('visible'), 2600);
}

function syncDialogLock() {
  const hasOpenDialog = document.querySelector('.modal.open, .search-overlay.open, .cart-overlay.open, .checkout-overlay.open');
  document.body.classList.toggle('dialog-open', Boolean(hasOpenDialog));
}

function toggleWishlist(productId, button) {
  if (state.wishlist.has(productId)) {
    state.wishlist.delete(productId);
    button.classList.remove('active');
  } else {
    state.wishlist.add(productId);
    button.classList.add('active');
  }
}

function openQuickView(productId, returnTo = document.activeElement) {
  const product = productData.find((item) => item.id === productId);
  if (!product) return;
  quickViewTrigger = returnTo;

  const concernNotes = {
    'niacinamide-serum': 'Uneven-looking tone, visible texture',
    'vitamin-c-serum': 'Dull-looking skin, uneven-looking tone',
    'rose-face-wash': 'Daily cleansing, sensitive-to-normal feel',
    'aloe-vera-face-gel': 'Dryness, tight-feeling skin',
    'rose-mist': 'Dehydration, dull-looking skin',
    'caffeine-eye-cream': 'Tired-looking under-eyes',
    'onion-shampoo': 'Hair and scalp care',
    'keratin-mask': 'Dry or damaged-feeling hair',
    'argan-oil': 'Dryness, frizz-prone hair',
    'aloe-body-lotion': 'Dryness, rough-feeling skin',
    'almond-body-oil': 'Dryness, dull-looking skin',
    'vanilla-cream': 'Dryness, everyday body care',
    'strawberry-lip-balm': 'Dry lips',
    'coffee-lip-scrub': 'Dry, flaky lips',
    'rose-lip-oil': 'Dry lips, everyday comfort'
  };

  modalContent.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="modal-copy">
      <span class="product-category">${product.category}</span>
      <h3 id="modalTitle">${product.name}</h3>
      <div class="stars" aria-label="${product.rating} out of 5">★★★★★</div>
      <p>${product.description}</p>
      <p class="detail-price">${formatPrice(product.price)}</p>
      <div class="product-detail-list">
        <div><span>Benefits</span><strong>${product.description}</strong></div>
        <div><span>Key ingredients</span><strong>${product.ingredients}</strong></div>
        <div><span>How to use</span><strong>Use as directed on the product packaging.</strong></div>
        <div><span>Suitable for</span><strong>${concernNotes[product.id] || product.skinType}</strong></div>
      </div>
      <div class="purchase-panel">
        <div class="quantity-selector" aria-label="Quantity selector">
          <button type="button" class="qty-btn" data-action="decrease" aria-label="Decrease quantity">−</button>
          <span class="quantity-value" aria-live="polite">1</span>
          <button type="button" class="qty-btn" data-action="increase" aria-label="Increase quantity">+</button>
        </div>
        <button type="button" class="btn btn-primary add-to-bag" data-product-id="${product.id}">ADD TO BAG · ${formatPrice(product.price)}</button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  syncDialogLock();
  modal.querySelector('.modal-dialog').setAttribute('tabindex', '-1');
  window.setTimeout(() => {
    if (modal.classList.contains('open')) modal.querySelector('.modal-dialog').focus();
  }, 260);

  const qtyButtons = modalContent.querySelectorAll('.qty-btn');
  const modalQtyValue = modalContent.querySelector('.quantity-value');
  let modalQty = 1;

  qtyButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;
      modalQty = action === 'increase' ? modalQty + 1 : Math.max(1, modalQty - 1);
      modalQtyValue.textContent = String(modalQty);
      modalAddBag.textContent = `ADD TO BAG · ${formatPrice(product.price * modalQty)}`;
    });
  });

  const modalAddBag = modalContent.querySelector('.add-to-bag');
  if (modalAddBag) {
    modalAddBag.addEventListener('click', () => addToCart(product.id, modalQty, modalAddBag));
  }
}

function closeQuickView() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  syncDialogLock();
  if (quickViewTrigger && quickViewTrigger.isConnected) quickViewTrigger.focus();
}

function setFilter(filter) {
  state.currentFilter = filter;
  filterButtons.forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  renderProducts();
}

function updateHeaderState() {
  const scrolled = window.scrollY > 24;
  header.classList.toggle('scrolled', scrolled);
}

function revealElements() {
  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
}

function initCategoryFilters() {
  filterButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.filter === state.currentFilter));
    button.addEventListener('click', () => setFilter(button.dataset.filter));
  });
}

function initMobileMenu() {
  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
    if (isOpen) {
      window.setTimeout(() => {
        if (navMenu.classList.contains('open')) navMenu.querySelector('a')?.focus();
      }, 260);
    }
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
      menuToggle.focus();
    }
  });
}

function initCart() {
  const cartOverlay = document.getElementById('cartOverlay');
  const cartDrawer = cartOverlay.querySelector('.cart-drawer');
  const checkoutOverlay = document.getElementById('checkoutOverlay');
  const checkoutDialog = checkoutOverlay.querySelector('.checkout-dialog');
  const checkoutForm = document.getElementById('checkoutForm');
  const checkoutView = document.getElementById('checkoutView');
  const orderSuccess = document.getElementById('orderSuccess');
  const cartToggle = document.querySelector('.bag-toggle');
  let returnFocus = null;
  let checkoutReturnFocus = null;

  function openCart() {
    returnFocus = document.activeElement;
    updateCart();
    cartOverlay.classList.add('open');
    cartOverlay.setAttribute('aria-hidden', 'false');
    syncDialogLock();
    window.setTimeout(() => {
      if (cartOverlay.classList.contains('open')) cartDrawer.focus();
    }, 260);
  }

  function closeCart() {
    cartOverlay.classList.remove('open');
    cartOverlay.setAttribute('aria-hidden', 'true');
    syncDialogLock();
    if (returnFocus && returnFocus.focus) returnFocus.focus();
  }

  cartToggle.addEventListener('click', openCart);
  cartOverlay.querySelectorAll('[data-close-cart]').forEach((button) => button.addEventListener('click', closeCart));
  cartOverlay.addEventListener('click', (event) => {
    const action = event.target.closest('[data-cart-action]');
    if (!action) return;
    const item = state.cart.find((entry) => entry.id === action.dataset.productId);
    if (!item) return;
    if (action.dataset.cartAction === 'remove' || (action.dataset.cartAction === 'decrease' && item.quantity === 1)) {
      state.cart = state.cart.filter((entry) => entry.id !== item.id);
    } else if (action.dataset.cartAction === 'increase') {
      item.quantity = Math.min(99, item.quantity + 1);
    } else if (action.dataset.cartAction === 'decrease') {
      item.quantity -= 1;
    }
    saveCart();
    const nextControl = action.dataset.cartAction === 'remove'
      ? cartDrawer.querySelector('.cart-close')
      : cartDrawer.querySelector(`[data-cart-action="${action.dataset.cartAction}"][data-product-id="${item.id}"]`) || cartDrawer.querySelector('.cart-close');
    window.requestAnimationFrame(() => nextControl?.focus());
  });

  document.getElementById('checkoutButton').addEventListener('click', () => {
    if (!state.cart.length) return;
    checkoutReturnFocus = cartToggle;
    closeCart();
    renderCheckoutSummary();
    checkoutView.hidden = false;
    orderSuccess.hidden = true;
    checkoutOverlay.classList.add('open');
    checkoutOverlay.setAttribute('aria-hidden', 'false');
    syncDialogLock();
    window.setTimeout(() => {
      if (checkoutOverlay.classList.contains('open')) checkoutDialog.focus();
    }, 260);
  });

  function closeCheckout() {
    checkoutOverlay.classList.remove('open');
    checkoutOverlay.setAttribute('aria-hidden', 'true');
    syncDialogLock();
    if (checkoutReturnFocus && checkoutReturnFocus.focus) checkoutReturnFocus.focus();
  }

  checkoutOverlay.querySelectorAll('[data-close-checkout]').forEach((element) => element.addEventListener('click', closeCheckout));

  checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const error = document.getElementById('checkoutError');
    if (!checkoutForm.checkValidity()) {
      error.textContent = 'Please complete each field using a valid email and six-digit PIN code.';
      checkoutForm.reportValidity();
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(checkoutForm.elements.email.value.trim())) {
      error.textContent = 'Please enter a valid email address.';
      checkoutForm.elements.email.focus();
      return;
    }
    if (!/^\d{6}$/.test(checkoutForm.elements.pin.value.trim())) {
      error.textContent = 'Please enter a six-digit PIN code.';
      checkoutForm.elements.pin.focus();
      return;
    }

    const orderNumber = `CU-${Date.now().toString().slice(-7)}`;
    document.getElementById('orderNumber').textContent = orderNumber;
    const orderLines = state.cart.map((item) => {
      const product = productData.find((entry) => entry.id === item.id);
      return `${product.name} × ${item.quantity}`;
    });
    document.getElementById('orderSuccessSummary').textContent = `${orderLines.join(' · ')}. Total ${formatPrice(cartSubtotal() + shippingCost())}`;
    error.textContent = '';
    checkoutView.hidden = true;
    orderSuccess.hidden = false;
  });

  document.querySelector('[data-finish-order]').addEventListener('click', () => {
    state.cart = [];
    saveCart();
    checkoutForm.reset();
    checkoutOverlay.classList.remove('open');
    checkoutOverlay.setAttribute('aria-hidden', 'true');
    syncDialogLock();
    if (checkoutReturnFocus && checkoutReturnFocus.focus) checkoutReturnFocus.focus();
    checkoutView.hidden = false;
    orderSuccess.hidden = true;
    showToast('Your demo order is complete. Thank you.');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (checkoutOverlay.classList.contains('open')) {
        closeCheckout();
      } else if (cartOverlay.classList.contains('open')) {
        closeCart();
      }
    }
    if (event.key !== 'Tab') return;
    const dialog = checkoutOverlay.classList.contains('open') ? checkoutDialog : cartOverlay.classList.contains('open') ? cartDrawer : null;
    if (!dialog) return;
    const focusable = [...dialog.querySelectorAll('a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]')]
      .filter((element) => !element.hidden && element.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  updateCart();
}

function shippingCost() {
  return cartSubtotal() === 0 || cartSubtotal() >= 5000 ? 0 : 99;
}

function renderCheckoutSummary() {
  const itemList = document.getElementById('checkoutItems');
  itemList.innerHTML = state.cart.map((item) => {
    const product = productData.find((entry) => entry.id === item.id);
    return `<div class="checkout-item"><span>${product.name} <small>× ${item.quantity}</small></span><strong>${formatPrice(product.price * item.quantity)}</strong></div>`;
  }).join('');
  document.getElementById('checkoutSubtotal').textContent = formatPrice(cartSubtotal());
  document.getElementById('checkoutShipping').textContent = shippingCost() ? formatPrice(shippingCost()) : 'Complimentary';
  document.getElementById('checkoutTotal').textContent = formatPrice(cartSubtotal() + shippingCost());
}

function initCatalogSearch() {
  const clearButton = document.getElementById('clearCatalogSearch');
  catalogSearch.addEventListener('input', () => {
    state.searchQuery = catalogSearch.value.trim().toLowerCase();
    renderProducts();
  });
  clearButton.addEventListener('click', () => {
    catalogSearch.value = '';
    state.searchQuery = '';
    renderProducts();
    catalogSearch.focus();
  });
}

function initRoutineBuilder() {
  const results = document.getElementById('routineResults');
  const note = document.getElementById('routineNote');
  const recommendations = {
    acne: ['rose-face-wash', 'niacinamide-serum', 'aloe-vera-face-gel'],
    'uneven tone': ['niacinamide-serum', 'vitamin-c-serum', 'rose-mist'],
    dryness: ['aloe-vera-face-gel', 'aloe-body-lotion', 'vanilla-cream'],
    dullness: ['vitamin-c-serum', 'almond-body-oil', 'niacinamide-serum'],
    oiliness: ['rose-face-wash', 'aloe-vera-face-gel', 'rose-mist'],
    texture: ['niacinamide-serum', 'rose-face-wash', 'aloe-vera-face-gel']
  };

  routineConcern.addEventListener('change', () => {
    const concern = routineConcern.value;
    if (!concern) {
      results.innerHTML = '';
      note.textContent = 'Products commonly chosen for this concern.';
      return;
    }
    note.textContent = 'Products commonly chosen for this concern. This is general product discovery, not medical advice.';
    results.innerHTML = recommendations[concern].map((id) => {
      const product = productData.find((entry) => entry.id === id);
      return `<button class="routine-product" type="button" data-routine-product="${product.id}"><span>${product.name}</span><small>${formatPrice(product.price)}</small></button>`;
    }).join('');
    results.querySelectorAll('[data-routine-product]').forEach((button) => {
      button.addEventListener('click', () => openQuickView(button.dataset.routineProduct));
    });
  });
}

function initIngredientDetails() {
  document.querySelectorAll('.ingredient-card').forEach((card) => {
    const button = card.querySelector('.ingredient-copy button');
    const description = card.querySelector('.ingredient-copy p');
    if (!button || !description) return;
    const note = document.createElement('p');
    note.className = 'ingredient-note';
    note.textContent = 'Ingredient descriptions are general. Formulas and concentrations can vary; check each product label for its complete ingredient list.';
    note.hidden = true;
    description.after(note);
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(expanded));
      button.textContent = expanded ? 'Show Less' : 'Learn More';
      note.hidden = !expanded;
    });
  });
}

function initBackToTop() {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initSearchOverlay() {
  const opens = document.querySelectorAll('.search-toggle');
  const closeBtn = document.querySelector('.close-search');
  let searchTrigger = null;

  opens.forEach((button) => {
    button.addEventListener('click', () => {
      searchTrigger = button;
      searchOverlay.classList.add('open');
      searchOverlay.setAttribute('aria-hidden', 'false');
      syncDialogLock();
      searchOverlay.querySelector('.search-panel').setAttribute('tabindex', '-1');
      setTimeout(() => {
        if (searchOverlay.classList.contains('open')) searchInput.focus();
      }, 260);
    });
  });

  function closeSearch() {
    searchOverlay.classList.remove('open');
    searchOverlay.setAttribute('aria-hidden', 'true');
    syncDialogLock();
    if (searchTrigger && searchTrigger.isConnected) searchTrigger.focus();
  }

  closeBtn.addEventListener('click', closeSearch);

  searchOverlay.addEventListener('click', (event) => {
    if (event.target === searchOverlay) {
      closeSearch();
    }
  });

  searchInput.addEventListener('input', (event) => {
    const query = event.target.value.trim().toLowerCase();
    if (!query) {
      searchResults.innerHTML = '';
      return;
    }

    const matches = productData.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.ingredients.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    });

    searchResults.innerHTML = matches.length
      ? matches
          .slice(0, 6)
          .map(
            (product) => `
              <button type="button" class="search-result-item" data-search-product="${product.id}">
                <span>${product.name}</span>
                <small>${product.category}</small>
              </button>
            `
          )
          .join('')
      : '<p class="search-empty">No results found. Try a product, category, or ingredient.</p>';

    searchResults.querySelectorAll('[data-search-product]').forEach((item) => {
      item.addEventListener('click', () => {
        closeSearch();
        openQuickView(item.dataset.searchProduct, document.querySelector('.search-toggle'));
      });
    });
  });
}

function initNewsletterValidation() {
  newsletterEmail.setAttribute('autocomplete', 'email');
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = newsletterEmail.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      newsletterMessage.textContent = 'Please enter a valid email address.';
      newsletterMessage.className = 'newsletter-message error';
      newsletterEmail.focus();
      return;
    }

    newsletterMessage.textContent = "You're on the list.";
    newsletterMessage.className = 'newsletter-message success';
    newsletterForm.reset();
  });
}

function initTestimonials() {
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  function showTestimonial(index) {
    state.testimonialIndex = (index + testimonialItems.length) % testimonialItems.length;
    testimonialItems.forEach((item, itemIndex) => {
      item.classList.toggle('active', itemIndex === state.testimonialIndex);
      item.setAttribute('aria-hidden', String(itemIndex !== state.testimonialIndex));
    });
  }

  prevBtn.addEventListener('click', () => showTestimonial(state.testimonialIndex - 1));
  nextBtn.addEventListener('click', () => showTestimonial(state.testimonialIndex + 1));
  const slider = document.querySelector('.testimonial-slider');
  slider.setAttribute('aria-live', 'polite');
  showTestimonial(state.testimonialIndex);
}

function initGalleryLightbox() {
  const galleryCards = [...document.querySelectorAll('.gallery-card')];
  galleryCards.forEach((card) => {
    card.addEventListener('click', () => {
      const image = card.dataset.galleryImage;
      const lightbox = document.createElement('div');
      lightbox.className = 'modal open';
      lightbox.innerHTML = `
        <div class="modal-backdrop" data-close-modal="true"></div>
        <div class="modal-dialog" role="dialog" aria-modal="true">
          <button class="modal-close" type="button" aria-label="Close gallery image">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <img src="${image}" alt="Curology gallery item" style="width:100%; border-radius: 24px; max-height: 80vh; object-fit: cover;" />
        </div>
      `;

      document.body.appendChild(lightbox);
      syncDialogLock();
      const closeGallery = () => {
        lightbox.remove();
        syncDialogLock();
        card.focus();
      };
      lightbox.querySelector('.modal-close').addEventListener('click', closeGallery);
      lightbox.querySelector('.modal-backdrop').addEventListener('click', closeGallery);
      lightbox.querySelector('.modal-dialog').setAttribute('tabindex', '-1');
      window.setTimeout(() => {
        if (lightbox.isConnected) lightbox.querySelector('.modal-dialog').focus();
      }, 260);
      lightbox.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeGallery();
      });
    });
  });
}

function initQuantityControls() {
  const featuredQuantityBtn = document.querySelectorAll('.featured-grid .qty-btn');
  featuredQuantityBtn.forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;
      let currentValue = Number(quantityValue.textContent);
      currentValue = action === 'increase' ? currentValue + 1 : Math.max(1, currentValue - 1);
      quantityValue.textContent = String(currentValue);
    });
  });

  const featuredAddButton = document.querySelector('.featured-grid .add-to-bag');
  if (featuredAddButton) {
    featuredAddButton.addEventListener('click', () => {
      addToCart(featuredAddButton.dataset.productId, Number(quantityValue.textContent) || 1, featuredAddButton);
    });
  }

  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-close-modal="true"]');
    if (target) closeQuickView();
  });

  const quickViewClose = document.querySelector('#quickViewModal .modal-close');
  if (quickViewClose) quickViewClose.addEventListener('click', closeQuickView);
}

function initStatsCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    counters.forEach((counter) => {
      const target = Number(counter.dataset.count);
      counter.textContent = target < 5 ? target.toFixed(1) : target.toLocaleString();
    });
    return;
  }
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const target = Number(el.dataset.count);
      const duration = 1200;
      const start = performance.now();

      function tick(currentTime) {
        const progress = Math.min((currentTime - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = target < 5 ? value.toFixed(1) : Math.round(value).toLocaleString();
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.4 });

  counters.forEach((counter) => counterObserver.observe(counter));
}

function initNavigationHighlight() {
  const sections = document.querySelectorAll('main section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((section) => observer.observe(section));
}

function init() {
  document.querySelectorAll('main img').forEach((image) => {
    if (!image.closest('.hero')) {
      image.loading = 'lazy';
      image.decoding = 'async';
    }
  });
  renderProducts();
  initCategoryFilters();
  initCatalogSearch();
  initCart();
  initRoutineBuilder();
  initIngredientDetails();
  initMobileMenu();
  initBackToTop();
  initSearchOverlay();
  initNewsletterValidation();
  initTestimonials();
  initGalleryLightbox();
  initQuantityControls();
  initStatsCounters();
  initNavigationHighlight();
  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (modal.classList.contains('open')) closeQuickView();
      if (searchOverlay.classList.contains('open')) {
        searchOverlay.classList.remove('open');
        searchOverlay.setAttribute('aria-hidden', 'true');
      }
      const cartOverlay = document.getElementById('cartOverlay');
      const checkoutOverlay = document.getElementById('checkoutOverlay');
      syncDialogLock();
    }
    if (event.key === 'Tab') {
      const activeDialog = modal.classList.contains('open')
        ? modal.querySelector('.modal-dialog')
        : searchOverlay.classList.contains('open')
          ? searchOverlay.querySelector('.search-panel')
          : null;
      if (!activeDialog) return;
      const focusable = [...activeDialog.querySelectorAll('a[href], button:not(:disabled), input:not(:disabled), [tabindex="0"]')]
        .filter((element) => !element.hidden && element.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  revealElements();
}

init();
