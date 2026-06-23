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
   SEARCH SYSTEM
===================================== */
const searchBtn = document.getElementById("search-btn");
const closeSearch = document.getElementById("close-search");
const searchContainer = document.getElementById("search-container");
const searchInput = searchContainer?.querySelector("input");
const searchSuggestions = document.getElementById("search-suggestions");

/* ================= CITY ROUTES ================= */
const cityRoutes = {
  jakarta: "../Tempat/jakarta.html",
  bandung: "../Tempat/bandung.html",
  jogja: "../Tempat/jogja.html",
  malang: "../Tempat/malang.html",
  bali: "../Tempat/bali.html",
  makassar: "../Tempat/Makassar.html",
  manado: "../Tempat/Manado.html",
  balikpapan: "../Tempat/Balikpapan.html",
  pontianak: "../Tempat/Pontianak.html",
  medan: "../Tempat/Medan.html",
  palembang: "../Tempat/Palembang.html",
  padang: "../Tempat/Padang.html",
  jayapura: "../Tempat/Jayapura.html",
  mataram: "../Tempat/Mataram.html",
  kupang: "../Tempat/Kupang.html",
  ambon: "../Tempat/Ambon.html",
};

/* ================= FESTIVAL DATA ================= */
const festivals = [
  { city: "Bali", name: "Nyepi: Keheningan Suci", type: "Festival", description: "Sacred day of silence and purification - Hari Penyucian Jiwa & Alam" },
  { city: "Bali", name: "Pawai Ogoh-Ogoh", type: "Festival", description: "Spectacular parade with giant demon effigies - Malam Pengerupukan" },
  { city: "Jogja", name: "Sekaten & Grebeg", type: "Festival", description: "Tradisi Agung Keraton Yogyakarta dengan gamelan suci dan gunungan" },
  { city: "Jogja", name: "Jogja Java Carnival", type: "Festival", description: "Puncak Perayaan HUT Kota Yogyakarta - Night Carnival di Malioboro" },
  { city: "Jakarta", name: "Jakarta Fair (PRJ)", type: "Festival", description: "Pameran & Hiburan Terbesar di Asia Tenggara - Pekan Raya Jakarta" },
  { city: "Jakarta", name: "Jakarta Fashion Week", type: "Festival", description: "Barometer Mode Terbesar di Asia Tenggara - Platform Kreativitas Industri Mode" },
  { city: "Bandung", name: "Asia Africa Festival", type: "Festival", description: "Merayakan Semangat Solidaritas Bangsa-Bangsa - Konferensi Tingkat Tinggi Asia-Afrika" },
  { city: "Bandung", name: "Pasar Seni ITB", type: "Festival", description: "Laboratorium Kreativitas Terbesar di Indonesia - Ajang Seni Rupa Mahasiswa ITB" },
  { city: "Malang", name: "Jazz Gunung Bromo", type: "Festival", description: "Harmoni di Atas Awan - Festival Jazz Unik di Pegunungan Tengger" },
];

