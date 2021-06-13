const questions = [
    {
        numb: 1,
        question: "1. Payg'ambarimiz Sollaloxu Alayxi Vasallamning Onalari nechchi yoshliklarida vafot etganlar ?",
        answer: "6 yoshliklarida",
        options: [
            "4 yoshliklarida",
            "5 yoshliklarida",
            "6 yoshliklarida",
            "7 yoshliklarida",
        ]
    },
    {
        numb: 2,
        question: "2. Payg'ambarimiz Sollaloxu Alayxi Vasallam Xadicha Onamizdan nechta farzand ko'rganlar ?",
        answer: "7 ta",
        options: [
            "7 ta",
            "5 ta",
            "6 ta",
            "4 ta",
        ]
    },
    {
        numb: 3,
        question: "3. Badr jangi nechanchi yilda sodir bo'lgan ?",
        answer: "624-yil",
        options: [
            "621-yil",
            "624-yil",
            "625-yil",
            "626-yil",
        ]
    },
    {
        numb: 4,
        question: "4. Payg‘ambarimiz Sollaloxu Alayxi Vasallam ning hijratlari nechchi yoshlarida sodir bo'lgan ?",
        answer: "53 yoshlarida",
        options: [
            "51 yoshlarida",
            "53 yoshlarida",
            "54 yoshlarida",
            "56 yoshlarida",
        ]
    },
    {
        numb: 5,
        question: "5. Payg‘ambarimiz Sollaloxu Alayxi Vasallam nechchi yoshliklarida Bobolari Abdulmutallib vafot qilganlar ?",
        answer: "8 yoshlarida",
        options: [
            "7 yoshlarida",
            "9 yoshlarida",
            "10 yoshlarida",
            "8 yoshlarida",
        ]
    },
    {
        numb: 6,
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
        numb: 7,
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
        numb: 8,
        question: "8. Birinchi bo'lib azon aytgan Saxobiy ismlari ?",
        answer: "Bilol R.A",
        options: [
            "Ibn Muoz R.A",
            "Bilol R.A",
            "Umar R.A",
            "Usmon R.A",
        ]
    },
    {
        numb: 9,
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
        numb: 10,
        question: "10. Payg‘ambarimiz Sollaloxu Alayxi Vasallamning ko'ksilari yorilish voqesi nima deb ataladi ?",
        answer: "Sharhi sadr",
        options: [
            "Fath alqalb",
            "Sharxi qadr",
            "Sharhi sadr",
            "Hadath alqalb",
        ]
    },
    {
        numb: 11,
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
        numb: 12,
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
        numb: 13,
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
        numb: 14,
        question: "14. Alloh Taolo qaysi payg'ambariga qushlar va jamiyki hayvonlar tilini tushunish fazlini berdi ?",
        answer: "Sulaymon Alayhissalomga",
        options: [
            "Sulaymon Alayhissalomga",
            "Nux Alayhissalomga",
            "Yunus Alayhissalomga",
            "Ibrohim Alayhissalomga",
        ]
    },
    {
        numb: 15,
        question: "15. Payg‘ambarimiz Sollaloxu Alayxi Vasallam Madinaga haftaning qaysi kuni kirib borganlar ?",
        answer: "Juma",
        options: [
            "Shanba",
            "Juma",
            "Chorshanba",
            "Dushanba",
        ]
    },
    {
        numb: 16,
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
        numb: 17,
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
        numb: 18,
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
        numb: 19,
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
        numb: 20,
        question: "20. Payg‘ambarimiz Sollaloxu Alayxi Vasallamdan keyin ummat orasida 1-Jannatga kiradigan inson ?",
        answer: "Abu Bakr Siddiq R.A",
        options: [
            "Umar Ibn Hattob R.A",
            "Ali Ibn Abu Tolib R.A",
            "Abu Bakr Siddiq R.A",
            "Usmon Ibn Affon R.A",
        ]
    },
    {
        numb: 21,
        question: "21. Payg‘ambarimiz Sollaloxu Alayxi Vasallamning Bobolari Abdulmutallib necha yoshlarida vafot qilganlar ?",
        answer: "82 yoshlarida",
        options: [
            "78 yoshlarida",
            "75 yoshlarida",
            "82 yoshlarida",
            "80 yoshlarida",
        ]
    },
    {
        numb: 22,
        question: "22. Qaysi namozning 2 rakat sunnati dunyo va undagi barcha narsalardan yaxshiroq ?",
        answer: "Bomdod Namozining",
        options: [
            "Shom Namozining",
            "Bomdod Namozining",
            "Asr Namozining",
            "Xufton Namozining",
        ]
    },
    {
        numb: 23,
        question: "23. Otalari but yasovchi bo'lgan Payg‘ambar ismlari ?",
        answer: "Ibrohim Alayhissalom",
        options: [
            "Sulaymon Alayhissalom",
            "Nux Alayhissalom",
            "Yunus Alayhissalom",
            "Ibrohim Alayhissalom",
        ]
    },
    {
        numb: 24,
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
        numb: 25,
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
        numb: 26,
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
        numb: 27,
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
        numb: 28,
        question: "28. Abu Turob (tuproqqa belangan) nomi qaysi Sahobaga berilgan edi ?",
        answer: "Umar Ibn Hattob R.A",
        options: [
            "Ali Ibn Abu Tolib R.A",
            "Umar Ibn Hattob R.A",
            "Abu Bakr Siddiq R.A",
            "Usmon Ibn Affon R.A",
        ]
    },
    {
        numb: 29,
        question: "29. Payg‘ambarimiz Sollaloxu Alayxi Vasallamning Otalari ismi ?",
        answer: "Abdulloh",
        options: [
            "Abdulmuttalib",
            "Abu Tolib",
            "Hamza",
            "Abdulloh",
        ]
    },
    {
        numb: 30,
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
        numb: 31,
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
        numb: 32,
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
        numb: 33,
        question: "33. Juma kuni qaysi surani o'qish tavsiya qilinadi ?",
        answer: "Kahf surasi",
        options: [
            "Ixlos surasi",
            "Mulk surasi",
            "Kahf surasi",
            "Yasin surasi",
        ]
    },
]