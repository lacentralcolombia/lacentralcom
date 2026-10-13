
"use strict";

/*
 * LA CENTRAL - Catálogo y pedidos
 * No se muestran precios en ninguna parte del sitio.
 * Cambia los productos de ejemplo por los productos reales de tu negocio.
 */

const WHATSAPP_NUMBER = "573116017186";

const PRODUCTS = [
  {
    id: 1,
    name: "Queso mozzarella",
    category: "Quesos",
    description: "Ideal para pizzas, preparaciones calientes y recetas especiales.",
    tag: "Favorito",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=700&q=80",
    emoji: "🧀"
  },
  {
    id: 2,
    name: "Queso campesino",
    category: "Quesos",
    description: "Una opción tradicional para acompañar tus comidas.",
    tag: "Tradicional",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=700&q=80",
    emoji: "🧀"
  },
  {
    id: 3,
    name: "Queso doble crema",
    category: "Quesos",
    description: "Para disfrutar en desayunos, meriendas y diferentes recetas.",
    tag: "",
    image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&w=700&q=80",
    emoji: "🧀"
  },
  {
    id: 4,
    name: "Queso costeño",
    category: "Quesos",
    description: "Una alternativa para darle sabor a tus platos favoritos.",
    tag: "",
    image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=700&q=80",
    emoji: "🧀"
  },
  {
    id: 5,
    name: "Jamón",
    category: "Jamones y embutidos",
    description: "Consulta las presentaciones y marcas disponibles.",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1524438418049-ab2acb7aa48f?auto=format&fit=crop&w=700&q=80",
    emoji: "🥓"
  },
  {
    id: 6,
    name: "Mortadela",
    category: "Jamones y embutidos",
    description: "Una opción versátil para sándwiches y preparaciones.",
    tag: "",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
    emoji: "🥩"
  },
  {
    id: 7,
    name: "Salchicha",
    category: "Salchichas",
    description: "Consulta los tipos, marcas y presentaciones disponibles.",
    tag: "",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=700&q=80",
    emoji: "🌭"
  },
  {
    id: 8,
    name: "Chorizo",
    category: "Jamones y embutidos",
    description: "Pregunta por las opciones disponibles para tus preparaciones.",
    tag: "",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
    emoji: "🥩"
  },
  {
    id: 9,
    name: "Salchichón",
    category: "Jamones y embutidos",
    description: "Consulta las marcas y presentaciones que manejamos.",
    tag: "",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=700&q=80",
    emoji: "🥩"
  },
  {
    id: 10,
    name: "Salchicha tipo perro",
    category: "Salchichas",
    description: "Una alternativa práctica para comidas y reuniones.",
    tag: "",
    image: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=700&q=80",
    emoji: "🌭"
  },
  {
    id: 11,
    name: "Productos refrigerados",
    category: "Otros",
    description: "Escríbenos para consultar otras opciones disponibles.",
    tag: "",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
    emoji: "❄️"
  },
  {
    id: 12,
    name: "Otros productos",
    category: "Otros",
    description: "¿Buscas algo diferente? Pregúntanos por WhatsApp.",
    tag: "",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80",
    emoji: "🛍️"
  }
];

const state = {
  category: "Todos",
  search: "",
  cart: {}
};

const elements = {
  productGrid: document.getElementById("productGrid"),
  categoryList: document.getElementById("categoryList"),
  searchInput: document.getElementById("searchInput"),
  clearSearch: document.getElementById("clearSearch"),
  resultsCount: document.getElementById("resultsCount"),
  emptyState: document.getElementById("emptyState"),
  resetFilters: document.getElementById("resetFilters"),
  cartCount: document.getElementById("cartCount"),
  openCart: document.getElementById("openCart"),
  closeCart: document.getElementById("closeCart"),
  cartBackdrop: document.getElementById("cartBackdrop"),
  cartItems: document.getElementById("cartItems"),
  cartEmpty: document.getElementById("cartEmpty"),
  cartFooter: document.getElementById("cartFooter"),
  continueShopping: document.getElementById("continueShopping"),
  sendOrder: document.getElementById("sendOrder"),
  customerNote: document.getElementById("customerNote"),
  toast: document.getElementById("toast"),
  menuToggle: document.getElementById("menuToggle"),
  navigation: document.getElementById("navigation")
};