/* ================= SEARCH OPEN/CLOSE ================= */
searchBtn?.addEventListener("click", () => {
  searchContainer.style.maxHeight = "600px";
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
    .filter(city => city.includes(query))
    .forEach(city => {
      const div = document.createElement("div");
      div.className =
        "px-4 py-3 mb-2 rounded-lg cursor-pointer bg-white/5 hover:bg-red-600/20 transition";
      div.innerHTML = `
        <div class="flex items-center gap-2">
          <i class="fas fa-map-marker-alt text-red-500"></i>
          <span class="font-bold uppercase">${city}</span>
          <span class="text-xs opacity-60">City</span>
        </div>
      `;
      div.onclick = () => goCity(city);
      searchSuggestions.appendChild(div);
    });

  /* Festivals */
  festivals
    .filter(f =>
      f.name.toLowerCase().includes(query) ||
      f.city.toLowerCase().includes(query) ||
      f.description.toLowerCase().includes(query)
    )
    .forEach(f => {
      const div = document.createElement("div");
      div.className =
        "px-4 py-3 mb-2 rounded-lg cursor-pointer bg-gradient-to-r from-white/5 to-red-600/10 hover:from-white/10 hover:to-red-600/20 transition";
      div.innerHTML = `
        <div class="flex gap-3">
          <i class="fas fa-calendar text-orange-500 mt-1"></i>
          <div>
            <div class="font-bold text-sm">${f.name}</div>
            <div class="text-xs opacity-60">${f.city}</div>
            <div class="text-xs opacity-50">${f.description}</div>
          </div>
        </div>
      `;
      div.onclick = () => {
        window.location.href = `Festival.html?city=${f.city}&festival=${encodeURIComponent(f.name)}`;
      };
      searchSuggestions.appendChild(div);
    });

  /* No results */
  if (!searchSuggestions.children.length) {
    searchSuggestions.innerHTML = `
      <div class="px-4 py-3 text-sm opacity-60">
        🔍 Try: Jakarta, Bali, Nyepi, Sekaten
      </div>
    `;
  }
}
);

/* ---------- ENTER KEY ---------- */
searchInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const key = searchInput.value.toLowerCase().trim();
    if (cityRoutes[key]) goCity(key);
  }
});

/* ---------- NAVIGATION ---------- */
function goCity(city) {
  window.location.href = cityRoutes[city];
}



// DATA KOTA DAN FESTIVAL

