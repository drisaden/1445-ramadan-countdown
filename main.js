const contented = [
    {
        id: 1,
        sub: "Authentic Dua for Breaking Fast",
        arb: "ذَهَبَ الظَمَأُ،وَابْتَلْتِ الْعُرُوقُ، وَثَبَتِ الْأَجْرُ إِنْ شَاءَ اللَّهُ تَعَالَي",
        translt: "Dhahabadh dhoma-u, wa abtalatil 'uruuq wa thabatal- ajr in sha Allaah",
        mng: "The Thirst is gone, the veins are moistened, and the reward has been earned if Allah wills",
        ref: "(Hadith Abu Dawud 2357)"
    },
    {
        id: 2,
        sub:"Dua For Protection from the grave, Trials and Dajjal",
        arb: "اللَّهُمَّ إِنِّي أَعُوذُبِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ جَهَنَّمَ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
        translt: "Allahumma 'innee 'a'uuthu bika min adhaabil-qabri, wa min adhaabil jahannam, wa min fitnatil-mahyaa walmamaati, wa min sharri fitnatil-maseehid-dajaal",
        mng: "O Allah! I seek refuge with Thee from the torment of the Hell, from the torment of the grave, from the trial of life and death and from the evil of the trial of the False Messial",
        ref: "(Sahih Muslim 588a)"
    },
    {
        id: 3,
        sub:"Dua Against Entering Fire<br/>Dua For Seeking Paradise",
        arb: " اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةُ<br/> اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ",
        translt: "*Allahumma Ajirni minan-naar<br />*Allahumma inni as'alukal-jannah",
        mng: "*O Allah, save me from the fire (Jahannam) <br />*O Allah, I ask You for Paradise",
        ref: "(Tirmidhi, Inb Majah & An-Nasa)"
    },
    {
        id: 4,
        sub:"Dua for acceptance of Deeds",
        arb: "رَبَنَّا تَقَبَّلْ مِنَّا  إِنّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
        translt: "Rabbana taqabbal minna, innaka antas Sami'ul -Alim",
        mng: "Our Lord! Accept (this service) from us",
        ref: "(Qur'an 2:127)"
    },
    {
        id: 5,
        sub:"Dua before entering toilet",
        arb: "اللَّهُمُّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَباَءِثِ",
        translt: "Allahumma innee a'uudhu bika minal-khutubhi wal-khabaa'ith",
        mng: "O Allah,I seek refuge with you from all evil-doers",
        ref: "(Muslim 375)"
    }, 
    
    {
        id: 6,
        sub:"Dua for many things",
        arb: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَا، والتُّقَي وَالْعَفَافَ، وَالْغِنَي",
        translt: "Allahumma inni as'aluka-huda, wat-tuqo, wal-'afafa, wal-ghina",
        mng: "O Allah! I beseech You for guidance, piety, chastity and contentment.",
        ref: "(Muslim)"
    },
    {
        id: 7,
        sub:"Dua for Jannah",
        arb: "رَبِّ ابْنِ لِي عِندَكَ بَيْتًا فِي الْجَنَّةِ",
        translt: "Rabbi ibni lee 'indaka baytan fiil-jannah",
        mng: "My Lord, build for me near You a house in Paradise",
        ref: "(Qur'an 66:11)"
    },
    {
        id: 8,
        sub:"Dua for leaving the Masjid",
        arb: "السَّلَامُ عَلي رَسُولِ اللهِ، اللّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
        translt: "As-salaamu 'alaa rosuul-lil-laah, Allahumma innee as'aluke min fad-lik",
        mng: "Peace be upon the Messsenger of Allah. O Allah, I ask You from Your Favour",
        ref: "(Abu Dawud 465)"
    },
    {
        id: 9,
        sub:"Dua for entering the Masjid",
        arb: "السَّلَامُ عَلي رَسُولِ اللهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
        translt: "As-salaamu 'alaa rosuulillaah, Allahumma-maf-tah lee abwaaba rahmatik",
        mng: "Peace be upon the Messenger of Allah. O Allah, Open for the gates of Your Mercy",
        ref: "(Abu Dawud 465)"
    },
    {
        id: 10,
        sub:"Dua when in Difficulty",
        arb: "يَا حَيُّ يَا قَيٌومُ بِرَحْمَتِكَ أَسْتَغِيثْ",
        translt: "Ya Hayyu Ya Qayyum, bi Rahmatika astagheeth",
        mng: "O Living, O Substaining, in You I seek relief!",
        ref: "(Sunan Tirmidhi, 3600)"
    },
    {
        id: 11,
        sub:"Dua before Sleep",
        arb: "بِاسْمِكَ أَمُوتُ وَأَحْيَا",
        translt: "Bismika amutu wa ahya",
        mng: "In Your name Oh Allah, I live and I die",
        ref: "(Sahih al-Bukhari 6312)"
    },
    {
        id: 12,
        sub:"Dua after awakened from sleep",
        arb: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
        translt: "Alhamdulillaahi ladhi ahyaana ba'da ma amataana wa ilaihin-nushuur",
        mng: "All praise be to Allah, who gave us life after killing us (sleep is a form of death) and to Him will we be raised and returned",
        ref: "(Sahih al-Bukhari 6312)"
    },
    {
        id: 13,
        sub:"Dua for good Knowledge/ Provision/ Deeds",
        arb: "اللَّهُمَّ إِنِي أَسْأَلُكَ عِلْمًا نَافِعًا، وَ رِزْقًا طَيِّبًا، وَ عَمَلاً مُتَقَبَّلاً",
        translt: "Allahumma innee as'aluka 'ilman naafi'an, wa 'amalan",
        mng: "In Your name Oh Allah, I live and I die",
        ref: "(Sahih al-Bukhari 6312)"
    },
    {
        id: 14,
        sub:"Dua after every salah",
        arb: "اللَّهُمَّ أَعِنِي عَلَي ذِكْرِكَ، وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
        translt: "Allahumma a'innee 'ala dhikrika, wa shukrika, wa husni i'badatika",
        mng: "O Allah,help me remember You, to be grateful to You, and to worship You in an excellent manner",
        ref: "(Abu Dawud 1422)"
    },
    {
        id: 15,
        sub:"Dua for Firmness in Religion",
        arb: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَي  دِيْنِكَ",
        translt: "Yaa Muqallibal Quloob Thabbit Qalbee 'alaa Deenik.",
        mng: "Oh Turner of the hearts, keep my heart firm upon your religion.",
        ref: "(Saheeh Muslim 6418)"
    },
    {
        id: 16,
        sub:"Dua Against a wrong company",
        arb: "رَبَّنَا لَا تَجْعَلْنَا مَعَ الْقَوْمِ الظَّا لِمِينَ",
        translt: "Rabbana la taj'alna ma'al qawwmi-dhalimeen",
        mng: "Our Lord! Send us not to the company of the wrong-doers.",
        ref: "(Qur'an 7:47)"
    },
    {
        id: 17,
        sub:"Dua not to fall in error",
        arb: "رَبَّنَا لَا تُؤَا خِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا",
        translt: "Rabbana la tu'akhidhna in-nasina aw akhto'naa",
        mng: "Our Lord! Condemn us not if we forget or fall into error.",
        ref: "(Qur'an 2:286)"
    },
    {
        id: 18,
        sub: "Dua to give gratitude to Allah",
        arb: "رَبَّنَا لَغَفُورٌ شَكُورٌ",
        translt: "Rabbana La Ghafurun Shakur",
        mng: `Our Lord is indeed Oft-Forgiving<br />Ready to appreciate (good deeds and to recompense)`,
        ref: "(Qur'an 35:34)"
    },
    {
        id: 19,
        sub:"Dua for Allah to Accept prayers",
        arb: "رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
        translt: "Rabbana wa taqobbal Du'aa",
        mng: "Oh our Lord! And accept my Prayer",
        ref: "(Qur'an 14:40)"
    },
    {
        id: 20,
        sub:"Dua for seeking Goodness",
        arb: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        translt: "Rabbana atina fid-dunya hasanatan wa fil aakhirooti hasanatan waqina 'adhaaban-naar",
        mng: "Our Lord! Give us in this world that which is good and in the Hereafter that which is good, and save us from the torment of the Fire!",
        ref: "(Qur'an 2:201)"
    },
    {
        id: 21,
        sub: "What to say to a family when invited to break your fast with them",
        arb: "أَفْطَـرَ عِنْدَكُم الصّـائِمونَ وَأَكَلَ طَعامَـكُمُ الأبْـرار، وَصَلَّـتْ عَلَـيْكُمُ الملائِكَـة",
        translt: "'Aftaraa 'indakumus-soo'imuuna, wa akala to'aamakuml-aberoor, wasollat alaykumul-malaaikah",
        mng: "With you, those who are fasting have broken their fast, you have fed those who are righteous, and the angels recite their prayers upon you",
        ref: "(Abu Dawud 3/367)"
    },
    {
        id: 22,
        sub: "Say this During Ramadan",
        arb: "اللّهُمّ اجْعَلْ صِيَامِي فِيهِ بِالشّـكْرِ وَالقَبُولِ عَلَى مَا تَرْضَـاهُ وَيَرْضَـاهُ الرّسُول",
        translt: "Alluhumma aj`al siyamy fihi bilshshkri wal-qabuli `ala ma tardahu wa yardahu alrrsulu",
        mng: "O Allah: on this day, (please) decide my observing of fasting on this day to be praiseworthy and approved by that which is pleased by You and Your Messenger",
        ref: ""
    },
    {
        id: 23,
        sub: "Dua to witness Laylatul-Qadr'",
        arb: "اللّهُمّ ارْزُقْنِـي فِيـهِ فَضْـلَ لَيْلَـةِ القَدْر",
        translt: "Allahumma arzuqny fihi fadla laylati alqadri ",
        mng: "O Allah; on this day, (please) provide me with the merits of the Grand Night,",
        ref: ""
    },
    {
        id: 24,
        sub: "Ramadan: A golden opportunity to let your soul flourish",
        arb: "إِنَّآ أَنزَلْنَا عَلَيْكَ ٱلْكِتَـٰبَ لِلنَّاسِ بِٱلْحَقِّ ۖ فَمَنِ ٱهْتَدَىٰ فَلِنَفْسِهِۦ ۖ وَمَن ضَلَّ فَإِنَّمَا يَضِلُّ عَلَيْهَا ۖ وَمَآ أَنتَ عَلَيْهِم بِوَكِيلٍ",
        translt: "",
        mng: "‍We have sent the Scripture down to you with the Truth for people. Whoever follows the guidance does so for his own soul’s benefit…",
        ref: "(Quran. 39:41)"
    },
    {
        id: 25,
        sub: "Remembering Allah (SWT)",
        arb: "عَنْ أَبِي هُرَيْرَةَ ـ رضى الله عنه ـ قَالَ قَالَ النَّبِيُّ صلى الله عليه وسلم يَقُولُ اللَّهُ تَعَالَى أَنَا عِنْدَ ظَنِّ عَبْدِي بِي، وَأَنَا مَعَهُ إِذَا ذَكَرَنِي، فَإِنْ ذَكَرَنِي فِي نَفْسِهِ ذَكَرْتُهُ فِي نَفْسِ",
        translt: "",
        mng: "Narrated Abu Huraira: The Prophet (SAW) said, “Allah says: ‘I am just as My slave thinks I am, and I am with him if He remembers Me...",
        ref: "(Ṣaḥīḥ al-Bukhārī  7405)"
    },
    {
        id: 26,
        sub: "Getting Ready for Ramadan 01",
        arb: "",
        translt: "",
        mng: "Ramadan is the best chance to ask Allah for forgiveness. Thank him for his blessings and for keeping you alive until this moment.",
        ref: "(allnews.ng)"
    },
    {
        id: 27,
        sub: "Getting Ready for Ramadan 02",
        arb: "",
        translt: "",
        mng: "The key to success is reflected in the Qur’an. May we find blessing and guidance as we recite it altogether in the Ramadan days. Happy Ramadan in Advance!",
        ref: "(allnews.ng)"
    },
    {
        id: 28,
        sub: "Getting Ready for Ramadan 03",
        arb: "",
        translt: "",
        mng: "Ramadan is a month of Mercy, Forgiveness, and freedom from the hellfire. You should more and more Pray to Allah. And observe fasting with TAQWA. May this coming Ramadan brings peace in your life.",
        ref: "(allnews.ng)"
    },
    {
        id: 29,
        sub: "Getting Ready for Ramadan 04 <br /> Reward for Reciting Qur'an",
        arb: "",
        translt: "",
        mng: "Whosoever recites only one ‘Ayat’ in Holy Ramadan, he will be awarded as if he had recited the full Qur’an in other months.",
        ref: "Hadith"
    },
    {
        id: 30,
        sub: "Getting Ready for Ramadan 05",
        arb: "",
        translt: "",
        mng: "Allah made you Muslim because he wants to see you in JANNAH. All you have to do is prove that you’re worthy of it. Wishing You a Happy Ramadan Mubarak in advance!",
        ref: ""
    },
    {
        id: 31,
        sub: "Getting Ready for Ramadan 06",
        arb: "How to plan for Ramadan",
        translt: "",
        mng: `<ul><li>1- Prepare for Ramadan fasting. </li><li>2- Maintain nutritious diet. ...</li><li>3- Make a list of duas. ...</li><li>4- Recite and reflect on holy Quran. ...</li><li>5- Adopt good habits. ...</li><li>6- Ramadan Iftar food plan. ...</li><li>7- Plan for Eid ul Fitr. ...</li><li>8- Using Ramadan planner</li></ul>`,
        ref: ""
    },
    {
        id: 32,
        sub: "Getting Ready for Ramadan 07",
        arb: "",
        translt: "",
        mng: "That time of the year is about to come. A month to repent from our wrong-doings and sin. May all of us find peace on this coming Ramadan. Happy Ramadan in advance!",
        ref: ""
    },
    {
        id: 33,
        sub: "Getting Ready for Ramadan 08",
        arb: "",
        translt: "",
        mng: "Whoever stands to pray with ten verses will never be recorded among the negligent. Whoever stands with a hundred verses will recorded among those devoutly obedient to Allah. Whoever stands with a thousand verses will be recorded among those with tremendous rewards.”",
        ref: "(Sunan Abī Dāwūd 1398)"
    },
    {
        id: 34,
        sub: "Getting Ready for Ramadan 09",
        arb: "",
        translt: "",
        mng: "Let’s celebrate as the month of Ramadan begins. Filling our life with happiness and peace, as Allah blesses each and everyone",
        ref: ""
    },
    {
        id: 35,
        sub: "Getting Ready for Ramadan 10",
        arb: "",
        translt: "",
        mng: "Keep the faith. The vision is always for the appointed time. Be patient, prayerful and wait for the fulfilment of your visions. Have a blessed Ramadan ahead!",
        ref: ""
    },
    {
        id: 36,
        sub: "Getting Ready for Ramadan 11",
        arb: "",
        translt: "",
        mng: "As the auspicious month of Ramadan is about to begin, may the crescent-shaped moon brighten your path toward enlightenment and may Allah bless you with peace and grace. Wishing you a Happy Ramadan!",
        ref: ""
    },
    {
        id: 37,
        sub: "Dua for Forgiveness",
        arb: "اللَّهُمَّ إِنَّكَ عَفُوٌ تُحِبُ الْعَفْوَ فَاعَفُ عَنِّي",
        translt: "Allahumma innaka 'afuwwun, tuhibbul-'afwa, fa'fu 'anni",
        mng: "O Allah, You are Most Forgiving, and You love forgiveness; so forgive me",
        ref: "(At-Tirmidhi)"
    }
]

