// ========================
// 🔹 BURGER MENU TOGGLE
// ========================
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
}

// ========================
// 🔹 FORM LOADER DELAY
// ========================
const form = document.getElementById('searchForm');
const loader = document.getElementById('loader');

if (form && loader) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    loader.style.display = 'flex';
    setTimeout(() => {
      form.submit();
    }, 3000);
  });
}

// ========================
// 🔹 SEARCH FUNCTION (Fuse.js)
// ========================
const pages = [
  { title: "Daino minoma ft Benito Mc- Akili ya ndocc", url: "Daino Minoma X Benito Mc- Akili ya ndocc.html", content: "" },
  { title: "Fammi Africa-Umejaa", url: "fammi-umejaa.html", content: "" },
  { title: "EP | Fanu Benks - Afro centric", url: "EP I Fanu Benks - Afro centric.html", content: "" },
  { title: "ctg harmanton - Enjo", url: "CTG harmaton- Enjo.html", content: "" },
  { title: "kim voice-waambie", url: "Kim-Voice x Dee Breezy-Waambie.html", content: "" },
  { title: "Fessy Melody", url: "Fesy melody songs.html", content: "" },
   { title: "Fessy Melody-Vimba", url: "Fesy melody songs.html", content: "" },
   { title: "Fessy Melody x Lady DIdy  - Over ", url: "Fesy melody songs.html", content: "" },
   { title: "Moramz ft Dogo elisha - umbea", url: "Moramz ft Dogo elisha - umbea.html", content: "" },
   { title: "Moramz - Ella", url: "Moramz ft Dogo elisha - umbea.html", content: "" },
    { title: "Kani Master - Hujanizaa", url: "kani master - hujanizaa.html", content: "" },
     { title: "Fanu Benks - Gangster Love", url: "EP I Fanu Benks - Afro centric.html", content: "" },
         { title: "Fanu Benks", url: "fanu benks.html", content: "" },
         { title: "Basya - Inatosha", url: "Basya - Inatosha.html", content: "" },
          { title: "Hush B Ft Dee Punchy - Najihisi ", url: "Hush B Ft Dee Punchy - Najihisi Vizuri.html", content: "" },
           { title: "Hush B Ft Dee Punchy X Chuka Boe - SABATO", url: "Hush B Ft Dee Punchy X Chuka Boe - SABATO.html", content: "" },
    { title: "Fanu Benks - achana nao", url: "EP I Fanu Benks - Afro centric.html", content: "" },

     { title: "Willox Khan-Nakukumbuka", url: "Willox Khan-Nakukumbuka.HTML", content: "" },
];

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

if (searchInput && resultsDiv) {
  const fuse = new Fuse(pages, {
    keys: ["title", "content"],
    threshold: 0.3,
  });

  function highlight(text, term) {
    const regex = new RegExp(`(${term})`, "gi");
    return text.replace(regex, "<span class='highlight'>$1</span>");
  }

  searchInput.addEventListener("input", () => {
    const term = searchInput.value.trim();
    resultsDiv.innerHTML = "";

    if (term === "") return;

    const results = fuse.search(term);

    if (results.length === 0) {
      resultsDiv.innerHTML = "<p>Hakuna matokeo yaliyopatikana</p>";
      return;
    }

    results.forEach((r) => {
      const item = r.item;
      const html = `
        <div class="result">
          <a href="${item.url}">${highlight(item.title, term)}</a>
          <p>${highlight(item.content, term)}</p>
        </div>
      `;
      resultsDiv.innerHTML += html;
    });
  });
}
