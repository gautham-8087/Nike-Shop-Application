/* Main JS for Premium Shoe UI */

// --- Data: Product Database ---
const products = {
    home: {
        brand: "Nike Air Zoom",
        model: "PEGASUS 40",
        collection: "Running Collection",
        desc: "Experience the future of speed. Ultra-responsive cushioning meets a breathable mesh upper for the ultimate ride.",
        specs: { weight: "260g", material: "Mesh", sole: "Zoom Air", style: "Running" },
        price: 11895,
        image: "images/1.png",
        color: "red",
        accent: "#ff3b3b",
        glow: "rgba(255, 59, 59, 0.4)"
    },
    men: [
        {
            brand: "Nike Jordan",
            model: "AIR JORDAN 1",
            collection: "Men's Heritage",
            desc: "The classic that started it all. Premium leather, iconic coloring, and street-ready style for the modern era.",
            specs: { weight: "400g", material: "Leather", sole: "Rubber Cupsole", style: "Lifestyle" },
            price: 16995,
            image: "images/2.png",
            color: "blue",
            accent: "#3b82ff",
            glow: "rgba(59, 130, 255, 0.4)"
        },
        {
            brand: "Nike Dunk",
            model: "DUNK RETRO",
            collection: "Men's Street",
            desc: "Created for the hardwood but taken to the streets, the '80s b-ball icon returns with perfectly sheened overlays.",
            specs: { weight: "380g", material: "Leather", sole: "Rubber", style: "Lifestyle" },
            price: 10795,
            image: "images/3.png",
            color: "green",
            accent: "#00b894",
            glow: "rgba(0, 184, 148, 0.4)"
        },
        {
            brand: "Nike Air",
            model: "AIR FORCE 1",
            collection: "Men's Classic",
            desc: "The radiance lives on in the Nike Air Force 1 '07, the b-ball OG that puts a fresh spin on what you know best.",
            specs: { weight: "420g", material: "Leather", sole: "Air Sole", style: "Casual" },
            price: 9695,
            image: "images/1.png",
            color: "red",
            accent: "#e1306c",
            glow: "rgba(225, 48, 108, 0.4)"
        },
        {
            brand: "Jordan Brand",
            model: "AIR JORDAN 4",
            collection: "Men's Exclusive",
            desc: "Premium materials and a responsive ride come together in this iconic design.",
            specs: { weight: "450g", material: "Nubuck/Mesh", sole: "Air", style: "Retro" },
            price: 19295,
            image: "images/2.png", // Reusing image
            color: "blue",
            accent: "#1e272e",
            glow: "rgba(30, 39, 46, 0.4)"
        },
        {
            brand: "Nike Air Max",
            model: "AIR MAX PLUS",
            collection: "Men's Sport",
            desc: "A Tuned Air experience that offers premium stability and unbelievable cushioning.",
            specs: { weight: "390g", material: "Synthetic", sole: "Tuned Air", style: "Sport" },
            price: 15495,
            image: "images/3.png", // Reusing image
            color: "green",
            accent: "#f39c12",
            glow: "rgba(243, 156, 18, 0.4)"
        }
    ],
    women: [
        {
            brand: "Nike Air Max",
            model: "AIR MAX 97",
            collection: "Women's Lifestyle",
            desc: "Featuring the original ripple design inspired by Japanese bullet trains, letting you push your style full-speed ahead.",
            specs: { weight: "350g", material: "Synthetic/Fabric", sole: "Max Air", style: "Lifestyle" },
            price: 15995,
            image: "images/3.png",
            color: "green",
            accent: "#3bff89",
            glow: "rgba(59, 255, 137, 0.4)"
        },
        {
            brand: "Nike Vapormax",
            model: "VAPORMAX FLYKNIT",
            collection: "Women's Running",
            desc: "Made from at least 40% recycled materials by weight, our most futuristic Air unit gets a sustainable update.",
            specs: { weight: "200g", material: "Flyknit", sole: "VaporMax Air", style: "Running" },
            price: 19995,
            image: "images/2.png",
            color: "blue",
            accent: "#a29bfe",
            glow: "rgba(162, 155, 254, 0.4)"
        },
        {
            brand: "Nike Blazer",
            model: "BLAZER MID 77",
            collection: "Women's Vintage",
            desc: "Harnessed the old-school look of Nike basketball with a vintage midsole finish.",
            specs: { weight: "360g", material: "Leather/Synthetic", sole: "Rubber", style: "Casual" },
            price: 9695,
            image: "images/1.png",
            color: "red",
            accent: "#ff7675",
            glow: "rgba(255, 118, 117, 0.4)"
        },
        {
            brand: "Nike Dunk",
            model: "DUNK LOW PANDA",
            collection: "Women's Trending",
            desc: "The street icon returns in a classic black and white colorway that goes with absolutely everything.",
            specs: { weight: "340g", material: "Leather", sole: "Rubber", style: "Casual" },
            price: 8295,
            image: "images/2.png", // Reusing
            color: "blue", // Using blue theme for contrast
            accent: "#dfe6e9",
            glow: "rgba(223, 230, 233, 0.4)"
        },
        {
            brand: "Nike Running",
            model: "ZOOM FLY 5",
            collection: "Women's Performance",
            desc: "Draft the gap between your weekend training run and race day in a durable design.",
            specs: { weight: "240g", material: "Mesh", sole: "ZoomX", style: "Running" },
            price: 14495,
            image: "images/3.png", // Reusing
            color: "green",
            accent: "#fd79a8",
            glow: "rgba(253, 121, 168, 0.4)"
        }
    ],
    // New: Array for Browsing
    new: [
        {
            brand: "Nike Future",
            model: "ADAPT BB 2.0",
            collection: "Future of Basketball",
            desc: "Power laces that lock you in at the touch of a button. The future of basketball footwear is here.",
            specs: { weight: "500g", material: "Flyknit", sole: "Cushlon", style: "Performance" },
            price: 32995,
            image: "images/1.png",
            color: "red",
            accent: "#ff3b3b",
            glow: "rgba(255, 59, 59, 0.4)"
        },
        {
            brand: "Nike React",
            model: "INFINITY RUN 4",
            collection: "Energy Return",
            desc: "Built for those who never stop. Maximum energy return with React foam technology for your longest runs.",
            specs: { weight: "290g", material: "Flyknit", sole: "React Foam", style: "Running" },
            price: 14995,
            image: "images/2.png",
            color: "blue",
            accent: "#4d8ef5",
            glow: "rgba(77, 142, 245, 0.4)"
        },
        {
            brand: "Nike SB",
            model: "DUNK LOW PRO",
            collection: "Skateboarding",
            desc: "Iconic style meets skate performance. Durable materials and Zoom Air cushioning for all-day comfort.",
            specs: { weight: "380g", material: "Suede/Leather", sole: "Rubber", style: "Skate" },
            price: 9695,
            image: "images/3.png",
            color: "green",
            accent: "#00b894",
            glow: "rgba(0, 184, 148, 0.4)"
        },
        {
            brand: "Nike Basketball",
            model: "KOBE 6 PROTRO",
            collection: "Legendary Status",
            desc: "Faster, lower, and sleeker. The Protro brings modern tech to a classic silhouette.",
            specs: { weight: "360g", material: "Synthetic Scale", sole: "Zoom Turbo", style: "Performance" },
            price: 16995,
            image: "images/1.png", // Reusing
            color: "red",
            accent: "#d63031",
            glow: "rgba(214, 48, 49, 0.4)"
        },
        {
            brand: "Nike Air Max",
            model: "SCORPION FK",
            collection: "Air Revolution",
            desc: "The most Air we’ve ever put into a shoe. A futuristic sensation that delivers tomorrow's comfort today.",
            specs: { weight: "410g", material: "Flyknit", sole: "Scorpion Air", style: "Lifestyle" },
            price: 22495,
            image: "images/2.png", // Reusing
            color: "purple",
            accent: "#9d00ff",
            glow: "rgba(157, 0, 255, 0.4)"
        },
        {
            brand: "Jordan Brand",
            model: "LUKA 2",
            collection: "Next Gen Hoops",
            desc: "Designed for the craftiness of Luka Dončić. Step back, side step, and stop on a dime with full control.",
            specs: { weight: "380g", material: "Engineered Mesh", sole: "Formula 23", style: "Performance" },
            price: 11495,
            image: "images/3.png", // Reusing
            color: "yellow",
            accent: "#ffe600",
            glow: "rgba(255, 230, 0, 0.4)"
        },
        {
            brand: "Nike Running",
            model: "INVINCIBLE 3",
            collection: "Max Cushion",
            desc: "Maximum cushioning to support every mile. Our ZoomX foam feels soft and bouncy to keep you going.",
            specs: { weight: "300g", material: "Flyknit", sole: "ZoomX", style: "Running" },
            price: 16995,
            image: "images/1.png", // Reusing
            color: "orange",
            accent: "#ff7b00",
            glow: "rgba(255, 123, 0, 0.4)"
        }
    ]
};

