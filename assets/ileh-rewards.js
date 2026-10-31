/* I Learn English Here — Rewards engine (loaded automatically by ileh.js on every page)
   • Lessons give a Mini Certificate (bronze) + Skill Keys — a small taste of the mission reward
   • Finishing a whole collection gives a Collection Certificate (silver)
   • Missions give a Gold Mission Certificate + a big Skill Crest; all 3 house parts = Grand Master certificate
   • "How did it go?" picks a different next step for each learner (practise / play / move on)
   • Reviews go to the Telegram group (through a private relay, so no bot token sits in this public code)
   Everything is stored only on the learner's device. Progress codes move it to another phone.
   © I Learn English Here · an Online Business Awareness project */
(function () {
  "use strict";
  if (window.ILEH_RW) return;
  var me = document.querySelector('script[src*="ileh-rewards.js"]') || document.querySelector('script[src*="ileh.js"]');
  var BASE = me ? me.src.replace(/assets\/ileh(-rewards)?\.js.*$/, "") : "/";
  var SITE = "https://ilearnenglishhere.academy/";

  /* ===== SETTINGS (Tony: fill these two in) =====
     REVIEW_EP  = the web-app URL of the Telegram relay (tools/telegram-review-relay.gs). Empty = reviews open Telegram instead.
     TG_GROUP   = public link to the group where reviews should appear, e.g. "https://t.me/yourgroup". */
  var REVIEW_EP = "";
  var TG_GROUP = "";
  var REVIEWS_ON = false; /* Telegram reviews switched off until the next phase — set to true to bring the button back */

  /* ===== Skills ===== */
  var SK = { R: ["📖", "Reading"], W: ["✍️", "Writing"], S: ["🗣️", "Speaking"], L: ["👂", "Listening"], G: ["🧩", "Grammar"], V: ["🔤", "Vocabulary"] };

  /* ===== Catalogue: every lesson, its skills and its collection ===== */
  var L = {
    "foundation": { t: "First Steps: Your First English", p: "foundation.html", s: "LVSR", c: "foundation" },
    "present-perfect": { t: "Present Perfect: Past → Now", p: "lessons/present-perfect.html", s: "GSV", c: "starter" },
    "stative-verbs": { t: "Stative Verbs + Go, Do & Play", p: "lessons/stative-verbs.html", s: "GVS", c: "starter" },
    "bring-words-to-life": { t: "Bring Words to Life", p: "lessons/bring-words-to-life.html", s: "RSL", c: "starter" },
    "hangman": { t: "Word Hangman", p: "lessons/hangman.html", s: "VR", c: "starter", game: 1 },
    "kpop-1": { t: "Love Stories: Romeo & Juliet × K-Pop", p: "mission/kpop-1.html", s: "RSVG", c: "starter" },
    "b1-grammar-vocabulary-review": { t: "B1 Grammar & Vocabulary Review", p: "lessons/b1-grammar-vocabulary-review.html", s: "GVL", c: "b1" },
    "b1-revision-slideshow": { t: "B1 Revision Slideshow", p: "lessons/b1-revision-slideshow.html", s: "GVR", c: "b1" },
    "b1-units-1-2-quiz": { t: "Grammar & Vocabulary Quiz", p: "lessons/b1-units-1-2-quiz.html", s: "GVW", c: "b1" },
    "grammar-review-worksheet": { t: "Grammar Review Worksheet", p: "lessons/grammar-review-worksheet.html", s: "GW", c: "b1" },
    "fitness-health": { t: "Fitness & Health", p: "lessons/fitness-health.html", s: "VGS", c: "b1" },
    "debate-guide": { t: "Debate Guide", p: "lessons/debate-guide.html", s: "SLW", c: "talk" },
    "advice-suggestions-games": { t: "Advice & Suggestions Games", p: "lessons/advice-suggestions-games.html", s: "SG", c: "talk" },
    "game-hub": { t: "Game Hub", p: "lessons/game-hub.html", s: "SVG", c: "talk" },
    "plans-predictions-games": { t: "Plans & Predictions — 5 Games", p: "lessons/plans-predictions-games.html", s: "SG", c: "talk" },
    "plans-predictions-worksheet": { t: "Plans & Predictions Worksheet", p: "lessons/plans-predictions-worksheet.html", s: "WG", c: "talk" },
    "team-revision-battle": { t: "Team Revision Battle", p: "lessons/team-revision-battle.html", s: "GVS", c: "talk" },
    "english-story": { t: "The Story of English", p: "english-story.html", s: "RLV", c: "talk" },
    "real-england": { t: "Real England: Everyday Conversations", p: "real-england.html", s: "LSVR", c: "talk" }
  };
  var C = {
    foundation: { t: "First Steps (Foundation)", lvl: "Pre-A1", note: "Your very first English words, phrases and sentence." },
    starter: { t: "Starter Steps", lvl: "A1–A2", note: "Your first big step in English." },
    b1: { t: "B1 Grammar & Vocabulary", lvl: "B1", note: "The grammar engine of everyday English." },
    talk: { t: "Talk, Play & Culture", lvl: "B1", note: "Speaking with confidence — the British way." }
  };
  /* Missions: need = the skills the mission tests (shown as a readiness bar) */
  var M = {
    "precision-1": { t: "AAA: Apex Articulation Arena", need: "WGV", lvl: "B1+" },
    "britain-1": { t: "The Great British Adventure", need: "RWSV", lvl: "B1–B2" },
    "creator-1": { t: "Creator Academy: Series 1", need: "RWSV", lvl: "B2" },
    "royal-1": { t: "The Royal Saga", need: "RGSL", lvl: "B2–C1" },
    "executive-1": { t: "The Executive Ascent", need: "RWSG", lvl: "C1" },
    "house-1": { t: "Buying a Home in England — Part 1", need: "RWGV", lvl: "C1–C2", part: "house" },
    "house-2": { t: "Buying a Home in England — Part 2", need: "RWGV", lvl: "C1–C2", part: "house" },
    "house-3": { t: "Buying a Home in England — Part 3", need: "RWGV", lvl: "C1–C2", part: "house" }
  };
  var GRAND = { house: { t: "Buying a Home in England — Complete Mission", parts: ["house-1", "house-2", "house-3"] } };

  var page = (location.pathname.split("/").pop() || "index").replace(/\.html?$/, "") || "index";
  var isLesson = !!L[page], isMission = !!M[page];

  /* ===== Storage ===== */
  var KEY = "ileh.rw.v1";
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  var R = load(); R.done = R.done || {}; R.keys = R.keys || {}; R.certs = R.certs || []; R.rev = R.rev || {};
  function save() { try { localStorage.setItem(KEY, JSON.stringify(R)); } catch (e) {} }

  /* ===== Helpers ===== */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function today() { return new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }); }
  function code(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return "ILEH-" + (h >>> 0).toString(36).toUpperCase().slice(0, 6); }
  function track(l, v) { try { if (window.obaTrack) window.obaTrack("reward", l, v); } catch (e) {} }
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ===== Styles ===== */
  var css = ".rw,.rw *{box-sizing:border-box}.rw{--ink:#132a2e;--acc:#1f7a6c;--acc2:#e0a548;--line:#dbe8e5;--soft:#3f5a56;--paper:#f6faf9;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:var(--ink)}" +
    ".rw-finish{max-width:760px;margin:2.2rem auto 1rem;padding:0 16px;position:relative;z-index:2;text-align:left}" +
    ".rw-card{background:#fff;border:2px solid var(--acc);border-radius:18px;padding:1.2rem;box-shadow:0 12px 30px rgba(19,42,46,.12)}" +
    ".rw-card h2{margin:0 0 .3rem;font-size:1.25rem}.rw-card p{margin:.3rem 0;line-height:1.5;color:var(--soft)}" +
    ".rw-btn{cursor:pointer;border:0;border-radius:999px;padding:.7em 1.3em;font:700 .95rem system-ui,sans-serif;background:var(--acc);color:#fff;text-decoration:none;display:inline-block;transition:transform .15s,background .15s}" +
    ".rw-btn:hover{background:#175f54;transform:translateY(-1px)}.rw-btn[disabled]{background:#9db3af;cursor:not-allowed;transform:none}" +
    ".rw-btn.alt{background:#fff;color:var(--acc);border:2px solid var(--acc)}.rw-btn.gold{background:var(--acc2);color:var(--ink)}" +
    ".rw-row{display:flex;flex-wrap:wrap;gap:.5rem;margin:.8rem 0 .2rem;align-items:center}" +
    ".rw-bar{height:10px;border-radius:99px;background:#e6efed;overflow:hidden;margin:.5rem 0}.rw-bar i{display:block;height:100%;background:linear-gradient(90deg,var(--acc),var(--acc2));border-radius:99px;transition:width .6s}" +
    ".rw-keys{display:flex;flex-wrap:wrap;gap:.35rem;margin:.4rem 0}.rw-key{font-size:.8rem;font-weight:700;padding:.25em .7em;border-radius:99px;background:#fdf3e1;border:1.5px solid #f0d9a8}" +
    ".rw-modal{position:fixed;inset:0;z-index:2147483000;background:rgba(19,42,46,.6);display:flex;align-items:center;justify-content:center;padding:16px;overflow:auto}" +
    ".rw-box{background:#fff;border-radius:20px;max-width:560px;width:100%;padding:1.3rem;position:relative;max-height:94vh;overflow:auto;animation:rw-pop .45s cubic-bezier(.2,1.6,.4,1)}" +
    ".rw-box h3{margin:.2rem 0 .4rem;font-size:1.3rem}.rw-x{position:absolute;top:8px;right:12px;border:0;background:none;font-size:1.5rem;cursor:pointer;color:var(--ink)}" +
    ".rw-medal{font-size:4rem;text-align:center;line-height:1;animation:rw-spin 1.2s ease-out}" +
    ".rw-cert{width:100%;border-radius:10px;border:1px solid var(--line);margin:.6rem 0;display:block}" +
    ".rw-in{width:100%;padding:.65em .8em;border:2px solid var(--line);border-radius:10px;font:1rem system-ui,sans-serif;margin:.3rem 0}.rw-in:focus{outline:0;border-color:var(--acc)}" +
    ".rw-stars{display:flex;gap:.2rem;font-size:2rem}.rw-stars button{border:0;background:none;cursor:pointer;filter:grayscale(1);opacity:.45;transition:transform .15s}.rw-stars button.on{filter:none;opacity:1}.rw-stars button:hover{transform:scale(1.2)}" +
    ".rw-feel{display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem;margin:.6rem 0}.rw-feel button{border:2px solid var(--line);background:var(--paper);border-radius:14px;padding:.7rem .3rem;cursor:pointer;font:600 .85rem system-ui,sans-serif;color:var(--ink)}.rw-feel button span{display:block;font-size:1.8rem}.rw-feel button:hover,.rw-feel button.on{border-color:var(--acc);background:#e8f4f1}" +
    ".rw-route{display:grid;gap:.5rem;margin:.6rem 0}.rw-route a{display:flex;gap:.7rem;align-items:center;padding:.7rem .9rem;border:2px solid var(--line);border-radius:14px;text-decoration:none;color:var(--ink);background:#fff}.rw-route a:hover{border-color:var(--acc)}.rw-route a b{display:block}.rw-route a small{color:var(--soft)}.rw-route a span{font-size:1.6rem}" +
    ".rw-note{font-size:.8rem;color:var(--soft)}.rw-ok{color:#1f7a6c;font-weight:700}.rw-err{color:#a8321e;font-weight:700}" +
    ".rw-confetti{position:fixed;inset:0;pointer-events:none;z-index:2147483001}" +
    "@keyframes rw-pop{from{transform:scale(.7);opacity:0}to{transform:none;opacity:1}}@keyframes rw-spin{from{transform:rotateY(0) scale(.3)}to{transform:rotateY(720deg) scale(1)}}" +
    "@media (prefers-reduced-motion:reduce){.rw-box,.rw-medal{animation:none}}" +
    "nav.main a.rw-nav{font-weight:700}";
  document.head.appendChild(el("style", null, css));

  /* ===== Sound + confetti ===== */
  function chime(big) {
    try {
      var A = window.AudioContext || window.webkitAudioContext; if (!A) return; var a = new A();
      var notes = big ? [523, 659, 784, 1047, 1319] : [659, 784, 1047];
      notes.forEach(function (f, i) { var o = a.createOscillator(), g = a.createGain(); o.type = "triangle"; o.frequency.value = f; o.connect(g); g.connect(a.destination); var t = a.currentTime + i * .12; g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.18, t + .02); g.gain.exponentialRampToValueAtTime(.001, t + .5); o.start(t); o.stop(t + .55); });
    } catch (e) {}
  }
  function confetti(n) {
    if (reduce) return;
    var c = el("canvas", "rw-confetti"); document.body.appendChild(c); var x = c.getContext("2d"), W = c.width = innerWidth, H = c.height = innerHeight;
    var cols = ["#1f7a6c", "#e0a548", "#ffd68a", "#132a2e", "#ff8a65", "#7bc4b5"], P = [];
    for (var i = 0; i < (n || 160); i++) P.push({ x: W / 2 + (Math.random() - .5) * W * .3, y: H * .35, vx: (Math.random() - .5) * 14, vy: -Math.random() * 14 - 4, r: Math.random() * 6 + 4, c: cols[i % cols.length], a: Math.random() * 6, s: Math.random() * .3 - .15 });
    var t0 = performance.now();
    (function f(t) { x.clearRect(0, 0, W, H); P.forEach(function (p) { p.vy += .35; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.a += p.s; x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.c; x.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); x.restore(); }); if (t - t0 < 3500) requestAnimationFrame(f); else c.remove(); })(t0);
  }

  /* ===== Certificate (canvas → PNG) ===== */
  var TIERS = {
    mini: { name: "Mini Certificate", medal: "🥉", c1: "#b87333", c2: "#e3a875", lab: "LESSON COMPLETE" },
    coll: { name: "Collection Certificate", medal: "🥈", c1: "#7d8b93", c2: "#cfd8dc", lab: "COLLECTION COMPLETE" },
    mission: { name: "Gold Mission Certificate", medal: "🥇", c1: "#b8860b", c2: "#e0a548", lab: "MISSION ACCOMPLISHED" },
    grand: { name: "Grand Master Certificate", medal: "🏆", c1: "#1f7a6c", c2: "#e0a548", lab: "GRAND MASTER MISSION" }
  };
  var logoImg = new Image(); logoImg.src = BASE + "assets/oba-logo.svg";
  function wrap(x, text, cx, y, maxW, lh) { var words = text.split(" "), line = "", lines = []; words.forEach(function (w) { var t = line ? line + " " + w : w; if (x.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t; }); lines.push(line); lines.forEach(function (l, i) { x.fillText(l, cx, y + i * lh); }); return lines.length; }
  function drawCert(cert) {
    var T = TIERS[cert.type], W = 1600, H = 1130, c = document.createElement("canvas"); c.width = W; c.height = H; var x = c.getContext("2d");
    x.fillStyle = "#fffdf7"; x.fillRect(0, 0, W, H);
    var g = x.createLinearGradient(0, 0, W, H); g.addColorStop(0, T.c1); g.addColorStop(.5, T.c2); g.addColorStop(1, T.c1);
    x.strokeStyle = g; x.lineWidth = 34; x.strokeRect(30, 30, W - 60, H - 60);
    x.strokeStyle = "#1f7a6c"; x.lineWidth = 3; x.strokeRect(70, 70, W - 140, H - 140);
    x.globalAlpha = .06; x.fillStyle = "#1f7a6c"; x.font = "bold 520px Georgia"; x.textAlign = "center"; x.fillText("E", W / 2, H / 2 + 190); x.globalAlpha = 1;
    x.fillStyle = "#1f7a6c"; roundRect(x, W / 2 - 46, 105, 92, 92, 20); x.fill(); x.fillStyle = "#fff"; x.font = "bold 64px Georgia"; x.fillText("E", W / 2, 174);
    x.fillStyle = "#132a2e"; x.font = "bold 34px system-ui,Arial"; x.fillText("I LEARN ENGLISH HERE", W / 2, 250);
    x.fillStyle = T.c1; x.font = "bold 26px system-ui,Arial"; x.fillText(T.lab, W / 2, 300);
    x.fillStyle = "#132a2e"; x.font = "italic 64px Georgia"; x.fillText(T.name, W / 2, 390);
    x.fillStyle = "#3f5a56"; x.font = "30px Georgia"; x.fillText("This certifies that", W / 2, 460);
    x.fillStyle = "#132a2e"; x.font = "bold 84px Georgia"; x.fillText(cert.name || "A Proud Learner", W / 2, 560);
    x.strokeStyle = T.c2; x.lineWidth = 3; x.beginPath(); x.moveTo(W / 2 - 380, 590); x.lineTo(W / 2 + 380, 590); x.stroke();
    x.fillStyle = "#3f5a56"; x.font = "30px Georgia"; x.fillText(cert.type === "mini" ? "has successfully completed the lesson" : cert.type === "coll" ? "has completed every lesson in the collection" : "has completed the real-life English mission", W / 2, 650);
    x.fillStyle = "#1f7a6c"; x.font = "bold 50px Georgia"; var n = wrap(x, "“" + cert.title + "”", W / 2, 725, 1250, 60);
    var y = 725 + n * 60 + 10;
    if (cert.skills) { x.fillStyle = "#3f5a56"; x.font = "28px system-ui,Arial"; x.fillText("Skills shown: " + cert.skills, W / 2, y); }
    x.font = "26px system-ui,Arial"; x.fillStyle = "#132a2e"; x.textAlign = "left"; x.fillText("Date: " + cert.date, 150, H - 175); x.fillText("Certificate code: " + cert.code, 150, H - 137);
    x.textAlign = "right"; x.fillText("ilearnenglishhere.academy", W - 150, H - 175); x.fillStyle = "#54706c"; x.font = "22px system-ui,Arial"; x.fillText("An Online Business Awareness project", W - 150, H - 137);
    if (logoImg.complete && logoImg.naturalWidth) try { var lh = 110, lw = lh * logoImg.naturalWidth / logoImg.naturalHeight; x.drawImage(logoImg, W - 150 - lw, H - 320, lw, lh); } catch (e) {}
    x.textAlign = "center"; x.font = "110px serif"; x.fillText(T.medal, 230, 250); x.fillText(T.medal, W - 230, 250);
    x.fillStyle = "#7d938f"; x.font = "19px system-ui,Arial"; x.fillText("A learning-achievement certificate from a free English website — not an official exam qualification.", W / 2, H - 92);
    return c;
  }
  function roundRect(x, a, b, w, h, r) { x.beginPath(); x.moveTo(a + r, b); x.arcTo(a + w, b, a + w, b + h, r); x.arcTo(a + w, b + h, a, b + h, r); x.arcTo(a, b + h, a, b, r); x.arcTo(a, b, a + w, b, r); x.closePath(); }
  function certFile(cert, cb) { var c = drawCert(cert); if (c.toBlob) c.toBlob(function (b) { cb(b, c); }, "image/png"); else cb(null, c); }
  function downloadCert(cert) {
    certFile(cert, function (blob, c) {
      var a = document.createElement("a"); a.download = "ILEH-" + cert.type + "-certificate-" + cert.code + ".png";
      a.href = blob ? URL.createObjectURL(blob) : c.toDataURL("image/png"); document.body.appendChild(a); a.click(); a.remove(); track("cert-download", cert.type);
    });
  }
  function shareCert(cert) {
    var txt = "🎉 I just earned a " + TIERS[cert.type].name + " for “" + cert.title + "” on I Learn English Here — free English lessons for everyone! " + SITE;
    certFile(cert, function (blob) {
      try {
        var f = blob && new File([blob], "my-english-certificate.png", { type: "image/png" });
        if (f && navigator.canShare && navigator.canShare({ files: [f] })) { navigator.share({ files: [f], text: txt }).catch(function () {}); track("cert-share", cert.type); return; }
      } catch (e) {}
      if (navigator.share) navigator.share({ text: txt, url: SITE }).catch(function () {}); else window.open("https://wa.me/?text=" + encodeURIComponent(txt), "_blank", "noopener");
      track("cert-share", cert.type);
    });
  }

  /* ===== Award logic ===== */
  function skillsText(s) { return s.split("").map(function (k) { return SK[k][1]; }).join(" · "); }
  function addKeys(s, n) { s.split("").forEach(function (k) { R.keys[k] = (R.keys[k] || 0) + n; }); }
  function makeCert(type, id, title, skills) {
    var exist = R.certs.filter(function (c) { return c.type === type && c.id === id; })[0]; if (exist) return exist;
    var c = { type: type, id: id, title: title, skills: skills, date: today(), name: R.name || "" }; c.code = code(type + id + c.date + c.name + Math.random());
    R.certs.push(c); save(); return c;
  }
  function collectionStatus(cid) { var ids = Object.keys(L).filter(function (k) { return L[k].c === cid; }); var d = ids.filter(function (k) { return R.done[k]; }); return { ids: ids, done: d.length, total: ids.length }; }
  function readiness(mid) { var need = M[mid].need.split(""), have = 0; need.forEach(function (k) { have += Math.min(R.keys[k] || 0, 5); }); return Math.round(100 * have / (need.length * 5)); }

  function complete(feel) {
    var first = !R.done[page], out = [];
    var info = isLesson ? L[page] : M[page];
    R.done[page] = { d: Date.now(), f: feel };
    if (first) {
      if (isLesson) { addKeys(info.s, 1); out.push(makeCert("mini", page, info.t, skillsText(info.s))); }
      else { addKeys(info.need, 3); out.push(makeCert("mission", page, info.t, skillsText(info.need))); }
      if (isLesson) { var cs = collectionStatus(info.c); if (cs.done === cs.total) out.push(makeCert("coll", info.c, C[info.c].t + " (" + C[info.c].lvl + ")", "All lessons in the collection")); }
      if (isMission && info.part) { var gp = GRAND[info.part]; if (gp.parts.every(function (p) { return R.done[p]; })) { addKeys("RWSLGV", 2); out.push(makeCert("grand", info.part, gp.t, "Reading · Writing · Speaking · Listening · Grammar · Vocabulary")); } }
    }
    save(); track("complete", page + ":" + feel);
    return out;
  }

  /* ===== Modal ===== */
  var modal;
  function openModal(html, onClick) {
    closeModal(); try { speechSynthesis.cancel(); } catch (e) {} modal = el("div", "rw rw-modal"); modal.setAttribute("role", "dialog"); modal.setAttribute("aria-modal", "true");
    modal.innerHTML = '<div class="rw-box"><button class="rw-x" aria-label="Close">✕</button>' + html + "</div>";
    document.body.appendChild(modal);
    modal.addEventListener("click", function (e) { if (e.target === modal || e.target.closest(".rw-x")) return closeModal(); if (onClick) onClick(e); });
    return modal;
  }
  function closeModal() { if (modal) { modal.remove(); modal = null; } }

  /* ===== Different next steps for different learners ===== */
  function nextLesson() {
    var order = Object.keys(L); var i = order.indexOf(page);
    for (var j = 1; j <= order.length; j++) { var k = order[(i + j) % order.length]; if (!R.done[k]) return k; }
    return null;
  }
  function routes(feel) {
    var info = isLesson ? L[page] : M[page], nx = nextLesson(), list = [];
    if (feel === 1) {
      list.push(["🧭", "Fix the tricky parts with the Coach", "The Coach builds a mini-lesson from your mistakes.", "coach.html"]);
      list.push(["🔁", "Do this lesson again — slowly", "Second time is always easier. Use the ❓ and 🤷 buttons.", location.pathname.split("/").pop()]);
      list.push(["🎯", "Play Word Hangman", "Relaxed vocabulary practice.", "lessons/hangman.html"]);
    } else if (feel === 2) {
      list.push(["🎯", "Lock it in with Word Hangman", "Quick game — words from your lessons.", "lessons/hangman.html"]);
      list.push(["🗣️", "Say the new words in the Speech Lab", "Hear them, slow them down, copy them.", "speak.html"]);
      if (nx) list.push(["➡️", "Next: " + L[nx].t, "Keep your streak going.", L[nx].p]);
    } else {
      if (nx) list.push(["🚀", "Next: " + L[nx].t, "You're ready — keep climbing.", L[nx].p]);
      var best = bestMission(); if (best) list.push(["🗺️", "Check your mission readiness", best.t + " — you're " + best.r + "% ready.", "achievements.html#missions"]);
      list.push(["📤", "Teach a friend", "Explaining it to someone is the best practice. Share the site.", "#share"]);
    }
    return list.map(function (r) { var href = r[3].indexOf("#share") === 0 ? "#share" : (/^#|^\//.test(r[3]) ? r[3] : BASE + r[3]); return '<a href="' + href + '"' + (href === "#share" ? ' data-share="1"' : "") + "><span>" + r[0] + "</span><div><b>" + esc(r[1]) + "</b><small>" + esc(r[2]) + "</small></div></a>"; }).join("");
  }
  function bestMission() { var best = null; Object.keys(M).forEach(function (m) { if (R.done[m]) return; var r = readiness(m); if (!best || r > best.r) best = { id: m, t: M[m].t, r: r }; }); return best; }

  /* ===== Celebration flow ===== */
  function celebrate(certs, feel) {
    var top = certs.slice().sort(function (a, b) { return ["mini", "coll", "mission", "grand"].indexOf(b.type) - ["mini", "coll", "mission", "grand"].indexOf(a.type); })[0];
    var big = top && top.type !== "mini";
    chime(big); confetti(big ? 260 : 140);
    var info = isLesson ? L[page] : M[page];
    var keys = (isLesson ? info.s : info.need).split("").map(function (k) { return '<span class="rw-key">' + SK[k][0] + " +" + (isLesson ? 1 : 3) + " " + SK[k][1] + " key</span>"; }).join("");
    var head = top ? '<div class="rw-medal">' + TIERS[top.type].medal + "</div><h3 style=\"text-align:center\">" + (top.type === "grand" ? "GRAND MASTER! You finished the hardest mission on the site." : top.type === "mission" ? "Mission accomplished! 🎉" : top.type === "coll" ? "Collection complete — Silver Certificate!" : "Lesson complete — well done!") + "</h3>"
      : '<div class="rw-medal">⭐</div><h3 style="text-align:center">Great review session!</h3><p style="text-align:center">You already hold this certificate — practice makes it stick.</p>';
    var missionTeaser = "";
    if (isLesson) {
      var b = bestMission();
      if (b) missionTeaser = '<p><b>🗺️ Road to the missions:</b> every lesson gives you Skill Keys. Missions test all your skills together — and give a <b>Gold Certificate</b>. You are <b>' + b.r + '%</b> ready for <i>' + esc(b.t) + '</i>.</p><div class="rw-bar"><i style="width:' + b.r + '%"></i></div>';
    }
    var nameRow = R.name ? "" : '<p><b>Your name for the certificate:</b></p><input class="rw-in" id="rw-name" maxlength="40" placeholder="First name (or a nickname)" autocomplete="given-name">';
    var html = head + '<div class="rw-keys" style="justify-content:center">' + keys + "</div>" + missionTeaser +
      (top ? nameRow + '<canvas class="rw-cert" id="rw-cv"></canvas><div class="rw-row" style="justify-content:center"><button class="rw-btn" data-a="dl">⬇️ Save certificate</button><button class="rw-btn alt" data-a="share">📤 Share it</button></div>' : "") +
      '<h3 style="margin-top:1rem">What next? (picked for you)</h3><div class="rw-route">' + routes(feel) + "</div>" +
      '<div class="rw-row" style="justify-content:center">' + (REVIEWS_ON ? '<button class="rw-btn gold" data-a="review">⭐ Write a review for the group</button>' : '') + '<a class="rw-btn alt" href="' + BASE + 'achievements.html">🏆 My awards</a></div>';
    openModal(html, function (e) {
      var a = e.target.closest("[data-a]"), s = e.target.closest("[data-share]");
      if (s) { e.preventDefault(); closeModal(); if (window.ILEH && ILEH.openShare) ILEH.openShare(); return; }
      if (!a) return;
      if (a.dataset.a === "dl") downloadCert(top); else if (a.dataset.a === "share") shareCert(top); else if (a.dataset.a === "review") openReview();
    });
    function paint() { var cv = document.getElementById("rw-cv"); if (!cv || !top) return; var c = drawCert(top); cv.width = c.width; cv.height = c.height; cv.getContext("2d").drawImage(c, 0, 0); }
    paint(); logoImg.onload = paint;
    var ni = document.getElementById("rw-name");
    if (ni) ni.addEventListener("input", function () { R.name = ni.value.trim().slice(0, 40); certs.forEach(function (c) { c.name = R.name; }); save(); paint(); });
  }

  /* ===== Reviews → Telegram group ===== */
  var BAD = /\b(fuck|shit|bitch|cunt|dick|porn|sex|nigg|fag|slut|whore|kill yourself)\w*/i;
  function openReview() {
    var info = isLesson ? L[page] : M[page], stars = 5;
    var html = "<h3>⭐ Review: " + esc(info.t) + "</h3><p>Tell other learners what you thought. Short and kind is perfect. <span class=\"rw-note\">Reviews are checked before they appear in the group.</span></p>" +
      '<div class="rw-stars">' + [1, 2, 3, 4, 5].map(function (n) { return '<button data-st="' + n + '" class="on" aria-label="' + n + ' stars">⭐</button>'; }).join("") + "</div>" +
      '<textarea class="rw-in" id="rw-txt" rows="4" maxlength="300" placeholder="Example: The quiz helped me understand \'since\' and \'for\'. The slides were clear!"></textarea>' +
      '<input class="rw-in" id="rw-who" maxlength="30" placeholder="First name (optional)" value="' + esc(R.name || "") + '">' +
      '<input class="rw-in" id="rw-from" maxlength="30" placeholder="Country (optional)">' +
      '<p class="rw-note">💡 Writing practice: use one full sentence with a verb, e.g. "I learned…", "I liked…", "It helped me…". Please don\'t write phone numbers, emails or links.</p>' +
      '<div class="rw-row"><button class="rw-btn" data-a="send">Send review</button><span id="rw-msg"></span></div>';
    openModal(html, function (e) {
      var s = e.target.closest("[data-st]");
      if (s) { stars = +s.dataset.st; modal.querySelectorAll("[data-st]").forEach(function (b) { b.classList.toggle("on", +b.dataset.st <= stars); }); return; }
      var a = e.target.closest("[data-a]"); if (!a || a.dataset.a !== "send") return;
      var txt = document.getElementById("rw-txt").value.trim(), who = document.getElementById("rw-who").value.trim(), from = document.getElementById("rw-from").value.trim(), msg = document.getElementById("rw-msg");
      if (txt.split(/\s+/).length < 4) { msg.className = "rw-err"; msg.textContent = "Please write at least one sentence (4+ words)."; return; }
      if (BAD.test(txt + " " + who) || /(https?:|www\.|@\w|\d{6,})/i.test(txt + " " + who + " " + from)) { msg.className = "rw-err"; msg.textContent = "Please remove links, contact details or unkind words."; return; }
      var payload = { k: "review", lesson: info.t, page: page, stars: stars, text: txt, name: who, country: from, url: location.href.split("#")[0] };
      var line = "⭐".repeat(stars) + " " + info.t + "\n“" + txt + "”\n— " + (who || "A learner") + (from ? ", " + from : "") + "\n" + SITE;
      R.rev[page] = 1; save(); track("review", page + ":" + stars);
      if (REVIEW_EP) {
        a.disabled = true; msg.className = ""; msg.textContent = "Sending…";
        fetch(REVIEW_EP, { method: "POST", mode: "no-cors", body: JSON.stringify(payload) }).then(function () { msg.className = "rw-ok"; msg.textContent = "Thank you! Your review has been sent to the group. 🙌"; }).catch(function () { msg.className = "rw-err"; msg.textContent = "Couldn't send — check your internet and try again."; a.disabled = false; });
      } else {
        try { navigator.clipboard.writeText(line); } catch (e2) {}
        msg.className = "rw-ok"; msg.textContent = "Review copied ✓ Opening Telegram — paste it there.";
        window.open(TG_GROUP || ("https://t.me/share/url?url=" + encodeURIComponent(SITE) + "&text=" + encodeURIComponent(line)), "_blank", "noopener");
      }
    });
  }

  /* ===== The "Finish" card at the end of every lesson / mission ===== */
  var need = isMission ? 480 : (L[page] && L[page].game ? 90 : 120), answers = 0, sec = 0;
  var tKey = "rw.t." + page; try { sec = +sessionStorage.getItem(tKey) || 0; } catch (e) {}
  function unlocked() { return sec >= need || answers >= (isMission ? 15 : 6) || R.done[page]; }
  function finishCard() {
    var info = isLesson ? L[page] : M[page];
    var wrapEl = el("section", "rw rw-finish"); wrapEl.id = "rw-finish";
    var tier = isMission ? "🥇 Gold Mission Certificate" : "🥉 Mini Certificate";
    var cs = isLesson ? collectionStatus(info.c) : null;
    wrapEl.innerHTML = '<div class="rw-card"><h2>' + (R.done[page] ? "✅ You've finished this " + (isMission ? "mission" : "lesson") + " before" : "🏁 Finished the " + (isMission ? "mission" : "lesson") + "?") + "</h2>" +
      "<p>Claim your <b>" + tier + "</b> and Skill Keys: " + (isLesson ? info.s : info.need).split("").map(function (k) { return SK[k][0] + " " + SK[k][1]; }).join(", ") + ".</p>" +
      (cs ? "<p>📚 Collection <b>" + C[info.c].t + "</b>: " + cs.done + " / " + cs.total + " done — finish them all for a 🥈 Silver Certificate.</p><div class=\"rw-bar\"><i style=\"width:" + Math.round(100 * cs.done / cs.total) + "%\"></i></div>" : "") +
      "<p><b>How did it go?</b></p><div class=\"rw-feel\"><button data-f=\"1\"><span>😕</span>Hard for me</button><button data-f=\"2\"><span>🙂</span>Okay</button><button data-f=\"3\"><span>😎</span>Easy!</button></div>" +
      '<div class="rw-row"><button class="rw-btn" data-a="claim" disabled>🎓 Claim my certificate</button><span class="rw-note" id="rw-lock"></span></div></div>';
    var feel = 0, btn = wrapEl.querySelector("[data-a=claim]"), lock = wrapEl.querySelector("#rw-lock");
    function refresh() {
      var ok = unlocked() && feel;
      btn.disabled = !ok;
      if (!unlocked()) { var left = Math.max(0, need - sec); lock.textContent = "⏳ Work through the " + (isMission ? "mission" : "lesson") + " first — unlocks in about " + Math.ceil(left / 60) + " min (or after answering more questions)."; }
      else lock.textContent = feel ? "" : "Choose how it went first 👆";
    }
    wrapEl.addEventListener("click", function (e) {
      var f = e.target.closest("[data-f]");
      if (f) { feel = +f.dataset.f; wrapEl.querySelectorAll("[data-f]").forEach(function (b) { b.classList.toggle("on", b === f); }); refresh(); return; }
      if (e.target.closest("[data-a=claim]") && !btn.disabled) { var certs = complete(feel); celebrate(certs, feel); }
    });
    var don = document.querySelector(".ileh-don");
    if (don && don.parentNode) don.parentNode.insertBefore(wrapEl, don); else document.body.appendChild(wrapEl);
    setInterval(function () { if (document.visibilityState === "visible") { sec++; if (sec % 5 === 0) try { sessionStorage.setItem(tKey, sec); } catch (e) {} if (sec % 15 === 0 || sec === need) refresh(); } }, 1000);
    refresh();
    window.ILEH_RW._refresh = refresh;
  }

  /* count answers the lesson reports to the mini brain */
  function hookLog() {
    if (!window.ILEH || !ILEH.log || ILEH.log._rw) return;
    var orig = ILEH.log; ILEH.log = function () { answers++; if (window.ILEH_RW._refresh) ILEH_RW._refresh(); return orig.apply(this, arguments); }; ILEH.log._rw = 1;
  }

  /* trophy link in the main menu */
  function navLink() {
    var nav = document.querySelector("nav.main"); if (!nav || nav.querySelector(".rw-nav")) return;
    var n = R.certs.length, a = el("a", "rw-nav", "🏆" + (n ? " " + n : " Awards")); a.href = BASE + "achievements.html"; a.title = "My certificates & progress";
    if (page === "achievements") a.setAttribute("aria-current", "page");
    var cta = nav.querySelector(".nav-cta"); nav.insertBefore(a, cta || null);
  }

  /* ===== Progress codes (move progress to another phone) ===== */
  function exportCode() { var d = { rw: R }; try { d.p = JSON.parse(localStorage.getItem("ileh.v1")); } catch (e) {} return btoa(unescape(encodeURIComponent(JSON.stringify(d)))); }
  function importCode(s) {
    var d = JSON.parse(decodeURIComponent(escape(atob(String(s).trim())))); if (!d || !d.rw) throw new Error("bad");
    var inc = d.rw; inc.done = inc.done || {}; inc.keys = inc.keys || {}; inc.certs = inc.certs || [];
    Object.keys(inc.done).forEach(function (k) { if (!R.done[k]) R.done[k] = inc.done[k]; });
    Object.keys(inc.keys).forEach(function (k) { R.keys[k] = Math.max(R.keys[k] || 0, inc.keys[k]); });
    inc.certs.forEach(function (c) { if (!R.certs.some(function (x) { return x.code === c.code; })) R.certs.push(c); });
    if (!R.name && inc.name) R.name = inc.name; save();
    if (d.p) try { if (!localStorage.getItem("ileh.v1")) localStorage.setItem("ileh.v1", JSON.stringify(d.p)); } catch (e) {}
  }

  window.ILEH_RW = { data: R, save: save, L: L, C: C, M: M, SK: SK, TIERS: TIERS, GRAND: GRAND, readiness: readiness, collectionStatus: collectionStatus, drawCert: drawCert, downloadCert: downloadCert, shareCert: shareCert, exportCode: exportCode, importCode: importCode, openReview: openReview, confetti: confetti, chime: chime, base: BASE, esc: esc };

  function init() { navLink(); if (isLesson || isMission) { finishCard(); hookLog(); setTimeout(hookLog, 1500); } }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(init, 50); }); else setTimeout(init, 50);
})();
