// --- DARK MODE TOGGLE ---
function initDarkMode() {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  // Toggle dark mode on button click
  themeToggle.addEventListener("click", () => {
    htmlElement.classList.toggle("dark-mode");
    const isDark = htmlElement.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateIcons(isDark ? "dark" : "light");
  });

    // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    htmlElement.classList.add("dark-mode");
  }
  updateIcons(savedTheme);
}

const islandCities = {
    Jawa: ['Jogja', 'Jakarta', 'Bandung', 'Malang'],
    Bali: ['Bali'],
    Sumatra: ['Medan', 'Padang', 'Palembang'],
    Kalimantan: ['Pontianak', 'Banjarmasin'],
    Sulawesi: ['Makassar', 'Manado'],
    Papua: ['Jayapura', 'Raja_Ampat'],
    Maluku: ['Ambon'],
    'Nusa Tenggara': ['Kupang', 'Mataram']
};

const islandData = {
    Bali: {
        bg: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2000",
        desc: "Negeri seribu pura yang menyimpan keajaiban spiritual di setiap sudut jalannya.",
        cities: ['Bali']
    },
    Jawa: {
        bg: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&q=80&w=2000",
        desc: "Pusat peradaban Jawa yang menjaga tradisi luhur di tengah gempuran modernitas.",
        cities: ['Jogja', 'Jakarta', 'Bandung', 'Malang']
    },
    Sumatra: {
        bg: "https://plus.unsplash.com/premium_photo-1664123873245-bd178d77ca19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Kota terbesar di Sumatera dengan festival budaya yang kaya dan beragam.",
        cities: ['Medan', 'Padang', 'Palembang']
    },
    Kalimantan: {
        bg: "https://images.unsplash.com/photo-1626269952530-b0ff5bb48853?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Pulau hijau dengan tradisi unik suku Dayak yang memukau.",
        cities: ['Pontianak', 'Banjarmasin']
    },
    Sulawesi: {
        bg: "https://images.unsplash.com/photo-1582426007790-f5a2e2392dd3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Tanah para raja dengan festival budaya yang mempesona.",
        cities: ['Makassar', 'Manado']
    },
    Papua: {
        bg: "https://images.unsplash.com/photo-1622638989794-3c2dd13726ed?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Tanah cenderawasih dengan kekayaan budaya yang luar biasa.",
        cities: ['Jayapura', 'Raja_Ampat']
    },
    Maluku: {
        bg: "https://images.unsplash.com/photo-1703081350237-ef57fafb6f6a?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Kepulauan rempah dengan tradisi maritim yang kental.",
        cities: ['Ambon']
    },
    'Nusa Tenggara': {
        bg: "https://images.unsplash.com/photo-1607427225127-a4ae1d4b050c?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Kepulauan eksotis dengan festival budaya yang memikat hati.",
        cities: ['Kupang', 'Mataram']
    }
};

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
// Initialize on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initDarkMode();
    initSearchFunctionality();
  });
} else {
  initDarkMode();
  initSearchFunctionality();
}

function goCity(city) {
  const btn = Array.from(document.querySelectorAll(".month-btn")).find(b => b.innerText.trim() === city);
  if (btn) btn.click();
}

