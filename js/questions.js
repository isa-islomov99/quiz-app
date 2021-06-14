const questions = [
    {
        numb: 1,
        question: "1. Birinchi bo'lib azon aytgan Saxobiy ismlari ?",
        answer: "Bilol R.A",
        options: [
            "Ibn Muoz R.A",
            "Umar R.A",
            "Usmon R.A",
            "Bilol R.A",
        ]
    },
    {
        numb: 2,
        question: "24. Taxoratda nechta farz bor ?",
        answer: "4ta",
        options: [
            "5ta",
            "3ta",
            "4ta",
            "6ta",
        ]
    },
    {
        numb: 3,
        question: "25. G'uslda nechta farz bor ?",
        answer: "3ta",
        options: [
            "4ta",
            "3ta",
            "5ta",
            "6ta",
        ]
    },
    {
        numb: 4,
        question: "11. Oyatal kursi qaysi surada kelgan ?",
        answer: "Baqara",
        options: [
            "Tavba",
            "Moida",
            "Oli Imron",
            "Baqara",
        ]
    },
    {
        numb: 5,
        question: "30. Beshikda yotgan vaqtidayoq gapirgan Payg‘ambar ?",
        answer: "Iso Alayhissalom",
        options: [
            "Yusuf Alayhissalom",
            "Muso Alayhissalom",
            "Iso Alayhissalom",
            "Ibrohim Alayhissalom",
        ]
    },
    {
        numb: 6,
        question: "31. Iso Alayhissalomga nozil bo'lgan kitob ?",
        answer: "Injil",
        options: [
            "Tavrot",
            "Injil",
            "Zabur",
            "Qur'on",
        ]
    },
    {
        numb: 7,
        question: "32. Islomda aza necha kun ?",
        answer: "3 kun",
        options: [
            "3 kun",
            "7 kun",
            "5 kun",
            "30 kun",
        ]
    },
    {
        numb: 8,
        question: "7. Tushida 11ta yulduz quyosh va oyni o'ziga sajda qilayotganini ko'rgan payg'ambar qaysi ?",
        answer: "Yusuf Alayhissalom",
        options: [
            "Ibrohim Alayhissalom",
            "Dovud Alayhissalom",
            "Yunus Alayhissalom",
            "Yusuf Alayhissalom",
        ]
    },
    {
        numb: 9,
        question: "6. Maryam onamiz Yaxho Alayhissalomga kim bo'lgan ?",
        answer: "Xolalari",
        options: [
            "Xolalari",
            "Ammalari",
            "Opalari",
            "Begona",
        ]
    },
    {
        numb: 10,
        question: "27. Fir'avnning ayoli, Jannat saidalaridan bo'lgan ayolning ismi ?",
        answer: "Osiyo",
        options: [
            "Maryam",
            "Sora",
            "Osiyo",
            "Xojar",
        ]
    },
    {
        numb: 11,
        question: "7. Tushida 11ta yulduz quyosh va oyni o'ziga sajda qilayotganini ko'rgan payg'ambar qaysi ?",
        answer: "Yusuf Alayhissalom",
        options: [
            "Ibrohim Alayhissalom",
            "Dovud Alayhissalom",
            "Yunus Alayhissalom",
            "Yusuf Alayhissalom",
        ]
    },
    {
        numb: 12,
        question: "9. Quyidagilar orasidan qaysi Ayolni ismlari Qu'ron da zikri kelgan ?",
        answer: "Maryam onamiz",
        options: [
            "Xadicha onamiz",
            "Maryam onamiz",
            "Oisha onamiz",
            "Osiyo onamiz",
        ]
    },
    {
        numb: 13,
        question: "12. Asadulloh (Allohning arsloni) nomini olgan sahoba kim edi ?",
        answer: "Hamza Ibn Abdumuttalib R.A",
        options: [
            "Abu Bakr Siddiq R.A",
            "Xolid Ibn Valid R.A",
            "Hamza Ibn Abdumuttalib R.A",
            "Umar Ibn Hattob R.A",
        ]
    },
    {
        numb: 14,
        question: "13. Qur'ondagi eng kichik sura ?",
        answer: "Kavsar surasi",
        options: [
            "Ixlos surasi",
            "Kavsar surasi",
            "Asr surasi",
            "Nasr surasi",
        ]
    },
    {
        numb: 15,
        question: "29. Payg‘ambarimiz Sollalohu Alayhi Vasallamning Otalari ismi ?",
        answer: "Abdulloh",
        options: [
            "Abdulmuttalib",
            "Abu Tolib",
            "Hamza",
            "Abdulloh",
        ]
    },
    {
        numb: 16,
        question: "33. Juma kuni qaysi surani o'qish tavsiya qilinadi ?",
        answer: "Kahf surasi",
        options: [
            "Ixlos surasi",
            "Mulk surasi",
            "Kahf surasi",
            "Yasin surasi",
        ]
    },
    {
        numb: 17,
        question: "18. Al-Jome As-Sahih kitobining muallifi kim ?",
        answer: "Imom Buxoriy",
        options: [
            "Imom Termiziy",
            "Imom Abu Dovud",
            "Imom Buxoriy",
            "Imom Muslim",
        ]
    },
    {
        numb: 18,
        question: "19. Islom Tarixida eng yosh islomni qabul qilgan kishi ?",
        answer: "Ali Ibn Abu Tolib R.A",
        options: [
            "Usmon Ibn Affon R.A",
            "Ali Ibn Abu Tolib R.A",
            "Abu Zar R.A",
            "Abu Dardo R.A",
        ]
    },
    {
        numb: 19,
        question: "20. Payg‘ambarimiz Sollalohu Alayhi Vasallamdan keyin ummat orasida 1-Jannatga kiradigan inson ?",
        answer: "Abu Bakr Siddiq R.A",
        options: [
            "Umar Ibn Hattob R.A",
            "Ali Ibn Abu Tolib R.A",
            "Abu Bakr Siddiq R.A",
            "Usmon Ibn Affon R.A",
        ]
    },
    {
        numb: 20,
        question: "1. Payg'ambarimiz Sollalohu Alayhi Vasallamga 2-vahy qaysi sura va oyatlar bo'lgan ?",
        answer: "Muddassir surasining 1-7 oyati",
        options: [
            "Sod surasining 10-14 oyati",
            "Muddassir surasining 1-7 oyati",
            "Duxon surasining 5-9 oyati",
            "Muhammad surasining 22-26 oyati",
        ]
    },
    {
        numb: 21,
        question: "2. Payg'ambarimiz Sollalohu Alayhi Vasallamning vafotlari ?",
        answer: "Milodiy 632-yil 6-iyun",
        options: [
            "Milodiy 632-yil 6-iyun",
            "Milodiy 631-yil 10-iyun",
            "Milodiy 633-yil 15-avgust",
            "Milodiy 630-yil 17-mart",
        ]
    },
    {
        numb: 22,
        question: "4.Hadicha onamizdan so‘ng Rasululloh Sollalohu Alayhi Vasallamga xotin bo‘lgan birinchi ayol kim edi ?",
        answer: "Savda binti Zam’a R.A",
        options: [
            "Zaynab binti Jahsh R.A",
            "Oisha binti Abu Bakr R.A",
            "Sofiya binti Huyay R.A",
            "Savda binti Zam’a R.A",
        ]
    },
    {
        numb: 23,
        question: "15. “Va albatta u (jahannam)dan taqvodor banda chetda qoladir. U boyligini sarflaydi va o’zini poklaydi” (Layl surasi 17-18-oyatlar). Bu oyat qaysi Saxobiy sababidan nozil bo'lgan edi ?",
        answer: "Abu Bakr Siddiq R.A",
        options: [
            "Abu Bakr Siddiq R.A",
            "Umar Ibn Hattob R.A",
            "Ali Ibn Abu Tolib R.A",
            "Abdulloh Ibn Masur R.A",
        ]
    },
    {
        numb: 24,
        question: "5. Payg‘ambarimiz Sollalohu Alayhi Vasallamning Otalari nechchi yoshlarida vafot qilganlar ?",
        answer: "25 yoshlarida",
        options: [
            "24 yoshlarida",
            "26 yoshlarida",
            "23 yoshlarida",
            "25 yoshlarida",
        ]
    },
    {
        numb: 25,
        question: "10. Payg‘ambarimiz Sollalohu Alayhi Vasallamning ko'ksilari yorilish voqesi nima deb ataladi ?",
        answer: "Shaqqu as-sodr",
        options: [
            "Fath alqalb",
            "Sharxi qadr",
            "Shaqqu as-sodr",
            "Hadath alqalb",
        ]
    },
    {
        numb: 26,
        question: "22. Payg‘ambarimiz Sollalohu Alayhi Vasallamni 2 yil emizgan onalari ismlari ?",
        answer: "Halimayi Sa’diyya",
        options: [
            "Halimayi Sa’diyya",
            "Omina binti Vahb",
            "Suvayba Aslamiyya",
            "Shaymo binti Horis",
        ]
    },
    {
        numb: 27,
        question: "3. Rasululloh Sollalohu Alayhi Vasallam qaysi ummul-mo‘miniynni bir marta taloq qildilar bu kim edi ?",
        answer: "Hafsa binti Umar R.A",
        options: [
            "Hafsa binti Umar R.A",
            "Zaynab binti Jahsh R.A",
            "Sofiya binti Huyay R.A",
            "Savda binti Zam’a R.A",
        ]
    },
    {
        numb: 28,
        question: "16. Umar R.A ning hilifaliklari qancha vaqt davom etgan ?",
        answer: "10 yilu 6 oy",
        options: [
            "10 yilu 4 oy",
            "10 yilu 7 oy",
            "10 yilu 6 oy",
            "10 yilu 2 oy",
        ]
    },
    {
        numb: 29,
        question: "17. Qur'oni Karimda ismi zikr qilingan Sahoba ismlari ?",
        answer: "Zayd Ibn Xorisa R.A",
        options: [
            "Zayd Ibn Xorisa R.A",
            "Umar Ibn Hattob R.A",
            "Abu Bakr Siddiq R.A",
            "Ali Ibn Abu Tolib R.A",
        ]
    },
    {
        numb: 30,
        question: "23. Jabroil alayhissalom Rasululloh Sollalohu Alayhi Vasallam oldilariga qaysi Sahobaning suratlarida kelganlar ?",
        answer: "Dihyatul Kalbiy R.A",
        options: [
            "Zayd Ibn Xorisa R.A",
            "Sa'd Ibn Muoz R.A",
            "Musa'b Ibn Umayr R.A",
            "Dihyatul Ibn Xalifa al Kalbiy R.A",
        ]
    },
    {
        numb: 31,
        question: "26. Xalifalar ichida 1- bo'lib shaxid bo'lgan Xalifa kim ?",
        answer: "Umar Ibn Hattob R.A",
        options: [
            "Ali Ibn Abu Tolib R.A",
            "Umar Ibn Hattob R.A",
            "Abu Bakr Siddiq R.A",
            "Usmon Ibn Affon R.A",
        ]
    },
    {
        numb: 32,
        question: "28. Abu Turob (tuproqqa belangan) nomi qaysi Sahobaga berilgan edi ?",
        answer: "Ali Ibn Abu Tolib R.A",
        options: [
            "Ali Ibn Abu Tolib R.A",
            "Umar Ibn Hattob R.A",
            "Abu Bakr Siddiq R.A",
            "Usmon Ibn Affon R.A",
        ]
    },
    {
        numb: 33,
        question: "28. Harsanglarni toshlarni ko’tardim lekin.....ko’ra og’irroq narsani ko’rmadim Ali Ibn Abu Tolib R.A.ga ogirlik qilgan narsa nima ?",
        answer: "Qarz",
        options: [
            "Gunoh",
            "Kibr",
            "Qarz",
            "Shirk",
        ]
    },
    {
        numb: 34,
        question: "28. Masjidul haromni ilk bor kengaytirib ta’mirlagan Sahobiy kim ?",
        answer: "Umar Ibn Hattob R.A",
        options: [
            "Ali Ibn Abu Tolib R.A",
            "Umar Ibn Hattob R.A",
            "Abu Bakr Siddiq R.A",
            "Usmon Ibn Affon R.A",
        ]
    },
    {
        numb: 35,
        question: "28. Hazrati Umar ibn Hattob R.A. bir kishi haqida so’z ketganda doimo shunday deganlar: Bizning sayyidimiz va sayyidimizni ozod qilgan inson. Savol: Bu so’zlarda kelgan ikki sayyid - sahobiyni toping ?",
        answer: "Bilol Xabashiy R.A",
        options: [
            "Ibn Muoz R.A",
            "Abu Bakr Siddiq R.A",
            "Usmon Ibn Affon R.A",
            "Bilol Xabashiy R.A",
        ]
    },
    {
        numb: 36,
        question: "28. Salaflarning eng so’nggi vakili kim ?",
        answer: "Imom Ahmad ibn Hanbal",
        options: [
            "Imom Abu Xanifa",
            "Imom Ahmad ibn Hanbal",
            "Imom Shofeiy",
            "Imom Buxoriy",
        ]
    },
    {
        numb: 37,
        question: "28. Islom olamida ushbu insonning janozasiga eng ko’p odam yig’ilgan(1.000.000 dan ziyod).Ushbu buyuk inson kim ?",
        answer: "Imom Ahmad ibn Hanbal",
        options: [
            "Imom Abu Xanifa",
            "Imom Shofeiy",
            "Imom Buxoriy",
            "Imom Ahmad ibn Hanbal",
        ]
    },
    {
        numb: 38,
        question: "28. Rasululloh Rasululloh Sollalohu Alayhi Vasallam faqat bir sahobiyga ota-onam senga fido bo’lsin deganlar. Bu sahobiy kim ?",
        answer: "Sa’d ibn Abu Vaqqos R.A",
        options: [
            "Sa’d ibn Abu Vaqqos R.A",
            "Ibn Muoz R.A",
            "Abu Bakr Siddiq R.A",
            "Usmon Ibn Affon R.A",
        ]
    },
    {
        numb: 39,
        question: "28. Rasululloh Sollalohu Alayhi Vasallamning duolari sabab o’qi hech qahcon hato ketmagan va duosi doimo ijobat bo’lgan sahobiy kim ?",
        answer: "Sa’d ibn Abu Vaqqos R.A",
        options: [
            "Bilol Xabashiy R.A",
            "Zayd Ibn Xorisa R.A",
            "Sa’d ibn Abu Vaqqos R.A",
            "Ibn Muoz R.A",
        ]
    },
    {
        numb: 40,
        question: "28. Rasululloh Sollalohu Alayhi Vasallam Bu yigit menga tog’a bo’ladi, yana kim menga o’z tog’asini ko’rsatadi? Bu Sahobiy kim?",
        answer: "Sa’d ibn Abu Vaqqos R.A",
        options: [
            "Abu Bakr Siddiq R.A",
            "Sa’d ibn Abu Vaqqos R.A",
            "Zayd Ibn Xorisa R.A",
            "Ibn Muoz R.A",
        ]
    },
]