function initDarkMode() {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    htmlElement.classList.add("dark-mode");
  }

  themeToggle.addEventListener("click", () => {
    htmlElement.classList.toggle("dark-mode");
    const isDark = htmlElement.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
// Initialize dark mode when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initDarkMode();
    initLanguage();
  });
} else {
  initDarkMode();
  initLanguage();
}

function goCity(city) {
  const routes = {
    Jakarta: "jakarta.html",
    Bandung: "bandung.html",
    Jogja: "jogja.html",
    Malang: "malang.html",
    Bali: "bali.html",
    Makassar: "Makassar.html",
    Manado: "Manado.html",
    Balikpapan: "Balikpapan.html",
    Pontianak: "Pontianak.html",
    Medan: "Medan.html",
    Palembang: "Palembang.html",
    Padang: "Padang.html",
    Jayapura: "Jayapura.html",
    Mataram: "Mataram.html",
    Kupang: "Kupang.html",
    Ambon: "Ambon.html",
  };
  window.location.href = routes[city];
}

// --- SLIDESHOW HERO ---
const images = [
  "https://wallpaperaccess.com/full/6154321.jpg",
  "https://wallpaperaccess.com/full/6154325.jpg",
  "https://2.bp.blogspot.com/-kBJIgYcYtzo/Vqt7vCnT1LI/AAAAAAAABQ0/nYxWtho7zik/s1600/2.jpg",
  "https://travelinkmagz.com/wp-content/uploads/2020/04/JKT_Monas_1920x1080px_1.jpg",
  "https://idetrips.com/wp-content/uploads/2020/07/kawah-ratu-tangkuban-parahu.jpg",
  "https://www.bugbog.com/wp-content/uploads/2022/05/dc76a908affc27f2/mount-bromo.jpeg",
  "https://miro.medium.com/v2/resize:fit:1200/1*jD-8s4iAF5IBBUi3LlMQog.png", //Makassar
  "https://tsoimageprod.azureedge.net/sys-master-hybrismedia/hba/hcf/8846586871838/tempat-wisata-di-manado.jpg", //Manado
  "https://www.agoda.com/wp-content/uploads/2024/09/Balikpapan-Indonesia.jpg", //Balikpapan
  "https://www.indonesia.travel/contentassets/dc7348070ee34ce0827048868bcbee17/pontianak_banner.jpg", //Pontianak
  "https://cdn.britannica.com/36/123136-050-30F29A3F/Mosque-Medan-North-Sumatra-Indonesia.jpg", //Medan
  "https://3.bp.blogspot.com/-sBSCjoXYXyQ/UHF-KMkuGNI/AAAAAAAAAAk/XlrX316sK-E/s1600/palembang.jpg", //Palembang
  "https://tse3.mm.bing.net/th/id/OIP.PsVW7zSAzgNs2MlrnO3B6wHaE7?pid=Api&h=220&P=0", //Padang
  "https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2019/01/wisata-jayapura-5-Harian-Papua.png", //Jayapura
  "https://www.selasar.com/wp-content/uploads/2020/08/Kerajaan-Mataram-1.jpg", //Mataram
  "https://lh7-us.googleusercontent.com/y1rvfPgRTzJ9HI72y0umzxEX1A9IhsqB3mzJl9Z9uJOmaPjUCwNysphYEkKtSnPcSCFVOxWXPdxy1VusXkoa6vcsow_1_tTKHl-aqM2NkDOPdKMmhFlEDrxpHLWfaWl4g0oWk487kKBbhNjeFoJcTRo?dpr=2&w=675&fit=scale&auto=format&fm=pjpg", //Kupang
  "https://images.tokopedia.net/blog-tokopedia-com/uploads/2019/07/wisata-ambon-9-Casa-Indonesia.jpg", //Ambon
];
let currentIndex = 0;
const bgContainer = document.getElementById("bg-container");
const timerBar = document.getElementById("timer-bar");

images.forEach((img, index) => {
  const div = document.createElement("div");
  div.className = `bg-layer ${index === 0 ? "active" : ""}`;
  div.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${img}')`;
  bgContainer.appendChild(div);
});

