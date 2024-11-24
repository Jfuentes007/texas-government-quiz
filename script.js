const quizData = [
    {
        question: "What does the term bicameral mean?",
        a: "A legislature with one chamber",
        b: "A legislature with two chambers",
        c: "A legislature that meets annually",
        d: "A legislature that only enacts local bills",
        correct: "b",
    },
    {
        question: "What is a per diem?",
        a: "A type of bill",
        b: "A daily payment to a public official engaged in state business",
        c: "A resolution passed by both chambers",
        d: "The process of redrawing election districts",
        correct: "b",
    },
    {
        question: "How long is the regular session of the Texas legislature?",
        a: "30 days",
        b: "140 days",
        c: "365 days",
        d: "Every two years",
        correct: "b",
    },
    {
        question: "What is the primary difference between a general bill and a local bill?",
        a: "General bills apply statewide, while local bills affect specific localities.",
        b: "General bills are only about general topics, while local bills are detailed.",
        c: "General bills require a two-thirds majority, while local bills do not.",
        d: "General bills are passed by the Senate, while local bills are passed by the House.",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const resultsEl = document.getElementById("results");

function loadQuiz() {
    const output = quizData
        .map((currentQuestion, index) => {
            return `
            <div class="question">
                ${index + 1}. ${currentQuestion.question}
            </div>
            <div class="answers">
                <input type="radio" name="question${index}" value="a"> ${currentQuestion.a}<br>
                <input type="radio" name="question${index}" value="b"> ${currentQuestion.b}<br>
                <input type="radio" name="question${index}" value="c"> ${currentQuestion.c}<br>
                <input type="radio" name="question${index}" value="d"> ${currentQuestion.d}<br>
            </div>
            `;
        })
        .join("");

    quiz.innerHTML = output;
}

function getSelected() {
    const answers = [];
    quizData.forEach((_, index) => {
        const selector = `input[name=question${index}]:checked`;
        const answer = (document.querySelector(selector) || {}).value;
        answers.push(answer);
    });
    return answers;
}

submitBtn.addEventListener("click", () => {
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
