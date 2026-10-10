/* Books by T Roberts — one shared bookshelf, used on every site (like courses-banner.js).
   Edit BOOKS below to update the books everywhere at once.
   Usage: <div class="tony-books" data-site="english|travel" data-mode="shelf|full"></div>
          <script src="https://ilearnenglishhere.academy/assets/books-banner.js" defer></script>
   data-mode="shelf" = compact homepage shelf (default) · "full" = full books page with longer descriptions.
   Every "Read on Amazon" button is labelled "Book: <name>" so it shows up in Site Pulse (Clicks → Books). */
(function () {
  /* Covers load from Amazon's image server. To self-host later, upload <key>.jpg files to assets/books/ and set HOST to
     "https://ilearnenglishhere.academy/assets/books/" — Amazon stays as the automatic fallback. */
  var HOST = "";
  var AMZ_IMG = "https://m.media-amazon.com/images/I/";
  var AUTHOR = "https://www.amazon.com/stores/T-Roberts/author/B0CTG9VHWF";
  var BOOKS = {
    mivida: {
      asin: "B0G3VFXXK6", img: "71-iVRA05VL", tag: "Memoir · Cambodia", short: "A More Meaningful Way to Live",
      title: "A More Meaningful Way to Live",
      sub: "Reflections from a Khmer Woman Finding Her Voice",
      blurb: "Heartfelt reflections from a Cambodian woman on family, hostel life, hope and finding her voice.",
      more: "Born from a chance meeting between two travellers, this book follows Chalada Catalotores — a Cambodian woman who always wrote from the heart but never believed she could publish. With no money and no publishing experience, just determination and trust, her story became a real book. Raw, honest and full of hope."
    },
    lifeEmotions: {
      asin: "B0BSXSQGG8", img: "71xbvg-YffL", tag: "Personal growth", short: "Life Emotions",
      title: "Life Emotions", sub: "Outspoken from Inside",
      blurb: "Honest reflections that open up the conversations most of us avoid.",
      more: "A motivating personal-growth read that encourages you to think differently and look at life from a new angle. Made extra special by the artwork, created together with the author's daughter."
    },
    mensHealth: {
      asin: "B0G1JP2GYG", img: "610w-55wP9L", tag: "Self-development", short: "Men's Health Vol. 1",
      title: "Men’s Health Vol. 1", sub: "The Foundation of Independent Manhood",
      blurb: "A straight-talking guide to self-control, discipline, peace and growth for the modern man.",
      more: "Built from real life and experience rather than social-media trends: understanding who you are, building confidence through independence, and carrying yourself with control and direction. A great companion to the Man Studies course on Udemy."
    },
    alkaline: {
      asin: "B0876HYTWG", img: "81tCEwAJ0EL", tag: "Vegan cooking", short: "Basic Alkaline Vegan Recipes",
      title: "Basic Alkaline Vegan Recipes for Beginners", sub: "Plant-based recipes following Dr Sebi guidelines",
      blurb: "Easy plant-based recipes and tips for starting an alkaline vegan lifestyle.",
      more: "Written for complete beginners: simple, easy-to-follow recipes and practical tips to make the switch to alkaline, plant-based eating feel natural. Pairs perfectly with the Alkaline Vegan Cooking for Beginners course on Udemy."
    },
    herbal: {
      asin: "B088Q3L6VN", img: "71u2DCy-b1L", alt: { label: "Paperback", asin: "B0892J1FX6" }, tag: "Natural living", short: "Herbal Remedies for Body, Mind & Soul",
      title: "Herbal Remedies for Body, Mind & Soul", sub: "A short guide by Natural Style Barcelona",
      blurb: "A short, easy-read guide to everyday herbs and how people prepare and use them.",
      more: "An approachable introduction to the world of herbs: how to choose, prepare and use common plants as part of a natural lifestyle, and why herbs have mattered to people for centuries. From the team behind Natural Style Barcelona."
    },
    music: {
      asin: "B0BTCGCQGR", img: "71dhErpygSL", tag: "Music business", short: "Music Monetization",
      title: "Music Monetization", sub: "Navigating the Changing Landscape with Online Strategies & Technology",
      blurb: "How musicians can earn in the digital age — streaming, online strategy and new tech.",
      more: "A practical look at how the music business has changed: streaming, online platforms, new technology and even crypto — with clear recommendations to help artists build income from their music."
    },
    biochar: {
      asin: "B0BT9HVTMC", img: "81HyIEab80L", tag: "Sustainability · Q&A", short: "The Comprehensive Guide to Biochar",
      title: "The Comprehensive Guide to Biochar", sub: "Science, production & applications — Question and Answer",
      blurb: "A question-and-answer guide to biochar: what it is, how it’s made and how it’s used.",
      more: "Covers the history of biochar, its properties, the main ways it is produced, and how it is used to improve soil health and support sustainable development — all in an easy question-and-answer format."
    }
  };
  var ORDER = {
    english: ["mivida", "lifeEmotions", "mensHealth", "alkaline", "herbal", "music", "biochar"],
    travel: ["mivida", "herbal", "alkaline", "mensHealth", "lifeEmotions", "music", "biochar"]
  };
  var BOOKS_PAGE = { english: "https://ilearnenglishhere.academy/books.html", travel: "https://backpackerdirectory.com/books.html" };

  var css =
    ".tbk{box-sizing:border-box;max-width:1100px;margin:28px auto;padding:22px 18px;border-radius:18px;" +
    "background:linear-gradient(135deg,#fbf3e4 0%,#f4ecdd 55%,#e9f1ea 100%);border:2px solid #e2c89a;" +
    "font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#2b2a26;text-align:left}" +
    ".tbk *{box-sizing:border-box}" +
    ".tbk-h{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:6px 14px;margin:0 0 4px}" +
    ".tbk-h b{font-size:1.2rem;letter-spacing:.2px}" +
    ".tbk-h a{font-size:.88rem;color:#1f7a6c!important;font-weight:700;text-decoration:underline}" +
    ".tbk-in{margin:0 0 16px;font-size:.9rem;color:#6b6456;line-height:1.5}" +
    ".tbk-g{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(170px,1fr);gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;padding:4px 2px 12px;scrollbar-width:thin}" +
    ".tbk-g>.tbk-c{scroll-snap-align:start}" +
    ".tbk.full .tbk-g{grid-auto-flow:row;grid-auto-columns:auto;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px;overflow:visible}" +
    ".tbk-hint{display:block;font-size:.78rem;color:#6b6456;margin:-8px 0 8px}" +
    ".tbk-c{display:flex;flex-direction:column;background:#fff;border:1px solid #eadcc2;border-radius:14px;padding:12px;transition:transform .18s,box-shadow .18s}" +
    ".tbk-c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(80,60,20,.16)}" +
    ".tbk-cv{display:block;position:relative;aspect-ratio:2/3;border-radius:6px 10px 10px 6px;overflow:hidden;background:linear-gradient(135deg,#c8553d,#d39b2a);" +
    "box-shadow:inset 6px 0 8px -6px rgba(0,0,0,.45),0 6px 14px rgba(0,0,0,.18);margin-bottom:10px}" +
    ".tbk-cv img{width:100%;height:100%;object-fit:cover;display:block}" +
    ".tbk-cv .ft{position:absolute;inset:0;display:none;align-items:center;justify-content:center;padding:12px;text-align:center;color:#fff;font-weight:800;font-size:.95rem;line-height:1.25}" +
    ".tbk-cv.noimg img{display:none}.tbk-cv.noimg .ft{display:flex}" +
    ".tbk-tg{font-size:.68rem;text-transform:uppercase;letter-spacing:.6px;color:#1f7a6c;font-weight:700}" +
    ".tbk-ti{font-weight:800;font-size:.95rem;line-height:1.25;margin:3px 0 2px}" +
    ".tbk-su{font-size:.78rem;color:#6b6456;line-height:1.3;margin-bottom:6px}" +
    ".tbk-bl{font-size:.85rem;line-height:1.45;color:#463f35;flex:1;margin:0 0 8px}" +
    ".tbk-c details{font-size:.84rem;line-height:1.5;color:#463f35;margin:0 0 10px}" +
    ".tbk-c summary{cursor:pointer;color:#1f7a6c;font-weight:700;font-size:.82rem;list-style:none}" +
    ".tbk-c summary::-webkit-details-marker{display:none}.tbk-c summary:before{content:'＋ '}.tbk-c details[open] summary:before{content:'－ '}" +
    ".tbk-c details p{margin:6px 0 0}" +
    ".tbk-go{display:block;text-align:center;padding:9px 12px;border-radius:999px;background:#e07a2e;color:#fff!important;font-weight:800;font-size:.86rem;text-decoration:none!important;transition:background .15s,transform .15s}" +
    ".tbk-go:hover{background:#c8553d;transform:scale(1.03)}" +
    ".tbk-alt{display:block;text-align:center;margin-top:6px;font-size:.78rem;color:#1f7a6c!important;font-weight:700}" +
    ".tbk-f{margin-top:16px;display:flex;flex-wrap:wrap;gap:8px 16px;align-items:center;justify-content:space-between;font-size:.85rem}" +
    ".tbk-f a{color:#1f7a6c!important;font-weight:700;text-decoration:underline}.tbk-f small{color:#6b6456}" +
    "@media (max-width:600px){.tbk{padding:18px 12px}.tbk-g{grid-auto-columns:62%;gap:12px}.tbk-c{padding:10px}" +
    ".tbk.full .tbk-g{grid-template-columns:1fr;gap:14px}" +
    ".tbk.full .tbk-c{display:grid;grid-template-columns:110px 1fr;column-gap:12px;align-items:start}" +
    ".tbk.full .tbk-cv{grid-row:1/span 8;margin:0}.tbk.full .tbk-c>*:not(.tbk-cv){grid-column:2}}" +
    "@media (prefers-color-scheme:dark){.tbk{background:linear-gradient(135deg,#2a2519,#23261f 60%,#1c2a27);border-color:#6b5a3a;color:#f1ead9}" +
    ".tbk-c{background:#1f1d18;border-color:#4a412f}.tbk-bl,.tbk-c details,.tbk-in,.tbk-su,.tbk-f small{color:#cfc5ae}.tbk-tg,.tbk-h a,.tbk-f a,.tbk-alt,.tbk-c summary{color:#5fc2ae!important}}";

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function slugImg(k) { return HOST ? HOST + k + ".jpg" : AMZ_IMG + BOOKS[k].img + "._SY500_.jpg"; }

  function cardHtml(k, full) {
    var b = BOOKS[k], url = "https://www.amazon.com/dp/" + b.asin;
    return '<article class="tbk-c" itemscope itemtype="https://schema.org/Book">' +
      '<a class="tbk-cv" href="' + url + '" target="_blank" rel="noopener" data-track="Book: ' + esc(b.short) + '">' +
      '<img src="' + slugImg(k) + '" data-fb="' + AMZ_IMG + b.img + '._SY500_.jpg" alt="' + esc(b.title + " — book cover") + '" loading="lazy" width="333" height="500" itemprop="image">' +
      '<span class="ft">' + esc(b.title) + '</span></a>' +
      '<span class="tbk-tg">' + esc(b.tag) + '</span>' +
      '<span class="tbk-ti" itemprop="name">' + esc(b.title) + '</span>' +
      '<span class="tbk-su">' + esc(b.sub) + '</span>' +
      '<p class="tbk-bl" itemprop="description">' + esc(b.blurb) + '</p>' +
      (full ? '<p class="tbk-bl" style="flex:none">' + esc(b.more) + '</p>'
            : '<details><summary data-track="Book info: ' + esc(b.short) + '">About this book</summary><p>' + esc(b.more) + '</p></details>') +
      '<meta itemprop="author" content="T Roberts">' +
      '<a class="tbk-go" href="' + url + '" target="_blank" rel="noopener" itemprop="url" data-track="Book: ' + esc(b.short) + '">📖 Read on Amazon</a>' +
      (b.alt ? '<a class="tbk-alt" href="https://www.amazon.com/dp/' + b.alt.asin + '" target="_blank" rel="noopener" data-track="Book: ' + esc(b.short) + ' (' + b.alt.label + ')">Also in ' + esc(b.alt.label.toLowerCase()) + ' →</a>' : '') +
      '</article>';
  }

  function render(el) {
    if (el.getAttribute("data-done")) return;
    el.setAttribute("data-done", "1");
    var site = el.getAttribute("data-site") === "travel" ? "travel" : "english";
    var full = el.getAttribute("data-mode") === "full";
    var intro = site === "english"
      ? "Real books written in real English — a great way to practise your reading. Read a sample free on Amazon, then keep going on Kindle or in paperback."
      : "Stories, guides and ideas from the road — written by the founder of Backpacker Directory. Read a free sample on Amazon, on Kindle or in paperback.";
    el.innerHTML =
      '<section class="tbk' + (full ? " full" : "") + '" aria-label="Books by T Roberts" id="books">' +
      '<div class="tbk-h"><b>📚 Books by T Roberts</b>' + (full ? '' : '<a href="' + BOOKS_PAGE[site] + '" data-bd-noswap data-track="Books: see all">See all books →</a>') + '</div>' +
      '<p class="tbk-in">' + intro + '</p>' + (full ? '' : '<p class="tbk-hint">Scroll or swipe sideways to see all 7 books →</p>') +
      '<div class="tbk-g">' + ORDER[site].map(function (k) { return cardHtml(k, full); }).join("") + '</div>' +
      '<div class="tbk-f"><a href="' + AUTHOR + '" target="_blank" rel="noopener" data-track="Book: author page">Follow T Roberts on Amazon for new releases →</a>' +
      '<small>From the team behind I Learn English Here · Backpacker Directory · Online Business Awareness</small></div>' +
      '</section>';
    var imgs = el.querySelectorAll(".tbk-cv img");
    for (var i = 0; i < imgs.length; i++) imgs[i].addEventListener("error", onImgErr);
  }
  function onImgErr() {
    var img = this, fb = img.getAttribute("data-fb");
    if (fb && img.src !== fb) { img.src = fb; img.removeAttribute("data-fb"); return; }
    img.parentNode.classList.add("noimg");
  }

  function init() {
    if (!document.getElementById("tbk-style")) {
      var st = document.createElement("style");
      st.id = "tbk-style";
      st.textContent = css;
      document.head.appendChild(st);
    }
    var els = document.querySelectorAll(".tony-books");
    for (var i = 0; i < els.length; i++) render(els[i]);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  /* re-run after the Backpacker site's smooth page swaps */
  window.tonyBooksInit = init;
  try { new MutationObserver(function () { if (document.querySelector(".tony-books:not([data-done])")) init(); }).observe(document.body || document.documentElement, { childList: true, subtree: true }); } catch (e) {}
})();

/* OBA Analytics loader — Online Business Awareness (visitor + click stats for Tony's dashboard) */
(function(){if(window.__obaL)return;window.__obaL=1;var s=document.createElement('script');s.src='https://ilearnenglishhere.academy/assets/oba-analytics.js';s.defer=true;(document.head||document.documentElement).appendChild(s);})();
