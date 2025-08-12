/* ========== HERO SLIDER ========== */
const slides = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520975682031-a6b5bbf7bce8?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop",
];
let current = 0;
const heroImage = document.getElementById("heroImage");
const dotsWrap = document.getElementById("sliderDots");
const prev = document.getElementById("prevSlide");
const next = document.getElementById("nextSlide");
function renderDots() {
  dotsWrap.innerHTML = slides
    .map(
      (_, i) =>
        `<span class="dot ${
          i === current ? "active" : ""
        }" data-i="${i}"></span>`
    )
    .join("");
}
function setSlide(i) {
  current = (i + slides.length) % slides.length;
  heroImage.src = slides[current];
  renderDots();
}
renderDots();
prev?.addEventListener("click", () => setSlide(current - 1));
next?.addEventListener("click", () => setSlide(current + 1));
dotsWrap?.addEventListener("click", (e) => {
  if (e.target.classList.contains("dot")) setSlide(+e.target.dataset.i);
});
setInterval(() => setSlide(current + 1), 5000);

/* ========== MOBILE MENU ========== */
document.querySelector(".menu-toggle").addEventListener("click", () => {
  const m = document.querySelector("nav ul.menu");
  m.style.display = m.style.display === "flex" ? "none" : "flex";
  m.style.flexDirection = "column";
  m.style.gap = "14px";
});

/* ========== DATA (cu detalii tip „rețetă”) ========== */
const PRODUCTS = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    category: "Skincare",
    price: 96.53,
    rating: 2.56,
    img: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=900&auto=format&fit=crop",
    desc: "Mascara popular pentru volum intens.",
    sale: false,
    ingredients: [
      "Ulei de ricin",
      "Ceară de albine",
      "Pigmenți negri",
      "Aloe vera",
    ],
    steps: [
      "Curăță genele.",
      "Aplică strat de bază.",
      "Aplică mascara în zig-zag.",
    ],
    macros: { protein: 6, carbs: 44, fat: 10, kcal: 300 },
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    category: "Skincare",
    price: 136.48,
    rating: 2.86,
    img: "https://images.unsplash.com/photo-1618375531910-0539960bfa8d?q=80&w=900&auto=format&fit=crop",
    desc: "Paletă versatilă de farduri de pleoape.",
    sale: true,
    discount: 20,
    ingredients: ["Mica", "Pigmenți minerali", "Ulei de jojoba", "Vitamina E"],
    steps: [
      "Aplică primer.",
      "Culoare de tranziție.",
      "Definește colțul extern.",
      "Iluminează colțul intern.",
    ],
    macros: { protein: 12, carbs: 38, fat: 14, kcal: 360 },
  },
  {
    id: 3,
    title: "Powder Canister",
    category: "Skincare",
    price: 50.69,
    rating: 4.64,
    img: "https://images.unsplash.com/photo-1596783074918-c84cb06531b5?q=80&w=900&auto=format&fit=crop",
    desc: "Pudră fină pentru fixare perfectă.",
    sale: true,
    discount: 15,
    ingredients: ["Silica", "Talc cosmetic", "Mica", "Ulei mineral"],
    steps: ["Ia pudră pe pensulă.", "Îndepărtează excesul.", "Fixează zona T."],
    macros: { protein: 20, carbs: 50, fat: 12, kcal: 430 },
  },
  {
    id: 4,
    title: "Red Lipstick",
    category: "Skincare",
    price: 16.14,
    rating: 4.36,
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?q=80&w=900&auto=format&fit=crop",
    desc: "Ruj clasic, accent de culoare.",
    sale: false,
    ingredients: [
      "Ceară candelilla",
      "Unt de shea",
      "Pigmenți roșii",
      "Vitamina E",
    ],
    steps: ["Hidratează buzele.", "Conturează.", "Aplică rujul."],
    macros: { protein: 18, carbs: 46, fat: 16, kcal: 410 },
  },
  {
    id: 5,
    title: "iPhone 14 Pro",
    category: "Smartphones",
    price: 1199,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1661961110144-12ac85918e40?q=80&w=900&auto=format&fit=crop",
    desc: "Putere Pro, cameră avansată.",
    sale: true,
    discount: 10,
    ingredients: ["Aluminiu", "Sticlă", "Oțel inoxidabil"],
    steps: ["Pornește.", "Configurează.", "Fă o poză."],
    macros: { protein: 15, carbs: 55, fat: 10, kcal: 420 },
  },
  {
    id: 6,
    title: "Samsung Galaxy S23",
    category: "Smartphones",
    price: 999,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=900&auto=format&fit=crop",
    desc: "Performanță excelentă și ecran superb.",
    sale: false,
    ingredients: ["Aluminiu", "Sticlă", "Siliciu"],
    steps: ["Pornește.", "Transferă date.", "Personalizează."],
    macros: { protein: 22, carbs: 48, fat: 14, kcal: 460 },
  },
  {
    id: 7,
    title: "MacBook Air M2",
    category: "Laptops",
    price: 1499,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=900&auto=format&fit=crop",
    desc: "Subțire, rapid și silențios.",
    sale: false,
    ingredients: ["Aluminiu", "Baterie Li-Ion", "Placă logică"],
    steps: ["Despachetează.", "Configurează.", "Instalează."],
    macros: { protein: 16, carbs: 52, fat: 12, kcal: 430 },
  },
  {
    id: 8,
    title: "Dell XPS 13",
    category: "Laptops",
    price: 1399,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1517816428104-797678c7cf0d?q=80&w=900&auto=format&fit=crop",
    desc: "Laptop premium pentru productivitate.",
    sale: true,
    discount: 12,
    ingredients: ["Aluminiu", "Fibra de carbon", "SSD NVMe"],
    steps: ["Pornește.", "Update drivere.", "Setează energie."],
    macros: { protein: 19, carbs: 49, fat: 13, kcal: 440 },
  },
  {
    id: 9,
    title: "Chanel No.5",
    category: "Fragrances",
    price: 199,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1585386959984-a41552231652?q=80&w=900&auto=format&fit=crop",
    desc: "Parfum iconic, rafinat.",
    sale: false,
    ingredients: ["Note aldehidice", "Iasomie", "Trandafir", "Mosc"],
    steps: ["Pulverizează pe puls."],
    macros: { protein: 14, carbs: 50, fat: 12, kcal: 410 },
  },
  {
    id: 10,
    title: "Dior Sauvage",
    category: "Fragrances",
    price: 179,
    rating: 4.4,
    img: "https://images.unsplash.com/photo-1629198735660-7a17f44f74a1?q=80&w=900&auto=format&fit=crop",
    desc: "Aromă proaspătă și puternică.",
    sale: true,
    discount: 18,
    ingredients: ["Bergamotă", "Ambroxan", "Piper Sichuan"],
    steps: ["Pulverizează la 15–20 cm."],
    macros: { protein: 21, carbs: 47, fat: 14, kcal: 455 },
  },
];
const CATEGORIES = [
  "All Products",
  "Smartphones",
  "Laptops",
  "Fragrances",
  "Skincare",
];