let toastTimeout;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function getFilteredProducts() {
  const query = state.search.trim().toLocaleLowerCase("es");

  return PRODUCTS.filter(product => {
    const matchesCategory =
      state.category === "Todos" || product.category === state.category;

    const searchableText =
      `${product.name} ${product.category} ${product.description}`
        .toLocaleLowerCase("es");

    return matchesCategory && searchableText.includes(query);
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();

  elements.resultsCount.textContent =
    `${filtered.length} ${filtered.length === 1 ? "producto disponible en el catálogo" : "productos disponibles en el catálogo"}`;

  elements.productGrid.innerHTML = filtered.map(product => {
    const tagHTML = product.tag
      ? `<span class="product-tag">${escapeHTML(product.tag)}</span>`
      : "";

    return `
      <article class="product-card">
        <div class="product-image-wrap">
          <img
            class="product-image"
            src="${escapeHTML(product.image)}"
            alt="${escapeHTML(product.name)}"
            loading="lazy"
            data-product-id="${product.id}"
          >
          ${tagHTML}
        </div>

        <div class="product-body">
          <span class="product-category">${escapeHTML(product.category)}</span>
          <h3 class="product-name">${escapeHTML(product.name)}</h3>
          <p class="product-description">${escapeHTML(product.description)}</p>

          <div class="product-bottom">
            <span class="consult-label">Consultar disponibilidad</span>
            <button
              class="add-button"
              type="button"
              data-add="${product.id}"
              aria-label="Agregar ${escapeHTML(product.name)} al pedido"
            >
              <span>+</span> Agregar
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  elements.emptyState.hidden = filtered.length !== 0;
  elements.productGrid.hidden = filtered.length === 0;

  elements.productGrid.querySelectorAll(".product-image").forEach(img => {
    img.addEventListener("error", () => {
      const product = PRODUCTS.find(
        item => item.id === Number(img.dataset.productId)
      );

      const wrapper = img.parentElement;

      if (wrapper && product) {
        img.remove();
        const fallback = document.createElement("div");
        fallback.className = "product-image-fallback";
        fallback.setAttribute("aria-label", product.name);
        fallback.textContent = product.emoji;
        wrapper.prepend(fallback);
      }
    }, { once: true });
  });
}

function setCategory(category) {
  state.category = category;

  elements.categoryList.querySelectorAll("[data-category]").forEach(button => {
    const selected = button.dataset.category === category;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  renderProducts();
}

function addToCart(productId) {
  const product = PRODUCTS.find(item => item.id === Number(productId));

  if (!product) return;

  state.cart[product.id] = (state.cart[product.id] || 0) + 1;
  updateCart();
  showToast(`${product.name} agregado al pedido`);
}

function changeQuantity(productId, change) {
  const id = Number(productId);

  if (!state.cart[id]) return;

  state.cart[id] += change;

  if (state.cart[id] <= 0) {
    delete state.cart[id];
  }

  updateCart();
}

function removeFromCart(productId) {
  delete state.cart[Number(productId)];
  updateCart();
}

function getCartQuantity() {
  return Object.values(state.cart).reduce((sum, quantity) => sum + quantity, 0);
}

function updateCart() {
  const quantity = getCartQuantity();
  elements.cartCount.textContent = quantity;
  elements.cartCount.setAttribute("aria-label", `${quantity} productos en el pedido`);

  const items = Object.entries(state.cart)
    .map(([id, qty]) => {
      const product = PRODUCTS.find(item => item.id === Number(id));
      return product ? { ...product, qty } : null;
    })
    .filter(Boolean);

  elements.cartItems.innerHTML = items.map(product => `
    <article class="cart-item">
      <img
        src="${escapeHTML(product.image)}"
        alt="${escapeHTML(product.name)}"
        onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'cart-item-placeholder',textContent:'${product.emoji}'}))"
      >

      <div>
        <h3>${escapeHTML(product.name)}</h3>
        <small>${escapeHTML(product.category)}</small>

        <div class="quantity-controls" aria-label="Cantidad de ${escapeHTML(product.name)}">
          <button type="button" data-change="${product.id}" data-delta="-1"
            aria-label="Disminuir cantidad">−</button>
          <span>${product.qty}</span>
          <button type="button" data-change="${product.id}" data-delta="1"
            aria-label="Aumentar cantidad">+</button>
        </div>
      </div>

      <button class="remove-item" type="button" data-remove="${product.id}">
        Quitar
      </button>
    </article>
  `).join("");

  elements.cartEmpty.hidden = items.length > 0;
  elements.cartFooter.hidden = items.length === 0;
  elements.cartItems.hidden = items.length === 0;
}

function openCart() {
  elements.cartBackdrop.hidden = false;
  document.body.classList.add("modal-open");
  elements.closeCart.focus();
}

function closeCart() {
  elements.cartBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  elements.openCart.focus();
}

function sendOrderToWhatsApp() {
  const items = Object.entries(state.cart)
    .map(([id, qty]) => {
      const product = PRODUCTS.find(item => item.id === Number(id));
      return product ? { ...product, qty } : null;
    })
    .filter(Boolean);

  if (items.length === 0) {
    showToast("Agrega al menos un producto a tu pedido.");
    return;
  }

  const lines = items.map((product, index) =>
    `${index + 1}. ${product.name} — Cantidad: ${product.qty}`
  );

  const note = elements.customerNote.value.trim();

  const message = [
    "Hola, LA CENTRAL. Quiero consultar y solicitar los siguientes productos:",
    "",
    ...lines,
    "",
    ...(note ? [`Nota: ${note}`, ""] : []),
    "Por favor, confirmen disponibilidad y precios. Gracias."
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2600);
}

function closeMobileMenu() {
  elements.navigation.classList.remove("open");
  elements.menuToggle.setAttribute("aria-expanded", "false");
  elements.menuToggle.setAttribute("aria-label", "Abrir menú");
}

function initialize() {
  elements.currentYear = document.getElementById("currentYear");
  elements.currentYear.textContent = new Date().getFullYear();

  renderProducts();
  updateCart();

  elements.categoryList.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (button) setCategory(button.dataset.category);
  });

  elements.searchInput.addEventListener("input", event => {
    state.search = event.target.value;
    renderProducts();
  });

  elements.clearSearch.addEventListener("click", () => {
    elements.searchInput.value = "";
    state.search = "";
    renderProducts();
    elements.searchInput.focus();
  });

  elements.resetFilters.addEventListener("click", () => {
    state.search = "";
    elements.searchInput.value = "";
    setCategory("Todos");
  });

  elements.productGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-add]");
    if (button) addToCart(button.dataset.add);
  });

  elements.openCart.addEventListener("click", openCart);
  elements.closeCart.addEventListener("click", closeCart);

  elements.continueShopping.addEventListener("click", () => {
    closeCart();
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
  });

  elements.cartBackdrop.addEventListener("click", event => {
    if (event.target === elements.cartBackdrop) closeCart();
  });

  elements.cartItems.addEventListener("click", event => {
    const changeButton = event.target.closest("[data-change]");
    const removeButton = event.target.closest("[data-remove]");

    if (changeButton) {
      changeQuantity(changeButton.dataset.change, Number(changeButton.dataset.delta));
    }

    if (removeButton) {
      removeFromCart(removeButton.dataset.remove);
    }
  });

  elements.sendOrder.addEventListener("click", sendOrderToWhatsApp);

  elements.menuToggle.addEventListener("click", () => {
    const isOpen = elements.navigation.classList.toggle("open");
    elements.menuToggle.setAttribute("aria-expanded", String(isOpen));
    elements.menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Cerrar menú" : "Abrir menú"
    );
  });

  elements.navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      if (!elements.cartBackdrop.hidden) closeCart();
      closeMobileMenu();
    }
  });
}

document.addEventListener("DOMContentLoaded", initialize);
