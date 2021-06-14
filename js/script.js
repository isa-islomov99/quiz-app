// const start_btn = document.querySelector(".start_btn button");
// const info_box = document.querySelector(".info_box");
// const exit_btn = info_box.querySelector(".quit");
// const continue_btn = info_box.querySelector(".restart");
// const quiz_box = document.querySelector(".quiz_box");
// const next_btn = quiz_box.querySelector(".next_btn");
// const timer_sec = quiz_box.querySelector(".timer");
// const time_line = quiz_box.querySelector(".time_line");
// const result_box = document.querySelector(".result_box");
// const quitBtn = result_box.querySelector(".quit");
// const user_loose_box = document.querySelector(".user_loose_box");
// const loose_btn = user_loose_box.querySelector(".loose_btn");
// const surprise_box = document.querySelector(".surprise_box");
// const finish_btn = surprise_box.querySelector(".finish_btn");

// const option_list = quiz_box.querySelector(".option_list");

// start_btn.onclick = () => {
//     info_box.classList.add("activeInfo")
//     start_btn.style.display = "none";
// }

// exit_btn.onclick = () => {
//     info_box.classList.remove("activeInfo")
//     start_btn.style.display = "block";
// }

// continue_btn.onclick = () => {
//     info_box.classList.remove("activeInfo")
//     start_btn.style.display = "none";
//     quiz_box.classList.add("activeQuiz")
//     showQuestions(que_count);
//     queCounter(bott_que_counter);
//     timerQuestion(30);
//     timeLine(timeLineWidth);
// }

// quitBtn.onclick = () => {
//     result_box.classList.remove("activeResult")
//     surprise_box.classList.add("activeSurprise")
// }

// loose_btn.onclick = () => {
//     window.location.reload();
// }
// finish_btn.onclick = () => {
//     window.location.reload();
// }

// let que_count = 0;
// let bott_que_counter = 1;
// let countCorrAnsw = 0;
// let countTime;
// let valueCountTime = 31;
// let timeLineWidth = 0;
// let countLine;
// let numbCorrectAnswer = 0;
// let numbWrongAnswer = 0;
// let countUserScore = 0;

// const showQuestions = (index) => {
//     const que_text = document.querySelector(".que_text");
//     const que_tag = '<span>' + questions[index].question + '</span>';
//     const option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
//                     +'<div class="option">'+ questions[index].options[1] +'<span></span></div>'
//                     +'<div class="option">'+ questions[index].options[2] +'<span></span></div>'
//                     +'<div class="option">'+ questions[index].options[3] +'<span></span></div>'
//     que_text.innerHTML = que_tag;
//     option_list.innerHTML = option_tag;
//     const option = option_list.querySelectorAll(".option");
//     for(let i = 0; i < option.length; i++) {
//         option[i].setAttribute("onclick", "optionSelected(this)");
//     }
// }

// next_btn.onclick = () => {
//     if (que_count < questions.length - 1) {
//         que_count++;
//         showQuestions(que_count);
//         bott_que_counter++;
//         queCounter(bott_que_counter);
//         next_btn.classList.remove("show");
//         clearInterval(countTime)
//         timerQuestion(valueCountTime);
//         timeLine(timeLineWidth);
//     }else {
//         correctAnswers();
//         console.log("oshib ketti");
//     }
// }

// let iconTick = `<div class="icon tick"><i class="fas fa-check"></i></div>`
// let iconCross = `<div class="icon cross"><i class="fas fa-times"></i></div>`

// function optionSelected (answer) {
//     clearInterval(countTime)
//     clearInterval(countLine)
//     next_btn.classList.add("show");
//     let usAns = answer.textContent;
//     let correctAns = questions[que_count].answer
//     const allOptions = option_list.children.length
//     if(usAns == correctAns) {
//         answer.classList.add("correct")
//         answer.insertAdjacentHTML('beforeend', iconTick)
//         numbCorrectAnswer++;
//         countUserScore += 2;
//         var count = 200;
//         var defaults = {
//         origin: { y: 0.7 }
//         };