const kulinerData = [

      // kuliner bali
        {
          nama: "Ayam Betutu",
          daerah: "Bali",
          tipe: "Makanan",
          asal: "Bali",
          img: "https://img-global.cpcdn.com/recipes/3be903f4f79ca2b2/1502x1064cq70/ayam-betutu-foto-resep-utama.jpg",
          deskripsi:
            "Ayam Betutu adalah masakan kebanggaan masyarakat Bali. Daging ayam diolah dengan bumbu rempah 'Base Genep' yang kaya, kemudian dipanggang atau dikukus dalam waktu lama hingga bumbu meresap sampai ke tulang.",
        },
        {
          nama: "Es Daluman",
          daerah: "Bali",
          tipe: "Minuman",
          asal: "Bali",
          img: "https://tse4.mm.bing.net/th/id/OIP._yQYHd9nEddCMWgOs-n7ugHaEc?pid=Api&h=220&P=0",
          deskripsi:
          "Minuman tradisional khas Bali yang terbuat dari daun daluman (cincau hijau), disajikan dengan kuah santan, sirup gula merah, dan es batu. Sangat menyegarkan!",
        },
        {
          nama: "Sate Lilit",
          daerah: "Bali",
          tipe: "Makanan",
          asal: "Bali",
          img: "https://tse3.mm.bing.net/th/id/OIP.koM5zTEWKurjGRUODAoEXwHaEK?pid=Api&h=220&P=0",
          deskripsi:
            "Sate Lilit adalah sate khas Bali yang terbuat dari daging cincang (biasanya ikan atau ayam) yang dibumbui dengan rempah khas, lalu dililitkan pada batang serai sebelum dipanggang.",
        },

        // Kuliner bali selesai


        // kuliner jogja
        {
          nama: "Gudeg",
          daerah: "Jogja",
          tipe: "Makanan",
          asal: "Yogyakarta",
          img: "https://tse3.mm.bing.net/th/id/OIP.YrhBzWQBBIqySjb9m6UhkQHaE8?pid=Api&h=220&P=0",
          deskripsi:
            "Gudeg adalah sayur nangka muda yang dimasak dengan santan dan gula jawa. Proses memasaknya memakan waktu berjam-jam untuk mendapatkan tekstur yang lembut dan warna cokelat yang ikonik.",
        },
        {
          nama: "Bakpia Pathok",
          daerah: "Jogja",
          tipe: "Makanan",
          asal: "Yogyakarta",
          img: "https://tse2.mm.bing.net/th/id/OIP.SYdIA8tycjQzql7O3wihcQHaDO?pid=Api&h=220&P=0",
          deskripsi:
            "Bakpia Pathok adalah kue tradisional khas Yogyakarta yang terbuat dari tepung beras, gula, dan santan. Dibuat dengan cara dipanggang hingga matang dan memiliki tekstur lembut serta rasa manis yang nikmat.",
        },
        {
          nama: "Wedang Ronde",
          daerah: "Jogja",
          tipe: "Minuman",
          asal: "Yogyakarta",
          img: "https://tse1.mm.bing.net/th/id/OIP.cOHngZNNlXXAXRCamWwX6AHaE8?pid=Api&h=220&P=0",
          deskripsi:    
            "Wedang Ronde adalah minuman hangat khas Yogyakarta yang terbuat dari bola-bola ketan berisi kacang tanah, disajikan",
        },
  
        // kuliner jogja selesai  

        // kuliner jakarta
          {
          nama: "Kerak Telor",
          daerah: "Jakarta",
          tipe: "Makanan",
          asal: "Jakarta",
          img: "https://tse2.mm.bing.net/th/id/OIP.NWNWNsVgSaHWx9XmebAVUgHaEL?pid=Api&h=220&P=0",
          deskripsi:
            "Omelet khas Betawi yang dibuat dari beras ketan putih, telur ayam atau bebek, serundeng, dan bawang goreng. Dimasak tanpa minyak di atas tungku arang.",
        },
        {
          nama: "Es Podeng",
          daerah: "Jakarta",
          tipe: "Minuman",
          asal: "Jakarta",
          img: "https://javaprivatetour.com/wp-content/uploads/2024/01/Es-Podeng-Ice-Cream-Podeng-of-Jakarta.jpg",
          deskripsi:
            "Minuman segar khas Betawi yang terbuat dari campuran santan, sirup, potongan roti, kolang-kaling, dan es serut. Cocok untuk melepas dahaga di siang hari.",
        },
        {
          nama: "Nasi Uduk",
          daerah: "Jakarta",
          tipe: "Makanan",
          asal: "Jakarta",
          img: "https://img-global.cpcdn.com/recipes/e6a04bed9729507b/1200x630cq70/photo.jpg",
          deskripsi:
            "Nasi yang dimasak dengan santan dan rempah-rempah, disajikan dengan lauk pauk seperti ayam goreng, telur balado, tempe orek, dan sambal.",
        },

        // kuliner jakarta selesai

        // kuliner malang
        {
          nama: "Bakso Malang",
          daerah: "Malang",
          tipe: "Makanan",
          asal: "Malang",
          img: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/08/02034124/ini-resep-bakso-malang-lezat-yang-menggugah-selera-halodoc.jpg.webp",
          deskripsi:
            "Berbeda dengan bakso biasa, Bakso Malang menyajikan variasi yang lengkap mulai dari bakso halus, bakso urat, pangsit goreng, hingga siomay yang disiram kuah kaldu bening yang gurih.",
        },
        {
          nama: "Cwie Mie",
          daerah: "Malang",
          tipe: "Makanan",
          asal: "Malang",
          img: "https://www.unileverfoodsolutions.co.id/dam/global-ufs/mcos/SEA/calcmenu/recipes/ID-recipes/cwie-mie-malang/header_2.jpg",
          deskripsi:
            "Mie khas Malang yang disajikan dengan suwiran ayam bumbu kecap, taburan bawang goreng, dan kuah kaldu yang gurih. Biasanya disajikan dengan pangsit goreng atau rebus.",
        },
        {
          nama: "Sate Kambing",
          daerah: "Malang",
          tipe: "Makanan",
          asal: "Malang",
          img: "https://cdn.tasteatlas.com/images/dishes/bd05a70c4dbf44e69325c7ffefb8055a.jpg?mw=2000",
          deskripsi:
            "Sate kambing Malang yang disajikan dengan bumbu kacang khas Malang, disajikan dengan lontong dan sambal.",
        },

        // kuliner malang selesai

        // kuliner Bandung
        {
          nama: "Batagor",
          daerah: "Bandung",
          tipe: "Makanan",
          asal: "Bandung",
          img: "https://tse2.mm.bing.net/th/id/OIP.WXIcrCP3wvw9eS4yUEK7aQHaE8?pid=Api&h=220&P=0",
          deskripsi:
            "Batagor (Bakso Tahu Goreng) adalah kuliner khas Bandung yang terkenal dengan cita rasa gurih dan tekstur renyah.",
        },
        {
          nama: "Es Cendol",
          daerah: "Bandung",
          tipe: "Minuman",    
          asal: "Bandung",
          img: "https://tse4.mm.bing.net/th/id/OIP.MzZdeE0w2DeNTFuqJqACxwHaE8?pid=Api&h=220&P=0",
          deskripsi:
            "Es Cendol adalah minuman tradisional yang menyegarkan, terbuat dari tepung beras hijau, santan, dan gula merah cair.",   
          },

          // Kuliner Makassar

        { 
          nama: "Coto Makassar",
          daerah: "Makassar",
          tipe: "Makanan",  
          asal: "Makassar",
          img: "https://i0.wp.com/resepkoki.id/wp-content/uploads/2016/04/Resep-Coto-Makassar.jpg?fit=1300%2C1177&ssl=1",
          deskripsi:
            "Coto Makassar adalah sup daging khas Makassar yang kaya rempah, disajikan dengan ketupat atau burasa.",
        },
        {
          nama: "Pallubasa",
          daerah: "Makassar",
          tipe: "Makanan",
          asal: "Makassar",
          img: "https://superapp.id/blog/wp-content/uploads/2022/09/El-John-Mandarin-1536x1536.jpg",
          deskripsi:
            "Pallubasa adalah hidangan sup daging yang dimasak dengan santan dan rempah khas, memberikan rasa gurih dan lezat.",
        },

        {
          nama: "Es Pisang Ijo",
          daerah: "Makassar",
          tipe: "Minuman",
          asal: "Makassar",
          img: "https://travellingindonesia.com/wp-content/uploads/2022/06/Es-Pisang-Ijo-khas-Makassar-Dok.-Istimewa.jpg",
          deskripsi:
            "Es Pisang Ijo adalah minuman segar khas Makassar yang terbuat dari pisang yang dibungkus dengan adonan tepung hijau, disajikan dengan sirup, santan, dan es batu.",  
        },

        // Manado Kuliner

        {
          nama: "Tinutuan",
          daerah: "Manado",
          tipe: "Makanan",
          asal: "Manado",
          img: "https://img-global.cpcdn.com/003_recipes/997d63cf00e1941f/751x532cq70/photo.jpg",
          deskripsi:
            "Tinutuan adalah bubur khas Manado yang terbuat dari campuran beras, jagung, labu kuning, dan sayuran, disajikan dengan berbagai lauk pauk seperti ikan cakalang dan sambal roa.",
        },
        
        {
          nama: "Cakalang Fufu",
          daerah: "Manado", 
          tipe: "Makanan",
          asal: "Manado",
          img: "https://resepmamiku.com/wp-content/uploads/2022/06/cakalang-fufu-rica-rica-yscooking-e1681434213206-850x771.jpg",
          deskripsi:
            "Cakalang Fufu adalah ikan cakalang yang diasapi dan diawetkan, biasanya disajikan dengan sambal dabu-dabu atau sebagai lauk pendamping tinutuan.",
        },
        {
          nama: "Es Kacang Merah",
          daerah: "Manado",
          tipe: "Minuman",  
          asal: "Manado",
          img: "https://i.pinimg.com/originals/34/d0/d5/34d0d501af648f78b85b79468642905b.jpg",
          deskripsi:
            "Es Kacang Merah adalah minuman segar khas Manado yang terbuat dari kacang merah rebus, sirup, santan, dan es batu.",
        },

        // Balikpapan Kuliner
        {
          nama: "Soto Banjar",
          daerah: "Balikpapan",
          tipe: "Makanan",
          asal: "Balikpapan",
          img: "https://img-global.cpcdn.com/recipes/57b52ad2b52c11bc/1200x630cq70/photo.jpg",
          deskripsi:
            "Soto Banjar adalah sup ayam khas Kalimantan Selatan yang kaya rempah, disajikan dengan ketupat atau nasi.",
        },
        {
          nama: "Nasi Kuning Balikpapan",
          daerah: "Balikpapan",
          tipe: "Makanan",
          asal: "Balikpapan",
          img: "https://tse4.mm.bing.net/th/id/OIP.r-Uk6nBzJ7_hdHc7QxCz0AHaD4?pid=Api&h=220&P=0",
          deskripsi:
            "Nasi Kuning Balikpapan adalah nasi yang dimasak dengan kunyit dan santan, disajikan dengan lauk pauk khas seperti ayam goreng, telur balado, dan sambal.",
        },


        // Pontianak Kuliner
        {
          nama: "Soto Pontianak",
          daerah: "Pontianak",
          tipe: "Makanan",
          asal: "Pontianak",
          img: "https://tse4.mm.bing.net/th/id/OIP.__-y13iJ2wfojvaDk9RyYwHaE8?pid=Api&h=220&P=0",
          deskripsi:
            "Soto Pontianak adalah sup ayam khas Kalimantan Barat yang kaya rempah, disajikan dengan ketupat atau nasi.",
        },
        {
          nama: "Kue Bingke",
          daerah: "Pontianak",
          tipe: "Makanan",
          asal: "Pontianak",
          img: "https://media.suara.com/pictures/653x366/2023/03/19/20182-kue-bingke-khas-pontianak-instagram-attukangkuekampung.jpg",
          deskripsi:
            "Kue Bingke adalah kue tradisional khas Pontianak yang terbuat dari tepung beras, santan, dan gula, dipanggang hingga matang dengan tekstur lembut dan rasa manis yang nikmat.",
        },

        // medan kuliner
        {
          nama: "Bika Ambon",
          daerah: "Medan",
          tipe: "Makanan",
          asal: "Medan",
          img: "https://img.herstory.co.id/articles/archive_20220616/bika-ambon-20220616-075413.jpg",
          deskripsi:
            "Bika Ambon adalah kue khas Medan yang terbuat dari campuran tepung sagu, santan, dan ragi, dipanggang hingga berpori-pori dengan aroma pandan yang harum.",
        },
        {
          nama: "Soto Medan",
          daerah: "Medan",
          tipe: "Makanan",
          asal: "Medan",
          img: "https://cdn.tasteatlas.com/images/dishes/3751081cefc34446a4d80c287bd1a5de.jpg?mw=1300",
          deskripsi:
            "Soto Medan adalah sup ayam khas Medan yang kaya rempah, disajikan dengan ketupat atau nasi.",
        },

        // Palembang Kuliner
        {
          nama: "Pempek",
          daerah: "Palembang",
          tipe: "Makanan",
          asal: "Palembang",
          img: "https://assets.promediateknologi.id/crop/0x164:1076x908/750x500/webp/photo/2022/11/05/1721558005.jpeg",
          deskripsi:
            "Pempek adalah makanan khas Palembang yang terbuat dari ikan dan tepung sagu, disajikan dengan kuah cuka yang segar.",
        },
        {
          nama: "Tekwan",
          daerah: "Palembang",
          tipe: "Makanan",
          asal: "Palembang",
          img: "https://tse1.mm.bing.net/th/id/OIP.RqW4_4V6lg2N1bbazmpNjwHaE8?pid=Api&h=220&P=0",
          deskripsi:
            "Tekwan adalah sup ikan khas Palembang yang terbuat dari bola-bola ikan, disajikan dengan kuah kaldu bening yang gurih.",
        },

        // Padang Kuliner
        {
          nama: "Rendang",
          daerah: "Padang",
          tipe: "Makanan",
          asal: "Padang",
          img: "https://www.elmundoeats.com/wp-content/uploads/2023/04/A-bowl-of-beef-rendang.jpg",
          deskripsi:
            "Rendang adalah masakan daging khas Minangkabau yang dimasak dengan santan dan rempah-rempah hingga empuk dan bumbu meresap.",
        },
        { 
          nama: "Sate Padang",
          daerah: "Padang",
          tipe: "Makanan",
          asal: "Padang",
          img: "https://assets-edge.segari.id/recipes/sate-padang-lsbc02uep98s9.jpg?feature-name=recipe_detail_page&page-route=recipes.sate-padang&platform=web",
          deskripsi:
            "Sate Padang adalah sate khas Minangkabau yang disajikan dengan kuah kental berbumbu rempah khas.",
        },

        // Jayapura Kuliner
        {
          nama: "Papeda",
          daerah: "Jayapura",
          tipe: "Makanan",
          asal: "Jayapura",
          img: "https://mulamula.id/wp-content/uploads/2024/06/papeda.jpg",
          deskripsi:
            "Papeda adalah makanan khas Papua yang terbuat dari sagu, disajikan dengan kuah ikan kuning yang kaya rempah.",
        },
        {
          nama: "Ikan Bakar Manokwari",
          daerah: "Jayapura",
          tipe: "Makanan",
          asal: "Jayapura",
          img: "https://tse4.mm.bing.net/th/id/OIP.wjn4fS_p1a5qrRAOvUjRsAHaE7?pid=Api&h=220&P=0",
          deskripsi:
            "Ikan Bakar Manokwari adalah hidangan ikan bakar khas Papua yang dibumbui dengan rempah-rempah lokal, memberikan cita rasa yang unik dan lezat.",
        },
        
        // Mataram Kuliner
        {
          nama: "Ayam Taliwang",
          daerah: "Mataram",
          tipe: "Makanan",
          asal: "Mataram",
          img: "https://basfood.id/wp-content/uploads/2023/02/Ayam-Taliwang-Khas-Lombok.jpg",
          deskripsi:
            "Ayam Taliwang adalah hidangan ayam bakar khas Lombok yang dibumbui dengan sambal pedas khas, memberikan cita rasa yang menggugah selera.",
        },
        {
          nama: "Plecing Kangkung",
          daerah: "Mataram",
          tipe: "Makanan",
          asal: "Mataram",
          img: "https://assets.pikiran-rakyat.com/crop/0x232:700x851/x/photo/2021/12/31/3392348375.jpg",
          deskripsi:
            "Plecing Kangkung adalah hidangan sayur kangkung yang disiram dengan sambal tomat pedas khas Lombok, memberikan rasa segar dan pedas.",
        },

        // Kupang Kuliner
        {
          nama: "Se'i Sapi",
          daerah: "Kupang",
          tipe: "Makanan",
          asal: "Kupang",
          img: "https://cdn.idntimes.com/content-images/post/20200729/3-07d5b7c4378676de2a0242326211c35e.jpg",
          deskripsi:
            "Se'i Sapi adalah daging sapi asap khas Nusa Tenggara Timur yang diolah dengan bumbu rempah, memberikan cita rasa yang unik dan lezat.",
        },
        {
          nama: "Jagung Bose",
          daerah: "Kupang",
          tipe: "Makanan",
          asal: "Kupang",
          img: "https://mawatu.co.id/wp-content/uploads/2024/09/jagung-bose.jpg",
          deskripsi:
            "Jagung Bose adalah hidangan khas Nusa Tenggara Timur yang terbuat dari jagung yang dimasak dengan santan dan bumbu rempah, memberikan rasa gurih dan lezat.",
        },

        // Ambon Kuliner
        {
          nama: "Ikan Kuah Pala",
          daerah: "Ambon",
          tipe: "Makanan",
          asal: "Ambon",
          img: "https://cdn.idntimes.com/content-images/community/2023/11/screenshot-20231103-130143-dfd91bf15551cc4a39deb2d33910fe0a-b7e55c560d41d1d6172a87c319c2a968_600x400.jpg",
          deskripsi:
            "Ikan Kuah Pala adalah hidangan ikan khas Ambon yang dimasak dengan bumbu pala dan rempah-rempah, memberikan cita rasa yang unik dan lezat.",
        },
        {
          nama: "Sagu Lempeng",
          daerah: "Ambon",
          tipe: "Makanan",
          asal: "Ambon",
          img: "https://salsawisata.com/wp-content/uploads/2022/09/Sagu-Lempeng.jpg",
          deskripsi:
            "Sagu Lempeng adalah kue tradisional khas Ambon yang terbuat dari sagu, disajikan dengan kelapa parut dan gula merah cair.",
        },
        
      ];

      const menuContainer = document.getElementById("menu-container");

      function displayItems(items) {
        if (items.length === 0) {
          menuContainer.innerHTML = `<p class="text-center col-span-full text-gray-500">Data tidak ditemukan.</p>`;
          return;
        }
        menuContainer.innerHTML = items
          .map(
            (item) => `
                <div class=" rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                     style="background-color: var(--card-bg);">
                    <img src="${item.img}" alt="${item.nama}" class="w-full h-48 object-cover">
                    <div class="p-5">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-[10px] font-bold uppercase tracking-widest text-red-500 bg-red-50 px-2 py-1 rounded">${item.tipe}</span>
                            <span class="text-xs text-gray-500"><i class="fas fa-map-marker-alt mr-1"></i>${item.asal}</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2">${item.nama}</h3>
                        <p class="text-gray-600 text-sm mb-4 line-clamp-2">Kelezatan khas ${item.asal} yang diolah dengan resep warisan nusantara.</p>
                        <button onclick="showDetail('${item.nama}')" class="w-full hover:bg-red-500 font-semibold py-2 rounded-lg transition-colors"
                                style="background-color: var(--card-bg);
                                border: 1px solid var(--border-color);">
                            Lihat Detail
                        </button>
                    </div>
                </div>
            `,
          )
          .join("");
      }

      function filterSelection(region) {
        // Update Active Class on Buttons
        const buttons = document.querySelectorAll(".category-pill");
        buttons.forEach((btn) => {
          btn.classList.remove("active");
          if (btn.innerText.toLowerCase() === region.toLowerCase()) {
            btn.classList.add("active");
          }
        });

        if (region === "semua") {
          displayItems(kulinerData);
        } else {
          const filtered = kulinerData.filter(
            (item) => item.daerah.toLowerCase() === region.toLowerCase(),
          );
          displayItems(filtered);
        }
      }

      // Modal Functions
      function showDetail(nama) {
        const item = kulinerData.find((d) => d.nama === nama);
        if (!item) return;

        document.getElementById("modal-img").src = item.img;
        document.getElementById("modal-nama").innerText = item.nama;
        document.getElementById("modal-tipe").innerText = item.tipe;
        document.getElementById("modal-asal").innerText = item.asal;
        document.getElementById("modal-desc").innerText = item.deskripsi;

        const modal = document.getElementById("detail-modal");
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      }

      function closeModal() {
        const modal = document.getElementById("detail-modal");
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
      }

      // Close modal if click outside
      window.onclick = function (event) {
        const modal = document.getElementById("detail-modal");
        if (event.target == modal) {
          closeModal();
        }
      };

      // Initial load
      displayItems(kulinerData);