let cd = new Date(2023, 02, 23, 00, 00, 00, 00);
let x = setInterval(() => {

    let current = new Date();
    let diff = cd - current;
    let day = Math.floor(((((diff / 1000) / 60) / 60) / 24));
    let hour = Math.floor((((((diff / 1000) / 60) / 60) / 24) - day) * 24);
    let min = Math.floor((((((((diff / 1000) / 60) / 60) / 24) - day) * 24) - hour) * 60);
    let sec = Math.floor((((((((((diff / 1000) / 60) / 60) / 24) - day) * 24) - hour) * 60) - min) * 60);

    if (day < 10) {
        day = `0${day}`;
    }
    if (hour < 10) {
        hour = `0${hour}`;
    }
    if (min < 10) {
        min = `0${min}`;
    }
    if (sec < 10) {
        sec = `0${sec}`;
    }

    

    document.querySelector("#d").innerHTML = day;
    document.querySelector("#h").innerHTML = hour;
    document.querySelector("#m").innerHTML = min;
    document.querySelector("#s").innerHTML = sec;
    let showDay = document.querySelector("#showDay");
    showDay.innerHTML = day;

    function show(f) {
        let arab = document.querySelector('.arabic');
        let subtitle = document.querySelector('.sub');
        let trnlit = document.querySelector('.transliteration');
        let trans = document.querySelector('.translation');
        let ref = document.querySelector('.ref');
        arab.innerHTML = contented[f].arb;
        trnlit.innerHTML = contented[f].translt;
        trans.innerHTML = contented[f].mng;
        ref.innerHTML = contented[f].ref;
        subtitle.innerHTML = contented[f].sub;
        return f;
    }
    dur = 38;
    if (day == dur - 1) {show(0);}else if (day == dur - 2) {show(1)}else if (day == dur - 3) {show(2)}else if (day == dur - 4) {show(3)}else if (day == dur - 5) {show(4)}else if (day == dur - 6) {show(5)}else if (day == dur - 7) {show(6)}else if (day == dur - 8) {show(7)}else if (day == dur - 9) {show(8)}else if (day == dur - 10) {show(9)}else if (day == dur - 11) {show(10)}else if (day == dur - 12) {show(11)}else if (day == dur - 13) {show(12)}else if (day == dur - 14) {show(13)}else if (day == dur - 15) {show(14)}else if (day == dur - 16) {show(15)}else if (day == dur - 17) {show(16)}else if (day == dur - 18) {show(17)}else if (day == dur - 19) {show(18)}else if (day == dur - 20) {show(19)}else if (day == dur - 21) {show(20)}else if (day == dur - 22) {show(21)}else if (day == dur - 23) {show(22)}else if (day == dur - 24) {show(23)}else if (day == dur - 25) {show(24)}else if (day == dur - 26) {show(25)}else if (day == dur - 27) {show(26)}else if (day == dur - 28) {show(27)}else if (day == dur - 29) {show(28)}else if (day == dur - 30) {show(29)}else if (day == dur - 31) {show(30)}else if (day == dur - 32) {show(31)}else if (day == dur - 33) {show(32)}else if (day == dur - 34) {show(33)}else if (day == dur - 35) {show(34)}else if (day == dur - 36) {show(35)}else if (day == dur - 37) {show(36)}else if (day == dur - 38) {show(37)}
    let pb = document.querySelector('.page-body');
    let cover = document.querySelector('.coverpage');

    if (diff < 0) {
        pb.style.display = "none";
        cover.style.display = "block";
        clearInterval(x);
    }else{
        pb.style.display = "block";
        cover.style.display = "none";

    }

}, 1000);