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

## Phase 2 — next
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