//         function fire(particleRatio, opts) {
//         confetti(Object.assign({}, defaults, opts, {
//             particleCount: Math.floor(count * particleRatio)
//         }));
//         }

//         fire(0.25, {
//         spread: 26,
//         startVelocity: 55,
//         });
//         fire(0.2, {
//         spread: 60,
//         });
//         fire(0.35, {
//         spread: 100,
//         decay: 0.91,
//         scalar: 0.8
//         });
//         fire(0.1, {
//         spread: 120,
//         startVelocity: 25,
//         decay: 0.92,
//         scalar: 1.2
//         });
//         fire(0.1, {
//         spread: 120,
//         startVelocity: 45,
//         });
//     }else {
//         numbWrongAnswer++
//         countUserScore -= 2;
//         answer.classList.add("incorrect")
//         answer.insertAdjacentHTML('beforeend', iconCross)

//         if(numbWrongAnswer == 3 ) {
//             document.body.style.background = "rgba(108, 0, 0, 0.78)"
//             user_loose_box.classList.add("activeLoose")
//             info_box.classList.remove("activeInfo")
//             quiz_box.classList.remove("activeQuiz")
//             result_box.classList.remove("activeResult")
//             start_btn.style.display = "none";
//         }
        
//         for (let x = 0; x < allOptions; x++) {
//             if(option_list.children[x].textContent == correctAns) {
//                 option_list.children[x].setAttribute("class", "option correct");
//                 option_list.children[x].insertAdjacentHTML('beforeend', iconTick)
//             }
//         }
//     }

//     for (let x = 0; x < allOptions; x++) {
//         option_list.children[x].classList.add("disabled")
//     }
// }

// function timerQuestion (time) {
//     countTime = setInterval(startTimer, 1000)
//     function startTimer() {
//         time--;
//         timer_sec.textContent = time
//         if(time < 30) {
//             timer_sec.textContent = `0:${time}`
//         }
//         if(time < 10) {
//             timer_sec.textContent = `0:0${time}`
//         }
//         if(time < 0) {
//             timer_sec.textContent = "00";
//             clearInterval(countTime)
//             document.body.style.background = "rgba(108, 0, 0, 0.78)"
//             user_loose_box.classList.add("activeLoose")
//             info_box.classList.remove("activeInfo")
//             quiz_box.classList.remove("activeQuiz")
//             result_box.classList.remove("activeResult")
//         }
//     }
// }

// function timeLine (count) {
//     countLine = setInterval(startTimeLine, 49)
//     function startTimeLine() {
//         count += 1
//         time_line.style.width = `${count}px`;
//         if(count > 613) {
//             clearInterval(countLine)
//         }
//     }
// }

// function correctAnswers() {
//     var end = Date.now() + (15 * 1000);
//     var colors = ['#bb0000', '#ffffff'];
//     (function frame() {
//     confetti({
//         particleCount: 2,
//         angle: 60,
//         spread: 55,
//         origin: { x: 0 },
//         colors: colors
//     });
//     confetti({
//         particleCount: 2,
//         angle: 120,
//         spread: 55,
//         origin: { x: 1 },
//         colors: colors
//     });

//     if (Date.now() < end) {
//         requestAnimationFrame(frame);
//     }
//     }());
//     info_box.classList.remove("activeInfo")
//     quiz_box.classList.remove("activeQuiz")
//     result_box.classList.add("activeResult")
//     const complete_text = result_box.querySelector(".complete_text");
//     if(numbCorrectAnswer > 2 ) {
//         let textAnsCount = `<span><p>Siz ${questions.length} ta savoldan ${numbCorrectAnswer} tasiga to'g'ri javob bergan holda ${countUserScore} ball qo'lga kiritib Viktorinamizni mutloq g'olibiga aylandingiz. Ilmda bardavom bo'ling aziz dindoshim!</p></span>`;
//         complete_text.innerHTML = textAnsCount;
//     }
// }

