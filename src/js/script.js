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
    { number: "50", text: "How do you envision the future of our relationship?" },
    { number: "51", text: "In what ways do you feel we connect the deepest?" },
    { number: "52", text: "How has your idea of love changed over time?" },
    { number: "53", text: "What little things do you think we can do to strengthen our relationship?" },
    { number: "54", text: "What's a dream you've never voiced out loud?" },
    { number: "55", text: "What do you treasure most about our time together?" },
    { number: "56", text: "How can I make you feel more appreciated?" },
    { number: "57", text: "What's something you've learned from me?" },
    { number: "58", text: "When do you feel most at peace?" },
    { number: "59", text: "What adventure would you love for us to go on next?" },
    { number: "60", text: "What's a challenge you think we can overcome together?" },
    { number: "61", text: "How do you act when you feel disconnected from me?" },
    { number: "62", text: "What's something you've always wanted to ask me?" },
    { number: "63", text: "What does support look like to you in our relationship?" },
    { number: "64", text: "How do we balance each other out?" },
    { number: "65", text: "What's something I do that makes you feel loved?" },
    { number: "66", text: "What's a memory of us that you often revisit?" },
    { number: "67", text: "What's one thing you feel our relationship is missing?" },
    { number: "68", text: "How do you envision our life together in 10 years?" },
    { number: "69", text: "What's an obstacle you feel we've successfully navigated as a couple?" },
    { number: "70", text: "How do you think we've grown since we started dating?" },
    { number: "71", text: "What do you want to achieve in your personal life?" },
    { number: "72", text: "How has your perception of me changed since we first met?" },
    { number: "73", text: "What's a risk you think is worth taking for love?" },
    { number: "74", text: "What's a key lesson from a past relationship that influences us today?" },
    { number: "75", text: "What's a fear of yours that you think I don't know about?" },
    { number: "76", text: "How do you feel about the pace of our relationship's progress?" },
    { number: "77", text: "What's something about me that puzzles you?" },
    { number: "78", text: "What do you need from me that you're not currently getting?" },
    { number: "79", text: "What's an aspect of your life you think I could understand better?" },
    { number: "80", text: "How do you think we can improve our communication?" },
    { number: "81", text: "What's a compromise you've made for our relationship that you're proud of?" },
    { number: "82", text: "What do you think is unique about our bond?" },
    { number: "83", text: "What's a part of your past that you think I should know more about?" },
    { number: "84", text: "How do you think we handle adversity as a couple?" },
    { number: "85", text: "What's a moment where you've seen us at our best?" },
    { number: "86", text: "What's a trait of mine that you think complements yours?" },
    { number: "87", text: "What's a topic you've been hesitant to bring up?" },
    { number: "88", text: "What's a way we can bring more fun into our relationship?" },
    { number: "89", text: "What's a goal you think we should aim for together?" },
    { number: "90", text: "What's a boundary of yours that you think I should be more aware of?" },
    { number: "91", text: "What's a mutual interest you think we can explore more?" },
    { number: "92", text: "What's an experience you think has shaped us the most?" },
    { number: "93", text: "How do you feel about our financial goals and planning?" },
    { number: "94", text: "What's a way in which you think we are very similar?" },
    { number: "95", text: "What's an experience you'd love to relive with me?" },
    { number: "96", text: "What's a lesson you hope we never forget?" },
    { number: "97", text: "How do you think we've handled compromise and negotiation?" },
    { number: "98", text: "What's a part of your daily routine that you think I should be part of?" },
    { number: "99", text: "What's a topic you feel we should discuss more openly?" },
    { number: "100", text: "What's a way we can strengthen our trust in each other?" }
    
];

function displayQuestion() {
    console.log('Displaying a new question.');
    // Get a random question index
    const randomIndex = Math.floor(Math.random() * questions.length);
    // Select the question and number using that index
    const question = questions[randomIndex];

    // Find the question and number elements in the DOM
    const questionElement = document.getElementById('question');
    const questionNumberElement = document.getElementById('question-number');

    // Update the DOM elements with the question text and number
    questionElement.textContent = question.text;
    questionNumberElement.textContent = question.number;
}

// Attach an event listener to the 'Next Question' button
document.getElementById('nextQuestion').addEventListener('click', displayQuestion);

// Display the first question when the script loads
displayQuestion();