function nextSlide() {
  const layers = document.querySelectorAll(".bg-layer");
  layers[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  layers[currentIndex].classList.add("active");
  startTimer();
}
function startTimer() {
  timerBar.style.transition = "none";
  timerBar.style.width = "0%";
  setTimeout(() => {
    timerBar.style.transition = "width 10000ms linear";
    timerBar.style.width = "100%";
  }, 50);
}
setInterval(nextSlide, 10000);
startTimer();

// --- SEARCH & DROPDOWN ---
const searchBtn = document.getElementById("search-btn");
const closeSearch = document.getElementById("close-search");
const searchContainer = document.getElementById("search-container");
const searchInput = searchContainer.querySelector('input[type="text"]');
const searchSuggestions = document.getElementById("search-suggestions");

const cities = [
  "Jakarta",
  "Bandung",
  "Jogja",
  "Malang",
  "Bali",
  "Makasar",
  "Manado",
  "Balikpapan",
  "Pontianak",
  "Medan",
  "Palembang",
  "Padang",
  "Jayapura",
  "Mataram",
  "Kupang",
  "Ambon",
];

// Festival and cultural content database
const searchContent = {
  festivals: [
    // Bali festivals
    {
      city: "Bali",
      name: "Nyepi: Keheningan Suci",
      type: "Festival",
      description:
        "Sacred day of silence and purification - Hari Penyucian Jiwa & Alam",
    },
    {
      city: "Bali",
      name: "Pawai Ogoh-Ogoh",
      type: "Festival",
      description:
        "Spectacular parade with giant demon effigies - Malam Pengerupukan",
    },
    // Jogja festivals
    {
      city: "Jogja",
      name: "Sekaten & Grebeg",
      type: "Festival",
      description:
        "Tradisi Agung Keraton Yogyakarta dengan gamelan suci dan gunungan",
    },
    {
      city: "Jogja",
      name: "Jogja Java Carnival",
      type: "Festival",
      description:
        "Puncak Perayaan HUT Kota Yogyakarta - Night Carnival di Malioboro",
    },
    // Jakarta festivals
    {
      city: "Jakarta",
      name: "Jakarta Fair (PRJ)",
      type: "Festival",
      description:
        "Pameran & Hiburan Terbesar di Asia Tenggara - Pekan Raya Jakarta",
    },
    {
      city: "Jakarta",
      name: "Jakarta Fashion Week",
      type: "Festival",
      description:
        "Barometer Mode Terbesar di Asia Tenggara - Platform Kreativitas Industri Mode",
    },
    // Bandung festivals
    {
      city: "Bandung",
      name: "Asia Africa Festival",
      type: "Festival",
      description:
        "Merayakan Semangat Solidaritas Bangsa-Bangsa - Konferensi Tingkat Tinggi Asia-Afrika",
    },
    {
      city: "Bandung",
      name: "Pasar Seni ITB",
      type: "Festival",
      description:
        "Laboratorium Kreativitas Terbesar di Indonesia - Ajang Seni Rupa Mahasiswa ITB",
    },
    {
      city:"Bandung",
      name:"Pasar seni ITB",
      type:"Festival",
      description:
        "Laboratorium Kreativitas Terbesar di Indonesia - Ajang Seni Rupa Mahasiswa ITB",
    },
    {
      city:"Bandung",
      name:"Bandung International Biennale",
      type:"Festival",
      description:
        "Perayaan Seni Kontemporer Skala Internasional - Bandung International Biennale",
    },
    // Malang festivals
    {
      city: "Malang",
      name: "Jazz Gunung Bromo",
      type: "Festival",
      description:
        "Harmoni di Atas Awan - Festival Jazz Unik di Pegunungan Tengger",
    },

  ],
};

function performSearch(query) {
  const lowerQuery = query.toLowerCase();
  const results = [];

  // Search festivals
  searchContent.festivals.forEach((festival) => {
    if (
      festival.name.toLowerCase().includes(lowerQuery) ||
      festival.city.toLowerCase().includes(lowerQuery) ||
      festival.description.toLowerCase().includes(lowerQuery)
    ) {
      results.push(festival);
    }
  });

  // Search cities
  const matchedCities = cities.filter((city) =>
    city.toLowerCase().includes(lowerQuery),
  );

  return { results, matchedCities };
}

searchBtn.addEventListener("click", () => {
  searchContainer.style.maxHeight = "600px";
  searchInput.focus();
});

closeSearch.addEventListener("click", () => {
  searchContainer.style.maxHeight = "0";
  searchInput.value = "";
  searchSuggestions.innerHTML = "";
});

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.trim();

  if (query.length === 0) {
    searchSuggestions.innerHTML = "";
    return;
  }

  const { results, matchedCities } = performSearch(query);
  searchSuggestions.innerHTML = "";

  // Kota yang cocok
  if (matchedCities.length > 0) {
    matchedCities.forEach((city) => {
      const suggestionDiv = document.createElement("div");
      suggestionDiv.className =
        "px-4 py-3 rounded-lg bg-white/5 hover:bg-red-600/20 cursor-pointer transition-colors duration-200 border border-white/10 hover:border-red-500/50 mb-2";
      suggestionDiv.innerHTML = `<div class="flex items-center gap-2"><i class="fas fa-map-marker-alt text-red-600 text-lg"></i><div><span class="font-bold text-sm uppercase tracking-wider">${city}</span><span class="text-xs text-gray-500 ml-2">City</span></div></div>`;
      suggestionDiv.style.cursor = "pointer";
      suggestionDiv.onclick = () => goCity(city);
      searchSuggestions.appendChild(suggestionDiv);
    });

    // separator
    if (results.length > 0) {
      const separator = document.createElement("div");
      separator.className = "my-2 border-t border-white/10";
      searchSuggestions.appendChild(separator);
    }
  }

  // Festival yang cocok
  if (results.length > 0) {
    results.forEach((result) => {
      const resultDiv = document.createElement("div");
      resultDiv.className =
        "px-4 py-3 rounded-lg bg-gradient-to-r from-white/5 to-red-600/5 hover:from-white/10 hover:to-red-600/10 cursor-pointer transition-all duration-200 border border-white/10 hover:border-red-500/50 mb-2";

      const iconClass =
        result.type === "Festival" ? "fa-calendar" : "fa-utensils";
      const typeColor =
        result.type === "Festival" ? "text-red-500" : "text-orange-500";

      resultDiv.innerHTML = `
        <div class="flex items-start gap-3">
          <i class="fas ${iconClass} ${typeColor} text-lg mt-1 flex-shrink-0"></i>
          <div class="flex-grow">
            <div class="flex items-center gap-2">
              <span class="font-bold text-sm">${result.name}</span>
              <span class="text-xs px-2 py-1 bg-red-600/20 text-red-400 rounded-full">${result.type}</span>
            </div>
            <span class="text-xs text-gray-500">${result.city}</span>
            <p class="text-xs text-gray-400 mt-1">${result.description}</p>
          </div>
        </div>
      `;

      resultDiv.onclick = () => {
        if (result.type === "Festival") {
          // Navigate to Festival.html with festival name as parameter
          window.location.href = `Festival.html?city=${result.city}&festival=${encodeURIComponent(result.name)}`;
        }
        searchInput.value = "";
        searchSuggestions.innerHTML = "";
      };

      searchSuggestions.appendChild(resultDiv);
    });
  } else if (matchedCities.length === 0) {
    const noResultDiv = document.createElement("div");
    noResultDiv.className = "px-4 py-3 text-gray-600 text-sm";
    noResultDiv.innerHTML = `
      <div class="flex items-center gap-2">
        <i class="fas fa-search text-gray-500"></i>
        <span>Try searching for: Nyepi, Sekaten, Jakarta Fair, Gudeg...</span>
      </div>
    `;
    searchSuggestions.appendChild(noResultDiv);
  }
});

// Search on Enter key
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const query = searchInput.value.trim().toLowerCase();
    const matchedCity = cities.find((city) => city.toLowerCase() === query);

    if (matchedCity) {
      goCity(matchedCity);
      searchInput.value = "";
      searchSuggestions.innerHTML = "";
    }
  }
});

document.querySelectorAll(".dropdown-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    btn.nextElementSibling.classList.toggle("show");
  });
});

window.addEventListener("click", () =>
  document
    .querySelectorAll(".dropdown-menu")
    .forEach((m) => m.classList.remove("show")),
);

updateUI();

// Digital Clock - Updates navbar clock display
function updateClockDisplay() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (hoursEl) hoursEl.textContent = hours;
  if (minutesEl) minutesEl.textContent = minutes;
  if (secondsEl) secondsEl.textContent = seconds;
}

setInterval(updateClockDisplay, 1000);
updateClockDisplay();