// function queCounter (index) {
//     const que_counter = quiz_box.querySelector(".total_que");
//     const header_que_count = quiz_box.querySelector(".header_que_count");
//     const userScoreText = quiz_box.querySelector(".title");
//     let headScoreCount = `<button>${countUserScore}ball</button>`;
//     userScoreText.innerHTML = headScoreCount;
//     let headQueCount = `<button>${index}-savol</button>`;
//     header_que_count.innerHTML = headQueCount;
//     let txtQueCount = `<span><p>${index}</p> / <p>${questions.length}</p>Savollar</span>`;
//     que_counter.innerHTML = txtQueCount;
// }














const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".quit");
const continue_btn = info_box.querySelector(".restart");
const quiz_box = document.querySelector(".quiz_box");
// const next_btn = quiz_box.querySelector(".next_btn");
const timer_sec = quiz_box.querySelector(".timer");
const time_line = quiz_box.querySelector(".time_line");
const result_box = document.querySelector(".result_box");
const quitBtn = result_box.querySelector(".quit");
const user_loose_box = document.querySelector(".user_loose_box");
const loose_btn = user_loose_box.querySelector(".loose_btn");
const surprise_box = document.querySelector(".surprise_box");
const finish_btn = surprise_box.querySelector(".finish_btn");

const option_list = quiz_box.querySelector(".option_list");

start_btn.onclick = () => {
    info_box.classList.add("activeInfo")
    start_btn.style.display = "none";
}

exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo")
    start_btn.style.display = "block";
}

continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo")
    start_btn.style.display = "none";
    quiz_box.classList.add("activeQuiz")
    showQuestions(que_count);
    queCounter(bott_que_counter);
    timerQuestion(30);
    timeLine(timeLineWidth);
}

quitBtn.onclick = () => {
    result_box.classList.remove("activeResult")
    surprise_box.classList.add("activeSurprise")
}

loose_btn.onclick = () => {
    window.location.reload();
}
finish_btn.onclick = () => {
    window.location.reload();
}

let que_count = 0;
let bott_que_counter = 1;
let countCorrAnsw = 0;
let countTime;
let valueCountTime = 30;
let timeLineWidth = 0;
let countLine;
let numbCorrectAnswer = 0;
let numbWrongAnswer = 0;
let countUserScore = 0;
let countСhance = 3;

const showQuestions = (index) => {
    const que_text = document.querySelector(".que_text");
    const que_tag = '<span>' + questions[index].question + '</span>';
    const option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                    +'<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                    +'<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                    +'<div class="option">'+ questions[index].options[3] +'<span></span></div>'
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for(let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

// next_btn.onclick = () => {
//     if (que_count < questions.length - 1) {
//         que_count++;
//         showQuestions(que_count);
//         bott_que_counter++;
//         queCounter(bott_que_counter);
//         next_btn.classList.remove("show");
//         clearInterval(countTime)
//         timerQuestion(valueCountTime);
//         timeLine(timeLineWidth);
//     }else {
//         correctAnswers();
//         console.log("oshib ketti");
//     }
// }

function stepNextQues () {
    if (que_count < questions.length - 1) {
        que_count++;
        showQuestions(que_count);
        bott_que_counter++;
        queCounter(bott_que_counter);
        // next_btn.classList.remove("show");
        clearInterval(countTime)
        timerQuestion(valueCountTime);
        timeLine(timeLineWidth);
    }else {
        correctAnswers();
        console.log("oshib ketti");
    }
}

let iconTick = `<div class="icon tick"><i class="fas fa-check"></i></div>`
let iconCross = `<div class="icon cross"><i class="fas fa-times"></i></div>`

function optionSelected (answer) {
    clearInterval(countTime)
    clearInterval(countLine)
    let usAns = answer.textContent;
    let correctAns = questions[que_count].answer
    setTimeout(stepNextQues, 3000);
    const allOptions = option_list.children.length
    if(usAns == correctAns) {
        answer.classList.add("correct")
        answer.insertAdjacentHTML('beforeend', iconTick)
        numbCorrectAnswer++;
        countUserScore += 2;
        var count = 200;
        var defaults = {
        origin: { y: 0.7 }
        };

        function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
        }

        fire(0.25, {
        spread: 26,
        startVelocity: 55,
        });
        fire(0.2, {
        spread: 60,
        });
        fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
        });
        fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
        });
        fire(0.1, {
        spread: 120,
        startVelocity: 45,
        });
    }else {
        numbWrongAnswer++
        countUserScore -= 2;
        answer.classList.add("incorrect")
        answer.insertAdjacentHTML('beforeend', iconCross)

        if(numbWrongAnswer == 3 ) {
            setTimeout(() => {
                document.body.style.background = "rgba(108, 0, 0, 0.78)"
                user_loose_box.classList.add("activeLoose")
                info_box.classList.remove("activeInfo")
                quiz_box.classList.remove("activeQuiz")
                result_box.classList.remove("activeResult")
                start_btn.style.display = "none";
            }, 2000);
        }
        if(numbWrongAnswer && numbWrongAnswer >= 0 && numbWrongAnswer < 3) {
            setTimeout(() => {
                countСhance--;
                alert(`${countСhance} bor adashsangiz mag'lub bulasiz`)
            }, 1000);
        }
        
        for (let x = 0; x < allOptions; x++) {
            if(option_list.children[x].textContent == correctAns) {
                option_list.children[x].setAttribute("class", "option correct");
                option_list.children[x].insertAdjacentHTML('beforeend', iconTick)
            }
        }
    }

    for (let x = 0; x < allOptions; x++) {
        option_list.children[x].classList.add("disabled")
    }
}

