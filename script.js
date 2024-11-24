// Get DOM elements
const quiz = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const resultsEl = document.getElementById("results");

// Quiz Data
const quizData = [
    {
        question: "What does the term bicameral mean?",
        a: "Having a legislative assembly composed of two chambers or houses.",
        b: "Having a legislature that meets every two years.",
        c: "Having a legislature composed of one chamber.",
        d: "Having a legislature that meets daily.",
        correct: "a"
    },
    {
        question: "What does the term biennial mean?",
        a: "Occurring every two months.",
        b: "Occurring every year.",
        c: "Occurring every two years.",
        d: "Occurring twice a year.",
        correct: "c"
    },
    {
        question: "What is the length of a regular session of the Texas legislature?",
        a: "90 days",
        b: "140 days",
        c: "200 days",
        d: "365 days",
        correct: "b"
    },
    {
        question: "What is a local bill?",
        a: "A bill affecting the entire state.",
        b: "A bill affecting only units of local government.",
        c: "A bill granting exemptions to state law.",
        d: "A bill passed by Congress.",
        correct: "b"
    },
    {
        question: "What is a general bill?",
        a: "A bill affecting only corporations.",
        b: "A bill that applies to all people and/or property in the state.",
        c: "A bill that changes the state constitution.",
        d: "A bill proposing federal laws.",
        correct: "b"
    },
    {
        question: "What does per diem mean?",
        a: "Yearly salary for public officials.",
        b: "Daily payment to a public official engaged in state business.",
        c: "Hourly wages for state employees.",
        d: "Monthly stipend for officials.",
        correct: "b"
    },
    {
        question: "Who can call a special session of the Texas legislature?",
        a: "The Lieutenant Governor.",
        b: "The Speaker of the House.",
        c: "The Governor.",
        d: "The President.",
        correct: "c"
    },
    {
        question: "What is the role of the Lieutenant Governor in Texas?",
        a: "Chief legal advisor to the state.",
        b: "Presiding officer of the Senate.",
        c: "Head of the House of Representatives.",
        d: "State's chief tax collector.",
        correct: "b"
    },
    {
        question: "What is the primary role of the Texas Attorney General?",
        a: "Administering elections.",
        b: "Managing public lands.",
        c: "Serving as the state's chief civil lawyer.",
        d: "Presiding over the Senate.",
        correct: "c"
    },
    {
        question: "What is the Texas Supreme Court responsible for?",
        a: "Criminal appellate cases.",
        b: "Civil appellate cases.",
        c: "Both civil and criminal cases.",
        d: "Creating state laws.",
        correct: "b"
    },
    // Add more questions as needed
];

// Keep track of the current question
let currentQuiz = 0;
let score = 0;

// Load Quiz
function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    quiz.innerHTML = `
        <div class="question">${currentQuizData.question}</div>
        <div class="answers">
            <label><input type="radio" name="answer" value="a"> ${currentQuizData.a}</label><br>
            <label><input type="radio" name="answer" value="b"> ${currentQuizData.b}</label><br>
            <label><input type="radio" name="answer" value="c"> ${currentQuizData.c}</label><br>
            <label><input type="radio" name="answer" value="d"> ${currentQuizData.d}</label>
        </div>
    `;
}

// Get selected answer
function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;
    answers.forEach(answer => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });
    return selectedAnswer;
}

// Submit the quiz
submitBtn.addEventListener("click", () => {
    const selectedAnswer = getSelected();

    if (selectedAnswer) {
        if (selectedAnswer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score} out of ${quizData.length} questions correctly.</h2>
                <button onclick="location.reload()">Restart</button>
            `;
        }
    }
});

// Load the first quiz question
loadQuiz();
