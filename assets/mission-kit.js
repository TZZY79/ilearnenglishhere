/* I Learn English Here — Mission Kit v2 (engine for the Advanced Missions)
   Every mission page defines window.MISSION = { id, title, level, next, glossary, steps:[...] } and loads this file.
   Built-in help for learners whose first language is not English:
   • Research Lab on every research step: in-page Wikipedia search (Simple English first), trusted links,
     one-tap web / YouTube / translate / "ask an AI" buttons, a 4-step research guide, sentence starters and notes
   • "I'm stuck" routes (simpler explanation, hint, example, translate), a word bank with read-aloud,
     live checklists on writing tasks, model answers after an attempt, saved progress, answer export + certificate
   Free, no sign-up, no API keys. © I Learn English Here · an Online Business Awareness project */
(function () {
  "use strict";
  var M = window.MISSION; if (!M) return;
  var GROUP_LINK = ""; /* optional: paste the Lessons & Homework group link here to show a "Send to the group" button */
  var KEY = "ileh.mk." + M.id;
  var S = { i: 0, xp: 0, ans: {}, done: {}, notes: {}, name: "" };
  try { var saved = JSON.parse(localStorage.getItem(KEY) || "null"); if (saved) S = Object.assign(S, saved); } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  var steps = M.steps;
  if (S.i >= steps.length) S.i = 0;

  /* ---------- helpers ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function strip(s) { return String(s).replace(/<[^>]+>/g, " ").replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}\u{20E3}\u{1F1E6}-\u{1F1FF}]/gu, "").replace(/[→←✓✔✗❌•▶◀]/g, " ").replace(/_{2,}/g, " blank ").replace(/\s+/g, " ").trim(); }
  function words(t) { return String(t || "").trim().split(/\s+/).filter(function (w) { return /[A-Za-z0-9]/.test(w); }); }
  function norm(s) { return String(s || "").toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9£%.' -]/g, " ").replace(/\s+/g, " ").trim().replace(/\.$/, ""); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  var voice = null;
  function pickVoice() { try { var v = speechSynthesis.getVoices(); voice = v.filter(function (x) { return /en-GB/i.test(x.lang); })[0] || v.filter(function (x) { return /^en/i.test(x.lang); })[0] || null; } catch (e) {} }
  if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function say(text, rate) {
    if (!("speechSynthesis" in window)) { alert("Sorry, this browser cannot read aloud. Try Chrome."); return; }
    speechSynthesis.cancel(); var u = new SpeechSynthesisUtterance(strip(text)); u.lang = "en-GB"; if (voice) u.voice = voice; u.rate = rate || 0.92; speechSynthesis.speak(u);
  }
  function open(url) { window.open(url, "_blank", "noopener"); }
  var WEB = function (q) { return "https://duckduckgo.com/?q=" + encodeURIComponent(q); };
  var YT = function (q) { return "https://www.youtube.com/results?search_query=" + encodeURIComponent(q); };
  var TR = function (q) { return "https://translate.google.com/?sl=en&op=translate&text=" + encodeURIComponent(q); };
  var AI = function (q) { return "https://chatgpt.com/?q=" + encodeURIComponent(q); };

  /* ---------- layout ---------- */
  var root = document.getElementById("mk") || document.body.appendChild(Object.assign(document.createElement("div"), { id: "mk" }));
  root.innerHTML =
    '<div class="mk-head"><div class="mk-title"><h1>' + esc(M.title) + '</h1><span class="lv">' + esc(M.level) + '</span></div>' +
    '<div class="mk-bar"><i id="mk-prog"></i></div>' +
    '<div class="mk-tools"><button data-t="read">🔊 Read aloud</button><button data-t="words">📖 Word bank</button><button data-t="stuck">🆘 I\'m stuck</button><button data-t="tr">🌐 Translate</button><button data-t="save">💾 Save / load</button><span class="xp" id="mk-xp"></span></div></div>' +
    '<div id="mk-step"></div>' +
    '<div class="mk-drawer" id="mk-dr"><div class="pan"><button class="x" aria-label="Close">×</button><div id="mk-drb"></div></div></div>';
  var nav = document.createElement("div"); nav.className = "mk-nav";
  nav.innerHTML = '<div class="in"><button class="mk-btn" id="mk-back">← Back</button><span class="pos" id="mk-pos"></span><button class="mk-btn pri" id="mk-next">Next →</button></div>';
  document.body.appendChild(nav);
  var box = $("#mk-step");

  function drawer(html) { $("#mk-drb").innerHTML = html; $("#mk-dr").classList.add("on"); }
  $("#mk-dr").addEventListener("click", function (e) { if (e.target.id === "mk-dr" || e.target.closest(".x")) $("#mk-dr").classList.remove("on"); var b = e.target.closest("[data-say]"); if (b) say(b.getAttribute("data-say")); var o = e.target.closest("[data-open]"); if (o) open(o.getAttribute("data-open")); });

  /* ---------- toolbar ---------- */
  root.querySelector(".mk-tools").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return; var t = b.dataset.t, st = steps[S.i];
    if (t === "read") say(stepText(st));
    if (t === "words") wordBank();
    if (t === "stuck") stuck(st);
    if (t === "tr") open(TR(stepText(st).slice(0, 4500)));
    if (t === "save") saveLoad();
  });
  function stepText(st) { return [st.title, st.html, st.task, st.q, (st.steps || []).join(". ")].filter(Boolean).map(strip).join(". "); }
  function wordBank() { $("#mk-drb").onclick = null;
    var g = (M.glossary || []);
    drawer('<h2>📖 Word bank</h2><p style="font-size:.9rem">Tap 🔊 to hear a word. Tap 🌐 to translate it into your language.</p><input class="mk-in" id="mk-gs" placeholder="Search a word…"><table class="mk-vocab" id="mk-gt">' +
      g.map(function (w) { return '<tr><td>' + esc(w[0]) + ' <button class="mk-say" data-say="' + esc(w[0]) + '">🔊</button><button class="mk-say" data-open="' + esc(TR(w[0])) + '">🌐</button></td><td>' + esc(w[1]) + '</td></tr>'; }).join("") + '</table>');
    $("#mk-gs").addEventListener("input", function () { var q = this.value.toLowerCase(); $$("#mk-gt tr").forEach(function (r) { r.style.display = r.textContent.toLowerCase().indexOf(q) >= 0 ? "" : "none"; }); });
  }
  function stuck(st) { $("#mk-drb").onclick = null;
    var h = st.help || {};
    var simple = h.simple || ({ research: "You need to FIND information online, then WRITE it in your own words. Use the Research Lab below: tap a suggested search, read one result, then use a sentence starter.", write: "Write your answer in the box. The checklist under the box turns green when your answer is ready.", mcq: "Read the question slowly. Remove the answers you know are wrong first.", gap: "Read the whole sentence. Which word fits the grammar and the meaning?", speak: "Read the model, listen to it, then record yourself. Nobody else hears your recording.", teach: "Read the yellow box first — it is the most important rule. Then tap the grey cards to see examples.", video: "Open the video search, watch one short video, and write 2–3 things you learned." }[st.t] || "Read the page from the top. Then try the activity. You can always go back.");
    var parts = '<h2>🆘 Help is here</h2><p><b>In simple English:</b> ' + simple + '</p>';
    if (h.hint) parts += '<details class="mk-d" open><summary>💡 Hint</summary><p>' + h.hint + '</p></details>';
    if (h.example) parts += '<details class="mk-d"><summary>👀 Example</summary><p>' + h.example + '</p></details>';
    if (st.model) parts += '<details class="mk-d"><summary>📝 See a model answer (try first!)</summary><div class="mk-model">' + st.model + '</div></details>';
    parts += '<div class="mk-tb"><button class="mk-btn" data-say="' + esc(simple) + '">🔊 Read help aloud</button><button class="mk-btn" data-open="' + esc(TR(stepText(st).slice(0, 4500))) + '">🌐 Translate this step</button>' +
      '<button class="mk-btn" data-open="' + esc(AI("I am learning English (around B1 level). Explain this task to me in very simple English, step by step. Do NOT write the answer for me. Task: " + stepText(st).slice(0, 1200))) + '">🤖 Ask an AI to explain</button></div>' +
      '<p style="font-size:.8rem;color:#54706c">The AI button opens ChatGPT in a new tab (free, may ask you to sign in, 13+). It explains — you still do the work.</p>';
    drawer(parts);
  }

  /* ---------- progress ---------- */
  function addXP(n) { S.xp += n; save(); $("#mk-xp").textContent = "⭐ " + S.xp + " XP"; }
  /* every step must be finished before the next one opens */
  function stepDone(st) {
    if (S.done[S.i]) return true;
    if (st.t === "intro" || st.t === "summary") return true;
    if (st.t === "teach" || st.t === "story") { var n = (st.reveal || []).length; if (!n) { S.done[S.i] = 1; return true; } return ((S.rv || {})[S.i] || 0) >= n; }
    return false;
  }
  function needText(st) {
    return { mcq: "Choose the right answer", gap: "Type the right answer", write: "Finish the checklist", research: "Finish the checklist", video: "Write your notes", speak: "Record or write what you said", teach: "Tap every card to continue", story: "Tap every card to continue", text: "Listen or tick 'I have read it'" }[st.t] || "Finish this step";
  }
  function upd() {
    $("#mk-prog").style.width = Math.round(S.i / (steps.length - 1) * 100) + "%";
    $("#mk-xp").textContent = "⭐ " + S.xp + " XP";
    $("#mk-pos").textContent = (S.i + 1) + " / " + steps.length;
    $("#mk-back").disabled = S.i === 0;
    var st = steps[S.i], gated = !stepDone(st) || (!isOpen() && S.i >= PREVIEW - 1);
    $("#mk-next").disabled = gated;
    $("#mk-next").textContent = S.i === steps.length - 1 ? "🏁 Finish" : (!isOpen() && S.i >= PREVIEW - 1 ? "🔒 Unlock to continue" : gated ? "🔒 " + needText(st) : "Next →");
  }
  $("#mk-back").addEventListener("click", function () { if (S.i > 0) { S.i--; save(); show(); } });
  $("#mk-next").addEventListener("click", function () {
    var st = steps[S.i];
    if (!stepDone(st)) return;
    if (S.i < steps.length - 1) { S.i++; save(); show(); } else { location.href = M.home || "../mission.html"; }
  });

  /* ---------- renderers ---------- */
  function head(st, kicker) { return '<div class="mk-kicker">' + esc(kicker) + '</div><h2>' + (st.emoji ? st.emoji + " " : "") + esc(st.title || "") + '</h2>'; }
  function vocabTable(v) { if (!v || !v.length) return ""; return '<h3>Key words</h3><table class="mk-vocab">' + v.map(function (w) { return '<tr><td>' + esc(w[0]) + ' <button class="mk-say" data-say="' + esc(w[0] + (w[2] ? ". " + w[2] : "")) + '" aria-label="Listen">🔊</button></td><td>' + esc(w[1]) + (w[2] ? '<br><i style="color:#46625e">' + esc(w[2]) + '</i>' : "") + '</td></tr>'; }).join("") + '</table>'; }
  function reveal(r) { if (!r || !r.length) return ""; return '<h3>Tap to check</h3><div class="mk-reveal">' + r.map(function (x) { return '<button>' + x[0] + '<span class="a">' + x[1] + '</span></button>'; }).join("") + '</div>'; }

  var R = {};
  R.intro = function (st) {
    return '<div class="mk-card">' + head(st, st.kicker || "Mission briefing") + (st.html || "") +
      (st.goals ? '<div class="mk-goals"><b>By the end you can:</b><ul>' + st.goals.map(function (g) { return "<li>" + g + "</li>"; }).join("") + '</ul></div>' : "") +
      (st.how ? '<details class="mk-d" open><summary>How this mission works</summary>' + st.how + '</details>' : "") + '</div>';
  };
  R.story = function (st) { return '<div class="mk-card">' + head(st, st.kicker || "Story") + '<div class="mk-story">' + st.html + '</div>' + (st.after || "") + vocabTable(st.vocab) + reveal(st.reveal) + '</div>'; };
  R.teach = function (st) {
    return '<div class="mk-card">' + head(st, st.kicker || "Learn first") + (st.html || "") + (st.formula ? '<div class="mk-formula">' + st.formula + '</div>' : "") +
      vocabTable(st.vocab) + reveal(st.reveal) + (st.tip ? '<div class="mk-tip">💡 ' + st.tip + '</div>' : "") + '</div>';
  };
  R.text = function (st) { return '<div class="mk-card">' + head(st, st.kicker || "Read") + (st.html || "") + '<div class="mk-text">' + st.text + '</div><button class="mk-btn" data-say="' + esc(strip(st.text)) + '">🔊 Listen</button> <button class="mk-btn" data-sayslow="' + esc(strip(st.text)) + '">🐢 Listen slowly</button><p><label style="font-weight:600"><input type="checkbox" id="mk-rd"' + (S.done[S.i] ? " checked" : "") + '> I have read the whole text</label></p>' + vocabTable(st.vocab) + '</div>'; };
  R.mcq = function (st, i) {
    if (!st._o) { var idx = shuffle(st.o.map(function (_, k) { return k; })); st._o = idx; }
    return '<div class="mk-card">' + head(st, st.kicker || "Check your understanding") + '<p><b>' + st.q + '</b></p><div class="mk-opts">' +
      st._o.map(function (k) { return '<button data-k="' + k + '">' + st.o[k] + '</button>'; }).join("") + '</div><div id="mk-fb"></div></div>';
  };
  R.gap = function (st) {
    return '<div class="mk-card">' + head(st, st.kicker || "Fill the gap") + '<p><b>' + st.q + '</b></p><div class="mk-search"><input class="mk-in" id="mk-g" autocomplete="off" placeholder="Type your answer" value="' + esc(S.ans[S.i] || "") + '"><button class="mk-btn pri" id="mk-gc">Check</button></div><div id="mk-fb"></div></div>';
  };
  function rulesHTML(st) { return st.auto || st.minWords || st.maxWords ? '<ul class="mk-checks" id="mk-ck"></ul>' : ""; }
  function writer(st) {
    var val = S.ans[S.i] != null ? S.ans[S.i] : (st.frame || "");
    return (st.starters ? '<div style="font-size:.85rem;font-weight:700;margin-top:.6rem">Sentence starters (tap to add):</div><div class="mk-chips" data-ins="1">' + st.starters.map(function (s) { return '<button>' + esc(s) + '</button>'; }).join("") + '</div>' : "") +
      '<textarea class="mk-in" id="mk-w" placeholder="' + esc(st.placeholder || "Write your answer here…") + '">' + esc(val) + '</textarea><div class="mk-meta"><span id="mk-wc">0 words</span><span>Saved on this device ✓</span></div>' + rulesHTML(st) +
      (st.checklist ? '<details class="mk-d"><summary>✅ Self-check before you continue</summary><ul>' + st.checklist.map(function (c) { return "<li>" + c + "</li>"; }).join("") + '</ul></details>' : "") +
      (st.model ? '<div id="mk-modelwrap"></div>' : "");
  }
  R.write = function (st) {
    return '<div class="mk-card">' + head(st, st.kicker || "Your turn: write") + (st.html || "") + '<div class="mk-task">' + st.task + '</div>' + vocabTable(st.vocab) + writer(st) + '</div>';
  };
  R.speak = function (st) {
    return '<div class="mk-card">' + head(st, st.kicker || "Your turn: speak") + (st.html || "") + '<div class="mk-task">' + st.task + '</div>' +
      (st.model ? '<h3>Listen to a model first</h3><div class="mk-model">' + st.model + '</div><div class="mk-tb"><button class="mk-btn" data-say="' + esc(strip(st.model)) + '">🔊 Normal</button><button class="mk-btn" data-sayslow="' + esc(strip(st.model)) + '">🐢 Slow</button></div>' : "") +
      (st.list ? '<h3>Choose from this list</h3><ul>' + st.list.map(function (x) { return '<li>' + esc(x) + ' <button class="mk-say" data-say="' + esc(x) + '">🔊</button></li>'; }).join("") + '</ul>' : "") +
      '<h3>Record yourself (only you can hear it)</h3><div class="mk-rec"><button class="mk-btn gold" id="mk-rec">🎙 Start recording</button><span id="mk-rt"></span></div><audio id="mk-au" controls style="display:none;width:100%"></audio>' +
      '<p style="font-size:.85rem;color:#46625e">Studying with a teacher or group? Record a voice note in your messaging app instead and send it there.</p>' +
      (st.checklist ? '<details class="mk-d" open><summary>✅ Your recording must include</summary><ul>' + st.checklist.map(function (c) { return "<li>" + c + "</li>"; }).join("") + '</ul></details>' : "") +
      '<h3>No microphone? Write what you would say instead (12+ words)</h3>' + writer(Object.assign({}, st, { model: null, starters: null, checklist: null })) + '</div>';
  };
  R.video = function (st) {
    return '<div class="mk-card">' + head(st, st.kicker || "Watch & learn") + (st.html || "") + '<div class="mk-task">' + st.task + '</div>' +
      '<div class="mk-tb"><button class="mk-btn pri" data-open="' + esc(YT(st.search)) + '">▶ Find videos on YouTube</button><button class="mk-btn" data-open="' + esc(YT(st.search + " explained simply")) + '">▶ Simpler videos</button></div>' +
      '<div class="mk-tip">💡 Tip: on YouTube tap <b>⋯ → Captions</b> to turn on English subtitles, and <b>⋯ → Playback speed → 0.75</b> to slow it down.</div>' + writer(st) + '</div>';
  };
  R.research = function (st) {
    return '<div class="mk-card">' + head(st, st.kicker || "Research task") + (st.html || "") + '<div class="mk-task">' + st.task + '</div>' + lab(st) + vocabTable(st.vocab) + '<h3>Your answer</h3>' + writer(st) + '</div>';
  };
  R.summary = function (st) {
    var rows = steps.map(function (s, k) { var a = S.ans[k]; return a && String(a).trim() ? { t: s.title || ("Step " + (k + 1)), a: String(a).trim() } : null; }).filter(Boolean);
    return '<div class="mk-card">' + head(st, "Mission complete") + (st.html || "") + (st.points ? '<div class="mk-goals"><b>What you can do now:</b><ul>' + st.points.map(function (p) { return "<li>" + p + "</li>"; }).join("") + '</ul></div>' : "") +
      '<p style="font-size:1.1rem">⭐ You earned <b>' + S.xp + ' XP</b> and completed <b>' + Object.keys(S.done).length + '</b> activities.</p>' +
      '<h3>📤 Your answer sheet</h3><p>Copy your answers and send them to your teacher, study group or a friend for feedback. Sharing your work in English is real communication practice!</p>' +
      '<div class="mk-tb mk-noprint"><button class="mk-btn pri" id="mk-copy">📋 Copy my answers</button><button class="mk-btn" id="mk-wa">WhatsApp</button><button class="mk-btn" id="mk-tg">Telegram</button><button class="mk-btn" id="mk-dl">⬇ Download .txt</button><button class="mk-btn" onclick="window.print()">🖨 Print</button>' + (GROUP_LINK ? '<button class="mk-btn gold" data-open="' + esc(GROUP_LINK) + '">📚 Lessons &amp; Homework group</button>' : "") + '</div>' +
      '<details class="mk-d"><summary>See my ' + rows.length + ' answers</summary>' + rows.map(function (r) { return '<p><b>' + esc(r.t) + '</b><br>' + esc(r.a).replace(/\n/g, "<br>") + '</p>'; }).join("") + '</details>' +
      '<h3>🏅 Your certificate</h3><div class="mk-search mk-noprint"><input class="mk-in" id="mk-nm" placeholder="Type your name for the certificate" value="' + esc(S.name) + '"></div>' +
      '<div class="mk-cert" id="mk-cert"></div>' +
      (M.next ? '<p><a class="mk-btn gold" href="' + esc(M.nextUrl || "../mission.html") + '" style="text-decoration:none;display:inline-block">🔐 Unlock the next mission →</a></p>' : "") +
      '<div class="mk-tip">📣 Communication challenge: send one English sentence to a friend or family member telling them what you learned today, with the link <b>ilearnenglishhere.academy</b>.</div>' +
      '<p style="font-size:.85rem"><a href="#" id="mk-reset">Start this mission again</a></p></div>';
  };
  function answerSheet() {
    var out = ["I Learn English Here — " + "Special Mission: " + M.title, "Student: " + (S.name || "________"), "Date: " + new Date().toISOString().slice(0, 10), ""];
    steps.forEach(function (s, k) { var a = S.ans[k]; if (a && String(a).trim()) { out.push("■ " + (s.title || "Step " + (k + 1))); out.push(String(a).trim()); out.push(""); } });
    out.push("Free lessons: https://ilearnenglishhere.academy");
    return out.join("\n");
  }
  function cert() { var c = $("#mk-cert"); if (!c) return; c.innerHTML = '<div style="font-size:.8rem;letter-spacing:.2em;text-transform:uppercase;color:#8a5a12">Certificate of completion</div><h2>' + esc(S.name || "Your name") + '</h2><p>has completed the ' + 'Special Mission' + '</p><p style="font-size:1.15rem"><b>' + esc(M.title) + '</b> (' + esc(M.level) + ')</p><p style="font-size:.85rem">' + new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) + ' · ⭐ ' + S.xp + ' XP</p><p style="font-size:.85rem;margin-top:1rem">🎓 I Learn English Here · ilearnenglishhere.academy<br>An Online Business Awareness project</p>'; }

  /* ---------- Research Lab ---------- */
  function lab(st) {
    var q0 = (st.queries && st.queries[0]) || st.title || "";
    return '<div class="mk-lab"><h3>🔎 Research Lab</h3>' +
      '<details class="mk-d"><summary>New to online research? Follow these 4 steps</summary><ol>' +
      '<li><b>Find the key words</b> in the task (names, places, numbers, dates).</li><li><b>Search</b> — tap a suggested search below, or type your own short search (2–5 words).</li>' +
      '<li><b>Read smart</b> — you don\'t need every word. Read the title, the first paragraph and look for numbers and names.</li><li><b>Write in your own words</b> — use a sentence starter. Never copy and paste whole sentences.</li></ol></details>' +
      (st.steps ? '<div class="mk-goals"><b>Your research plan:</b><ol>' + st.steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + '</ol></div>' : "") +
      (st.queries ? '<div style="font-size:.85rem;font-weight:700">Suggested searches (tap one):</div><div class="mk-chips" data-q="1">' + st.queries.map(function (q) { return '<button>' + esc(q) + '</button>'; }).join("") + '</div>' : "") +
      '<div class="mk-search"><input class="mk-in" id="mk-q" value="' + esc(q0) + '" placeholder="Type a short search"><button class="mk-btn pri" id="mk-go">Search</button></div>' +
      '<label style="font-size:.82rem"><input type="checkbox" id="mk-simple" checked> Simple English results (easier to read)</label>' +
      '<div class="mk-res" id="mk-res"></div>' +
      '<div class="mk-tb"><button class="mk-btn" data-web="1">🌍 Search the whole web</button><button class="mk-btn" data-yt="1">▶ Search YouTube</button><button class="mk-btn" data-tr="1">🌐 Translate my search</button><button class="mk-btn" data-ai="1">🤖 Ask an AI to explain</button></div>' +
      (st.sources ? '<details class="mk-d" open><summary>⭐ Trusted sources for this task</summary><div class="mk-src">' + st.sources.map(function (s) { return '<a href="' + esc(s[1]) + '" target="_blank" rel="noopener"><b>' + esc(s[0]) + ' ↗</b><span>' + esc(s[2] || "") + '</span></a>'; }).join("") + '</div></details>' : "") +
      '<details class="mk-d"><summary>📝 My research notes (saved)</summary><textarea class="mk-in" id="mk-notes" placeholder="Write facts, numbers and links you find here…" style="min-height:90px">' + esc(S.notes[S.i] || "") + '</textarea></details></div>';
  }
  function wiki(q, simple, out) {
    out.innerHTML = '<div class="r">Searching…</div>';
    var lang = simple ? "simple" : "en";
    fetch("https://" + lang + ".wikipedia.org/w/api.php?action=query&list=search&srlimit=5&format=json&origin=*&srsearch=" + encodeURIComponent(q))
      .then(function (r) { return r.json(); }).then(function (j) {
        var res = (j.query && j.query.search) || [];
        if (!res.length && simple) return wiki(q, false, out);
        if (!res.length) { out.innerHTML = '<div class="r">No encyclopedia results. Try fewer words, or tap <b>Search the whole web</b>.</div>'; return; }
        out.innerHTML = '<div style="font-size:.8rem;color:#46625e">Results from ' + (lang === "simple" ? "Simple English " : "") + 'Wikipedia — a good starting point. Check important facts on an official site too.</div>' +
          res.map(function (x) { var url = "https://" + lang + ".wikipedia.org/wiki/" + encodeURIComponent(x.title.replace(/ /g, "_")); return '<div class="r" data-lang="' + lang + '" data-title="' + esc(x.title) + '"><b>' + esc(x.title) + '</b>' + esc(strip(x.snippet)) + '…<div class="acts"><button data-sum="1">📄 Quick summary</button><a href="' + url + '" target="_blank" rel="noopener">Open article ↗</a></div></div>'; }).join("");
      }).catch(function () { out.innerHTML = '<div class="r">The in-page search is not available right now. Use <b>Search the whole web</b> below.</div>'; });
  }

  /* ---------- writing checks ---------- */
  function checks(st, t) {
    var list = [], w = words(t);
    if (st.minWords) list.push([w.length >= st.minWords, "At least " + st.minWords + " words (" + w.length + " now)"]);
    if (st.maxWords) list.push([w.length <= st.maxWords && w.length > 0, "No more than " + st.maxWords + " words"]);
    (st.auto || []).forEach(function (a) {
      if (a.words) list.push([w.length === a.words, "Exactly " + a.words + " words (" + w.length + " now)"]);
      if (a.lineWords) { var ls = t.split(/\n+/).filter(function (l) { return l.trim(); }); a.lineWords.forEach(function (n, k) { var c = ls[k] ? words(ls[k]).length : 0; list.push([c === n, "Line " + (k + 1) + ": exactly " + n + " words (" + c + " now)"]); }); }
      if (a.sentences) { var sc = (t.match(/[.!?](\s|$)/g) || []).length; list.push([a.exact ? sc === a.sentences : sc >= a.sentences, (a.exact ? "Exactly " : "At least ") + a.sentences + " sentence" + (a.sentences > 1 ? "s" : "") + " (" + sc + " now)"]); }
      if (a.endings) a.endings.forEach(function (e) { var re = new RegExp("[a-z]" + e + "\\b", "i"); list.push([re.test(t), "A word ending in -" + e]); });
      if (a.noLetters) { var bad = t.replace(/[^a-z]/gi, "").split("").filter(function (c) { return a.noLetters.indexOf(c.toLowerCase()) >= 0; }); list.push([t.trim().length > 0 && !bad.length, "No letters " + a.noLetters.toUpperCase().split("").join(", ") + (bad.length ? " (found: " + bad.slice(0, 5).join(" ") + ")" : "")]); }
      if (a.has) list.push([a.has.test(t), a.msg]);
      if (a.lines) { var n = t.split(/\n/).filter(function (l) { return /^\s*\d+[.)]/.test(l); }).length; list.push([n >= a.lines, a.lines + " numbered lines like “1. …” (" + n + " now)"]); }
      if (a.digit) list.push([/\d/.test(t), "Includes a number"]);
      if (a.cipher) {
        var o = (t.match(/original\s*:\s*(.+)/i) || [])[1] || "", c = (t.match(/cipher\s*:\s*(.+)/i) || [])[1] || "";
        var letters = o.replace(/[^a-z]/gi, ""), exp = letters.split("").filter(function (_, k) { return k % 2 === 0; }).join("").toLowerCase();
        list.push([!!o && !!c, "Two lines: “Original: …” and “Cipher: …”"]);
        list.push([!!o && c.replace(/[^a-z]/gi, "").toLowerCase() === exp, "Cipher keeps letters 1, 3, 5… of the original" + (o ? " (should be: " + exp + ")" : "")]);
      }
    });
    return list;
  }

  /* ---------- unlocking (works with the site's Special Missions readiness test) ---------- */
  var PREVIEW = 3;
  function profile() { try { return (window.ILEH && window.ILEH.profile) || JSON.parse(localStorage.getItem("ileh.v1") || "{}"); } catch (e) { return {}; } }
  function msig(m) { var t = m.score + "|" + m.date + "|ILEH-missions-2026", h = 5381; for (var i = 0; i < t.length; i++) h = ((h << 5) + h + t.charCodeAt(i)) >>> 0; return h.toString(36); }
  function readiness() { var m = profile().mission; if (!m || m.sig !== msig(m)) return -1; return m.best != null ? m.best : m.pct; }
  function isOpen() {
    if (!M.mission || !M.min || S.unlocked) return true;
    var r = readiness(); if (M.mission === "house" ? r > 49 : r >= M.min) return true;
    try { var u = JSON.parse(localStorage.getItem("ileh.missions.unlocked") || "{}"); if (u[M.mission]) return true; } catch (e) {}
    return false;
  }
  function lockCard() {
    var r = readiness();
    return '<div class="mk-card" id="mk-lock" style="border:2px solid var(--mk-gold);background:#fffaf0"><div class="mk-kicker">🔒 Preview ends here</div><h2>Unlock the full mission</h2>' +
      '<p>This mission is <b>' + esc(M.level) + '</b>. You have seen the first ' + PREVIEW + ' steps. Choose one way to unlock everything:</p>' +
      '<div class="mk-goals"><b>Option 1 — this mission\'s own test:</b> 10 questions written for <i>' + esc(M.title) + '</i>, including one internet search and one short writing task. Score <b>8/10</b>.<br><button class="mk-btn pri" data-test="1" style="margin-top:.5rem">🔐 Take the unlock test</button></div>' +
      '<div class="mk-goals"><b>Option 2 — the Special Missions readiness test:</b> score ' + (M.mission === "house" ? "more than 49%" : M.min + "% or more") + (r >= 0 ? " (your best so far: " + r + "%)" : "") + ' to unlock this and every easier mission.<br><a class="mk-btn" href="../mission-check.html" style="display:inline-block;margin-top:.5rem;text-decoration:none">Take the readiness test →</a></div>' +
      '<p style="font-size:.9rem">Not ready yet? That\'s normal. The <a href="../mission-prep.html">Road to the Mission</a> builds your skills step by step.</p></div>';
  }
  function startTest() {
    var T = (M.test || []).slice(); if (!T.length) return;
    var qs = shuffle(T.slice(0, T.length - 2)).concat(T.slice(-2)), n = 0, ans = [];
    function q1() {
      var q = qs[n], a = ans[n], body;
      if (q.t === "mc") { if (!q._o) q._o = shuffle(q.o.map(function (_, k) { return k; })); body = '<div class="mk-opts">' + q._o.map(function (k) { return '<button data-k="' + k + '" style="' + (a === k ? "border-color:#1f7a6c;background:#eef8f5" : "") + '">' + esc(q.o[k]) + '</button>'; }).join("") + '</div>'; }
      else if (q.t === "write") body = '<textarea class="mk-in" id="mk-tq">' + esc(a || "") + '</textarea><div class="mk-meta"><span id="mk-tw"></span></div>';
      else body = '<input class="mk-in" id="mk-tq" autocomplete="off" value="' + esc(a || "") + '">' + (q.hint ? '<div class="mk-tip">💡 ' + esc(q.hint) + ' <a href="' + WEB(q.hint.replace(/^.*?“|”.*$/g, "")) + '" target="_blank" rel="noopener">Open a search ↗</a></div>' : "");
      drawer('<div class="mk-kicker">Unlock test · ' + esc(M.title) + '</div><h2>Question ' + (n + 1) + ' of ' + qs.length + '</h2><div class="mk-bar"><i style="width:' + (n / qs.length * 100) + '%"></i></div><p><b>' + esc(q.q) + '</b></p>' + body +
        '<div class="mk-tb" style="justify-content:space-between;margin-top:1rem"><button class="mk-btn" data-tb="1"' + (n ? "" : " disabled") + '>← Back</button><button class="mk-btn pri" data-tn="1">' + (n === qs.length - 1 ? "Finish & mark ✓" : "Next →") + '</button></div>');
      var inp = $("#mk-tq"); if (inp && q.t === "write") { var u = function () { $("#mk-tw").textContent = words(inp.value).length + " words"; }; inp.addEventListener("input", u); u(); }
    }
    function grab() { var inp = $("#mk-tq"); if (inp) ans[n] = inp.value; }
    function ok(q, a) {
      if (q.t === "mc") return a === q.a;
      if (q.t !== "write") return q.acc.some(function (x) { return norm(x) === norm(a); });
      var t = String(a || "").trim(), w = words(t);
      if (w.length < q.min || w.length > q.max) return false; if (q.must && !q.must.test(t)) return false; if (q.end && t.slice(-1) !== q.end) return false;
      if (q.sentences && (t.match(/[.!?](\s|$)/g) || []).length < q.sentences) return false; if (q.firstEd && !/ed$/i.test(w[0].replace(/[^A-Za-z]/g, ""))) return false; if (q.digit && !/\d/.test(t)) return false;
      return true;
    }
    function mark() {
      var sc = 0, rows = qs.map(function (q, k) { var g = ok(q, ans[k]); if (g) sc++; return '<li style="color:' + (g ? "#17803d" : "#b42318") + '">' + (g ? "✅ " : "❌ ") + esc(q.q) + (g ? "" : '<br><small style="color:#46625e">Why: ' + esc(q.why) + '</small>') + '</li>'; }).join("");
      var pass = sc >= 8;
      if (pass) { S.unlocked = true; save(); try { var u = JSON.parse(localStorage.getItem("ileh.missions.unlocked") || "{}"); u[M.mission] = new Date().toISOString().slice(0, 10); localStorage.setItem("ileh.missions.unlocked", JSON.stringify(u)); } catch (e) {} }
      drawer('<h2>' + (pass ? "🎉 Unlocked! " : "Not yet — ") + sc + '/10</h2><p>' + (pass ? "Great work — the whole mission is now open on this device." : "You need 8/10. Read the explanations, revise, then try again — the questions come in a new order.") + '</p><ul>' + rows + '</ul><div class="mk-tb">' + (pass ? '<button class="mk-btn pri" data-go="1">Continue the mission →</button>' : '<button class="mk-btn pri" data-again="1">Try again ↻</button><a class="mk-btn" href="../mission-prep.html" style="text-decoration:none">Build my skills first</a>') + '</div>');
    }
    $("#mk-drb").onclick = function (e) {
      var o = e.target.closest("[data-k]"); if (o) { ans[n] = +o.dataset.k; q1(); return; }
      if (e.target.closest("[data-tn]")) { grab(); if (ans[n] == null || String(ans[n]).trim() === "") { var w = $("#mk-drb .mk-tb"); if (w && !$("#mk-need")) w.insertAdjacentHTML("beforebegin", '<div class="mk-fb no" id="mk-need">Answer this question first.</div>'); return; } if (n < qs.length - 1) { n++; q1(); } else mark(); }
      if (e.target.closest("[data-tb]")) { grab(); n--; q1(); }
      if (e.target.closest("[data-again]")) { n = 0; ans = []; qs = shuffle(T.slice(0, T.length - 2)).concat(T.slice(-2)); q1(); }
      if (e.target.closest("[data-go]")) { $("#mk-dr").classList.remove("on"); $("#mk-drb").onclick = null; S.i = PREVIEW; save(); show(); }
    };
    q1();
  }
  /* keep the site's mission hub up to date (✅ / continue) */
  function sync() {
    try { var I = window.ILEH; if (!I || !M.mission) return; var P = I.profile; P.missionProgress = P.missionProgress || {}; var k = M.mission + (M.part || 1), pr = P.missionProgress[k] || { max: 0 };
      pr.max = Math.max(pr.max || 0, S.i + 1); pr.pct = Math.min(100, Math.round(100 * pr.max / steps.length)); if (pr.max >= steps.length) pr.done = true; P.missionProgress[k] = pr; I.save(); } catch (e) {}
  }
  window.addEventListener("load", function () { setTimeout(sync, 800); });
  /* ---------- save / load my work (backup across devices) ---------- */
  function saveLoad() { $("#mk-drb").onclick = null;
    drawer('<h2>💾 Save or load my work</h2><p>Your work saves automatically <b>in this browser on this device</b>. If you clear your browser, use private mode or change phone, it will be lost — so download a backup file now and then.</p><div class="mk-tb"><button class="mk-btn pri" id="mk-bk">⬇ Download my work</button><button class="mk-btn" id="mk-ld">📂 Load my work</button></div><p style="font-size:.85rem;color:#46625e">The file is a normal .txt file with your answers. Keep it in your phone, email or Drive, and load it on any device.</p>');
    $("#mk-bk").onclick = function () { var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([answerSheet() + "\n\n----- data for 'Load my work' (keep this line) -----\nILEHMK:" + M.id + ":" + btoa(unescape(encodeURIComponent(JSON.stringify(S))))], { type: "text/plain" })); a.download = "ilearnenglishhere-" + M.id + "-my-work-" + new Date().toISOString().slice(0, 10) + ".txt"; document.body.appendChild(a); a.click(); setTimeout(function () { a.remove(); }, 500); };
    $("#mk-ld").onclick = function () { var inp = document.createElement("input"); inp.type = "file"; inp.accept = ".txt,text/plain"; inp.onchange = function () { var f = inp.files[0]; if (!f) return; f.text().then(function (t) { var m = t.match(/ILEHMK:([\w-]+):([A-Za-z0-9+\/=]+)/); if (!m) return alert("This file doesn't contain saved work from this site."); if (m[1] !== M.id && !confirm("This work is from a different mission. Load it anyway?")) return; S = Object.assign(S, JSON.parse(decodeURIComponent(escape(atob(m[2]))))); save(); alert("✓ Your work is loaded."); location.reload(); }); }; inp.click(); };
  }

  /* ---------- show & bind ---------- */
  function show() {
    try { speechSynthesis.cancel(); } catch (e) {}
    var st = steps[S.i];
    if (!isOpen() && S.i >= PREVIEW) { S.i = PREVIEW - 1; }
    st = steps[S.i];
    if (st.t === "summary" && !S.done[S.i]) { S.done[S.i] = 1; S.xp += 25; save(); }
    box.innerHTML = (R[st.t] || R.teach)(st, S.i) + (!isOpen() && S.i === PREVIEW - 1 ? lockCard() : "");
    sync();
    window.scrollTo(0, 0); upd(); bind(st); cert();
    var lk = $("#mk-lock"); if (lk) lk.addEventListener("click", function (e) { if (e.target.closest("[data-test]")) startTest(); });
  }
  function bind(st) {
    $$("[data-say]", box).forEach(function (b) { b.addEventListener("click", function () { say(b.getAttribute("data-say")); }); });
    $$("[data-sayslow]", box).forEach(function (b) { b.addEventListener("click", function () { say(b.getAttribute("data-sayslow"), 0.65); }); });
    $$("[data-open]", box).forEach(function (b) { b.addEventListener("click", function () { open(b.getAttribute("data-open")); }); });
    $$(".mk-reveal button", box).forEach(function (b, k) { if (((S.rvk || {})[S.i] || {})[k]) b.classList.add("on"); b.addEventListener("click", function () { if (!b.classList.contains("on")) { b.classList.add("on"); addXP(1); S.rvk = S.rvk || {}; S.rvk[S.i] = S.rvk[S.i] || {}; S.rvk[S.i][k] = 1; S.rv = S.rv || {}; S.rv[S.i] = Object.keys(S.rvk[S.i]).length; if (stepDone(st)) S.done[S.i] = 1; save(); upd(); } }); });
    if (st.t === "text") { var rd = $("#mk-rd"), mark = function () { S.done[S.i] = 1; if (rd) rd.checked = true; save(); upd(); }; if (rd) rd.addEventListener("change", function () { if (rd.checked) { addXP(3); mark(); } }); $$("[data-say],[data-sayslow]", box).forEach(function (b) { b.addEventListener("click", mark); }); }
    if (st.t === "mcq") {
      if (S.done[S.i]) { var rb = box.querySelector('[data-k="' + st.a + '"]'); if (rb) rb.classList.add("right"); $("#mk-fb").innerHTML = '<div class="mk-fb ok">✅ ' + (st.why || "Correct!") + '</div>'; }
      $$(".mk-opts button", box).forEach(function (b) { b.addEventListener("click", function () {
        var k = +b.dataset.k, fb = $("#mk-fb");
        if (k === st.a) { b.classList.add("right"); fb.innerHTML = '<div class="mk-fb ok">✅ Correct! ' + (st.why || "") + '</div>'; if (!S.done[S.i]) { addXP(st._miss ? 5 : 10); S.done[S.i] = 1; save(); } upd(); }
        else { b.classList.add("wrong"); st._miss = 1; fb.innerHTML = '<div class="mk-fb no">❌ Not quite. ' + (st.why ? "<b>Remember:</b> " + st.why + " — " : "") + 'Read the rule again and try another answer.</div>'; }
      }); });
    }
    if (st.t === "gap") {
      var g = $("#mk-g"), chk = function () {
        var v = g.value; S.ans[S.i] = v; save();
        var ok = st.acc.some(function (a) { return norm(a) === norm(v); });
        $("#mk-fb").innerHTML = ok ? '<div class="mk-fb ok">✅ Correct! ' + (st.why || "") + '</div>' : '<div class="mk-fb no">❌ Not yet. ' + (st.hint || st.why || "Check the spelling and try again.") + '</div>';
        if (ok && !S.done[S.i]) { addXP(st._miss ? 5 : 10); S.done[S.i] = 1; save(); } if (!ok) st._miss = 1; upd();
      };
      $("#mk-gc").addEventListener("click", chk); g.addEventListener("keydown", function (e) { if (e.key === "Enter") chk(); });
      if (S.done[S.i]) $("#mk-fb").innerHTML = '<div class="mk-fb ok">✅ ' + (st.why || "Correct!") + '</div>';
    }
    var w = $("#mk-w");
    if (w) {
      var live = function () {
        var t = w.value; S.ans[S.i] = t; save();
        $("#mk-wc").textContent = words(t).length + " words";
        var list = checks(st, t), ck = $("#mk-ck");
        if (ck) ck.innerHTML = list.map(function (c) { return '<li class="' + (c[0] ? "ok" : "no") + '">' + (c[0] ? "✅ " : "⬜ ") + esc(c[1]) + '</li>'; }).join("");
        var ready = list.length ? list.every(function (c) { return c[0]; }) : words(t).length >= (st.t === "speak" ? 12 : 3);
        if (ready && !S.done[S.i]) { S.done[S.i] = 1; addXP(st.t === "research" ? 20 : 15); save(); upd(); }
        if (st.model && $("#mk-modelwrap")) $("#mk-modelwrap").innerHTML = words(t).length >= 5 ? '<details class="mk-d"><summary>📝 Compare with a model answer</summary><div class="mk-model">' + st.model + '</div><p style="font-size:.85rem">Don\'t copy it — notice one idea or phrase you could add to yours.</p></details>' : '<p style="font-size:.85rem;color:#46625e">📝 A model answer appears here after you write a few words.</p>';
      };
      w.addEventListener("input", live); live();
      var ins = box.querySelector("[data-ins]");
      if (ins) ins.addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; var s = b.textContent; w.value = (w.value && !/\s$/.test(w.value) ? w.value + " " : w.value) + s + " "; w.focus(); live(); });
    }
    if (st.t === "research") {
      var qi = $("#mk-q"), out = $("#mk-res"), simple = function () { return $("#mk-simple").checked; };
      $("#mk-go").addEventListener("click", function () { wiki(qi.value, simple(), out); });
      qi.addEventListener("keydown", function (e) { if (e.key === "Enter") wiki(qi.value, simple(), out); });
      var qc = box.querySelector("[data-q]"); if (qc) qc.addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; qi.value = b.textContent; wiki(qi.value, simple(), out); });
      out.addEventListener("click", function (e) {
        var b = e.target.closest("[data-sum]"); if (!b) return; var r = b.closest(".r"); if (r.querySelector(".x")) return;
        var d = document.createElement("div"); d.className = "x"; d.textContent = "Loading…"; r.appendChild(d);
        fetch("https://" + r.dataset.lang + ".wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(r.dataset.title.replace(/ /g, "_")))
          .then(function (x) { return x.json(); }).then(function (j) { d.innerHTML = esc(j.extract || "No summary.") + ' <button class="mk-say" title="Listen">🔊</button>'; d.querySelector("button").addEventListener("click", function () { say(j.extract || ""); }); addXP(2); })
          .catch(function () { d.textContent = "Summary not available — open the article instead."; });
      });
      box.querySelector("[data-web]").addEventListener("click", function () { open(WEB(qi.value)); addXP(1); });
      box.querySelector("[data-yt]").addEventListener("click", function () { open(YT(qi.value)); });
      box.querySelector("[data-tr]").addEventListener("click", function () { open(TR(qi.value)); });
      box.querySelector("[data-ai]").addEventListener("click", function () { open(AI("I am learning English (around B1 level) and doing a research task. Please explain the topic in very simple English with 3–5 short facts and tell me 2 trustworthy websites where I can check them. Do NOT write my answer for me. Task: " + strip(st.task).slice(0, 900))); });
      var nt = $("#mk-notes"); nt.addEventListener("input", function () { S.notes[S.i] = nt.value; save(); });
    }
    if (st.t === "speak") {
      var rb2 = $("#mk-rec"), rt = $("#mk-rt"), au = $("#mk-au"), mr = null, chunks = [], timer = null, t0 = 0;
      rb2.addEventListener("click", function () {
        if (mr && mr.state === "recording") { mr.stop(); return; }
        if (!navigator.mediaDevices || !window.MediaRecorder) { rt.textContent = "Recording isn't supported here — use your phone's voice-note app."; return; }
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (s) {
          chunks = []; mr = new MediaRecorder(s); mr.ondataavailable = function (e) { chunks.push(e.data); };
          mr.onstop = function () { s.getTracks().forEach(function (tr) { tr.stop(); }); clearInterval(timer); au.src = URL.createObjectURL(new Blob(chunks)); au.style.display = "block"; rb2.textContent = "🎙 Record again"; rt.textContent = "Listen back. Happy? Great!"; if (!S.done[S.i]) { S.done[S.i] = 1; addXP(15); save(); upd(); } };
          mr.start(); t0 = Date.now(); rb2.textContent = "⏹ Stop"; timer = setInterval(function () { var sec = Math.round((Date.now() - t0) / 1000); rt.textContent = "Recording… " + sec + "s" + (st.limit && sec > st.limit ? " (over " + st.limit + "s!)" : ""); }, 250);
        }).catch(function () { rt.textContent = "Microphone blocked. Allow it in your browser, or use your phone's voice-note app."; });
      });
    }
    if (st.t === "summary") {
      var nm = $("#mk-nm"); nm.addEventListener("input", function () { S.name = nm.value; save(); cert(); });
      $("#mk-copy").addEventListener("click", function () { var t = answerSheet(), b = this; (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(function () { b.textContent = "✅ Copied!"; }, function () { prompt("Copy your answers:", t); }); });
      $("#mk-wa").addEventListener("click", function () { open("https://wa.me/?text=" + encodeURIComponent(answerSheet().slice(0, 3500))); });
      $("#mk-tg").addEventListener("click", function () { open("https://t.me/share/url?url=" + encodeURIComponent("https://ilearnenglishhere.academy/" + "mission.html") + "&text=" + encodeURIComponent(answerSheet().slice(0, 3000))); });
      $("#mk-dl").addEventListener("click", function () { var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([answerSheet()], { type: "text/plain" })); a.download = M.id + "-answers.txt"; a.click(); });
      $("#mk-reset").addEventListener("click", function (e) { e.preventDefault(); if (confirm("Delete your answers for this mission and start again?")) { try { localStorage.removeItem(KEY); } catch (x) {} location.reload(); } });
    }
  }
  show();
})();
