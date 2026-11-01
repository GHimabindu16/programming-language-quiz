
const quizData = {
    HTML: [
        { q: "What does HTML stand for?", o: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text Management Language", "Home Tool Markup Language"], a: 0 },
        { q: "Which tag creates a paragraph?", o: ["<h1>", "<p>", "<br>", "<div>"], a: 1 },
        { q: "Which tag creates a hyperlink?", o: ["<link>", "<a>", "<href>", "<url>"], a: 1 },
        { q: "Which tag displays an image?", o: ["<image>", "<picture>", "<img>", "<src>"], a: 2 },
        { q: "Which tag creates an unordered list?", o: ["<ol>", "<ul>", "<li>", "<list>"], a: 1 },
        { q: "Which attribute specifies an image path?", o: ["href", "src", "alt", "path"], a: 1 },
        { q: "Which tag creates a table row?", o: ["<td>", "<th>", "<tr>", "<table-row>"], a: 2 },
        { q: "Which tag defines the largest heading?", o: ["<h6>", "<head>", "<heading>", "<h1>"], a: 3 },
        { q: "Which attribute provides alternative image text?", o: ["title", "alt", "name", "text"], a: 1 },
        { q: "Which tag links an external CSS file?", o: ["<style>", "<css>", "<link>", "<script>"], a: 2 }
    ],

    CSS: [
        { q: "What does CSS stand for?", o: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], a: 1 },
        { q: "Which property changes text color?", o: ["font-color", "text-color", "color", "background"], a: 2 },
        { q: "Which property changes background color?", o: ["background-color", "color", "bg", "fill"], a: 0 },
        { q: "Which symbol selects a class?", o: ["#", ".", "*", "&"], a: 1 },
        { q: "Which symbol selects an ID?", o: [".", "#", "@", "$"], a: 1 },
        { q: "Which property controls text size?", o: ["font-size", "text-style", "font-weight", "size"], a: 0 },
        { q: "Which property makes text bold?", o: ["font-style", "font-weight", "text-bold", "bold"], a: 1 },
        { q: "Which layout system is one-dimensional?", o: ["Grid", "Flexbox", "Float", "Position"], a: 1 },
        { q: "Which property rounds corners?", o: ["corner", "border-style", "border-radius", "round"], a: 2 },
        { q: "Which CSS property adds space inside an element?", o: ["margin", "padding", "gap", "border"], a: 1 }
    ],

    JavaScript: [
        { q: "Which keyword declares a variable that can be reassigned?", o: ["const", "let", "static", "fixed"], a: 1 },
        { q: "Which symbol is used for strict equality?", o: ["=", "==", "===", "!="], a: 2 },
        { q: "Which method prints to the browser console?", o: ["print()", "console.log()", "display()", "write()"], a: 1 },
        { q: "Which keyword defines a function?", o: ["function", "method", "func", "define"], a: 0 },
        { q: "Which data type represents true or false?", o: ["String", "Number", "Boolean", "Array"], a: 2 },
        { q: "Which method adds an item to an array's end?", o: ["pop()", "push()", "shift()", "join()"], a: 1 },
        { q: "Which method selects an element by ID?", o: ["getElementById()", "getClass()", "queryId()", "selectId()"], a: 0 },
        { q: "Which operator means logical AND?", o: ["||", "!", "&&", "&"], a: 2 },
        { q: "Which keyword creates a constant?", o: ["let", "var", "const", "new"], a: 2 },
        { q: "Which method converts JSON text into a JavaScript value?", o: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.read()"], a: 1 }
    ],

    Java: [
        { q: "Who developed Java?", o: ["Microsoft", "Sun Microsystems", "Google", "Apple"], a: 1 },
        { q: "Which keyword creates a class?", o: ["class", "Class", "create", "object"], a: 0 },
        { q: "Which method is the usual Java program entry point?", o: ["start()", "run()", "main()", "init()"], a: 2 },
        { q: "Which type stores whole numbers?", o: ["double", "int", "char", "boolean"], a: 1 },
        { q: "Which keyword creates an object?", o: ["this", "class", "new", "static"], a: 2 },
        { q: "Which keyword inherits a class?", o: ["implements", "extends", "inherits", "super"], a: 1 },
        { q: "Which symbol ends a Java statement?", o: [".", ":", ";", ","], a: 2 },
        { q: "Which type stores true or false?", o: ["int", "String", "boolean", "float"], a: 2 },
        { q: "Which keyword prevents a variable from being reassigned?", o: ["static", "final", "private", "void"], a: 1 },
        { q: "Which package contains the Scanner class?", o: ["java.io", "java.util", "java.lang", "java.net"], a: 1 }
    ],

    Python: [
        { q: "Which function displays output in Python?", o: ["echo()", "print()", "show()", "display()"], a: 1 },
        { q: "Which symbol starts a comment?", o: ["//", "/*", "#", "--"], a: 2 },
        { q: "Which keyword defines a function?", o: ["function", "def", "fun", "method"], a: 1 },
        { q: "Which data type stores multiple items in an ordered, changeable collection?", o: ["tuple", "list", "set", "int"], a: 1 },
        { q: "Which brackets create a dictionary?", o: ["[]", "()", "{}", "<>"], a: 2 },
        { q: "Which keyword starts a conditional statement?", o: ["when", "if", "check", "case"], a: 1 },
        { q: "Which function gets the length of a collection?", o: ["size()", "count()", "len()", "length()"], a: 2 },
        { q: "Which keyword imports a module?", o: ["include", "using", "import", "require"], a: 2 },
        { q: "Which value represents no value?", o: ["null", "None", "undefined", "empty"], a: 1 },
        { q: "Which loop iterates over a sequence?", o: ["repeat", "for", "loop", "each"], a: 1 }
    ],

    SQL: [
        { q: "What does SQL stand for?", o: ["Structured Query Language", "Simple Question Language", "System Query Logic", "Standard Quick Language"], a: 0 },
        { q: "Which command retrieves data?", o: ["GET", "SELECT", "FETCH ALL", "OPEN"], a: 1 },
        { q: "Which command adds a new row?", o: ["ADD", "UPDATE", "INSERT", "CREATE"], a: 2 },
        { q: "Which command changes existing data?", o: ["UPDATE", "ALTER", "CHANGE", "MODIFY"], a: 0 },
        { q: "Which clause filters rows?", o: ["ORDER BY", "WHERE", "GROUP BY", "FROM"], a: 1 },
        { q: "Which command removes rows from a table?", o: ["REMOVE", "DROP", "DELETE", "CLEAR"], a: 2 },
        { q: "Which keyword sorts query results?", o: ["SORT", "ORDER BY", "ARRANGE", "GROUP"], a: 1 },
        { q: "Which function counts rows?", o: ["SUM()", "TOTAL()", "COUNT()", "NUMBER()"], a: 2 },
        { q: "Which key uniquely identifies a row?", o: ["Foreign key", "Primary key", "Common key", "Secondary key"], a: 1 },
        { q: "Which command creates a table?", o: ["MAKE TABLE", "NEW TABLE", "CREATE TABLE", "ADD TABLE"], a: 2 }
    ]
};

const languages = Object.keys(quizData);

const languageScreen = document.getElementById("language-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const languageList = document.getElementById("language-list");
const categoryName = document.getElementById("category-name");
const timerDisplay = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

let selectedLanguage = "";
let questions = [];
let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timerInterval = null;
let answered = false;

// Create language selection buttons
languages.forEach(language => {
    const button = document.createElement("button");
    button.className = "language-btn";
    button.textContent = language;

    button.addEventListener("click", () => {
        startQuiz(language);
    });

    languageList.appendChild(button);
});

function startQuiz(language) {
    selectedLanguage = language;
    questions = quizData[language];
    currentQuestion = 0;
    score = 0;

    languageScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    categoryName.textContent = language + " Quiz";

    showQuestion();
}

function showQuestion() {
    clearInterval(timerInterval);

    answered = false;
    timeLeft = 15;

    const question = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent = question.q;
    timerDisplay.textContent = timeLeft;

    progressBar.style.width =
        `${(currentQuestion / questions.length) * 100}%`;

    optionsContainer.innerHTML = "";
    feedback.textContent = "";
    nextBtn.disabled = true;

    question.o.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "option-btn";
        button.textContent = option;

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        optionsContainer.appendChild(button);
    });

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeExpired();
        }
    }, 1000);
}

