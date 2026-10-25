/* I Learn English Here — Skills Lab content: letter & spelling rules, reading, Fix It corrections, Put It Together tasks.
   All texts are original. Names and places are mixed from many countries.
   Rule tags: ALWAYS = no exceptions in normal English · USUALLY = true for most words (exceptions listed) · HINT = helpful, but breaks often.
   © I Learn English Here · an Online Business Awareness project */
window.ILEH_SK = {

/* ---------- 3 levels: each level = rules → reading → Fix It → Put It Together → Combo Challenge ---------- */
levels: [
  { id: 1, name: "Level 1 · Starter", cefr: "A1", icon: "🌱", note: "Capital letters, full stops, I am / she is, simple reading.", rules: ["cap", "i", "names", "end"], reading: ["amara", "lucas", "fatima", "diego"], fix: "f1", tasks: ["t1", "t2"] },
  { id: 2, name: "Level 2 · Explorer", cefr: "A2", icon: "🌿", note: "Letter teams, a / an, plurals, spelling patterns, past stories.", rules: ["qu", "vowel", "aan", "teams", "plural", "magic", "ck", "endv"], reading: ["linh", "oliver", "ahmed", "ana"], fix: "f2", tasks: ["t3", "t4"] },
  { id: 3, name: "Level 3 · Achiever", cefr: "B1", icon: "🌳", note: "Adding -ing and -ed, tricky spelling, longer texts, proofreading paragraphs.", rules: ["ing", "ed", "ibe"], reading: ["priya", "kwame", "mei", "ingrid"], fix: "f3", tasks: ["t5"] },
  { id: 4, name: "Level 4 · Bridge to Missions", cefr: "B2", icon: "🏔️", note: "Silent letters, sound-alike words, apostrophes, opinion texts, proofreading formal writing, writing an opinion piece. Pass it and you are ready for the Missions.", rules: ["silent", "homo", "apos"], reading: ["fourday", "phones"], fix: "f4", tasks: ["t6"] }
],

/* ---------- LETTER & SPELLING RULES ---------- */
rules: {
  cap: { title: "Capital letter at the start", tag: "ALWAYS", icon: "🔠", topic: "punctuation",
    rule: "Every sentence starts with a capital (big) letter: A B C…",
    ex: ["<b>T</b>he cat is black.", "<b>W</b>here is the bus?", "<b>M</b>y name is Ana."], exc: "",
    items: [
      { q: "Which sentence is right?", a: "We are happy.", o: ["we are happy."], why: "A sentence starts with a capital: <b>W</b>e." },
      { q: "Which sentence is right?", a: "My bag is red.", o: ["my bag is red."], why: "Start with a capital: <b>M</b>y." },
      { q: "Which sentence is right?", a: "Today is hot.", o: ["today is hot."], why: "Start with a capital: <b>T</b>oday." },
      { q: "Which sentence is right?", a: "Is it big?", o: ["is it big?"], why: "Questions start with a capital too: <b>I</b>s." }
    ] },
  i: { title: "I is always a capital", tag: "ALWAYS", icon: "🙋", topic: "punctuation",
    rule: "The word <b>I</b> (meaning me) is always a capital letter — anywhere in the sentence. I, I'm, I'll, I've.",
    ex: ["Tom and <b>I</b> are friends.", "Can <b>I</b> help you?", "<b>I</b>'m from Kenya."], exc: "",
    story: "Hundreds of years ago 'I' was written 'ich' or 'ic'. When it became one small letter, writers made it big so it didn't get lost on the page!",
    items: [
      { q: "Which sentence is right?", a: "Can I go now?", o: ["Can i go now?"], why: "<b>I</b> is always a capital." },
      { q: "Which sentence is right?", a: "Sam and I are here.", o: ["Sam and i are here."], why: "<b>I</b> is always a capital — even in the middle." },
      { q: "Which sentence is right?", a: "I'm hungry.", o: ["i'm hungry."], why: "I'm = I am. Capital <b>I</b>." }
    ] },
  names: { title: "Names get capitals", tag: "ALWAYS", icon: "🌍", topic: "punctuation",
    rule: "Names of people, cities, countries, languages, nationalities, days and months start with a capital.",
    ex: ["<b>A</b>mara lives in <b>L</b>agos, <b>N</b>igeria.", "I speak <b>E</b>nglish and <b>H</b>indi.", "See you on <b>M</b>onday in <b>J</b>uly."], exc: "Seasons are small: spring, summer, autumn, winter.",
    items: [
      { q: "Which sentence is right?", a: "I speak English.", o: ["I speak english."], why: "Languages start with a capital: <b>E</b>nglish." },
      { q: "Which sentence is right?", a: "See you on Monday.", o: ["See you on monday."], why: "Days start with a capital: <b>M</b>onday." },
      { q: "Which sentence is right?", a: "I love summer.", o: ["I love Summer."], why: "Seasons are the exception — small letters: summer." },
      { q: "Which sentence is right?", a: "She is from Brazil.", o: ["She is from brazil."], why: "Countries start with a capital: <b>B</b>razil." },
      { q: "Which sentence is right?", a: "My birthday is in May.", o: ["My birthday is in may."], why: "Months start with a capital: <b>M</b>ay." }
    ] },
  end: { title: "End with . ? or !", tag: "ALWAYS", icon: "🛑", topic: "punctuation",
    rule: "Every sentence ends with a full stop <b>.</b> a question mark <b>?</b> or an exclamation mark <b>!</b>",
    ex: ["I like tea<b>.</b>", "Do you like tea<b>?</b>", "I love tea<b>!</b>"], exc: "",
    items: [
      { q: "Choose the ending: “Where do you live___”", a: "?", o: [".", "!"], why: "A question ends with <b>?</b>" },
      { q: "Choose the ending: “I live in Cairo___”", a: ".", o: ["?", ","], why: "A normal sentence ends with a full stop." },
      { q: "Choose the ending: “Wow, we won___”", a: "!", o: ["?", ","], why: "A strong feeling ends with <b>!</b>" }
    ] },
  qu: { title: "Q is followed by U", tag: "USUALLY", icon: "👑", topic: "s-spelling",
    rule: "In English words, <b>q</b> is followed by <b>u</b>: queen, quick, question, quiet.",
    ex: ["<b>qu</b>een", "<b>qu</b>ick", "<b>qu</b>estion", "s<b>qu</b>are"], exc: "Only names from other languages break it: Qatar, Iraq.",
    items: [
      { q: "Which spelling is right?", a: "queen", o: ["qeen", "kween"], why: "q + u: <b>qu</b>een." },
      { q: "Which spelling is right?", a: "question", o: ["qestion", "kwestion"], why: "q + u: <b>qu</b>estion." },
      { q: "Which spelling is right?", a: "quiet", o: ["qiet", "kwiet"], why: "q + u: <b>qu</b>iet." }
    ] },
  vowel: { title: "Every word has a vowel", tag: "USUALLY", icon: "🅰️", topic: "s-spelling",
    rule: "The vowels are <b>a e i o u</b>. Every English word has at least one — or a <b>y</b> doing the vowel's job: my, sky, gym.",
    ex: ["c<b>a</b>t", "b<b>e</b>d", "sk<b>y</b>", "g<b>y</b>m"], exc: "Sound words like hmm, shh, brr.",
    items: [
      { q: "Which letter is the vowel in “sky”?", a: "y", o: ["s", "k"], why: "No a e i o u? Then <b>y</b> is the vowel." },
      { q: "How many vowels in “banana”?", a: "3", o: ["2", "6"], why: "b<b>a</b>n<b>a</b>n<b>a</b> — three a's." },
      { q: "Which is a real English word?", a: "gym", o: ["gmm", "grr"], why: "It has a vowel — the y." }
    ] },
  aan: { title: "a or an? Listen to the sound", tag: "ALWAYS", icon: "👂", topic: "articles",
    rule: "Use <b>an</b> before a vowel <i>sound</i> and <b>a</b> before other sounds. The SOUND matters, not the letter.",
    ex: ["<b>an</b> apple, <b>an</b> egg, <b>an</b> hour (the h is silent)", "<b>a</b> car, <b>a</b> house, <b>a</b> university (it sounds like 'you')"], exc: "",
    items: [
      { q: "___ egg", a: "an", o: ["a"], why: "egg starts with a vowel sound → <b>an</b> egg." },
      { q: "___ house", a: "a", o: ["an"], why: "house starts with an h sound → <b>a</b> house." },
      { q: "___ hour", a: "an", o: ["a"], why: "The h in hour is silent — it sounds like 'our' → <b>an</b> hour." },
      { q: "___ uniform", a: "a", o: ["an"], why: "uniform sounds like 'you-niform' → <b>a</b> uniform." },
      { q: "___ orange", a: "an", o: ["a"], why: "orange starts with a vowel sound → <b>an</b>." }
    ] },
  teams: { title: "Letter teams", tag: "USUALLY", icon: "🤝", topic: "s-spelling",
    rule: "Some letters work as a team and make ONE sound: <b>sh</b> (ship), <b>ch</b> (chair), <b>th</b> (think, this), <b>ph</b> = f (phone), <b>wh</b> (what), <b>ee / ea</b> = long e (see, tea), <b>oo</b> (moon, book).",
    ex: ["<b>sh</b>op", "<b>ch</b>ips", "<b>th</b>ank you", "<b>ph</b>oto", "gr<b>ee</b>n", "t<b>ea</b>"], exc: "ea can also say 'e' (bread) or 'ay' (great).",
    items: [
      { q: "Which letters make the f sound in “phone”?", a: "ph", o: ["p", "ne"], why: "<b>ph</b> sounds like f: phone, photo, elephant." },
      { q: "Which spelling is right?", a: "fish", o: ["fich", "fiss"], why: "The 'sh' sound is spelt <b>sh</b>." },
      { q: "Which spelling is right?", a: "teeth", o: ["tith", "teef"], why: "Long e = <b>ee</b>; the end sound is <b>th</b>." },
      { q: "Which spelling is right?", a: "chair", o: ["shair", "tair"], why: "The 'ch' sound is spelt <b>ch</b>." }
    ] },
  plural: { title: "Plurals: -s, -es, -ies", tag: "USUALLY", icon: "🍎", topic: "s-spelling",
    rule: "More than one → add <b>-s</b> (cats). After s, ss, sh, ch, x, o → <b>-es</b> (buses, dishes, watches, boxes, tomatoes). Consonant + y → <b>-ies</b> (baby → babies). Vowel + y → just -s (boy → boys).",
    ex: ["cat → cat<b>s</b>", "box → box<b>es</b>", "city → cit<b>ies</b>", "day → day<b>s</b>"], exc: "Special words: man → men, woman → women, child → children, foot → feet, tooth → teeth, mouse → mice, person → people, fish → fish.",
    items: [
      { q: "box → ?", a: "boxes", o: ["boxs", "boxies"], why: "After x → -es." },
      { q: "city → ?", a: "cities", o: ["citys", "cityes"], why: "Consonant (t) + y → -ies." },
      { q: "day → ?", a: "days", o: ["daies", "dayes"], why: "Vowel (a) + y → just -s." },
      { q: "child → ?", a: "children", o: ["childs", "childes"], why: "Special word: child → children." },
      { q: "bus → ?", a: "buses", o: ["buss", "busies"], why: "After s → -es." },
      { q: "tooth → ?", a: "teeth", o: ["tooths", "toothes"], why: "Special word: tooth → teeth." }
    ] },
  magic: { title: "Magic e", tag: "USUALLY", icon: "✨", topic: "s-spelling",
    rule: "A silent <b>e</b> at the end makes the vowel say its NAME: cap → cap<b>e</b>, kit → kit<b>e</b>, hop → hop<b>e</b>, cut → cut<b>e</b>.",
    ex: ["mad → mad<b>e</b>", "pin → pin<b>e</b>", "not → not<b>e</b>", "tub → tub<b>e</b>"], exc: "have, give, come, some, love, done — the e is there but the vowel doesn't change.",
    items: [
      { q: "Which word says “kite” (long i, like the letter I)?", a: "kite", o: ["kit"], why: "Magic e makes i say its name: kit<b>e</b>." },
      { q: "hop + e = ?", a: "hope", o: ["hop", "hopp"], why: "hop → hop<b>e</b>: the o says its name." },
      { q: "Which word rhymes with “cake”?", a: "make", o: ["mack", "mak"], why: "a + consonant + e: m<b>a</b>k<b>e</b>." }
    ] },
  ck: { title: "ck or k?", tag: "USUALLY", icon: "🦆", topic: "s-spelling",
    rule: "After a SHORT vowel at the end of a short word, write <b>ck</b>: back, duck, sock. After a consonant or a long sound, write <b>k</b>: milk, bank, book, cake.",
    ex: ["du<b>ck</b>", "so<b>ck</b>", "mil<b>k</b>", "boo<b>k</b>"], exc: "",
    items: [
      { q: "du__ (the bird 🦆)", a: "duck", o: ["duk", "duc"], why: "Short u at the end → <b>ck</b>." },
      { q: "mil__ (the drink 🥛)", a: "milk", o: ["milck", "milc"], why: "After a consonant (l) → <b>k</b>." },
      { q: "boo__ (📖)", a: "book", o: ["boock", "booc"], why: "After oo → <b>k</b>." },
      { q: "so__ (🧦)", a: "sock", o: ["sok", "soc"], why: "Short o at the end → <b>ck</b>." }
    ] },
  endv: { title: "No word ends in v or j", tag: "USUALLY", icon: "🚫", topic: "s-spelling",
    rule: "English words don't end in <b>v</b> — add an e: have, give, live, love. They don't end in <b>j</b> either — use <b>-dge</b> or <b>-ge</b>: bridge, page.",
    ex: ["ha<b>ve</b>", "gi<b>ve</b>", "bri<b>dge</b>", "pa<b>ge</b>"], exc: "Short slang and names: rev, Raj.",
    items: [
      { q: "Which spelling is right?", a: "give", o: ["giv"], why: "No word ends in v → giv<b>e</b>." },
      { q: "Which spelling is right?", a: "bridge", o: ["brij", "bridj"], why: "No word ends in j → bri<b>dge</b>." },
      { q: "Which spelling is right?", a: "love", o: ["luv", "lov"], why: "No word ends in v → lov<b>e</b>. ('luv' is only chat slang.)" }
    ] },
  ing: { title: "Adding -ing", tag: "USUALLY", icon: "🏃", topic: "present-continuous",
    rule: "Most verbs: + ing (play → playing). Silent e at the end: drop it (make → making). ONE short vowel + ONE consonant at the end: double it (run → running, swim → swimming). ie → ying (lie → lying).",
    ex: ["play → play<b>ing</b>", "write → writ<b>ing</b>", "sit → sit<b>ting</b>", "die → d<b>ying</b>"], exc: "Never double w, x or y (snowing, fixing, playing). see → seeing (ee stays).",
    items: [
      { q: "run + ing = ?", a: "running", o: ["runing", "runeing"], why: "One short vowel + one consonant → double: run<b>n</b>ing." },
      { q: "make + ing = ?", a: "making", o: ["makeing", "makking"], why: "Drop the silent e: mak<b>ing</b>." },
      { q: "play + ing = ?", a: "playing", o: ["plaing", "playying"], why: "Most verbs just add -ing." },
      { q: "swim + ing = ?", a: "swimming", o: ["swiming", "swimeing"], why: "Short i + m → double: swim<b>m</b>ing." },
      { q: "fix + ing = ?", a: "fixing", o: ["fixxing", "fixeing"], why: "Never double x." }
    ] },
  ed: { title: "Adding -ed", tag: "USUALLY", icon: "⏪", topic: "past-simple",
    rule: "Most verbs: + ed (walk → walked). Ends in e: + d (like → liked). Consonant + y → <b>-ied</b> (study → studied). Vowel + y → + ed (play → played). One short vowel + one consonant → double (stop → stopped).",
    ex: ["walk → walk<b>ed</b>", "like → like<b>d</b>", "try → tr<b>ied</b>", "stop → stop<b>ped</b>"], exc: "Irregular verbs don't use -ed: go → went, eat → ate, see → saw, buy → bought.",
    items: [
      { q: "study + ed = ?", a: "studied", o: ["studyed", "studed"], why: "Consonant + y → -ied." },
      { q: "stop + ed = ?", a: "stopped", o: ["stoped", "stopt"], why: "Short o + p → double: stop<b>p</b>ed." },
      { q: "play + ed = ?", a: "played", o: ["plaied", "playd"], why: "Vowel + y → just add -ed." },
      { q: "like + ed = ?", a: "liked", o: ["likeed", "likked"], why: "Ends in e → just add -d." },
      { q: "go → past?", a: "went", o: ["goed", "goned"], why: "Irregular: go → <b>went</b>." }
    ] },
  ibe: { title: "“i before e except after c”", tag: "HINT", icon: "🤔", topic: "s-spelling",
    rule: "This famous rhyme helps with some words: fr<b>ie</b>nd, p<b>ie</b>ce, bel<b>ie</b>ve — and after c: rec<b>ei</b>ve, c<b>ei</b>ling. <b>But it breaks a lot</b>, so use it as a hint and then check.",
    ex: ["fr<b>ie</b>nd", "p<b>ie</b>ce", "rec<b>ei</b>ve"], exc: "their, weird, eight, science, height, foreign — all break the rhyme.",
    story: "Teachers have used this rhyme for over 150 years. Some experts now say it has more exceptions than examples — that's why we call it a HINT, not a rule.",
    items: [
      { q: "Which spelling is right?", a: "friend", o: ["freind"], why: "i before e: fr<b>ie</b>nd." },
      { q: "Which spelling is right?", a: "receive", o: ["recieve"], why: "After c → ei: rec<b>ei</b>ve." },
      { q: "Which spelling is right?", a: "their", o: ["thier"], why: "Exception! th<b>ei</b>r breaks the rhyme." }
    ] },
  silent: { title: "Silent letters", tag: "USUALLY", icon: "🤫", topic: "s-spelling",
    rule: "Some letters are written but NOT said: <b>k</b> in knife and know, <b>w</b> in write and wrong, <b>b</b> in climb and thumb, <b>h</b> in hour and honest, <b>l</b> in walk and talk, <b>t</b> in listen and castle.",
    ex: ["<b>k</b>nife", "<b>w</b>rite", "clim<b>b</b>", "<b>h</b>our", "wa<b>l</b>k", "lis<b>t</b>en"], exc: "",
    story: "About 500 years ago people really DID say the k in knife and the w in write. The sounds changed, but the spelling stayed the same — that's why English spelling looks so strange.",
    items: [
      { q: "Which letter is silent in “knife”?", a: "k", o: ["n", "f"], why: "We say 'nife' — the <b>k</b> is silent." },
      { q: "Which letter is silent in “listen”?", a: "t", o: ["l", "n"], why: "We say 'lissen' — the <b>t</b> is silent." },
      { q: "Which word has a silent b?", a: "climb", o: ["bring", "rabbit"], why: "clim<b>b</b> — we say 'clime'." },
      { q: "Which spelling is right?", a: "wrong", o: ["rong", "wrrong"], why: "Silent w: <b>w</b>rong." }
    ] },
  homo: { title: "Sound-alike words", tag: "ALWAYS", icon: "👯", topic: "s-spelling",
    rule: "Some words SOUND the same but have different spellings and meanings: <b>there</b> (a place) / <b>their</b> (belongs to them) / <b>they're</b> (they are) · <b>your</b> (belongs to you) / <b>you're</b> (you are) · <b>its</b> (belongs to it) / <b>it's</b> (it is) · <b>to</b> / <b>too</b> (also, more than enough) / <b>two</b> (2).",
    ex: ["<b>They're</b> in <b>their</b> car over <b>there</b>.", "<b>You're</b> late for <b>your</b> class.", "<b>It's</b> wagging <b>its</b> tail."], exc: "",
    items: [
      { q: "___ going to the beach. (= they are)", a: "They're", o: ["Their", "There"], why: "They're = they are." },
      { q: "Is this ___ bag?", a: "your", o: ["you're", "yore"], why: "Belongs to you → your." },
      { q: "The dog wagged ___ tail.", a: "its", o: ["it's", "its'"], why: "Belongs to it → its (no apostrophe). It's = it is." },
      { q: "This tea is ___ hot!", a: "too", o: ["to", "two"], why: "More than I want → too." },
      { q: "I live over ___.", a: "there", o: ["their", "they're"], why: "A place → there." }
    ] },
  apos: { title: "Apostrophes ( ' )", tag: "ALWAYS", icon: "✏️", topic: "s-spelling",
    rule: "An apostrophe shows a <b>missing letter</b> (it's = it is, don't = do not) OR that something <b>belongs</b> to someone (Sara's phone, the teacher's desk). Plurals do NOT get an apostrophe: two apples, not ❌ two apple's.",
    ex: ["do not → don<b>'</b>t", "Sara<b>'</b>s phone", "the students<b>'</b> books (many students)"], exc: "",
    items: [
      { q: "Which is right? (more than one apple)", a: "I bought three apples.", o: ["I bought three apple's."], why: "Plurals never take an apostrophe." },
      { q: "The phone belongs to Sara: ___ phone", a: "Sara's", o: ["Saras", "Saras'"], why: "Belongs to one person → 's." },
      { q: "do not = ?", a: "don't", o: ["do'nt", "dont"], why: "The apostrophe goes where the missing letter (o) was: don<b>'</b>t." },
      { q: "MANY students each have a book. Which is right?", a: "the students' books", o: ["the student's books", "the students books"], why: "Plural owner ending in -s → apostrophe after the s: students<b>'</b>." }
    ] }
},

/* ---------- READING (paragraphs are listed in the CORRECT order) ---------- */
reading: {
  amara: { title: "Amara's Day", level: "A1", icon: "🏥", topic: "present-simple",
    paras: [
      "My name is Amara. I am 25 years old. I live in Lagos, in Nigeria. I am a nurse.",
      "Every morning I get up at six o'clock. I have a shower and I eat bread and eggs. Then I take the bus to the hospital.",
      "I work from eight o'clock to four o'clock. I help sick people. My job is hard, but I love it.",
      "In the evening I cook dinner with my sister. We watch TV and talk. I go to bed at ten o'clock."
    ],
    read: [
      { q: "Where does Amara live?", a: "In Lagos", o: ["In London", "In Lima"], why: "Paragraph 1: “I live in Lagos, in Nigeria.”" },
      { q: "What is her job?", a: "A nurse", o: ["A teacher", "A cook"], why: "Paragraph 1: “I am a nurse.”" },
      { q: "What time does she get up?", a: "At six o'clock", o: ["At eight o'clock", "At ten o'clock"], why: "Paragraph 2: “I get up at six o'clock.”" }
    ],
    think: [
      { q: "Does Amara like her job?", a: "Yes — she loves it", o: ["No — it is hard", "We don't know"], why: "“My job is hard, but I love it.” <b>But</b> shows the important part comes next." },
      { q: "Who does she cook with?", a: "Her sister", o: ["Her mother", "Her friend"], why: "Paragraph 4: “I cook dinner with my sister.”" }
    ],
    move: { start: [0, 2, 1, 3], text: "Two paragraphs are in the wrong order. The morning comes BEFORE work. Move “Every morning I get up…” UP one place." } },
  lucas: { title: "Lucas and His Family", level: "A1", icon: "⚽", topic: "present-simple",
    paras: [
      "This is Lucas. He is from São Paulo, in Brazil. He is ten years old.",
      "Lucas has a big family. He has two sisters and one brother. His sisters are Ana and Bia. His brother is a baby.",
      "His father is a bus driver. His mother is a teacher. She teaches English!",
      "On Sundays the family goes to the park. They play football and eat ice cream. Lucas is very happy on Sundays."
    ],
    read: [
      { q: "How old is Lucas?", a: "Ten", o: ["Two", "Twelve"], why: "“He is ten years old.”" },
      { q: "How many sisters does he have?", a: "Two", o: ["One", "Three"], why: "“He has two sisters and one brother.”" },
      { q: "What is his mother's job?", a: "A teacher", o: ["A bus driver", "A nurse"], why: "“His mother is a teacher.”" }
    ],
    think: [
      { q: "Which day does Lucas like best?", a: "Sunday", o: ["Monday", "Saturday"], why: "“Lucas is very happy on Sundays.”" },
      { q: "Who is the youngest in the family?", a: "His brother", o: ["Ana", "Lucas"], why: "“His brother is a baby.”" }
    ],
    move: { start: [1, 0, 2, 3], text: "The story must start with “This is Lucas.” Move it to the TOP (number 1)." } },
  linh: { title: "A Day at the Market", level: "A2", icon: "🛍️", topic: "past-simple",
    paras: [
      "Last Saturday Linh went to the big market in Hanoi with her grandmother. They left home early, at half past six.",
      "First they bought vegetables and rice. Linh's grandmother talked to every seller. She knew everybody!",
      "Then Linh saw a beautiful red bag. It cost too much, so her grandmother asked for a better price. The seller laughed and said yes.",
      "Finally they had noodle soup at a small café. Linh was tired but happy. She carried the shopping home in her new bag."
    ],
    read: [
      { q: "When did Linh go to the market?", a: "Last Saturday", o: ["Last Sunday", "Every day"], why: "“Last Saturday Linh went…”" },
      { q: "Who did she go with?", a: "Her grandmother", o: ["Her sister", "Her friend"], why: "“…with her grandmother.”" },
      { q: "What did they eat?", a: "Noodle soup", o: ["Rice and eggs", "Ice cream"], why: "“They had noodle soup at a small café.”" }
    ],
    think: [
      { q: "Why did the grandmother ask for a better price?", a: "The bag cost too much", o: ["The bag was ugly", "The seller was angry"], why: "“It cost too much, <b>so</b> her grandmother asked…” — <b>so</b> shows the result." },
      { q: "Is the grandmother a friendly person?", a: "Yes — she talks to everyone", o: ["No — she is shy", "We can't tell"], why: "“She talked to every seller. She knew everybody!”" }
    ],
    move: { start: [0, 2, 1, 3], text: "Look at the time words: First → Then → Finally. Move the paragraph that starts with “First” UP one place." } },
  oliver: { title: "The Lost Phone", level: "A2", icon: "📱", topic: "past-simple",
    paras: [
      "On Monday morning Oliver took the train to work in Manchester. He was very tired and he fell asleep.",
      "When he woke up, he ran off the train. At work he looked in his bag. His phone wasn't there!",
      "He called his phone from a colleague's phone. A woman answered. “I found it on the train,” she said. “I'm at the station café.”",
      "Oliver went back to the station after work. The woman gave him the phone and he bought her a coffee to say thank you."
    ],
    read: [
      { q: "How did Oliver go to work?", a: "By train", o: ["By bus", "By car"], why: "“Oliver took the train to work.”" },
      { q: "Where was the woman?", a: "At the station café", o: ["On the train", "At his office"], why: "“I'm at the station café.”" }
    ],
    think: [
      { q: "Why did Oliver lose his phone?", a: "He fell asleep and left the train in a hurry", o: ["Someone stole it", "He left it at home"], why: "He fell asleep, woke up and <b>ran</b> off the train." },
      { q: "How did Oliver say thank you?", a: "He bought her a coffee", o: ["He gave her money", "He sent a letter"], why: "Last paragraph." },
      { q: "What is the best title for paragraph 2?", a: "The phone is missing", o: ["A happy ending", "A woman helps"], why: "The main idea: “His phone wasn't there!”" }
    ],
    move: { start: [0, 1, 3, 2], text: "The ending is in the wrong place! The phone call comes BEFORE he goes back to the station. Move the LAST paragraph UP one place." } },
  priya: { title: "Moving to a New City", level: "B1", icon: "❄️", topic: "present-perfect",
    paras: [
      "Priya moved from Mumbai to Toronto eight months ago. She has never lived abroad before, so the first weeks were difficult.",
      "The weather has been the biggest surprise. In January it was minus twenty degrees! She has bought a thick coat, boots and gloves, and now she actually enjoys the snow.",
      "She has also made some good friends. Most of them are from her English class, and they have explored the city together every weekend.",
      "Priya hasn't decided if she will stay forever. “I miss my family and the food,” she says, “but I have learnt so much here. I'm proud of myself.”"
    ],
    read: [
      { q: "How long has Priya lived in Toronto?", a: "Eight months", o: ["Eight years", "Eight weeks"], why: "“…moved to Toronto eight months ago.”" },
      { q: "What surprised her most?", a: "The weather", o: ["The food", "Her English class"], why: "“The weather has been the biggest surprise.”" },
      { q: "Where did she meet her friends?", a: "In her English class", o: ["At work", "In Mumbai"], why: "“Most of them are from her English class.”" }
    ],
    think: [
      { q: "Why were the first weeks difficult?", a: "She had never lived abroad before", o: ["She had no friends in Mumbai", "She didn't like snow"], why: "“She has never lived abroad before, <b>so</b> the first weeks were difficult.”" },
      { q: "How does Priya feel about the snow NOW?", a: "She enjoys it", o: ["She hates it", "She is scared of it"], why: "“…now she actually enjoys the snow.” <b>Actually</b> = this is a surprise." },
      { q: "Will Priya stay in Toronto forever?", a: "She hasn't decided", o: ["Yes, she will", "No, she is leaving"], why: "“Priya hasn't decided if she will stay forever.”" }
    ],
    move: { start: [3, 0, 1, 2], text: "The ending is at the top! Move the paragraph “Priya hasn't decided…” to the END (number 4)." } },
  kwame: { title: "The Volunteer", level: "B1", icon: "🌊", topic: "present-perfect",
    paras: [
      "Kwame is a student in Accra. Every month he volunteers with a group that cleans the beaches near the city.",
      "The group started three years ago with just five people. Now more than two hundred volunteers come, and they have collected over forty tonnes of plastic.",
      "Kwame says the work isn't always pleasant. “It's hot and the rubbish can smell terrible,” he admits. “But when you see a clean beach at the end of the day, it feels amazing.”",
      "He believes the best solution is to use less plastic in the first place. “Cleaning is important,” he says, “but if people stopped throwing plastic away, we wouldn't need to clean at all.”"
    ],
    read: [
      { q: "How often does Kwame volunteer?", a: "Every month", o: ["Every day", "Once a year"], why: "“Every month he volunteers…”" },
      { q: "How many volunteers come now?", a: "More than 200", o: ["Five", "Forty"], why: "“Now more than two hundred volunteers come.”" }
    ],
    think: [
      { q: "What does Kwame think is the BEST solution?", a: "Using less plastic", o: ["Cleaning more beaches", "Paying volunteers"], why: "“He believes the best solution is to use less plastic in the first place.”" },
      { q: "What is the main idea of paragraph 3?", a: "The work is hard but it feels good", o: ["The beach is dirty forever", "Kwame wants to stop"], why: "“…isn't always pleasant… <b>But</b>… it feels amazing.”" },
      { q: "“Forty tonnes of plastic” tells us…", a: "The group has done a lot of work", o: ["The group is very new", "Plastic is cheap"], why: "A big number = a big result." }
    ],
    move: { start: [0, 2, 1, 3], text: "We need the group's history (“The group started three years ago…”) BEFORE Kwame's opinion. Move it UP one place." } },
  fatima: { title: "Fatima's Shop", level: "A1", icon: "🏮", topic: "present-simple",
    paras: [
      "This is Fatima. She lives in Marrakesh, in Morocco. She has a small shop near the market.",
      "She opens the shop at nine o'clock every morning. She sells bags, scarves and lamps. Her shop is very colourful.",
      "Many tourists come to her shop. Fatima speaks Arabic, French and a little English. She is learning more English every day.",
      "In the evening she closes the shop at seven o'clock. She walks home and drinks mint tea with her family."
    ],
    read: [
      { q: "Where is Fatima's shop?", a: "Near the market", o: ["In a hotel", "At the station"], why: "“She has a small shop near the market.”" },
      { q: "What does she sell?", a: "Bags, scarves and lamps", o: ["Food and drinks", "Phones and books"], why: "Paragraph 2." },
      { q: "What time does she open the shop?", a: "At nine o'clock", o: ["At seven o'clock", "At six o'clock"], why: "“She opens the shop at nine o'clock.”" }
    ],
    think: [
      { q: "Why is Fatima learning English?", a: "Many tourists come to her shop", o: ["She wants to move to London", "Her family speaks English"], why: "Paragraph 3 puts the two ideas together: tourists come → she learns English." },
      { q: "How many languages does Fatima speak?", a: "Three", o: ["Two", "One"], why: "Arabic, French and a little English = three." }
    ],
    move: { start: [0, 1, 3, 2], text: "The evening is at the END of the day. Move “In the evening she closes the shop…” DOWN to the end (number 4)." } },
  diego: { title: "Diego and the Big Match", level: "A1", icon: "🥅", topic: "present-simple",
    paras: [
      "Diego is twelve. He lives in Guadalajara, in Mexico. He loves football.",
      "Every Saturday morning he plays with his team in the park. His team wears green shirts. Diego is the goalkeeper.",
      "His grandmother watches every match. She sits under a tree and shouts, “Go, Diego, go!”",
      "After the match the team eats tacos together. Diego is always tired, but he is always happy."
    ],
    read: [
      { q: "What colour are the team's shirts?", a: "Green", o: ["Red", "Blue"], why: "“His team wears green shirts.”" },
      { q: "When does Diego play?", a: "Every Saturday morning", o: ["Every Sunday evening", "Every day"], why: "Paragraph 2." },
      { q: "Who watches every match?", a: "His grandmother", o: ["His father", "His teacher"], why: "“His grandmother watches every match.”" }
    ],
    think: [
      { q: "What is Diego's job in the team?", a: "He stops the ball — he is the goalkeeper", o: ["He is the coach", "He only watches"], why: "“Diego is the goalkeeper.”" },
      { q: "Does his grandmother enjoy the matches?", a: "Yes — she shouts for him", o: ["No — she sleeps", "We don't know"], why: "She shouts “Go, Diego, go!” — she is excited." }
    ],
    move: { start: [0, 3, 1, 2], text: "“After the match…” happens LAST. Move it DOWN to the end (number 4)." } },
  ahmed: { title: "The Wrong Bus", level: "A2", icon: "🚌", topic: "past-simple",
    paras: [
      "Last month Ahmed started a new job in Cairo. On his first day he wanted to arrive early, so he left home at seven o'clock.",
      "He got on a bus and sat down by the window. He listened to music and didn't look outside. After forty minutes he looked up. He didn't know the street!",
      "He asked the driver for help. “This bus doesn't go to the city centre,” the driver said. “You need the number 12.” Ahmed got off quickly and found the right bus.",
      "He arrived at work ten minutes late. His new manager laughed and said, “Don't worry — everybody gets lost on their first day.”"
    ],
    read: [
      { q: "Why did Ahmed leave home at seven o'clock?", a: "He wanted to arrive early", o: ["He had a meeting", "The bus was cheaper"], why: "“He wanted to arrive early, so he left home at seven.”" },
      { q: "Which bus did he need?", a: "Number 12", o: ["Number 2", "Number 20"], why: "“You need the number 12.”" },
      { q: "How late was he?", a: "Ten minutes", o: ["Forty minutes", "One hour"], why: "Paragraph 4." }
    ],
    think: [
      { q: "Why didn't Ahmed notice the problem for forty minutes?", a: "He was listening to music and didn't look outside", o: ["He was asleep", "The driver didn't stop"], why: "Paragraph 2." },
      { q: "How did the manager feel?", a: "Relaxed — he wasn't angry", o: ["Very angry", "Worried"], why: "He laughed and said “Don't worry”." }
    ],
    move: { start: [0, 2, 1, 3], text: "Ahmed gets on the bus BEFORE he asks the driver for help. Move “He got on a bus…” UP one place." } },
  ana: { title: "A Birthday Surprise", level: "A2", icon: "🎂", topic: "past-simple",
    paras: [
      "Ana's mum had her fiftieth birthday last Friday. Ana and her brother Pablo wanted to make it special, so they planned a surprise party.",
      "For two weeks they called all their mum's friends secretly. They booked a table at her favourite restaurant by the sea in Valencia.",
      "On Friday evening Pablo took their mum for a “quick walk”. When they arrived at the restaurant, twenty people shouted, “Surprise!”",
      "Their mum cried and laughed at the same time. “This is the best birthday of my life,” she said."
    ],
    read: [
      { q: "How old was Ana's mum?", a: "Fifty", o: ["Forty", "Fifteen"], why: "“her fiftieth birthday” = she was 50." },
      { q: "Where was the party?", a: "At a restaurant by the sea", o: ["At home", "In a park"], why: "Paragraph 2." },
      { q: "How many people shouted “Surprise!”?", a: "Twenty", o: ["Two", "Fifty"], why: "Paragraph 3." }
    ],
    think: [
      { q: "Why did they call the friends secretly?", a: "So their mum didn't know about the party", o: ["The phone was broken", "The friends were shy"], why: "It was a SURPRISE party — mum mustn't know." },
      { q: "Was mum happy?", a: "Yes — she cried because she was happy", o: ["No — she was sad", "She was angry"], why: "She laughed too, and said it was the best birthday of her life." }
    ],
    move: { start: [0, 1, 3, 2], text: "The surprise happens BEFORE mum cries. Move “On Friday evening…” UP one place." } },
  mei: { title: "Learning to Cook Online", level: "B1", icon: "🥟", topic: "present-perfect",
    paras: [
      "Mei has always loved food, but until last year she had never cooked anything more difficult than instant noodles.",
      "Then she found a cooking channel online. Since then she has watched more than a hundred videos, and she has tried at least one new recipe every week.",
      "Not everything has gone well. She has burnt the rice twice, and once she put salt in a cake instead of sugar. “My family still laughs about that cake,” she says.",
      "Now Mei cooks dinner for her family three times a week. She has even started her own blog with photos of her dishes, and people from other countries have written to ask for her recipes."
    ],
    read: [
      { q: "What could Mei cook before last year?", a: "Only very simple food, like instant noodles", o: ["Many Chinese dishes", "Cakes and bread"], why: "Paragraph 1." },
      { q: "How often does she try a new recipe?", a: "At least once a week", o: ["Every day", "Once a month"], why: "“at least one new recipe every week”." },
      { q: "What went wrong with the cake?", a: "She used salt instead of sugar", o: ["She burnt it", "She forgot the eggs"], why: "Paragraph 3." }
    ],
    think: [
      { q: "How has Mei changed?", a: "She has become a confident cook", o: ["She has stopped cooking", "She only cooks noodles now"], why: "She cooks for her family and has a blog — big change!" },
      { q: "Why do people from other countries write to Mei?", a: "They want her recipes", o: ["They want to complain", "They want to visit her"], why: "Last sentence." }
    ],
    move: { start: [0, 1, 3, 2], text: "Her mistakes come BEFORE her success. Move “Not everything has gone well…” UP one place." } },
  ingrid: { title: "The Night Train", level: "B1", icon: "🚆", topic: "past-continuous",
    paras: [
      "Ingrid was travelling from Oslo to Bergen on the night train. Outside, snow was falling and the mountains were white under the moon.",
      "At about two in the morning, while most passengers were sleeping, the train suddenly stopped. A voice announced that a tree had fallen across the track.",
      "Instead of complaining, the passengers started talking. An old man shared his coffee, two students played cards, and a little girl showed Ingrid her drawings.",
      "The train finally moved again at six o'clock. “It was four hours late,” Ingrid says, “but it was the best journey I've ever had.”"
    ],
    read: [
      { q: "Where was Ingrid going?", a: "To Bergen", o: ["To Oslo", "To Stockholm"], why: "“from Oslo to Bergen”." },
      { q: "Why did the train stop?", a: "A tree had fallen across the track", o: ["The driver was tired", "It ran out of fuel"], why: "Paragraph 2." },
      { q: "How late was the train?", a: "Four hours", o: ["Two hours", "Six hours"], why: "“It was four hours late.”" }
    ],
    think: [
      { q: "What was surprising about the passengers?", a: "They were friendly instead of angry", o: ["They all slept", "They left the train"], why: "“Instead of complaining, the passengers started talking.”" },
      { q: "What does “the best journey I've ever had” tell us?", a: "She enjoyed it, even with the delay", o: ["She will never take a train again", "She was angry about the delay"], why: "<b>but</b> + best journey = the delay didn't spoil it." }
    ],
    move: { start: [0, 2, 1, 3], text: "First the train stops, THEN the passengers start talking. Move “At about two in the morning…” UP one place." } },
  fourday: { title: "The Four-Day Week", level: "B2", icon: "📆", topic: "s-reading",
    paras: [
      "When Grace's company in Cardiff announced a six-month trial of a four-day working week, many employees were sceptical. “We assumed we'd simply have to squeeze five days of work into four,” she recalls.",
      "The rules were simple: staff would keep their full salary, but meetings were cut to thirty minutes and email was banned after six in the evening. Teams were asked to measure their results, not their hours.",
      "To almost everyone's surprise, productivity didn't fall. In fact, sales rose slightly, and the number of sick days dropped by nearly half. Grace admits the first month was stressful, but says the team soon learned to focus on what really mattered.",
      "Not everyone is convinced, however. Some managers worry that the model wouldn't work in hospitals or shops, where someone always needs to be present. The company has decided to keep the four-day week, but it is still looking for a fairer system for its customer-service staff."
    ],
    read: [
      { q: "How long was the trial?", a: "Six months", o: ["One month", "Four months"], why: "“a six-month trial”." },
      { q: "What happened to sick days?", a: "They fell by nearly half", o: ["They doubled", "They stayed the same"], why: "Paragraph 3." },
      { q: "Which rule was part of the trial?", a: "Meetings were shorter", o: ["Salaries were lower", "Staff worked at weekends"], why: "“meetings were cut to thirty minutes”." }
    ],
    think: [
      { q: "What does “sceptical” mean in paragraph 1?", a: "Not sure it would work", o: ["Very excited", "Angry with the company"], why: "They thought they'd have to “squeeze five days into four” — they doubted it." },
      { q: "What is the main idea of paragraph 4?", a: "The system doesn't suit every job", o: ["The trial failed", "Customers were unhappy"], why: "Hospitals and shops need someone present — a limit of the idea." },
      { q: "What is the writer's overall view?", a: "Balanced — good results, but some problems", o: ["Completely against it", "Completely in favour"], why: "Paragraph 3 is positive, paragraph 4 starts with <b>however</b>." }
    ],
    move: { start: [0, 2, 1, 3], text: "Readers need the rules BEFORE the results. Move “The rules were simple…” UP one place." } },
  phones: { title: "Phones in the Classroom", level: "B2", icon: "📵", topic: "s-reading",
    paras: [
      "Last September, Rafael's secondary school in Lisbon introduced a strict rule: phones must stay in lockers from the first bell until the end of the day. Many students were furious, and some parents complained that they could no longer contact their children.",
      "Six months later, the picture is more complicated. Teachers report that lessons are calmer and that students talk to each other more at break time. “I've seen kids playing football who used to sit staring at a screen,” says one teacher.",
      "On the other hand, some students say the ban has made school work harder. They used their phones to look up words, take photos of the board and check homework deadlines. “Phones aren't just for games,” argues Rafael, who is sixteen.",
      "The school is now considering a compromise: phones will stay in lockers at break time, but teachers may allow them in lessons for specific tasks. Whether this will satisfy both sides remains to be seen."
    ],
    read: [
      { q: "Where must the phones stay?", a: "In lockers", o: ["At home", "In the teacher's desk"], why: "Paragraph 1." },
      { q: "Why did some parents complain?", a: "They couldn't contact their children", o: ["Lockers cost money", "Lessons were longer"], why: "Paragraph 1." },
      { q: "What is the compromise?", a: "Phones allowed in lessons for specific tasks", o: ["Phones allowed all day", "No phones at all, ever"], why: "Paragraph 4." }
    ],
    think: [
      { q: "What does “remains to be seen” mean?", a: "Nobody knows yet", o: ["It is certain", "It is a secret"], why: "We will only know in the future." },
      { q: "Which statement would Rafael agree with?", a: "Phones can be useful for learning", o: ["Phones should be banned everywhere", "Phones are only for games"], why: "“Phones aren't just for games.”" },
      { q: "Why does the writer include the teacher's quote?", a: "To show a positive effect of the ban", o: ["To criticise the students", "To explain the compromise"], why: "Kids play football instead of staring at screens = a benefit." }
    ],
    move: { start: [0, 1, 3, 2], text: "The compromise is the conclusion. Move “The school is now considering…” DOWN to the end (number 4)." } }
},

/* ---------- FIX IT (corrections). {wrong|right|extra wrong option} marks each mistake ---------- */
fix: {
  f1: { title: "Fix It · Level 1 sentences", items: [
    { s: "{she|She} is my friend.", why: ["A sentence starts with a capital letter."], topic: "punctuation" },
    { s: "My name {are|is|am} Ana.", why: ["My name = it → <b>is</b>."], topic: "be" },
    { s: "Tom and {i|I} are students.", why: ["<b>I</b> is always a capital."], topic: "punctuation" },
    { s: "He {play|plays|playing} football on Sundays.", why: ["He / she / it → verb + s."], topic: "present-simple" },
    { s: "I am from {india|India}.", why: ["Countries start with a capital."], topic: "punctuation" },
    { s: "We {is|are|am} hungry.", why: ["We → <b>are</b>."], topic: "be" },
    { s: "She {are|is|am} a teacher.", why: ["She → <b>is</b>."], topic: "be" },
    { s: "My brother {like|likes|liking} rice.", why: ["My brother = he → verb + s."], topic: "present-simple" },
    { s: "They {plays|play|is play} in the park.", why: ["They → no -s."], topic: "present-simple" },
    { s: "I am {student|a student|an student}.", why: ["Jobs need <b>a / an</b>: a student. (Common mistake for speakers of languages without 'a'.)"], topic: "articles" },
    { s: "See you on {monday|Monday}.", why: ["Days start with a capital."], topic: "punctuation" },
    { s: "I {am eat|eat|eating} rice every day.", why: ["Action word → no am/is/are: I eat."], topic: "be" }
  ] },
  f2: { title: "Fix It · Level 2 sentences", items: [
    { s: "Yesterday I {go|went|goed} to the market.", why: ["Yesterday = past → went."], topic: "past-simple" },
    { s: "Did you {saw|see|seen} the film?", why: ["After did, the verb goes back to normal: did you see."], topic: "past-simple" },
    { s: "I have {a|an} apple.", why: ["apple starts with a vowel sound → an."], topic: "articles" },
    { s: "She is {more tall|taller|more taller} than me.", why: ["Short word → -er: taller."], topic: "comparatives" },
    { s: "There are three {boxs|boxes|boxies} on the table.", why: ["After x → -es."], topic: "s-spelling" },
    { s: "How {much|many} apples do you want?", why: ["Apples can be counted → many."], topic: "quantifiers" },
    { s: "See you {in|on|at} Friday.", why: ["Days → on."], topic: "prepositions-time" },
    { s: "My birthday is {on|in|at} July.", why: ["Months → in."], topic: "prepositions-time" },
    { s: "I {am knowing|know|knowing} the answer.", why: ["know is a thinking verb → no -ing."], topic: "stative-verbs" },
    { s: "The {babys|babies|babyes} are sleeping.", why: ["Consonant + y → -ies."], topic: "s-spelling" },
    { s: "You should {to rest|rest|resting}.", why: ["After should → plain verb, no 'to'."], topic: "advice-should" },
    { s: "I {stoped|stopped|stopt} the car.", why: ["Short vowel + one consonant → double: stopped."], topic: "s-spelling" }
  ] },
  f3: { title: "Fix It · Level 3 proofreading", paragraph: 1, items: [
    { s: "{last|Last} year my family {move|moved|moving} to Canada. At first I {don't|didn't|doesn't} like the cold, but now I love it. I have {make|made|maked} many friends and my English is {more better|better|more good} than before.",
      why: ["Start with a capital letter.", "Last year = finished past → moved.", "Still the past → didn't.", "have + past participle → made.", "Choose -er OR more — never both: better."],
      topics: ["punctuation", "past-simple", "past-simple", "present-perfect", "comparatives"] },
    { s: "Dear Sir or Madam, I am writing {for|to|for to} ask about your English course. I {have seen|saw|have saw} your advert yesterday. How {many|much} does the course cost? {i|I} look forward to hearing from you. Yours {sincerely|faithfully}",
      why: ["I am writing <b>to</b> + verb (to ask).", "yesterday = finished time → past simple: saw.", "Money / cost can't be counted → how much.", "I is always a capital.", "After 'Dear Sir or Madam' → Yours faithfully. (Yours sincerely is for a name: Dear Ms Khan.)"],
      topics: ["s-writing", "present-perfect", "quantifiers", "punctuation", "s-writing"] },
    { s: "If it {will rain|rains|rained} tomorrow, we will stay at home. My sister is {enough old|old enough|too old enough} to cook, so she will {cooks|cook|cooking} pasta. We {has|have} lots of board games, and my brother always {win|wins|winning}!",
      why: ["The IF half stays in the present: if it rains.", "enough goes AFTER the adjective: old enough.", "After will → plain verb: will cook.", "We → have.", "My brother = he → wins."],
      topics: ["first-conditional", "too-enough", "future", "present-simple", "present-simple"] }
  ] },
  f4: { title: "Fix It · Level 4 proofreading", paragraph: 1, items: [
    { s: "{Their|There|They're} are many reasons why I want to study abroad. {Its|It's|Its'} a chance to improve my English, and I have always been interested {on|in|at} other cultures. If I {would get|got|will get} a scholarship, I would apply to a university in Canada. However, the fees are {to|too|two} high for my family.",
      why: ["There are = something exists. (Their = belongs to them.)", "It's = it is. (Its = belongs to it.)", "interested <b>in</b>.", "Imaginary situation: if + past, would + verb (if I got…, I would…).", "too = more than you want."],
      topics: ["s-spelling", "s-spelling", "s-writing", "s-writing", "too-enough"] },
    { s: "Dear Mr Patel, Thank you for {you're|your|you} email. I {write|am writing|have wrote} to confirm that the meeting will take place on Monday {in|at|on} 10 a.m. Please could you send me the {companys|company's|companies'} new address? I look forward to {hear|hearing|heard} from you. Yours {faithfully|sincerely}",
      why: ["your = belongs to you. (You're = you are.)", "Formal emails: I am writing to…", "Clock times → at.", "Belongs to the company → company's.", "look forward to + -ing.", "You know his name (Mr Patel) → Yours sincerely."],
      topics: ["s-spelling", "present-continuous", "prepositions-time", "s-spelling", "s-writing", "s-writing"] },
    { s: "The number of people who {works|work|working} from home {have|has|having} grown since 2020. Many say they are {more happier|happier|most happy}, but others feel lonely. Experts {suggests|suggest|suggesting} that companies should {to offer|offer|offering} a mix of home and office days.",
      why: ["people (they) → work.", "The subject is “the number” (one number) → has grown.", "-er OR more, never both: happier.", "Experts (they) → suggest.", "should + plain verb: should offer."],
      topics: ["present-simple", "present-perfect", "comparatives", "present-simple", "advice-should"] }
  ] }
},

/* ---------- PUT IT TOGETHER (writing tasks with an automatic checklist) ---------- */
tasks: {
  t1: { title: "Introduce yourself", level: 1, icon: "🙋", after: "First Steps · Level 1",
    brief: "Write 3–4 sentences about you: your name, your country, how you feel or your job, and something you like.",
    frames: [["My name is", "input:your name", "."], ["I am from", "input:your country", "."], ["I am", "pick:a student|a teacher|happy|tired|a nurse|20 years old|a mother|a father", "."], ["I like", "pick:tea|football|music|rice|my family|English", "."]],
    model: "My name is Kenji. I am from Japan. I am a student. I like music and football.",
    checks: ["sentences:3", "capitals", "bigI", "endings", "has:my name is|i am|i'm", "properAfter:from"] },
  t2: { title: "My day", level: 1, icon: "⏰", after: "Level 1 · present simple",
    brief: "Write 4–5 sentences about your day. Use time words (every morning, at 7 o'clock). Write ONE sentence about another person with he or she (He works… / She cooks…).",
    model: "Every morning I get up at seven o'clock. I eat bread and drink tea. I go to school by bus. My mother works in a shop. She comes home at six o'clock.",
    checks: ["sentences:4", "capitals", "bigI", "endings", "has:every|always|usually|o'clock|morning|evening|at [0-9]", "thirdS", "noIs"] },
  t3: { title: "Last weekend", level: 2, icon: "📅", after: "Level 2 · past simple",
    brief: "Write 4–6 sentences about last weekend. Use a past time word (last Saturday, yesterday) and at least 3 past verbs (went, ate, played…).",
    model: "Last Saturday I went to the market with my friend. We bought fruit and ate noodles. In the evening I watched a film. On Sunday I stayed at home and studied English.",
    checks: ["sentences:4", "capitals", "bigI", "endings", "has:yesterday|last|ago|on saturday|on sunday", "pastVerbs:3", "noDidPast"] },
  t4: { title: "Read and reply", level: 2, icon: "✉️", after: "Level 2 · reading + writing",
    message: "Hi! I'm visiting your city next month. What should I see? What is the food like? Can we meet? — Mei",
    brief: "Read Mei's message. Write a reply of 5 or more sentences. Answer ALL three questions. Start with a greeting (Hi Mei!) and finish with a goodbye (See you soon!).",
    model: "Hi Mei! That's great news. You should see the old market and the river. The food is spicy and delicious — try the noodle soup! Yes, we can meet on Saturday. See you soon!",
    checks: ["sentences:5", "capitals", "bigI", "endings", "has:^(hi|hello|dear)", "has:should", "has:food|eat|delicious|spicy|tasty|try", "has:meet|see you|saturday|sunday|weekend|yes", "has:see you|bye|best wishes|cheers|love|take care"] },
  t5: { title: "My town — a paragraph", level: 3, icon: "🏙️", after: "Level 3 · all skills",
    brief: "Write a paragraph (6+ sentences) about your town for a visitor. Use: there is / there are, a comparison (bigger than…, more beautiful than…), should, the present perfect (I have lived… / I have never…), and linking words (because, but, so).",
    model: "I have lived in Kandy for ten years. It is smaller than Colombo, but it is more beautiful because there are mountains all around it. There is a big lake in the centre, and there are many small cafés. You should visit the temple in the evening. I have never seen a more peaceful place, so I think you will love it. Come and see it soon!",
    checks: ["sentences:6", "capitals", "bigI", "endings", "has:there is|there are|there's", "has:er than|more [a-z]+ than|less [a-z]+ than", "has:should", "has:(have|has|i've|we've) (lived|been|seen|visited|never|always|had|made|known|loved)", "has:because|but|so|although|however"] },
  t6: { title: "Your opinion — phones in schools", level: 4, icon: "🗣️", after: "Level 4 · all skills",
    brief: "Read “Phones in the Classroom” first. Then write an opinion piece (8+ sentences): Should phones be allowed in schools? Give your opinion, two reasons with examples, the opposite view, and a conclusion.",
    model: "In my opinion, phones should be allowed in schools, but only for learning. Firstly, phones are useful tools. For example, students can look up new words or take photos of the board. Secondly, parents feel safer when they can contact their children. However, some people think phones distract students from their lessons. This is true, because many teenagers spend hours on games and social media. That's why I believe phones should stay in lockers at break time. In conclusion, a sensible compromise is better than a total ban.",
    checks: ["sentences:8", "capitals", "bigI", "endings", "has:in my opinion|i think|i believe|personally", "has:firstly|first of all|secondly|another reason|also", "has:however|on the other hand|although|some people", "has:for example|for instance|such as", "has:in conclusion|to sum up|overall|all in all", "noHomophone"] }
}
};