/* --- DOM Elements --- */
const container = document.querySelector(".container");
const card = document.querySelector(".card");
const cardWrapper = document.querySelector(".card-wrapper");
const sneakerImg = document.querySelector("#shoe-img");
const backgroundLights = document.querySelectorAll(".ambient-light");
const navLinks = document.querySelectorAll(".nav-item");

// Product Info Elements that change
const domBrand = document.querySelector(".brand");
const domModel = document.querySelector(".model");
const domCollection = document.querySelector(".collection");
const domDesc = document.querySelector(".description");
const domPrice = document.querySelector(".price-tag");
const infoArea = document.querySelector(".info-area");
const cardWishlistTrigger = document.querySelector(".card-wishlist-trigger"); // NEW

// Navigation Arrows
const navLeft = document.querySelector(".card-nav.left");
const navRight = document.querySelector(".card-nav.right");

// Category Grid Elements
const categoryGrid = document.querySelector(".category-grid");
const gridHeader = document.querySelector(".grid-title");
const gridItemsContainer = document.querySelector(".grid-items");
const backFromGridBtn = document.querySelector(".back-btn");

// Cart Elements
const cartBtn = document.querySelector("#cart-btn");
const closeCartBtn = document.querySelector("#close-cart");
const cartSidebar = document.querySelector(".cart-sidebar");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItemsContainer = document.querySelector(".cart-items");
const cartCountBubble = document.querySelector(".cart-count");
const totalPriceEl = document.querySelector(".total-price");
const addToCartBtn = document.querySelector(".btn-purchase");
const checkoutBtn = document.querySelector(".btn-checkout");

