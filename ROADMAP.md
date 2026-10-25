# I Learn English Here — Roadmap

## Phase 1 — built (October 2026, waiting for Tony's go-ahead to publish)
- **Site engine** (`assets/ileh.js`, `ileh.css`) runs on every page and lesson:
  - **Live ticker** at the top of each page: tips, did-you-know facts, English history, kind jokes, small talk, phrases, British/World English, lesson teasers and share prompts. It changes every day, and Wikipedia's "On this day" adds fresh items daily (with a family-safe filter).
  - **Help buttons** (❓ What do I do? · 🤷 I don't know · 📤 Share). Each one lets the student choose how to be helped: step by step, an example, simpler words, read aloud, their own language, the formula, a memory trick, the history behind it, examples, or trying one question together. On phones they fold into one 🙋 Help button.
  - **Listening controls** on every read-aloud and listening task, including the older lessons: ⏹ Stop · 🔁 Again · 0.5× · 0.75× · 1×.
  - **Emojis are never read aloud.** They are swapped for silent spaces, so word highlighting stays in sync.
  - **Mini brain**, stored only on the student's device: age group (kid/teen/adult, never their exact age), pace, favourite help style, and mistakes per topic. It picks up right and wrong answers in the existing lessons automatically.
- **Study Coach** (`coach.html`): an 8-question check finds weak spots, then the student takes a trip through each one: hook → understanding (matched to age) → formula → memory trick → history → examples → adaptive practice → British Way break. Fast learners type their answers and need 2 right in a row. Slow learners choose between 2 options and need 4 in a row. A wrong answer always shows *why*, then the rule, then a similar question. The trip ends with a real-life sharing task that teaches the present perfect and "should".
- **Speech Lab** (`speak.html`): a talking dictionary with real recordings when available (Free Dictionary API, CC BY-SA), British TTS as a fallback, IPA, syllable breakdown with the stressed part marked, part-by-part playback, slow speeds, the Lexi avatar with a moving mouth, and microphone practice (speech recognition, or record-and-compare).
- **Story of English** (`english-story.html`): 8 chapters from the Angles to the internet, the King's English vs everyday English, English around the world, and The British Way (16 "what they say / what they mean" cards). Each chapter ends with a quick check.
- **Knowledge bank** (`assets/ileh-kb.js`): 16 grammar topics, each with a formula, 3 age-level explanations, a memory trick, history, examples and practice items. Names and cities are randomised from 28 countries.

## Phase 1b — the basics (built 19 Oct 2026, waiting for Tony's go-ahead to publish)
- **First Steps** (`foundation.html`, data in `assets/ileh-foundation-data.js`): for people on their very first English word. 12 steps: Sounds & letters A–Z → 8 word sets (80 words: people, numbers, food, things, places, body & feelings, colours, actions) → 20 survival phrases → "My first sentence" (I am / you are / he is) → action sentences (I eat / she eats). Each step: Learn (tap to hear, play all, 1× / 0.75× / 0.5×) → Practise (a wrong answer must be re-tapped and comes back later) → Check (8/10 opens the next step). Formula steps have How / Why / When / When NOT tabs.
- **Home-language help** in the 12 most-spoken languages after English (Ethnologue): Chinese, Hindi, Spanish, French, Arabic, Bengali, Portuguese, Russian, Urdu, Indonesian, German, Japanese. Instructions, words, phrases and sentences are translated (hand-written, not machine). Hide-my-language button, and 🔈 reads a translation aloud if the phone has that voice. `foundation.html?lang=hi` opens straight in Hindi.
- **Little Learners** (`kids.html`): ABC, colours, animals, counting, "touch your…", letter tracing, printable colouring sheets, stars and stickers. Parent tips in 12 languages. **No ads, no analytics, no donation box, no ticker** (`<body data-ileh-kids>` switches them off in `ileh.js`).
- **Repair Stop** (end of `assets/ileh.js`): the same topic wrong 3 times in the last 10 tries, or under 60% after 8+ answers on one page → the learner is sent to the Coach for that topic. Other lessons and missions stay closed until the Coach practice is passed (the Coach's "Topic complete" step clears it).
- "Never learned English?" strip with 12 language buttons on Home and Start Here; a level-check score of 0–2 now points to First Steps; First Steps + Little Learners links in every menu; 2 new cards in Lessons; sitemap updated.
- To check: a native speaker (or Gemini) should check each language once — Bengali, Urdu, Arabic and Hindi first.

## Phase 1c — keep learners moving (built 19 Oct 2026, waiting for Tony's go-ahead to publish)
- **Auto-Coach:** when the Repair Stop rule fires, the learner sees why, then is taken to the Coach automatically after 6 seconds (no "finish this page first"). In repair mode the Coach opens with "What went wrong".
- **Common mistakes bank** (`ILEH_KB.mistakes` at the end of `assets/ileh-kb.js`): all 16 Coach topics + "be". Each has the wrong and right sentence, *why* learners make it (often their first language), the fix and sometimes a bit of history. It's shown as a Coach step, after 2 wrong answers in Coach practice, and in Fix It.
- **Skills Lab** (`skills.html`, content in `assets/ileh-skills-data.js`), 3 levels (A1 → B1):
  - 🔤 15 letter & spelling rules, each tagged ALWAYS / USUALLY / HINT, with exceptions and practice. A wrong answer re-shows the rule and the question comes back.
  - 📖 6 original reading texts (Lagos, São Paulo, Hanoi, Manchester, Toronto, Accra): did you read it → did you understand it → follow directions to move a paragraph → put the whole story in order.
  - ✍️ Fix It: tap the wrong word, choose the fix, see why (with the common-mistake note). Level 3 = proofreading paragraphs with 5 mistakes each.
  - 🧩 Put It Together: 5 writing tasks with an automatic checklist (capitals, I, endings, tense and structure checks), a sentence builder for beginners, an example answer, read-aloud and download.
  - 🏆 Combo Challenge per level (10 mixed questions, 3 from earlier levels). 8/10 = level up. Locked levels can be "tested out".
  - Pushing forward: "▶ Next for me" always picks the next unfinished challenge; reopening something already mastered (90%+) shows "Don't get too comfortable" with a button to the next challenge.
  - XP, a daily goal (60 XP) and streaks.
- First Steps now leads into Skills Lab task 1 ("Introduce yourself").
- Next: translate Skills Lab Level 1 rule cards into the 12 First Steps languages (a Gemini job), add more reading texts per level, and add Level 4 (B2).

## Phase 1d — our story (built 19 Oct 2026, waiting for Tony's go-ahead to publish)
- `about.html` "Our Story": built by an English teacher who sees the same mistakes in every class; what makes the site different (common mistakes, breaking bad patterns, why/how/when); a comparison with most English websites; a worked example ("I have 20 years"); a 🔊 listen button. Signed "Tony, English teacher & founder" (to be confirmed by Tony).
- Short "Built by a teacher who sees the mistakes" section on the homepage, a new FAQ answer, an "Our Story" link in every footer and in the menu, and the page in the sitemap.
- On phones, the main menu is now one swipeable row, so the sticky header stays small.

1. **Special Mission: Buying a Home in England** (3-part series in Dropbox `/Sent files/cv/classes (English)/courses/Property/`) → rebrand to ILEH, change names (Sarah & James → new names), add the help buttons and Coach logging, and make it the marketing flagship. *Blocked:* the cloud workspace can't download from Dropbox, so the files need to be opened in Chrome or attached.
2. Other advanced lessons in the same folder: The Great British Adventure, Royal Family (Advanced), Creator Academy, Executive Ascent, K-pop, Telegram Mission 1 → review for copyright and branding, then add the ones that fit.
3. **Make the existing lessons less Cambodia-heavy** (Phnom Penh, Khmer recipe, etc.): rotate in other countries and new names and change the scenarios.
4. Add `ILEH.log(topic, correct)` directly to each lesson's quiz code so the Coach's mistake tracking is exact, not heuristic.
5. Expand the knowledge bank (relative clauses, passive, second conditional, reported speech, phrasal verbs) and the ticker bank (target: 500 items).
6. A weekly auto-refresh of the ticker through a free GitHub Action that writes `assets/ticker.json`.

## Gemini prompt pack (to save Claude usage)
- **Ticker bank:** "Write 100 short items for an English-learning website ticker as a JSON array of [label, text] pairs. Labels must be one of: '💡 Tip', '📚 Did you know?', '📜 History', '😂 Joke', '💬 Small talk', '🗣️ Phrase', '🇬🇧 British English', '🌍 World English'. Each text must be under 140 characters, suitable for A2–B1 learners and children, positive, factually accurate, and include no brand names."
- **Worksheet rewrite:** "Rewrite this worksheet for the brand 'I Learn English Here'. Remove all other branding. Change every person's name and every place to a mix of countries (not only Cambodia). Change the scenarios slightly so the worksheet is original, but keep the grammar target, level and number of questions identical. Return the same structure."
- **New knowledge-bank topic:** paste one topic object from `ileh-kb.js` as the template, and ask Gemini for the same fields for a new grammar point.
