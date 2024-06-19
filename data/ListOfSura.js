const ListOfSura = [
    {
        id: 1,
        name: "الفاتحة",
        transliteration: "Al-Fatihah",
        translation: "সূচনা",
        type: "meccan",
        total_verses: 7
    },
    {
        id: 2,
        name: "البقرة",
        transliteration: "Al-Baqarah",
        translation: "বকনা-বাছুর",
        type: "medinan",
        total_verses: 286
    },
    {
        id: 3,
        name: "آل عمران",
        transliteration: "Ali 'Imran",
        translation: "ইমরানের পরিবার",
        type: "medinan",
        total_verses: 200
    },
    {
        id: 4,
        name: "النساء",
        transliteration: "An-Nisa",
        translation: "নারী",
        type: "medinan",
        total_verses: 176
    },
    {
        id: 5,
        name: "المائدة",
        transliteration: "Al-Ma'idah",
        translation: "খাদ্য পরিবেশিত টেবিল",
        type: "medinan",
        total_verses: 120
    },
    {
        id: 6,
        name: "الأنعام",
        transliteration: "Al-An'am",
        translation: "গৃহপালিত পশু",
        type: "meccan",
        total_verses: 165
    },
    {
        id: 7,
        name: "الأعراف",
        transliteration: "Al-A'raf",
        translation: "উচু স্থান",
        type: "meccan",
        total_verses: 206
    },
    {
        id: 8,
        name: "الأنفال",
        transliteration: "Al-Anfal",
        translation: "যুদ্ধ-লব্ধ ধনসম্পদ",
        type: "medinan",
        total_verses: 75
    },
    {
        id: 9,
        name: "التوبة",
        transliteration: "At-Tawbah",
        translation: "অনুশোচনা",
        type: "medinan",
        total_verses: 129
    },
    {
        id: 10,
        name: "يونس",
        transliteration: "Yunus",
        translation: "নবী ইউনুস",
        type: "meccan",
        total_verses: 109
    },
    {
        id: 11,
        name: "هود",
        transliteration: "Hud",
        translation: "নবী হুদ",
        type: "meccan",
        total_verses: 123
    },
    {
        id: 12,
        name: "يوسف",
        transliteration: "Yusuf",
        translation: "নবী ইউসুফ",
        type: "meccan",
        total_verses: 111
    },
    {
        id: 13,
        name: "الرعد",
        transliteration: "Ar-Ra'd",
        translation: "বজ্রপাত",
        type: "medinan",
        total_verses: 43
    },
    {
        id: 14,
        name: "ابراهيم",
        transliteration: "Ibrahim",
        translation: "নবী ইবরাহীম",
        type: "meccan",
        total_verses: 52
    },
    {
        id: 15,
        name: "الحجر",
        transliteration: "Al-Hijr",
        translation: "পাথুরে পাহাড়",
        type: "meccan",
        total_verses: 99
    },
    {
        id: 16,
        name: "النحل",
        transliteration: "An-Nahl",
        translation: "মৌমাছি",
        type: "meccan",
        total_verses: 128
    },
    {
        id: 17,
        name: "الإسراء",
        transliteration: "Al-Isra",
        translation: "ইহুদি জাতি",
        type: "meccan",
        total_verses: 111
    },
    {
        id: 18,
        name: "الكهف",
        transliteration: "Al-Kahf",
        translation: "গুহা",
        type: "meccan",
        total_verses: 110
    },
    {
        id: 19,
        name: "مريم",
        transliteration: "Maryam",
        translation: "মারইয়াম (ঈসা নবীর মা)",
        type: "meccan",
        total_verses: 98
    },
    {
        id: 20,
        name: "طه",
        transliteration: "Taha",
        translation: "ত়া হা",
        type: "meccan",
        total_verses: 135
    },
    {
        id: 21,
        name: "الأنبياء",
        transliteration: "Al-Anbya",
        translation: "নবীগণ",
        type: "meccan",
        total_verses: 112
    },
    {
        id: 22,
        name: "الحج",
        transliteration: "Al-Hajj",
        translation: "হ়াজ্জ",
        type: "medinan",
        total_verses: 78
    },
    {
        id: 23,
        name: "المؤمنون",
        transliteration: "Al-Mu'minun",
        translation: "বিশ্বাসী",
        type: "meccan",
        total_verses: 118
    },
    {
        id: 24,
        name: "النور",
        transliteration: "An-Nur",
        translation: "আলো",
        type: "medinan",
        total_verses: 64
    },
    {
        id: 25,
        name: "الفرقان",
        transliteration: "Al-Furqan",
        translation: "মানদণ্ড",
        type: "meccan",
        total_verses: 77
    },
    {
        id: 26,
        name: "الشعراء",
        transliteration: "Ash-Shu'ara",
        translation: "কবি",
        type: "meccan",
        total_verses: 227
    },
    {
        id: 27,
        name: "النمل",
        transliteration: "An-Naml",
        translation: "পিঁপড়া",
        type: "meccan",
        total_verses: 93
    },
    {
        id: 28,
        name: "القصص",
        transliteration: "Al-Qasas",
        translation: "কাহিনি",
        type: "meccan",
        total_verses: 88
    },
    {
        id: 29,
        name: "العنكبوت",
        transliteration: "Al-'Ankabut",
        translation: "মাকড়শা",
        type: "meccan",
        total_verses: 69
    },
    {
        id: 30,
        name: "الروم",
        transliteration: "Ar-Rum",
        translation: "রোমান জাতি",
        type: "meccan",
        total_verses: 60
    },
    {
        id: 31,
        name: "لقمان",
        transliteration: "Luqman",
        translation: "এক জ্ঞানী ব্যাক্তি",
        type: "meccan",
        total_verses: 34
    },
    {
        id: 32,
        name: "السجدة",
        transliteration: "As-Sajdah",
        translation: "সিজদা",
        type: "meccan",
        total_verses: 30
    },
    {
        id: 33,
        name: "الأحزاب",
        transliteration: "Al-Ahzab",
        translation: "জোট",
        type: "medinan",
        total_verses: 73
    },
    {
        id: 34,
        name: "سبإ",
        transliteration: "Saba",
        translation: "রানী সাবা/শেবা",
        type: "meccan",
        total_verses: 54
    },
    {
        id: 35,
        name: "فاطر",
        transliteration: "Fatir",
        translation: "আদি স্রষ্টা",
        type: "meccan",
        total_verses: 45
    },
    {
        id: 36,
        name: "يس",
        transliteration: "Ya-Sin",
        translation: "ইয়াসীন",
        type: "meccan",
        total_verses: 83
    },
    {
        id: 37,
        name: "الصافات",
        transliteration: "As-Saffat",
        translation: "সারিবদ্ধভাবে দাঁড়ানো",
        type: "meccan",
        total_verses: 182
    },
    {
        id: 38,
        name: "ص",
        transliteration: "Sad",
        translation: "আরবি বর্ণ সাদ",
        type: "meccan",
        total_verses: 88
    },
    {
        id: 39,
        name: "الزمر",
        transliteration: "Az-Zumar",
        translation: "দলবদ্ধ জনতা",
        type: "meccan",
        total_verses: 75
    },
    {
        id: 40,
        name: "غافر",
        transliteration: "Ghafir",
        translation: "ক্ষমাকারী",
        type: "meccan",
        total_verses: 85
    },
    {
        id: 41,
        name: "فصلت",
        transliteration: "Fussilat",
        translation: "সুস্পষ্ট বিবরণ",
        type: "meccan",
        total_verses: 54
    },
    {
        id: 42,
        name: "الشورى",
        transliteration: "Ash-Shuraa",
        translation: "পরামর্শ",
        type: "meccan",
        total_verses: 53
    },
    {
        id: 43,
        name: "الزخرف",
        transliteration: "Az-Zukhruf",
        translation: "সোনাদানা",
        type: "meccan",
        total_verses: 89
    },
    {
        id: 44,
        name: "الدخان",
        transliteration: "Ad-Dukhan",
        translation: "ধোঁয়া",
        type: "meccan",
        total_verses: 59
    },
    {
        id: 45,
        name: "الجاثية",
        transliteration: "Al-Jathiyah",
        translation: "নতজানু",
        type: "meccan",
        total_verses: 37
    },
    {
        id: 46,
        name: "الأحقاف",
        transliteration: "Al-Ahqaf",
        translation: "বালুর পাহাড়",
        type: "meccan",
        total_verses: 35
    },
    {
        id: 47,
        name: "محمد",
        transliteration: "Muhammad",
        translation: "নবী মুহাম্মদ",
        type: "medinan",
        total_verses: 38
    },
    {
        id: 48,
        name: "الفتح",
        transliteration: "Al-Fath",
        translation: "বিজয়",
        type: "medinan",
        total_verses: 29
    },
    {
        id: 49,
        name: "الحجرات",
        transliteration: "Al-Hujurat",
        translation: "আবাস",
        type: "medinan",
        total_verses: 18
    },
    {
        id: 50,
        name: "ق",
        transliteration: "Qaf",
        translation: "কাফ",
        type: "meccan",
        total_verses: 45
    },
    {
        id: 51,
        name: "الذاريات",
        transliteration: "Adh-Dhariyat",
        translation: "বিক্ষেপকারী বাতাস",
        type: "meccan",
        total_verses: 60
    },
    {
        id: 52,
        name: "الطور",
        transliteration: "At-Tur",
        translation: "পাহাড়",
        type: "meccan",
        total_verses: 49
    },
    {
        id: 53,
        name: "النجم",
        transliteration: "An-Najm",
        translation: "তারা",
        type: "meccan",
        total_verses: 62
    },
    {
        id: 54,
        name: "القمر",
        transliteration: "Al-Qamar",
        translation: "চাঁদ",
        type: "meccan",
        total_verses: 55
    },
    {
        id: 55,
        name: "الرحمن",
        transliteration: "Ar-Rahman",
        translation: "পরম করুণাময়",
        type: "medinan",
        total_verses: 78
    },
    {
        id: 56,
        name: "الواقعة",
        transliteration: "Al-Waqi'ah",
        translation: "নিশ্চিত ঘটনা",
        type: "meccan",
        total_verses: 96
    },
    {
        id: 57,
        name: "الحديد",
        transliteration: "Al-Hadid",
        translation: "লোহা",
        type: "medinan",
        total_verses: 29
    },
    {
        id: 58,
        name: "المجادلة",
        transliteration: "Al-Mujadila",
        translation: "অনুযোগকারিণী",
        type: "medinan",
        total_verses: 22
    },
    {
        id: 59,
        name: "الحشر",
        transliteration: "Al-Hashr",
        translation: "সমাবেশ",
        type: "medinan",
        total_verses: 24
    },
    {
        id: 60,
        name: "الممتحنة",
        transliteration: "Al-Mumtahanah",
        translation: "নারী, যাকে পরীক্ষা করা হবে",
        type: "medinan",
        total_verses: 13
    },
    {
        id: 61,
        name: "الصف",
        transliteration: "As-Saf",
        translation: "সারিবদ্ধ সৈন্যদল",
        type: "medinan",
        total_verses: 14
    },
    {
        id: 62,
        name: "الجمعة",
        transliteration: "Al-Jumu'ah",
        translation: "সম্মেলন/শুক্রবার",
        type: "medinan",
        total_verses: 11
    },
    {
        id: 63,
        name: "المنافقون",
        transliteration: "Al-Munafiqun",
        translation: "ভণ্ড বিশ্বাসী",
        type: "medinan",
        total_verses: 11
    },
    {
        id: 64,
        name: "التغابن",
        transliteration: "At-Taghabun",
        translation: "মোহ অপসারণ",
        type: "medinan",
        total_verses: 18
    },
    {
        id: 65,
        name: "الطلاق",
        transliteration: "At-Talaq",
        translation: "তালাক",
        type: "medinan",
        total_verses: 12
    },
    {
        id: 66,
        name: "التحريم",
        transliteration: "At-Tahrim",
        translation: "নিষিদ্ধকরণ",
        type: "medinan",
        total_verses: 12
    },
    {
        id: 67,
        name: "الملك",
        transliteration: "Al-Mulk",
        translation: "সার্বভৌম কর্তৃত্ব",
        type: "meccan",
        total_verses: 30
    },
    {
        id: 68,
        name: "القلم",
        transliteration: "Al-Qalam",
        translation: "কলম",
        type: "meccan",
        total_verses: 52
    },
    {
        id: 69,
        name: "الحاقة",
        transliteration: "Al-Haqqah",
        translation: "নিশ্চিত সত্য",
        type: "meccan",
        total_verses: 52
    },
    {
        id: 70,
        name: "المعارج",
        transliteration: "Al-Ma'arij",
        translation: "উন্নয়নের সোপান",
        type: "meccan",
        total_verses: 44
    },
    {
        id: 71,
        name: "نوح",
        transliteration: "Nuh",
        translation: "নবী নূহ",
        type: "meccan",
        total_verses: 28
    },
    {
        id: 72,
        name: "الجن",
        transliteration: "Al-Jinn",
        translation: "জিন সম্প্রদায়",
        type: "meccan",
        total_verses: 28
    },
    {
        id: 73,
        name: "المزمل",
        transliteration: "Al-Muzzammil",
        translation: "বস্ত্রাচ্ছাদনকারী",
        type: "meccan",
        total_verses: 20
    },
    {
        id: 74,
        name: "المدثر",
        transliteration: "Al-Muddaththir",
        translation: "পোশাক পরিহিত",
        type: "meccan",
        total_verses: 56
    },
    {
        id: 75,
        name: "القيامة",
        transliteration: "Al-Qiyamah",
        translation: "পুনরুত্থান",
        type: "meccan",
        total_verses: 40
    },
    {
        id: 76,
        name: "الانسان",
        transliteration: "Al-Insan",
        translation: "মানবজাতি",
        type: "medinan",
        total_verses: 31
    },
    {
        id: 77,
        name: "المرسلات",
        transliteration: "Al-Mursalat",
        translation: "প্রেরিত পুরুষ",
        type: "meccan",
        total_verses: 50
    },
    {
        id: 78,
        name: "النبإ",
        transliteration: "An-Naba",
        translation: "মহাসংবাদ",
        type: "meccan",
        total_verses: 40
    },
    {
        id: 79,
        name: "النازعات",
        transliteration: "An-Nazi'at",
        translation: "প্রচেষ্টাকারী",
        type: "meccan",
        total_verses: 46
    },
    {
        id: 80,
        name: "عبس",
        transliteration: "'Abasa",
        translation: "সে ভ্রু কুঁচকালো",
        type: "meccan",
        total_verses: 42
    },
    {
        id: 81,
        name: "التكوير",
        transliteration: "At-Takwir",
        translation: "অন্ধকারাচ্ছন্ন",
        type: "meccan",
        total_verses: 29
    },
    {
        id: 82,
        name: "الإنفطار",
        transliteration: "Al-Infitar",
        translation: "বিদীর্ণ করা",
        type: "meccan",
        total_verses: 19
    },
    {
        id: 83,
        name: "المطففين",
        transliteration: "Al-Mutaffifin",
        translation: "প্রতারণা করা",
        type: "meccan",
        total_verses: 36
    },
    {
        id: 84,
        name: "الإنشقاق",
        transliteration: "Al-Inshiqaq",
        translation: "খণ্ড-বিখণ্ডকরণ",
        type: "meccan",
        total_verses: 25
    },
    {
        id: 85,
        name: "البروج",
        transliteration: "Al-Buruj",
        translation: "নক্ষত্রপুঞ্জ",
        type: "meccan",
        total_verses: 22
    },
    {
        id: 86,
        name: "الطارق",
        transliteration: "At-Tariq",
        translation: "রাতের আগন্তুক",
        type: "meccan",
        total_verses: 17
    },
    {
        id: 87,
        name: "الأعلى",
        transliteration: "Al-A'la",
        translation: "সর্বোন্নত",
        type: "meccan",
        total_verses: 19
    },
    {
        id: 88,
        name: "الغاشية",
        transliteration: "Al-Ghashiyah",
        translation: "বিহ্বলকর ঘটনা",
        type: "meccan",
        total_verses: 26
    },
    {
        id: 89,
        name: "الفجر",
        transliteration: "Al-Fajr",
        translation: "ভোরবেলা",
        type: "meccan",
        total_verses: 30
    },
    {
        id: 90,
        name: "البلد",
        transliteration: "Al-Balad",
        translation: "নগর",
        type: "meccan",
        total_verses: 20
    },
    {
        id: 91,
        name: "الشمس",
        transliteration: "Ash-Shams",
        translation: "সূর্য",
        type: "meccan",
        total_verses: 15
    },
    {
        id: 92,
        name: "الليل",
        transliteration: "Al-Layl",
        translation: "রাত",
        type: "meccan",
        total_verses: 21
    },
    {
        id: 93,
        name: "الضحى",
        transliteration: "Ad-Duhaa",
        translation: "পূর্বাহ্নের সুর্যকিরণ",
        type: "meccan",
        total_verses: 11
    },
    {
        id: 94,
        name: "الشرح",
        transliteration: "Ash-Sharh",
        translation: "বক্ষ প্রশস্তকরণ",
        type: "meccan",
        total_verses: 8
    },
    {
        id: 95,
        name: "التين",
        transliteration: "At-Tin",
        translation: "ডুমুর",
        type: "meccan",
        total_verses: 8
    },
    {
        id: 96,
        name: "العلق",
        transliteration: "Al-'Alaq",
        translation: "রক্তপিণ্ড",
        type: "meccan",
        total_verses: 19
    },
    {
        id: 97,
        name: "القدر",
        transliteration: "Al-Qadr",
        translation: "মহিমান্বিত",
        type: "meccan",
        total_verses: 5
    },
    {
        id: 98,
        name: "البينة",
        transliteration: "Al-Bayyinah",
        translation: "প্রমাণ",
        type: "medinan",
        total_verses: 8
    },
    {
        id: 99,
        name: "الزلزلة",
        transliteration: "Az-Zalzalah",
        translation: "ভূমিকম্প",
        type: "medinan",
        total_verses: 8
    },
    {
        id: 100,
        name: "العاديات",
        transliteration: "Al-'Adiyat",
        translation: "অভিযানকারী",
        type: "meccan",
        total_verses: 11
    },
    {
        id: 101,
        name: "القارعة",
        transliteration: "Al-Qari'ah",
        translation: "মহাসংকট",
        type: "meccan",
        total_verses: 11
    },
    {
        id: 102,
        name: "التكاثر",
        transliteration: "At-Takathur",
        translation: "প্রাচুর্যের প্রতিযোগিতা",
        type: "meccan",
        total_verses: 8
    },
    {
        id: 103,
        name: "العصر",
        transliteration: "Al-'Asr",
        translation: "সময়",
        type: "meccan",
        total_verses: 3
    },
    {
        id: 104,
        name: "الهمزة",
        transliteration: "Al-Humazah",
        translation: "পরনিন্দাকারী",
        type: "meccan",
        total_verses: 9
    },
    {
        id: 105,
        name: "الفيل",
        transliteration: "Al-Fil",
        translation: "হাতি",
        type: "meccan",
        total_verses: 5
    },
    {
        id: 106,
        name: "قريش",
        transliteration: "Quraysh",
        translation: "কুরাইশ গোত্র",
        type: "meccan",
        total_verses: 4
    },
    {
        id: 107,
        name: "الماعون",
        transliteration: "Al-Ma'un",
        translation: "সাহায্য সহায়তা",
        type: "meccan",
        total_verses: 7
    },
    {
        id: 108,
        name: "الكوثر",
        transliteration: "Al-Kawthar",
        translation: "কাউসার/প্রাচুর্য",
        type: "meccan",
        total_verses: 3
    },
    {
        id: 109,
        name: "الكافرون",
        transliteration: "Al-Kafirun",
        translation: "অবিশ্বাসী",
        type: "meccan",
        total_verses: 6
    },
    {
        id: 110,
        name: "النصر",
        transliteration: "An-Nasr",
        translation: "সাহায্য",
        type: "medinan",
        total_verses: 3
    },
    {
        id: 111,
        name: "المسد",
        transliteration: "Al-Masad",
        translation: "খেজুরের পাকানো (রশি)",
        type: "meccan",
        total_verses: 5
    },
    {
        id: 112,
        name: "الإخلاص",
        transliteration: "Al-Ikhlas",
        translation: "আন্তরিকতা",
        type: "meccan",
        total_verses: 4
    },
    {
        id: 113,
        name: "الفلق",
        transliteration: "Al-Falaq",
        translation: "নিশিভোর",
        type: "meccan",
        total_verses: 5
    },
    {
        id: 114,
        name: "الناس",
        transliteration: "An-Nas",
        translation: "মানুষ জাতি",
        type: "meccan",
        total_verses: 6
    }
]

export default ListOfSura;