// Wishlist Elements (NEW)
const wishlistBtn = document.querySelector("#wishlist-btn");
const closeWishlistBtn = document.querySelector("#close-wishlist");
const wishlistSidebar = document.querySelector(".wishlist-sidebar");
const wishlistOverlay = document.querySelector(".wishlist-overlay");
const wishlistItemsContainer = document.querySelector(".wishlist-items");
const wishlistCountBubble = document.querySelector(".wishlist-count");

// Checkout Page Elements
const checkoutOverlay = document.querySelector(".checkout-overlay");
const closeCheckoutBtn = document.querySelector("#close-checkout");
const checkoutItemsContainer = document.querySelector(".checkout-items");
const checkoutTotalPriceEl = document.querySelector("#checkout-total-price");
const checkoutForm = document.querySelector("#checkout-form");

// Search Elements
const searchBtn = document.querySelector(".bx-search");
const searchOverlay = document.querySelector(".search-overlay");
const closeSearchBtn = document.querySelector("#close-search");
const searchInput = document.querySelector("#search-input");
const searchResults = document.querySelector(".search-results");

// Modal Elements
const modalOverlay = document.querySelector(".modal-overlay");
const closeModalBtn = document.querySelector("#close-modal");
const modalImg = document.querySelector("#modal-img");
const modalBrand = document.querySelector(".modal-brand");
const modalTitle = document.querySelector(".modal-title");
const modalDesc = document.querySelector(".modal-desc");
const modalSpecsContainer = document.querySelector(".tech-specs ul");
const modalPrice = document.querySelector(".modal-price");
const modalAddBtn = document.querySelector(".modal-add-btn");

