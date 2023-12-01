const questions = [
    "What was your first impression of me, and how has it changed?",
    "Describe a moment in your life where you felt the most loved.",
    "What are three things you admire about me?",
    "What's a challenge you've faced that has shaped who you are today?",
    "How do you express affection, and how do you like to receive it?",
    "Share a memory that makes you smile every time you think of it.",
    "What are your thoughts on the role of trust in a relationship?",
    "What's something you've always wanted to do but haven't yet? Why?",
    "How do you deal with conflict in a relationship?",
    "Describe a perfect day for you, from morning to night.",
    "What are your main goals for the next five years?",
    "What is one thing you've never told anyone but would like to share with me?",
    "How do you think our differences complement each other?",
    "What's a lesson from a past relationship that you've learned?",
    "What does commitment mean to you?",
    "How do you maintain your individuality while being in a relationship?",
    "What's a fear you have regarding relationships?",
    "What's your favorite way to spend time together?",
    "What's a song that always reminds you of a special time in your life?",
    "How do you feel about the balance of give and take in our interactions?",
    "What's a dream you're still pursuing?",
    "How do you think love evolves over time?",
    "What's something you'd like to change about yourself?",
    "What does a healthy relationship look like to you?",
    "Describe a moment when you felt particularly vulnerable.",
    "How do you approach forgiveness in a relationship?",
    "What are your thoughts on the importance of communication?",
    "Share a tradition or value that's important to you.",
    "What's something you're passionate about?",
    "How do you handle stress or pressure, especially in a relationship?",
    "What's an achievement you're really proud of?",
    "How do you think we can support each other's growth?",
    "What's a habit or quirk of yours that few people know about?",
    "How do you feel about the role of compromise in a relationship?",
    "What's something you find challenging about relationships?",
    "Describe a moment when you felt truly understood by someone.",
    "How do you balance personal space and intimacy?",
    "What's a topic you've always wanted to learn more about?",
    "How do you feel about the concept of soulmates?",
    "Share a fear you have about the future.",
    "What's something you do to show someone you care?",
    "How do you feel about maintaining friendships while in a relationship?",
    "What's an important lesson your family taught you?",
    "Describe an experience that changed your perspective on life.",
    "How do you feel about vulnerability in a relationship?",
    "What's a tradition or activity you'd like to start together?",
    "What's something that always makes you laugh?",
    "How do you feel about the role of honesty in our interactions?",
    "What's a personal challenge you're currently facing?",
    "How do you envision the future of our relationship?"
];

function getRandomQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
}

function displayQuestion() {
    document.getElementById('question').textContent = getRandomQuestion();
}

document.getElementById('nextQuestion').addEventListener('click', displayQuestion);

// Initialize with a random question on load
displayQuestion();
