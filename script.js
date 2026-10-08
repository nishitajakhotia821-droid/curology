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
  cartCount: 0,
  currentFilter: 'all',
  activeProductId: 'niacinamide-serum',
  testimonialIndex: 0,
  wishlist: new Set()
};

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

function formatPrice(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
}

function renderProducts() {
  const filteredProducts = productData.filter((product) => {
    if (state.currentFilter === 'all') return true;
    return product.category.toLowerCase() === state.currentFilter.toLowerCase();
  });

  if (!productGrid) return;

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
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div class="product-info">
            <div class="product-meta">
              <span class="product-category">${product.category}</span>
              <span class="product-rating">★★★★★ ${product.rating}</span>
            </div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
              <span class="product-price">${formatPrice(product.price)}</span>
              <button class="add-bag-btn" type="button" data-product-id="${product.id}">Add To Bag</button>
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
}

function addToCart(productId) {
  const product = productData.find((item) => item.id === productId);
  if (!product) return;

  state.cartCount += 1;
  cartCountEl.textContent = state.cartCount;

  const button = document.querySelector(`.add-bag-btn[data-product-id="${productId}"]`);
  if (button) {
    button.textContent = 'ADDED';
    setTimeout(() => {
      button.textContent = 'ADD TO BAG';
    }, 900);
  }
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

function openQuickView(productId) {
  const product = productData.find((item) => item.id === productId);
  if (!product) return;

  modalContent.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="modal-copy">
      <span class="product-category">${product.category}</span>
      <h3>${product.name}</h3>
      <div class="stars" aria-label="${product.rating} out of 5">★★★★★</div>
      <p>${product.description}</p>
      <div>
        <span class="price-tag">${formatPrice(product.price)}</span>
        <span class="product-category">${product.rating}/5</span>
      </div>
      <div class="feature-list">
        <li><span>Ingredients</span><strong>${product.ingredients}</strong></li>
        <li><span>Skin type</span><strong>${product.skinType}</strong></li>
      </div>
      <div class="purchase-panel">
        <div class="quantity-selector" aria-label="Quantity selector">
          <button type="button" class="qty-btn" data-action="decrease">−</button>
          <span class="quantity-value">1</span>
          <button type="button" class="qty-btn" data-action="increase">+</button>
        </div>
        <button type="button" class="btn btn-primary add-to-bag" data-product-id="${product.id}">ADD TO BAG</button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');

  const qtyButtons = modalContent.querySelectorAll('.qty-btn');
  const modalQtyValue = modalContent.querySelector('.quantity-value');
  let modalQty = 1;

  qtyButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;
      modalQty = action === 'increase' ? modalQty + 1 : Math.max(1, modalQty - 1);
      modalQtyValue.textContent = modalQty;
    });
  });

  const modalAddBag = modalContent.querySelector('.add-to-bag');
  if (modalAddBag) {
    modalAddBag.addEventListener('click', () => addToCart(product.id));
  }
}

function closeQuickView() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function setFilter(filter) {
  state.currentFilter = filter;
  filterButtons.forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle('active', active);
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
    button.addEventListener('click', () => setFilter(button.dataset.filter));
  });
}

function initMobileMenu() {
  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
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

  opens.forEach((button) => {
    button.addEventListener('click', () => {
      searchOverlay.classList.add('open');
      searchOverlay.setAttribute('aria-hidden', 'false');
      setTimeout(() => searchInput.focus(), 120);
    });
  });

  closeBtn.addEventListener('click', () => {
    searchOverlay.classList.remove('open');
    searchOverlay.setAttribute('aria-hidden', 'true');
  });

  searchOverlay.addEventListener('click', (event) => {
    if (event.target === searchOverlay) {
      searchOverlay.classList.remove('open');
      searchOverlay.setAttribute('aria-hidden', 'true');
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
      : '<div class="search-result-item"><span>No matching products</span></div>';

    searchResults.querySelectorAll('[data-search-product]').forEach((item) => {
      item.addEventListener('click', () => {
        openQuickView(item.dataset.searchProduct);
        searchOverlay.classList.remove('open');
      });
    });
  });
}

function initNewsletterValidation() {
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

    newsletterMessage.textContent = 'Thank you for joining the story — your ritual starts here.';
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
    });
  }

  prevBtn.addEventListener('click', () => showTestimonial(state.testimonialIndex - 1));
  nextBtn.addEventListener('click', () => showTestimonial(state.testimonialIndex + 1));

  setInterval(() => showTestimonial(state.testimonialIndex + 1), 5000);
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
      lightbox.querySelector('.modal-close').addEventListener('click', () => lightbox.remove());
      lightbox.querySelector('.modal-backdrop').addEventListener('click', () => lightbox.remove());
    });
  });
}

function initQuantityControls() {
  const featuredQuantityBtn = document.querySelectorAll('.qty-btn');
  featuredQuantityBtn.forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;
      let currentValue = Number(quantityValue.textContent);
      currentValue = action === 'increase' ? currentValue + 1 : Math.max(1, currentValue - 1);
      quantityValue.textContent = String(currentValue);
    });
  });

  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-close-modal="true"]');
    if (target) closeQuickView();
  });

  document.querySelector('.modal-close').addEventListener('click', closeQuickView);
}

function initStatsCounters() {
  const counters = document.querySelectorAll('[data-count]');
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
  renderProducts();
  initCategoryFilters();
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
      closeQuickView();
      searchOverlay.classList.remove('open');
      searchOverlay.setAttribute('aria-hidden', 'true');
    }
  });
  revealElements();
}

init();