/* --- State --- */
let cart = JSON.parse(localStorage.getItem("active_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("active_wishlist")) || []; // NEW
let currentProduct = products.home; // Default
let activeSize = "38";

// Browsing State
let currentCategory = 'home';
let currentIndex = 0; // For arrays

// Initial Render
if (cart.length > 0) updateCartUI();
if (wishlist.length > 0) updateWishlistUI();
updateHeartState(currentProduct);

/* --- Virtual Router & Category Grid Logic --- */
function checkViewAllButton() {
    const existingBtn = document.querySelector(".view-collection-btn");
    if (existingBtn) existingBtn.remove();

    if (Array.isArray(products[currentCategory])) {
        const btn = document.createElement("button");
        btn.className = "view-collection-btn";
        btn.innerHTML = `View Collection <i class='bx bx-grid-alt'></i>`;
        card.appendChild(btn);

        btn.addEventListener("click", () => {
            openCategoryGrid(currentCategory);
        });
    }
}

checkViewAllButton();

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        const pageKey = link.getAttribute("data-page");
        loadPage(pageKey);
    });
});

function loadPage(key) {
    currentCategory = key;
    currentIndex = 0;

    // Close grid if open
    categoryGrid.classList.remove("active");
    categoryGrid.classList.add("hidden");

    let data;
    if (Array.isArray(products[key])) {
        data = products[key][0];
        navLeft.classList.remove("hidden");
        navRight.classList.remove("hidden");
    } else {
        data = products[key];
        navLeft.classList.add("hidden");
        navRight.classList.add("hidden");
    }

    if (!data) return;
    updateProductView(data);

    document.querySelectorAll(".color").forEach(c => c.classList.remove("active"));
    document.querySelector(`.color[data-color="${data.color}"]`)?.classList.add("active");

    if (key === 'new') {
        setTimeout(() => openCategoryGrid('new'), 400);
    }
}

function updateProductView(data) {
    currentProduct = data; // Update global state for cart
    updateHeartState(data); // Sync heart

    cardWrapper.classList.add("fade-out");
    cardWrapper.classList.remove("fade-in");

    setTimeout(() => {
        domBrand.textContent = data.brand;
        domModel.textContent = data.model;
        domCollection.textContent = data.collection;
        domDesc.textContent = data.desc;
        const formattedPrice = data.price.toLocaleString("en-IN");
        domPrice.innerHTML = `<span class="currency">₹</span>${formattedPrice}`;
        sneakerImg.src = data.image;

        document.documentElement.style.setProperty('--accent-color', data.accent);
        document.documentElement.style.setProperty('--accent-glow', data.glow);

        cardWrapper.classList.remove("fade-out");
        cardWrapper.classList.add("fade-in");
    }, 300);
}

// Arrow Click Handlers
navRight.addEventListener("click", () => {
    if (Array.isArray(products[currentCategory])) {
        currentIndex = (currentIndex + 1) % products[currentCategory].length;
        updateProductView(products[currentCategory][currentIndex]);
    }
});

navLeft.addEventListener("click", () => {
    if (Array.isArray(products[currentCategory])) {
        currentIndex = (currentIndex - 1 + products[currentCategory].length) % products[currentCategory].length;
        updateProductView(products[currentCategory][currentIndex]);
    }
});

/* --- Category Grid Functions --- */
function openCategoryGrid(category) {
    const items = products[category];
    if (!items || !Array.isArray(items)) return;

    gridItemsContainer.innerHTML = "";
    gridHeader.textContent = category.toUpperCase() + " COLLECTION";

    if (category === 'new') {
        renderNewCarousel();
        categoryGrid.classList.remove("hidden");
        setTimeout(() => categoryGrid.classList.add("active"), 10);
        return;
    }

    items.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "grid-item";
        div.innerHTML = `
            <img src="${item.image}" alt="${item.model}">
            <h4>${item.model}</h4>
            <div class="price">₹${item.price.toLocaleString("en-IN")}</div>
        `;

        div.addEventListener("click", () => {
            currentIndex = index;
            updateProductView(item);
            categoryGrid.classList.remove("active");
            setTimeout(() => categoryGrid.classList.add("hidden"), 400);
        });

        gridItemsContainer.appendChild(div);
    });

    categoryGrid.classList.remove("hidden");
    setTimeout(() => categoryGrid.classList.add("active"), 10);
}