function timerQuestion (time) {
    countTime = setInterval(startTimer, 1000)
    function startTimer() {
        time--;
        timer_sec.textContent = time
        if(time < 30) {
            timer_sec.textContent = `0:${time}`
        }
        if(time < 10) {
            timer_sec.textContent = `0:0${time}`
        }
        if(time < 0) {
            timer_sec.textContent = "00";
            clearInterval(countTime)
            document.body.style.background = "rgba(108, 0, 0, 0.78)"
            user_loose_box.classList.add("activeLoose")
            info_box.classList.remove("activeInfo")
            quiz_box.classList.remove("activeQuiz")
            result_box.classList.remove("activeResult")
        }
    }
}

function timeLine (count) {
    countLine = setInterval(startTimeLine, 49)
    function startTimeLine() {
        count += 1
        time_line.style.width = `${count}px`;
        if(count > 613) {
            clearInterval(countLine)
        }
    }
}

function correctAnswers() {
    var end = Date.now() + (15 * 1000);
    var colors = ['#bb0000', '#ffffff'];
    (function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
    });
    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
    }());
    info_box.classList.remove("activeInfo")
    quiz_box.classList.remove("activeQuiz")
    result_box.classList.add("activeResult")
    const complete_text = result_box.querySelector(".complete_text");
    if(numbCorrectAnswer > 2 ) {
        let textAnsCount = `<span><p>Siz ${questions.length} ta savoldan ${numbCorrectAnswer} tasiga to'g'ri javob bergan holda ${countUserScore} ball qo'lga kiritib Viktorinamizni mutloq g'olibiga aylandingiz. Ilmda bardavom bo'ling aziz dindoshim!</p></span>`;
        complete_text.innerHTML = textAnsCount;
    }
}

function queCounter (index) {
    const que_counter = quiz_box.querySelector(".total_que");
    const header_que_count = quiz_box.querySelector(".header_que_count");
    const userScoreText = quiz_box.querySelector(".title");
    let headScoreCount = `<button>${countUserScore}ball</button>`;
    userScoreText.innerHTML = headScoreCount;
    let headQueCount = `<button>${index}-savol</button>`;
    header_que_count.innerHTML = headQueCount;
    let txtQueCount = `<span><p>${index}</p> / <p>${questions.length}</p>Savollar</span>`;
    que_counter.innerHTML = txtQueCount;
}



