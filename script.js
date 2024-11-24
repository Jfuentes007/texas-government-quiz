// Get DOM elements
const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const resultsContainer = document.getElementById("results");

// Quiz data
const quizData = [
    {
        question: "What does the term bicameral mean?",
        a: "Having a legislative assembly composed of two chambers or houses.",
        b: "Having a legislature that meets every two years.",
        c: "Having a legislature composed of one chamber.",
        d: "Having a legislature that meets daily.",
        correct: "a",
    },
    {
        question: "What does the term biennial mean?",
        a: "Occurring every two months.",
        b: "Occurring every year.",
        c: "Occurring every two years.",
        d: "Occurring twice a year.",
        correct: "c",
    },
    {
        question: "What is the length of a regular session of the Texas legislature?",
        a: "90 days",
        b: "140 days",
        c: "200 days",
        d: "365 days",
        correct: "b",
    },
    {
        question: "What is a local bill?",
        a: "A bill affecting the entire state.",
        b: "A bill affecting only units of local government.",
        c: "A bill granting exemptions to state law.",
        d: "A bill passed by Congress.",
        correct: "b",
    },
];

// Load quiz
function loadQuiz() {
    const quizHTML = quizData
        .map(
            (data, index) => `
        <div class="quiz-item" id="quiz-item-${index}">
            <div class="question">${index + 1}. ${data.question}</div>
            <div class="answers">
                <label><input type="radio" name="question${index}" value="a"> ${data.a}</label><br>
                <label><input type="radio" name="question${index}" value="b"> ${data.b}</label><br>
                <label><input type="radio" name="question${index}" value="c"> ${data.c}</label><br>
                <label><input type="radio" name="question${index}" value="d"> ${data.d}</label><br>
            </div>
            <div class="feedback" id="feedback-${index}" style="margin-top: 10px; font-weight: bold; color: #007bff; display: none;">
                <!-- Feedback will appear here -->
            </div>
        </div>
        `
        )
        .join("");

    quizContainer.innerHTML = quizHTML;
}

// Show results immediately
function showImmediateFeedback() {
    quizData.forEach((data, index) => {
        const selectedAnswer = document.querySelector(
            `input[name="question${index}"]:checked`
        );
        const feedbackEl = document.getElementById(`feedback-${index}`);

        // Clear existing feedback
        feedbackEl.style.display = "none";

        if (selectedAnswer) {
            if (selectedAnswer.value === data.correct) {
                feedbackEl.style.color = "green";
                feedbackEl.innerText = "Correct!";
            } else {
                feedbackEl.style.color = "red";
                feedbackEl.innerText = `Incorrect. The correct answer is: ${data[data.correct]}`;
            }
            feedbackEl.style.display = "block";
        } else {
            feedbackEl.style.color = "orange";
            feedbackEl.innerText = "Please select an answer!";
            feedbackEl.style.display = "block";
        }
    });
}

// Event listener for submit button
submitBtn.addEventListener("click", showImmediateFeedback);

// Initialize quiz
loadQuiz();