/* --- 3D Carousel Logic --- */
let carouselIdx = 0; // Start at 0 to center properly
let is360Mode = false;
let rotationAngle = 0;
let isDragging = false;
let startX = 0;
let currentRotation = 0;

function renderNewCarousel() {
    const items = products['new'];
    const container = document.createElement("div");
    container.className = "carousel-container";

    // Create Arrows Container (z-index managed in CSS)
    const nav = document.createElement("div");
    nav.className = "carousel-nav";
    nav.innerHTML = `
        <div class="nav-arrow" id="c-prev"><i class='bx bx-chevron-left'></i></div>
        <div class="nav-arrow" id="c-next"><i class='bx bx-chevron-right'></i></div>
    `;

    // Create Card Elements
    items.forEach((item, i) => {
        const card = document.createElement("div");
        card.className = "carousel-card";
        // Tag with index
        card.dataset.index = i;

        card.innerHTML = `
            <img src="${item.image}" alt="${item.model}">
            <div class="carousel-info">
                <h3>${item.model}</h3>
                <p>₹${item.price.toLocaleString("en-IN")}</p>
            </div>
        `;

        // Click to Select or Enter 360° Mode
        card.addEventListener("click", () => {
            if (card.classList.contains("center") && !is360Mode) {
                // Enter 360° rotation mode
                enter360Mode(card, item);
            } else if (!card.classList.contains("center")) {
                // Move this item to center
                carouselIdx = i;
                updateCarouselClasses(items.length);
            }
        });

        container.appendChild(card);
    });

    container.appendChild(nav);
    gridItemsContainer.appendChild(container);

    // Initial Class Update
    updateCarouselClasses(items.length);

    // Event Listeners for Nav
    document.getElementById("c-prev").addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent card clicks
        carouselIdx = (carouselIdx - 1 + items.length) % items.length;
        updateCarouselClasses(items.length);
    });

    document.getElementById("c-next").addEventListener("click", (e) => {
        e.stopPropagation();
        carouselIdx = (carouselIdx + 1) % items.length;
        updateCarouselClasses(items.length);
    });
}

function updateCarouselClasses(total) {
    const cards = document.querySelectorAll(".carousel-card");
    cards.forEach(c => {
        c.className = "carousel-card"; // Reset
        c.classList.remove("center", "left", "right", "hidden-left", "hidden-right");
    });

    // Circular Logic indices
    const centerI = carouselIdx;
    const leftI = (carouselIdx - 1 + total) % total;
    const rightI = (carouselIdx + 1) % total;

    const centerCard = document.querySelector(`.carousel-card[data-index="${centerI}"]`);
    const leftCard = document.querySelector(`.carousel-card[data-index="${leftI}"]`);
    const rightCard = document.querySelector(`.carousel-card[data-index="${rightI}"]`);

    if (centerCard) centerCard.classList.add("center");
    if (leftCard) leftCard.classList.add("left");
    if (rightCard) rightCard.classList.add("right");

    // Hide others
    cards.forEach(c => {
        if (!c.classList.contains("center") && !c.classList.contains("left") && !c.classList.contains("right")) {
            // Determine side for animation direction (simplified)
            c.classList.add("hidden-left"); // default hide
        }
    });

    // Update center accent styles logic if needed locally, but CSS handles card look
}

backFromGridBtn.addEventListener("click", () => {
    categoryGrid.classList.remove("active");
    setTimeout(() => categoryGrid.classList.add("hidden"), 400);
});

/* --- Wishlist System Logic --- */
cardWishlistTrigger.addEventListener("click", () => {
    toggleWishlist(currentProduct);
});