function selectAnswer(selectedIndex) {
    if (answered) return;

    answered = true;
    clearInterval(timerInterval);

    const correctIndex = questions[currentQuestion].a;
    const buttons = optionsContainer.querySelectorAll("button");

    buttons.forEach(button => button.disabled = true);

    if (selectedIndex === correctIndex) {
        score++;
        buttons[selectedIndex].classList.add("correct");
        feedback.textContent = "Correct answer!";
        feedback.style.color = "#218838";
    } else {
        buttons[selectedIndex].classList.add("wrong");
        buttons[correctIndex].classList.add("correct");
        feedback.textContent = "Incorrect! See the correct answer above.";
        feedback.style.color = "#c0392b";
    }

    nextBtn.disabled = false;
}

function timeExpired() {
    if (answered) return;

    answered = true;

    const correctIndex = questions[currentQuestion].a;
    const buttons = optionsContainer.querySelectorAll("button");

    buttons.forEach(button => button.disabled = true);
    buttons[correctIndex].classList.add("correct");

    feedback.textContent = "Time is up!";
    feedback.style.color = "#c0392b";

    nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    clearInterval(timerInterval);

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const percentage = Math.round((score / questions.length) * 100);

    document.getElementById("score").textContent =
        `${score} / ${questions.length}`;

    document.getElementById("result-message").textContent =
        percentage >= 80 ? "Excellent work!" :
        percentage >= 50 ? "Good effort! Keep learning." :
        "Keep practising. You can improve!";

    document.getElementById("result-details").textContent =
        `You scored ${percentage}% in ${selectedLanguage}.`;
    
    progressBar.style.width = "100%";
}

document.getElementById("restart-btn").addEventListener("click", () => {
    clearInterval(timerInterval);

    resultScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    languageScreen.classList.remove("hidden");
});
