/* ========== HERO SLIDER ========== */
const slides = [
  "assets/photos/FelPrincipal.jpg",
  "assets/photos/Ciorba.jpg",
  "assets/photos/Frigarui preparat vegan.jpg",
  "assets/photos/Colaboration.png",
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
    title: "Alba ca zapada",
    category: "Produs de frupt",
    price: 25.0,
    rating: 4.56,
    img: "assets/photos/AlbaCaZapada.png",
    desc: "Prajitura copilariei mele.",
    sale: false,
    ingredients: ["Lapte de vaca", "Faina de grau", "Zahar", "Lamaie"],
    steps: [
      "Curăță genele.",
      "Aplică strat de bază.",
      "Aplică mascara în zig-zag.",
    ],
    macros: { protein: 6, carbs: 44, fat: 10, kcal: 300 },
  },
  {
    id: 2,
    title: "Ciorba radauteana",
    category: "Produs de frupt",
    price: 35,
    rating: 4.86,
    img: "assets/photos/Ciorba.jpg",
    desc: "O ciorba buna, sanatoasa, satioasa.",
    sale: true,
    discount: 20,
    ingredients: [
      "Carne de pui",
      "Morcov",
      "Ceapa",
      "Telina",
      "Ou",
      "Smantana",
    ],
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
    title: "Frigarui *produs vegan",
    category: "Produs de post",
    price: 30,
    rating: 4.86,
    img: "assets/photos/Frigaruipreparatvegan.jpg",
    desc: "O ciorba buna, sanatoasa, satioasa.",
    sale: false,
    discount: 20,
    ingredients: ["Ardei", "Morcov", "Ceapa", "Telina", "Tofu", "Dovlecel"],
    steps: [
      "Aplică primer.",
      "Culoare de tranziție.",
      "Definește colțul extern.",
      "Iluminează colțul intern.",
    ],
    macros: { protein: 12, carbs: 38, fat: 14, kcal: 360 },
  },

  {
    id: 4,
    title: "Papanasi",
    category: "Produs de frupt",
    price: 16.14,
    rating: 4.36,
    img: "assets/photos/Papanasi.jpg",
    desc: "Ruj clasic, accent de culoare.",
    sale: false,
    ingredients: ["Ou", "Faina", "Indulcitor", "Branza"],
    steps: ["Hidratează buzele.", "Conturează.", "Aplică rujul."],
    macros: { protein: 18, carbs: 46, fat: 16, kcal: 410 },
  },
  {
    id: 5,
    title: "Ciorba rosie cu cartofi",
    category: "Produs de post",
    price: 1199,
    rating: 4.9,
    img: "assets/photos/CiorbaRosie.jpg",
    desc: "Gustos, sanatos, colorat.",
    sale: true,
    discount: 10,
    ingredients: ["Cartofi", "Sfecla", "Bors"],
    steps: ["Pornește.", "Configurează.", "Fă o poză."],
    macros: { protein: 15, carbs: 55, fat: 10, kcal: 420 },
  },
  {
    id: 6,
    title: "Boabe de naut prajite in cuptor *produs vegan",
    category: "Produs de post",
    price: 999,
    rating: 4.6,
    img: "assets/photos/BoabeNaut.jpg",
    desc: "O gustare sanatoasa si nutritiva.",
    sale: false,
    ingredients: ["Boabe naut", "Condimente"],
    steps: ["Pornește.", "Transferă date.", "Personalizează."],
    macros: { protein: 22, carbs: 48, fat: 14, kcal: 460 },
  },
  {
    id: 7,
    title: "Briose *produs vegan",
    category: "Produs de post",
    price: 1499,
    rating: 4.8,
    img: "assets/photos/BrioseVegane.jpg",
    desc: "Subțire, rapid și silențios.",
    sale: true,
    ingredients: ["Aluminiu", "Baterie Li-Ion", "Placă logică"],
    steps: ["Despachetează.", "Configurează.", "Instalează."],
    macros: { protein: 16, carbs: 52, fat: 12, kcal: 430 },
  },
  {
    id: 8,
    title: "Burgher *produs vegan",
    category: "Produs de post",
    price: 1399,
    rating: 4.7,
    img: "assets/photos/BurgherVegan.jpg",
    desc: "Laptop premium pentru productivitate.",
    sale: false,
    discount: 12,
    ingredients: ["Chifla", "Dovlecel", "Ridiche", "Maioneza vegana"],
    steps: ["Pornește.", "Update drivere.", "Setează energie."],
    macros: { protein: 19, carbs: 49, fat: 13, kcal: 440 },
  },
  {
    id: 9,
    title: "Ciorba cu perisoare",
    category: "Produs de frupt",
    price: 199,
    rating: 4.5,
    img: "assets/photos/CiorbaPerisoare.jpg",
    desc: "Parfum iconic, rafinat.",
    sale: false,
    ingredients: ["Note aldehidice", "Iasomie", "Trandafir", "Mosc"],
    steps: ["Pulverizează pe puls."],
    macros: { protein: 14, carbs: 50, fat: 12, kcal: 410 },
  },
  {
    id: 10,
    title: "Cornuri cu rahat",
    category: "Produs de frupt",
    price: 179,
    rating: 4.4,
    img: "assets/photos/CornuriRahat2.jpg",
    desc: "Aromă proaspătă și puternică.",
    sale: false,
    discount: 18,
    ingredients: ["Bergamotă", "Ambroxan", "Piper Sichuan"],
    steps: ["Pulverizează la 15–20 cm."],
    macros: { protein: 21, carbs: 47, fat: 14, kcal: 455 },
  },
  {
    id: 11,
    title: "Donuts la cuptor",
    category: "Produs de frupt",
    price: 179,
    rating: 4.4,
    img: "assets/photos/DonutsCuptor.jpg",
    desc: "Aromă proaspătă și puternică.",
    sale: true,
    discount: 18,
    ingredients: ["Bergamotă", "Ambroxan", "Piper Sichuan"],
    steps: ["Pulverizează la 15–20 cm."],
    macros: { protein: 21, carbs: 47, fat: 14, kcal: 455 },
  },
  {
    id: 12,
    title: "Shaorma",
    category: "Produs de frupt",
    price: 179,
    rating: 4.4,
    img: "assets/photos/Shaorma.jpg",
    desc: "Aromă proaspătă și puternică.",
    sale: true,
    discount: 18,
    ingredients: ["Bergamotă", "Ambroxan", "Piper Sichuan"],
    steps: ["Pulverizează la 15–20 cm."],
    macros: { protein: 21, carbs: 47, fat: 14, kcal: 455 },
  },
  {
    id: 13,
    title: "Shaorma *produs vegan",
    category: "Produs de post",
    price: 179,
    rating: 4.4,
    img: "assets/photos/ShaormaVegana.jpg",
    desc: "Aromă proaspătă și puternică.",
    sale: false,
    discount: 18,
    ingredients: ["Bergamotă", "Ambroxan", "Piper Sichuan"],
    steps: ["Pulverizează la 15–20 cm."],
    macros: { protein: 21, carbs: 47, fat: 14, kcal: 455 },
  },
  {
    id: 14,
    title: "Spaghete cu sos alb",
    category: "Produs de frupt",
    price: 179,
    rating: 4.4,
    img: "assets/photos/Spaghete2.jpg",
    desc: "Aromă proaspătă și puternică.",
    sale: true,
    discount: 18,
    ingredients: ["Bergamotă", "Ambroxan", "Piper Sichuan"],
    steps: ["Pulverizează la 15–20 cm."],
    macros: { protein: 21, carbs: 47, fat: 14, kcal: 455 },
  },
  {
    id: 15,
    title: "Salata calda *produs vegan",
    category: "Produs de post",
    price: 179,
    rating: 4.4,
    img: "assets/photos/SalataCaldaVegana.jpg",
    desc: "Aromă proaspătă și puternică.",
    sale: true,
    discount: 18,
    ingredients: ["Bergamotă", "Ambroxan", "Piper Sichuan"],
    steps: ["Pulverizează la 15–20 cm."],
    macros: { protein: 21, carbs: 47, fat: 14, kcal: 455 },
  },
  {
    id: 16,
    title: "Rulada",
    category: "Produs de frupt",
    price: 179,
    rating: 4.4,
    img: "assets/photos/RuladaCotlet.jpg",
    desc: "Aromă proaspătă și puternică.",
    sale: true,
    discount: 18,
    ingredients: ["Bergamotă", "Ambroxan", "Piper Sichuan"],
    steps: ["Pulverizează la 15–20 cm."],
    macros: { protein: 21, carbs: 47, fat: 14, kcal: 455 },
  },
];
const CATEGORIES = ["All Products", "Produs de frupt", "Produs de post"];

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
    <div class="thumb">
      <img src="${p.img}" alt="${p.title}">
    </div>
    <div class="content">
      <h3>${p.title}</h3>
      <div class="rating" aria-label="Rating ${p.rating}">
        ${stars(p.rating)} 
        <span style="color:#8c97a0;font-size:14px">(${p.rating.toFixed(
          2
        )})</span>
      </div>
      <p class="excerpt">${p.desc}</p>
      <div class="price-row">
        <div>
          <span class="price">${priceFmt(newPrice)}</span>
          ${isSale ? `<span class="old-price">${priceFmt(p.price)}</span>` : ""}
        </div>
        ${isSale ? `<span class="badge-sale">Sale -${p.discount}%</span>` : ""}
      </div>
    </div>
    <div class="actions">
      <button class="btn details" data-id="${p.id}">
        <i class="ri-eye-line"></i> Details
      </button>
      <button class="btn primary add-cart" data-id="${p.id}">
        <i class="ri-shopping-cart-2-line"></i> Add to Cart
      </button>
    </div>
  </article>`;
}

function renderProducts() {
  const items = PRODUCTS.filter(
    (p) => activeCat === "All Products" || p.category === activeCat
  );
  grid.innerHTML = items.map(cardTemplate).join("");
}

// function renderSale() {
//   const items = PRODUCTS.filter((p) => p.sale);
//   saleGrid.innerHTML = items.map(cardTemplate).join("");
// }
// renderProducts();
// renderSale();

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
  // document.getElementById("modalSteps").innerHTML = (p.steps || ["—"])
  //   .map((s) => `<li>${s}</li>`)
  //   .join("");
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
