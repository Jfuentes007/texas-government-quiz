const quizData = [
    {
        question: "What does the term bicameral mean?",
        a: "A legislature with one chamber",
        b: "A legislature with two chambers",
        c: "A legislature that meets annually",
        d: "A legislature that only enacts local bills",
        correct: "b"
    },
    {
        question: "What is a per diem?",
        a: "A type of bill",
        b: "A daily payment to a public official engaged in state business",
        c: "A resolution passed by both chambers",
        d: "The process of redrawing election districts",
        correct: "b"
    },
    {
        question: "How long is the regular session of the Texas legislature?",
        a: "30 days",
        b: "140 days",
        c: "365 days",
        d: "Every two years",
        correct: "b"
    },
    {
        question: "What is the primary difference between a general bill and a local bill?",
        a: "General bills apply statewide, while local bills affect specific localities.",
        b: "General bills are only about general topics, while local bills are detailed.",
        c: "General bills require a two-thirds majority, while local bills do not.",
        d: "General bills are passed by the Senate, while local bills are passed by the House.",
        correct: "a"
    },
    {
        question: "What power does the Speaker of the House have in the Texas Legislature?",
        a: "Vetoing bills",
        b: "Appointing all committee members",
        c: "Controlling the legislative agenda and floor debate",
        d: "Presiding over the Senate",
        correct: "c"
    },
    {
        question: "What is the one-person, one-vote principle?",
        a: "Every person has one vote regardless of district size",
        b: "Each district must have roughly equal populations",
        c: "Only one person per family can vote",
        d: "Each representative has one vote in the legislature",
        correct: "b"
    },
    {
        question: "What is the plural executive system in Texas?",
        a: "A single executive leader with complete control",
        b: "Multiple executive officials elected independently",
        c: "Executive officials appointed by the governor",
        d: "A legislature that also serves as the executive",
        correct: "b"
    },
    {
        question: "What is the highest court for criminal cases in Texas?",
        a: "Texas Supreme Court",
        b: "Texas Court of Criminal Appeals",
        c: "Texas District Courts",
        d: "Texas Courts of Appeal",
        correct: "b"
    },
    {
        question: "What does the Sunset Advisory Commission (SAC) do?",
        a: "Appoints judges to the Texas Supreme Court",
        b: "Reviews the effectiveness of state agencies",
        c: "Manages the state budget",
        d: "Oversees public education standards",
        correct: "b"
    },
    {
        question: "Which of the following best describes a filibuster?",
        a: "A bill that applies to all people in the state",
        b: "A tactic to delay or block legislation by extended speaking",
        c: "A temporary committee formed to reconcile bill differences",
        d: "A resolution passed by only one chamber of the legislature",
        correct: "b"
    }
];

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const resultsEl = document.getElementById('results');

function loadQuiz() {
    const output = quizData.map((currentQuestion, questionNumber) => {
        return `
            <div class="question">
                <p>${questionNumber + 1}. ${currentQuestion.question}</p>
                <div class="options">
                    <label>
                        <input type="radio" name="question${questionNumber}" value="a">
                        ${currentQuestion.a}
                    </label>
                    <label>
                        <input type="radio" name="question${questionNumber}" value="b">
                        ${currentQuestion.b}
                    </label>
                    <label>
                        <input type="radio" name="question${questionNumber}" value="c">
                        ${currentQuestion.c}
                    </label>
                    <label>
                        <input type="radio" name="question${questionNumber}" value="d">
                        ${currentQuestion.d}
                    </label>
                </div>
            </div>
        `;
    }).join('');
    quiz.innerHTML = output;
}

function getSelected() {
    const answers = [];
    quizData.forEach((question, index) => {
        const selector = `input[name=question${index}]:checked`;
        const answer = (document.querySelector(selector) || {}).value;
        answers.push(answer);
    });
    return answers;
}

submitBtn.addEventListener('click', () => {
    const userAnswers = getSelected();
    let score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correct) {
            score++;
        }
    });
    resultsEl.innerHTML = `You scored ${score} out of ${quizData.length}`;
});

loadQuiz();
Add script.js
