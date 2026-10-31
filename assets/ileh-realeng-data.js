/* Real England: Everyday Conversations — scene data
   I Learn English Here · an Online Business Awareness project
   Line format: [speaker index, what they say, what it means, what they expect to hear (or ""), style tag]
   Style tags: polite · casual · local · banter · drunk · under (understatement / sarcasm) · safety */
window.RE_DATA = {
  parts: [
    { n: 1, t: "Out & About", lvl: "A2", icon: "🚶", note: "Everyday situations you will meet in your first week in England." },
    { n: 2, t: "Making a Life", lvl: "B1", icon: "🤝", note: "Small talk, friends, contacts — and the hidden rules behind them." },
    { n: 3, t: "Nights Out & Dating", lvl: "B1–B2 · 16+", icon: "🌙", note: "Clubs, late nights and dates — with the safety language every learner should know.", adult: 1 }
  ],
  scenes: [
  /* ======================= PART 1 ======================= */
  { id: "where-from", part: 1, lvl: "A2", icon: "🚆", title: "Where are you from?", place: "On the train to Birmingham · a grey Monday morning",
    bg: "train", props: "🚆 🌧️",
    who: [["Linh", "👩🏻", "f", 1.1], ["Jean", "👵🏼", "f", 0.92]],
    story: "Linh has just arrived in England. She is on the train to Birmingham, where her new job starts next week. An older lady with a shopping bag stops next to her empty seat…",
    lines: [
      [1, "Is anyone sat here, love?", "Is this seat free? (“Sat” instead of “sitting” is normal in the Midlands and the North. “Love” is just friendly — not romantic.)", "“No, go ahead.” or “It's free.”", "local"],
      [0, "No, go ahead.", "Please sit down.", "", "casual"],
      [1, "Ta, bab.", "Thanks, dear. (“Ta” = thanks. “Bab” = a Birmingham word like “love” or “dear”.)", "Nothing — or a smile.", "local"],
      [1, "Ooh, it's bitter out there today, isn't it?", "It's very cold today. (The weather is how English people start a conversation with a stranger.)", "Agree! “It is! Freezing.”", "casual"],
      [0, "It is! I'm still getting used to it.", "Yes — I'm not used to this weather yet.", "", "casual"],
      [1, "You're not from round here, then?", "Where are you from? (It looks like a statement, but the voice goes up — it's a question.)", "Where you are from + one small detail.", "casual"],
      [0, "No, I'm from Vietnam. I've just moved here for work.", "A short, friendly answer with one detail. Perfect.", "", "polite"],
      [1, "Oh, lovely! What brings you to Brum?", "Why did you come to Birmingham? (“Brum” = Birmingham.)", "Your reason, in one sentence.", "local"],
      [0, "I've got a new job in the city centre.", "Her reason — short and clear.", "", "casual"],
      [1, "Well, good on you. You'll love it — everyone's dead friendly.", "Well done! You'll like it — people are very friendly. (“Dead” = very, in casual speech.)", "“Thank you, I hope so!”", "local"]
    ],
    why: [
      "In many countries people ask “Where are you from?” straight away. In England, they usually start with the <b>weather</b>, then ask in a softer way: “You're not from round here, then?”",
      "The question is just curiosity — not rude and not suspicious. You don't need to tell your life story: <b>where you're from + one detail</b> is perfect.",
      "Older people in the Midlands and the North call everyone <b>love</b>, <b>bab</b> or <b>duck</b>. It's warm and friendly, never flirting."
    ],
    alt: [["Where are you from originally?", "Where were you born / where did you grow up?"], ["Whereabouts are you from?", "Which part of the country or world?"], ["Where's that accent from?", "I can hear you're not local — where are you from?"], ["Are you local?", "Do you live in this area?"]],
    reply: { q: "Jean says: “You're not from round here, then?” What is the best reply?", a: "No, I'm from Vietnam — I moved here last week.", o: ["Yes.", "Why do you ask?", "Round where?"], why: "It answers the hidden question (where are you from?) and adds one friendly detail. “Why do you ask?” sounds defensive in English." },
    listen: [
      ["Ta, bab.", "What does Jean mean?", "Thanks, dear.", ["Goodbye, baby.", "Take it, Bob.", "Sit down, please."]],
      ["Ooh, it's bitter out there today.", "What is Jean talking about?", "It's very cold today.", ["She feels angry.", "The coffee tastes bad.", "The train is late."]],
      ["What brings you to Brum?", "What is she asking?", "Why did you come to Birmingham?", ["What did you bring with you?", "Do you like drums?", "How did you travel here?"]]
    ],
    skills: ["Start small talk with the weather", "Answer “where are you from?” naturally", "Understand Brummie words: ta, bab, Brum", "Hear questions that sound like statements"] },

  { id: "directions", part: 1, lvl: "A2", icon: "🗺️", title: "Can you tell me how to get to…?", place: "Birmingham city centre · a busy Saturday",
    bg: "street", props: "🏙️ 🚏",
    who: [["Linh", "👩🏻", "f", 1.1], ["Dev", "👨🏾", "m", 1.0]],
    story: "It's Linh's first Saturday in Birmingham. She wants to find the Bullring shopping centre, but her phone battery is dead. She stops a man who looks like he knows the area…",
    lines: [
      [0, "Excuse me, sorry — can you tell me how to get to the Bullring?", "A very English way to start: “Excuse me, sorry” before a question to a stranger.", "", "polite"],
      [1, "The Bullring? Yeah, no worries. You're not far.", "Yes, I can help. It's close.", "Listen carefully for the directions.", "casual"],
      [1, "Go straight down here, past the Tesco, then take the second left.", "English people give directions with shops and pubs as landmarks — not street names or north/south.", "", "casual"],
      [1, "Keep going till you see the big church, and it's right in front of you. You can't miss it.", "“You can't miss it” = it's very easy to see. (People do sometimes miss it — that's normal!)", "", "casual"],
      [0, "Is it far to walk?", "How long does it take on foot?", "", "polite"],
      [1, "Nah, five minutes, tops. Ten if you stop for a coffee.", "Five minutes maximum. The coffee part is a small joke — friendly banter.", "A smile and a thank you.", "banter"],
      [0, "Brilliant, thank you so much.", "Thank you. (“Brilliant” is used for small things, not just amazing things.)", "", "polite"],
      [1, "No bother. Enjoy!", "You're welcome. Have a nice time.", "", "local"]
    ],
    why: [
      "Brits rarely say “Go north for 200 metres”. They say <b>“past the Tesco, left at the pub, you can't miss it”</b>. Listen for shop names and buildings.",
      "To say “you're welcome” locals say <b>no worries, no bother, no problem</b> or <b>you're alright</b>. “You're welcome” sounds a bit formal.",
      "If the person doesn't know, they will often say “Sorry, I'm not from round here” — that's a real answer, not a brush-off."
    ],
    alt: [["It's just round the corner.", "It's very close."], ["It's a bit of a trek.", "It's quite far to walk."], ["Sorry, I'm not from round here, mate.", "I don't know this area."], ["Hop on the 50 — it'll take you straight there.", "Take bus number 50."], ["Just follow the signs.", "There are signs that show the way."]],
    reply: { q: "Dev says: “It's just round the corner.” What does he mean?", a: "It's very close.", o: ["You must turn around.", "It's in a corner shop.", "It's far away."], why: "“Just round the corner” means very near — usually a few minutes' walk." },
    listen: [
      ["Nah, five minutes, tops.", "How long is the walk?", "Five minutes at the most.", ["Fifty minutes.", "More than five minutes.", "Go to the top of the hill."]],
      ["You can't miss it.", "What does Dev mean?", "It's easy to see.", ["You must not go there.", "It's closed today.", "Don't be late."]],
      ["No bother. Enjoy!", "What does “No bother” mean here?", "You're welcome.", ["Don't bother me.", "I don't know.", "There's no problem with the bus."]]
    ],
    skills: ["Ask a stranger politely with “Excuse me, sorry…”", "Follow landmark directions", "Ask about distance", "Understand no worries / no bother"] },

  { id: "uber", part: 1, lvl: "A2", icon: "🚕", title: "Ordering an Uber", place: "Outside a shopping centre · early evening",
    bg: "evening", props: "🚗 🏬",
    who: [["Linh", "👩🏻", "f", 1.1], ["Tariq", "👨🏽", "m", 0.95]],
    story: "Linh is tired after shopping. She books a ride on the app. A car stops — but before she gets in, she does the most important check of all…",
    lines: [
      [1, "Hiya! Linh, is it? Going to Moseley?", "Are you Linh, the passenger going to Moseley? (A good driver says YOUR name — you don't say it first.)", "“Yes, that's me.”", "casual"],
      [0, "Yes, that's me. Can I just check your name?", "Safety check: the driver's name, car and number plate must match the app.", "", "safety"],
      [1, "Tariq. It's all on the app. Hop in!", "Get in the car. (“Hop in” is very casual and friendly.)", "", "casual"],
      [1, "You alright in the back? Want the heating on?", "Are you comfortable? Do you want it warmer?", "“I'm fine, thanks.” or “Yes, please.”", "polite"],
      [0, "I'm fine, thanks.", "No, thank you — I'm comfortable.", "", "polite"],
      [1, "Busy day?", "Small talk. You can chat — or keep it short if you're tired.", "A short answer.", "casual"],
      [0, "Just shopping. I'm a bit tired, to be honest.", "A polite way to say: I don't really want to chat.", "", "polite"],
      [1, "Fair enough. I'll leave you in peace, then.", "I understand — I'll stop talking.", "", "casual"],
      [1, "Here we are. Is just here alright?", "We've arrived. Can I stop here?", "“Perfect, thanks!”", "casual"],
      [0, "Perfect, cheers!", "“Cheers” = thanks (and also what people say when they lift their glasses).", "", "casual"]
    ],
    why: [
      "<b>Safety first:</b> check the car, the number plate and the driver's name on the app <b>before</b> you get in. Let the driver say your name — don't tell them.",
      "If you're alone, most people sit in the <b>back</b>. Share your trip with a friend from the app.",
      "Small talk is optional. “I'm a bit tired, to be honest” is perfectly polite, and the driver will understand: “Fair enough.”"
    ],
    alt: [["Where are we off to?", "Where are you going?"], ["Is it this side of the road or the other side?", "Where exactly should I stop?"], ["Any particular way you want me to go?", "Do you want a special route?"], ["Don't forget your bags!", "Remember to take your shopping."]],
    reply: { q: "The driver asks: “Busy day?” You are very tired. What do you say?", a: "Not bad — just a bit tired, to be honest.", o: ["That is a personal question.", "Drive faster, please.", "No."], why: "It's friendly and honest, and the driver will understand you want a quiet ride. A one-word “No.” can sound cold." },
    listen: [
      ["Hop in!", "What does the driver want?", "Get in the car.", ["Jump up and down.", "Wait a minute.", "Open the boot."]],
      ["Fair enough.", "What does “Fair enough” mean?", "OK, I understand.", ["That's a fair price.", "That's enough money.", "I don't agree."]],
      ["Is just here alright?", "What is he asking?", "Can I stop the car here?", ["Are you feeling OK?", "Is this your house?", "Do you like this music?"]]
    ],
    skills: ["Do the taxi safety check", "Handle small talk — or politely avoid it", "Understand hop in, fair enough, cheers", "Agree where to stop"] },

  { id: "market", part: 1, lvl: "A2", icon: "🍓", title: "How much does this cost?", place: "An outdoor market · Saturday morning",
    bg: "market", props: "🍓 🥕 🍌",
    who: [["Linh", "👩🏻", "f", 1.1], ["Shaz", "🧔🏻", "m", 0.9]],
    story: "Linh wants fresh fruit. The market traders are loud and cheerful, shouting prices across the stalls. One of them calls out to her…",
    lines: [
      [1, "Hello, gorgeous! What can I get you?", "Hello! What would you like? (Market traders call EVERYONE gorgeous, darling or love — grandmas too. It's part of the show.)", "What you want to buy.", "casual"],
      [0, "How much are the strawberries?", "What's the price?", "", "polite"],
      [1, "Two quid a punnet, or three for a fiver.", "£2 for one small box, or 3 boxes for £5. (Quid = pounds. Fiver = £5. Punnet = small fruit box.)", "Your choice.", "local"],
      [0, "Three for a fiver, then, please.", "She uses the trader's own words — very natural!", "", "casual"],
      [1, "Lovely jubbly. Anything else for you, darling?", "Great! Do you want anything else? (“Lovely jubbly” is an old, jokey way to say “lovely”.)", "“No, that's all, thanks.”", "banter"],
      [0, "No, that's all, thanks. Can I pay by card?", "", "", "polite"],
      [1, "Cash only, sorry, love. There's a cashpoint just over there.", "We only take cash. There's a cash machine nearby.", "", "casual"],
      [0, "No problem — back in a sec!", "I'll be back in a second.", "", "casual"],
      [1, "Ta-ra, bab! See you next week!", "Goodbye! (“Ta-ra” = goodbye in Birmingham and the North.)", "“Bye! See you!”", "local"]
    ],
    why: [
      "“<b>Hello, gorgeous!</b>” from a market trader is <b>not flirting</b> — it's how they sell. They say it to everybody. (A stranger saying it to you in the street is different — see Part 3.)",
      "In shops, prices are fixed — don't bargain. At markets, near closing time, you can ask: “Can you do it any cheaper?”",
      "Money slang you will hear every day: <b>quid</b> (£1), <b>fiver</b> (£5), <b>tenner</b> (£10), <b>50p</b> (“fifty pee”)."
    ],
    alt: [["What'll it be?", "What would you like?"], ["Who's next, please?", "Whose turn is it?"], ["That's three pound fifty, please.", "£3.50."], ["Have you got anything smaller?", "Do you have a smaller banknote?"], ["Do you want a bag for that?", "Do you need a bag?"]],
    reply: { q: "The trader says: “Three for a fiver.” What does it mean?", a: "Three for £5.", o: ["Three for £4.", "Three or four, please.", "Three for 50p."], why: "A fiver is a £5 note. A tenner is a £10 note." },
    listen: [
      ["Two quid a punnet.", "How much is one box?", "£2", ["£20", "50p", "£5"]],
      ["Have you got anything smaller?", "What does the trader want?", "A smaller note or coins.", ["A smaller bag.", "Smaller strawberries.", "A child's size."]],
      ["Ta-ra, bab!", "What does it mean?", "Goodbye, dear!", ["Thank you, baby!", "Wait for me!", "Take a bag!"]]
    ],
    skills: ["Ask prices and choose deals", "Understand quid, fiver, tenner", "Know that market “gorgeous” isn't flirting", "Handle “cash only”"] },

  { id: "live-round-here", part: 1, lvl: "A2", icon: "🚏", title: "Do you live round here?", place: "A bus stop near the park · a windy afternoon",
    bg: "street", props: "🚏 🌳 🐕",
    who: [["Linh", "👩🏻", "f", 1.1], ["Priya", "👩🏽", "f", 0.98]],
    story: "Linh has been waiting for the bus for ten minutes. A woman arrives with a small, very excited dog…",
    lines: [
      [1, "Alright? Has the 50 been yet?", "Hello! Has the number 50 bus come yet? (“Alright?” = hello. It is NOT really asking if you're OK.)", "“Not yet” — and maybe “Alright?” back.", "casual"],
      [0, "I don't think so. I've been waiting ten minutes.", "", "", "casual"],
      [1, "Typical! It's always late, this one.", "Moaning about buses and weather together is how strangers bond in England.", "Agree, or laugh.", "under"],
      [1, "Do you live round here, then?", "Are you local? (Friendly small talk.)", "Yes/no + a general area — NOT your full address.", "casual"],
      [0, "Yeah, just up the road, near the park.", "A safe, friendly answer: a general area, no house number.", "", "safety"],
      [1, "Oh nice, me too. I'm always walking this one round there.", "“This one” = her dog.", "", "casual"],
      [0, "Aw, he's lovely! What's his name?", "Asking about someone's dog = instant friendship in England.", "", "polite"],
      [1, "Biscuit. He's a nightmare, honestly.", "She says he's naughty — but she says it with love. This is English humour.", "Laugh: “He looks very happy!”", "banter"],
      [1, "Oh, here it is — finally!", "The bus has arrived, at last.", "", "casual"]
    ],
    why: [
      "“<b>Alright?</b>” means hello. Answer with “Alright?” or “Yeah, good thanks, you?” — not a health report!",
      "“Do you live round here?” is friendly — but you only need to say the <b>area</b>. Never give your house number to someone you've just met.",
      "Complaining <b>together</b> about buses, trains or rain is not negative — it's bonding. And dogs are the easiest way to make a local smile."
    ],
    alt: [["Are you local?", "Do you live near here?"], ["Whereabouts do you live?", "Which part of town?"], ["How long have you lived here?", "When did you move here?"], ["You new round here?", "Have you just arrived?"]],
    reply: { q: "A neighbour says: “Alright?” What's the most natural reply?", a: "Yeah, not bad, thanks. You?", o: ["I am not ill.", "Why? Do I look sick?", "Alright what?"], why: "“Alright?” is a greeting. Short answer + ask back." },
    listen: [
      ["Has the 50 been yet?", "What does Priya want to know?", "Has the number 50 bus come?", ["Is it fifty pence?", "Are you fifty years old?", "Has it been 50 minutes?"]],
      ["Just up the road.", "Where does Linh live?", "Quite close, in this area.", ["On the main road.", "Very far away.", "Upstairs."]],
      ["He's a nightmare, honestly.", "How does Priya really feel about her dog?", "She loves him, even though he's naughty.", ["She is scared of him.", "She wants to sell him.", "He gives her bad dreams."]]
    ],
    skills: ["Answer “Alright?” like a local", "Share your area safely", "Bond with small complaints", "Hear affectionate humour"] },

  { id: "booking", part: 1, lvl: "A2", icon: "📞", title: "Booking a table", place: "On the phone to a pub restaurant · Wednesday evening",
    bg: "pub", props: "📞 🍽️",
    who: [["Linh", "👩🏻", "f", 1.1], ["Sam", "🧑🏼", "m", 1.05]],
    story: "Linh wants to take three new friends out for dinner on Saturday. She calls The Red Lion, a popular pub with good food…",
    lines: [
      [1, "Hiya, The Red Lion, Sam speaking. How can I help?", "The normal way to answer a business phone.", "What you want.", "polite"],
      [0, "Hi, I'd like to book a table for Saturday, please.", "", "", "polite"],
      [1, "Lovely. For how many?", "How many people?", "A number.", "casual"],
      [0, "For four, please.", "", "", "polite"],
      [1, "And what time were you thinking?", "What time do you want? (The past tense just makes it softer and more polite.)", "A time.", "polite"],
      [0, "Around half seven?", "“Half seven” = 7:30. (Careful: NOT 6:30!)", "", "casual"],
      [1, "Let me just have a look… I'm afraid half seven's gone. I've got seven or eight.", "Sorry, 7:30 is already booked. 7:00 or 8:00 are free. (“I'm afraid” = sorry, bad news.)", "Choose one.", "polite"],
      [0, "Eight's fine.", "", "", "casual"],
      [1, "Perfect. Can I take a name?", "What name is the booking for?", "Your name — spell it if it's unusual.", "polite"],
      [0, "Linh — that's L-I-N-H.", "Spelling your name saves problems later.", "", "polite"],
      [1, "Lovely. So that's a table for four, Saturday at eight. Any dietary requirements?", "Does anyone have special food needs (vegan, allergies…)?", "“One vegan, please.” or “No, thanks.”", "polite"],
      [0, "One vegan, please.", "", "", "polite"],
      [1, "No problem at all. See you Saturday!", "", "", "casual"]
    ],
    why: [
      "<b>Half seven</b> means 7:30. In German and some other languages, “half seven” means 6:30 — a classic mix-up!",
      "Staff often repeat the details at the end. Listen carefully — this is your chance to correct anything: “Sorry, that's Linh with an H.”",
      "“<b>I'm afraid…</b>” doesn't mean fear. It means “I'm sorry, but…” before bad news."
    ],
    alt: [["We're fully booked, I'm afraid.", "There are no free tables."], ["Is that inside or outside?", "Where do you want to sit?"], ["We'll need the table back by ten.", "You must leave by 10:00."], ["Can I take a card to secure the booking?", "We need your card details in case you don't come."]],
    reply: { q: "What time is “half seven”?", a: "7:30", o: ["6:30", "7:15", "3:30"], why: "Half seven = half past seven = 7:30." },
    listen: [
      ["I'm afraid half seven's gone.", "What does Sam mean?", "7:30 is not available.", ["He is scared.", "It's 7:30 now.", "Someone left at 7:30."]],
      ["Can I take a name?", "What does Sam want?", "The name for the booking.", ["To take your name tag.", "To change your name.", "Your friend's name."]],
      ["Any dietary requirements?", "What is he asking about?", "Special food needs.", ["Your diet plan.", "How hungry you are.", "The drinks menu."]]
    ],
    skills: ["Book by phone step by step", "Understand UK times (half seven)", "Spell your name clearly", "Hear “I'm afraid” = bad news"] },

  { id: "menu-bill", part: 1, lvl: "A2", icon: "🧾", title: "Asking for the menu and the bill", place: "The Red Lion pub · Saturday, 8 pm",
    bg: "pub", props: "🍔 🍟 🧾",
    who: [["Linh", "👩🏻", "f", 1.1], ["Ellie", "👩🏼", "f", 1.0]],
    story: "Saturday night. Linh and her friends sit down at their table. A friendly server comes over…",
    lines: [
      [1, "Hiya! Can I get you any drinks to start with?", "Do you want to order drinks first?", "Your drinks — or ask for the menu.", "polite"],
      [0, "Could we see the menus, please?", "", "", "polite"],
      [1, "Course — here you go. The specials are on the board.", "Of course. (“Course” = of course.) Today's special dishes are written on the board.", "", "casual"],
      [1, "Are you ready to order, or do you need a few minutes?", "Do you know what you want yet?", "Order — or “A few more minutes, please.”", "polite"],
      [0, "Could I get the veggie burger, please?", "“Could I get…” is a very common, polite way to order.", "", "polite"],
      [1, "Any sides with that? Chips? Salad?", "Do you want extra small dishes?", "", "casual"],
      [0, "Chips, please. And a tap water.", "Tap water is free in UK restaurants — just ask.", "", "polite"],
      [1, "How is everything?", "Is the food OK? (She asks this while you're eating.)", "A quick “Lovely, thanks!”", "polite"],
      [0, "Lovely, thanks!", "English people say “lovely” even when the food is just OK.", "", "under"],
      [0, "Could we get the bill, please?", "Can we pay now?", "", "polite"],
      [1, "Course. Are you paying together or separately?", "One payment, or each person pays?", "", "polite"],
      [0, "Separately, please.", "", "", "polite"],
      [1, "No problem. Just tap your card whenever you're ready.", "Pay with contactless.", "", "casual"]
    ],
    why: [
      "In many pubs you <b>order at the bar</b>, not at the table. Look for a sign: “Please order at the bar — remember your table number.”",
      "Check the bill: a <b>service charge</b> (10–12.5%) is often already included. If it is, you don't need to tip again.",
      "“How is everything?” needs a quick answer. If something is really wrong, say it politely: “Sorry, this is a bit cold — could you warm it up?”"
    ],
    alt: [["What can I get you?", "What would you like?"], ["Still working on that?", "Are you still eating?"], ["Can I take these out of your way?", "Can I take the empty plates?"], ["Service isn't included.", "You can add a tip if you want."], ["Shall we just split it?", "Shall we each pay the same amount?"]],
    reply: { q: "The server asks: “How is everything?” Your food is good. What do you say?", a: "Lovely, thank you!", o: ["Everything is everything.", "I will tell you later.", "Please go away."], why: "A short, positive answer is expected. It's a check-in, not a review." },
    listen: [
      ["Still working on that?", "What does the server mean?", "Are you still eating?", ["Are you at work?", "Is it broken?", "Do you need a job?"]],
      ["Any sides with that?", "What is she offering?", "Extra dishes like chips or salad.", ["A seat at the side.", "A different table.", "More sauce."]],
      ["Are you paying together or separately?", "What does she want to know?", "One bill or individual bills?", ["Cash or card?", "Are you sitting together?", "Do you want a receipt?"]]
    ],
    skills: ["Order with “Could I get…”", "Ask for the menu and the bill", "Understand service charge and tipping", "Answer “How is everything?”"] },

  /* ======================= PART 2 ======================= */
  { id: "off-anywhere", part: 2, lvl: "B1", icon: "🛗", title: "Where are you going?", place: "In the lift at work · Friday morning",
    bg: "office", props: "🛗 ☕",
    who: [["Linh", "👩🏻", "f", 1.1], ["Becky", "👱🏻‍♀️", "f", 1.02]],
    story: "It's Linh's first Friday at her new job. She steps into the lift with Becky from accounts…",
    lines: [
      [1, "Morning! You off anywhere nice this weekend?", "Do you have plans for the weekend? (Polite interest — not nosy.)", "A short answer + ask back.", "casual"],
      [0, "I might go to London to see a friend. What about you?", "She answers AND asks back — the golden rule.", "", "polite"],
      [1, "Ooh, lovely. Nothing much — bit of a lazy one for me. Netflix and a takeaway.", "A relaxing weekend at home.", "", "casual"],
      [1, "Where are you headed now — the canteen?", "Where are you going now?", "", "casual"],
      [0, "Yeah, I'm starving. Are you coming?", "“Starving” = very hungry (not really starving!).", "", "casual"],
      [1, "Go on, then. I'm gasping for a brew.", "OK, yes. I really want a cup of tea. (“Brew” = tea.)", "", "local"]
    ],
    why: [
      "A direct “Where are you going?” can sound like you're checking up on someone. Locals soften it: <b>“Off anywhere nice?”, “Where you off to?”, “Where are you headed?”</b>",
      "A conversation is like tennis: hit the ball back. Always add “<b>What about you?</b>” or “<b>You?</b>”",
      "“Go on, then” is a happy, slightly lazy yes — very English."
    ],
    alt: [["Got any plans for the weekend?", "What will you do this weekend?"], ["Doing anything nice?", "Any fun plans?"], ["Where you off to?", "Where are you going?"], ["Heading home?", "Are you going home?"]],
    reply: { q: "A colleague says: “Off anywhere nice this weekend?” Best answer?", a: "Just seeing friends. How about you?", o: ["That is my business.", "Yes.", "Nowhere is nice."], why: "Short, friendly, and you ask back." },
    listen: [
      ["Bit of a lazy one for me.", "What will Becky do?", "Relax at home.", ["Work late.", "Sleep at work.", "Go running."]],
      ["I'm gasping for a brew.", "What does she want?", "A cup of tea.", ["Some fresh air.", "A beer.", "A break from talking."]],
      ["Go on, then.", "What does it mean here?", "OK — yes.", ["Go away.", "Continue talking.", "You go first."]]
    ],
    skills: ["Ask about plans the soft British way", "Always ask back", "Understand brew, starving, go on then"] },

  { id: "making-friends", part: 2, lvl: "B1", icon: "☕", title: "Making friends", place: "The office kitchen · Tuesday afternoon",
    bg: "office", props: "☕ 🫖 🍪",
    who: [["Linh", "👩🏻", "f", 1.1], ["Jordan", "👨🏿", "m", 1.0]],
    story: "Two weeks in, Linh knows names but has no real friends yet. Then Jordan from her team walks past with a tray of mugs…",
    lines: [
      [1, "I'm doing a brew round — want one?", "I'm making tea for everyone. Do you want one? (The tea round is a big office ritual!)", "Yes/no + how you take it.", "local"],
      [0, "Ooh, yes, please. Milk, no sugar.", "Say how you like it — they will ask anyway.", "", "polite"],
      [1, "Coming right up. So how are you finding it so far?", "How do you like it here?", "A positive answer.", "casual"],
      [0, "Really good, thanks. Everyone's been so welcoming.", "", "", "polite"],
      [1, "Ah, we're alright, us lot. Here — a few of us do a pub quiz on Thursdays. You should come along.", "“Us lot” = our group. This IS a real invitation — it has a day.", "Yes/no — and maybe a question.", "casual"],
      [0, "I'd love to, but my English might not be good enough!", "", "", "polite"],
      [1, "Don't be daft, your English is better than mine! Honestly, we never win anyway.", "Don't be silly. (He jokes about his team to make her feel comfortable.)", "Laugh, then say yes or no.", "banter"],
      [0, "Ha! Go on, then — count me in.", "OK, include me!", "", "casual"],
      [1, "Nice one. I'll add you to the group chat.", "Great.", "", "casual"]
    ],
    why: [
      "Friendships at work often start with small rituals: the <b>tea round</b>, lunch, and Thursday-night pub quizzes. When it's your turn, offer to make the tea!",
      "Brits joke about <b>themselves</b> (“we never win anyway”) to make others relax. It's called self-deprecating humour.",
      "“<b>You should come along</b> on Thursday” is a real invitation. “We should get coffee <b>sometime</b>” with no day is often just politeness — you can turn it into a plan: “I'd love that — what about Friday?”"
    ],
    alt: [["Fancy a cuppa?", "Do you want a cup of tea?"], ["We're going for lunch if you want to tag along.", "You can join us."], ["You're more than welcome.", "We'd be happy if you came."], ["What are you up to at the weekend?", "What are your weekend plans?"]],
    reply: { q: "Jordan says: “You should come along on Thursday!” You want to go. Best answer?", a: "I'd love to — what time does it start?", o: ["Should I?", "Maybe in the future, sometime, perhaps.", "Why?"], why: "It accepts warmly and turns the invitation into a real plan." },
    listen: [
      ["How are you finding it so far?", "What is Jordan asking?", "Do you like it here?", ["Did you find the office?", "Have you lost something?", "How far is your home?"]],
      ["Don't be daft.", "What does it mean?", "Don't be silly.", ["Don't be deaf.", "Don't be late.", "Don't be sad."]],
      ["Count me in.", "What does Linh mean?", "Include me — I'll come.", ["Count the people.", "I'm not sure.", "Let me pay."]]
    ],
    skills: ["Join the tea round", "Accept invitations and turn them into plans", "Spot self-deprecating humour", "Tell real invites from polite ones"] },

  { id: "socials", part: 2, lvl: "B1", icon: "📱", title: "Swapping Instagram and numbers", place: "Outside the pub after the quiz · Thursday, 10 pm",
    bg: "evening", props: "📱 🏆",
    who: [["Linh", "👩🏻", "f", 1.1], ["Chloe", "👩🏼‍🦰", "f", 1.05]],
    story: "The team came third in the quiz — their best result ever! Linh got two answers right. Outside, Chloe from the team pulls out her phone…",
    lines: [
      [1, "That was such a laugh! Are you on Insta?", "That was really fun! Do you use Instagram? (Swapping social media is a light, easy first step.)", "Yes + your name on it — or another app.", "casual"],
      [0, "Yeah — I'm linh.in.brum.", "", "", "casual"],
      [1, "Right, following you now… done! Follow me back.", "", "", "casual"],
      [1, "Actually, chuck us your number as well, so I can add you to the quiz group.", "Give me your phone number. (“Chuck” = throw/give. “Us” here means ME — very common in casual speech.)", "Your number — or “Can we just use Insta?”", "local"],
      [0, "Sure — pass me your phone and I'll put it in.", "", "", "casual"],
      [1, "Ta. I'll drop you a message so you've got mine.", "Thanks. I'll send you a message, then you'll have my number too.", "", "casual"],
      [0, "Perfect. Text me when you're home safe!", "Friends often say this after a night out — it's caring.", "", "safety"],
      [1, "Will do. Same time next week, yeah?", "I will. Shall we do this again next week?", "", "casual"]
    ],
    why: [
      "In casual English, <b>us = me</b>: “Give us a hand” = help me. “Chuck us your number” = give me your number.",
      "Swapping Instagram feels lighter than swapping numbers. It's fine to say: “I don't really use Insta — WhatsApp?”",
      "<b>Young learners:</b> only share your accounts and number with people you know in real life. If you're under 16, check with a parent first."
    ],
    alt: [["What's your handle?", "What's your username?"], ["Add me on WhatsApp.", "Let's message on WhatsApp."], ["I'll drop you a DM.", "I'll send you a private message."], ["Are you in the group chat?", "Are you in our group on the app?"]],
    reply: { q: "“Chuck us your number.” What does Chloe want?", a: "Your phone number.", o: ["Your number in the quiz.", "To throw your phone.", "Your house number."], why: "“Chuck us” = give me. “Number” = phone number." },
    listen: [
      ["That was such a laugh!", "How did Chloe feel about the night?", "It was really fun.", ["It was a joke.", "People laughed at her.", "It was too loud."]],
      ["I'll drop you a message.", "What will Chloe do?", "Send Linh a message.", ["Drop her phone.", "Stop messaging.", "Call her later."]],
      ["Will do.", "What does it mean?", "Yes, I will.", ["What will you do?", "Maybe.", "I won't."]]
    ],
    skills: ["Swap socials and numbers naturally", "Understand “us” = me", "Share contacts safely"] },

  { id: "endearments", part: 2, lvl: "B1", icon: "💬", title: "Love, duck, bab & mate", place: "A café in Nottingham · a day trip",
    bg: "cafe", props: "☕ 🥐",
    who: [["Linh", "👩🏻", "f", 1.1], ["Mags", "👩🏻‍🦳", "f", 0.9], ["Dave", "👷🏼‍♂️", "m", 0.88]],
    story: "On a day trip to Nottingham, Linh stops at a little café. In five minutes she gets called three different things — and none of them is her name…",
    lines: [
      [1, "Ey up, me duck! What can I get ya?", "Hello, dear! What would you like? (“Duck” is a friendly East Midlands word. Nothing to do with birds!)", "Just your order.", "local"],
      [0, "Hi! A cup of tea, please.", "", "", "polite"],
      [1, "There you go, sweetheart. Anything else, love?", "Three friendly names in one minute — completely normal.", "", "local"],
      [2, "Cheers, darling! See you tomorrow.", "Dave the builder thanks Mags the same way — everyone does it.", "", "casual"],
      [1, "Ta-ra, gorgeous! Mind how you go.", "Goodbye! Be careful / take care.", "", "local"],
      [0, "Sorry — can I ask? Why does everyone call me “duck”?", "", "", "polite"],
      [1, "Ha! It's just what we say round here, me duck. Means “dear”. Up in Newcastle they'll call you “pet”!", "She explains it herself — locals love talking about their words.", "", "local"]
    ],
    why: [
      "Words like <b>love, darling, sweetheart, gorgeous, duck, bab, pet, mate</b> are used by shop workers, bus drivers and grandmas for <b>anyone</b>. They mean “dear” — not flirting.",
      "Where you'll hear them: <b>love</b> — everywhere, especially the North · <b>duck</b> — East Midlands · <b>bab</b> — Birmingham · <b>pet</b> — the North-East · <b>mate</b> — everywhere · <b>darling/sweetheart</b> — London and older people.",
      "You don't have to use them back. A simple “Thanks!” is perfect. <b>Context decides:</b> a café worker saying “gorgeous” is friendly; a stranger staring and saying it in the street is not."
    ],
    alt: [["Thanks, pet.", "Thanks, dear (North-East)."], ["Alright, mate?", "Hi, friend (very common, especially men)."], ["You alright, bab?", "Are you OK, dear? (Birmingham)"], ["Cheers, love.", "Thanks, dear (everywhere)."], ["Mind how you go.", "Take care / be safe."]],
    reply: { q: "A café worker says: “Ey up, me duck!” What should you say?", a: "Hiya! A tea, please.", o: ["I'm not a duck!", "Quack quack!", "Please don't flirt with me."], why: "It's simply a friendly hello. Reply normally." },
    listen: [
      ["Ey up, me duck!", "What does Mags mean?", "Hello, dear!", ["Look up, there's a duck!", "Get up!", "Duck down!"]],
      ["Mind how you go.", "What does it mean?", "Take care.", ["Watch your mind.", "Go away.", "Which way are you going?"]],
      ["Cheers, darling!", "Is Dave flirting?", "No — it's a friendly thank you.", ["Yes, he is in love.", "He is angry.", "He wants a drink."]]
    ],
    skills: ["Decode friendly names by region", "Tell friendly from flirting by context", "Feel relaxed, not confused"] },

  { id: "queue", part: 2, lvl: "B1", icon: "🧍", title: "Queues and the many meanings of “sorry”", place: "A busy corner shop · Sunday morning",
    bg: "shop", props: "🛒 🥛 📰",
    who: [["Linh", "👩🏻", "f", 1.1], ["Pat", "👵🏻", "f", 0.92], ["Phil", "👨🏼‍🦲", "m", 0.95]],
    story: "Linh is waiting in a long queue for milk. Suddenly, a man walks straight to the front — and the whole shop goes quiet…",
    lines: [
      [1, "Sorry, love — I think there's a queue.", "This “sorry” is really a complaint: you are pushing in! (The most English sentence ever.)", "An apology, and go to the back.", "under"],
      [2, "Oh, sorry! I didn't see you there.", "A real apology.", "", "polite"],
      [1, "You're alright.", "It's fine — no problem.", "", "casual"],
      [0, "Oh — sorry!", "Linh bumps Phil's basket. She says sorry…", "", "polite"],
      [2, "No, sorry, my fault!", "…and so does he! Both people say sorry — even when nobody did anything wrong.", "", "polite"],
      [0, "Sorry?", "With the voice going UP, “Sorry?” means: I didn't hear you, can you repeat?", "", "polite"],
      [2, "I said, my fault — busy in here, isn't it?", "", "", "casual"],
      [1, "Who's next?", "", "", "casual"]
    ],
    why: [
      "<b>Queueing</b> is serious in England. Pushing in is one of the worst social mistakes you can make — even worse than being late!",
      "“Sorry” has at least four meanings: <b>a real apology</b> · <b>excuse me</b> · <b>pardon? (voice goes up)</b> · <b>a polite complaint</b> (“Sorry, I think there's a queue”).",
      "“<b>You're alright</b>” means “It's fine” or “No, thank you” — not “You are OK”."
    ],
    alt: [["Excuse me, are you in the queue?", "Are you waiting in line?"], ["After you.", "You go first."], ["Is this the end of the queue?", "Where is the back of the line?"], ["Sorry, I was here first.", "Polite way to stop someone pushing in."]],
    reply: { q: "Someone pushes in front of you in a queue. What's the most British reply?", a: "Sorry, I think there's a queue.", o: ["Hey! Get back!", "Say nothing and look angry.", "I hate you."], why: "Polite words, clear message. (Saying nothing and looking angry is also very British — but it doesn't work!)" },
    listen: [
      ["Sorry, love — I think there's a queue.", "What does Pat really mean?", "You are pushing in — go to the back.", ["She is apologising.", "She loves queues.", "She didn't hear."]],
      ["You're alright.", "What does it mean here?", "It's fine, no problem.", ["You look healthy.", "You're right.", "You can go now."]],
      ["Sorry?", "Said with a rising voice, what does Linh mean?", "Pardon? Can you repeat?", ["I am very sorry.", "Go away.", "You're welcome."]]
    ],
    skills: ["Understand the four “sorry”s", "Handle queue-jumpers politely", "Use “You're alright” correctly"] },

  /* ======================= PART 3 (16+) ======================= */
  { id: "nightclub", part: 3, lvl: "B1–B2", icon: "🎶", title: "Getting into a nightclub", place: "A club queue in the city centre · Saturday, 11 pm",
    bg: "night", props: "🎶 🪩",
    who: [["Linh", "👩🏻", "f", 1.1], ["Chloe", "👩🏼‍🦰", "f", 1.05], ["Mike", "💂🏿‍♂️", "m", 0.82]],
    story: "It's Chloe's birthday. The group has eaten, and now they're queueing for a club. At the door stands Mike, the bouncer (door security). Clubs in the UK are for over-18s only…",
    lines: [
      [2, "Evening, ladies. How many of you?", "How many people are in your group?", "A number.", "polite"],
      [1, "Just the two of us.", "", "", "casual"],
      [2, "Have you got ID on you?", "Do you have proof of your age? (You must be 18+.)", "Show your ID.", "polite"],
      [0, "Is a photo on my phone OK?", "", "", "polite"],
      [2, "Sorry, love, it's got to be the real thing. Passport or driving licence.", "Phone photos are not accepted. Bring the real document.", "", "safety"],
      [0, "No worries — I've got my passport here.", "", "", "casual"],
      [2, "Lovely, cheers. It's a tenner on the door, and no drinks from outside.", "Entry costs £10. You can't bring your own drinks.", "", "casual"],
      [1, "Can we pay by card?", "", "", "polite"],
      [2, "Yeah, just inside. Have a good night, girls — stay safe.", "", "", "safety"]
    ],
    why: [
      "The bouncer decides who comes in. If you hear “<b>Not tonight, mate</b>”, the answer is no — don't argue, just leave politely.",
      "Most clubs want <b>physical ID</b>: passport, driving licence or a PASS proof-of-age card. Some scan it.",
      "Before you go: charge your phone, know how you'll get home, and stay with your friends. Bouncers are there to <b>help</b> you too — go to them if you feel unsafe."
    ],
    alt: [["Not tonight, mate.", "You can't come in. (Final answer!)"], ["Sorry, we're at capacity.", "The club is full."], ["No trainers, I'm afraid.", "Sports shoes aren't allowed (dress code)."], ["Can I have a quick look in your bag?", "Bag search — this is normal."], ["Are you lot together?", "Are you one group?"]],
    reply: { q: "The bouncer says: “Not tonight, mate.” What should you do?", a: "Say “OK, no problem” and leave.", o: ["Argue loudly.", "Try again in five minutes.", "Offer him money."], why: "“Not tonight” is final. Arguing can get you into trouble." },
    listen: [
      ["It's a tenner on the door.", "How much is entry?", "£10", ["£10 for a drink.", "Free before ten.", "£1 for the door."]],
      ["Have you got ID on you?", "What does the bouncer want?", "Proof of your age.", ["Your phone number.", "Your ticket.", "Your name."]],
      ["Not tonight, mate.", "What does it mean?", "You can't come in.", ["Come back tomorrow, it's better.", "It's not your birthday.", "Have a good night."]]
    ],
    skills: ["Handle the door: numbers, ID, entry fee", "Understand a refusal and stay calm", "Plan a safe night out"] },

  { id: "drunk", part: 3, lvl: "B2", icon: "🍟", title: "When someone's had too much to drink", place: "Outside a chip shop · Saturday, 1 am",
    bg: "night", props: "🍟 🚕 🌙",
    who: [["Linh", "👩🏻", "f", 1.1], ["Chloe", "👩🏼‍🦰", "f", 1.05], ["Kev", "🧔🏼", "m", 0.85]],
    story: "Linh and Chloe are waiting for their taxi. A man walks over. He isn't dangerous — but he has clearly had too much to drink. Notice how his English changes…",
    lines: [
      [2, "'Scuse me… 'scuse me… where's… where's the chippy?", "CLEAR VERSION: Excuse me, where's the chip shop? (Drunk speech: words are cut short, repeated, slow and loud.)", "Short directions.", "drunk"],
      [0, "It's just there, on the corner.", "", "", "polite"],
      [2, "You're a legend, you are. A legend! Love your… your accent, I do.", "CLEAR VERSION: Thank you so much! I like your accent. (Drunk people often give big, repeated compliments.)", "A short thanks — then end the chat.", "drunk"],
      [1, "Cheers, mate. Have a good night!", "A friendly way to end the conversation.", "", "polite"],
      [2, "No, wait, wait — where you from? Come and have a chip with us!", "CLEAR VERSION: Where are you from? Come and eat with us. (He asks again and again.)", "", "drunk"],
      [1, "We're alright, thanks. Our taxi's here.", "“We're alright” = no, thank you. Firm, friendly — then go.", "", "safety"],
      [2, "Fair play, fair play. Get home safe, ladies!", "CLEAR VERSION: OK, I respect that. Get home safely.", "", "drunk"]
    ],
    why: [
      "Drunk speech is hard: words are <b>cut or joined</b> (’scuse, gerroff), <b>repeated</b>, very <b>loud</b>, and the topic jumps. Don't try to catch every word — listen for <b>key words</b> (chippy, where, taxi).",
      "Don't argue, don't debate, don't laugh at them. <b>Short, friendly, then leave.</b> “We're alright, thanks” is the perfect polite no.",
      "If anyone makes you uncomfortable in a bar, ask the staff: “<b>Is Angela here?</b>” — the UK “Ask for Angela” scheme means staff will help you quietly. In danger, call <b>999</b>."
    ],
    alt: [["I love you, mate, I do!", "Very friendly drunk speech — smile and move on."], ["Gerroff!", "Get off! (Leave me alone.)"], ["Who are you looking at?", "Aggressive — don't answer, walk towards other people or staff."], ["I'm not drunk, I'm just… happy!", "He is drunk."], ["Is Angela here?", "Safety code: staff will help you secretly."]],
    reply: { q: "A drunk stranger says: “Come and have a drink with us!” You don't want to. Best reply?", a: "We're alright, thanks — have a good night!", o: ["Maybe… I don't know… OK.", "Why are you so drunk?", "Say nothing and stand still."], why: "Clear, friendly, final — and then you walk away." },
    listen: [
      ["Where's the chippy?", "What is he looking for?", "The chip shop.", ["His friend Chip.", "A cheap shop.", "The taxi."]],
      ["We're alright, thanks.", "What does Chloe mean?", "No, thank you.", ["We are healthy.", "Yes, please.", "We're right."]],
      ["Get home safe!", "What is Kev saying?", "Goodbye — be safe.", ["Get in my taxi.", "Your home isn't safe.", "Wait for me."]]
    ],
    skills: ["Decode unclear, drunk speech", "Leave a conversation politely and firmly", "Know “Ask for Angela” and 999"] },

  { id: "number", part: 3, lvl: "B1–B2", icon: "💌", title: "Can I get your number?", place: "Chloe's birthday drinks · a busy bar",
    bg: "pub", props: "🎂 🎈",
    who: [["Linh", "👩🏻", "f", 1.1], ["Josh", "👨🏻", "m", 1.0]],
    story: "At Chloe's birthday drinks, a friendly guy starts chatting to Linh. They talk for twenty minutes. Then he asks the big question…",
    lines: [
      [1, "Hiya — sorry, I don't think we've met. I'm Josh, Chloe's mate from uni.", "A friendly, normal introduction.", "Your name + how you know Chloe.", "polite"],
      [0, "Oh, hi! I'm Linh. I work with Chloe.", "", "", "polite"],
      [1, "So, are you having a good night?", "", "", "casual"],
      [0, "Yeah, it's great. The music's a bit loud, though!", "", "", "under"],
      [1, "Tell me about it. I can barely hear myself think.", "I completely agree! (Not: “please tell me”.)", "", "casual"],
      [1, "Listen — I've really enjoyed chatting. Would it be alright if I got your number? Maybe we could grab a coffee sometime.", "He likes her and is asking for a casual date. Very polite — he gives her space to say no.", "Yes or no — both are OK.", "polite"],
      [0, "Yeah, go on, then — I'd like that.", "A happy yes.", "", "casual"],
      [1, "Brilliant. I'll text you, so you've got mine.", "", "", "casual"]
    ],
    why: [
      "In England, asking for a number usually comes <b>after a good chat</b>, and the first date is small: “grab a coffee”, “go for a drink”, “go for a walk”.",
      "<b>Saying no is normal.</b> “That's really kind, but I'm not looking for anything right now” or “I'm seeing someone” is polite and clear. A respectful person says “No worries at all” and moves on.",
      "A stranger shouting “<b>Hello, gorgeous!</b>” in the street is not a compliment — you don't have to answer. If someone keeps asking after you said no, go to your friends or the staff."
    ],
    alt: [["Can I grab your number?", "Can I have your number?"], ["Are you on Insta?", "A lighter way to stay in touch."], ["Fancy going for a drink sometime?", "Would you like to go on a date?"], ["That's really kind, but I'm seeing someone.", "Polite no."], ["No worries at all — enjoy your night.", "A respectful reply to a no."]],
    reply: { q: "Josh asks: “Would it be alright if I got your number?” You want to say NO politely. Best reply?", a: "That's really kind, but I'm not looking for anything right now.", o: ["No. Go away.", "Maybe… ask me again later.", "Run to the toilet."], why: "It's kind and very clear. “Maybe, ask me later” sounds like a yes." },
    listen: [
      ["Tell me about it.", "What does Josh mean?", "I completely agree.", ["Please explain.", "Tell me a story.", "I don't understand."]],
      ["Maybe we could grab a coffee sometime.", "What is he suggesting?", "A casual date.", ["A business meeting.", "He wants to steal her coffee.", "Coffee right now."]],
      ["No worries at all.", "If Linh said no, what would this reply mean?", "That's completely fine.", ["I'm very worried.", "Ask me again.", "I don't believe you."]]
    ],
    skills: ["Understand polite interest", "Say yes — or no — clearly and kindly", "Know what respect sounds like"] },

  { id: "date", part: 3, lvl: "B2", icon: "☕", title: "Going on a date", place: "A coffee shop, then a walk in the park · Sunday afternoon",
    bg: "cafe", props: "☕ 🌳 🍂",
    who: [["Linh", "👩🏻", "f", 1.1], ["Josh", "👨🏻", "m", 1.0]],
    story: "A week later, Linh meets Josh for coffee in a busy café in town. She told Chloe where she'd be — a smart first-date habit…",
    lines: [
      [1, "Hiya! You found it alright, then?", "Was it easy to find this place?", "A short answer.", "casual"],
      [0, "Yeah, no problem. Sorry I'm a couple of minutes late!", "", "", "polite"],
      [1, "Don't worry about it — I've only just got here myself.", "It's fine. (Often a kind little white lie!)", "", "polite"],
      [1, "What are you having? My treat.", "What would you like? I'll pay.", "Your order — or offer to share the cost.", "polite"],
      [0, "Oh, you don't have to! Shall we go halves?", "Shall we split the cost 50/50?", "", "polite"],
      [1, "Honestly, it's fine. You can get the next one.", "You can pay next time. (This hints: he wants a second date!)", "", "casual"],
      [0, "Deal! A flat white, please.", "", "", "casual"],
      [1, "So what do you miss most about home?", "", "", "polite"],
      [0, "Honestly? The food. And the sunshine!", "", "", "casual"],
      [1, "Can't blame you there. Our summer lasts about three days.", "I understand! (A classic joke about British weather.)", "Laugh.", "banter"],
      [1, "I've had a really nice time. Would you fancy doing this again?", "Do you want another date?", "Yes or no — kindly.", "polite"],
      [0, "Yeah, I'd like that. Text me when you're home?", "", "", "safety"],
      [1, "Will do. Let me know you got back OK, too.", "Caring and normal after a date.", "", "safety"]
    ],
    why: [
      "First dates in England are usually <b>casual and public</b>: coffee, a drink, a walk. Tell a friend where you'll be and get yourself home.",
      "Paying: some people <b>go halves</b> (split 50/50), some take turns (“You can get the next one”). Offering to pay your part is always polite.",
      "Not interested after the date? A kind, honest text is best: “I had a nice time, but I don't think we're a match. Good luck!”"
    ],
    alt: [["Shall we split it?", "Shall we each pay half?"], ["I'll get these.", "I'll pay."], ["Same time next week?", "Shall we meet again next week?"], ["I don't think we're a match, but it was lovely to meet you.", "A kind no after a date."], ["Did you get home OK?", "Are you home safely?"]],
    reply: { q: "Josh says: “My treat.” What does he mean?", a: "I'll pay.", o: ["Give me a sweet.", "This is my favourite.", "You must pay."], why: "“My treat” = I'll pay for you." },
    listen: [
      ["Shall we go halves?", "What is Linh suggesting?", "Split the cost 50/50.", ["Share one coffee.", "Leave halfway.", "Go home now."]],
      ["You can get the next one.", "What does Josh hint?", "He'd like to meet again.", ["He wants another coffee now.", "She must pay today.", "He's leaving."]],
      ["Can't blame you there.", "What does it mean?", "I understand why you feel that.", ["It's your fault.", "I can't hear you.", "Don't blame me."]]
    ],
    skills: ["Handle a first date politely", "Talk about paying: my treat, go halves", "End kindly — yes or no", "Use safe-date habits"] }
  ],

  /* Style Detective — the final test */
  styles: {
    polite: ["🎩", "Very polite"], casual: ["👟", "Casual"], local: ["📍", "Local words"], banter: ["😄", "Joking / banter"], under: ["🙃", "Sarcasm / understatement"], drunk: ["🍺", "Drunk speech"]
  },
  detective: [
    ["Would you mind awfully if I opened the window?", "polite", "“Would you mind awfully” is extra-polite."],
    ["Alright, bab? Ta-ra!", "local", "Bab and ta-ra are Birmingham words."],
    ["Where's… where's the… the taxi? Where's the taxi?", "drunk", "Repeated, broken words."],
    ["Oh, brilliant. It's raining again.", "under", "Said flatly, “brilliant” means the opposite."],
    ["Chuck us your number.", "casual", "Chuck us = give me — casual."],
    ["You support Villa? I'm so sorry for you, mate!", "banter", "Friendly teasing about football."],
    ["Ey up, me duck.", "local", "East Midlands hello."],
    ["It's not the best idea I've ever heard.", "under", "Understatement — it means: bad idea."],
    ["You're a legend, you are… a legend, I mean it…", "drunk", "Over-the-top, repeated compliment."],
    ["Could I possibly get the bill, please?", "polite", "“Could I possibly” = very polite."],
    ["We never win anyway — we're rubbish!", "banter", "Joking about your own team."],
    ["Hiya, you alright?", "casual", "Everyday casual greeting."]
  ],

  /* Placement check — which part to start with */
  place: [
    ["Hello! How are you?", "What is the best answer?", "Fine, thanks. And you?", ["Yes, I am.", "I am 23.", "Hello."], 1],
    ["What time is it? — It's half past seven.", "What time is it?", "7:30", ["7:15", "6:30", "7:45"], 1],
    ["Could I get the bill, please?", "Where are you?", "In a restaurant.", ["At the bus stop.", "In a clothes shop.", "At school."], 1],
    ["I'm afraid we're fully booked.", "What does it mean?", "Sorry, there are no free tables.", ["I'm scared of books.", "The books are full.", "We have lots of space."], 2],
    ["Fancy a cuppa?", "What is the question?", "Do you want a cup of tea?", ["Do you like cups?", "Are you fancy?", "Do you want a cupcake?"], 2],
    ["It's not the best film I've ever seen.", "What does the speaker really think?", "The film was bad.", ["It was the best film.", "They didn't see it.", "They loved it."], 3]
  ]
};