function toggleWishlist(product) {
    const exists = wishlist.find(item => item.model === product.model && item.collection === product.collection);

    if (exists) {
        // Remove
        wishlist = wishlist.filter(item => item.model !== product.model || item.collection !== product.collection);
        showToast("Removed from Favorites", "bx-heart-circle");
    } else {
        // Add
        const wishItem = { ...product }; // Copy
        wishlist.push(wishItem);
        showToast("Added to Favorites", "bx-heart");
    }

    updateWishlistUI();
    updateHeartState(product);
}

function updateHeartState(product) {
    const exists = wishlist.find(item => item.model === product.model && item.collection === product.collection);
    if (exists) {
        cardWishlistTrigger.classList.add("active");
    } else {
        cardWishlistTrigger.classList.remove("active");
    }
}

function updateWishlistUI() {
    localStorage.setItem("active_wishlist", JSON.stringify(wishlist));

    // Bubble
    wishlistCountBubble.textContent = wishlist.length;
    if (wishlist.length > 0) {
        wishlistCountBubble.classList.add("visible");
    } else {
        wishlistCountBubble.classList.remove("visible");
    }

    // Sidebar items
    wishlistItemsContainer.innerHTML = "";
    if (wishlist.length === 0) {
        wishlistItemsContainer.innerHTML = `<div class="empty-cart-msg">No favorites yet.</div>`;
        return;
    }

    wishlist.forEach(item => {
        const itemEl = document.createElement("div");
        itemEl.className = "cart-item"; // Reuse cart item stylings
        itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.model}">
            <div class="cart-item-content">
                <div class="item-details">
                    <h4>${item.model}</h4>
                    <p>${item.collection}</p>
                    <div class="item-price">₹${item.price.toLocaleString("en-IN")}</div>
                </div>
                <button class="cart-remove-btn wishlist-remove-btn" data-model="${item.model}">
                    <i class='bx bx-x'></i>
                </button>
            </div>
            <button class="wishlist-move-btn" data-model="${item.model}">Move to Bag</button>
        `;
        // Quick Move Button Spec
        const moveBtn = itemEl.querySelector(".wishlist-move-btn");
        moveBtn.style.cssText = "background: transparent; border: 1px solid var(--accent-color); color: var(--accent-color); padding: 5px 10px; border-radius: 15px; font-size: 0.8rem; margin-top:0.5rem; cursor:pointer;";

        wishlistItemsContainer.appendChild(itemEl);
    });

    // Delegated Events for Wishlist
    document.querySelectorAll(".wishlist-remove-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const model = btn.getAttribute("data-model");
            wishlist = wishlist.filter(item => item.model !== model);
            updateWishlistUI();
            updateHeartState(currentProduct);
        });
    });

    document.querySelectorAll(".wishlist-move-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const model = btn.getAttribute("data-model");
            const prod = wishlist.find(p => p.model === model);
            if (prod) {
                // Add to cart
                const newItem = {
                    ...prod,
                    size: activeSize,
                    id: Date.now()
                };
                cart.push(newItem);
                updateCartUI();
                showToast("Moved to Bag", "bx-shopping-bag");

                // Remove from wishlist
                wishlist = wishlist.filter(p => p.model !== model);
                updateWishlistUI();
                updateHeartState(currentProduct);
            }
        });
    });
}

// Side logic
wishlistBtn.addEventListener("click", () => {
    wishlistSidebar.classList.add("open");
    wishlistOverlay.classList.add("active");
});
closeWishlistBtn.addEventListener("click", () => {
    wishlistSidebar.classList.remove("open");
    wishlistOverlay.classList.remove("active");
});
wishlistOverlay.addEventListener("click", () => {
    wishlistSidebar.classList.remove("open");
    wishlistOverlay.classList.remove("active");
});


/* --- Product Detail Modal Logic --- */
sneakerImg.style.cursor = "pointer";
sneakerImg.addEventListener("click", openModal);

function openModal() {
    modalImg.src = currentProduct.image;
    modalBrand.textContent = currentProduct.brand;
    modalTitle.textContent = currentProduct.model;
    modalDesc.textContent = currentProduct.desc;
    modalPrice.textContent = `₹${currentProduct.price.toLocaleString("en-IN")}`;

    const specs = currentProduct.specs || { weight: "N/A", material: "N/A", sole: "N/A", style: "Lifestyle" };
    modalSpecsContainer.innerHTML = `
        <li><strong>Material:</strong> ${specs.material}</li>
        <li><strong>Weight:</strong> ${specs.weight}</li>
        <li><strong>Sole:</strong> ${specs.sole}</li>
        <li><strong>Style:</strong> ${specs.style}</li>
    `;

    modalOverlay.classList.add("active");
}

closeModalBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
});

modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
    }
});

modalAddBtn.addEventListener("click", () => {
    addToCartBtn.click();
    modalOverlay.classList.remove("active");
});


/* --- Custom Cursor Logic --- */
const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + "px";
        cursorFollower.style.top = e.clientY + "px";
    }, 50);
});

const hoverables = document.querySelectorAll("a, button, .clickable, i, .color, .size, .card-nav, #shoe-img, .grid-item");
hoverables.forEach(el => {
    el.addEventListener("mouseenter", () => cursorFollower.classList.add("active"));
    el.addEventListener("mouseleave", () => cursorFollower.classList.remove("active"));
});

/* --- Toast Notification System --- */
function showToast(message, icon = "bx-check") {
    const toastContainer = document.querySelector(".toast-container");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class='bx ${icon}'></i><span>${message}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = "slideOutToast 0.5s forwards";
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

/* --- Search Logic --- */
searchBtn.addEventListener("click", () => {
    searchOverlay.classList.add("active");
    setTimeout(() => searchInput.focus(), 100);
});

closeSearchBtn.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
});

searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    searchResults.innerHTML = "";
    if (term.length < 2) return;

    let allProducts = [];
    Object.keys(products).forEach(key => {
        if (Array.isArray(products[key])) {
            allProducts = [...allProducts, ...products[key]];
        } else {
            allProducts.push(products[key]);
        }
    });

    allProducts.forEach(prod => {
        if (prod.model.toLowerCase().includes(term) || prod.collection.toLowerCase().includes(term)) {
            const result = document.createElement("div");
            result.className = "search-result-item";

            result.addEventListener("click", () => {
                currentProduct = prod;
                openModal();
                searchOverlay.classList.remove("active");
            });

            result.innerHTML = `
                <img src="${prod.image}" alt="${prod.model}">
                <div>
                    <h4>${prod.model}</h4>
                    <p>${prod.collection}</p>
                </div>
            `;
            searchResults.appendChild(result);
        }
    });
});


/* --- 3D Tilt Effect --- */
container.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const xAxis = (window.innerWidth / 2 - clientX) / 25;
    const yAxis = (window.innerHeight / 2 - clientY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    sneakerImg.style.transform = `rotate(-25deg) translateZ(150px) translateY(30px) rotateZ(-10deg)`;

    backgroundLights.forEach((light, index) => {
        const speed = (index + 1) * 2;
        light.style.transform = `translate(${xAxis * speed}px, ${yAxis * speed}px)`;
    });
});

container.addEventListener("mouseleave", () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    sneakerImg.style.transform = `rotate(-25deg) translateZ(80px) translateY(30px)`;
    backgroundLights.forEach(light => light.style.transform = `translate(0, 0)`);
});

container.addEventListener("mouseenter", () => card.style.transition = "none");

/* --- Cart Logic --- */
cartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

function openCart() {
    cartSidebar.classList.add("open");
    cartOverlay.classList.add("active");
}

function closeCart() {
    cartSidebar.classList.remove("open");
    cartOverlay.classList.remove("active");
}

addToCartBtn.addEventListener("click", () => {
    const newItem = {
        ...currentProduct,
        size: activeSize,
        id: Date.now()
    };
    cart.push(newItem);
    updateCartUI();
    showToast(`${currentProduct.model} added to bag!`, "bx-shopping-bag");
    setTimeout(() => openCart(), 800);
});

function updateCartUI() {
    localStorage.setItem("active_cart", JSON.stringify(cart));
    cartCountBubble.textContent = cart.length;
    cartCountBubble.classList.add("updated");
    setTimeout(() => cartCountBubble.classList.remove("updated"), 300);

    const total = cart.reduce((acc, item) => acc + item.price, 0);
    totalPriceEl.textContent = `₹${total.toLocaleString("en-IN")}`;

    cartItemsContainer.innerHTML = "";
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<div class="empty-cart-msg">Your bag is empty.</div>`;
        return;
    }

    cart.forEach(item => {
        const itemEl = document.createElement("div");
        itemEl.className = "cart-item";
        itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.model}">
            <div class="cart-item-content">
                <div class="item-details">
                    <h4>${item.model}</h4>
                    <p>Size: ${item.size} | Color: ${item.color}</p>
                    <div class="item-price">₹${item.price.toLocaleString("en-IN")}</div>
                </div>
                <button class="cart-remove-btn" data-id="${item.id}">
                    <i class='bx bx-trash'></i>
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(itemEl);
    });

    document.querySelectorAll(".cart-remove-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = Number(btn.getAttribute("data-id"));
            cart = cart.filter(item => item.id !== id);
            updateCartUI();
            showToast("Item removed from bag", "bx-trash");
        });
    });
}

