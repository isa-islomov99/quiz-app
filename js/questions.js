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
        question: "2. Taxoratda nechta farz bor ?",
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
        question: "3. G'uslda nechta farz bor ?",
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
        question: "4. Oyatal kursi qaysi surada kelgan ?",
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
        question: "5. Beshikda yotgan vaqtidayoq gapirgan Payg‘ambar ?",
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
        question: "6. Iso Alayhissalomga nozil bo'lgan kitob ?",
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
        question: "7. Islomda aza necha kun ?",
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
        question: "8. Tushida 11ta yulduz quyosh va oyni o'ziga sajda qilayotganini ko'rgan payg'ambar qaysi ?",
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
        question: "9. Maryam onamiz Yaxho Alayhissalomga kim bo'lgan ?",
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
        question: "10. Fir'avnning ayoli, Jannat saidalaridan bo'lgan ayolning ismi ?",
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
        question: "11. Munofiqlar uchun eng og'ir bo'lgan namozlar qaysi ?",
        answer: "Bomdod va Xufton",
        options: [
            "Bomdod va Xufton",
            "Xufton va Peshin",
            "Shom va Xufton",
            "Asr va Bomdod",
        ]
    },
    {
        numb: 12,
        question: "12. Quyidagilar orasidan qaysi Ayolni ismlari Qu'ron da zikri kelgan ?",
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
        question: "13. Asadulloh (Allohning arsloni) nomini olgan sahoba kim edi ?",
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
        question: "14. Qur'ondagi eng kichik sura ?",
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
        question: "15. Payg‘ambarimiz Sollalohu Alayhi Vasallamning Otalari ismi ?",
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
        question: "16. Juma kuni qaysi surani o'qish tavsiya qilinadi ?",
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
        question: "17. Al-Jome As-Sahih kitobining muallifi kim ?",
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
        question: "18. Islom Tarixida eng yosh islomni qabul qilgan kishi ?",
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
        question: "19. Payg‘ambarimiz Sollalohu Alayhi Vasallamdan keyin ummat orasida 1-Jannatga kiradigan inson ?",
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
        question: "20. Payg'ambarimiz Sollalohu Alayhi Vasallamga 2-vahy qaysi sura va oyatlar bo'lgan ?",
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
        question: "21. Payg'ambarimiz Sollalohu Alayhi Vasallamning vafotlari ?",
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
        question: "22.Hadicha onamizdan so‘ng Rasululloh Sollalohu Alayhi Vasallamga xotin bo‘lgan birinchi ayol kim edi ?",
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
        question: "23. “Va albatta u (jahannam)dan taqvodor banda chetda qoladir. U boyligini sarflaydi va o’zini poklaydi” (Layl surasi 17-18-oyatlar). Bu oyat qaysi Saxobiy sababidan nozil bo'lgan edi ?",
        answer: "Abu Bakr Siddiq R.A",
        options: [
            "Abu Bakr Siddiq R.A",
            "Umar Ibn Hattob R.A",
            "Ali Ibn Abu Tolib R.A",
            "Abdulloh Ibn Masud R.A",
        ]
    },
    {
        numb: 24,
        question: "24. Payg‘ambarimiz Sollalohu Alayhi Vasallamning Otalari nechchi yoshlarida vafot qilganlar ?",
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
        question: "26. Payg‘ambarimiz Sollalohu Alayhi Vasallamning ko'ksilari yorilish voqesi nima deb ataladi ?",
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
        question: "26. Payg‘ambarimiz Sollalohu Alayhi Vasallamni 2 yil emizgan onalari ismlari ?",
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
        question: "27. Rasululloh Sollalohu Alayhi Vasallam qaysi ummul-mo‘miniynni bir marta taloq qildilar bu kim edi ?",
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
        question: "28. Umar R.A ning hilifaliklari qancha vaqt davom etgan ?",
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
        question: "29. Qur'oni Karimda ismi zikr qilingan Sahoba ismlari ?",
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
        question: "30. Jabroil alayhissalom Rasululloh Sollalohu Alayhi Vasallam oldilariga qaysi Sahobaning suratlarida kelganlar ?",
        answer: "Dihyatul Ibn Xalifa al Kalbiy R.A",
        options: [
            "Zayd Ibn Xorisa R.A",
            "Sa'd Ibn Muoz R.A",
            "Musa'b Ibn Umayr R.A",
            "Dihyatul Ibn Xalifa al Kalbiy R.A",
        ]
    },
    {
        numb: 31,
        question: "31. Xalifalar ichida 1- bo'lib shaxid bo'lgan Xalifa kim ?",
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
        question: "32. Harsanglarni toshlarni ko’tardim lekin.....ko’ra og’irroq narsani ko’rmadim Ali Ibn Abu Tolib R.A.ga ogirlik qilgan narsa nima ?",
        answer: "Qarz",
        options: [
            "Gunoh",
            "Kibr",
            "Qarz",
            "Shirk",
        ]
    },
    {
        numb: 33,
        question: "33. Masjidul haromni ilk bor kengaytirib ta’mirlagan Sahobiy kim ?",
        answer: "Umar Ibn Hattob R.A",
        options: [
            "Ali Ibn Abu Tolib R.A",
            "Umar Ibn Hattob R.A",
            "Abu Bakr Siddiq R.A",
            "Usmon Ibn Affon R.A",
        ]
    },
    {
        numb: 34,
        question: "34. Hazrati Umar ibn Hattob R.A. bir kishi haqida so’z ketganda doimo shunday deganlar: Bizning sayyidimiz va sayyidimizni ozod qilgan inson. Savol: Bu so’zlarda kelgan ikki sayyid - sahobiyni toping ?",
        answer: "Bilol Xabashiy R.A",
        options: [
            "Ibn Muoz R.A",
            "Abu Bakr Siddiq R.A",
            "Usmon Ibn Affon R.A",
            "Bilol Xabashiy R.A",
        ]
    },
    {
        numb: 35,
        question: "35. Salaflarning eng so’nggi vakili kim ?",
        answer: "Imom Ahmad ibn Hanbal",
        options: [
            "Imom Abu Xanifa",
            "Imom Ahmad ibn Hanbal",
            "Imom Shofeiy",
            "Imom Buxoriy",
        ]
    },
    {
        numb: 36,
        question: "36. Halifalar ichida eng ko’p halifalik qilgan Sahoba ?",
        answer: "Usmon Ibn Affon R.A",
        options: [
            "Abu Bakr Siddiq R.A",
            "Umar Ibn Hattob R.A",
            "Usmon Ibn Affon R.A",
            "Ali Ibn Abu Tolib R.A",
        ]
    },
    {
        numb: 37,
        question: "37. Qalam surasining 10-16-oyatlarida ta’riflangan qasamxor, past, tuhmatchi, giybatchi, baxil, haddidan oshgan, gumroh, qopol, ustiga-ustak otasi nomalum odam kim edi ?",
        answer: "Valid ibni Mug’ira",
        options: [
            "Valid ibni Mug’ira",
            "Abu Jaxl",
            "Musaylama Kazzob",
            "Barcha javoblar to'g'ri",
        ]
    },
    {
        numb: 38,
        question: "38. Islom olamida ushbu insonning janozasiga eng ko’p odam yig’ilgan(1.000.000 dan ziyod).Ushbu buyuk inson kim ?",
        answer: "Imom Ahmad ibn Hanbal",
        options: [
            "Imom Abu Xanifa",
            "Imom Shofeiy",
            "Imom Buxoriy",
            "Imom Ahmad ibn Hanbal",
        ]
    },
    {
        numb: 39,
        question: "39. Rasululloh Rasululloh Sollalohu Alayhi Vasallam qaysi Sahobiyga ota-onam senga fido bo’lsin deganlar ?",
        answer: "Sa’d ibn Abu Vaqqos R.A",
        options: [
            "Sa’d ibn Abu Vaqqos R.A",
            "Ibn Muoz R.A",
            "Abu Bakr Siddiq R.A",
            "Barcha javoblar to'g'ri",
        ]
    },
    {
        numb: 40,
        question: "40. Badr g’azotida musulmonlardan necha kishi shahid bo’lgan edi ?",
        answer: "14 kishi",
        options: [
            "25 kishi",
            "18 kishi",
            "14 kishi",
            "17 kishi",
        ]
    },
    {
        numb: 41,
        question: "41. Rasululloh Sollalohu Alayhi Vasallam qaysi Sahobiyga: Ummatim orasida halol va haromni eng yahshi biluvchi inson’,-deya ta’rif berganlar ?",
        answer: "Muoz ibn Jabal R.A",
        options: [
            "Muoz ibn Jabal R.A",
            "Zayd Ibn Xorisa R.A",
            "Musab ibn Umayr R.A",
            "Ibn Muoz R.A",
        ]
    },
    {
        numb: 42,
        question: "42. Rasululloh Sollalohu Alayhi Vasallamning duolari sabab o’qi hech qahcon hato ketmagan va duosi doimo ijobat bo’lgan sahobiy kim ?",
        answer: "Sa’d ibn Abu Vaqqos R.A",
        options: [
            "Bilol Xabashiy R.A",
            "Zayd Ibn Xorisa R.A",
            "Sa’d ibn Abu Vaqqos R.A",
            "Ibn Muoz R.A",
        ]
    },
    {
        numb: 43,
        question: "43. Rasululloh Sollalohu Alayhi Vasallamning qatnashgan eng so’nggi g’azot qaysi edi ?",
        answer: "Tabuk g’azoti",
        options: [
            "Badr g’azoti",
            "Uxut g’azoti",
            "Handaq g’azoti",
            "Tabuk g’azoti",
        ]
    },
    {
        numb: 44,
        question: "44. Rasululloh Sollalohu Alayhi Vasallam Kim jang qilmoqchi bo’lsa ... kabi jang qilsin, deganlar. Bu Sahobiy kim ?",
        answer: "Osim ibn Sobit R.A",
        options: [
            "Umar Ibn Hattob R.A",
            "Xolid Ibn Valid R.A",
            "Osim ibn Sobit R.A",
            "Ibn Muoz R.A",
        ]
    },
    {
        numb: 45,
        question: "45. Qur’onda har bir surani o’qishdan avval Allohni ismi zikr qilinadi lekin bir sura bor uni o’qishdan avval Allohning Rahmon va Rahimlik sifatlari tilga olinmaslik kerak bu qaysi sura ?",
        answer: "Tavba surasi",
        options: [
            "Tavba surasi",
            "Mulk surasi",
            "Anfol surasi",
            "Moida surasi",
        ]
    },
    {
        numb: 46,
        question: "46. Rasululloh Sollalohu Alayhi Vasallam Bu yigit menga tog’a bo’ladi, yana kim menga o’z tog’asini ko’rsatadi? Bu Sahobiy kim?",
        answer: "Sa’d ibn Abu Vaqqos R.A",
        options: [
            "Abu Bakr Siddiq R.A",
            "Sa’d ibn Abu Vaqqos R.A",
            "Zayd Ibn Xorisa R.A",
            "Ibn Muoz R.A",
        ]
    },
    {
        numb: 47,
        question: "47. Bizga ma’lumki inson avvali tuproqdan yaratilgan va yana tuproqqa aylanadi. Tuproq so’zi bilan tugaydigan sura qaysi ?",
        answer: "Naba’ surasi",
        options: [
            "Isro surasi",
            "Toxa surasi",
            "Furqon surasi",
            "Naba’ surasi",
        ]
    },
    {
        numb: 48,
        question: "48.  Rasululloh Sollalohu Alayhi Vasallam shunday deganlar: Bu surani avvalgi o’n oyatiga, kimda kim to’la holda rioya qilib umr o’tkazsa, u shubhasiz jannatning eng ulug’i sanalgan Jannatul Firdavs merosh’ori bo’ladi.... Bu sura qaysi ?",
        answer: "Mo'minun surasi",
        options: [
            "Naml surasi",
            "Mo'minun surasi",
            "Fotir surasi",
            "Soffaat surasi",
        ]
    },
    {
        numb: 49,
        question: "49. Hadislarni ilk bor yozib olgan sahobiy kim?",
        answer: "Abu Hurayra R.A",
        options: [
            "As’ad ibn Zurora R.A",
            "Abdulloh Ibn Masud R.A",
            "Abu Hurayra R.A",
            "Ali Ibn Abu Tolib R.A",
        ]
    },
    {
        numb: 50,
        question: "50. Qiblamizning Masjidul Aqsodan Ka’baga o‘zgartirilishini amr etgan oyat Qur’oni karimning qaysi surasida ?",
        answer: "Baqara surasi 144-oyat",
        options: [
            "Baqara surasi 144-oyat",
            "Rad surasi 33-oyat",
            "Anbiyo surasi 102-oyat",
            "Ankabut surasi 55-oyat",
        ]
    },
    
]