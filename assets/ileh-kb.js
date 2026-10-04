/* I Learn English Here — Knowledge Bank (loaded on demand by the Help buttons, Study Coach and lessons).
   Each topic: formula, explanations for 3 age groups, memory trick, a bit of history, examples, practice items.
   Item fields: q (use ___ for the gap), a (answer), o (wrong options), alt (other accepted typed answers), why.
   {N} {N2} = random person, {C} = their city, {K} = their country — so practice never looks the same twice.
   © I Learn English Here · an Online Business Awareness project */
window.ILEH_KB = {
people: [
  ["Amara","Lagos","Nigeria"],["Kenji","Osaka","Japan"],["Priya","Mumbai","India"],["Lucas","São Paulo","Brazil"],
  ["Fatima","Marrakesh","Morocco"],["Oliver","Manchester","England"],["Mei","Chengdu","China"],["Diego","Guadalajara","Mexico"],
  ["Zanele","Durban","South Africa"],["Chloe","Toronto","Canada"],["Dara","Siem Reap","Cambodia"],["Ahmed","Cairo","Egypt"],
  ["Ana","Valencia","Spain"],["Kwame","Accra","Ghana"],["Linh","Hanoi","Vietnam"],["Tom","Perth","Australia"],
  ["Ingrid","Bergen","Norway"],["Aisha","Nairobi","Kenya"],["Rafael","Lisbon","Portugal"],["Hana","Seoul","South Korea"],
  ["Mateo","Bogotá","Colombia"],["Sione","Auckland","New Zealand"],["Yusuf","Istanbul","Turkey"],["Grace","Cardiff","Wales"],
  ["Arjun","Kathmandu","Nepal"],["Leila","Amman","Jordan"],["Siti","Kuala Lumpur","Malaysia"],["Jack","Glasgow","Scotland"]
],
topics: {

"present-simple": {
  title:"Present Simple", level:"Foundation", icon:"🔁",
  hook:"Habits, routines and facts — the English you use every single day.",
  formula:["I / you / we / they + verb → I <b>work</b>","he / she / it + verb<b>+s</b> → She <b>works</b>","Questions: <b>Do / Does</b> + subject + verb? → <b>Does</b> he <b>work</b>?","Negative: <b>don't / doesn't</b> + verb → He <b>doesn't work</b>"],
  explain:{
    kid:"Use it for things that happen again and again — like brushing your teeth every morning! When you talk about ONE other person (he, she, it), the verb gets a little tail: an <b>s</b>. 'My cat <b>sleeps</b> all day.'",
    teen:"Present simple = routines, habits and facts that are always true. The one trap: he / she / it needs <b>-s</b> on the verb (She plays, he watches). With does/doesn't, the -s moves to 'does', so the verb goes back to normal: 'Does she <b>play</b>?' not 'Does she plays?'",
    adult:"Used for habitual actions, permanent states and general truths. Third person singular takes <b>-s/-es</b>. In questions and negatives the auxiliary <b>do/does</b> carries the tense and person, so the main verb stays in the base form."
  },
  trick:"<b>He, she, it — add an S, don't forget it!</b> And when <b>does</b> appears, the S jumps onto 'does' and leaves the verb.",
  history:"Around 600 years ago, people in the south of England said <i>he loveth</i>, while people in the north said <i>he loves</i>. The northern '-s' slowly won. Shakespeare used both — that is why old Bibles and plays still say <i>'he goeth'</i>.",
  examples:["{N} <b>lives</b> in {C}.","We <b>don't eat</b> meat on Mondays.","Water <b>boils</b> at 100°C.","<b>Does</b> your brother <b>like</b> football?"],
  items:[
    {q:"{N} ___ (live) in {C}.",a:"lives",o:["live","living","is live"],why:"One person (he/she) → verb + s."},
    {q:"My parents ___ (work) in a hospital.",a:"work",o:["works","working","is work"],why:"'They' (my parents) → no -s."},
    {q:"___ {N} speak French?",a:"Does",o:["Do","Is","Are"],why:"He/she questions use DOES."},
    {q:"She doesn't ___ coffee.",a:"drink",o:["drinks","drinking","drank"],why:"After doesn't, the verb goes back to its base form — the -s is already on 'does'."},
    {q:"The sun ___ (rise) in the east.",a:"rises",o:["rise","is rise","rising"],why:"A fact that is always true + 'the sun' = it → rises."},
    {q:"{N} ___ (watch) TV every evening.",a:"watches",o:["watch","watchs","watching"],why:"Verbs ending in -ch, -sh, -s, -x, -o add -ES: watches, washes, goes."},
    {q:"I ___ (not / like) spiders.",a:"don't like",alt:["do not like"],o:["doesn't like","not like","am not like"],why:"I + don't + base verb."},
    {q:"How often ___ you go to the gym?",a:"do",o:["does","are","is"],why:"'You' questions use DO."}
  ]
},

"present-continuous": {
  title:"Present Continuous", level:"Foundation", icon:"🎬",
  hook:"Describe what is happening right now — like a live video.",
  formula:["am / is / are + verb<b>-ing</b>","I <b>am</b> read<b>ing</b> · She <b>is</b> cook<b>ing</b> · They <b>are</b> play<b>ing</b>","Question: <b>Are</b> you listen<b>ing</b>?","Also for temporary things & future plans: I'm meeting Sam tomorrow."],
  explain:{
    kid:"Imagine you have a camera. Whatever the camera sees RIGHT NOW, you say with <b>am/is/are + ing</b>. 'Look! The dog <b>is jumping</b>!'",
    teen:"Use it for actions in progress now, temporary situations ('I'm staying with my aunt this month') and fixed future plans ('We're flying on Friday'). You always need BOTH parts: am/is/are AND -ing.",
    adult:"Expresses actions in progress at the moment of speaking, temporary or changing situations, and arranged future events. Both the auxiliary <b>be</b> and the <b>-ing</b> participle are obligatory."
  },
  trick:"<b>Two pieces, always together:</b> AM/IS/ARE is the battery, -ING is the motor. No battery, no movement!",
  history:"The -ing form became much more common from the 1600s onwards. About 200 years ago people could say <i>'the house is building'</i> to mean it is being built — the form 'is being built' was new then, and some writers thought it was terrible English!",
  examples:["{N} <b>is cooking</b> dinner right now.","Shh! The baby <b>is sleeping</b>.","Prices <b>are going up</b> this year.","<b>Are</b> you <b>coming</b> to the party on Saturday?"],
  items:[
    {q:"Look! It ___ (rain).",a:"is raining",o:["rains","raining","are raining"],why:"'Look!' = happening now → is + -ing."},
    {q:"{N} and {N2} ___ (play) chess at the moment.",a:"are playing",o:["is playing","playing","play"],why:"Two people = they → ARE + -ing."},
    {q:"I ___ (not / watch) TV now — I'm studying.",a:"am not watching",alt:["'m not watching","m not watching"],o:["don't watch","not watching","isn't watching"],why:"I + am not + -ing."},
    {q:"Listen! Someone ___ at the door.",a:"is knocking",o:["knocks","knocking","are knocking"],why:"Happening now, one person → is knocking."},
    {q:"___ you working this weekend?",a:"Are",o:["Do","Is","Does"],why:"Continuous questions start with am/is/are."},
    {q:"She is ___ (swim) in the sea.",a:"swimming",o:["swiming","swim","swims"],why:"Short verb ending consonant-vowel-consonant → double the last letter: swim → swimming."},
    {q:"We ___ (meet) the teacher tomorrow at 9.",a:"are meeting",o:["meet","meeting","is meeting"],why:"A fixed future plan can use present continuous."},
    {q:"He is ___ (make) a cake.",a:"making",o:["makeing","make","makes"],why:"Verb ending in -e → drop the e: make → making."}
  ]
},

"past-simple": {
  title:"Past Simple", level:"Foundation", icon:"⏪",
  hook:"Tell stories and talk about finished actions — yesterday, last week, in 2019.",
  formula:["Regular: verb + <b>-ed</b> → walk<b>ed</b>, play<b>ed</b>","Irregular: learn them → go → <b>went</b>, eat → <b>ate</b>","Question: <b>Did</b> + subject + base verb? → <b>Did</b> you <b>go</b>?","Negative: <b>didn't</b> + base verb → I <b>didn't go</b>"],
  explain:{
    kid:"When something is finished and gone — like yesterday's lunch — we use the past. Most words just add <b>-ed</b>: jump → jump<b>ed</b>. Some words are naughty and change completely: go → <b>went</b>!",
    teen:"Use past simple for finished actions at a finished time (yesterday, last year, when I was 10). Watch out: after <b>did/didn't</b> the verb goes back to normal — 'Did you see it?' not 'Did you saw it?'",
    adult:"Used for completed actions in a finished time frame. Regular verbs take -ed; irregular verbs must be memorised. The auxiliary <b>did</b> carries the past tense in questions and negatives, so the main verb reverts to the base form."
  },
  trick:"<b>DID is a thief:</b> it steals the past from the verb. 'Did you <b>go</b>?' — the past is already inside 'did'. Learn irregulars in sound families: sing-sang, ring-rang, drink-drank.",
  history:"Irregular verbs are the oldest verbs in English. Long ago, many more verbs changed their vowel: the past of <i>help</i> was <i>holp</i>! Over the centuries most became regular, and the change is still happening — today 'dreamed' is replacing 'dreamt'.",
  examples:["{N} <b>visited</b> {K} last summer.","We <b>went</b> to the beach yesterday.","<b>Did</b> you <b>finish</b> your homework?","I <b>didn't see</b> the film."],
  items:[
    {q:"Yesterday {N} ___ (walk) to school.",a:"walked",o:["walk","walks","walking"],why:"Yesterday = finished time → regular verb + -ed."},
    {q:"Last year we ___ (go) to {C}.",a:"went",o:["goed","go","gone"],why:"GO is irregular: go → went."},
    {q:"Did you ___ the football match?",a:"watch",o:["watched","watches","watching"],why:"After DID, the verb goes back to base form."},
    {q:"I ___ (not / eat) breakfast this morning.",a:"didn't eat",alt:["did not eat"],o:["didn't ate","not ate","don't eat"],why:"didn't + base verb."},
    {q:"She ___ (buy) a new phone last week.",a:"bought",o:["buyed","buy","buys"],why:"BUY is irregular: buy → bought."},
    {q:"{N} ___ (study) all night before the exam.",a:"studied",o:["studyed","studies","study"],why:"Consonant + y → change y to i + ed: study → studied."},
    {q:"We ___ (stop) the car at the red light.",a:"stopped",o:["stoped","stop","stops"],why:"Short verb, consonant-vowel-consonant → double: stop → stopped."},
    {q:"Where ___ you go on holiday?",a:"did",o:["do","were","was"],why:"Past question with an action verb → DID."}
  ]
},

"past-continuous": {
  title:"When & While (Past Continuous)", level:"Elementary", icon:"⚡",
  hook:"Tell stories like a pro: the background action and the sudden interruption.",
  formula:["Past continuous: <b>was / were</b> + verb<b>-ing</b>","<b>WHILE</b> + long action: <b>While</b> I <b>was cooking</b>, …","<b>WHEN</b> + short action: … <b>when</b> the phone <b>rang</b>.","I was cooking <b>when</b> the phone rang."],
  explain:{
    kid:"Think of a film. The long, boring part is the background: 'I <b>was walking</b> home…' Then — BANG! — something quick happens: '…<b>when</b> I <b>saw</b> a dragon!'",
    teen:"Past continuous (was/were + -ing) sets the scene — an action in progress. Past simple is the event that interrupts it. WHILE usually goes with the long action, WHEN with the short one.",
    adult:"The past continuous describes an action in progress at a past moment; the past simple describes a completed action that interrupts it. <b>While</b> typically introduces the ongoing action; <b>when</b> introduces the punctual event."
  },
  trick:"<b>WHILE is a Long Line ———, WHEN is a Quick Dot •.</b> Long line = was/were + ing. Quick dot = past simple.",
  history:"'While' comes from an old English word <i>hwīl</i>, meaning 'a period of time'. We still use that meaning: 'wait <b>a while</b>'. British people often say <i>whilst</i> — it means exactly the same.",
  examples:["I <b>was sleeping</b> <b>when</b> the alarm <b>went off</b>.","<b>While</b> {N} <b>was driving</b>, it started to rain.","They <b>were having</b> dinner when we arrived."],
  items:[
    {q:"I ___ (read) when the lights went out.",a:"was reading",o:["read","were reading","am reading"],why:"Long background action → was + -ing."},
    {q:"{N} was cooking ___ the fire alarm rang.",a:"when",o:["while","during","for"],why:"Short sudden event → WHEN + past simple."},
    {q:"___ we were walking, it started to snow.",a:"While",o:["When","During","For"],why:"Long action in progress → WHILE."},
    {q:"They ___ (play) football when it started to rain.",a:"were playing",o:["was playing","played","are playing"],why:"They → WERE + -ing."},
    {q:"She was taking a shower when the phone ___ (ring).",a:"rang",o:["was ringing","rings","ringed"],why:"The interruption is a short action → past simple (ring → rang)."},
    {q:"What ___ you doing at 8 o'clock last night?",a:"were",o:["was","did","are"],why:"You → WERE + -ing."}
  ]
},

"present-perfect": {
  title:"Present Perfect", level:"Elementary", icon:"🌉",
  hook:"Connect the past to NOW — experiences, news and life so far.",
  formula:["<b>have / has</b> + past participle (V3)","I <b>have visited</b> Rome. · She <b>has eaten</b>.","ever / never · already / yet · just · for / since","Finished time (yesterday, in 2010) → use past simple instead!"],
  explain:{
    kid:"It's like a bridge from the past to today. 'I <b>have lost</b> my key' — I lost it before, and I STILL can't find it now! We use <b>have</b> (or <b>has</b> for he/she/it) + the special 3rd form of the verb.",
    teen:"Use it for life experiences (Have you ever…?), recent news (I've just…), and things that started in the past and continue now (for/since). The big rule: no finished-time words — you can't say 'I have seen it yesterday'.",
    adult:"Links a past action or state to the present: experience, recent events with present relevance, and unfinished periods (for/since). It cannot co-occur with finished time adverbials; those require the past simple."
  },
  trick:"<b>HAVE = I'm still holding it.</b> 'I have finished' — the result is in my hands now. FOR = how long (for 3 years). SINCE = the starting point (since 2020).",
  history:"Long ago, 'have' just meant 'own'. People said <i>'I have the letter written'</i> — I own a written letter. Slowly the words swapped places and it became <i>'I have written the letter'</i>. Americans today often use past simple instead: 'Did you eat yet?'",
  examples:["{N} <b>has lived</b> in {C} <b>for</b> five years.","<b>Have</b> you <b>ever been</b> to {K}?","I'<b>ve already finished</b> my homework.","She <b>hasn't called</b> me <b>yet</b>."],
  items:[
    {q:"{N} ___ (live) in {C} since 2019.",a:"has lived",o:["have lived","lived","is living"],why:"Started in the past, still true now + since → present perfect. He/she → HAS."},
    {q:"Have you ever ___ sushi?",a:"eaten",o:["ate","eat","eating"],why:"Have + past participle (V3): eat → ate → EATEN."},
    {q:"I ___ (see) that film yesterday.",a:"saw",o:["have seen","seen","has seen"],why:"'Yesterday' is finished time → past simple, NOT present perfect."},
    {q:"We have known each other ___ ten years.",a:"for",o:["since","from","during"],why:"FOR + a length of time (ten years)."},
    {q:"She has worked here ___ 2021.",a:"since",o:["for","from","in"],why:"SINCE + a starting point (2021)."},
    {q:"Has the bus arrived ___?",a:"yet",o:["already","ever","just"],why:"YET goes at the end of questions and negatives."},
    {q:"They ___ (never / be) to {K}.",a:"have never been",o:["has never been","never went","have never went"],why:"They → have + never + been (V3 of be)."},
    {q:"I've ___ finished — it was only a minute ago!",a:"just",o:["yet","ever","since"],why:"JUST = a very short time ago, between have and V3."}
  ]
},

"stative-verbs": {
  title:"Stative Verbs", level:"Elementary", icon:"🧠",
  hook:"Why we say 'I love it' and not 'I am loving it'.",
  formula:["Stative verbs describe <b>states</b>, not actions → usually <b>no -ing</b>","Mind: know, think (=believe), understand, believe, remember","Feelings: love, like, hate, want, need","Senses & owning: see, hear, taste, smell, have (=own), belong","Some have TWO meanings: I <b>think</b> it's good (opinion) / I'm <b>thinking</b> about it (action)"],
  explain:{
    kid:"Some verbs are like statues — they don't move! Knowing, loving, wanting: these are feelings inside you, not actions. So we don't add -ing: 'I <b>know</b> the answer!' not 'I am knowing'.",
    teen:"Action verbs can be continuous (I'm running). Stative verbs describe a state of mind, feeling, sense or possession, so they normally stay simple: 'I want a pizza', 'This bag belongs to me'. Careful with think/have/taste — they change meaning with -ing.",
    adult:"Stative verbs denote states rather than dynamic events and are generally not used in progressive forms. Several verbs (think, have, see, taste, smell, feel) have both a stative and a dynamic sense; only the dynamic sense allows the -ing form."
  },
  trick:"<b>STATive = STATUE.</b> If it happens in your head, heart, senses or wallet (owning), it usually stands still — no -ing.",
  history:"English learners are not the only ones who find this hard: advertising slogans sometimes break the rule on purpose ('I'm loving it') because it sounds fresh and surprising. Spoken English today uses '-ing' with feelings more than 50 years ago.",
  examples:["I <b>know</b> {N} very well.","This soup <b>tastes</b> amazing. / The chef <b>is tasting</b> the soup.","She <b>has</b> two cats. / She <b>is having</b> lunch.","I <b>think</b> English is fun. / I'm <b>thinking</b> about my holiday."],
  items:[
    {q:"I ___ the answer.",a:"know",o:["am knowing","knowing","knows"],why:"KNOW is a stative (mind) verb → no -ing."},
    {q:"{N} ___ a new bike. (= owns)",a:"has",o:["is having","have","having"],why:"HAVE meaning 'own' is stative → no -ing."},
    {q:"We ___ dinner at the moment.",a:"are having",o:["have","has","having"],why:"HAVE meaning 'eat' is an action → -ing is fine."},
    {q:"This bag ___ to me.",a:"belongs",o:["is belonging","belong","belonging"],why:"BELONG (possession) is stative."},
    {q:"Be quiet, I ___ about the problem.",a:"am thinking",o:["think","thinks","thinking"],why:"THINK = using your brain right now (action) → -ing OK."},
    {q:"I ___ you are right.",a:"think",o:["am thinking","thinking","thinks"],why:"THINK = opinion (believe) → stative, no -ing."},
    {q:"She ___ chocolate.",a:"loves",o:["is loving","love","loving"],why:"LOVE (feeling) is stative."}
  ]
},

"go-do-play": {
  title:"Go, Do & Play (Sports)", level:"Foundation", icon:"⚽",
  hook:"Talk about sports and hobbies like a native speaker.",
  formula:["<b>PLAY</b> + ball games / competitive games → play football, play chess","<b>GO</b> + activities ending in <b>-ing</b> → go swimming, go running","<b>DO</b> + individual activities / martial arts → do yoga, do karate, do gymnastics"],
  explain:{
    kid:"Got a ball or playing against someone? <b>PLAY</b>! Does the word end in -ing? <b>GO</b>! Everything else, like yoga or karate? <b>DO</b>!",
    teen:"Play = games with a ball or an opponent (play tennis, play video games). Go = -ing activities, often outdoors (go hiking, go skiing). Do = activities you do alone or martial arts (do judo, do aerobics).",
    adult:"These are fixed collocations. 'Play' collocates with competitive ball and board games, 'go' with activities expressed by an -ing noun, and 'do' with non-competitive or individual disciplines and martial arts."
  },
  trick:"<b>Ball → PLAY. -ING → GO. Everything else → DO.</b>",
  history:"'Play' comes from an Old English word <i>plegan</i>, which meant 'to move quickly' or 'to exercise'. So 'play football' is close to its 1,000-year-old meaning!",
  examples:["{N} <b>plays</b> basketball on Saturdays.","Let's <b>go</b> cycling this weekend.","My grandmother <b>does</b> yoga every morning."],
  items:[
    {q:"{N} ___ tennis every Sunday.",a:"plays",o:["goes","does","makes"],why:"Ball game → PLAY."},
    {q:"Let's ___ swimming!",a:"go",o:["play","do","make"],why:"Swimming ends in -ing → GO."},
    {q:"She ___ karate twice a week.",a:"does",o:["plays","goes","makes"],why:"Martial arts → DO."},
    {q:"We want to ___ hiking in the mountains.",a:"go",o:["do","play","make"],why:"Hiking ends in -ing → GO."},
    {q:"My brothers ___ video games all day.",a:"play",o:["do","go","make"],why:"Games against someone → PLAY."},
    {q:"I ___ yoga to relax.",a:"do",o:["play","go","make"],why:"Individual activity → DO."}
  ]
},

"future": {
  title:"Future: Going to vs Will", level:"Elementary", icon:"🔮",
  hook:"Plans, predictions, promises — choose the right future every time.",
  formula:["<b>be going to</b> + verb → plans already made & predictions with evidence","I'<b>m going to</b> visit my aunt. · Look at those clouds — it'<b>s going to</b> rain.","<b>will</b> + verb → decisions made now, promises, offers, opinions about the future","I'<b>ll</b> help you! · I think it <b>will</b> be sunny tomorrow."],
  explain:{
    kid:"If you already have a plan in your head, say <b>going to</b>: 'I'm going to play football after school.' If you decide right now, or promise something, say <b>will</b>: 'The phone's ringing — I'll get it!'",
    teen:"Going to = the decision was made before speaking, or you can SEE evidence (dark clouds → it's going to rain). Will = you decide at the moment of speaking, make promises or offers, or give an opinion (I think / probably).",
    adult:"'Be going to' expresses prior intention and evidence-based prediction. 'Will' expresses spontaneous decisions, promises, offers, and predictions based on opinion, often with think, expect, probably."
  },
  trick:"<b>Going to = already in your diary. Will = decided in the moment.</b> Evidence you can see? Going to.",
  history:"English has no special future ending like Spanish or French. 'Will' first meant 'want' — you can still see it in <i>willing</i> and <i>free will</i>. 'Going to' started as real walking: 'I am going (to the market) to buy fish'.",
  examples:["{N} <b>is going to</b> study in {K} next year.","It's cold. I'<b>ll</b> close the window.","I promise I <b>won't</b> be late.","Be careful! You'<b>re going to</b> fall!"],
  items:[
    {q:"I've bought the tickets — we ___ visit {C} in July.",a:"are going to",o:["will","going to","are go to"],why:"A plan made before (tickets bought) → going to."},
    {q:"The phone is ringing. — I ___ answer it!",a:"'ll",alt:["will"],o:["'m going to","am answer","going to"],why:"Decision made right now → will."},
    {q:"Look at those black clouds! It ___ rain.",a:"is going to",o:["will","rains","going"],why:"Evidence you can see → going to."},
    {q:"I promise I ___ tell anyone.",a:"won't",alt:["will not"],o:["am not going to","don't","not"],why:"Promise → will / won't."},
    {q:"I think {N} ___ win the race.",a:"will",o:["is going","goes","going to"],why:"Opinion with 'I think' → will."},
    {q:"What ___ you going to do after school?",a:"are",o:["will","do","is"],why:"You + ARE + going to."}
  ]
},

"quantifiers": {
  title:"Much, Many, A Few, A Little", level:"Elementary", icon:"🔢",
  hook:"Talk about amounts without mistakes — the COUNT TEST.",
  formula:["Countable (you can count): <b>many</b>, <b>a few</b>, <b>few</b> → many apples, a few friends","Uncountable (you can't count): <b>much</b>, <b>a little</b>, <b>little</b> → much water, a little time","Both: <b>a lot of / lots of / some / any</b>","<b>How many</b> + countable? · <b>How much</b> + uncountable?"],
  explain:{
    kid:"Can you count it on your fingers? One apple, two apples — yes! Then use <b>many</b> or <b>a few</b>. Water, sugar, music — you can't say 'two waters'... so use <b>much</b> or <b>a little</b>.",
    teen:"Do the COUNT TEST: put a number in front. '3 books' ✓ → countable → many / a few. '3 rices' ✗ → uncountable → much / a little. 'A lot of' works with both, and it's the most natural in positive sentences.",
    adult:"Countable nouns take many / (a) few; uncountable nouns take much / (a) little. 'A few/a little' are positive (some), 'few/little' are negative (not enough). In affirmative sentences, 'a lot of' is usually more natural than 'much'."
  },
  trick:"<b>The COUNT TEST:</b> try a number in front. Works? → MANY / FEW. Sounds wrong? → MUCH / LITTLE.",
  history:"The famous rule 'fewer for countables, less for uncountables' was invented in 1770 by a writer called Robert Baker — he simply said he preferred it! Today supermarket signs that say '10 items or less' still start arguments in Britain.",
  examples:["How <b>many</b> brothers has {N} got?","There isn't <b>much</b> milk left.","I have <b>a few</b> friends in {C}.","Can I have <b>a little</b> sugar, please?"],
  items:[
    {q:"How ___ people live in {C}?",a:"many",o:["much","little","a little"],why:"People can be counted → HOW MANY."},
    {q:"How ___ money do you need?",a:"much",o:["many","few","a few"],why:"Money is uncountable (you count dollars, not 'moneys') → HOW MUCH."},
    {q:"I've got ___ friends here — maybe three or four.",a:"a few",o:["a little","much","little"],why:"Friends are countable, small positive number → A FEW."},
    {q:"Could I have ___ milk in my tea?",a:"a little",o:["a few","many","few"],why:"Milk is uncountable → A LITTLE."},
    {q:"There aren't ___ buses after midnight.",a:"many",o:["much","a little","little"],why:"Buses are countable → MANY."},
    {q:"We don't have ___ time. Hurry!",a:"much",o:["many","a few","few"],why:"Time is uncountable → MUCH."},
    {q:"{N} has ___ books — hundreds of them!",a:"a lot of",o:["much","a little","little"],why:"A large amount, positive sentence → A LOT OF (works with both types)."}
  ]
},

"comparatives": {
  title:"Comparatives & Superlatives", level:"Foundation", icon:"📏",
  hook:"Bigger, better, the best — compare anything.",
  formula:["Short words: + <b>-er</b> / <b>the -est</b> → tall<b>er</b>, the tall<b>est</b>","Long words: <b>more</b> / <b>the most</b> → more expensive, the most beautiful","-y words: <b>-ier / -iest</b> → happ<b>ier</b>, the happ<b>iest</b>","Irregular: good → better → the best · bad → worse → the worst","Compare with <b>than</b>: She is taller <b>than</b> me."],
  explain:{
    kid:"Comparing two things? Add <b>-er</b>: big → bigg<b>er</b>. The number one of the whole group? Add <b>-est</b>: the bigg<b>est</b>! Long words are too heavy for -er, so we put <b>more</b> in front.",
    teen:"One syllable → -er/-est. Three or more syllables → more/most. Two syllables ending in -y → -ier/-iest. Use 'than' after a comparative and 'the' before a superlative. Never double it: 'more bigger' is wrong.",
    adult:"Monosyllabic adjectives take -er/-est; polysyllabic adjectives take more/most; two-syllable adjectives ending in -y take -ier/-iest. Irregulars: good/better/best, bad/worse/worst, far/further/furthest."
  },
  trick:"<b>Short word → -ER. Long word → MORE. Never both!</b>",
  history:"Shakespeare broke this rule on purpose: in <i>Julius Caesar</i> he wrote 'the most unkindest cut of all' — a double superlative! Rules about 'correct' comparisons came later, in the 1700s.",
  examples:["{C} is <b>bigger than</b> my town.","This is <b>the most interesting</b> book I've read.","Today is <b>better than</b> yesterday.","{N} is <b>the youngest</b> in her family."],
  items:[
    {q:"An elephant is ___ than a horse.",a:"bigger",o:["more big","biger","the biggest"],why:"Short word, consonant-vowel-consonant → double + er: bigger."},
    {q:"This phone is ___ than that one.",a:"more expensive",o:["expensiver","most expensive","more expensiver"],why:"Long word (ex-pen-sive) → MORE."},
    {q:"{N} is the ___ person in our class.",a:"funniest",o:["funnyest","most funny","funnier"],why:"-y word, superlative → change y to i + est."},
    {q:"My English is ___ than last year.",a:"better",o:["gooder","more good","best"],why:"GOOD is irregular: good → better → best."},
    {q:"This is the ___ day of my life!",a:"worst",o:["baddest","worse","most bad"],why:"BAD is irregular: bad → worse → worst."},
    {q:"Russia is bigger ___ Canada.",a:"than",o:["that","then","as"],why:"Comparative + THAN."}
  ]
},

"articles": {
  title:"A, An & The", level:"Foundation", icon:"🅰️",
  hook:"The three most common little words in English — and the trickiest.",
  formula:["<b>a</b> + consonant SOUND → a book, a university (sounds 'you')","<b>an</b> + vowel SOUND → an apple, an hour (h is silent)","<b>the</b> = the specific one we both know → the sun, the book I gave you","No article for general plurals: I like dogs."],
  explain:{
    kid:"<b>A</b> or <b>an</b> means 'one of many': 'I saw <b>a</b> cat.' <b>The</b> means 'that special one we know about': 'The cat was black.' Say <b>an</b> before words that start with a vowel sound: <b>an</b> egg, <b>an</b> elephant.",
    teen:"First mention = a/an. Second mention or something unique = the. a/an depends on SOUND, not spelling: an hour, a uniform, an MP3 player. Talking about things in general? Often no article: 'Cats are cute.'",
    adult:"Indefinite articles introduce new or non-specific singular countable nouns; the choice of a/an is phonological. The definite article marks shared knowledge, uniqueness, or prior mention. General plural and uncountable nouns take zero article."
  },
  trick:"<b>Listen, don't look:</b> an HOUR (sounds 'our'), a UNIVERSITY (sounds 'you'). First time = A, second time = THE.",
  history:"'An' comes from the Old English word for 'one'. Before consonants the 'n' dropped off. Funny fact: 'a napron' became 'an apron' and 'a nadder' became 'an adder' — people heard the n in the wrong place!",
  examples:["{N} has <b>a</b> dog and <b>an</b> owl. <b>The</b> owl is very old.","I waited for <b>an</b> hour.","<b>The</b> moon is bright tonight.","She's <b>a</b> university student."],
  items:[
    {q:"I ate ___ orange for breakfast.",a:"an",o:["a","the","—"],why:"Orange starts with a vowel sound → AN."},
    {q:"She is ___ university teacher.",a:"a",o:["an","the","—"],why:"'University' starts with a 'you' sound (consonant) → A."},
    {q:"We waited for ___ hour.",a:"an",o:["a","the","—"],why:"The H is silent, so 'hour' starts with a vowel sound → AN."},
    {q:"I saw a film last night. ___ film was great.",a:"The",o:["A","An","—"],why:"Second mention — we both know which film → THE."},
    {q:"___ sun is very hot today.",a:"The",o:["A","An","—"],why:"There's only one sun → THE."},
    {q:"{N} loves ___ cats. (in general)",a:"—",alt:["no article","nothing","-"],o:["the","a","an"],why:"Talking about cats in general (plural) → no article."}
  ]
},

"prepositions-time": {
  title:"In, On, At (Time)", level:"Foundation", icon:"🕒",
  hook:"Get dates, days and times right every time.",
  formula:["<b>IN</b> → months, years, seasons, parts of the day → in May, in 2025, in the morning","<b>ON</b> → days and dates → on Monday, on 5th June, on my birthday","<b>AT</b> → clock times & special points → at 7 o'clock, at night, at the weekend (UK)"],
  explain:{
    kid:"Think of a triangle. At the big bottom is <b>IN</b> (big times: years, months). In the middle is <b>ON</b> (days). At the tiny top is <b>AT</b> (exact clock times).",
    teen:"IN for long periods (in July, in winter, in the 1990s), ON for days and dates (on Friday, on 1st May), AT for exact times (at 6:30) and some fixed phrases (at night, at lunchtime). British: at the weekend; American: on the weekend.",
    adult:"IN is used for longer, non-specific periods; ON for days and calendar dates; AT for precise times and fixed expressions. Note the British 'at the weekend' versus American 'on the weekend'."
  },
  trick:"<b>The Time Triangle:</b> IN (big) → ON (medium) → AT (small, exact).",
  history:"'O'clock' is short for 'of the clock'. Hundreds of years ago, when clocks were new, people said 'seven of the clock' to show the time came from a clock, not from the sun or church bells.",
  examples:["{N} was born <b>in</b> 2010, <b>on</b> 3rd March, <b>at</b> 6 a.m.","See you <b>on</b> Saturday!","I always study <b>in</b> the evening.","We'll meet <b>at</b> noon."],
  items:[
    {q:"My birthday is ___ July.",a:"in",o:["on","at","by"],why:"Months → IN."},
    {q:"The class starts ___ 9 o'clock.",a:"at",o:["in","on","by"],why:"Exact clock time → AT."},
    {q:"{N} goes swimming ___ Mondays.",a:"on",o:["in","at","by"],why:"Days → ON."},
    {q:"I was born ___ 2012.",a:"in",o:["on","at","by"],why:"Years → IN."},
    {q:"Owls hunt ___ night.",a:"at",o:["in","on","by"],why:"Fixed phrase: AT night."},
    {q:"We have a party ___ New Year's Day.",a:"on",o:["in","at","by"],why:"A specific day → ON."}
  ]
},

"advice-should": {
  title:"Advice & Suggestions", level:"Elementary", icon:"💡",
  hook:"Help a friend: give advice and make suggestions politely.",
  formula:["<b>should / shouldn't</b> + base verb → You <b>should rest</b>.","<b>Why don't you</b> + base verb? → <b>Why don't you</b> ask the teacher?","<b>Let's</b> + base verb → <b>Let's go</b> to the park.","<b>How about / What about</b> + verb-ing? → <b>How about going</b> by train?"],
  explain:{
    kid:"When your friend has a problem, you can help! 'You <b>should</b> drink water.' 'You <b>shouldn't</b> eat so much candy!' Remember: no 'to' after should.",
    teen:"Should = advice (You should study more). Why don't you…? = a friendly suggestion. Let's… = suggestion including you. How about + -ing = a relaxed idea. Never: 'should to go' or 'how about go'.",
    adult:"'Should' + bare infinitive expresses advice or recommendation. Softer suggestions: 'Why don't you + base form?', 'Let's + base form', 'How/What about + gerund?'. British speakers often soften further: 'You might want to…', 'Maybe you could…'."
  },
  trick:"<b>Should + verb, NO 'to'</b> (should go ✓, should to go ✗). <b>How about + -ING</b> (how about going ✓).",
  history:"'Should' is the old past form of 'shall', from an Old English word that meant 'to owe'. So when you say 'you should rest', you are really saying 'you owe it to yourself to rest'!",
  examples:["You look tired — you <b>should</b> go to bed.","<b>Why don't you</b> call {N}?","<b>Let's</b> try the new café.","<b>How about</b> visiting {C}?"],
  items:[
    {q:"You have a fever. You ___ see a doctor.",a:"should",o:["should to","shouldn't","should be"],why:"Advice → should + base verb (no 'to')."},
    {q:"You ___ eat so much sugar — it's bad for your teeth.",a:"shouldn't",alt:["should not"],o:["should","should to","don't should"],why:"Negative advice → shouldn't."},
    {q:"How about ___ to the cinema?",a:"going",o:["go","to go","went"],why:"How about + verb-ING."},
    {q:"Why don't you ___ {N} for help?",a:"ask",o:["asking","to ask","asked"],why:"Why don't you + base verb."},
    {q:"It's sunny! ___ go to the beach.",a:"Let's",o:["Let","Lets go","How about"],why:"Let's + base verb."},
    {q:"He ___ study more if he wants to pass.",a:"should",o:["shoulds","should to","is should"],why:"Should never changes — no -s for he/she."}
  ]
},

"too-enough": {
  title:"Too & Enough", level:"Elementary", icon:"⚖️",
  hook:"More than needed or just right? Say it clearly.",
  formula:["<b>too</b> + adjective → too hot (more than you want ❌)","adjective + <b>enough</b> → old enough (sufficient ✔)","<b>enough</b> + noun → enough money, enough time","not + adjective + enough → not tall enough"],
  explain:{
    kid:"<b>Too</b> means 'more than I want': 'This soup is <b>too</b> hot!' 🥵 <b>Enough</b> means 'just right': 'Is it cool <b>enough</b> now?' 😊",
    teen:"TOO = a problem, more than needed (too expensive, too late). ENOUGH = sufficient. The position is key: TOO goes before the adjective, ENOUGH goes after it — but before a noun (enough chairs).",
    adult:"'Too' indicates excess and precedes adjectives/adverbs. 'Enough' indicates sufficiency; it follows adjectives/adverbs but precedes nouns. Both are often followed by a to-infinitive: too tired to work, old enough to drive."
  },
  trick:"<b>TOO goes BEFORE, ENOUGH goes AFTER:</b> too big / big enough. But money? → enough money.",
  history:"'Too' is just the word 'to' said strongly. Writers started adding the extra 'o' around the 1500s so readers could see the difference between 'go to bed' and 'it's too late'.",
  examples:["This bag is <b>too heavy</b> to carry.","{N} isn't <b>old enough</b> to drive.","Do we have <b>enough chairs</b>?","It's <b>too late</b> to call him."],
  items:[
    {q:"I can't drink this tea — it's ___ hot.",a:"too",o:["enough","very enough","so enough"],why:"More than you want (a problem) → TOO + adjective."},
    {q:"{N} is 18. She's old ___ to vote.",a:"enough",o:["too","so","very"],why:"Sufficient → adjective + ENOUGH."},
    {q:"We don't have ___ to buy a car.",a:"enough money",o:["money enough","too money","money too"],why:"ENOUGH goes BEFORE a noun."},
    {q:"These shoes are ___. I need a bigger size.",a:"too small",o:["small enough","enough small","small too"],why:"Problem = more small than you want → TOO + adjective."},
    {q:"He isn't ___ to reach the shelf.",a:"tall enough",o:["enough tall","too tall","tall too"],why:"Adjective + ENOUGH (after)."}
  ]
},

"first-conditional": {
  title:"First Conditional", level:"Elementary", icon:"🔀",
  hook:"Talk about real possibilities: if this happens, that will happen.",
  formula:["<b>If</b> + present simple, <b>will</b> + verb","<b>If</b> it <b>rains</b>, we'<b>ll stay</b> at home.","Swap it: We'll stay at home <b>if</b> it rains. (no comma)","❌ Never 'will' after if: If it <s>will rain</s>…"],
  explain:{
    kid:"It's like a promise about what could happen: '<b>If</b> you <b>help</b> me, I <b>will give</b> you a sweet!' The 'if' part stays in the present, even though we mean the future.",
    teen:"Use it for real, possible future situations and their results. If-part = present simple. Result part = will (or can, may, might). The classic mistake is putting 'will' in both halves.",
    adult:"The first conditional expresses a real or likely future condition and its probable result: if + present simple, will/modal + bare infinitive. The if-clause takes present tense despite future reference."
  },
  trick:"<b>IF hates WILL.</b> Keep them apart: IF + present, comma, WILL + verb.",
  history:"'If' comes from the Old English word <i>gif</i>. Around 1,000 years ago people wrote 'gif' where we write 'if' — the 'g' sound slowly disappeared.",
  examples:["<b>If</b> {N} <b>studies</b>, she'<b>ll pass</b> the test.","<b>If</b> you <b>heat</b> ice, it <b>melts</b>. (always true → zero conditional)","I'<b>ll call</b> you <b>if</b> I <b>have</b> time."],
  items:[
    {q:"If it ___ (rain), we'll stay inside.",a:"rains",o:["will rain","rained","raining"],why:"If + PRESENT simple (no will after if)."},
    {q:"If you study hard, you ___ pass the exam.",a:"will",o:["would","are","passed"],why:"Result part → will + verb."},
    {q:"If {N} ___ (miss) the bus, she'll be late.",a:"misses",o:["will miss","miss","missed"],why:"If + present simple; she → misses."},
    {q:"I ___ (buy) you a coffee if you help me.",a:"'ll buy",alt:["will buy"],o:["buy","bought","am buying"],why:"Result part → will + verb."},
    {q:"If we ___ hurry, we'll miss the train.",a:"don't",alt:["do not"],o:["won't","didn't","aren't"],why:"Negative if-clause → present simple: don't."}
  ]
},

"punctuation": {
  title:"Punctuation & Reading Aloud", level:"Foundation", icon:"🚦",
  hook:"Punctuation tells your voice what to do — read with feeling.",
  formula:["<b>.</b> Full stop → stop and breathe (red light)","<b>,</b> Comma → short pause (yellow light)","<b>?</b> Question mark → voice goes up at the end ↗","<b>!</b> Exclamation mark → strong emotion: surprise, joy, anger"],
  explain:{
    kid:"Punctuation marks are traffic lights for your voice! A full stop says STOP. A comma says slow down. A question mark makes your voice go up like a question? And ! means be excited!",
    teen:"Good readers don't read word-by-word — they read in chunks between commas and full stops, change their tone for questions and show emotion with exclamation marks. The same words can mean different things: 'Let's eat, Grandma!' vs 'Let's eat Grandma!'",
    adult:"Punctuation encodes prosody: full stops mark falling intonation and a pause, commas mark phrase boundaries, question marks typically mark rising intonation (yes/no questions), and exclamation marks mark emphasis or emotion."
  },
  trick:"<b>Traffic lights:</b> . = red, , = yellow, ? = voice up, ! = big feeling.",
  history:"Ancient Greek and Latin texts often had no spaces and no punctuation at all! Around 200 BC a librarian, Aristophanes of Byzantium, added dots to show readers where to pause. One popular theory says the question mark began as the Latin letters 'Qo' (for <i>quaestio</i>, question).",
  examples:["Let's eat, Grandma! (talking to Grandma) vs Let's eat Grandma! (oh no!)","You're coming? ↗ / You're coming. ↘ / You're coming! 🎉"],
  items:[
    {q:"Which sentence is a question? Choose the right ending: 'Are you ready___'",a:"?",o:[".","!",","],why:"A question needs a question mark — and your voice goes up."},
    {q:"'I won the lottery___' — the speaker is very excited.",a:"!",o:[".","?",","],why:"Strong emotion → exclamation mark."},
    {q:"A comma tells the reader to…",a:"pause briefly",o:["stop completely","shout","ask a question"],why:"Comma = yellow light → short pause."},
    {q:"'I bought eggs___ milk and bread.' Which mark?",a:",",o:[".","?","!"],why:"Commas separate items in a list."},
    {q:"At a full stop, your voice usually…",a:"goes down and stops",o:["goes up","gets louder","speeds up"],why:"Full stop = falling tone + pause."}
  ]
}

},

/* "The British Way" — interludes about how Brits really use English (shown between topics, in the ticker and on the English Story page) */
britishWay: [
  {say:"Not bad.",mean:"Good — maybe even very good!",reply:"Glad to hear it!",tip:"Brits love understatement. 'Not bad' is often real praise."},
  {say:"You alright?",mean:"Hello! (It's a greeting, not a worried question.)",reply:"Yeah, not bad thanks — you?",tip:"Don't explain your health problems — just say 'Yeah, you?'"},
  {say:"I'll bear it in mind.",mean:"Probably not going to happen.",reply:"No worries.",tip:"Polite indirectness: Brits avoid saying 'no' directly."},
  {say:"Sorry!",mean:"Excuse me / Oops / Pardon? / Get out of my way — depends on the tone!",reply:"No, sorry, my fault!",tip:"Brits say sorry even when YOU bumped into THEM."},
  {say:"Cheers!",mean:"Thanks / Goodbye / (with drinks) To your health!",reply:"Cheers!",tip:"One of the most useful words in Britain."},
  {say:"Fancy a cuppa?",mean:"Would you like a cup of tea?",reply:"Ooh, go on then!",tip:"'Go on then' = yes please, said in a friendly way."},
  {say:"It's a bit chilly, isn't it?",mean:"Let's have a friendly chat.",reply:"Freezing! Supposed to warm up at the weekend though.",tip:"Weather talk is the British way to start a conversation."},
  {say:"With the greatest respect…",mean:"I think you are completely wrong.",reply:"Fair enough — let me explain.",tip:"Very polite words can carry strong disagreement."},
  {say:"That's an interesting idea.",mean:"I don't like it (at work this often means no).",reply:"Shall I think about it a bit more?",tip:"Listen to the tone, not just the words."},
  {say:"Quite good.",mean:"Okay, but not great (said flatly).",reply:"Thanks, I'll keep working on it.",tip:"British 'quite' often makes things weaker, not stronger."},
  {say:"I'm knackered.",mean:"I'm very tired.",reply:"Me too — long day!",tip:"Informal. Fine with friends, not in a job interview."},
  {say:"Ta!",mean:"Thanks! (very informal)",reply:"No worries.",tip:"Common in the Midlands and the North of England."},
  {say:"It's not the end of the world.",mean:"Don't worry, this small problem is OK.",reply:"True, true.",tip:"Brits calm each other down with understatement too."},
  {say:"Mustn't grumble.",mean:"Life is okay (and I won't complain).",reply:"That's the spirit!",tip:"A classic answer to 'How are you?' from older Brits."},
  {say:"Taking the mickey.",mean:"Teasing / joking about someone.",reply:"Haha, alright, alright!",tip:"Friendly teasing (banter) is a sign Brits feel comfortable with you."},
  {say:"Shall we call it a day?",mean:"Let's stop working now.",reply:"Good idea — see you tomorrow.",tip:"Polite way to finish a meeting or a task."}
]
};
