// list of question that we need to show in front of the container
const quizData = [
    {
        question: 'What is the most used programing language in 2020?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },{
        question: 'What is the most favorite App in 2020?',
        a: 'Facebook',
        b: 'Line',
        c: 'Tiktok',
        d: 'IG',
        correct: 'c'
    },{
        question:'What is the most popular technology in the future?',
        a:'IoT',
        b:'AI',
        c:'Block chain',
        d:'All of them',
        correct:'d'
    },{
        question:'Who is the best NBA player shooting guard?',
        a:'Kevin durant',
        b:'Stephen Curry',
        c:'Greek Freak',
        d:'LeBron James',
        correct:'b'
    },{
        question:'What is the best song of you?',
        a:'Best part',
        b:'See you again',
        c:'Falling slowly',
        d:'Jazz',
        correct:'c'
    }
]

// querySelectorAll('.answer'); ต้องมีจุดด้วย
// Announced the variation 
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');

const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');

// Process 
let currentQuiz = 0;
let score = 0;

// Call the function
// if we don't call this loadQuiz() then when you finished submit
// the page not return the question to you.
loadQuiz();

// function 
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    // let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

// when we have to click the button
submitBtn.addEventListener("click", ()=> {
    // check to see the answer
    const answer = getSelected();
    
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else{
            // TODO: Show results
            quiz.innerHTML = `<h2>You answered correctly 
            at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Do it again</button>`;
        }
    }
});