// Festival
const cityData = {
    Bali: {
        bg: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2000",
        desc: "Negeri seribu pura yang menyimpan keajaiban spiritual di setiap sudut jalannya.",
        festivals: [
            {
                name: "Nyepi: Keheningan Suci",
                img: "https://www.rukita.co/stories/wp-content/uploads/2022/03/ide-ucapan-hari-raya-nyepi-2022.jpeg",
                article: `
    <div class="relative">
        <img src="https://www.rukita.co/stories/wp-content/uploads/2022/03/ide-ucapan-hari-raya-nyepi-2022.jpeg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Spiritual Cleansing</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Nyepi: Keheningan Suci</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Hari Penyucian Jiwa & Alam</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Ritual Keheningan yang Sakral</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Nyepi adalah hari raya Tahun Baru Saka di Bali yang ditandai dengan keheningan total selama 24 jam. Seluruh aktivitas dihentikan, lampu dimatikan, dan masyarakat Bali bermeditasi untuk membersihkan jiwa dan alam dari energi negatif.
                
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Nyepi</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. KEHENINGAN TOTAL</h4>
                        <p class="text-sm text-gray-400">Larangan beraktivitas, berbicara, menyalakan api, dan bahkan bepergian selama 24 jam penuh sebagai bentuk introspeksi spiritual.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. PECALANG & PENGAWASAN</h4>
                        <p class="text-sm text-gray-400">Pecalang (petugas keamanan adat) berpatroli untuk memastikan keheningan terjaga, sambil mengenakan pakaian tradisional.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. FILOSOFI PEMBERSIHAN</h4>
                        <p class="text-sm text-gray-400">Melambangkan penyucian diri dari segala bentuk negatif, memulai tahun baru dengan energi positif dan harmoni.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Seluruh Pulau Bali, Indonesia.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Biasanya bulan Maret atau April, sesuai kalender Saka Bali.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Pencinta budaya spiritual, wisatawan yang menghargai tradisi.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Hormati keheningan dengan tidak berbicara keras atau menyalakan lampu. Jika berkunjung, pastikan menginap di hotel yang memahami aturan Nyepi."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
            {
                name: "Pawai Ogoh-Ogoh",
                img: "https://cdn1-production-images-kly.akamaized.net/rV3qeE51njBWntEsrsWIpO-ZTPA=/0x0:3309x1863/800x450/filters:quality(75):strip_icc()/kly-media-production/medias/2257863/original/000684100_1529805030-20180624-Jokowi-di-Bali-FRR2.jpg",
                article: `
    <div class="relative">
        <img src="https://cdn1-production-images-kly.akamaized.net/rV3qeE51njBWntEsrsWIpO-ZTPA=/0x0:3309x1863/800x450/filters:quality(75):strip_icc()/kly-media-production/medias/2257863/original/000684100_1529805030-20180624-Jokowi-di-Bali-FRR2.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Cultural Parade</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Pawai Ogoh-Ogoh</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Malam Pengerupukan: Ogoh-Ogoh</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Seni yang Membara</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Ogoh-ogoh adalah karya seni patung dalam kebudayaan Bali yang menggambarkan kepribadian Bhuta Kala (unsur negatif). Dibuat dengan bambu, kertas, dan styrofoam, patung ini bisa mencapai tinggi 5 meter lebih. Ritual ini dilakukan tepat satu hari sebelum Nyepi, di mana ribuan pemuda memikul struktur ini sambil berputar-putar di persimpangan jalan dengan iringan musik Gamelan Balaganjur yang sangat dinamis.
                
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Pawai Ogoh-Ogoh</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. PEMBUATAN OGOH-OGOH</h4>
                        <p class="text-sm text-gray-400">Patung raksasa yang dibuat oleh seniman lokal, menggambarkan roh jahat dengan ekspresi menakutkan untuk diusir dari desa.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. PAWAI & MUSIK</h4>
                        <p class="text-sm text-gray-400">Pemuda memikul ogoh-ogoh sambil berputar-putar di jalanan, diiringi musik gamelan yang energik dan sorak-sorai.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. RITUAL PEMBAKARAN</h4>
                        <p class="text-sm text-gray-400">Di akhir pawai, ogoh-ogoh dibakar sebagai simbol pemusnahan sifat-sifat buruk manusia sebelum memasuki hari keheningan.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Berbagai desa di Bali, Indonesia, terutama di persimpangan jalan utama.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-clock text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Malam hari sebelum Nyepi, biasanya pukul 18:00 - 22:00 WIB.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Pencinta budaya, fotografer, dan wisatawan yang ingin merasakan atmosfer tradisional Bali.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Pawai ini sangat ramai dan energik. Pastikan datang lebih awal untuk mendapatkan posisi terbaik, dan hati-hati dengan kerumunan serta api pembakaran."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
            {
                name: "Galungan & Kuningan",
                img: "https://www.viceroybali.com/wp-content/uploads/2025/04/Galungan-and-Kuningan-in-Bali-2-1024x682.png",
                article: `
    <div class="relative">
        <img src="https://www.viceroybali.com/wp-content/uploads/2025/04/Galungan-and-Kuningan-in-Bali-2-1024x682.png" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Spiritual Celebration</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Galungan & Kuningan</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Perayaan Kemenangan Dharma atas Adharma</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Ritual Kemenangan Cahaya</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Galungan adalah hari raya Hindu Bali yang memperingati kemenangan dharma (kebenaran) atas adharma (kejahatan). Selama 10 hari, masyarakat Bali melakukan persembahyangan, membersihkan pura, dan menghias rumah dengan penjor. Kuningan menandai akhir perayaan dengan ritual Tawur Kesanga.
                
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Galungan & Kuningan</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. PENJOR</h4>
                        <p class="text-sm text-gray-400">Hiasan bambu yang menjulang tinggi di depan rumah, simbol gunung sebagai tempat suci.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. TARIAN KECAK</h4>
                        <p class="text-sm text-gray-400">Tarian suci yang menceritakan kisah Ramayana, dilakukan di pura-pura sebagai bagian ritual.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. TAWUR KESANGA</h4>
                        <p class="text-sm text-gray-400">Prosesi pada Kuningan di mana banten dan sesajian dibuang ke laut atau sungai sebagai simbol pelepasan energi negatif.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Seluruh Pulau Bali, terutama di desa-desa adat.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Galungan jatuh setiap 210 hari sekali, Kuningan 10 hari setelahnya.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Pencinta budaya spiritual, wisatawan yang ingin merasakan tradisi Bali.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Hormati prosesi ritual dengan tidak mengganggu atau memotret tanpa izin. Kenakan pakaian sopan saat mengunjungi pura."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
            {
                name: "Kecak Dance Festival",
                img: "https://jnewsonline.com/wp-content/uploads/2023/08/tari-kecak.jpg",
                article: `
    <div class="relative">
        <img src="https://jnewsonline.com/wp-content/uploads/2023/08/tari-kecak.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Traditional Performance</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Kecak Dance Festival</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Ritual Tari Api yang Spektakuler</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Harmoni Suara Manusia dan Api</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Kecak adalah tarian tradisional Bali yang menggabungkan gerakan tubuh, vokal manusia, dan api. Ribuan penari duduk melingkar sambil mengucapkan "cak" secara ritmis, menceritakan kisah Ramayana dengan iringan gamelan.
                
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Kecak Dance</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. VOKAL POLIFONI</h4>
                        <p class="text-sm text-gray-400">Suara "cak" yang diucapkan secara ritmis oleh puluhan penari, menciptakan harmoni suara manusia tanpa instrumen.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. GERAKAN DINAMIS</h4>
                        <p class="text-sm text-gray-400">Penari utama melakukan gerakan ekspresif di tengah lingkaran, menceritakan epik Ramayana.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. ELEMEN API</h4>
                        <p class="text-sm text-gray-400">Puncak pertunjukan dengan obor api yang dinyalakan, simbol pembersihan dan kemenangan.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Pura Uluwatu, Bali, atau venue khusus festival.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-clock text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Biasanya malam hari, tersedia sepanjang tahun di tempat wisata.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Wisatawan mancanegara, pecinta seni pertunjukan tradisional.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Datang lebih awal untuk mendapatkan tempat duduk terbaik. Jaga ketenangan selama pertunjukan berlangsung."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
        ],
    }, 
    Jogja: {
        bg: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&q=80&w=2000",
        desc: "Pusat peradaban Jawa yang menjaga tradisi luhur di tengah gempuran modernitas.",
        festivals: [
            {
                name: "Sekaten & Grebeg",
                img: "https://visitingjogja.jogjaprov.go.id/wp-content/uploads/2016/11/Grebeg-Maulud-1.jpg",
                article: `
    <div class="relative">
        <img src="https://helloindonesia.id/wp-content/uploads/2025/09/Sekaten-Yogyakarta-1536x838.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Royal Tradition</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Sekaten & Grebeg</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Tradisi Agung Keraton Yogyakarta</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Sejarah Sekaten</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Istilah Sekaten berasal dari kata 'Syahadatain' (dua kalimat syahadat). Tradisi ini bermula sebagai cara dakwah Sunan Kalijaga untuk menyebarkan agama Islam melalui musik Gamelan Kyai Guntur Madu dan Kyai Guntur Sari. Selama 7 hari, gamelan suci dimainkan nonstop di Masjid Gede Kauman, mengundang ribuan masyarakat untuk mendengarkan sambil menikmati sajian kuliner Nasi Gurih.
                
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Sekaten & Grebeg</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. MUSIK GAMELAN</h4>
                        <p class="text-sm text-gray-400">Gamelan Kyai Guntur Madu dan Kyai Guntur Sari dimainkan nonstop selama 7 hari sebagai sarana dakwah dan hiburan.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. GUNUNGAN</h4>
                        <p class="text-sm text-gray-400">Struktur raksasa berisi hasil bumi yang melambangkan kemakmuran dan sedekah Sultan kepada rakyatnya.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. GREBEG</h4>
                        <p class="text-sm text-gray-400">Prosesi pembagian gunungan kepada masyarakat sebagai simbol berkah dan kebersamaan.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Masjid Gede Kauman dan Alun-Alun Utara, Yogyakarta.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Biasanya bulan Muludan (Rabiulawal) dalam kalender Jawa.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Pencinta budaya Jawa, wisatawan yang ingin merasakan tradisi keraton.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Datanglah pagi hari untuk menikmati suasana gamelan dan hindari kerumunan saat grebeg untuk keselamatan."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
            {
                name: "Jogja Java Carnival",
                img: "https://static.republika.co.id/uploads/images/inpicture_slide/sejumlah-peserta-meramaikan-acara-jogja-java-carnival-di-sepanjang-_121004134541-475.jpg",
                article: `
    <div class="relative ">
        <img src="https://static.republika.co.id/uploads/images/inpicture_slide/sejumlah-peserta-meramaikan-acara-jogja-java-carnival-di-sepanjang-_121004134541-475.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Modern Heritage</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Jogja Java Carnival</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Puncak Perayaan HUT Kota Yogyakarta</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Karnaval Cahaya & Budaya</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Jogja Java Carnival (JJC) adalah event tahunan berskala internasional yang diselenggarakan untuk memperingati hari jadi Kota Yogyakarta. Berbeda dengan upacara adat tradisional, JJC hadir sebagai **Street Magician Carnival** yang menggabungkan unsur seni kontemporer, teknologi cahaya, dan akar budaya Jawa.
                </p>
                
                <h2 class="text-2xl font-bold text-white mb-6">Keunikan Festival</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. NIGHT CARNIVAL</h4>
                        <p class="text-sm text-gray-400">Dilakukan pada malam hari sepanjang jalan Malioboro, menonjolkan permainan lampu LED dan efek visual pada setiap kendaraan hias.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. MULTIKULTURALISME</h4>
                        <p class="text-sm text-gray-400">Menampilkan peserta tidak hanya dari Jawa, tapi juga mancanegara yang berkolaborasi dengan seniman lokal Jogja.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. THEME-BASED COSTUMES</h4>
                        <p class="text-sm text-gray-400">Setiap tahun memiliki tema berbeda, mulai dari filosofi air, api, hingga sejarah kejayaan kerajaan Nusantara.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Info Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Rute:</strong> Start dari Taman Parkir Abu Bakar Ali menuju Alun-Alun Utara.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-clock text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Biasanya dimulai pukul 19.00 WIB hingga tengah malam.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-ticket-alt text-red-600 mt-1"></i>
                            <span><strong>Tiket:</strong> Gratis untuk umum di sepanjang trotoar Malioboro.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Pastikan datang 3 jam lebih awal untuk mendapatkan posisi berdiri paling depan di pagar pembatas jalan."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
            {
                name: "Yogyakarta International Film Festival",
                img: "https://filmfreeway-production-storage-01-connector.filmfreeway.com/festivals/cover_photos/000/064/579/original/cover_photo.jpg?1677763111",
                article: `
    <div class="relative">
        <img src="https://filmfreeway-production-storage-01-connector.filmfreeway.com/festivals/cover_photos/000/064/579/original/cover_photo.jpg?1677763111" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Film Festival</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Yogyakarta International Film Festival</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Panggung Sinema Dunia di Yogyakarta</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Festival Film Terbesar di Indonesia</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Yogyakarta International Film Festival (YIFF) adalah ajang penghargaan film internasional yang diselenggarakan di Yogyakarta. Festival ini menampilkan film dari berbagai negara, kompetisi, workshop, dan networking bagi sineas dunia.
                
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik YIFF</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. KOMPETISI FILM</h4>
                        <p class="text-sm text-gray-400">Kategori film pendek, dokumenter, dan fiksi dari filmmaker muda dan profesional.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. WORKSHOP & MASTERCLASS</h4>
                        <p class="text-sm text-gray-400">Sesi pembelajaran dari sutradara ternama dan ahli perfilman internasional.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. NETWORKING</h4>
                        <p class="text-sm text-gray-400">Platform bagi sineas untuk bertemu produser, investor, dan kolaborator potensial.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Taman Budaya Yogyakarta dan venue lainnya di kota.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Biasanya diadakan setiap tahun pada bulan November.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Pecinta film, sineas, mahasiswa perfilman.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Beli tiket lebih awal karena kapasitas terbatas. Bawa kartu identitas untuk registrasi workshop."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
        ],
    }, 
    Jakarta: {
        bg: "https://travelinkmagz.com/wp-content/uploads/2020/04/JKT_Monas_1920x1080px_1.jpg",
        desc: "Kota metropolitan yang tidak pernah tidur, meleburkan tradisi Betawi dengan gaya hidup modern.",
        festivals: [
            {
                name: "Jakarta Fair (PRJ)",
                img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600",
                article: `
    <div class="relative">
        <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Mega Exhibition</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Jakarta Fair Kemayoran</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Pameran & Hiburan Terbesar di Asia Tenggara</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Sejarah & Tradisi Kota</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Jakarta Fair atau Pekan Raya Jakarta (PRJ) pertama kali digelar pada tahun 1968 di kawasan Monas. Kini, PRJ telah bertransformasi menjadi pameran multiproduk terbesar yang diselenggarakan selama 30-40 hari untuk merayakan hari ulang tahun kota Jakarta. Event ini adalah perpaduan antara pusat belanja, festival kuliner, dan panggung hiburan rakyat.
                </p>
                
                <h2 class="text-2xl font-bold text-white mb-6">Pilar Utama Jakarta Fair</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. KONSER MUSIK NON-STOP</h4>
                        <p class="text-sm text-gray-400">Menghadirkan musisi papan atas Indonesia setiap malamnya di panggung utama selama lebih dari satu bulan penuh.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. SURGA KULINER BETAWI</h4>
                        <p class="text-sm text-gray-400">Tempat terbaik untuk menemukan kuliner otentik seperti Kerak Telor, Dodol Betawi, dan Bir Pletok di area Kampung Betawi.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. PASAR MALAM MODERN</h4>
                        <p class="text-sm text-gray-400">Dari wahana permainan kora-kora hingga diskon besar-besaran produk elektronik, otomotif, dan fashion terbaru.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Arena JIExpo Kemayoran, Jakarta Pusat.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-clock text-red-600 mt-1"></i>
                            <span><strong>Jadwal:</strong> Biasanya bulan Juni hingga Juli (HUT Jakarta).</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-bus text-red-600 mt-1"></i>
                            <span><strong>Akses:</strong> Gunakan TransJakarta rute khusus PRJ untuk menghindari macet.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Beli tiket secara online jauh-jauh hari untuk menghindari antrean panjang di loket fisik yang bisa memakan waktu berjam-jam."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
            {
                name: "Jakarta Fashion Week",
                img: "https://jakartafashionweek.b-cdn.net/web/img/images/37%282%29.jpg",
                article: `
    <div class="relative  ">
        <img src="https://jakartafashionweek.b-cdn.net/web/img/images/37%282%29.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Global Fashion Hub</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Jakarta Fashion Week</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Barometer Mode Terbesar di Asia Tenggara</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Eksplorasi Kreativitas Tanpa Batas</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Jakarta Fashion Week (JFW) bukan sekadar peragaan busana; ini adalah platform penggerak industri kreatif Indonesia menuju panggung dunia. Sejak pertama kali digelar, JFW telah menjadi rumah bagi ratusan desainer lokal dan internasional untuk memamerkan tren terbaru, mulai dari busana siap pakai (ready-to-wear) hingga mahakarya adibusana (haute couture) yang memadukan kain tradisional dengan potongan modern.
                </p>
                
                <h2 class="text-2xl font-bold text-white mb-6">Pilar Utama JFW</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-600 font-black mb-1 italic">1. THE RUNWAY SHOWS</h4>
                        <p class="text-sm text-gray-400">Panggung prestisius di mana desainer ternama hingga talenta muda berbakat meluncurkan koleksi musim depan di hadapan media dan pembeli global.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-600 font-black mb-1 italic">2. FASHION FORWARD</h4>
                        <p class="text-sm text-gray-400">Program inkubasi desainer yang berkolaborasi dengan sekolah mode internasional untuk memastikan standar kualitas dunia pada karya anak bangsa.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-600 font-black mb-1 italic">3. SUSTAINABLE FASHION</h4>
                        <p class="text-sm text-gray-400">Komitmen kuat dalam mempromosikan mode berkelanjutan yang ramah lingkungan dan mendukung pemberdayaan pengrajin kain tradisional.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Biasanya diadakan setiap bulan Oktober setiap tahunnya.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-pin text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Berpindah lokasi antar mal premium Jakarta (seperti City Hall Pondok Indah Mall 3).</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-camera text-red-600 mt-1"></i>
                            <span><strong>Dress Code:</strong> "Street Style" atau "Smart Casual" sangat disarankan jika ingin masuk ke area festival.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Meskipun beberapa show bersifat eksklusif (undangan), area festival biasanya terbuka untuk umum dengan registrasi online terlebih dahulu."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
            {
                name: "Jakarta Biennale",
                img: "https://whiteboardjournal.com/wp-content/uploads/2024/11/IMG20241002151811.jpg",
                article: `
    <div class="relative">
        <img src="https://whiteboardjournal.com/wp-content/uploads/2024/11/IMG20241002151811.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Art Biennale</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Jakarta Biennale</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Festival Seni Rupa Internasional</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Pameran Seni Kontemporer</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Jakarta Biennale adalah festival seni rupa internasional yang diselenggarakan setiap dua tahun sekali. Menampilkan karya seniman dari berbagai negara dengan tema yang relevan dengan isu sosial dan budaya.

                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Jakarta Biennale</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. INSTALASI SENI</h4>
                        <p class="text-sm text-gray-400">Karya instalasi interaktif yang melibatkan pengunjung dalam pengalaman seni.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. KOLABORASI SENIMAN</h4>
                        <p class="text-sm text-gray-400">Kolaborasi antara seniman lokal dan internasional untuk karya bersama.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. DISKUSI & WORKSHOP</h4>
                        <p class="text-sm text-gray-400">Sesi diskusi tentang seni kontemporer dan workshop kreatif.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Galeri Nasional Indonesia dan venue seni lainnya di Jakarta.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Diadakan setiap dua tahun sekali, biasanya bulan November.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Pecinta seni, seniman, mahasiswa seni rupa.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Kunjungi galeri utama untuk pameran utama. Ikuti tur guided untuk pemahaman lebih dalam."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
            {
                name: "Jakarta International Java Jazz Festival",
                img: "https://www.mldspot.com/storage/generated/June2021/Konsistensi-Jakarta-International-Java-Jazz-Festival-Di-Tahun-Ke-15.jpg",
                article: `
    <div class="relative">
        <img src="https://www.mldspot.com/storage/generated/June2021/Konsistensi-Jakarta-International-Java-Jazz-Festival-Di-Tahun-Ke-15.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Jazz Music Festival</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Jakarta International Java Jazz Festival</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Festival Jazz Terbesar di Asia</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Harmoni Jazz di Jakarta</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Jakarta International Java Jazz Festival adalah festival musik jazz terbesar di Asia yang menampilkan musisi jazz dunia. Diadakan di JIExpo Kemayoran dengan panggung outdoor dan indoor.
                
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Java Jazz</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. MUSISI INTERNASIONAL</h4>
                        <p class="text-sm text-gray-400">Penampilan musisi jazz ternama dari berbagai negara.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. WORKSHOP JAZZ</h4>
                        <p class="text-sm text-gray-400">Sesi workshop untuk belajar jazz dari ahli.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. JAM SESSION</h4>
                        <p class="text-sm text-gray-400">Sesi improvisasi musik jazz bersama.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> JIExpo Kemayoran, Jakarta.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Biasanya bulan Maret setiap tahun.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Pecinta musik jazz, musisi, keluarga.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Beli tiket online untuk menghindari antrean. Bawa jaket karena acara malam hari."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
            {
                name: "Jakarta Marathon",
                img: "https://img.antarafoto.com/cache/1200x798/2024/06/23/btn-jakarta-international-marathon-2024-1c1mf-dom.jpg",
                article: `
    <div class="relative">
        <img src="https://img.antarafoto.com/cache/1200x798/2024/06/23/btn-jakarta-international-marathon-2024-1c1mf-dom.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Marathon Event</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Jakarta Marathon</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Lari untuk Kesehatan dan Solidaritas</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Marathon Terbesar di Indonesia</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Jakarta Marathon adalah event lari maraton internasional yang menarik ribuan peserta dari dalam dan luar negeri. Rute melewati landmark Jakarta dengan kategori jarak 5K, 10K, 21K, dan 42K.
                
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Jakarta Marathon</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. RUTE IKONIK</h4>
                        <p class="text-sm text-gray-400">Melintasi Monas, Istiqlal, dan Bundaran HI.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. KATEGORI BERBAGAI</h4>
                        <p class="text-sm text-gray-400">Dari fun run hingga full marathon.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. CHARITY RUN</h4>
                        <p class="text-sm text-gray-400">Bagian dari donasi untuk amal.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Start dari Monas, Jakarta Pusat.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Biasanya bulan Oktober.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Pelari, atlet, keluarga.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Latihan terlebih dahulu dan ikuti aturan kesehatan. Cuaca pagi bisa panas."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
        ],
    }, 
    Bandung: {
        bg: "https://idetrips.com/wp-content/uploads/2020/07/kawah-ratu-tangkuban-parahu.jpg",
        desc: "Kota kreatif di dataran tinggi yang merayakan sejarah dengan gaya artistik.",
        festivals: [
            {
                name: "Asia Africa Festival",
                img: "https://i.ytimg.com/vi/jHFqvGg3qao/maxresdefault.jpg",
                article: `
            <div class="relative ">
                <img src="https://i.ytimg.com/vi/jHFqvGg3qao/maxresdefault.jpg" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
                    <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Historical World Event</span>
                    <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Asia Africa Festival</h1>
                    <p class="text-red-500 font-bold tracking-widest uppercase">Merayakan Semangat Solidaritas Bangsa-Bangsa</p>
                </div>
            </div>

            <div class="p-12">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div class="lg:col-span-2">
                        <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Sejarah & Semangat Dasasila Bandung</h2>
                        <p class="text-lg text-gray-400 leading-relaxed mb-8">
                            Asia Africa Festival (AAF) adalah peringatan tahunan atas peristiwa bersejarah Konferensi Tingkat Tinggi Asia-Afrika tahun 1955. Festival ini mengubah Jalan Asia Afrika di Bandung menjadi panggung budaya kolosal yang menyatukan delegasi dari berbagai negara. Lebih dari sekadar parade, acara ini adalah pengingat akan "Spirit of Bandung" yang menyuarakan perdamaian dunia dan kemerdekaan bangsa-bangsa.
                        </p>
                        
                        <h2 class="text-2xl font-bold text-white mb-6">Atraksi Utama Festival</h2>
                        <div class="space-y-4 mb-10">
                            <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h4 class="text-red-500 font-black mb-1 italic">1. HISTORICAL WALK</h4>
                                <p class="text-sm text-gray-400">Prosesi jalan kaki para delegasi negara sahabat dari Hotel Homann menuju Gedung Merdeka, merekonstruksi langkah para pemimpin besar dunia di tahun 1955.</p>
                            </div>
                            <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h4 class="text-red-500 font-black mb-1 italic">2. CULTURAL PARADE</h4>
                                <p class="text-sm text-gray-400">Pertunjukan kostum tradisional, musik, dan tarian dari berbagai negara di Asia dan Afrika yang berparade di sepanjang jalanan kota Bandung.</p>
                            </div>
                            <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h4 class="text-red-500 font-black mb-1 italic">3. ANKLUNG MASSAL</h4>
                                <p class="text-sm text-gray-400">Ribuan partisipan memainkan angklung secara bersamaan, menciptakan harmoni suara yang memecahkan rekor sebagai simbol kebersamaan.</p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                            <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                            <ul class="space-y-4 text-sm text-gray-400">
                                <li class="flex items-start gap-3">
                                    <i class="fas fa-landmark text-red-600 mt-1"></i>
                                    <span><strong>Lokasi:</strong> Sepanjang Jalan Asia Afrika dan Jalan Braga, Kota Bandung.</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <i class="fas fa-calendar-check text-red-600 mt-1"></i>
                                    <span><strong>Waktu:</strong> Biasanya diadakan sekitar bulan April hingga Mei (berdekatan dengan tanggal KAA).</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <i class="fas fa-walking text-red-600 mt-1"></i>
                                    <span><strong>Akses:</strong> Kawasan akan menjadi area bebas kendaraan (Car Free Day), disarankan jalan kaki.</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                            <p class="text-xs italic text-gray-400">"Pastikan mengunjungi Museum Konferensi Asia Afrika di sela-sela festival untuk memahami konteks sejarah yang lebih mendalam."</p>
                        </div>
                    </div>
                </div>
            </div>
          `,
            },
            {
                name: "Pasar Seni ITB",
                img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200",
                article: `
    <div class="relative">
        <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Contemporary Art Festival</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Pasar Seni ITB</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Laboratorium Kreativitas Terbesar di Indonesia</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Dekat dengan Seni, Jauh dari Sekadar Pasar</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Pasar Seni ITB adalah ajang seni rupa satu hari paling prestisius di Indonesia yang diadakan oleh mahasiswa Fakultas Seni Rupa dan Desain (FSRD) ITB. Sejak pertama kali digagas pada tahun 1972 oleh seniman legendaris A.D. Pirous, event ini bertujuan untuk mendekatkan karya seni kepada masyarakat luas. Bukan sekadar tempat jual beli, Pasar Seni adalah sebuah instalasi raksasa yang mengubah seluruh kampus ITB menjadi galeri terbuka penuh eksperimen visual yang berani.
                </p>
                
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Pasar Seni</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. EXPERIMENTAL INSTALLATION</h4>
                        <p class="text-sm text-gray-400">Instalasi seni interaktif yang tersebar di sepanjang kampus, menantang persepsi pengunjung melalui perpaduan teknologi, material unik, dan kritik sosial.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. ART MARKET & CRAFT</h4>
                        <p class="text-sm text-gray-400">Ratusan stan yang menjual karya seni orisinal, mulai dari lukisan, patung, hingga produk desain kriya buatan mahasiswa dan seniman profesional.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. PERFORMANCE ART</h4>
                        <p class="text-sm text-gray-400">Aksi teatrikal dan seni pertunjukan yang tidak terduga, seringkali melibatkan interaksi langsung dengan pengunjung di area publik.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-university text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Kampus Ganesha ITB, Jl. Ganesha No. 10, Bandung.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-hourglass-half text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Event ini langka, biasanya diadakan setiap 4 atau 5 tahun sekali (selebrasi lustrum).</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-palette text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Pecinta seni, kolektor, mahasiswa, hingga keluarga yang ingin berwisata edukasi.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Karena keramaian yang luar biasa, disarankan menggunakan pakaian santai namun tetap bergaya (art-sy) dan siap-siap berjalan kaki mengeksplorasi seluruh sudut kampus."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
            {
                name: "Bandung International Biennale",
                img: "https://sarasvati.co.id/wp-content/uploads/2017/11/biennale-bandung-1-324x160.jpg",
                article: `
    <div class="relative">
        <img src="https://sarasvati.co.id/wp-content/uploads/2017/11/biennale-bandung-1-324x160.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Art Biennale</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Bandung International Biennale</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Festival Seni Kontemporer Bandung</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Eksplorasi Seni Modern</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Bandung International Biennale adalah ajang seni kontemporer yang menampilkan karya seniman lokal dan internasional. Diadakan di galeri dan ruang publik Bandung.

                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Bandung Biennale</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. INSTALASI PUBLIK</h4>
                        <p class="text-sm text-gray-400">Karya seni di ruang publik yang dapat dinikmati masyarakat.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. KOLABORASI</h4>
                        <p class="text-sm text-gray-400">Kolaborasi antara seniman dan komunitas lokal.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. DISKUSI SENI</h4>
                        <p class="text-sm text-gray-400">Forum diskusi tentang tren seni kontemporer.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Galeri seni dan ruang publik di Bandung.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Diadakan setiap dua tahun sekali.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Pecinta seni, seniman, mahasiswa.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Kunjungi galeri utama dan jelajahi instalasi publik. Ikuti tur untuk wawasan lebih."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
            {
                name: "Bandung Jazz Festival",
                img: "https://www.majalahglobalreview.com/wp-content/uploads/2025/06/IMG_20250609_082909.jpg",
                article: `
    <div class="relative">
        <img src="https://www.majalahglobalreview.com/wp-content/uploads/2025/06/IMG_20250609_082909.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Jazz Festival</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Bandung Jazz Festival</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Festival Musik Jazz di Bandung</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Harmoni Jazz di Kota Kembang</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Bandung Jazz Festival adalah festival musik jazz yang menampilkan musisi jazz dari Indonesia dan internasional. Diadakan di venue outdoor dengan suasana malam yang romantis.

                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Bandung Jazz</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. MUSISI LOKAL & INTERNASIONAL</h4>
                        <p class="text-sm text-gray-400">Penampilan musisi jazz ternama dari dalam dan luar negeri.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. SUASANA MALAM</h4>
                        <p class="text-sm text-gray-400">Acara malam hari dengan pencahayaan yang indah.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. JAM SESSION</h4>
                        <p class="text-sm text-gray-400">Sesi improvisasi musik jazz bersama.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Venue outdoor di Bandung, seperti Lapangan Gasibu.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Biasanya bulan Maret atau April.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Pecinta musik jazz, pasangan, keluarga.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Bawa jaket karena acara malam hari. Beli tiket online untuk kemudahan."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
            {
                name: "Bandung Marathon",
                img: "https://public.urbanasia.com/images/post/2022/07/24/1658626845-pocari.jpg",
                article: `
    <div class="relative">
        <img src="https://public.urbanasia.com/images/post/2022/07/24/1658626845-pocari.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Marathon Event</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Bandung Marathon</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Lari di Kota Kembang</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Marathon dengan Pemandangan Indah</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Bandung Marathon adalah event lari yang menarik peserta dari berbagai daerah. Rute melewati jalan-jalan Bandung dengan pemandangan pegunungan.

                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Bandung Marathon</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. RUTE PEGUNUNGAN</h4>
                        <p class="text-sm text-gray-400">Melintasi daerah pegunungan dengan pemandangan indah.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. KATEGORI BERBAGAI</h4>
                        <p class="text-sm text-gray-400">Dari 5K hingga full marathon.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. CHARITY ELEMENT</h4>
                        <p class="text-sm text-gray-400">Bagian dari kegiatan amal.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Start dari Gasibu, Bandung.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Biasanya bulan September.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Pelari, atlet, wisatawan.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Persiapkan fisik dengan baik. Cuaca pagi bisa sejuk."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
        ],
    }, 
    Malang: {
        bg: "https://www.bugbog.com/wp-content/uploads/2022/05/dc76a908affc27f2/mount-bromo.jpeg",
        desc: "Kota apel dengan sejuta karnaval warisan leluhur dan kreativitas anak muda.",
        festivals: [
            {
                name: "JAZZ GUNUNG BROMO",
                img: "https://bromomalangtour.com/wp-content/uploads/2016/04/Jazz-Gunung.jpg",
                article: `
    <div class="relative">
        <img src="https://bromomalangtour.com/wp-content/uploads/2016/04/Jazz-Gunung.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Music Festival</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">JAZZ GUNUNG BROMO</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Salah satu festival Musik yang ada di Jawa Timur</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Dekat dengan Seni, Jauh dari Sekadar Pasar</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Merasakan dentuman musik jazz dalam dekapan suhu 10 derajat Celcius. Inilah pengalaman musik paling unik di Indonesia. Jazz Gunung menawarkan panggung amfiteater terbuka dengan latar pegunungan Tengger yang mistis.
                
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Jazz Gunung Bromo</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. JAZZ FUSION & ETNIK JAZZ</h4>
                        <p class="text-sm text-gray-400">Mengawinkan harmoni jazz dengan genre lain seperti rock dan musik tradisional, dengan penekanan pada improvisasi khas jazz.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. IMPROVISASI</h4>
                        <p class="text-sm text-gray-400">Ciri khas jazz yang memungkinkan musisi berinteraksi secara spontan dan eksploratif dengan penonton dan alam.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. HARMONI DENGAN ALAM</h4>
                        <p class="text-sm text-gray-400">Memadukan antara musik dan alam untuk menciptakan pengalaman yang menyatu dan multisensorial</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-university text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong>Amfiteater Jiwa Jawa Resort Bromo</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-hourglass-half text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Event diadakan pada tanggal 24 & 25 Juli 2026, dengan acara dimulai sekitar pukul 15:00 WIB.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-palette text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Pencinta musik jazz etnik, wisatawan dan pegiat seni fotografi.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  `,
            },
        ],
    }, 
    Medan: {
        bg: "https://s.yimg.com/zb/imgv1/f1625bb1-51f6-3e0d-a250-af71bb4a11cb/t_500x300",
        desc: "Kota terbesar di Sumatera dengan festival budaya yang kaya dan beragam.",
        festivals: [
            {
                name: "Masjid Raya Al-Mashun",
                img: "https://s.yimg.com/zb/imgv1/f1625bb1-51f6-3e0d-a250-af71bb4a11cb/t_500x300",
                article: `
    <div class="relative">
        <img src="https://s.yimg.com/zb/imgv1/f1625bb1-51f6-3e0d-a250-af71bb4a11cb/t_500x300" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Tempat Ibadah</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Masjid Raya Al-Mashun</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Ikon Arsitektur dan Budaya Medan</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Sejarah & Keindahan Arsitektur</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Masjid Raya Al-Mashun, juga dikenal sebagai Masjid Raya Medan, adalah salah satu ikon arsitektur dan budaya di Medan. Dibangun pada tahun 1906 oleh Sultan Ma'mun Al Rashid Perkasa Alam, masjid ini memadukan gaya arsitektur Timur Tengah, India, dan Eropa. Dengan kubah emas yang megah dan interior yang indah, masjid ini tidak hanya berfungsi sebagai tempat ibadah tetapi juga sebagai simbol toleransi dan keragaman budaya di Medan
                </p>
                
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Masjid Raya Al-Mashun</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. ARSITEKTUR EKLEKTIK</h4>
                        <p class="text-sm text-gray-400">Perpaduan gaya arsitektur Timur Tengah, India, dan Eropa yang menciptakan desain yang unik dan menarik.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. KUBAH EMAS</h4>
                        <p class="text
-sm text-gray-400">Kubah utama masjid yang berwarna emas mencolok, menjadi simbol kemegahan dan keindahan.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. INTERIOR YANG INDAH</h4>
                        <p class="text-sm text-gray-400">Detail interior yang kaya dengan ornamen dan kaligrafi Islam yang menambah keindahan masjid.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Jl. Sisingamangaraja No. 14, Medan.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Masjid ini buka untuk pengunjung setiap hari, dengan waktu terbaik untuk berkunjung adalah pada pagi hari atau sore hari.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Wisatawan, pecinta arsitektur, dan mereka yang tertarik dengan budaya Islam.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Pastikan untuk berpakaian sopan dan menghormati aturan masjid saat berkunjung."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
        ],
    }, 
    Padang: {
        bg: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/home/destinations/sumatera/padang/padang-hero.jpg",
        desc: "Kota di tepi pantai dengan festival kuliner dan budaya Minangkabau yang kaya.",
        festivals: [
            {
                name: "Festival Tabuik",
                img: "https://asset.kompas.com/crops/8JOk2ms5pMQcZ97koX3tvLgKCT8=/0x8:940x634/1200x800/data/photo/2019/09/23/5d884bba459f3.jpg",
                article: `
    <div class="relative">
        <img src="https://asset.kompas.com/crops/8JOk2ms5pMQcZ97koX3tvLgKCT8=/0x8:940x634/1200x800/data/photo/2019/09/23/5d884bba459f3.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Festival Budaya</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Festival Tabuik</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Perayaan Budaya Unik di Padang</p>
        </div>
    </div>
    
    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Warisan Budaya yang Hidup</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Festival Tabuik adalah perayaan budaya yang diadakan setiap tahun di Padang untuk memperingati hari Asyura, gugurnya imam husein, cucu Nabi Muhammad SAW . Festival ini menampilkan prosesi besar dengan replika Tabuik, yaitu struktur tinggi yang dihias indah, yang dibawa ke pantai dan kemudian dilemparkan ke laut sebagai simbol pengorbanan dan penebusan dosa.
                </p>
                
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Festival Tabuik</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white
/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. TABUIK</h4>
                        <p class="text-sm text-gray-400">Replika Tabuik yang dihias dengan warna-warni cerah dan simbol-simbol keagamaan.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. PROSESI BESAR</h4>
                        <p class="text-sm text-gray-400">Prosesi yang melibatkan ribuan peserta yang mengenakan pakaian tradisional dan membawa Tabuik ke pantai.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">
                            3. LEMPAR TABUIK
                        </h4>
                        <p class="text-sm text-gray-400">Tradisi melempar Tabuik ke laut sebagai simbol penebusan dosa dan pengorbanan.</p>
                    </div>
                </div>
            </div>
            
            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items
-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Pantai Padang, Sumatera Barat.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Diadakan setiap tahun pada bulan Muharram (sekitar September atau Oktober).</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Wisatawan, pecinta budaya, dan mereka yang tertarik dengan tradisi unik.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Hormati tradisi lokal dan nikmati keindahan budaya Minangkabau selama festival berlangsung."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
        ],
    }, 
    Palembang: {
        bg: "https://parksidehotels.co.id/kota-tua-jembatan-ampera-dan-dinamika/",
        desc: "Kota di tepi Sungai Musi dengan festival budaya dan kuliner yang kaya.", 
        festivals: [
            {
                name: "Festival Sriwijaya",
                img: "https://sumateraekspres.bacakoran.co/upload/9ad92cdadc31dfb8ffbb1cf56fc6cc12.jpg",
                article: `
    <div class="relative">
        <img src="https://sumateraekspres.bacakoran.co/upload/9ad92cdadc31dfb8ffbb1cf56fc6cc12.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest>Festival Budaya</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Festival Sriwijaya</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Merayakan Warisan Kerajaan Sriwijaya</p>
        </div>
    </div>

    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Warisan Budaya Kerajaan Sriwijaya</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Festival Sriwijaya adalah perayaan budaya yang diadakan setiap tahun di Palembang untuk mengenang kejayaan Kerajaan Sriwijaya. Festival ini menampilkan berbagai acara seperti parade budaya, pertunjukan seni tradisional, dan pameran sejarah yang menggambarkan kehidupan di masa kejayaan kerajaan maritim ini.
                </p>
                
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Festival Sriwijaya</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. PARADE BUDAYA</h4>
                        <p class="text-sm text-gray-400">Parade yang menampilkan kostum tradisional dan tarian dari berbagai daerah di Sumatera Selatan.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. PERTUNJUKAN SENI TRADISIONAL</h4>
                        <p class="text-sm text-gray-400">Pertunjukan musik dan tari tradisional yang menggambarkan budaya Sriwijaya.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white
/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. PAMERAN SEJARAH</h4>
                        <p class="text-sm text-gray-400">Pameran yang menampilkan artefak dan informasi sejarah tentang Kerajaan Sriwijaya.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Palembang, Sumatera Selatan.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Diadakan setiap tahun pada bulan Agustus.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Wisatawan, pecinta budaya, dan mereka yang tertarik dengan sejarah maritim.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Jelajahi warisan budaya Sriwijaya dan nikmati keindahan seni tradisional Palembang selama festival berlangsung."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
        ],
    }, 
  Pontianak: {
        bg: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/home/destinations/kalimantan/pontianak/pontianak-hero.jpg",
        desc: "Kota di garis khatulistiwa dengan festival budaya Dayak yang kaya.",
        festivals: [
            {
                name: "Festival Naik Dango",
                img: "https://pspbsi.unikama.ac.id/wp-content/uploads/sites/41/2024/11/Naik-Dango-4.jpg",
                article: `
    <div class="relative">
        <img src="https://pspbsi.unikama.ac.id/wp-content/uploads/sites/41/2024/11/Naik-Dango-4.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Festival Budaya</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Festival Naik Dango</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Merayakan Budaya Dayak di Pontianak</p>
        </div>
    </div>
    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Warisan Budaya Dayak di Pontianak</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                   Naik Dango adalah upacara adat tahunan suku Dayak Kanayatn di Kalimantan Barat sebagai wujud syukur atas hasil panen padi yang melimpah. Festival ini menampilkan berbagai acara budaya seperti tarian tradisional, musik, dan ritual adat yang memperkuat ikatan komunitas Dayak serta melestarikan warisan budaya mereka.
                </p>

                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Festival
    Naik Dango</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. KEBERSAMAAN & WARISAN</h4>
                        <p class="text-sm text-gray-400">Festival ini memperkuat ikatan komunitas Dayak dan melestarikan warisan budaya mereka.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. UNGKAPAN RASA SYUKUR</h4>
                        <p class="text-sm text-gray-400">Sebagai wujud syukur atas hasil panen padi yang melimpah.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. RITUAL INTI NYANGAHATN</h4>
                        <p class="text-sm text-gray-400">Pertunjukan musik dan tari tradisional Tionghoa yang memukau.</p>
                    </div>
                </div>
            </div>
            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Pontianak, Kalimantan Barat.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Diadakan setiap tahun pada bulan Agustus.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Wisatawan, pecinta budaya, dan mereka yang tertarik dengan tradisi Dayak.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Rasakan kehangatan budaya Dayak dan nikmati keindahan seni tradisional Pontianak selama festival berlangsung."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
        ],
    },
  Banjarmasin: {
        bg: "https://infopublik.id/assets/upload/headline//WhatsApp_Image_2022-07-26_at_14_06_24(1).jpeg",
        desc: "Kota di tepi sungai dengan festival budaya Banjar yang kaya.",
        festivals: [
            {
                name: "Festival Budaya Banjar",
                img: "https://infopublik.id/assets/upload/headline//WhatsApp_Image_2022-07-26_at_14_06_24(1).jpeg",
                article: `
    <div class="relative">
        <img src="https://infopublik.id/assets/upload/headline//WhatsApp_Image_2022-07-26_at_14_06_24(1).jpeg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Festival Budaya</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Festival Budaya Banjar</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Merayakan Warisan Budaya Banjar</p>
        </div>
    </div>
    
    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Warisan Budaya Banjar</h2>    
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Festival Budaya Banjar adalah perayaan budaya yang diadakan setiap tahun di Banjarmasin untuk mengenang dan merayakan warisan budaya Banjar. Festival ini menampilkan berbagai acara seperti pertunjukan seni tradisional, pameran kerajinan tangan, dan kuliner khas Banjar yang menggambarkan kekayaan budaya daerah ini.
                </p>
                
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Festival Budaya Banjar</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. PERTUNJUKAN SENI TRADISIONAL</h4>
                        <p class="text-sm text-gray-400">Pertunjukan musik dan tari tradisional Banjar yang memukau.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. PAMERAN KERAJINAN TANGAN</h4>
                        <p class="text-sm text-gray-400">Pameran yang menampilkan kerajinan tangan khas Banjar seperti tenun dan ukiran kayu.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. KULINER KHAS BANJAR</h4>
                        <p class="text-sm text-gray-400">Berbagai hidangan khas Banjar yang menggugah selera, seperti soto banjar dan ketupat kandangan.</p>
                    </div>
                </div>
            </div>
            
            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Banjarmasin, Kalimantan Selatan.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Diadakan setiap tahun pada bulan Juli.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Wisatawan, pecinta budaya, dan mereka yang tertarik dengan tradisi Banjar.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Jelajahi warisan budaya Banjar dan nikmati keindahan seni tradisional Banjarmasin selama festival berlangsung."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
        ],
    },
    Manado: {
        bg: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/home/destinations/sulawesi/manado/manado-hero.jpg",
        desc: "Kota di Sulawesi Utara dengan festival budaya Minahasa yang kaya.",
        festivals: [
            {
                name: "Festival Bunaken",
                img: "https://cdn.antaranews.com/cache/1200x800/2022/11/02/bunaken3.jpg",
                article: `
    <div class="relative">
        <img src="https://cdn.antaranews.com/cache/1200x800/2022/11/02/bunaken3.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Festival Budaya</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Festival Bunaken</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Merayakan Keindahan Laut Bunaken</p>
        </div>
    </div>
    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Keindahan Laut Bunaken</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Festival Bunaken adalah perayaan budaya yang diadakan setiap tahun di Manado untuk merayakan keindahan laut Bunaken. Festival ini menampilkan berbagai acara seperti lomba menyelam, pameran seni bawah laut, dan pertunjukan budaya yang menggambarkan kekayaan alam dan budaya Sulawesi Utara.
                </p>
                
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Festival Bunaken</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. LOMBA MENYELAM</h4>
                        <p class="text-sm text-gray-400">Lomba menyelam yang menantang peserta untuk menjelajahi keindahan bawah laut Bunaken.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. PAMERAN SENI BAWAH LAUT</h4>
                        <p class="text-sm text-gray-400">Pameran yang menampilkan karya seni yang terinspirasi oleh keindahan laut Bunaken.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. PERTUNJUKAN BUDAYA</h4>
                        <p class="text-sm text-gray-400">Pertunjukan musik dan tari tradisional Minahasa yang memukau.</p>
                    </div>
                </div>
            </div>
            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Manado, Sulawesi Utara.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Diadakan setiap tahun pada bulan Mei.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Wisatawan, pecinta alam, dan mereka yang tertarik dengan keindahan laut.</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Jelajahi keindahan laut Bunaken dan nikmati keindahan seni bawah laut Manado selama festival berlangsung."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
        ],
    },
    Makassar: {
        bg: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/home/destinations/sulawesi/makassar/makassar-hero.jpg",
        desc: "Kota di Sulawesi Selatan dengan festival budaya Bugis yang kaya.",
        festivals: [
            {
                name: "Festival Paotere",
                img: "https://cdn.sindomakassar.com/makassar/photo/2025/09/26/1/653/semarak-maulid-pesisir-2025-di-paotere--yhp.jpg",
                article: `
    <div class="relative">
        <img src="https://cdn.sindomakassar.com/makassar/photo/2025/09/26/1/653/semarak-maulid-pesisir-2025-di-paotere--yhp.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Festival Budaya</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Festival Paotere</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Merayakan Warisan Bahari Bugis</p>
        </div>
    </div>
    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Warisan Bahari Bugis</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Festival Paotere adalah perayaan budaya yang diadakan setiap tahun di Makassar untuk mengenang dan merayakan warisan bahari Bugis. Festival ini menampilkan berbagai acara seperti parade kapal tradisional, pertunjukan seni laut, dan pameran budaya yang menggambarkan kekayaan budaya Bugis di Sulawesi Selatan.
                </p>

                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Festival Paotere</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. PARADE KAPAL TRADISIONAL</h4>
                        <p class="text-sm text-gray-400">Parade kapal tradisional Bugis yang dihias indah di sepanjang pantai Makassar.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. PERTUNJUKAN SENI LAUT</h4>
                        <p class="text-sm text-gray-400">Pertunjukan seni yang menggambarkan kehidupan laut dan budaya bahari Bugis.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. PAMERAN BUDAYA</h4>
                        <p class="text-sm text-gray-400">Pameran yang menampilkan artefak dan informasi tentang budaya Bugis.</p>
                    </div>
                </div>
            </div>
            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Makassar, Sulawesi Selatan.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Diadakan setiap tahun pada bulan September.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Wisatawan, pecinta budaya, dan mereka yang tertarik dengan tradisi bahari.</span>
                        </li>
                    </ul>
                </div>

                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Jelajahi warisan bahari Bugis dan nikmati keindahan budaya Makassar selama festival berlangsung."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
        ],
    },
    Jayapura: {
        bg: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=2000",
        desc: "Ibu kota Papua dengan kekayaan budaya dan alam yang luar biasa.",
        festivals: [
            {
                name: "Festival Danau Sentani",
                img: "https://www.pesonaindo.com/wp-content/uploads/2016/04/Paket-Wisata-Festival-Danau-Sentani-Papua-Pesona-Indonesia-fototrip-2.jpg",
                article: `
    <div class="relative">
        <img src="https://www.pesonaindo.com/wp-content/uploads/2016/04/Paket-Wisata-Festival-Danau-Sentani-Papua-Pesona-Indonesia-fototrip-2.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Festival Budaya</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Festival Budaya Papua</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Merayakan Kekayaan Budaya Papua</p>
        </div>
    </div>
    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Warisan Budaya Papua</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Festival Danau Sentani adalah perayaan budaya yang diadakan setiap tahun di Jayapura untuk mengenang dan merayakan warisan budaya Papua. Festival ini menampilkan berbagai acara seperti pertunjukan seni tradisional, pameran kerajinan tangan, dan kuliner khas Papua yang menggambarkan kekayaan budaya daerah ini.
                </p>
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Festival</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. TARIAN ADAT DIATAS PERAHU</h4>
                        <p class="text-sm text-gray-400">Tarian tradisional Papua yang ditampilkan di atas perahu di Danau Sentani, seperti tarian perang khas Papua.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. MUSIK TRADISIONAL</h4>
                        <p class="text-sm text-gray-400">Musik dan lagu daerah Papua yang khas.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. KULINER KHAS PAPUA</h4>
                        <p class="text-sm text-gray-400">Berbagai hidangan khas Papua yang menggugah selera, seperti papeda dan ikan bakar.</p>
                    </div>
                </div>
            </div>
            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Jayapura, Papua.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Diadakan setiap tahun.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Wisatawan, pecinta budaya.</span>
                        </li>
                    </ul>
                </div>
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Jelajahi kekayaan budaya Papua dan nikmati keindahan seni tradisional selama festival berlangsung."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
        ],
    },
    'Raja_Ampat': {
        bg: "../image/newgunea.jpg",
        desc: "Kepulauan di Papua Barat dengan festival budaya maritim yang kaya.",
        festivals: [
            {
                name: "Kepulauan Raja Ampat",
                img: "https://i.cdn.newsbytesapp.com/ind/images/17122591726031633.jpg",
                article: `
    <div class="relative">
        <img src="https://i.cdn.newsbytesapp.com/ind/images/17122591726031633.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Festival Pariwisata Bahari </span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Kepulauan Raja Ampat</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Merayakan Kekayaan Budaya Maritim</p>
        </div>
    </div>
    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Warisan Budaya Maritim</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Kepulauan Raja Ampat adalah destinasi wisata yang terkenal dengan keindahan alam bawah lautnya. Festival budaya maritim di Raja Ampat menampilkan kekayaan budaya, seni, dan tradisi masyarakat pesisir. Acara ini meliputi pertunjukan seni laut, pameran kerajinan tangan, dan kegiatan budaya yang mencerminkan kehidupan masyarakat maritim di Raja Ampat.
                </p>
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Festival</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. PERTUNJUKAN SENI LAUT</h4>
                        <p class="text-sm text-gray-400">Pertunjukan seni yang menggambarkan kehidupan laut dan budaya maritim.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. KERAJINAN TANGAN</h4>
                        <p class="text-sm text-gray-400">Pameran kerajinan tangan khas masyarakat pesisir Raja Ampat.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. KEGIATAN BUDAYA</h4>
                        <p class="text-sm text-gray-400">Kegiatan budaya yang melibatkan masyarakat lokal dan wisatawan.</p>
                    </div>
                </div>
            </div>
            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Kepulauan Raja Ampat, Papua Barat.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Diadakan setiap tahun.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Wisatawan, pecinta budaya, dan pecinta alam.</span>
                        </li>
                    </ul>
                </div>
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Jelajahi kekayaan budaya maritim Raja Ampat dan nikmati keindahan seni tradisional selama festival berlangsung."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
        ],
    },
    Ambon: {
        bg: "../image/budayamaluku.png",
        desc: "Kota di Maluku dengan festival budaya Maluku yang kaya.",
        festivals: [
            {
                name: "Festival Budaya Maluku",
                img: "https://redaktur.tvrinews.com/storage/images/upload/5aec2154-6d2c-46ab-a129-67882c38f13e.jpeg",
                article: `
    <div class="relative">
        <img src="https://redaktur.tvrinews.com/storage/images/upload/5aec2154-6d2c-46ab-a129-67882c38f13e.jpeg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Festival Budaya</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Festival Budaya Maluku</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Merayakan Kekayaan Budaya Maluku</p>
        </div>
    </div>
    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Warisan Budaya Maluku</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Festival Budaya Maluku adalah perayaan yang menampilkan kekayaan budaya, seni, dan tradisi masyarakat Maluku. Acara ini meliputi tarian adat, musik tradisional, dan pameran kerajinan tangan yang mencerminkan keberagaman budaya Maluku.
                </p>
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Festival</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. TARIAN ADAT</h4>
                        <p class="text-sm text-gray-400">Tarian tradisional yang penuh warna dan energi.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. MUSIK TRADISIONAL</h4>
                        <p class="text-sm text-gray-400">Musik dan lagu daerah Maluku yang khas.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. KERAJINAN TANGAN</h4>
                        <p class="text-sm text-gray-400">Pameran kerajinan tangan khas Maluku.</p>
                    </div>
                </div>
            </div>
            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Ambon, Maluku.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Diadakan setiap tahun.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Wisatawan, pecinta budaya.</span>
                        </li>
                    </ul>
                </div>
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Jelajahi kekayaan budaya Maluku dan nikmati keindahan seni tradisional selama festival berlangsung."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
        ],
    },
    Kupang: {
        bg: "https://images.unsplash.com/photo-1589453389933-7b7c9b5b3b3b?auto=format&fit=crop&q=80&w=2000",
        desc: "Kota di Nusa Tenggara Timur dengan festival budaya Timor yang kaya.",
        festivals: [
            {
                name: "Festival Koepan ",
                img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKJpOd6oBSzr9jQMVjlogvz2NZrcehaD-e_KCf8MzDD8_ODJfhUqpyZYfqrcY0Vg07hg9LmvLJppW4yl_frLUKHwcNPVSE-YtvKTWTvgb5mEKSRlnYKdAzCiBSio0MsSaIsJopLhpFKXBlfEEtIAcCyt4VSj90aDworYk45NPrKrvCZce5ujMQeS5X8ks/s1600/IMG-20240424-WA0047.jpg",
                article: `
    <div class="relative">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKJpOd6oBSzr9jQMVjlogvz2NZrcehaD-e_KCf8MzDD8_ODJfhUqpyZYfqrcY0Vg07hg9LmvLJppW4yl_frLUKHwcNPVSE-YtvKTWTvgb5mEKSRlnYKdAzCiBSio0MsSaIsJopLhpFKXBlfEEtIAcCyt4VSj90aDworYk45NPrKrvCZce5ujMQeS5X8ks/s1600/IMG-20240424-WA0047.jpg" class="w-full h-full object-cover rounded-t-3xl">
        <div class="absolute rounded-3xl inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Festival Budaya</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Koepan Festival</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Merayakan Kekayaan Budaya Timor</p>
        </div>
    </div>
    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Warisan Budaya Timor</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Koepan Festival adalah perayaan yang menampilkan kekayaan budaya, seni, dan tradisi masyarakat Timor. Acara ini meliputi tarian adat, musik tradisional, dan pameran kerajinan tangan yang mencerminkan keberagaman budaya Timor.
                </p>
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Festival</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. PANGGUNG KEANEKARAGAMAN ETNIS</h4>
                        <p class="text-sm text-gray-400">Festival ini menampilkan berbagai seni dan tari tradisional dari berbagai etnis di NTT, seperti tarian Jai (Ngada), dan pertunjukan musik Sasando.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. MUSIK TRADISIONAL</h4>
                        <p class="text-sm text-gray-400">Musik dan lagu daerah Timor yang khas.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. KERAJINAN TANGAN</h4>
                        <p class="text-sm text-gray-400">Pameran kerajinan tangan khas Timor.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">4. FOKUS PADA UMKM & KULINER KHAS NTT</h4>
                        <p class="text-sm text-gray-400">Festival ini juga menonjolkan produk-produk UMKM lokal serta kuliner khas Nusa Tenggara Timur, memberikan pengalaman budaya yang lengkap bagi pengunjung.</p>
                    </div>
                </div>
            </div>
            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Kupang, Nusa Tenggara Timur.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Diadakan setiap tahun.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Wisatawan, pecinta budaya.</span>
                        </li>
                    </ul>
                </div>
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Jelajahi kekayaan budaya Timor dan nikmati keindahan seni tradisional selama festival berlangsung."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
        ],
    },
    Mataram: {
        bg: "https://images.unsplash.com/photo-1589453389933-7b7c9b5b3b3b?auto=format&fit=crop&q=80&w=2000",
        desc: "Kota di Nusa Tenggara Barat dengan festival budaya Sasak yang kaya.",
        festivals: [
            {
                name: "Festival Budaya Sasak",
                img: "https://foto.kontan.co.id/DcodD9xfG1gEAcdH52T1a3yvBCo=/640x360/smart/2024/03/03/1447841959p.jpg",
                article: `
    <div class="relative">
        <img src="https://foto.kontan.co.id/DcodD9xfG1gEAcdH52T1a3yvBCo=/640x360/smart/2024/03/03/1447841959p.jpg" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-12">
            <span class="bg-red-600 text-white px-4 py-1 text-xs font-bold w-fit mb-4 uppercase tracking-widest">Festival Budaya</span>
            <h1 class="text-5xl font-black mb-2 uppercase italic tracking-tighter">Festival Budaya Sasak</h1>
            <p class="text-red-500 font-bold tracking-widest uppercase">Merayakan Kekayaan Budaya Sasak</p>
        </div>
    </div>
    <div class="p-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-2xl font-bold text-white mb-6 border-b border-red-600 pb-2 w-fit">Warisan Budaya Sasak</h2>
                <p class="text-lg text-gray-400 leading-relaxed mb-8">
                    Festival Budaya Sasak adalah perayaan yang menampilkan kekayaan budaya, seni, dan tradisi masyarakat Sasak. Acara ini meliputi tarian adat, musik tradisional, dan pameran kerajinan tangan yang mencerminkan keberagaman budaya Sasak.
                </p>
                <h2 class="text-2xl font-bold text-white mb-6">Elemen Unik Festival</h2>
                <div class="space-y-4 mb-10">
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">1. TARIAN ADAT</h4>
                        <p class="text-sm text-gray-400">Tarian tradisional yang penuh warna dan energi.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">2. MUSIK TRADISIONAL</h4>
                        <p class="text-sm text-gray-400">Musik dan lagu daerah Sasak yang khas.</p>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 class="text-red-500 font-black mb-1 italic">3. KERAJINAN TANGAN</h4>
                        <p class="text-sm text-gray-400">Pameran kerajinan tangan khas Sasak.</p>
                    </div>
                </div>
            </div>
            <div class="space-y-6">
                <div class="bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                    <h3 class="font-bold text-xl mb-4 italic border-l-4 border-red-600 pl-4">Panduan Pengunjung</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-red-600 mt-1"></i>
                            <span><strong>Lokasi:</strong> Mataram, Nusa Tenggara Barat.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-calendar-alt text-red-600 mt-1"></i>
                            <span><strong>Waktu:</strong> Diadakan setiap tahun.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-users text-red-600 mt-1"></i>
                            <span><strong>Target:</strong> Wisatawan, pecinta budaya.</span>
                        </li>
                    </ul>
                </div>
                <div class="bg-red-600/10 p-6 rounded-3xl border border-red-600/20">
                    <p class="text-xs italic text-gray-400">"Jelajahi kekayaan budaya Sasak dan nikmati keindahan seni tradisional selama festival berlangsung."</p>
                </div>
            </div>
        </div>
    </div>
  `,
            },
        ],
    },
};

// FUNGSI LOGIKA UTAMA
function changeCity(city, btn) {
  const data = cityData[city];
  if (!data) return;

  // Update Hero
  document.getElementById("hero-section").style.backgroundImage =
    `url('${data.bg}')`;
  document.getElementById("place-name").innerText = city;
  document.getElementById("place-desc").innerText = data.desc;

  // Update Button Active
  document
    .querySelectorAll(".month-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  // Open Festival List Overlay
  openOverlay(city, data.festivals);
}

function openOverlay(city, festivals) {
  const overlay = document.getElementById("festival-overlay");
  const list = document.getElementById("festival-list");
  document.getElementById("overlay-city-title").innerText = city;

  list.innerHTML = "";
  festivals.forEach((f, index) => {
    list.innerHTML += `
            <div onclick="showArticle('${city}', ${index})" class="festival-card animate-card" style="animation-delay: ${index * 0.15}s">
                <img src="${f.img}" alt="${f.name}" />
                <div class="festival-card-content">
                    <h3>${f.name}</h3>
                    <p>Discover the fascinating story and traditions behind this festival</p>
                    <button class="read-more-btn">
                        <span>Read Article</span>
                        <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>`;
  });

  overlay.classList.remove("hidden");
  overlay.classList.add("flex");
  document.body.classList.add("overflow-hidden");
}

function showArticle(city, index) {
  const festival = cityData[city].festivals[index];
  const modal = document.getElementById("article-modal");
  const content = document.getElementById("article-content");
  content.innerHTML = festival.article;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeArticle() {
  document.getElementById("article-modal").classList.add("hidden");
}
function closeOverlay() {
  document.getElementById("festival-overlay").classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

function selectIsland(islandName) {
    // 1. Update UI Aktif pada Island
    document.querySelectorAll('.island').forEach(el => {
        el.classList.remove('active');
        if(el.getAttribute('data-island') === islandName) el.classList.add('active');
    });

    // 2. Update Background Hero & Deskripsi with slide down for text and mix transition for background
    const islandInfo = islandData[islandName];
    if (islandInfo) {
        const heroSection = document.getElementById("hero-section");
        const placeName = document.getElementById("place-name");
        const placeDesc = document.getElementById("place-desc");

        // Slide up text and background
        heroSection.style.transform = 'translateY(-20px)';
        placeName.style.transform = 'translateY(-20px)';
        placeDesc.style.transform = 'translateY(-20px)';

        setTimeout(() => {
            // Update content
            heroSection.style.backgroundImage = `url('${islandInfo.bg}')`;
            placeName.innerText = islandName;
            placeDesc.innerText = islandInfo.desc;

            // Slide down text and background
            heroSection.style.transform = 'translateY(0)';
            placeName.style.transform = 'translateY(0)';
            placeDesc.style.transform = 'translateY(0)';
        }, 300); // Half of transition time
    }

    // 3. Render Tombol Kota berdasarkan Island yang dipilih
    renderCityButtons(islandName);
}

function renderCityButtons(islandName) {
    const container = document.getElementById('city-buttons-container');
    container.innerHTML = ''; // Kosongkan tombol lama

    const cities = islandCities[islandName];

    cities.forEach((city, index) => {
        const btn = document.createElement('button');
        // Gunakan class Tailwind yang sama dengan style Anda
        btn.className = "month-btn px-8 py-3 rounded-2xl text-sm uppercase tracking-widest text-white border border-white/10 hover:bg-red-600 transition-all";
        btn.innerText = city.replace('_', ' '); // Ganti Raja_Ampat jadi Raja Ampat
        
        btn.onclick = function() {
            // Set aktif pada tombol yang diklik
            document.querySelectorAll('.month-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Panggil fungsi untuk load festival
            loadCityFestivals(city);
        };

        container.appendChild(btn);

        // Auto-click kota pertama agar list langsung muncul
        if(index === 0) btn.click();
    });
}

// Fungsi untuk menampilkan list festival berdasarkan kota
function loadCityFestivals(city) {
    const listContainer = document.getElementById('festival-list');
    const titleContainer = document.getElementById('overlay-city-title');
    
    titleContainer.innerText = city.replace('_', ' ');
    listContainer.innerHTML = ''; // Clear list

    const data = cityData[city]; // Mengambil data dari cityData yang sudah Anda punya

    if (data && data.festivals) {
        data.festivals.forEach((fest, index) => {
            const card = `
                <div class="animate-card group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 hover:border-red-500/50 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 active:scale-95 flex-shrink-0"
                     style="width: 280px; height: auto; min-width: 280px;"
                     onclick="showArticle('${city}', ${index})">
                    <div class="h-64 overflow-hidden">
                        <img src="${fest.img}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="p-6">
                    <h3 class="text-lg font-bold mb-2">${fest.name}</h3>      
                    <button class="read-more-btn flex items-center mt-4 text-white-500 font-bold">  
                    <p class="text-white-500 text-xs font-bold tracking-widest">LIHAT DETAIL</p>
                    <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                    </div>
                </div>
            `;
            listContainer.innerHTML += card;
        });
    } else {
        listContainer.innerHTML = `<p class="text-gray-500 italic col-span-3">Data festival untuk ${city} belum tersedia.</p>`;
    }
}

// Carousel scroll functionality
document.getElementById('prev-island').addEventListener('click', () => {
    const carousel = document.getElementById('island-carousel');
    carousel.scrollBy({ left: -200, behavior: 'smooth' });
});

document.getElementById('next-island').addEventListener('click', () => {
    const carousel = document.getElementById('island-carousel');
    carousel.scrollBy({ left: 200, behavior: 'smooth' });
});

// Festival carousel scroll functionality
document.getElementById('prev-festival').addEventListener('click', () => {
    const carousel = document.getElementById('festival-list');
    carousel.scrollBy({ right: -320, behavior: 'smooth' });
});

document.getElementById('next-festival').addEventListener('click', () => {
    const carousel = document.getElementById('festival-list');
    carousel.scrollBy({ right: 320, behavior: 'smooth' });
});

// Initialize with Bali selected
selectIsland('Bali');

// Hover functionality for island carousel
document.querySelectorAll('.island').forEach(island => {
    island.addEventListener('mouseenter', () => {
        const islandName = island.getAttribute('data-island');
        const cities = islandData[islandName]?.cities || islandCities[islandName] || [];
        if (cities.length > 0) {
            const carousel = document.createElement('div');
            carousel.className = 'city-carousel absolute top-full left-0 bg-white/10 backdrop-blur-md rounded-2xl p-4 mt-2 flex flex-col space-y-2 max-w-xs z-10';
            cities.forEach(city => {
                const btn = document.createElement('button');
                btn.className = 'month-btn px-4 py-2 rounded-xl text-xs uppercase tracking-widest';
                btn.textContent = city;
                btn.onclick = () => changeCity(city, btn);
                carousel.appendChild(btn);
            });
            island.appendChild(carousel);
        }
    });
    island.addEventListener('mouseleave', () => {
        const carousel = island.querySelector('.city-carousel');
        if (carousel) carousel.remove();
    });
});

// Dropdown Logic
document.querySelectorAll(".dropdown-btn").forEach((btn) => {
  btn.onclick = (e) => {
    e.stopPropagation();
    btn.nextElementSibling.classList.toggle("show");
  };
});
window.onclick = () =>
  document
    .querySelectorAll(".dropdown-menu")
    .forEach((m) => m.classList.remove("show"));

// Handle URL parameters for search results
window.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const searchCity = urlParams.get("city");
  const searchFestival = urlParams.get("festival");

  if (searchCity && cityData[searchCity]) {
    // Directly open the city overlay
    openOverlay(searchCity, cityData[searchCity].festivals);

    // Update the hero section
    const data = cityData[searchCity];
    document.getElementById("hero-section").style.backgroundImage =
      `url('${data.bg}')`;
    document.getElementById("place-name").innerText = searchCity;
    document.getElementById("place-desc").innerText = data.desc;

    // Update active button
    document.querySelectorAll(".month-btn").forEach((btn) => {
      btn.classList.remove("active");
      if (btn.innerText.trim() === searchCity) {
        btn.classList.add("active");
      }
    });

    // Auto-open specific festival article if provided
    if (searchFestival) {
      const festivalIndex = cityData[searchCity].festivals.findIndex(
        (f) => f.name === decodeURIComponent(searchFestival),
      );

      if (festivalIndex !== -1) {
        setTimeout(() => {
          showArticle(searchCity, festivalIndex);
        }, 300); // Delay to ensure overlay is rendered
      }
    }
  }
});


