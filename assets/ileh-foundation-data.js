/* I Learn English Here — First Steps (Foundation) data: words, phrases, sentences and helper text
   in the 12 most-spoken languages after English (Ethnologue total-speaker ranking).
   Translation order in every "|" string:  zh | hi | es | fr | ar | bn | pt | ru | ur | id | de | ja
   Translations are hand-written for complete beginners — please report any mistake so it can be fixed.
   © I Learn English Here · an Online Business Awareness project */
window.ILEH_F = (function () {
  var LANGS = [
    ["zh", "中文", "Chinese", "zh-CN"], ["hi", "हिन्दी", "Hindi", "hi-IN"], ["es", "Español", "Spanish", "es-ES"],
    ["fr", "Français", "French", "fr-FR"], ["ar", "العربية", "Arabic", "ar-SA", 1], ["bn", "বাংলা", "Bengali", "bn-BD"],
    ["pt", "Português", "Portuguese", "pt-BR"], ["ru", "Русский", "Russian", "ru-RU"], ["ur", "اردو", "Urdu", "ur-PK", 1],
    ["id", "Bahasa Indonesia", "Indonesian", "id-ID"], ["de", "Deutsch", "German", "de-DE"], ["ja", "日本語", "Japanese", "ja-JP"]
  ];
  var ORDER = LANGS.map(function (l) { return l[0]; });
  function T(s) { var p = s.split("|"), o = {}; ORDER.forEach(function (k, i) { o[k] = (p[i] || "").trim(); }); return o; }

  /* ---------- helper text (instructions) ---------- */
  var UI = {
    choose: "选择你的语言|अपनी भाषा चुनें|Elige tu idioma|Choisis ta langue|اختر لغتك|তোমার ভাষা বেছে নাও|Escolha o seu idioma|Выберите свой язык|اپنی زبان منتخب کریں|Pilih bahasamu|Wähle deine Sprache|言語を選んでください",
    listen: "听|सुनें|Escucha|Écoute|استمع|শোনো|Ouça|Слушайте|سنیں|Dengarkan|Hör zu|聞いてください",
    tapPic: "先听，然后点正确的图片。|सुनें, फिर सही तस्वीर पर टैप करें।|Escucha y toca la imagen correcta.|Écoute, puis touche la bonne image.|استمع، ثم اضغط على الصورة الصحيحة.|শোনো, তারপর সঠিক ছবিতে চাপ দাও।|Ouça e toque na imagem certa.|Послушайте и нажмите на правильную картинку.|سنیں، پھر صحیح تصویر پر ٹیپ کریں۔|Dengarkan, lalu ketuk gambar yang benar.|Hör zu und tippe dann auf das richtige Bild.|聞いて、正しい絵をタップしてください。",
    correct: "正确！|सही!|¡Correcto!|Correct !|صحيح!|ঠিক!|Correto!|Правильно!|درست!|Benar!|Richtig!|正解！",
    tryAgain: "还不对——再听一次，再试试。|अभी नहीं — फिर से सुनें और कोशिश करें।|Todavía no: escucha e inténtalo otra vez.|Pas encore — écoute et réessaie.|ليس بعد — استمع وحاول مرة أخرى.|এখনো হয়নি — আবার শোনো, আবার চেষ্টা করো।|Ainda não — ouça e tente de novo.|Пока нет — послушайте и попробуйте ещё раз.|ابھی نہیں — دوبارہ سنیں اور پھر کوشش کریں۔|Belum — dengarkan dan coba lagi.|Noch nicht — hör zu und versuch es noch einmal.|まだです。もう一度聞いて、やってみましょう。",
    next: "下一个|आगे|Siguiente|Suivant|التالي|পরেরটি|Próximo|Далее|آگے|Berikutnya|Weiter|次へ",
    learn: "学习|सीखें|Aprende|Apprends|تعلّم|শেখো|Aprenda|Учите|سیکھیں|Belajar|Lernen|学ぶ",
    practise: "练习|अभ्यास करें|Practica|Entraîne-toi|تدرّب|অনুশীলন করো|Pratique|Практикуйтесь|مشق کریں|Berlatih|Üben|練習する",
    check: "测试|जाँच|Prueba|Test|اختبار|পরীক্ষা|Teste|Проверка|جانچ|Tes|Test|テスト",
    welldone: "太棒了！|बहुत बढ़िया!|¡Muy bien!|Bravo !|أحسنت!|খুব ভালো!|Muito bem!|Молодец!|شاباش!|Bagus sekali!|Gut gemacht!|よくできました！",
    need80: "答对10题中的8题，就能打开下一步。|अगला कदम खोलने के लिए 10 में से 8 सही करें।|Acierta 8 de 10 para abrir el siguiente paso.|Obtiens 8 sur 10 pour ouvrir l'étape suivante.|احصل على 8 من 10 لفتح الخطوة التالية.|পরের ধাপ খুলতে ১০টির মধ্যে ৮টি ঠিক করো।|Acerte 8 de 10 para abrir o próximo passo.|Ответьте правильно на 8 из 10, чтобы открыть следующий шаг.|اگلا قدم کھولنے کے لیے 10 میں سے 8 درست کریں۔|Jawab benar 8 dari 10 untuk membuka langkah berikutnya.|Schaffe 8 von 10, um den nächsten Schritt zu öffnen.|10問中8問正解すると、次のステップが開きます。",
    locked: "已锁定——先完成上一步。|बंद है — पहले पिछला कदम पूरा करें।|Bloqueado: termina primero el paso anterior.|Verrouillé — termine d'abord l'étape précédente.|مقفل — أكمل الخطوة السابقة أولاً.|বন্ধ — আগে আগের ধাপটি শেষ করো।|Bloqueado — termine primeiro o passo anterior.|Закрыто — сначала пройдите предыдущий шаг.|بند ہے — پہلے پچھلا قدم مکمل کریں۔|Terkunci — selesaikan dulu langkah sebelumnya.|Gesperrt — schließe zuerst den vorherigen Schritt ab.|ロック中です。先に前のステップを終えてください。",
    howto: "点击喇叭听英语。点击卡片可以再听一次。|अंग्रेज़ी सुनने के लिए स्पीकर पर टैप करें। दोबारा सुनने के लिए कार्ड पर टैप करें।|Toca el altavoz para oír el inglés. Toca una tarjeta para oírla otra vez.|Touche le haut-parleur pour entendre l'anglais. Touche une carte pour l'entendre encore.|اضغط على السمّاعة لتسمع الإنجليزية. اضغط على البطاقة لتسمعها مرة أخرى.|ইংরেজি শুনতে স্পিকারে চাপ দাও। আবার শুনতে কার্ডে চাপ দাও।|Toque no alto-falante para ouvir o inglês. Toque num cartão para ouvir de novo.|Нажмите на динамик, чтобы услышать английский. Нажмите на карточку, чтобы послушать ещё раз.|انگریزی سننے کے لیے اسپیکر پر ٹیپ کریں۔ دوبارہ سننے کے لیے کارڈ پر ٹیپ کریں۔|Ketuk pengeras suara untuk mendengar bahasa Inggris. Ketuk kartu untuk mendengarnya lagi.|Tippe auf den Lautsprecher, um Englisch zu hören. Tippe auf eine Karte, um sie noch einmal zu hören.|スピーカーをタップすると英語が聞けます。カードをタップすると、もう一度聞けます。",
    repeat: "大声说出来。|इसे ज़ोर से बोलें।|Dilo en voz alta.|Dis-le à voix haute.|قلها بصوت عالٍ.|জোরে বলো।|Diga em voz alta.|Скажите это вслух.|اسے بلند آواز سے بولیں۔|Ucapkan dengan keras.|Sag es laut.|声に出して言ってみましょう。",
    slow: "慢速|धीमा|Lento|Lent|ببطء|ধীরে|Devagar|Медленно|آہستہ|Pelan|Langsam|ゆっくり",
    start: "开始|शुरू करें|Empezar|Commencer|ابدأ|শুরু করো|Começar|Начать|شروع کریں|Mulai|Starten|スタート",
    again: "再做一次|फिर से करें|Repetir|Recommencer|أعد المحاولة|আবার করো|Fazer de novo|Ещё раз|دوبارہ کریں|Ulangi|Noch einmal|もう一度",
    score: "你的分数|आपका स्कोर|Tu puntuación|Ton score|نتيجتك|তোমার স্কোর|A sua pontuação|Ваш результат|آپ کا اسکور|Skormu|Dein Ergebnis|あなたのスコア",
    unitDone: "这一步完成了！下一步已经打开。|कदम पूरा हुआ! अगला कदम खुल गया है।|¡Paso completado! El siguiente paso ya está abierto.|Étape terminée ! L'étape suivante est ouverte.|اكتملت الخطوة! الخطوة التالية مفتوحة الآن.|ধাপ শেষ! পরের ধাপ খুলে গেছে।|Passo concluído! O próximo passo está aberto.|Шаг пройден! Следующий шаг открыт.|قدم مکمل! اگلا قدم کھل گیا ہے۔|Langkah selesai! Langkah berikutnya sudah terbuka.|Schritt geschafft! Der nächste Schritt ist offen.|ステップ完了！次のステップが開きました。",
    notYet: "还没通过。再练习一下，然后再测试。|अभी नहीं। फिर से अभ्यास करें, फिर जाँच दें।|Todavía no. Practica otra vez y luego haz la prueba.|Pas encore. Entraîne-toi encore, puis refais le test.|ليس بعد. تدرّب مرة أخرى، ثم أعد الاختبار.|এখনো হয়নি। আবার অনুশীলন করো, তারপর পরীক্ষা দাও।|Ainda não. Pratique de novo e depois faça o teste.|Пока нет. Потренируйтесь ещё, а потом пройдите проверку.|ابھی نہیں۔ دوبارہ مشق کریں، پھر جانچ دیں۔|Belum. Berlatih lagi, lalu coba tes.|Noch nicht. Übe noch einmal und mach dann den Test.|まだです。もう一度練習してから、テストを受けましょう。",
    build: "按正确的顺序点击单词。|शब्दों को सही क्रम में टैप करें।|Toca las palabras en el orden correcto.|Touche les mots dans le bon ordre.|اضغط على الكلمات بالترتيب الصحيح.|শব্দগুলো সঠিক ক্রমে চাপ দাও।|Toque nas palavras na ordem certa.|Нажимайте на слова в правильном порядке.|الفاظ کو صحیح ترتیب میں ٹیپ کریں۔|Ketuk kata-kata dalam urutan yang benar.|Tippe die Wörter in der richtigen Reihenfolge an.|正しい順番で単語をタップしてください。",
    chooseWord: "选择正确的词。|सही शब्द चुनें।|Elige la palabra correcta.|Choisis le bon mot.|اختر الكلمة الصحيحة.|সঠিক শব্দটি বেছে নাও।|Escolha a palavra certa.|Выберите правильное слово.|صحیح لفظ چنیں۔|Pilih kata yang benar.|Wähle das richtige Wort.|正しい単語を選んでください。",
    know: "我已经会了——直接测试|मुझे यह पहले से आता है — जाँच दें|Ya lo sé: hacer la prueba|Je connais déjà — faire le test|أعرف هذا — خذ الاختبار|আমি এটা জানি — পরীক্ষা দাও|Já sei — fazer o teste|Я уже знаю — пройти проверку|مجھے یہ آتا ہے — جانچ دیں|Saya sudah tahu — ikut tes|Kann ich schon — zum Test|もう知っています — テストへ",
    langNote: "翻译帮助你开始。慢慢地，只用英语。|अनुवाद आपको शुरू करने में मदद करता है। धीरे-धीरे केवल अंग्रेज़ी का प्रयोग करें।|Las traducciones te ayudan a empezar. Poco a poco, usa solo inglés.|Les traductions t'aident à commencer. Petit à petit, utilise seulement l'anglais.|الترجمة تساعدك على البداية. شيئًا فشيئًا، استخدم الإنجليزية فقط.|অনুবাদ তোমাকে শুরু করতে সাহায্য করে। ধীরে ধীরে শুধু ইংরেজি ব্যবহার করো।|As traduções ajudam você a começar. Pouco a pouco, use só inglês.|Перевод помогает начать. Постепенно переходите только на английский.|ترجمہ آپ کو شروع کرنے میں مدد دیتا ہے۔ آہستہ آہستہ صرف انگریزی استعمال کریں۔|Terjemahan membantumu memulai. Sedikit demi sedikit, gunakan bahasa Inggris saja.|Übersetzungen helfen dir beim Start. Nach und nach nutzt du nur Englisch.|翻訳はスタートの助けになります。少しずつ、英語だけを使いましょう。",
    hide: "隐藏我的语言|मेरी भाषा छिपाएँ|Ocultar mi idioma|Masquer ma langue|إخفاء لغتي|আমার ভাষা লুকাও|Ocultar meu idioma|Скрыть мой язык|میری زبان چھپائیں|Sembunyikan bahasaku|Meine Sprache ausblenden|自分の言語を隠す",
    newHere: "刚开始学英语？从这里开始|अंग्रेज़ी में नए हैं? यहाँ से शुरू करें|¿Nuevo en inglés? Empieza aquí|Débutant en anglais ? Commence ici|جديد في الإنجليزية؟ ابدأ هنا|ইংরেজিতে নতুন? এখান থেকে শুরু করো|Começando no inglês? Comece aqui|Только начинаете английский? Начните здесь|انگریزی میں نئے ہیں؟ یہاں سے شروع کریں|Baru belajar bahasa Inggris? Mulai di sini|Neu im Englischen? Fang hier an|英語は初めて？ここから始めよう",
    u_sounds: "声音和字母|ध्वनियाँ और अक्षर|Sonidos y letras|Sons et lettres|الأصوات والحروف|ধ্বনি ও অক্ষর|Sons e letras|Звуки и буквы|آوازیں اور حروف|Bunyi dan huruf|Laute und Buchstaben|音と文字",
    u_words: "最初的单词|पहले शब्द|Primeras palabras|Premiers mots|الكلمات الأولى|প্রথম শব্দ|Primeiras palavras|Первые слова|پہلے الفاظ|Kata pertama|Erste Wörter|最初の単語",
    u_phrases: "最初的常用语|पहले वाक्यांश|Primeras frases|Premières phrases|العبارات الأولى|প্রথম বাক্যাংশ|Primeiras frases|Первые фразы|پہلے جملے|Frasa pertama|Erste Sätze|最初のフレーズ",
    u_sentence: "我的第一个句子|मेरा पहला वाक्य|Mi primera oración|Ma première phrase|جملتي الأولى|আমার প্রথম বাক্য|Minha primeira frase|Моё первое предложение|میرا پہلا جملہ|Kalimat pertamaku|Mein erster Satz|はじめての文",
    s_people: "人和家庭|लोग और परिवार|Personas y familia|Personnes et famille|الناس والعائلة|মানুষ ও পরিবার|Pessoas e família|Люди и семья|لوگ اور خاندان|Orang dan keluarga|Menschen und Familie|人と家族",
    s_numbers: "数字|संख्याएँ|Números|Nombres|الأرقام|সংখ্যা|Números|Числа|گنتی|Angka|Zahlen|数",
    s_food: "食物和饮料|खाना और पेय|Comida y bebida|Nourriture et boissons|الطعام والشراب|খাবার ও পানীয়|Comida e bebida|Еда и напитки|کھانا اور مشروبات|Makanan dan minuman|Essen und Trinken|食べ物と飲み物",
    s_things: "东西|चीज़ें|Cosas|Objets|الأشياء|জিনিসপত্র|Coisas|Вещи|چیزیں|Barang|Dinge|もの",
    s_places: "地方|जगहें|Lugares|Lieux|الأماكن|জায়গা|Lugares|Места|جگہیں|Tempat|Orte|場所",
    s_body: "身体和感觉|शरीर और भावनाएँ|Cuerpo y sentimientos|Corps et émotions|الجسم والمشاعر|শরীর ও অনুভূতি|Corpo e sentimentos|Тело и чувства|جسم اور احساسات|Tubuh dan perasaan|Körper und Gefühle|体と気持ち",
    s_colours: "颜色|रंग|Colores|Couleurs|الألوان|রং|Cores|Цвета|رنگ|Warna|Farben|色",
    s_actions: "动作|क्रियाएँ (काम)|Acciones|Actions|الأفعال|কাজ|Ações|Действия|افعال (کام)|Kegiatan|Tätigkeiten|動作",
    f1: "英语句子一定要有动词，即使你的语言不需要。|अंग्रेज़ी वाक्य में हमेशा क्रिया चाहिए — चाहे आपकी भाषा में न हो।|Las oraciones en inglés siempre necesitan un verbo, aunque tu idioma no lo use.|Une phrase anglaise a toujours besoin d'un verbe, même si ta langue n'en utilise pas.|الجملة الإنجليزية تحتاج دائمًا إلى فعل، حتى لو كانت لغتك لا تستخدمه.|ইংরেজি বাক্যে সবসময় একটি ক্রিয়া লাগে — তোমার ভাষায় না লাগলেও।|Frases em inglês sempre precisam de um verbo, mesmo quando o seu idioma não usa.|В английском предложении всегда нужен глагол, даже если в вашем языке его нет.|انگریزی جملے میں ہمیشہ فعل چاہیے — چاہے آپ کی زبان میں نہ ہو۔|Kalimat bahasa Inggris selalu butuh kata kerja, walaupun bahasamu tidak memakainya.|Ein englischer Satz braucht immer ein Verb – auch wenn deine Sprache keins benutzt.|英語の文にはいつも動詞が必要です。あなたの言語で使わなくても必要です。",
    f2: "用 am / is / are 说你是谁、你感觉怎么样、你在哪里。|am / is / are का प्रयोग यह बताने के लिए करें कि आप कौन हैं, कैसा महसूस करते हैं और कहाँ हैं।|Usa am / is / are para decir quién eres, cómo te sientes y dónde estás.|Utilise am / is / are pour dire qui tu es, comment tu te sens et où tu es.|استخدم am / is / are لتقول من أنت، وكيف تشعر، وأين أنت.|তুমি কে, কেমন অনুভব করছ আর কোথায় আছ — বলতে am / is / are ব্যবহার করো।|Use am / is / are para dizer quem você é, como se sente e onde está.|Используйте am / is / are, чтобы сказать, кто вы, как себя чувствуете и где находитесь.|am / is / are سے بتائیں کہ آپ کون ہیں، کیسا محسوس کرتے ہیں اور کہاں ہیں۔|Pakai am / is / are untuk mengatakan siapa kamu, bagaimana perasaanmu, dan di mana kamu.|Mit am / is / are sagst du, wer du bist, wie du dich fühlst und wo du bist.|am / is / are は「だれか」「どんな気持ちか」「どこにいるか」を言うときに使います。",
    f3: "用动作词（eat, go, play）时，不要用 am / is / are。要说：I eat. She eats.|काम वाले शब्दों (eat, go, play) के साथ am / is / are न लगाएँ। कहें: I eat. She eats.|Con palabras de acción (eat, go, play) NO uses am / is / are. Di: I eat. She eats.|Avec les mots d'action (eat, go, play), n'utilise PAS am / is / are. Dis : I eat. She eats.|مع كلمات الأفعال (eat, go, play) لا تستخدم am / is / are. قل: I eat. She eats.|কাজের শব্দের (eat, go, play) সাথে am / is / are ব্যবহার করবে না। বলো: I eat. She eats.|Com palavras de ação (eat, go, play) NÃO use am / is / are. Diga: I eat. She eats.|С глаголами действия (eat, go, play) НЕ используйте am / is / are. Говорите: I eat. She eats.|کام والے الفاظ (eat, go, play) کے ساتھ am / is / are استعمال نہ کریں۔ کہیں: I eat. She eats.|Dengan kata kerja tindakan (eat, go, play) JANGAN pakai am / is / are. Katakan: I eat. She eats.|Bei Tätigkeitswörtern (eat, go, play) benutzt du KEIN am / is / are. Sag: I eat. She eats.|動作の言葉（eat, go, play）には am / is / are を使いません。I eat. She eats. と言います。",
    f4: "他、她、它：动作词后面加 -s。She eats. He plays.|he, she, it के साथ क्रिया में -s जोड़ें। She eats. He plays.|Con he, she, it: añade -s a la acción. She eats. He plays.|Avec he, she, it : ajoute -s au verbe. She eats. He plays.|مع he وshe وit: أضف ‎-s إلى الفعل. She eats. He plays.|he, she, it হলে কাজের শব্দে -s যোগ করো। She eats. He plays.|Com he, she, it: acrescente -s ao verbo. She eats. He plays.|С he, she, it добавляйте -s к глаголу. She eats. He plays.|he, she, it کے ساتھ فعل میں -s لگائیں۔ She eats. He plays.|Untuk he, she, it: tambahkan -s pada kata kerja. She eats. He plays.|Bei he, she, it hängst du -s an das Verb. She eats. He plays.|he, she, it のときは、動作の言葉に -s をつけます。She eats. He plays.",
    p1: "坐在一起。每天十分钟就够了。|साथ बैठें। रोज़ दस मिनट काफ़ी हैं।|Siéntense juntos. Diez minutos al día son suficientes.|Asseyez-vous ensemble. Dix minutes par jour suffisent.|اجلسا معًا. عشر دقائق في اليوم تكفي.|একসাথে বসুন। দিনে দশ মিনিটই যথেষ্ট।|Sentem juntos. Dez minutos por dia é suficiente.|Садитесь вместе. Десяти минут в день достаточно.|ساتھ بیٹھیں۔ روزانہ دس منٹ کافی ہیں۔|Duduklah bersama. Sepuluh menit sehari sudah cukup.|Setzen Sie sich zusammen hin. Zehn Minuten am Tag reichen.|いっしょに座りましょう。1日10分で十分です。",
    p2: "和孩子一起大声说英语单词——即使你也在学习。|अपने बच्चे के साथ अंग्रेज़ी शब्द ज़ोर से बोलें — भले ही आप भी सीख रहे हों।|Digan las palabras en inglés en voz alta con su hijo, aunque usted también esté aprendiendo.|Dites les mots anglais à voix haute avec votre enfant, même si vous apprenez aussi.|قل الكلمات الإنجليزية بصوت عالٍ مع طفلك، حتى لو كنت تتعلّم أنت أيضًا.|আপনার শিশুর সাথে ইংরেজি শব্দগুলো জোরে বলুন — আপনিও শিখছেন হলেও।|Diga as palavras em inglês em voz alta com seu filho, mesmo que você também esteja aprendendo.|Произносите английские слова вслух вместе с ребёнком, даже если вы тоже учитесь.|اپنے بچے کے ساتھ انگریزی الفاظ بلند آواز سے بولیں — چاہے آپ بھی سیکھ رہے ہوں۔|Ucapkan kata-kata bahasa Inggris dengan keras bersama anak Anda, meskipun Anda juga sedang belajar.|Sprechen Sie die englischen Wörter laut mit Ihrem Kind – auch wenn Sie selbst noch lernen.|自分も勉強中でも、お子さんといっしょに英語の言葉を声に出して言いましょう。",
    p3: "表扬孩子的努力，不只是正确答案。|सिर्फ़ सही जवाब की नहीं, कोशिश की भी तारीफ़ करें।|Elogie el esfuerzo, no solo las respuestas correctas.|Félicitez l'effort, pas seulement les bonnes réponses.|امدح المحاولة، وليس الإجابات الصحيحة فقط.|শুধু সঠিক উত্তর নয়, চেষ্টারও প্রশংসা করুন।|Elogie o esforço, não só as respostas certas.|Хвалите за старание, а не только за правильные ответы.|صرف درست جواب کی نہیں، کوشش کی بھی تعریف کریں۔|Pujilah usahanya, bukan hanya jawaban yang benar.|Loben Sie das Versuchen, nicht nur richtige Antworten.|正しい答えだけでなく、がんばったことをほめましょう。",
    p4: "指着家里的真实物品，说出英语单词。|घर की असली चीज़ों की ओर इशारा करें और अंग्रेज़ी शब्द बोलें।|Señale cosas reales en casa y diga la palabra en inglés.|Montrez de vrais objets à la maison et dites le mot anglais.|أشر إلى أشياء حقيقية في البيت وقل الكلمة بالإنجليزية.|বাড়ির আসল জিনিসের দিকে দেখিয়ে ইংরেজি শব্দটি বলুন।|Aponte para coisas reais em casa e diga a palavra em inglês.|Показывайте на настоящие предметы дома и называйте их по-английски.|گھر کی اصل چیزوں کی طرف اشارہ کریں اور انگریزی لفظ بولیں۔|Tunjuk benda nyata di rumah dan ucapkan kata bahasa Inggrisnya.|Zeigen Sie auf echte Dinge zu Hause und sagen Sie das englische Wort.|家にある本物のものを指さして、英語で言ってみましょう。",
    p5: "本页面没有广告，也不用注册。星星只保存在这台设备上。|इस पेज पर कोई विज्ञापन और साइन-अप नहीं है। सितारे सिर्फ़ इसी डिवाइस पर सेव होते हैं।|Esta página no tiene anuncios ni registro. Las estrellas se guardan solo en este dispositivo.|Cette page n'a ni publicité ni inscription. Les étoiles sont enregistrées seulement sur cet appareil.|لا إعلانات ولا تسجيل في هذه الصفحة. تُحفظ النجوم على هذا الجهاز فقط.|এই পেজে কোনো বিজ্ঞাপন বা সাইন-আপ নেই। তারাগুলো শুধু এই ডিভাইসেই সংরক্ষিত হয়।|Esta página não tem anúncios nem cadastro. As estrelas ficam salvas só neste aparelho.|На этой странице нет рекламы и регистрации. Звёзды сохраняются только на этом устройстве.|اس صفحے پر نہ کوئی اشتہار ہے نہ سائن اپ۔ ستارے صرف اسی ڈیوائس پر محفوظ ہوتے ہیں۔|Halaman ini tanpa iklan dan tanpa pendaftaran. Bintang hanya disimpan di perangkat ini.|Diese Seite hat keine Werbung und keine Anmeldung. Sterne werden nur auf diesem Gerät gespeichert.|このページには広告も登録もありません。星はこの端末にだけ保存されます。"
  };
  for (var k in UI) UI[k] = T(UI[k]);

  /* ---------- word sets: [english, picture, translations] ---------- */
  function W(list) { return list.map(function (r) { return { en: r[0], pic: r[1], tr: T(r[2]) }; }); }
  var SETS = [
    { id: "people", ui: "s_people", icon: "👪", words: W([
      ["man", "👨", "男人|आदमी|hombre|homme|رجل|পুরুষ|homem|мужчина|آدمی|laki-laki|Mann|男の人"],
      ["woman", "👩", "女人|औरत|mujer|femme|امرأة|মহিলা|mulher|женщина|عورت|perempuan|Frau|女の人"],
      ["boy", "👦", "男孩|लड़का|niño|garçon|ولد|ছেলে|menino|мальчик|لڑکا|anak laki-laki|Junge|男の子"],
      ["girl", "👧", "女孩|लड़की|niña|fille|بنت|মেয়ে|menina|девочка|لڑکی|anak perempuan|Mädchen|女の子"],
      ["baby", "👶", "婴儿|शिशु|bebé|bébé|طفل رضيع|শিশু|bebê|малыш|شیر خوار بچہ|bayi|Baby|赤ちゃん"],
      ["mother", "👩‍👧", "妈妈|माँ|madre|mère|أم|মা|mãe|мама|ماں|ibu|Mutter|お母さん"],
      ["father", "👨‍👦", "爸爸|पिता|padre|père|أب|বাবা|pai|папа|باپ|ayah|Vater|お父さん"],
      ["friend", "🤝", "朋友|दोस्त|amigo|ami|صديق|বন্ধু|amigo|друг|دوست|teman|Freund|友だち"],
      ["teacher", "🧑‍🏫", "老师|शिक्षक|profesor|professeur|معلّم|শিক্ষক|professor|учитель|استاد|guru|Lehrer|先生"],
      ["family", "👨‍👩‍👧", "家庭|परिवार|familia|famille|عائلة|পরিবার|família|семья|خاندان|keluarga|Familie|家族"]
    ]) },
    { id: "numbers", ui: "s_numbers", icon: "🔢", numbers: 1, words: W([
      ["one", "1", "一|एक|uno|un|واحد|এক|um|один|ایک|satu|eins|いち"],
      ["two", "2", "二|दो|dos|deux|اثنان|দুই|dois|два|دو|dua|zwei|に"],
      ["three", "3", "三|तीन|tres|trois|ثلاثة|তিন|três|три|تین|tiga|drei|さん"],
      ["four", "4", "四|चार|cuatro|quatre|أربعة|চার|quatro|четыре|چار|empat|vier|よん"],
      ["five", "5", "五|पाँच|cinco|cinq|خمسة|পাঁচ|cinco|пять|پانچ|lima|fünf|ご"],
      ["six", "6", "六|छह|seis|six|ستة|ছয়|seis|шесть|چھ|enam|sechs|ろく"],
      ["seven", "7", "七|सात|siete|sept|سبعة|সাত|sete|семь|سات|tujuh|sieben|なな"],
      ["eight", "8", "八|आठ|ocho|huit|ثمانية|আট|oito|восемь|آٹھ|delapan|acht|はち"],
      ["nine", "9", "九|नौ|nueve|neuf|تسعة|নয়|nove|девять|نو|sembilan|neun|きゅう"],
      ["ten", "10", "十|दस|diez|dix|عشرة|দশ|dez|десять|دس|sepuluh|zehn|じゅう"]
    ]) },
    { id: "food", ui: "s_food", icon: "🍎", words: W([
      ["water", "💧", "水|पानी|agua|eau|ماء|পানি / জল|água|вода|پانی|air|Wasser|水"],
      ["bread", "🍞", "面包|ब्रेड (डबल रोटी)|pan|pain|خبز|পাউরুটি|pão|хлеб|ڈبل روٹی|roti|Brot|パン"],
      ["rice", "🍚", "米饭|चावल|arroz|riz|أرز|ভাত|arroz|рис|چاول|nasi|Reis|ごはん"],
      ["apple", "🍎", "苹果|सेब|manzana|pomme|تفاحة|আপেল|maçã|яблоко|سیب|apel|Apfel|りんご"],
      ["banana", "🍌", "香蕉|केला|plátano|banane|موزة|কলা|banana|банан|کیلا|pisang|Banane|バナナ"],
      ["egg", "🥚", "鸡蛋|अंडा|huevo|œuf|بيضة|ডিম|ovo|яйцо|انڈا|telur|Ei|たまご"],
      ["milk", "🥛", "牛奶|दूध|leche|lait|حليب|দুধ|leite|молоко|دودھ|susu|Milch|牛乳"],
      ["tea", "🍵", "茶|चाय|té|thé|شاي|চা|chá|чай|چائے|teh|Tee|お茶"],
      ["chicken", "🍗", "鸡肉|चिकन|pollo|poulet|دجاج|মুরগির মাংস|frango|курица|مرغی|ayam|Hähnchen|とり肉"],
      ["fish", "🐟", "鱼|मछली|pescado|poisson|سمك|মাছ|peixe|рыба|مچھلی|ikan|Fisch|魚"]
    ]) },
    { id: "things", ui: "s_things", icon: "🏠", words: W([
      ["house", "🏠", "房子|घर|casa|maison|بيت|বাড়ি|casa|дом|گھر|rumah|Haus|家"],
      ["door", "🚪", "门|दरवाज़ा|puerta|porte|باب|দরজা|porta|дверь|دروازہ|pintu|Tür|ドア"],
      ["bed", "🛏️", "床|बिस्तर|cama|lit|سرير|বিছানা|cama|кровать|بستر|tempat tidur|Bett|ベッド"],
      ["chair", "🪑", "椅子|कुर्सी|silla|chaise|كرسي|চেয়ার|cadeira|стул|کرسی|kursi|Stuhl|いす"],
      ["phone", "📱", "手机|फ़ोन|teléfono|téléphone|هاتف|ফোন|telefone|телефон|فون|telepon|Handy|電話"],
      ["book", "📖", "书|किताब|libro|livre|كتاب|বই|livro|книга|کتاب|buku|Buch|本"],
      ["bag", "🎒", "包|बैग|bolsa|sac|حقيبة|ব্যাগ|bolsa|сумка|تھیلا (بیگ)|tas|Tasche|かばん"],
      ["key", "🔑", "钥匙|चाबी|llave|clé|مفتاح|চাবি|chave|ключ|چابی|kunci|Schlüssel|かぎ"],
      ["money", "💵", "钱|पैसा|dinero|argent|نقود|টাকা|dinheiro|деньги|پیسے|uang|Geld|お金"],
      ["car", "🚗", "汽车|गाड़ी (कार)|coche|voiture|سيارة|গাড়ি|carro|машина|گاڑی|mobil|Auto|車"]
    ]) },
    { id: "places", ui: "s_places", icon: "🏫", words: W([
      ["school", "🏫", "学校|स्कूल|escuela|école|مدرسة|স্কুল|escola|школа|اسکول|sekolah|Schule|学校"],
      ["shop", "🏪", "商店|दुकान|tienda|magasin|متجر|দোকান|loja|магазин|دکان|toko|Laden|店"],
      ["hospital", "🏥", "医院|अस्पताल|hospital|hôpital|مستشفى|হাসপাতাল|hospital|больница|ہسپتال|rumah sakit|Krankenhaus|病院"],
      ["toilet", "🚻", "厕所|शौचालय|baño|toilettes|حمّام|টয়লেট|banheiro|туалет|بیت الخلا|toilet|Toilette|トイレ"],
      ["bank", "🏦", "银行|बैंक|banco|banque|بنك|ব্যাংক|banco|банк|بینک|bank|Bank|銀行"],
      ["hotel", "🏨", "酒店|होटल|hotel|hôtel|فندق|হোটেল|hotel|гостиница|ہوٹل|hotel|Hotel|ホテル"],
      ["station", "🚉", "车站|स्टेशन|estación|gare|محطة|স্টেশন|estação|вокзал|اسٹیشن|stasiun|Bahnhof|駅"],
      ["airport", "✈️", "机场|हवाई अड्डा|aeropuerto|aéroport|مطار|বিমানবন্দর|aeroporto|аэропорт|ہوائی اڈہ|bandara|Flughafen|空港"],
      ["park", "🏞️", "公园|पार्क|parque|parc|حديقة|পার্ক|parque|парк|پارک|taman|Park|公園"],
      ["street", "🛣️", "街道|सड़क|calle|rue|شارع|রাস্তা|rua|улица|سڑک|jalan|Straße|通り"]
    ]) },
    { id: "body", ui: "s_body", icon: "🙂", words: W([
      ["eye", "👁️", "眼睛|आँख|ojo|œil|عين|চোখ|olho|глаз|آنکھ|mata|Auge|目"],
      ["ear", "👂", "耳朵|कान|oreja|oreille|أذن|কান|orelha|ухо|کان|telinga|Ohr|耳"],
      ["nose", "👃", "鼻子|नाक|nariz|nez|أنف|নাক|nariz|нос|ناک|hidung|Nase|鼻"],
      ["mouth", "👄", "嘴|मुँह|boca|bouche|فم|মুখ|boca|рот|منہ|mulut|Mund|口"],
      ["hand", "✋", "手|हाथ|mano|main|يد|হাত|mão|рука|ہاتھ|tangan|Hand|手"],
      ["foot", "🦶", "脚|पैर|pie|pied|قدم|পা|pé|ступня|پاؤں|kaki|Fuß|足"],
      ["happy", "😀", "开心|खुश|feliz|content|سعيد|খুশি|feliz|радостный|خوش|senang|glücklich|うれしい"],
      ["sad", "😢", "难过|उदास|triste|triste|حزين|দুঃখী|triste|грустный|اداس|sedih|traurig|悲しい"],
      ["hungry", "😋", "饿|भूखा|con hambre|affamé|جائع|ক্ষুধার্ত|com fome|голодный|بھوکا|lapar|hungrig|おなかがすいた"],
      ["tired", "🥱", "累|थका हुआ|cansado|fatigué|متعب|ক্লান্ত|cansado|уставший|تھکا ہوا|lelah|müde|つかれた"]
    ]) },
    { id: "colours", ui: "s_colours", icon: "🎨", colours: 1, words: W([
      ["red", "#e53935", "红色|लाल|rojo|rouge|أحمر|লাল|vermelho|красный|لال|merah|rot|赤"],
      ["blue", "#1e66d0", "蓝色|नीला|azul|bleu|أزرق|নীল|azul|синий|نیلا|biru|blau|青"],
      ["green", "#2e9d48", "绿色|हरा|verde|vert|أخضر|সবুজ|verde|зелёный|ہرا|hijau|grün|緑"],
      ["yellow", "#f7d21e", "黄色|पीला|amarillo|jaune|أصفر|হলুদ|amarelo|жёлтый|پیلا|kuning|gelb|黄色"],
      ["black", "#1b1b1b", "黑色|काला|negro|noir|أسود|কালো|preto|чёрный|کالا|hitam|schwarz|黒"],
      ["white", "#ffffff", "白色|सफ़ेद|blanco|blanc|أبيض|সাদা|branco|белый|سفید|putih|weiß|白"],
      ["orange", "#f5871f", "橙色|नारंगी|naranja|orange|برتقالي|কমলা|laranja|оранжевый|نارنجی|oranye|orange|オレンジ色"],
      ["purple", "#7b3fb8", "紫色|बैंगनी|morado|violet|بنفسجي|বেগুনি|roxo|фиолетовый|جامنی|ungu|lila|紫"],
      ["brown", "#7a4a26", "棕色|भूरा|marrón|marron|بنّي|বাদামি|marrom|коричневый|بھورا|cokelat|braun|茶色"],
      ["pink", "#f48fb1", "粉色|गुलाबी|rosa|rose|وردي|গোলাপি|rosa|розовый|گلابی|merah muda|rosa|ピンク"]
    ]) },
    { id: "actions", ui: "s_actions", icon: "🏃", words: W([
      ["eat", "🍽️", "吃|खाना|comer|manger|يأكل|খাওয়া|comer|есть|کھانا|makan|essen|食べる"],
      ["drink", "🥤", "喝|पीना|beber|boire|يشرب|পান করা|beber|пить|پینا|minum|trinken|飲む"],
      ["sleep", "🛌", "睡觉|सोना|dormir|dormir|ينام|ঘুমানো|dormir|спать|سونا|tidur|schlafen|寝る"],
      ["go", "🚶", "去|जाना|ir|aller|يذهب|যাওয়া|ir|идти|جانا|pergi|gehen|行く"],
      ["read", "📰", "读|पढ़ना|leer|lire|يقرأ|পড়া|ler|читать|پڑھنا|membaca|lesen|読む"],
      ["write", "✍️", "写|लिखना|escribir|écrire|يكتب|লেখা|escrever|писать|لکھنا|menulis|schreiben|書く"],
      ["speak", "🗣️", "说|बोलना|hablar|parler|يتكلّم|বলা|falar|говорить|بولنا|berbicara|sprechen|話す"],
      ["listen", "🎧", "听|सुनना|escuchar|écouter|يستمع|শোনা|ouvir|слушать|سننا|mendengarkan|zuhören|聞く"],
      ["work", "💼", "工作|काम करना|trabajar|travailler|يعمل|কাজ করা|trabalhar|работать|کام کرنا|bekerja|arbeiten|働く"],
      ["play", "⚽", "玩|खेलना|jugar|jouer|يلعب|খেলা|jogar|играть|کھیلنا|bermain|spielen|遊ぶ"]
    ]) }
  ];

  /* ---------- survival phrases ---------- */
  var PHRASES = [
    ["Hello.", "👋", "你好。|नमस्ते।|Hola.|Bonjour.|مرحبًا.|হ্যালো।|Olá.|Здравствуйте.|ہیلو۔|Halo.|Hallo.|こんにちは。"],
    ["Goodbye.", "👋", "再见。|अलविदा।|Adiós.|Au revoir.|مع السلامة.|বিদায়।|Tchau.|До свидания.|خدا حافظ۔|Selamat tinggal.|Auf Wiedersehen.|さようなら。"],
    ["Please.", "🙏", "请。|कृपया।|Por favor.|S'il vous plaît.|من فضلك.|দয়া করে।|Por favor.|Пожалуйста.|براہ کرم۔|Tolong.|Bitte.|お願いします。"],
    ["Thank you.", "😊", "谢谢。|धन्यवाद।|Gracias.|Merci.|شكرًا.|ধন্যবাদ।|Obrigado.|Спасибо.|شکریہ۔|Terima kasih.|Danke.|ありがとう。"],
    ["Sorry.", "😔", "对不起。|माफ़ कीजिए।|Lo siento.|Désolé.|آسف.|দুঃখিত।|Desculpe.|Простите.|معاف کیجیے۔|Maaf.|Entschuldigung.|ごめんなさい。"],
    ["Yes.", "✅", "是。|हाँ।|Sí.|Oui.|نعم.|হ্যাঁ।|Sim.|Да.|ہاں۔|Ya.|Ja.|はい。"],
    ["No.", "❌", "不。|नहीं।|No.|Non.|لا.|না।|Não.|Нет.|نہیں۔|Tidak.|Nein.|いいえ。"],
    ["My name is …", "🙋", "我叫……|मेरा नाम … है।|Me llamo …|Je m'appelle …|اسمي …|আমার নাম …|Meu nome é …|Меня зовут …|میرا نام … ہے۔|Nama saya …|Ich heiße …|私の名前は…です。"],
    ["What is your name?", "❓", "你叫什么名字？|आपका नाम क्या है?|¿Cómo te llamas?|Comment tu t'appelles ?|ما اسمك؟|তোমার নাম কী?|Qual é o seu nome?|Как вас зовут?|آپ کا نام کیا ہے؟|Siapa namamu?|Wie heißt du?|お名前は何ですか？"],
    ["Nice to meet you.", "🤝", "很高兴认识你。|आपसे मिलकर खुशी हुई।|Mucho gusto.|Enchanté.|سعيد بلقائك.|তোমার সাথে দেখা হয়ে ভালো লাগলো।|Prazer em conhecer você.|Приятно познакомиться.|آپ سے مل کر خوشی ہوئی۔|Senang bertemu denganmu.|Freut mich.|はじめまして。"],
    ["I am from …", "🌍", "我来自……|मैं … से हूँ।|Soy de …|Je viens de …|أنا من …|আমি … থেকে এসেছি।|Eu sou de …|Я из …|میں … سے ہوں۔|Saya dari …|Ich komme aus …|私は…から来ました。"],
    ["I don't understand.", "🤔", "我不明白。|मुझे समझ नहीं आया।|No entiendo.|Je ne comprends pas.|لا أفهم.|আমি বুঝতে পারছি না।|Não entendo.|Я не понимаю.|مجھے سمجھ نہیں آیا۔|Saya tidak mengerti.|Ich verstehe nicht.|わかりません。"],
    ["Please speak slowly.", "🐢", "请说慢一点。|कृपया धीरे बोलिए।|Por favor, habla despacio.|Parlez lentement, s'il vous plaît.|من فضلك تكلّم ببطء.|দয়া করে আস্তে বলো।|Por favor, fale devagar.|Говорите медленнее, пожалуйста.|براہ کرم آہستہ بولیں۔|Tolong bicara pelan-pelan.|Bitte sprich langsam.|ゆっくり話してください。"],
    ["Can you help me?", "🆘", "你能帮我吗？|क्या आप मेरी मदद कर सकते हैं?|¿Puedes ayudarme?|Pouvez-vous m'aider ?|هل يمكنك مساعدتي؟|তুমি কি আমাকে সাহায্য করতে পারবে?|Pode me ajudar?|Вы можете мне помочь?|کیا آپ میری مدد کر سکتے ہیں؟|Bisakah kamu membantu saya?|Kannst du mir helfen?|手伝ってくれますか？"],
    ["Where is the toilet?", "🚻", "厕所在哪里？|शौचालय कहाँ है?|¿Dónde está el baño?|Où sont les toilettes ?|أين الحمّام؟|টয়লেট কোথায়?|Onde fica o banheiro?|Где туалет?|ٹوائلٹ کہاں ہے؟|Di mana toiletnya?|Wo ist die Toilette?|トイレはどこですか？"],
    ["How much is it?", "💵", "多少钱？|यह कितने का है?|¿Cuánto cuesta?|C'est combien ?|بكم هذا؟|এটার দাম কত?|Quanto custa?|Сколько это стоит?|یہ کتنے کا ہے؟|Berapa harganya?|Wie viel kostet das?|いくらですか？"],
    ["I want water, please.", "💧", "请给我水。|मुझे पानी चाहिए, कृपया।|Quiero agua, por favor.|Je voudrais de l'eau, s'il vous plaît.|أريد ماءً، من فضلك.|আমাকে পানি দিন, দয়া করে।|Quero água, por favor.|Дайте воды, пожалуйста.|مجھے پانی چاہیے، براہ کرم۔|Saya mau air, tolong.|Ich möchte Wasser, bitte.|水をください。"],
    ["Excuse me.", "🙋", "打扰一下。|माफ़ कीजिए, सुनिए।|Disculpe.|Excusez-moi.|عفوًا.|মাফ করবেন।|Com licença.|Извините.|سنیے، معاف کیجیے۔|Permisi.|Entschuldigung.|すみません。"],
    ["I don't know.", "🤷", "我不知道。|मुझे नहीं पता।|No sé.|Je ne sais pas.|لا أعرف.|আমি জানি না।|Não sei.|Я не знаю.|مجھے نہیں معلوم۔|Saya tidak tahu.|Ich weiß nicht.|知りません。"],
    ["See you tomorrow.", "🌅", "明天见。|कल मिलते हैं।|Hasta mañana.|À demain.|أراك غدًا.|কাল দেখা হবে।|Até amanhã.|До завтра.|کل ملتے ہیں۔|Sampai jumpa besok.|Bis morgen.|また明日。"]
  ].map(function (r) { return { en: r[0], pic: r[1], tr: T(r[2]) }; });

  /* ---------- "My first sentence": blocks + translations ---------- */
  var SENT = [
    ["I", "am", "happy", "😀", "我很开心。|मैं खुश हूँ।|Estoy feliz.|Je suis content.|أنا سعيد.|আমি খুশি।|Eu estou feliz.|Я счастлив.|میں خوش ہوں۔|Saya senang.|Ich bin glücklich.|私はうれしいです。"],
    ["You", "are", "a teacher", "🧑‍🏫", "你是老师。|आप शिक्षक हैं।|Eres profesor.|Tu es professeur.|أنت معلّم.|তুমি শিক্ষক।|Você é professor.|Ты учитель.|آپ استاد ہیں۔|Kamu seorang guru.|Du bist Lehrer.|あなたは先生です。"],
    ["He", "is", "tired", "🥱", "他很累。|वह थका हुआ है।|Él está cansado.|Il est fatigué.|هو متعب.|সে ক্লান্ত।|Ele está cansado.|Он устал.|وہ تھکا ہوا ہے۔|Dia lelah.|Er ist müde.|彼はつかれています。"],
    ["She", "is", "my friend", "🤝", "她是我的朋友。|वह मेरी दोस्त है।|Ella es mi amiga.|Elle est mon amie.|هي صديقتي.|সে আমার বন্ধু।|Ela é minha amiga.|Она моя подруга.|وہ میری دوست ہے۔|Dia temanku.|Sie ist meine Freundin.|彼女は私の友だちです。"],
    ["It", "is", "red", "🔴", "它是红色的。|यह लाल है।|Es rojo.|C'est rouge.|إنه أحمر.|এটা লাল।|É vermelho.|Он красный.|یہ لال ہے۔|Itu merah.|Es ist rot.|それは赤です。"],
    ["We", "are", "hungry", "😋", "我们饿了。|हम भूखे हैं।|Tenemos hambre.|Nous avons faim.|نحن جائعون.|আমরা ক্ষুধার্ত।|Estamos com fome.|Мы голодны.|ہم بھوکے ہیں۔|Kami lapar.|Wir haben Hunger.|私たちはおなかがすいています。"],
    ["They", "are", "at school", "🏫", "他们在学校。|वे स्कूल में हैं।|Están en la escuela.|Ils sont à l'école.|هم في المدرسة.|তারা স্কুলে আছে।|Eles estão na escola.|Они в школе.|وہ اسکول میں ہیں۔|Mereka di sekolah.|Sie sind in der Schule.|彼らは学校にいます。"]
  ].map(function (r) { return { w: [r[0], r[1], r[2]], pic: r[3], tr: T(r[4]) }; });
  var VERB = [
    ["I", "eat", "rice", "🍚", "我吃米饭。|मैं चावल खाता हूँ।|Yo como arroz.|Je mange du riz.|أنا آكل الأرز.|আমি ভাত খাই।|Eu como arroz.|Я ем рис.|میں چاول کھاتا ہوں۔|Saya makan nasi.|Ich esse Reis.|私はごはんを食べます。"],
    ["She", "drinks", "tea", "🍵", "她喝茶。|वह चाय पीती है।|Ella bebe té.|Elle boit du thé.|هي تشرب الشاي.|সে চা পান করে।|Ela bebe chá.|Она пьёт чай.|وہ چائے پیتی ہے۔|Dia minum teh.|Sie trinkt Tee.|彼女はお茶を飲みます。"],
    ["He", "reads", "a book", "📖", "他读书。|वह किताब पढ़ता है।|Él lee un libro.|Il lit un livre.|هو يقرأ كتابًا.|সে বই পড়ে।|Ele lê um livro.|Он читает книгу.|وہ کتاب پڑھتا ہے۔|Dia membaca buku.|Er liest ein Buch.|彼は本を読みます。"],
    ["They", "play", "football", "⚽", "他们踢足球。|वे फ़ुटबॉल खेलते हैं।|Ellos juegan al fútbol.|Ils jouent au foot.|هم يلعبون كرة القدم.|তারা ফুটবল খেলে।|Eles jogam futebol.|Они играют в футбол.|وہ فٹبال کھیلتے ہیں۔|Mereka bermain sepak bola.|Sie spielen Fußball.|彼らはサッカーをします。"]
  ].map(function (r) { return { w: [r[0], r[1], r[2]], pic: r[3], tr: T(r[4]) }; });

  /* ---------- alphabet (British letter names) ---------- */
  var ABC = [["A","ay","apple","🍎"],["B","bee","banana","🍌"],["C","see","car","🚗"],["D","dee","door","🚪"],["E","ee","egg","🥚"],["F","eff","fish","🐟"],["G","jee","girl","👧"],["H","aitch","house","🏠"],["I","eye","ice","🧊"],["J","jay","juice","🧃"],["K","kay","key","🔑"],["L","el","lion","🦁"],["M","em","milk","🥛"],["N","en","nose","👃"],["O","oh","orange","🍊"],["P","pee","phone","📱"],["Q","cue","queen","👑"],["R","ar","rice","🍚"],["S","ess","school","🏫"],["T","tee","tea","🍵"],["U","you","umbrella","☂️"],["V","vee","van","🚐"],["W","double you","water","💧"],["X","ex","box","📦"],["Y","why","yellow","🟡"],["Z","zed","zebra","🦓"]];

  return { LANGS: LANGS, UI: UI, SETS: SETS, PHRASES: PHRASES, SENT: SENT, VERB: VERB, ABC: ABC };
})();
