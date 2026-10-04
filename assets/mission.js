/* I Learn English Here — Special Missions engine
   • Registry of all Special Missions in order of difficulty (window.ILEH_MISSIONS)
   • Locked missions: 49% of every slide is hidden behind a blur and tasks can't be done until the
     readiness test is passed "the right way" (signed result, score above the mission's level)
   • Unlocked: answer box under every task, autosave + resume, download / load / share / print your work
   © I Learn English Here · an Online Business Awareness project */
(function () {
  "use strict";
  var MISSIONS = window.ILEH_MISSIONS = [
    { id: "kpop", icon: "🎤", title: "K-Pop Love Stories", level: "A2–B1", min: 0, parts: 1, soon: true, blurb: "Fun reading, vocabulary and role-play about a pop star's love story — the perfect first mission." },
    { id: "britain", icon: "🚆", title: "The Great British Adventure", level: "B1", min: 0, parts: 1, blurb: "Plan a real trip from London to Edinburgh: train tickets, B&Bs, museums and formal enquiries." },
    { id: "precision", icon: "🎯", title: "The Precision Strike: Writing Mission", level: "B1–B2", min: 25, parts: 1, soon: true, blurb: "Short, sharp writing and speaking challenges that train clear, precise English." },
    { id: "creator", icon: "🚀", title: "Creator Academy", level: "B1–B2", min: 30, parts: 1, blurb: "Plan an online channel in English: your niche, your audience, persuasive posts and a content plan." },
    { id: "royal", icon: "👑", title: "The Royal Saga", level: "B2", min: 40, parts: 1, blurb: "1,000 years of the British monarchy — history vocabulary, debate and the royal way of speaking." },
    { id: "house", icon: "🏠", title: "Buying a Home in England", level: "B2–C1", min: 50, parts: 3, blurb: "Follow two buyers for 12 weeks: mortgages, solicitors, legal forms, exchange and completion." },
    { id: "executive", icon: "💼", title: "The Executive Ascent: Job Interview English", level: "C1", min: 60, parts: 1, blurb: "Analyse job adverts, write achievement statements and prepare for professional interviews." }
  ];
  function sig(m) { var s = m.score + "|" + m.date + "|ILEH-missions-2026", h = 5381; for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0; return h.toString(36); }
  window.ILEH_missionSig = sig;
  function testPct(P) { var m = P.mission; if (!m || m.sig !== sig(m)) return -1; return m.best != null ? m.best : m.pct; }
  window.ILEH_missionPct = testPct;
  window.ILEH_missionUnlocked = function (P, mm) { return mm.min === 0 || testPct(P) >= mm.min; };

  var I = window.ILEH; if (!I) return;
  var mid = document.body.getAttribute("data-mission"); if (!mid) return;
  var M = MISSIONS.filter(function (x) { return x.id === mid; })[0]; if (!M) return;
  var P = I.profile, part = document.body.getAttribute("data-series") || "1", ROOT = I.base;
  var AK = "ileh.mission.answers", SK = "ileh.mission.slide." + mid + part, BK = "ileh.mission.backup";
  function load(k, d) { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } }
  function store(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var A = load(AK, {}), titles = load("ileh.mission.titles", {}), resumeAt = load(SK, 0), resumed = false;
  P.missionProgress = P.missionProgress || {};
  var PK = mid + part, unlocked = window.ILEH_missionUnlocked(P, M);

  var css = document.createElement("style");
  css.textContent =
    ".m-ans{display:block;width:100%;min-height:74px;margin:8px 0 4px;padding:10px 12px;border-radius:10px;border:1px solid #4a90e2;background:#0b1016;color:#e9eef8;font:15px/1.5 system-ui,sans-serif;resize:vertical}" +
    ".m-ans:focus{outline:2px solid #e0a548}.m-wc{font-size:12px;color:#9fb3c8;margin-bottom:6px}" +
    ".m-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:12px 0 0;padding:10px 12px;border-radius:12px;background:#0f2a2e;border:1px solid #1f7a6c;color:#d8efe9;font:14px system-ui,sans-serif}" +
    ".m-bar button,.m-bar a{border:0;border-radius:999px;padding:7px 12px;font-weight:700;cursor:pointer;background:#1f7a6c;color:#fff;text-decoration:none;font-size:13px}" +
    ".m-bar .st{flex:1;min-width:160px}.m-warn{width:100%;font-size:12.5px;color:#ffd68a;line-height:1.45}" +
    ".m-parts{display:flex;gap:6px;flex-wrap:wrap;width:100%}.m-parts a{background:#1a2332;border:1px solid #4a90e2}.m-parts a.on{background:#e0a548;color:#132a2e}" +
    ".m-res a{color:#9ecbff;text-decoration:underline}" +
    ".m-blurwrap{position:relative;margin-top:14px;min-height:260px;border-radius:14px;overflow:hidden}" +
    ".m-blur{filter:blur(7px);opacity:.75;pointer-events:none;user-select:none}" +
    ".m-blur div{height:14px;border-radius:7px;background:#4a6080;margin:12px 0}.m-blur div:nth-child(3n){width:70%}.m-blur div:nth-child(4n){width:85%}" +
    ".m-lockcard{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(440px,92%);background:#fffdf7;color:#132a2e;border-radius:18px;padding:18px;font:15px/1.5 system-ui,sans-serif;box-shadow:0 14px 40px rgba(0,0,0,.45);text-align:center}" +
    ".m-lockcard h3{margin:0 0 6px;font-size:1.2rem}.m-lockcard a{display:inline-block;margin:6px 4px 0;padding:9px 14px;border-radius:999px;background:#1f7a6c;color:#fff!important;text-decoration:none;font-weight:700}" +
    ".m-lockcard a.g{background:#fff;color:#1f7a6c!important;border:2px solid #1f7a6c}.m-lockedres{filter:blur(5px);pointer-events:none;user-select:none}" +
    ".m-toast{position:fixed;left:50%;top:14px;transform:translateX(-50%);z-index:2147483400;background:#fff4e5;color:#132a2e;border:2px solid #e0a548;border-radius:14px;padding:10px 14px;font:14px system-ui,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.3);max-width:92%}" +
    ".m-toast button{margin-left:8px;border:0;border-radius:999px;padding:6px 10px;background:#1f7a6c;color:#fff;font-weight:700;cursor:pointer}" +
    "@media print{body *{visibility:hidden}.m-print,.m-print *{visibility:visible}.m-print{position:absolute;inset:0;padding:20px;color:#000;background:#fff}}";
  document.head.appendChild(css);

  function getIdx() { try { if (typeof gameState !== "undefined") return gameState.currentSlideIndex; if (typeof state !== "undefined") return state.slide; } catch (e) {} return 0; }
  function setIdx(i) { try { if (typeof gameState !== "undefined") gameState.currentSlideIndex = i; else if (typeof state !== "undefined") state.slide = i; } catch (e) {} }
  function total() { try { if (typeof COURSE_DATA !== "undefined") return COURSE_DATA.length; if (typeof SLIDES !== "undefined") return SLIDES.length; } catch (e) {} return 1; }
  function wc(t) { return (String(t).match(/\b[\w'’-]+\b/g) || []).length; }
  var head = document.querySelector("header") || document.body;
  var bar = document.createElement("div"); bar.className = "m-bar ileh-ui"; head.appendChild(bar);
  var partsNav = M.parts > 1 ? '<div class="m-parts">' + Array.apply(null, { length: M.parts }).map(function (_, k) { var n = k + 1, pr = P.missionProgress[mid + n]; return '<a class="' + (String(n) === part ? "on" : "") + '" href="' + mid + '-' + n + '.html">Part ' + n + (pr && pr.done ? " ✅" : pr ? " · " + Math.round(pr.pct) + "%" : "") + "</a>"; }).join("") + "</div>" : "";

  /* ================= LOCKED: preview with 49% blurred ================= */
  if (!unlocked) {
    var have = testPct(P);
    bar.innerHTML = '<span class="st">🔒 <b>Preview only.</b> This mission (' + M.level + ') unlocks when you score <b>' + (M.id === "house" ? "more than 49%" : M.min + "% or more") + '</b> on the readiness test' + (have >= 0 ? " — your best so far: " + have + "%" : "") + '.</span><a href="' + ROOT + 'mission-check.html">Take the test</a><a href="' + ROOT + 'mission-prep.html">Road to the Mission</a><a href="' + ROOT + 'mission.html">All missions</a>' + partsNav;
    var lockCard = function () {
      return '<div class="m-blurwrap"><div class="m-blur">' + new Array(16).join("<div></div>") + '</div><div class="m-lockcard"><h3>🔒 The rest of this lesson is locked</h3><p>You can preview about half of each slide. To read everything and do the tasks, unlock <b>' + M.title + '</b> by passing the readiness test.</p>' +
        '<a href="' + ROOT + 'mission-check.html">Take the readiness test</a><a class="g" href="' + ROOT + 'mission-prep.html">Build my skills first</a></div></div>';
    };
    var hideHalf = function () {
      var c = document.getElementById("slide-content"); if (!c) return;
      var host = c; while (host.children.length === 1 && host.firstElementChild.children.length > 1) host = host.firstElementChild;
      var kids = Array.prototype.slice.call(host.children), keep = Math.max(1, Math.ceil(kids.length * 0.51));
      if (kids.length <= 1) { var t = host.innerHTML, cut = Math.floor(t.length * 0.51), gt = t.lastIndexOf(">", cut); host.innerHTML = t.slice(0, gt > 0 ? gt + 1 : cut); }
      else kids.slice(keep).forEach(function (k) { k.remove(); });
      c.insertAdjacentHTML("beforeend", lockCard());
      var rp = document.getElementById("resources-panel"); if (rp) rp.classList.add("m-lockedres");
      document.body.setAttribute("data-locked", "1");
    };
    ["render", "renderSlide"].forEach(function (fn) { if (typeof window[fn] !== "function") return; var o = window[fn]; window[fn] = function () { var r = o.apply(this, arguments); try { hideHalf(); } catch (e) {} return r; }; });
    document.addEventListener("DOMContentLoaded", function () { var fn = window.renderSlide || window.render; if (fn) fn(); });
    return;
  }

  /* ================= UNLOCKED ================= */
  bar.innerHTML = '<span class="st">💾 Your answers save automatically in this browser.</span><button data-m="dl">⬇️ Download my work</button><button data-m="sh">📲 Send to my phone / Drive</button><button data-m="ld">📂 Load my work</button><button data-m="pr">🖨️ Print</button><a href="' + ROOT + 'mission.html">🏠 All missions</a>' +
    '<div class="m-warn">⚠️ Your work is stored only in this browser on this device. If you clear your browser history/data, use private mode, or change phone, it will be lost — press <b>Download</b> or <b>Send to my phone / Drive</b> regularly, and use <b>Load my work</b> to continue anywhere.</div>' + partsNav;
  if (!navigator.share) bar.querySelector('[data-m="sh"]').remove();
  var stat = bar.querySelector(".st"), dirtySince = 0;

  function enhance() {
    if (!resumed) return;
    var idx = getIdx(), content = document.getElementById("slide-content"), ttl = (document.getElementById("slide-title") || {}).textContent || "";
    store(SK, idx);
    var pr = P.missionProgress[PK] || { max: 0 }; pr.max = Math.max(pr.max || 0, idx + 1); pr.pct = Math.min(100, 100 * pr.max / total()); if (pr.max >= total()) pr.done = true; P.missionProgress[PK] = pr; I.save();
    if (!content) return;
    var boxes = Array.prototype.filter.call(content.querySelectorAll("div"), function (d) { var h3 = d.querySelector(":scope > h3"); return h3 && /TASK/i.test(h3.textContent); });
    boxes.forEach(function (box, bi) {
      var items = box.querySelectorAll(":scope > ol > li, :scope > ul > li");
      var targets = items.length ? Array.prototype.slice.call(items) : [box];
      targets.forEach(function (li, li_i) {
        if (li.querySelector(".m-ans")) return;
        var key = mid + part + "-" + idx + "-" + bi + "-" + li_i;
        titles[key] = M.title + (M.parts > 1 ? " (Part " + part + ")" : "") + " · " + ttl + " — " + (li === box ? box.querySelector("h3").textContent : li.textContent).replace(/\s+/g, " ").trim().slice(0, 140);
        var ta = document.createElement("textarea"); ta.className = "m-ans"; ta.setAttribute("aria-label", "Your answer"); ta.placeholder = "Write your answer here…"; ta.value = A[key] || "";
        var w = document.createElement("div"); w.className = "m-wc"; w.textContent = wc(ta.value) + " words";
        var tmr = null;
        ta.addEventListener("input", function () { w.textContent = wc(ta.value) + " words"; clearTimeout(tmr); tmr = setTimeout(function () { A[key] = ta.value; store(AK, A); if (!dirtySince) dirtySince = Date.now(); stat.textContent = "✓ Saved in this browser " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); }, 500); });
        li.appendChild(ta); li.appendChild(w);
      });
    });
    store("ileh.mission.titles", titles);
    var panel = document.getElementById("resources-panel");
    if (panel) Array.prototype.forEach.call(panel.children, function (it) {
      if (it.classList.contains("m-res")) return; var ps = it.querySelectorAll("p"); if (ps.length < 2) return;
      var lab = ps[0].textContent, q = ps[1].textContent.trim(); it.classList.add("m-res");
      var url = /youtube/i.test(lab) ? "https://www.youtube.com/results?search_query=" + encodeURIComponent(q) : /search|web/i.test(lab) ? "https://www.google.com/search?q=" + encodeURIComponent(q) : "https://en.wikipedia.org/wiki/" + encodeURIComponent(q.replace(/ /g, "_"));
      ps[1].innerHTML = '<a href="' + url + '" target="_blank" rel="noopener">' + I.esc(q) + " ↗</a>";
    });
  }
  ["render", "renderSlide"].forEach(function (fn) {
    if (typeof window[fn] !== "function") return; var orig = window[fn];
    window[fn] = function () { var r = orig.apply(this, arguments); try { enhance(); } catch (e) { console.error(e); } return r; };
  });

  function keysSorted() { return Object.keys(A).filter(function (k) { return A[k] && A[k].trim(); }).sort(); }
  function workText() {
    var keys = keysSorted(), lines = ["I Learn English Here — Special Missions · my work", "Saved " + new Date().toLocaleString(), ""];
    keys.forEach(function (k) { lines.push("", "▶ " + (titles[k] || k), A[k]); });
    if (!keys.length) lines.push("(No answers yet.)");
    lines.push("", "----- data for 'Load my work' (keep this line) -----", "ILEHMISSION:" + btoa(unescape(encodeURIComponent(JSON.stringify({ a: A, t: titles, p: P.missionProgress })))));
    return lines.join("\n");
  }
  function fname() { return "ilearnenglishhere-missions-my-work-" + new Date().toISOString().slice(0, 10) + ".txt"; }
  function backedUp() { dirtySince = 0; store(BK, Date.now()); }
  function download() { var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([workText()], { type: "text/plain" })); a.download = fname(); document.body.appendChild(a); a.click(); setTimeout(function () { a.remove(); }, 500); backedUp(); }
  function shareWork() {
    var file = new File([workText()], fname(), { type: "text/plain" });
    if (navigator.canShare && navigator.canShare({ files: [file] })) navigator.share({ files: [file], title: "My English mission work" }).then(backedUp).catch(function () {});
    else download();
  }
  function loadWork() {
    var inp = document.createElement("input"); inp.type = "file"; inp.accept = ".txt,text/plain";
    inp.onchange = function () { var f = inp.files[0]; if (!f) return; f.text().then(function (t) {
      var m = t.match(/ILEHMISSION:([A-Za-z0-9+\/=]+)/); if (!m) return alert("This file doesn't contain saved mission work.");
      var d = JSON.parse(decodeURIComponent(escape(atob(m[1])))); Object.keys(d.a || {}).forEach(function (k) { if (d.a[k]) A[k] = d.a[k]; }); Object.assign(titles, d.t || {});
      Object.keys(d.p || {}).forEach(function (k) { var c = P.missionProgress[k] || {}; if (!c.max || (d.p[k].max || 0) > c.max) P.missionProgress[k] = d.p[k]; });
      store(AK, A); store("ileh.mission.titles", titles); I.save(); alert("✓ Your work has been loaded."); location.reload();
    }); };
    inp.click();
  }
  function printWork() {
    var keys = keysSorted(), box = document.createElement("div"); box.className = "m-print";
    box.innerHTML = "<h1>My Special Mission answers</h1><p>I Learn English Here · " + new Date().toLocaleDateString() + "</p>" + (keys.map(function (k) { return "<h3>" + I.esc(titles[k] || k) + "</h3><p style='white-space:pre-wrap'>" + I.esc(A[k]) + "</p>"; }).join("") || "<p>No answers yet.</p>");
    document.body.appendChild(box); window.print(); setTimeout(function () { box.remove(); }, 1000);
  }
  bar.addEventListener("click", function (e) { var b = e.target.closest("[data-m]"); if (!b) return; var m = b.dataset.m; if (m === "dl") download(); else if (m === "sh") shareWork(); else if (m === "ld") loadWork(); else printWork(); });
  setInterval(function () {
    if (!dirtySince || Date.now() - dirtySince < 15 * 60000 || document.querySelector(".m-toast")) return;
    var t = document.createElement("div"); t.className = "m-toast ileh-ui"; t.innerHTML = "💾 You've written a lot! Back up your work so you never lose it. <button>Download now</button><button style='background:#888'>Later</button>";
    document.body.appendChild(t); var bs = t.querySelectorAll("button"); bs[0].onclick = function () { download(); t.remove(); }; bs[1].onclick = function () { dirtySince = Date.now(); t.remove(); };
  }, 60000);
  document.addEventListener("DOMContentLoaded", function () {
    resumed = true; if (resumeAt > 0 && resumeAt < total()) setIdx(resumeAt);
    var fn = window.renderSlide || window.render; if (fn) fn();
  });
})();