/* ========== FILTERS ========== */
const filtersEl = document.getElementById("filters");
let activeCat = "All Products";
function renderFilters() {
  filtersEl.innerHTML = CATEGORIES.map(
    (c) =>
      `<button class="chip ${
        c === activeCat ? "active" : ""
      }" data-cat="${c}">${c}</button>`
  ).join("");
}
renderFilters();
filtersEl.addEventListener("click", (e) => {
  if (e.target.matches(".chip")) {
    activeCat = e.target.dataset.cat;
    renderFilters();
    renderProducts();
  }
});

/* ========== HELPERS ========== */
const grid = document.getElementById("productGrid");
const saleGrid = document.getElementById("saleGrid");
function stars(r) {
  const f = Math.round(r);
  return "★".repeat(f) + "☆".repeat(5 - f);
}
function priceFmt(p) {
  return `$${p.toFixed(2)}`;
}
function salePrice(p) {
  return p.sale && p.discount ? p.price * (1 - p.discount / 100) : p.price;
}
function macroGradient({ protein = 20, carbs = 50, fat = 15 }) {
  const t = protein + carbs + fat || 1,
    p = Math.round((protein / t) * 100),
    c = Math.round((carbs / t) * 100),
    f = 100 - p - c;
  return {
    css: `linear-gradient(90deg,#22c55e 0% ${p}%, #0ea5e9 ${p}% ${
      p + c
    }%, #f59e0b ${p + c}% 100%)`,
    p,
    c,
    f,
  };
}

/* ========== CARDS + LISTE ========== */
function cardTemplate(p) {
  const isSale = p.sale && p.discount,
    newPrice = salePrice(p);
  return `<article class="card">
    <div class="thumb">${
      isSale ? '<span class="badge-sale">-' + p.discount + "%</span>" : ""
    }<img src="${p.img}" alt="${p.title}"></div>
    <div class="content">
      <h3>${p.title}</h3>
      <div class="rating" aria-label="Rating ${p.rating}">${stars(
    p.rating
  )} <span style="color:#8c97a0;font-size:14px">(${p.rating.toFixed(
    2
  )})</span></div>
      <p class="excerpt">${p.desc}</p>
      <div class="price-row">
        <div><span class="price">${priceFmt(newPrice)}</span>${
    isSale ? '<span class="old-price">' + priceFmt(p.price) + "</span>" : ""
  }</div>
        ${isSale ? '<span class="badge-sale">Sale</span>' : ""}
      </div>
    </div>
    <div class="actions">
      <button class="btn details" data-id="${
        p.id
      }"><i class="ri-eye-line"></i> Details</button>
      <button class="btn primary add-cart" data-id="${
        p.id
      }"><i class="ri-shopping-cart-2-line"></i> Add to Cart</button>
    </div>
  </article>`;
}
function renderProducts() {
  const items = PRODUCTS.filter(
    (p) => activeCat === "All Products" || p.category === activeCat
  );
  grid.innerHTML = items.map(cardTemplate).join("");
}
function renderSale() {
  const items = PRODUCTS.filter((p) => p.sale);
  saleGrid.innerHTML = items.map(cardTemplate).join("");
}
renderProducts();
renderSale();

