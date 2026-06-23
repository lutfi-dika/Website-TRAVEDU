/* =====================================
   DARK MODE
===================================== */
function initDarkMode() {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  if (!themeToggle) return;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    htmlElement.classList.add("dark-mode");
  }

  themeToggle.addEventListener("click", () => {
    const isDark = htmlElement.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

document.addEventListener("DOMContentLoaded", initDarkMode);

/* =====================================
   SEARCH SYSTEM (CITY + FESTIVAL + KULINER)
===================================== */
const searchBtn = document.getElementById("search-btn");
const closeSearch = document.getElementById("close-search");
const searchContainer = document.getElementById("search-container");
const searchInput = searchContainer?.querySelector("input");
const searchSuggestions = document.getElementById("search-suggestions");

/* ================= ROUTES ================= */
const cityRoutes = {
  jakarta: "../Tempat/jakarta.html",
  bandung: "../Tempat/bandung.html",
  jogja: "../Tempat/jogja.html",
  malang: "../Tempat/malang.html",
  bali: "../Tempat/bali.html",
  makassar: "../Tempat/Makassar.html",
  manado: "../Tempat/Manado.html",
  pontianak: "../Tempat/Pontianak.html",
  medan: "../Tempat/Medan.html",
  palembang: "../Tempat/Palembang.html",
  padang: "../Tempat/Padang.html",
};

/* ================= FESTIVAL DATA ================= */
const festivals = [
  { city: "Jakarta", name: "Jakarta Fair (PRJ)" },
  { city: "Bali", name: "Nyepi" },
  { city: "Jogja", name: "Sekaten" },
];

/* ================= CULINARY DATA ================= */
const culinary = [
  { city: "Jakarta", name: "Kerak Telor", type: "Makanan" },
  { city: "Jakarta", name: "Soto Betawi", type: "Makanan" },
  { city: "Bandung", name: "Batagor", type: "Makanan" },
  { city: "Bandung", name: "Es Cendol", type: "Minuman" },
  { city: "Jogja", name: "Gudeg", type: "Makanan" },
  { city: "Bali", name: "Ayam Betutu", type: "Makanan" },
];

/* ================= SEARCH OPEN/CLOSE ================= */
searchBtn?.addEventListener("click", () => {
  searchContainer.style.maxHeight = "500px";
  searchInput.focus();
});

closeSearch?.addEventListener("click", closeSearchBox);

function closeSearchBox() {
  searchContainer.style.maxHeight = "0";
  searchInput.value = "";
  searchSuggestions.innerHTML = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeSearchBox();
});

/* ================= SEARCH FUNCTIONALITY ================= */
searchInput?.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  searchSuggestions.innerHTML = "";
  if (!query) return;

  /* Cities */
  Object.keys(cityRoutes)
    .filter((city) => city.includes(query))
    .forEach((city) => {
      const div = document.createElement("div");
      div.className = "search-item";
      div.innerHTML = `📍 <b>${city.toUpperCase()}</b> <span class="text-xs">City</span>`;
      div.onclick = () => goCity(city);
      searchSuggestions.appendChild(div);
    });

  /* Festivals */
  festivals
    .filter((f) => f.name.toLowerCase().includes(query))
    .forEach((f) => {
      const div = document.createElement("div");
      div.className = "search-item";
      div.innerHTML = `🎉 <b>${f.name}</b> <span class="text-xs">Festival • ${f.city}</span>`;
      div.onclick = () => {
        window.location.href = `../Festival/Festival.html?city=${encodeURIComponent(f.city)}&festival=${encodeURIComponent(f.name)}`;
      };
      searchSuggestions.appendChild(div);
    });

  /* Culinary */
  culinary
    .filter((k) => k.name.toLowerCase().includes(query))
    .forEach((k) => {
      const div = document.createElement("div");
      div.className = "search-item";
      div.innerHTML = `🍽️ <b>${k.name}</b> <span class="text-xs">${k.type} • ${k.city}</span>`;
      div.onclick = () => {
        window.location.href = `../Kuliner/Kuliner.html?city=${encodeURIComponent(k.city)}&food=${encodeURIComponent(k.name)}`;
      };
      searchSuggestions.appendChild(div);
    });
});

/* ================= ENTER KEY SEARCH ================= */
searchInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const query = searchInput.value.toLowerCase().trim();
    if (cityRoutes[query]) goCity(query);
  }
});

/* ================= CITY NAVIGATION ================= */
function goCity(city) {
  window.location.href = cityRoutes[city];
}