// Checkout Button (Sidebar) -> Opens Overlay
checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) return;
    closeCart(); // Close sidebar

    // Populate Checkout Items
    checkoutItemsContainer.innerHTML = "";
    cart.forEach(item => {
        const div = document.createElement("div");
        div.className = "checkout-item-row";
        div.innerHTML = `
            <img src="${item.image}" alt="${item.model}">
            <div>
                 <h4>${item.model}</h4>
                 <div class="price">₹${item.price.toLocaleString("en-IN")}</div>
            </div>
        `;
        checkoutItemsContainer.appendChild(div);
    });

    const total = cart.reduce((acc, item) => acc + item.price, 0);
    checkoutTotalPriceEl.textContent = `₹${total.toLocaleString("en-IN")}`;

    checkoutOverlay.classList.add("active");
});

closeCheckoutBtn.addEventListener("click", () => {
    checkoutOverlay.classList.remove("active");
});

// Checkout Form Submission
checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = checkoutForm.querySelector(".pay-btn");
    const originalText = btn.innerText;

    btn.innerText = "Processing...";
    btn.style.opacity = "0.7";

    setTimeout(() => {
        btn.innerText = "Success!";
        btn.style.background = "#4df587";
        showToast("Order Placed Successfully! Email sent.", "bx-check-double");

        cart = [];
        updateCartUI();

        setTimeout(() => {
            checkoutOverlay.classList.remove("active");
            btn.innerText = originalText;
            btn.style.background = "var(--text-primary)";
            btn.style.opacity = "1";
            checkoutForm.reset();
        }, 2000);
    }, 2000);
});


/* --- Size Selection --- */
const sizeBtns = document.querySelectorAll(".size");
sizeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        sizeBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeSize = btn.getAttribute("data-size");
    });
});

/* --- Color Selection (Visual Only + Theme) --- */
const colorThemes = {
    red: { accent: "#ff3b3b", glow: "rgba(255, 59, 59, 0.4)", image: "images/1.png" },
    blue: { accent: "#3b82ff", glow: "rgba(59, 130, 255, 0.4)", image: "images/2.png" },
    green: { accent: "#3bff89", glow: "rgba(59, 255, 137, 0.4)", image: "images/3.png" }
};

const colorBtns = document.querySelectorAll(".color");
colorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        colorBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const color = btn.getAttribute("data-color");
        const theme = colorThemes[color];
        if (theme) {
            document.documentElement.style.setProperty('--accent-color', theme.accent);
            document.documentElement.style.setProperty('--accent-glow', theme.glow);
            sneakerImg.src = theme.image;
            currentProduct.color = color;
            currentProduct.image = theme.image;
            updateHeartState(currentProduct); // Check if this variant is in wishlist
        }
    });
});
