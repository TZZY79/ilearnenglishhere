/* I Learn English Here — site engine (every page)
   • Live "Learn something new" ticker   • "What do I do?" / "I don't know" help buttons with learner-chosen routes
   • Share button   • Mini-brain learner profile (age group, pace, help-style, mistakes per topic) stored only on this device
   Free, no sign-up, no data leaves the device (except anonymous fetches of public Wikipedia "On this day" facts).
   © I Learn English Here · an Online Business Awareness project */
(function () {
  "use strict";
  if (window.ILEH && window.ILEH.ready) return;
  var me = document.currentScript || document.querySelector('script[src*="ileh.js"]');
  var BASE = me ? me.src.replace(/assets\/ileh\.js.*$/, "") : "/";
  var SITE = "https://ilearnenglishhere.academy/";
  var KEY = "ileh.v1";
  var page = (location.pathname.split("/").pop() || "index").replace(/\.html?$/, "") || "index";
  var inLesson = /\/lessons\//.test(location.pathname);

  /* ---------- storage (safe) ---------- */
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  var P = load();
  P.topics = P.topics || {}; P.style = P.style || {}; P.pron = P.pron || {}; P.pace = P.pace || 1;
  function save() { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) {} }
  (function streak() {
    var d = new Date().toISOString().slice(0, 10);
    if (P.lastDay !== d) {
      var y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
      P.streak = P.lastDay === y ? (P.streak || 0) + 1 : 1; P.lastDay = d; save();
    }
  })();

  /* ---------- page guides + topic map ---------- */
  var G = {
    "index": {what:"This is the home page. Pick a free lesson, or use the Coach to practise the things you find difficult.",steps:["Tap <b>Start Here</b> if you are new — take the 1-minute level check.","Open any lesson card and follow it slide by slide.","Visit the <b>Coach</b> — it remembers your mistakes and makes a lesson just for you.","Try <b>Speak</b> to hear and practise any word."],simple:"Choose a lesson. Learn. Practise. Come back tomorrow!",example:"Example: open <b>Present Perfect</b> → read the rule → try the quiz → the Coach saves what you got wrong."},
    "lessons": {what:"This is the lesson library. Every lesson teaches the rule first, then lets you practise.",steps:["Look at the level (Foundation, Elementary, B1).","Tap a lesson to open it.","Use the <b>❓</b> and <b>🤷</b> buttons on the right of any page if you get stuck."],simple:"Pick one lesson. Start at the top.",example:"Not sure where to start? Try <b>Stative Verbs + Go, Do & Play</b> — it's short and fun."},
    "start-here": {what:"Answer a few quick questions to find your level, then we show you where to start.",steps:["Answer each question — don't worry about mistakes.","See your level.","Open the lessons we suggest for that level."],simple:"Answer. See your level. Start learning.",example:"Score low? Start with Foundation lessons. That's normal and smart!"},
    "faq": {what:"Answers to common questions about this free website.",steps:["Read the question that matches yours.","Still stuck? Use the help buttons or open the Coach."],simple:"Questions and answers.",example:"Example: 'Is it really free?' — yes, every lesson is free."},
    "coach": {what:"Your personal Study Coach. It remembers what you find difficult and builds a lesson trip just for you.",steps:["Tell the Coach your age group so explanations fit you.","Press <b>Start my trip</b>.","Learn the rule your way, then practise until you get it right.","Come back tomorrow — the Coach adapts to you."],simple:"Press the big button. Learn. Practise. The Coach helps you.",example:"If you keep mixing up 'much' and 'many', the Coach will teach the COUNT TEST and give you practice until it's easy."},
    "speak": {what:"The Speech Lab is a talking dictionary. Hear a word, see it broken into parts, slow it down and practise saying it.",steps:["Type a word or tap a word from a list.","Press <b>▶ Listen</b> — try the slow speeds.","Look at the syllables and the stressed part.","Press <b>🎤 Say it</b> and try to copy the sound."],simple:"Type a word. Listen. Say it. Repeat.",example:"Try <b>Wednesday</b> — it's spelt with a 'd' but most people say 'WENZ-day'!"},
    "english-story": {what:"The story of English — where the language came from, how it changed and how British people really use it today.",steps:["Read one chapter at a time.","Answer the quick check at the end of each chapter.","Visit <b>The British Way</b> to learn what people really mean."],simple:"Read a short story about English. Answer one question.",example:"Did you know 'sky' and 'egg' came from the Vikings?"},
    "mission": {what:"The home page of the Special Mission: Buying a Home in England — our most advanced course (B2–C1).",steps:["Read why the mission is advanced.","Take the readiness test (you need more than 49%).","Open Part 1 and work through each slide.","Write your answers in the boxes — they save automatically."],simple:"Pass the test. Then start Part 1.",example:"Not ready? Do the Road to the Mission tasks first — they build the skills you need."},
    "mission-check": {what:"A 30-question readiness test for the advanced Buying a Home mission. More than 49% unlocks it.",steps:["Read each question carefully — there's no feedback until the end.","Choose the best answer.","See your score and your strongest and weakest skills.","Follow the plan to improve, then try again."],simple:"Answer 30 questions. Get more than 15 right to unlock the mission.",example:"Low score? That's normal — it means 'not yet', not 'never'."},
    "mission-prep": {what:"The Road to the Mission: a step-by-step route plus five pre-mission tasks that build the skills for the advanced course.",steps:["Check the ladder — are you at Foundation, Elementary or B1?","Do Tasks 1–5 below. Score 70%+ to tick each one off.","Your writing saves automatically — download it to keep it.","When all 5 are done, take the readiness test."],simple:"Do the 5 tasks. Then take the test.",example:"Task 3 checks your formal email for a greeting, a polite request and a formal ending."},
    "house-1": {topics:["present-perfect","first-conditional","comparatives"],what:"Mission Part 1: the first weeks of buying a home — budgets, borrowing, the AIP, costs, viewings and making an offer.",steps:["Read the story box on each slide.","Do every ENGLISH SKILLS TASK — write your answers in the boxes under each question.","Use the research links on the right (YouTube and Wikipedia).","Download your work at the end of each session."],simple:"Read. Answer in the boxes. Your work saves.",example:"Calculations: show your working, e.g. £28,000 × 4.5 = £126,000."},
    "house-2": {topics:["present-perfect","advice-should"],what:"Mission Part 2: the legal work — solicitors, surveys, searches and the TA6/TA10 forms.",steps:["Read each slide's story.","Answer every task in the boxes.","Formal letters: Dear…, I am writing to…, Yours sincerely/faithfully.","Download your work regularly."],simple:"Read. Answer in the boxes. Save your work.",example:"'Yours sincerely' if you know the name, 'Yours faithfully' after 'Dear Sir or Madam'."},
    "house-3": {topics:["future","first-conditional"],what:"Mission Part 3: exchange of contracts, stamp duty, the TR1 form and completion day.",steps:["Read each slide.","Answer every task in the boxes.","Check calculations twice.","Finish with the final reflection and download all your work."],simple:"Read. Answer. Finish the mission!",example:"Stamp duty: work band by band, e.g. the first £125,000 at 0%."},
    "present-perfect": {topics:["present-perfect"],what:"This lesson teaches the Present Perfect (have/has + past participle) and its time words: already, yet, ever, never, just, for, since.",steps:["Read each slide and tap to reveal the answers.","Do the vote, quiz and fill-the-gap activities.","Check the feedback — it explains WHY.","Use the summary slide at the end to review."],simple:"Learn 'I have done'. Practise. Check.",example:"I <b>have visited</b> London. (some time in my life — not when)"},
    "stative-verbs": {topics:["stative-verbs","go-do-play"],what:"This lesson teaches stative verbs (know, love, have…) and which sports go with GO, DO and PLAY.",steps:["Read the slides and look at the pictures.","Learn which verbs don't use -ing.","Learn PLAY (ball), GO (-ing), DO (others).","Take the quiz at the end."],simple:"Some verbs don't use -ing. Learn play / go / do.",example:"I <b>know</b> him ✓ (not 'I am knowing') · I <b>play</b> football, <b>go</b> swimming, <b>do</b> yoga."},
    "bring-words-to-life": {topics:["punctuation"],what:"A reading lesson: read sentences with emotion and use punctuation to guide your voice.",steps:["Read each sentence aloud in different ways.","Learn how . , ? and ! change your voice.","Guess the emotion your partner used.","Perform in the reading theatre."],simple:"Read aloud with feeling.",example:"'You're here.' 😐 / 'You're here?' 🤔 / 'You're here!' 🎉"},
    "advice-suggestions-games": {topics:["advice-should"],what:"Games to practise giving advice and suggestions: should, why don't you, let's, how about.",steps:["Read the game rules.","Play in teams.","Use the advice phrases in every answer."],simple:"Give advice to friends.",example:"You're tired? → You <b>should</b> rest. / <b>How about</b> taking a nap?"},
    "b1-grammar-vocabulary-review": {topics:["quantifiers","future"],what:"A B1 review lesson: college vocabulary, much/many/a few/a little, cooking verbs, going to vs will, and travel English.",steps:["Go through each section.","Listen to the dialogues.","Do the COUNT TEST practice.","Decide: going to or will?"],simple:"Review vocabulary and grammar.",example:"How <b>many</b> books? (countable) · How <b>much</b> water? (uncountable)"},
    "b1-revision-slideshow": {topics:["quantifiers","future"],what:"A B1 revision slideshow covering vocabulary, quantity words and the future.",steps:["Move through the slides.","Answer the test-yourself questions.","Check the big table when you are unsure."],simple:"Revise B1 English, slide by slide.",example:"<b>A few</b> friends (countable) · <b>a little</b> time (uncountable)"},
    "b1-units-1-2-quiz": {topics:["quantifiers","future"],what:"A quiz to check your B1 grammar and vocabulary.",steps:["Read each question carefully.","Choose or type your answer.","Look at your score and review mistakes."],simple:"Answer the questions. Check your score.",example:"There isn't ___ milk. → <b>much</b>"},
    "debate-guide": {topics:["advice-should"],what:"A guide to help you prepare and speak in a debate in English.",steps:["Prepare your ideas.","Follow the 5-step plan.","Use the useful debate language.","Practise with the example topic."],simple:"Plan your ideas. Say them clearly.",example:"'In my opinion… Firstly… However… To sum up…'"},
    "fitness-health": {topics:["too-enough","past-continuous"],what:"A health lesson: adjectives, TOO vs ENOUGH, and WHEN vs WHILE for telling stories.",steps:["Learn the adjectives.","Compare a bad coach and a good coach.","Practise too/enough and when/while.","Play the games."],simple:"Learn too / enough and when / while.",example:"This is <b>too</b> heavy. / I'm strong <b>enough</b>. / <b>While</b> I was running, it started to rain."},
    "game-hub": {topics:["present-perfect","go-do-play"],what:"A hub of classroom games to practise collocations and grammar.",steps:["Pick a game.","Read 'How it works'.","Play and keep score on the scoreboard."],simple:"Pick a game. Play. Score points.",example:"Never Ever Poker: 'I've never been to Japan.'"},
    "grammar-review-worksheet": {topics:["present-perfect","past-simple","future"],what:"An interactive worksheet to review the main grammar points.",steps:["Read each instruction.","Fill in the answers.","Check and correct your mistakes."],simple:"Fill in the gaps. Check.",example:"I ___ (see) it yesterday. → <b>saw</b>"},
    "plans-predictions-games": {topics:["future"],what:"Five games to practise plans and predictions with going to and will.",steps:["Read the rules of each game.","Print the cards if you are in class.","Use going to for plans and will for predictions/decisions."],simple:"Play games about the future.",example:"I'm <b>going to</b> travel next year. / I think it <b>will</b> rain."},
    "plans-predictions-worksheet": {topics:["future"],what:"A worksheet to practise plans and predictions.",steps:["Read the examples.","Complete each exercise.","Check your answers."],simple:"Write about the future.",example:"Look at the clouds — it's <b>going to</b> rain."},
    "team-revision-battle": {topics:["quantifiers","future"],what:"A team game to revise grammar and vocabulary.",steps:["Make teams.","Answer the activity questions.","Score points for correct answers."],simple:"Play in teams. Answer. Win!",example:"Team A: 'How ___ sugar?' → '<b>much</b>!'"}
  };
  var guide = G[page] || {what:"This page is part of I Learn English Here.",steps:["Read from the top.","Try the activities.","Use the help buttons if you get stuck."],simple:"Read. Try. Ask for help.",example:""};
  var KW = {"present-perfect":/present perfect|have \w+ed|already|yet|ever|never|since|for /i,"quantifiers":/much|many|a few|a little|quantit|count/i,"future":/going to|will|future|predict|plan/i,"stative-verbs":/stative|think|have —|taste|smell/i,"go-do-play":/play|go ·|do ·|collocation|sport/i,"too-enough":/too|enough/i,"past-continuous":/when|while/i,"advice-should":/should|advice|suggest/i,"punctuation":/punctuation|read|emotion/i};

  /* ---------- helpers ---------- */
  function h(tag, attrs, html) { var e = document.createElement(tag); if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]); if (html != null) e.innerHTML = html; return e; }
  function rnd(n) { return Math.floor(Math.random() * n); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = rnd(i + 1), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function strip(s) { return String(s).replace(/<[^>]+>/g, " ").replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}\u{20E3}\u{1F1E6}-\u{1F1FF}]/gu, "").replace(/[↗↘→←✓✔✗❌]/g, "").replace(/___/g, "blank").replace(/\s+/g, " ").trim(); }
  var voice = null;
  function pickVoice() { try { var v = speechSynthesis.getVoices(); voice = v.filter(function (x) { return /en-GB/i.test(x.lang); })[0] || v.filter(function (x) { return /^en/i.test(x.lang); })[0] || null; } catch (e) {} }
  if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text, rate, onb, onend) {
    if (!("speechSynthesis" in window)) { alert("Sorry — this browser can't read aloud. Try Chrome."); return; }
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(strip(text)); u.lang = "en-GB"; if (voice) u.voice = voice; u.rate = rate || 0.95;
    if (onb) u.onboundary = onb; if (onend) { u.onend = onend; u.onerror = onend; }
    speechSynthesis.speak(u); return u;
  }
  function fill(t, p1, p2) { return String(t).replace(/\{N\}/g, p1[0]).replace(/\{C\}/g, p1[1]).replace(/\{K\}/g, p1[2]).replace(/\{N2\}/g, p2[0]); }
  var kbWait = [];
  function loadKB(cb) {
    if (window.ILEH_KB) return cb(window.ILEH_KB);
    kbWait.push(cb); if (kbWait.length > 1) return;
    var s = document.createElement("script"); s.src = BASE + "assets/ileh-kb.js?v=1";
    s.onload = function () { var w = kbWait; kbWait = []; w.forEach(function (f) { f(window.ILEH_KB); }); };
    document.head.appendChild(s);
  }
  function person(kb) { return kb.people[rnd(kb.people.length)]; }

  /* ---------- mini brain ---------- */
  function T(id) { return P.topics[id] = P.topics[id] || { c: 0, w: 0, idk: 0, last: 0 }; }
  function log(topic, correct) {
    if (!topic) return; var t = T(topic); correct ? t.c++ : t.w++; t.last = Date.now();
    // pace: quick correct streaks speed up, mistakes slow down (0.6 – 1.8)
    P.pace = Math.max(0.6, Math.min(1.8, (P.pace || 1) + (correct ? 0.04 : -0.08)));
    save(); document.dispatchEvent(new CustomEvent("ileh:log", { detail: { topic: topic, correct: correct } }));
  }
  function idk(topic) { if (!topic) return; var t = T(topic); t.idk++; t.last = Date.now(); P.pace = Math.max(0.6, (P.pace || 1) - 0.05); save(); }
  function mastery(id) { var t = P.topics[id]; if (!t) return null; var n = t.c + t.w + t.idk * 1.5; if (!n) return null; return Math.round(100 * (t.c + 1) / (n + 2)); }
  function weak(n) {
    return Object.keys(P.topics).map(function (k) { return { id: k, m: mastery(k), t: P.topics[k] }; })
      .filter(function (x) { return x.m !== null && x.m < 80; }).sort(function (a, b) { return a.m - b.m; }).slice(0, n || 3);
  }
  function likeStyle(s) { P.style[s] = (P.style[s] || 0) + 1; save(); }
  function topStyle() { var s = P.style, best = null; for (var k in s) if (!best || s[k] > s[best]) best = k; return best; }

  /* ---------- auto-detect right/wrong answers inside existing lessons ---------- */
  var lastAct = 0, seen = new WeakMap();
  ["pointerdown", "keydown", "input", "change"].forEach(function (ev) { document.addEventListener(ev, function (e) { if (!e.target.closest || !e.target.closest(".ileh-ui")) lastAct = Date.now(); }, true); });
  var GOOD = /(^|\s)(correct|right|ok|good|is-correct|success|win)(\s|$)/, BAD = /(^|\s)(wrong|incorrect|no|bad|is-wrong|wrong-flash|error|fail)(\s|$)/;
  function topicFor(el) {
    var tops = guide.topics || []; if (tops.length < 2) return tops[0];
    var n = el, txt = ""; for (var i = 0; i < 8 && n; i++, n = n.parentElement) { var hd = n.querySelector && n.querySelector("h1,h2,h3,h4,.title,.q,.question"); if (hd) { txt = hd.textContent + " " + (n.textContent || "").slice(0, 300); break; } }
    for (var j = 0; j < tops.length; j++) if (KW[tops[j]] && KW[tops[j]].test(txt)) return tops[j];
    return tops[0];
  }
  if (inLesson && guide.topics && "MutationObserver" in window) {
    new MutationObserver(function (ms) {
      if (Date.now() - lastAct > 2500) return;
      ms.forEach(function (m) {
        var el = m.target; if (!el.className || typeof el.className !== "string" || (el.closest && el.closest(".ileh-ui"))) return;
        var old = m.oldValue || "", now = el.className, last = seen.get(el) || 0;
        if (Date.now() - last < 2500) return;
        var g = GOOD.test(now) && !GOOD.test(old), b = BAD.test(now) && !BAD.test(old);
        if (g === b) return; seen.set(el, Date.now()); log(topicFor(el), g);
      });
    }).observe(document.body, { attributes: true, attributeFilter: ["class"], attributeOldValue: true, subtree: true });
  }

  /* ---------- styles ---------- */
  var link = h("link", { rel: "stylesheet", href: BASE + "assets/ileh.css?v=1" }); document.head.appendChild(link);

  /* ---------- ticker ---------- */
  var BANK = [
    ["💡 Tip","Don't translate word by word — learn whole phrases like 'How's it going?'"],
    ["💡 Tip","Speak a little every day. Five minutes daily beats one hour once a week."],
    ["💡 Tip","Copy a native speaker for 30 seconds (shadowing) — it improves your rhythm fast."],
    ["💡 Tip","Mistakes are proof you are trying. Every error teaches the Coach how to help you."],
    ["💡 Tip","In English the stress matters: PHOtograph, phoTOgrapher, photoGRAPHic."],
    ["💡 Tip","Record yourself on your phone and listen back. You will hear things you can't notice while speaking."],
    ["💡 Tip","Learn words in groups: kitchen words, travel words, feelings words."],
    ["💡 Tip","Want to sound natural? Use contractions: I'm, you're, it's, don't, I've."],
    ["📚 Did you know?","'Set' has more meanings than almost any other English word — the Oxford English Dictionary lists hundreds."],
    ["📚 Did you know?","The most common letter in English is E. The least common is usually Q or Z."],
    ["📚 Did you know?","'Queue' is pronounced exactly the same as the letter Q — the last four letters are silent!"],
    ["📚 Did you know?","'Strengths' has only one vowel letter and eight letters in total."],
    ["📚 Did you know?","'The quick brown fox jumps over the lazy dog' uses every letter of the alphabet."],
    ["📚 Did you know?","More people speak English as a second language than as a first language."],
    ["📚 Did you know?","'Goodbye' comes from 'God be with ye'."],
    ["📚 Did you know?","'Alphabet' comes from the first two Greek letters: alpha and beta."],
    ["📚 Did you know?","'OK' started as a joke spelling of 'oll korrect' in 1830s Boston newspapers."],
    ["📚 Did you know?","Wednesday has a silent D for most speakers: 'WENZ-day'."],
    ["📜 History","English began about 1,500 years ago with the Angles, Saxons and Jutes. 'England' means 'land of the Angles'."],
    ["📜 History","After 1066, French became the language of England's rulers — that's why we have 'beef' (French) but 'cow' (English)."],
    ["📜 History","The Vikings gave English everyday words like sky, egg, knife, window and even 'they'."],
    ["📜 History","Shakespeare is the first known writer of many words, such as 'lonely' and 'bedroom'."],
    ["📜 History","Samuel Johnson's famous English dictionary was published in 1755 and took about nine years to write."],
    ["📜 History","Noah Webster changed American spelling: colour → color, centre → center."],
    ["📜 History","Between about 1400 and 1700, English vowels moved — the 'Great Vowel Shift'. That's why spelling and sound often don't match."],
    ["😂 Joke","Why did the student eat his homework? Because the teacher said it was a piece of cake!"],
    ["😂 Joke","What's the longest word in English? 'Smiles' — there's a mile between the first and last letter!"],
    ["😂 Joke","Why is the letter A like a flower? Because a B comes after it!"],
    ["😂 Joke","What has four letters, sometimes nine, and never five? A sentence that's true!"],
    ["😂 Joke","Why don't scientists trust atoms? Because they make up everything!"],
    ["😂 Joke","I'm reading a book about anti-gravity. I can't put it down!"],
    ["💬 Small talk","'How's your day going?' → 'Not bad, thanks. Busy, but good!'"],
    ["💬 Small talk","'Lovely weather today, isn't it?' → 'Gorgeous! Let's hope it lasts.'"],
    ["💬 Small talk","'Did you have a good weekend?' → 'Yeah, really relaxing, thanks. You?'"],
    ["💬 Small talk","'What do you do?' = 'What is your job?'"],
    ["💬 Small talk","'Long time no see!' → 'I know! How have you been?'"],
    ["💬 Small talk","'Have you been here before?' → 'No, it's my first time. It's great!'"],
    ["🗣️ Phrase","'I'm over the moon' = I'm extremely happy."],
    ["🗣️ Phrase","'It's raining cats and dogs' = it's raining very heavily."],
    ["🗣️ Phrase","'Break a leg!' = good luck (before a performance)."],
    ["🗣️ Phrase","'Piece of cake' = very easy."],
    ["🗣️ Phrase","'I'm all ears' = I'm listening carefully."],
    ["🗣️ Phrase","'Let's call it a day' = let's stop working now."],
    ["🇬🇧 British English","Brits say 'flat' (US: apartment), 'lift' (elevator), 'queue' (line), 'biscuit' (cookie)."],
    ["🇬🇧 British English","In Britain, 'pants' are underwear! Trousers are what you wear on your legs."],
    ["🇬🇧 British English","'Brummie' is the accent of Birmingham, 'Scouse' is Liverpool, 'Geordie' is Newcastle."],
    ["🇬🇧 British English","'Innit?' is a very informal British way to say 'isn't it?'"],
    ["🌍 World English","In India, 'prepone' means to move a meeting earlier — the opposite of postpone!"],
    ["🌍 World English","Australians say 'arvo' for afternoon and 'brekkie' for breakfast."],
    ["🌍 World English","In Nigeria, 'I'm coming' can mean 'wait, I'll be right back'."],
    ["🌍 World English","Singapore English (Singlish) uses 'lah' at the end of sentences for emphasis: 'Okay lah!'"]
  ];
  var LINKS = [
    ["🆕 Learn","Make your own lesson: the Coach finds your mistakes and builds a trip just for you →","coach.html"],
    ["🆕 Learn","Hear any word, slowed down and broken into parts — try the Speech Lab →","speak.html"],
    ["🆕 Learn","Where did English come from? Read The Story of English →","english-story.html"],
    ["🆕 Learn","What Brits REALLY mean when they say 'not bad' — The British Way →","english-story.html#british-way"],
    ["🗺️ Special Missions","Real-life English missions from easier to expert — Britain trip, Creator Academy, Buying a Home →","mission.html"],
    ["🏠 Special Mission","Not ready yet? The Road to the Mission builds your skills step by step →","mission-prep.html"],
    ["🆕 Lesson","Present Perfect: connect the past to now →","lessons/present-perfect.html"],
    ["🆕 Lesson","Why 'I am knowing' is wrong — Stative Verbs →","lessons/stative-verbs.html"],
    ["🆕 Lesson","Read with feeling — Bring Words to Life →","lessons/bring-words-to-life.html"],
    ["📲 Share","Improving? Tell your family! Say: 'I've been learning English on ilearnenglishhere.academy — it's free!' Tap to share →","#share"]
  ];
  function dayShuffle(arr) { var d = new Date(), seed = d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate(); var a = arr.slice(); for (var i = a.length - 1; i > 0; i--) { seed = (seed * 9301 + 49297) % 233280; var j = Math.floor(seed / 233280 * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  var tick = null;
  function itemHTML(it) {
    var href = it[2]; var inner = '<b>' + it[0] + '</b> ' + esc(it[1]);
    if (!href) return '<span class="ileh-ti">' + inner + '</span>';
    var u = href.charAt(0) === "#" || /^https?:/.test(href) ? href : BASE + href;
    return '<a class="ileh-ti" href="' + u + '"' + (/^https?:/.test(href) ? ' target="_blank" rel="noopener"' : '') + '>' + inner + '</a>';
  }
  function buildTicker(extra) {
    try { if (sessionStorage.getItem("ileh.tickerOff")) return; } catch (e) {}
    var items = dayShuffle(BANK).slice(0, 18), links = dayShuffle(LINKS);
    var mixed = []; items.forEach(function (it, i) { mixed.push(it); if (i % 3 === 2 && links.length) mixed.push(links.shift()); });
    if (extra) extra.forEach(function (e, i) { mixed.splice(2 + i * 5, 0, e); });
    var bw = window.ILEH_KB && window.ILEH_KB.britishWay; if (bw) { var b = bw[new Date().getDate() % bw.length]; mixed.splice(1, 0, ["🇬🇧 The British Way", "'" + b.say + "' really means: " + b.mean, "english-story.html#british-way"]); }
    var html = mixed.map(itemHTML).join('<span class="ileh-sep">•</span>');
    if (!tick) {
      tick = h("div", { "class": "ileh-ui ileh-ticker", role: "region", "aria-label": "Learn something new" });
      tick.innerHTML = '<span class="ileh-tlabel">✨ Learn something new</span><div class="ileh-tview"><div class="ileh-ttrack"></div></div><button class="ileh-tbtn" data-a="pause" aria-label="Pause">❚❚</button><button class="ileh-tbtn" data-a="close" aria-label="Hide for now">✕</button>';
      document.body.insertBefore(tick, document.body.firstChild);
      if (inLesson) pinTicker();
      tick.addEventListener("click", function (e) {
        var b = e.target.closest("[data-a]"), a = e.target.closest('a[href="#share"]');
        if (a) { e.preventDefault(); openShare(); return; }
        if (!b) return;
        if (b.dataset.a === "close") { unpinTicker(); tick.remove(); try { sessionStorage.setItem("ileh.tickerOff", "1"); } catch (x) {} }
        if (b.dataset.a === "pause") { tick.classList.toggle("paused"); b.textContent = tick.classList.contains("paused") ? "▶" : "❚❚"; }
      });
    }
    var track = tick.querySelector(".ileh-ttrack"); track.innerHTML = html + '<span class="ileh-sep">•</span>' + html;
    var secs = Math.max(60, Math.round(track.textContent.length / 2 / 7)); track.style.animationDuration = secs + "s";
  }
  var shifted = [], padOld = null;
  function pinTicker() {
    tick.classList.add("pinned"); var cs = getComputedStyle(document.body); padOld = document.body.style.paddingTop;
    document.body.style.paddingTop = (parseFloat(cs.paddingTop) || 0) + 34 + "px";
    setTimeout(function () {
      Array.prototype.forEach.call(document.body.querySelectorAll("*"), function (el) {
        if (el.closest(".ileh-ui")) return; var c = getComputedStyle(el);
        if ((c.position === "fixed" || c.position === "sticky") && c.top !== "auto" && parseFloat(c.top) < 8 && el.getBoundingClientRect().height < window.innerHeight * 0.6) {
          shifted.push([el, el.style.top]); el.style.top = (parseFloat(c.top) || 0) + 34 + "px";
        }
      });
    }, 60);
  }
  function unpinTicker() { if (!tick || !tick.classList.contains("pinned")) return; document.body.style.paddingTop = padOld || ""; shifted.forEach(function (x) { x[0].style.top = x[1]; }); shifted = []; }
  function onThisDay() {
    var d = new Date(), mm = ("0" + (d.getMonth() + 1)).slice(-2), dd = ("0" + d.getDate()).slice(-2), ck = "ileh.otd." + mm + dd;
    try { var c = JSON.parse(localStorage.getItem(ck)); if (c) return buildTicker(c); } catch (e) {}
    if (!window.fetch) return;
    var bad = /kill|war|attack|bomb|murder|shoot|massacre|terror|dies|died|death|dead|execut|genocide|assassin|crash|disaster|riot|invade|invasion|battle|weapon|nuclear|hostage|earthquake|sink/i;
    fetch("https://en.wikipedia.org/api/rest_v1/feed/onthisday/selected/" + mm + "/" + dd).then(function (r) { return r.json(); }).then(function (j) {
      var out = (j.selected || []).filter(function (x) { return x.text && !bad.test(x.text) && x.text.length < 170; }).slice(0, 3).map(function (x) {
        var url = x.pages && x.pages[0] && x.pages[0].content_urls ? x.pages[0].content_urls.mobile.page : null;
        return ["📅 On this day (" + x.year + ")", x.text, url];
      });
      try { localStorage.setItem(ck, JSON.stringify(out)); } catch (e) {}
      if (out.length) buildTicker(out);
    }).catch(function () {});
  }

  /* ---------- floating buttons + panel ---------- */
  var fab, panel, body, ageBar;
  function ui() {
    fab = h("div", { "class": "ileh-ui ileh-fab" });
    fab.innerHTML = '<button data-h="toggle" class="ileh-tog" title="Help"><span>🙋</span><small>Help</small></button>' +
      '<button data-h="what" title="What do I do here?"><span>❓</span><small>What do I do?</small></button>' +
      '<button data-h="idk" title="I don\'t know the answer"><span>🤷</span><small>I don\'t know</small></button>' +
      '<button data-h="share" title="Share this page"><span>📤</span><small>Share</small></button>';
    document.body.appendChild(fab);
    fab.addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; var k = b.dataset.h; if (k === "toggle") { fab.classList.toggle("open"); return; } fab.classList.remove("open"); if (k === "what") openWhat(); else if (k === "idk") openIdk(); else openShare(); });
    panel = h("div", { "class": "ileh-ui ileh-panel", role: "dialog", "aria-modal": "true", "aria-label": "Help" });
    panel.innerHTML = '<div class="ileh-sheet"><div class="ileh-top"><div class="ileh-age"></div><button class="ileh-x" aria-label="Close">✕</button></div><div class="ileh-body"></div></div>';
    document.body.appendChild(panel);
    body = panel.querySelector(".ileh-body"); ageBar = panel.querySelector(".ileh-age");
    panel.addEventListener("click", function (e) { if (e.target === panel || e.target.closest(".ileh-x")) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    renderAge();
  }
  function renderAge() {
    var ages = [["kid", "🧒 Kid"], ["teen", "🧑 Teen"], ["adult", "🧔 Adult"]];
    ageBar.innerHTML = '<span>Explain for:</span>' + ages.map(function (a) { return '<button data-age="' + a[0] + '" class="' + (P.age === a[0] ? "on" : "") + '">' + a[1] + '</button>'; }).join("");
    ageBar.onclick = function (e) { var b = e.target.closest("[data-age]"); if (!b) return; P.age = b.dataset.age; save(); renderAge(); if (panel._re) panel._re(); };
  }
  function open(html, re) { body.innerHTML = html; panel._re = re || null; panel.classList.add("on"); body.scrollTop = 0; }
  function close() { panel.classList.remove("on"); try { speechSynthesis.cancel(); } catch (e) {} }
  function chips(list) { return '<div class="ileh-chips">' + list.map(function (c) { return '<button data-c="' + c[0] + '">' + c[1] + '</button>'; }).join("") + '</div>'; }

  function openWhat() {
    var html = '<h3>❓ What do I do here?</h3><p class="ileh-lead">' + guide.what + '</p><p class="ileh-q">How would you like help?</p>' +
      chips([["steps", "📋 Step by step"], ["example", "👀 Show me an example"], ["simple", "🐢 Say it more simply"], ["listen", "🎧 Read it to me"], ["translate", "🌍 My language"], ["coach", "🧭 Take me to my Coach"]]) + '<div class="ileh-out"></div>';
    open(html, openWhat);
    body.querySelector(".ileh-chips").onclick = function (e) {
      var b = e.target.closest("[data-c]"); if (!b) return; var c = b.dataset.c, out = body.querySelector(".ileh-out"); likeStyle(c === "steps" ? "simple" : c);
      body.querySelectorAll(".ileh-chips button").forEach(function (x) { x.classList.toggle("on", x === b); });
      if (c === "steps") out.innerHTML = '<ol>' + guide.steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>";
      if (c === "example") out.innerHTML = '<div class="ileh-card">' + (guide.example || "Try the first activity on this page — then press ❓ again.") + "</div>";
      if (c === "simple") out.innerHTML = '<div class="ileh-card big">' + guide.simple + "</div>";
      if (c === "listen") { out.innerHTML = '<div class="ileh-card">🔊 Listening… <button class="ileh-mini" data-r="0.7">🐢 Slower</button></div>'; speak(guide.what + ". " + guide.steps.join(". "), 0.9); out.querySelector("[data-r]").onclick = function () { speak(guide.what + ". " + guide.steps.join(". "), 0.7); }; }
      if (c === "translate") out.innerHTML = '<div class="ileh-card">Open this page translated into your language (free, by Google Translate). Keep the English open too — compare them!<br><a class="ileh-btn" target="_blank" rel="noopener" href="https://translate.google.com/translate?sl=en&tl=auto&u=' + encodeURIComponent(location.href) + '">🌍 Translate this page</a></div>';
      if (c === "coach") location.href = BASE + "coach.html";
    };
  }

  function openIdk(forceTopic) {
    loadKB(function (kb) {
      var tops = guide.topics || [];
      if (!forceTopic && tops.length !== 1) {
        var list = (tops.length ? tops : Object.keys(kb.topics));
        open('<h3>🤷 That\'s OK — not knowing is where learning starts.</h3><p class="ileh-q">What are you stuck on?</p><div class="ileh-chips">' +
          list.map(function (id) { var t = kb.topics[id]; return '<button data-t="' + id + '">' + t.icon + " " + t.title + "</button>"; }).join("") + "</div>", function () { openIdk(); });
        body.querySelector(".ileh-chips").onclick = function (e) { var b = e.target.closest("[data-t]"); if (b) openIdk(b.dataset.t); };
        return;
      }
      var id = forceTopic || tops[0], t = kb.topics[id]; idk(id);
      var fav = topStyle();
      var routes = [["formula", "📐 Show me the formula"], ["trick", "💡 Easy way to remember"], ["history", "📜 The story behind it"], ["examples", "👀 Show me examples"], ["simple", "🐢 Explain it simply"], ["listen", "🎧 Read it to me"], ["try", "✍️ Try one with me"]];
      if (fav) routes.sort(function (a, b) { return (b[0] === fav) - (a[0] === fav); });
      open('<h3>' + t.icon + ' ' + t.title + '</h3><p class="ileh-lead">' + t.hook + '</p><p class="ileh-q">How do you learn best? Choose one — you can try them all.</p>' + chips(routes) + '<div class="ileh-out"></div>' +
        '<p class="ileh-foot"><a class="ileh-btn ghost" href="' + BASE + 'coach.html?topic=' + id + '">🧭 Build me a full Coach trip on this →</a></p>', function () { openIdk(id); });
      var out = body.querySelector(".ileh-out");
      body.querySelector(".ileh-chips").onclick = function (e) {
        var b = e.target.closest("[data-c]"); if (!b) return; var c = b.dataset.c; likeStyle(c);
        body.querySelectorAll(".ileh-chips button").forEach(function (x) { x.classList.toggle("on", x === b); });
        var age = P.age || "teen";
        if (c === "formula") out.innerHTML = '<div class="ileh-formula">' + t.formula.map(function (f) { return "<div>" + f + "</div>"; }).join("") + "</div>";
        if (c === "trick") out.innerHTML = '<div class="ileh-card trick">🧠 ' + t.trick + "</div>";
        if (c === "history") out.innerHTML = '<div class="ileh-card hist">📜 ' + t.history + "</div>";
        if (c === "examples") { var p1 = person(kb), p2 = person(kb); out.innerHTML = '<div class="ileh-card"><p>Tap each one to hear it:</p>' + t.examples.map(function (x) { return '<button class="ileh-ex">' + fill(x, p1, p2) + "</button>"; }).join("") + "</div>"; out.querySelectorAll(".ileh-ex").forEach(function (x) { x.onclick = function () { speak(x.innerHTML, 0.9); }; }); }
        if (c === "simple") out.innerHTML = '<div class="ileh-card big">' + t.explain.kid + '</div>' + (age !== "kid" ? '<details><summary>More detail (' + age + ')</summary><p>' + t.explain[age] + "</p></details>" : "");
        if (c === "listen") { out.innerHTML = '<div class="ileh-card">🔊 ' + t.explain[age] + ' <button class="ileh-mini">🐢 Slower</button></div>'; speak(t.explain[age], 0.9); out.querySelector(".ileh-mini").onclick = function () { speak(t.explain[age], 0.65); }; }
        if (c === "try") quick(kb, id, out, 0);
      };
      if (!P.age) out.innerHTML = '<div class="ileh-card soft">Tip: choose <b>Kid / Teen / Adult</b> at the top so explanations fit you. We only keep this on your device.</div>';
    });
  }
  /* one practice question with active remediation: a wrong answer shows WHY + the rule, then another try */
  function quick(kb, id, out, fails) {
    var t = kb.topics[id], it = t.items[rnd(t.items.length)], p1 = person(kb), p2 = person(kb); while (p2 === p1) p2 = person(kb);
    var q = fill(it.q, p1, p2), opts = shuffle([it.a].concat(it.o.slice(0, fails ? 1 : 3)));
    out.innerHTML = '<div class="ileh-card"><p class="ileh-qq">' + q.replace("___", '<span class="ileh-gap">____</span>') + '</p><div class="ileh-opts">' +
      opts.map(function (o) { return '<button data-o="' + esc(o) + '">' + esc(o) + "</button>"; }).join("") + '</div><div class="ileh-fb"></div></div>';
    out.querySelector(".ileh-opts").onclick = function (e) {
      var b = e.target.closest("[data-o]"); if (!b) return; var ok = b.dataset.o === it.a, fb = out.querySelector(".ileh-fb");
      out.querySelectorAll("[data-o]").forEach(function (x) { x.disabled = true; if (x.dataset.o === it.a) x.classList.add("ok"); });
      log(id, ok);
      if (ok) { b.classList.add("ok"); fb.innerHTML = '✅ <b>Yes!</b> ' + it.why + ' <button class="ileh-mini">Another one</button>'; fb.querySelector("button").onclick = function () { quick(kb, id, out, 0); }; }
      else { b.classList.add("no"); fb.innerHTML = '❌ <b>Not quite.</b> ' + it.why + '<div class="ileh-formula small">' + t.formula[0] + '</div><button class="ileh-mini">Try a similar one →</button>'; fb.querySelector("button").onclick = function () { quick(kb, id, out, fails + 1); }; }
    };
  }

  /* ---------- share ---------- */
  function shareText() { return "I've been learning English on I Learn English Here — free interactive lessons, a talking dictionary and a coach that helps with your mistakes. Try it: "; }
  function openShare(custom) {
    var url = location.href.split("#")[0], txt = custom || shareText(), full = txt + url;
    var nets = [["WhatsApp", "https://wa.me/?text=" + encodeURIComponent(full)], ["Facebook", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url)], ["Telegram", "https://t.me/share/url?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(txt)], ["X", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(txt) + "&url=" + encodeURIComponent(url)], ["LinkedIn", "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(url)], ["Email", "mailto:?subject=" + encodeURIComponent("Free English lessons") + "&body=" + encodeURIComponent(full)]];
    open('<h3>📤 Share I Learn English Here</h3><p class="ileh-lead">Learning is better with friends. Every share helps keep these lessons free.</p>' +
      '<p class="ileh-q">English practice: here is what you are saying 👇</p><div class="ileh-card"><i>"' + esc(txt) + '"</i></div><div class="ileh-share">' +
      (navigator.share ? '<button class="ileh-btn" data-ns>📲 Share…</button>' : "") +
      nets.map(function (n) { return '<a class="ileh-btn ghost" target="_blank" rel="noopener" href="' + n[1] + '">' + n[0] + "</a>"; }).join("") +
      '<button class="ileh-btn ghost" data-copy>📋 Copy link</button></div>');
    var ns = body.querySelector("[data-ns]"); if (ns) ns.onclick = function () { navigator.share({ title: "I Learn English Here", text: txt, url: url }).catch(function () {}); };
    body.querySelector("[data-copy]").onclick = function (e) { try { navigator.clipboard.writeText(full); e.target.textContent = "✅ Copied!"; } catch (x) { prompt("Copy this:", full); } };
  }

  /* ---------- listening controls: Stop + Slow down on EVERY read-aloud / listening task (old lessons included) ---------- */
  var cur = null, curIdx = 0, lbar = null, poll = null;
  P.listenRate = P.listenRate || 1;
  function lbarShow() {
    if (!lbar) {
      lbar = h("div", { "class": "ileh-ui ileh-lbar", role: "group", "aria-label": "Listening controls" });
      lbar.innerHTML = '<span class="ileh-lbl">🎧 Listening</span>' +
        '<button data-s="stop" class="stop">⏹ Stop</button><button data-s="replay">🔁 Again</button>' +
        '<button data-s="0.5">🐌 0.5×</button><button data-s="0.75">🐢 0.75×</button><button data-s="1">▶ 1×</button>';
      document.body.appendChild(lbar);
      lbar.addEventListener("click", function (e) {
        var b = e.target.closest("[data-s]"); if (!b) return; var s = b.dataset.s;
        if (s === "stop") { mute(cur); speechSynthesis.cancel(); lbarHide(); return; }
        if (s === "replay") { if (cur) respeak(0); return; }
        P.listenRate = parseFloat(s); save(); marks(); if (cur && speechSynthesis.speaking) respeak(curIdx);
      });
    }
    marks(); lbar.classList.add("on");
    clearInterval(poll); var idle = 0; poll = setInterval(function () { if (!speechSynthesis.speaking && !speechSynthesis.pending) { idle += 400; if (idle >= 5000) lbarHide(); } else idle = 0; }, 400);
  }
  function lbarHide() { if (lbar) lbar.classList.remove("on"); clearInterval(poll); }
  function marks() { if (lbar) lbar.querySelectorAll("[data-s]").forEach(function (b) { b.classList.toggle("on", parseFloat(b.dataset.s) === P.listenRate); }); }
  function mute(u) { if (u) { u._end = u.onend; u._err = u.onerror; u.onend = null; u.onerror = null; } }
  function respeak(from) {
    var o = cur; if (!o) return; mute(o); speechSynthesis.cancel();
    var n = new SpeechSynthesisUtterance((o._full || o.text).slice(from)); n._full = (o._full || o.text).slice(from); n._base = o._base || o.rate;
    n.lang = o.lang; n.voice = o.voice; n.pitch = o.pitch; n.volume = o.volume;
    n.onend = o._end || o.onend; n.onerror = o._err || o.onerror; n.onboundary = o.onboundary;
    nativeSpeak(n);
  }
  var nativeSpeak = null;
  var EMO = /(?:[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{2190}-\u{21FF}\u{2300}-\u{23FF}\u{25A0}-\u{25FF}\u{1F1E6}-\u{1F1FF}\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}])/gu;
  function noEmoji(t) { return String(t).replace(EMO, function (m) { return " ".repeat(m.length); }); }
  if ("speechSynthesis" in window) {
    var raw = speechSynthesis.speak.bind(speechSynthesis);
    nativeSpeak = function (u) {
      if (u._base == null) u._base = u.rate || 1;
      // never read emojis/symbols aloud (lessons included) — swap them for same-length spaces so word highlighting stays in sync
      try { u.text = noEmoji(u.text); } catch (e) {}
      u.rate = Math.max(0.3, Math.min(2, u._base * P.listenRate));
      cur = u; curIdx = 0;
      u.addEventListener("boundary", function (ev) { if (cur === u) curIdx = ev.charIndex; });
      raw(u); lbarShow();
    };
    try { speechSynthesis.speak = nativeSpeak; } catch (e) {}
  }
  /* <audio>/<video> listening tasks get the same bar */
  document.addEventListener("play", function (e) {
    var m = e.target; if (!(m instanceof HTMLMediaElement)) return; m.playbackRate = P.listenRate;
    lbarShow(); clearInterval(poll); var idle = 0; poll = setInterval(function () { if (m.paused || m.ended) { idle += 400; if (idle >= 5000) lbarHide(); } else idle = 0; }, 400);
    lbar.onclick = function (ev) { var b = ev.target.closest("[data-s]"); if (!b) return; var s = b.dataset.s; if (s === "stop") { m.pause(); m.currentTime = 0; lbarHide(); } else if (s === "replay") { m.currentTime = 0; m.play(); } else { P.listenRate = parseFloat(s); save(); marks(); m.playbackRate = P.listenRate; } ev.stopImmediatePropagation(); };
  }, true);

  /* ---------- save my work: pages with <body data-ileh-save> autosave every answer box on this device,
     plus "Download my work" (a file the student keeps) and "Load my work" (restore it on any device) ---------- */
  var WKEY = "ileh.work." + page;
  function fieldsAll() { return Array.prototype.filter.call(document.querySelectorAll("input,textarea,select"), function (el) { return !el.closest(".ileh-ui") && el.type !== "file" && el.type !== "button" && el.type !== "submit" && !el.hasAttribute("data-nosave"); }); }
  function fkey(el, i) { return el.id || el.name && (el.name + (el.type === "radio" || el.type === "checkbox" ? ":" + el.value : "")) || "f" + i; }
  function workRead() { try { return JSON.parse(localStorage.getItem(WKEY)) || {}; } catch (e) { return {}; } }
  function workSave() {
    var d = { _t: Date.now(), v: {} };
    fieldsAll().forEach(function (el, i) { var k = fkey(el, i); d.v[k] = (el.type === "checkbox" || el.type === "radio") ? el.checked : el.value; });
    try { localStorage.setItem(WKEY, JSON.stringify(d)); } catch (e) {}
    var st = document.querySelector(".ileh-wstat"); if (st) st.textContent = "✓ Saved on this device " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return d;
  }
  function workApply(d) {
    if (!d || !d.v) return 0; var n = 0;
    fieldsAll().forEach(function (el, i) { var k = fkey(el, i); if (!(k in d.v)) return; if (el.type === "checkbox" || el.type === "radio") el.checked = !!d.v[k]; else el.value = d.v[k]; n++; el.dispatchEvent(new Event("input", { bubbles: true })); });
    return n;
  }
  function workDownload() {
    var d = workSave(), title = document.title.replace(/\s*\|.*$/, "");
    var lines = ["I Learn English Here — my work", title, "Saved: " + new Date().toLocaleString(), "Page: " + location.href, ""];
    fieldsAll().forEach(function (el, i) {
      var lab = (el.labels && el.labels[0] && el.labels[0].textContent) || el.getAttribute("aria-label") || el.placeholder || fkey(el, i);
      var v = (el.type === "checkbox" || el.type === "radio") ? (el.checked ? "✓" : "") : el.value;
      if (v !== "" && v !== false) lines.push("• " + lab.trim().replace(/\s+/g, " ") + ": " + v);
    });
    lines.push("", "----- data for 'Load my work' (keep this line) -----", "ILEHWORK:" + page + ":" + btoa(unescape(encodeURIComponent(JSON.stringify(d)))));
    var blob = new Blob([lines.join("\n")], { type: "text/plain" }), a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "my-work-" + page + "-" + new Date().toISOString().slice(0, 10) + ".txt"; document.body.appendChild(a); a.click(); setTimeout(function () { a.remove(); }, 500);
  }
  function workLoad() {
    var inp = document.createElement("input"); inp.type = "file"; inp.accept = ".txt,text/plain";
    inp.onchange = function () { var f = inp.files[0]; if (!f) return; f.text().then(function (t) {
      var m = t.match(/ILEHWORK:([\w-]+):([A-Za-z0-9+\/=]+)/); if (!m) return alert("This file doesn't contain saved work from I Learn English Here.");
      if (m[1] !== page && !confirm("This work was saved from a different page (" + m[1] + "). Load it anyway?")) return;
      var d = JSON.parse(decodeURIComponent(escape(atob(m[2])))); var n = workApply(d); workSave(); alert("✓ Loaded " + n + " answers.");
    }); };
    inp.click();
  }
  function workInit() {
    if (!document.body.hasAttribute("data-ileh-save")) return;
    var bar = h("div", { "class": "ileh-ui ileh-work" });
    bar.innerHTML = '<span class="ileh-wstat">💾 Your answers save automatically on this device</span><button data-w="dl">⬇️ Download my work</button><button data-w="ld">📂 Load my work</button>';
    var spot = document.querySelector("[data-ileh-workbar]"); spot ? spot.appendChild(bar) : document.body.appendChild(bar);
    bar.addEventListener("click", function (e) { var b = e.target.closest("[data-w]"); if (!b) return; b.dataset.w === "dl" ? workDownload() : workLoad(); });
    setTimeout(function () { workApply(workRead()); }, 300);
    var t = null; document.addEventListener("input", function (e) { if (e.target.closest && e.target.closest(".ileh-ui")) return; clearTimeout(t); t = setTimeout(workSave, 600); }, true);
    document.addEventListener("change", function (e) { if (e.target.closest && !e.target.closest(".ileh-ui")) workSave(); }, true);
  }

  /* ---------- public API ---------- */
  window.ILEH = { ready: true, base: BASE, page: page, guide: guide, profile: P, save: save, log: log, idk: idk, mastery: mastery, weak: weak, likeStyle: likeStyle, topStyle: topStyle,
    loadKB: loadKB, speak: speak, strip: strip, fill: fill, shuffle: shuffle, person: person, openShare: openShare, openIdk: openIdk, workSave: workSave, workApply: workApply, workRead: workRead, openWhat: openWhat, esc: esc };

  function init() { ui(); workInit(); buildTicker(); loadKB(function () { buildTicker(); onThisDay(); }); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();

/* ---------- Donations (crypto) — shown on every page ----------
   EVM address: the same address works on Ethereum, BNB Smart Chain, Polygon, Arbitrum, Base, Optimism.
   To hide everywhere, set ADDR = "". */
(function () {
  "use strict";
  var ADDR = "0x6a7B8640969e11cb436f178E7950e5f9aeBf8f77";
  var NETS = ["Ethereum", "BNB Smart Chain (BEP-20)", "Polygon", "Arbitrum", "Base", "Optimism"];
  var TOKS = ["USDT", "USDC", "ETH", "BNB", "POL"];
  if (!ADDR) return;
  var me = document.querySelector('script[src*="ileh.js"]');
  var BASE = me ? me.src.replace(/assets\/ileh\.js.*$/, "") : "/";
  var inLesson = /\/lessons\//.test(location.pathname);
  var A6 = ADDR.slice(0, 6), Z4 = ADDR.slice(-4);

  var css = ".ileh-don{--d-ink:#132a2e;--d-acc:#1f7a6c;--d-acc2:#e0a548;--d-line:#dbe8e5;--d-soft:#3f5a56;--d-warn:#a8321e;font-family:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;max-width:760px;margin:2rem auto 1.2rem;padding:0 16px;box-sizing:border-box;color:var(--d-ink);text-align:left;position:relative;z-index:2}" +
    ".ileh-don *{box-sizing:border-box}" +
    ".ileh-don-card{background:#fff;border:2px solid var(--d-acc);border-radius:16px;padding:1.1rem 1.2rem 1rem;box-shadow:0 10px 26px rgba(19,42,46,.10)}" +
    ".ileh-don-head{display:flex;gap:.75rem;align-items:flex-start}.ileh-don-ico{font-size:1.8rem;line-height:1}" +
    ".ileh-don h2{margin:0 0 .2rem;font-size:1.2rem;color:var(--d-ink)}.ileh-don-head p{margin:0;font-size:.92rem;line-height:1.45;color:var(--d-soft)}" +
    ".ileh-don-row{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;margin:.9rem 0 .5rem}" +
    ".ileh-don-addr{flex:1 1 270px;min-width:0;display:block;background:#f6faf9;border:2px dashed var(--d-acc);border-radius:10px;padding:.55rem .7rem;font:600 .85rem/1.35 ui-monospace,Menlo,Consolas,monospace;color:var(--d-ink);word-break:break-all;user-select:all}" +
    ".ileh-don-btn{cursor:pointer;border:0;border-radius:999px;padding:.55em 1em;font:700 .85rem system-ui,Arial,sans-serif;background:var(--d-acc);color:#fff;transition:transform .15s,background .15s}.ileh-don-btn:hover{background:#175f54;transform:translateY(-1px)}" +
    ".ileh-don-btn.alt{background:#fff;color:var(--d-acc);border:2px solid var(--d-acc)}" +
    ".ileh-don-lbl{margin:.55rem 0 .3rem;font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:var(--d-soft)}" +
    ".ileh-don-chips{display:flex;flex-wrap:wrap;gap:.35rem}.ileh-don-chips span{font-size:.78rem;padding:.2em .65em;border-radius:999px;border:1.5px solid var(--d-line);background:#f6faf9}.ileh-don-chips.tok span{background:#fdf3e1;border-color:#f0d9a8;font-weight:700}" +
    ".ileh-don details{margin:.85rem 0 .3rem;border:1.5px solid var(--d-line);border-radius:10px;background:#f6faf9}.ileh-don summary{cursor:pointer;padding:.55rem .8rem;font-weight:700;font-size:.9rem;color:var(--d-acc)}" +
    ".ileh-don ol{margin:0;padding:.1rem 1rem .8rem 2.1rem;font-size:.88rem;line-height:1.5;color:var(--d-soft)}.ileh-don li{margin:.3rem 0}.ileh-don code.s{background:#fdf3e1;padding:0 .3em;border-radius:4px}" +
    ".ileh-don-warn{margin:.55rem 0 0;font-size:.77rem;line-height:1.45;color:var(--d-warn)}" +
    ".ileh-don.mini .ileh-don-card{padding:.2rem .9rem .8rem}.ileh-don.mini>.ileh-don-card>details{border:0;background:none;margin:0}.ileh-don.mini>.ileh-don-card>details>summary{font-size:.95rem;padding:.6rem 0}" +
    ".ileh-don-modal{position:fixed;inset:0;z-index:100000;background:rgba(19,42,46,.55);display:flex;align-items:center;justify-content:center;padding:16px}" +
    ".ileh-don-modal>div{background:#fff;border-radius:16px;max-width:340px;width:100%;padding:1.1rem;text-align:center;font-family:system-ui,Arial,sans-serif;color:#132a2e;position:relative}" +
    ".ileh-don-modal h3{margin:.2rem 0 .5rem}.ileh-don-modal .qr{width:210px;height:210px;margin:.4rem auto;padding:8px;border:1px solid #dbe8e5;border-radius:10px}.ileh-don-modal .qr svg{width:100%;height:100%}" +
    ".ileh-don-modal p{font-size:.85rem;line-height:1.4;margin:.5rem 0}.ileh-don-modal .x{position:absolute;top:8px;right:10px;border:0;background:none;font-size:1.4rem;cursor:pointer;color:#132a2e}" +
    ".ileh-don-toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#132a2e;color:#fff;padding:.6rem 1rem;border-radius:999px;font:600 .85rem system-ui,Arial,sans-serif;z-index:100001;max-width:92vw;text-align:center}" +
    "@media(max-width:520px){.ileh-don-row .ileh-don-btn{flex:1 1 auto}}";

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function toast(msg) { var t = el("div", "ileh-don-toast"); t.textContent = msg; document.body.appendChild(t); setTimeout(function () { t.remove(); }, 2800); }
  function copy() {
    function ok() { toast("Address copied ✓ Check it starts " + A6 + " and ends " + Z4); }
    function legacy() { var ta = el("textarea"); ta.value = ADDR; ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); ok(); } catch (e) { toast("Copy failed — select the address and copy it manually"); } ta.remove(); }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(ADDR).then(ok, legacy); else legacy();
  }
  function qr() {
    var m = el("div", "ileh-don-modal", '<div role="dialog" aria-modal="true" aria-label="Donation QR code"><button class="x" aria-label="Close">×</button><h3>Scan to donate</h3><div class="qr">Loading…</div>' +
      "<p>Scan with MetaMask, Trust Wallet, Binance, Coinbase Wallet or any wallet that supports Ethereum, BNB Smart Chain, Polygon and similar networks.</p>" +
      '<code class="ileh-don-addr" style="font-size:.74rem">' + ADDR + "</code>" +
      '<p class="ileh-don-warn">⚠️ EVM networks only — do NOT send Bitcoin, Solana or TRON (TRC-20) to this address.</p></div>');
    function close() { m.remove(); document.removeEventListener("keydown", esc); }
    function esc(e) { if (e.key === "Escape") close(); }
    m.addEventListener("click", function (e) { if (e.target === m || e.target.className === "x") close(); });
    document.addEventListener("keydown", esc);
    document.body.appendChild(m);
    var box = m.querySelector(".qr");
    function draw() { try { var q = window.qrcode(0, "M"); q.addData(ADDR); q.make(); box.innerHTML = q.createSvgTag({ scalable: true, margin: 0 }); } catch (e) { box.textContent = "Could not draw the code — use Copy instead."; } }
    if (window.qrcode) draw(); else { var s = document.createElement("script"); s.src = BASE + "assets/qrcode.js"; s.onload = draw; s.onerror = function () { box.textContent = "Could not load the QR code — use Copy instead."; }; document.head.appendChild(s); }
  }
  function chips(list, cls) { return '<div class="ileh-don-chips ' + cls + '">' + list.map(function (t) { return "<span>" + t + "</span>"; }).join("") + "</div>"; }

  function build() {
    if (document.querySelector(".ileh-don")) return;
    var st = el("style"); st.textContent = css; document.head.appendChild(st);
    var inner =
      '<div class="ileh-don-row"><code class="ileh-don-addr" title="' + ADDR + '">' + ADDR + "</code>" +
      '<button type="button" class="ileh-don-btn" data-d="copy">📋 Copy</button><button type="button" class="ileh-don-btn alt" data-d="qr">▦ QR code</button></div>' +
      '<p class="ileh-don-lbl">Accepted networks (same address on all):</p>' + chips(NETS, "net") +
      '<p class="ileh-don-lbl">Popular coins:</p>' + chips(TOKS, "tok") +
      "<details><summary>How to send a donation (4 quick steps)</summary><ol>" +
      "<li><b>Open your wallet or exchange</b> — MetaMask, Trust Wallet, Coinbase Wallet, Binance, Bybit, OKX… (on an exchange use <i>Withdraw</i>, in a wallet use <i>Send</i>).</li>" +
      "<li><b>Pick a coin</b> (USDT or USDC are easiest) and choose one of the networks above — <i>BNB Smart Chain (BEP-20)</i>, <i>Polygon</i> or <i>Arbitrum</i> have the lowest fees.</li>" +
      '<li><b>Paste the address</b> (tap <i>Copy</i>) or scan the QR code. Double-check it starts <code class="s">' + A6 + '</code> and ends <code class="s">' + Z4 + "</code>.</li>" +
      "<li><b>No memo or tag is needed.</b> Enter any amount, confirm, and you're done. Sending a lot? Send a small test amount first.</li></ol></details>" +
      '<p class="ileh-don-warn">⚠️ <b>EVM networks only.</b> Do <b>not</b> send Bitcoin (BTC), Solana (SOL) or TRON / USDT-TRC20 to this address — those coins would be lost. Crypto payments can\'t be reversed, so please double-check before sending. Donations are voluntary gifts and don\'t buy any product or service.</p>';
    var intro = "I Learn English Here is free — no sign-up, no paywall. If it's helped your English, a crypto tip of any size keeps new lessons coming. Thank you!";
    var box = el("section", "ileh-don" + (inLesson ? " mini" : ""));
    box.id = "donate"; box.setAttribute("aria-label", "Support I Learn English Here");
    box.innerHTML = inLesson
      ? '<div class="ileh-don-card"><details><summary>☕ Enjoyed this free lesson? Support I Learn English Here (crypto donation)</summary><p style="margin:.1rem 0 0;font-size:.9rem;line-height:1.45;color:#3f5a56">' + intro + "</p>" + inner + "</details></div>"
      : '<div class="ileh-don-card"><div class="ileh-don-head"><span class="ileh-don-ico" aria-hidden="true">☕</span><div><h2>Support free English lessons</h2><p>' + intro + "</p></div></div>" + inner + "</div>";
    box.addEventListener("click", function (e) { var b = e.target.closest("[data-d]"); if (!b) return; if (b.dataset.d === "copy") copy(); else qr(); });
    var foot = document.querySelector("footer");
    if (foot && foot.parentNode) foot.parentNode.insertBefore(box, foot); else document.body.appendChild(box);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build); else build();
})();