/* ========== CART (drawer) ========== */
const badge = document.getElementById("cartCount");
const cartOverlay = document.getElementById("cartOverlay");
const cartDrawer = document.getElementById("cartDrawer");
const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");

const CART = new Map(); // id -> qty

function cartQty() {
  let q = 0;
  CART.forEach((v) => (q += v));
  return q;
}
function cartSum() {
  let s = 0;
  CART.forEach((q, id) => {
    const p = PRODUCTS.find((x) => x.id === id);
    if (p) s += salePrice(p) * q;
  });
  return s;
}
function updateBadge() {
  badge.textContent = String(cartQty());
}

function renderCart() {
  if (CART.size === 0) {
    cartList.innerHTML = `<div style="padding:24px;color:#7b8590">Coșul este gol.</div>`;
  } else {
    cartList.innerHTML = Array.from(CART.entries())
      .map(([id, qty]) => {
        const p = PRODUCTS.find((x) => x.id === id);
        return `<div class="cart-item">
        <img src="${p.img}" alt="${p.title}">
        <div>
          <div class="cart-title">${p.title}</div>
          <div class="cart-sub">${priceFmt(salePrice(p))} × ${qty}</div>
        </div>
        <button class="cart-remove" data-id="${id}" aria-label="Remove item"><i class="ri-delete-bin-6-line"></i></button>
      </div>`;
      })
      .join("");
  }
  cartTotal.textContent = priceFmt(cartSum());
}

function openCart() {
  cartOverlay.classList.add("open");
  cartDrawer.classList.add("open");
  renderCart();
}
function closeCart() {
  cartOverlay.classList.remove("open");
  cartDrawer.classList.remove("open");
}

function addToCart(id, qty = 1) {
  CART.set(id, (CART.get(id) || 0) + qty);
  updateBadge();
  renderCart();
}

/* Listeners cart */
document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
cartList.addEventListener("click", (e) => {
  const btn = e.target.closest(".cart-remove");
  if (btn) {
    const id = +btn.dataset.id;
    CART.delete(id);
    updateBadge();
    renderCart();
  }
});
document.getElementById("checkoutBtn").addEventListener("click", () => {
  alert("Checkout demo – aici ai integra plata / trimitere comandă.");
});

/* Add to cart din carduri + din modal */
document.body.addEventListener("click", (e) => {
  const add = e.target.closest(".add-cart");
  if (add) {
    addToCart(+add.dataset.id, 1);
    openCart();
  }
});

/* ========== MODAL DETALII (ingrediente, pași, macro) ========== */
const modal = document.getElementById("detailsModal");
const closeBtn = document.getElementById("closeModal");

function openModal(p) {
  const isSale = p.sale && p.discount,
    newPrice = salePrice(p);
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalName").textContent = p.title;
  document.getElementById("modalDesc").textContent = p.desc;
  document.getElementById("modalRating").innerHTML = `${stars(
    p.rating
  )} <span style="color:#8c97a0;font-size:14px">(${p.rating.toFixed(
    2
  )})</span>`;
  document.getElementById("modalPrice").textContent = priceFmt(newPrice);
  document.getElementById("modalOldPrice").textContent = isSale
    ? priceFmt(p.price)
    : "";
  document.getElementById("modalCategory").textContent = p.category;
  document.getElementById("modalImg").src = p.img;
  document.getElementById("modalIngredients").innerHTML = (
    p.ingredients || ["—"]
  )
    .map((i) => `<li>${i}</li>`)
    .join("");
  document.getElementById("modalSteps").innerHTML = (p.steps || ["—"])
    .map((s) => `<li>${s}</li>`)
    .join("");
  const m = p.macros || { protein: 20, carbs: 50, fat: 15, kcal: 420 };
  const g = macroGradient(m);
  document.getElementById("macroBar").style.background = g.css;
  document.getElementById(
    "macroText"
  ).textContent = `Proteine ${m.protein}g (${g.p}%) · Carbohidrați ${m.carbs}g (${g.c}%) · Grăsimi ${m.fat}g (${g.f}%) — ${m.kcal} kcal`;
  const addBtn = document.getElementById("modalAdd");
  addBtn.dataset.id = p.id;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

document.body.addEventListener("click", (e) => {
  const dBtn = e.target.closest(".details");
  if (dBtn) {
    const id = +dBtn.dataset.id;
    const prod = PRODUCTS.find((x) => x.id === id);
    if (prod) openModal(prod);
  }
  if (e.target === modal) closeModal();
});
closeBtn.addEventListener("click", closeModal);
document.getElementById("modalAdd").addEventListener("click", (e) => {
  addToCart(+e.currentTarget.dataset.id, 1);
  openCart();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeCart();
  }
});
