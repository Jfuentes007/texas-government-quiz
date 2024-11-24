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
    // Add more questions as needed
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
        </div>
        `
        )
        .join("");

    quizContainer.innerHTML = quizHTML;
}

// Show detailed results
function showResults() {
    let score = 0;
    let resultsHTML = `<h2>Your Results:</h2>`;
    
    quizData.forEach((data, index) => {
        const selectedAnswer = document.querySelector(
            `input[name="question${index}"]:checked`
        );
        const isCorrect = selectedAnswer && selectedAnswer.value === data.correct;

        // Check if the answer is correct and update the score
        if (isCorrect) {
            score++;
            resultsHTML += `
                <div>
                    <strong>Question ${index + 1}:</strong> Correct! (${data.question})
                </div>
            `;
        } else {
            const selectedText = selectedAnswer
                ? data[selectedAnswer.value]
                : "No answer selected";
            resultsHTML += `
                <div>
                    <strong>Question ${index + 1}:</strong> Incorrect<br>
                    Your answer: <em>${selectedText}</em><br>
                    Correct answer: <em>${data[data.correct]}</em>
                </div>
            `;
        }
    });

    // Display final score
    resultsHTML += `
        <h3>You got ${score} out of ${quizData.length} questions correct.</h3>
    `;

    // Show results in the container
    resultsContainer.innerHTML = resultsHTML;
}

// Event listener for submit button
submitBtn.addEventListener("click", showResults);

// Initialize quiz
loadQuiz();
submitBtn.addEventListener("click", () => {
    const selectedAnswer = getSelected();

    if (selectedAnswer) {
        const currentQuizData = quizData[currentQuiz];
        const feedbackDiv = document.createElement("div");
        feedbackDiv.classList.add("feedback");

        if (selectedAnswer === currentQuizData.correct) {
            score++;
            feedbackDiv.textContent = "Correct! Great job!";
            feedbackDiv.style.color = "green";
        } else {
            feedbackDiv.textContent = `Wrong! The correct answer is: ${
                currentQuizData[currentQuiz.correct]
            }`;
            feedbackDiv.style.color = "red";
        }

        quiz.appendChild(feedbackDiv);

        setTimeout(() => {
            currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `
                    <h2>You answered ${score} out of ${quizData.length} questions correctly.</h2>
                    <button onclick="location.reload()">Restart</button>
                `;
            }
        }, 2000); // Delay before showing the next question
    } else {
        alert("Please select an answer!");
    }
});
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
        question: "Who can call a special session of the Texas legislature?",
        a: "The Lieutenant Governor.",
        b: "The Speaker of the House.",
        c: "The Governor.",
        d: "The President.",
        correct: "c"
    },
    {
        question: "What does the Texas Railroad Commission regulate?",
        a: "Education policies.",
        b: "Oil and gas industries.",
        c: "Public schools.",
        d: "Elections.",
        correct: "b"
    },
    {
        question: "What is redistricting?",
        a: "Drawing new boundaries for legislative districts.",
        b: "Removing a governor from office.",
        c: "Amending the state constitution.",
        d: "Electing state senators.",
        correct: "a"
    },
    {
        question: "What is the role of the Lieutenant Governor?",
        a: "Head of the House of Representatives.",
        b: "Presiding officer of the Senate.",
        c: "Chief legal advisor to the state.",
        d: "State comptroller.",
        correct: "b"
    },
    {
        question: "What is a filibuster?",
        a: "A legislative tactic to delay or block action on a bill.",
        b: "A law passed by Congress.",
        c: "A type of budget allocation.",
        d: "A process for judicial review.",
        correct: "a"
    },
    {
        question: "What is the Texas Supreme Court responsible for?",
        a: "Criminal appellate cases.",
        b: "Civil appellate cases.",
        c: "Both civil and criminal cases.",
        d: "Drafting state laws.",
        correct: "b"
    }
];

