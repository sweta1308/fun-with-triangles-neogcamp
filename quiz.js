const formQuiz = document.querySelector(".form-quiz");
const btnSubmit = document.querySelector("#submit-btn");
const outputResult = document.querySelector("#output");

const correctAnswers = [
    "Obtuse",
    "180˚",
    "Right angled",
    "Equilateral",
    "Scalene",
    "45°, 35°, 100°",
    "70°",
    "1",
    "Acute",
    "60°",
]

btnSubmit.addEventListener("click", finalScore);

function finalScore() {
    const finalResults = new FormData(formQuiz);
    let score = 0;
    let index = 0;
    for (let value of finalResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    outputResult.innerText = "Your final score is " + score;
}