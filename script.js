const quizData = [
    {
        question : 'How old is Florin?',
        a : '10',
        b : '17',
        c : '26',
        d : '110',
        correct : 'c'
    },
    {
        question : 'What is the most used programming language?',
        a : 'Java',
        b : 'C',
        c : 'Python',
        d : 'Javascript',
        correct : 'd'
    },
    {
        question : 'Who is the president of US?',
        a : 'Florin Pop',
        b : 'Donald Trump',
        c : 'Ivan Saldano',
        d : 'qwert',
        correct : 'b'
    },
    {
        question : 'What does HTML stand for?',
        a : 'HyperText Markup Language',
        b : 'Cascading Style Sheet',
        c : 'Jason Object Nota',
        d : 'zxcvb',
        correct : 'a'
    },
    {
        question : 'What year was Javascript launched?',
        a : '2018',
        b : '2019',
        c : '2020',
        d : 'none',
        correct : 'd'
    }
]

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener('click', () =>{
    //check to see answer
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
            getSelected();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>`;
        }
    }
    else {
        alert("Please select an answer");
    }
});
