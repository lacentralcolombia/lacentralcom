
document.addEventListener("DOMContentLoaded", () => {
  const WHATSAPP_NUMBER = "573116017186";

  const productGrid = document.getElementById("productGrid");
  const emptyMessage = document.getElementById("emptyMessage");
  const searchInput = document.getElementById("searchInput");
  const categoryButtons = document.getElementById("categoryButtons");
  const cartCount = document.getElementById("cartCount");
  const cartModal = document.getElementById("cartModal");
  const cartItems = document.getElementById("cartItems");
  const cartSummary = document.getElementById("cartSummary");
  const openCart = document.getElementById("openCart");
  const closeCart = document.getElementById("closeCart");
  const sendOrder = document.getElementById("sendOrder");
  const clearCart = document.getElementById("clearCart");
  const customerName = document.getElementById("customerName");
  const customerNotes = document.getElementById("customerNotes");

  let activeCategory = "Todos";
  let cart = [];

  document.getElementById("currentYear").textContent =
    new Date().getFullYear();

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function getProduct(id) {
    return PRODUCTS.find(product => product.id === id);
  }

  function renderProducts() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    const filteredProducts = PRODUCTS.filter(product => {
      const matchesCategory =
        activeCategory === "Todos" ||
        product.category === activeCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });

    productGrid.innerHTML = "";

    if (filteredProducts.length === 0) {
      emptyMessage.hidden = false;
      return;
    }

    emptyMessage.hidden = true;

    filteredProducts.forEach(product => {
      const card = document.createElement("article");
      card.className = "product-card";

      const imageMarkup = product.image
        ? `<img src="${escapeHTML(product.image)}"
                alt="${escapeHTML(product.name)}"
                loading="lazy"
                onerror="this.style.display='none'; this.nextElementSibling.hidden=false;">
           <span class="product-emoji" hidden>${escapeHTML(product.emoji || "🛍️")}</span>`
        : `<span class="product-emoji">${escapeHTML(product.emoji || "🛍️")}</span>`;

      card.innerHTML = `
        <div class="product-image">${imageMarkup}</div>
        <div class="product-info">
          <span class="product-category">${escapeHTML(product.category)}</span>
          <h3>${escapeHTML(product.name)}</h3>
          <p>${escapeHTML(product.description)}</p>
          <div class="product-actions">
            <input
              class="quantity-input"
              type="number"
              min="1"
              max="99"
              value="1"
              aria-label="Cantidad de ${escapeHTML(product.name)}"
            >
            <button class="add-button" type="button" data-add="${product.id}">
              + Agregar
            </button>
          </div>
        </div>
      `;

      productGrid.appendChild(card);
    });
  }

  function addToCart(productId, quantity) {
    const product = getProduct(productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
      existingItem.quantity = Math.min(99, existingItem.quantity + quantity);
    } else {
      cart.push({ id: productId, quantity });
    }

    renderCart();
  }

  function changeQuantity(productId, change) {
    const item = cart.find(entry => entry.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
      cart = cart.filter(entry => entry.id !== productId);
    } else {
      item.quantity = Math.min(99, item.quantity);
    }

    renderCart();
  }

  function renderCart() {
    const totalQuantity = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    cartCount.textContent = totalQuantity;
    cartSummary.textContent =
      `${totalQuantity} ${totalQuantity === 1 ? "unidad" : "unidades"}`;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
      cartItems.innerHTML =
        '<p class="empty-message">Tu pedido está vacío. Agrega productos del catálogo.</p>';
      sendOrder.disabled = true;
      sendOrder.style.opacity = "0.55";
    } else {
      sendOrder.disabled = false;
      sendOrder.style.opacity = "1";

      cart.forEach(item => {
        const product = getProduct(item.id);
        if (!product) return;

        const row = document.createElement("div");
        row.className = "cart-item";

        row.innerHTML = `
          <div>
            <strong>${escapeHTML(product.name)}</strong>
            <small>${escapeHTML(product.category)}</small>
          </div>
          <div class="cart-item-quantity">
            <button type="button" data-minus="${item.id}" aria-label="Restar uno">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-plus="${item.id}" aria-label="Agregar uno">+</button>
          </div>
          <button class="remove-item" type="button" data-remove="${item.id}" aria-label="Eliminar producto">×</button>
        `;

        cartItems.appendChild(row);
      });
    }
  }

  function showCart() {
    cartModal.hidden = false;
    document.body.classList.add("modal-open");
    closeCart.focus();
  }

  function hideCart() {
    cartModal.hidden = true;
    document.body.classList.remove("modal-open");
    openCart.focus();
  }

  function sendWhatsAppOrder() {
    if (cart.length === 0) {
      alert("Agrega al menos un producto antes de enviar tu pedido.");
      return;
    }

    const name = customerName.value.trim();
    const notes = customerNotes.value.trim();

    const orderLines = cart.map(item => {
      const product = getProduct(item.id);
      return `• ${product.name} — Cantidad: ${item.quantity}`;
    });

    let message = "¡Hola, LA CENTRAL! Quiero consultar y realizar este pedido:\n\n";
    message += orderLines.join("\n");

    if (name) {
      message += `\n\nNombre: ${name}`;
    }

    if (notes) {
      message += `\nObservaciones: ${notes}`;
    }

    message += "\n\nPor favor, confirmen disponibilidad y precios. ¡Gracias!";

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }

  productGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-add]");
    if (!button) return;

    const card = button.closest(".product-card");
    const quantityInput = card.querySelector(".quantity-input");
    const quantity = Number.parseInt(quantityInput.value, 10);

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
      alert("Selecciona una cantidad entre 1 y 99.");
      quantityInput.focus();
      return;
    }

    addToCart(Number(button.dataset.add), quantity);

    const originalText = button.textContent;
    button.textContent = "✓ Agregado";
    window.setTimeout(() => {
      button.textContent = originalText;
    }, 1000);
  });

  categoryButtons.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    activeCategory = button.dataset.category;

    categoryButtons.querySelectorAll(".category").forEach(categoryButton => {
      categoryButton.classList.toggle("active", categoryButton === button);
    });

    renderProducts();
  });

  searchInput.addEventListener("input", renderProducts);

  cartItems.addEventListener("click", event => {
    const plusButton = event.target.closest("[data-plus]");
    const minusButton = event.target.closest("[data-minus]");
    const removeButton = event.target.closest("[data-remove]");

    if (plusButton) {
      changeQuantity(Number(plusButton.dataset.plus), 1);
    }

    if (minusButton) {
      changeQuantity(Number(minusButton.dataset.minus), -1);
    }

    if (removeButton) {
      const productId = Number(removeButton.dataset.remove);
      cart = cart.filter(item => item.id !== productId);
      renderCart();
    }
  });

  openCart.addEventListener("click", showCart);
  closeCart.addEventListener("click", hideCart);

  cartModal.addEventListener("click", event => {
    if (event.target === cartModal) hideCart();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !cartModal.hidden) {
      hideCart();
    }
  });

  clearCart.addEventListener("click", () => {
    if (cart.length === 0) return;

    cart = [];
    renderCart();
  });

  sendOrder.addEventListener("click", sendWhatsAppOrder);

  renderProducts();
  renderCart();
});
