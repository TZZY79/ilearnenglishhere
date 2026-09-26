/* Tony's Udemy courses banner — one file, used on every site and blog.
   Edit COURSES below to update links everywhere at once.
   Usage: <div class="tony-courses"></div><script src="https://ilearnenglishhere.academy/assets/courses-banner.js" defer></script>
   Optional: data-first="english|vegan|men" on the div to choose which course leads. */
(function () {
  var FREE_PAGE = "https://cryptoizfuture.blogspot.com/p/free-courses.html";
  var COURSES = {
    english: {
      emoji: "🇬🇧",
      tag: "English · All levels",
      title: "Learn British English: Speak Like a Local",
      blurb: "Real UK conversation, slang, accents & pronunciation for travel, work and daily life.",
      url: "https://www.udemy.com/course/learn-english-like-a-local-uk-culture-accents-real-life/?referralCode=3CB23BDB35F22F4058F0"
    },
    vegan: {
      emoji: "🥗",
      tag: "Cooking · Beginner",
      title: "Alkaline Vegan Cooking for Beginners",
      blurb: "Simple plant-based recipes, herbs and meal ideas — a practical lifestyle guide.",
      url: "https://www.udemy.com/course/alkaline-vegan-lifestyle-natural-healing-plant-based-nu/?referralCode=80A83BA81D3B467C9659"
    },
    men: {
      emoji: "💪",
      tag: "Self-development · All levels",
      title: "Man Studies: Self-Discipline, Confidence & Health",
      blurb: "Build discipline, confidence, healthy habits and better decisions — no fake motivation.",
      url: "https://www.udemy.com/course/man-studies-vol-1-build-discipline-confidence-health/?referralCode=DE71A14AC78A6791584F"
    }
  };

  var css =
    ".tcb{box-sizing:border-box;max-width:1100px;margin:28px auto;padding:20px 18px;border-radius:18px;" +
    "background:linear-gradient(135deg,#fff7e8 0%,#f3efe2 60%,#e7f3ef 100%);border:2px solid #e2c89a;" +
    "font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#2b2a26;text-align:left}" +
    ".tcb *{box-sizing:border-box}" +
    ".tcb-h{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:6px 14px;margin:0 0 14px}" +
    ".tcb-h b{font-size:1.15rem;letter-spacing:.2px}" +
    ".tcb-h span{font-size:.85rem;color:#6b6456}" +
    ".tcb-g{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}" +
    ".tcb-c{display:flex;flex-direction:column;gap:6px;padding:14px;border-radius:14px;background:#fff;" +
    "border:1px solid #eadcc2;text-decoration:none!important;color:inherit!important;transition:transform .15s,box-shadow .15s}" +
    ".tcb-c:hover{transform:translateY(-3px);box-shadow:0 8px 20px rgba(80,60,20,.14)}" +
    ".tcb-c .e{font-size:1.6rem;line-height:1}" +
    ".tcb-c .tg{font-size:.72rem;text-transform:uppercase;letter-spacing:.6px;color:#1f7a6c;font-weight:700}" +
    ".tcb-c .ti{font-weight:700;font-size:1rem;line-height:1.3}" +
    ".tcb-c .bl{font-size:.88rem;line-height:1.45;color:#534d42;flex:1}" +
    ".tcb-c .go{align-self:flex-start;margin-top:4px;padding:7px 12px;border-radius:999px;background:#e07a2e;color:#fff;font-weight:700;font-size:.85rem}" +
    ".tcb-f{margin-top:12px;display:flex;flex-wrap:wrap;gap:8px 16px;align-items:center;justify-content:space-between;font-size:.85rem}" +
    ".tcb-f a{color:#1f7a6c!important;font-weight:700;text-decoration:underline}" +
    ".tcb-f small{color:#6b6456}" +
    "@media (prefers-color-scheme:dark){.tcb{background:linear-gradient(135deg,#2a2519,#23261f 60%,#1c2a27);border-color:#6b5a3a;color:#f1ead9}" +
    ".tcb-c{background:#1f1d18;border-color:#4a412f}.tcb-c .bl,.tcb-h span,.tcb-f small{color:#cfc5ae}.tcb-c .tg,.tcb-f a{color:#5fc2ae!important}}";

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function render(el) {
    if (el.getAttribute("data-done")) return;
    el.setAttribute("data-done", "1");
    var order = ["english", "vegan", "men"];
    var first = el.getAttribute("data-first");
    if (first && COURSES[first]) order = [first].concat(order.filter(function (k) { return k !== first; }));
    var cards = order.map(function (k) {
      var c = COURSES[k];
      return '<a class="tcb-c" href="' + esc(c.url) + '" target="_blank" rel="noopener">' +
        '<span class="e" aria-hidden="true">' + c.emoji + '</span>' +
        '<span class="tg">' + esc(c.tag) + '</span>' +
        '<span class="ti">' + esc(c.title) + '</span>' +
        '<span class="bl">' + esc(c.blurb) + '</span>' +
        '<span class="go">View course on Udemy →</span></a>';
    }).join("");
    el.innerHTML =
      '<section class="tcb" aria-label="Online courses by Tony">' +
      '<div class="tcb-h"><b>🎓 Learn with Tony on Udemy</b><span>Lifetime access · learn at your own pace · on any device</span></div>' +
      '<div class="tcb-g">' + cards + '</div>' +
      '<div class="tcb-f"><a href="' + FREE_PAGE + '" target="_blank" rel="noopener">🎁 Free places this month — check what’s available</a>' +
      '<small>From the team behind I Learn English Here · Backpacker Directory · The Learning Centre</small></div>' +
      '</section>';
  }

  function init() {
    if (!document.getElementById("tcb-style")) {
      var st = document.createElement("style");
      st.id = "tcb-style";
      st.textContent = css;
      document.head.appendChild(st);
    }
    var els = document.querySelectorAll(".tony-courses");
    for (var i = 0; i < els.length; i++) render(els[i]);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
