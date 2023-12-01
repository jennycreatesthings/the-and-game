const questions = [
    { number: "01", text: "What was your first impression of me, and how has it changed?" },
    { number: "02", text: "Describe a moment in your life where you felt the most loved." },
    { number: "03", text: "What are three things you admire about me?" },
    { number: "04", text: "What's a challenge you've faced that has shaped who you are today?" },
    { number: "05", text: "How do you express affection, and how do you like to receive it?" },
    { number: "06", text: "Share a memory that makes you smile every time you think of it." },
    { number: "07", text: "What are your thoughts on the role of trust in a relationship?" },
    { number: "08", text: "What's something you've always wanted to do but haven't yet? Why?" },
    { number: "09", text: "How do you deal with conflict in a relationship?" },
    { number: "10", text: "Describe a perfect day for you, from morning to night." },
    { number: "11", text: "What are your main goals for the next five years?" },
    { number: "12", text: "What is one thing you've never told anyone but would like to share with me?" },
    { number: "13", text: "How do you think our differences complement each other?" },
    { number: "14", text: "What's a lesson from a past relationship that you've learned?" },
    { number: "15", text: "What does commitment mean to you?" },
    { number: "16", text: "How do you maintain your individuality while being in a relationship?" },
    { number: "17", text: "What's a fear you have regarding relationships?" },
    { number: "18", text: "What's your favorite way to spend time together?" },
    { number: "19", text: "What's a song that always reminds you of a special time in your life?" },
    { number: "20", text: "How do you feel about the balance of give and take in our interactions?" },
    { number: "21", text: "What's a dream you're still pursuing?" },
    { number: "22", text: "How do you think love evolves over time?" },
    { number: "23", text: "What's something you'd like to change about yourself?" },
    { number: "24", text: "What does a healthy relationship look like to you?" },
    { number: "25", text: "Describe a moment when you felt particularly vulnerable." },
    { number: "26", text: "How do you approach forgiveness in a relationship?" },
    { number: "27", text: "What are your thoughts on the importance of communication?" },
    { number: "28", text: "Share a tradition or value that's important to you." },
    { number: "29", text: "What's something you're passionate about?" },
    { number: "30", text: "How do you handle stress or pressure, especially in a relationship?" },
    { number: "31", text: "What's an achievement you're really proud of?" },
    { number: "32", text: "How do you think we can support each other's growth?" },
    { number: "33", text: "What's a habit or quirk of yours that few people know about?" },
    { number: "34", text: "How do you feel about the role of compromise in a relationship?" },
    { number: "35", text: "What's something you find challenging about relationships?" },
    { number: "36", text: "Describe a moment when you felt truly understood by someone." },
    { number: "37", text: "How do you balance personal space and intimacy?" },
    { number: "38", text: "What's a topic you've always wanted to learn more about?" },
    { number: "39", text: "How do you feel about the concept of soulmates?" },
    { number: "40", text: "Share a fear you have about the future." },
    { number: "41", text: "What's something you do to show someone you care?" },
    { number: "42", text: "How do you feel about maintaining friendships while in a relationship?" },
    { number: "43", text: "What's an important lesson your family taught you?" },
    { number: "44", text: "Describe an experience that changed your perspective on life." },
    { number: "45", text: "How do you feel about vulnerability in a relationship?" },
    { number: "46", text: "What's a tradition or activity you'd like to start together?" },
    { number: "47", text: "What's something that always makes you laugh?" },
    { number: "48", text: "How do you feel about the role of honesty in our interactions?" },
    { number: "49", text: "What's a personal challenge you're currently facing?" },
    { number: "50", text: "How do you envision the future of our relationship?" }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const questionNumberElement = document.getElementById('question-number');
    const currentQuestion = questions[currentQuestionIndex];
    
    questionElement.textContent = currentQuestion.text;
    questionNumberElement.textContent = currentQuestion.number;
    
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length; // Loop back to the first question
}

document.getElementById('nextQuestion').addEventListener('click', displayQuestion);

// Initialize with the first question
displayQuestion();
