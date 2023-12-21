document.addEventListener('DOMContentLoaded', function() {
    getRandomQuote();
});

function getRandomQuote() {
    // Replace this array with your own quotes
    const quotes = [
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = document.getElementById('quote-text');
    quoteText.textContent = quotes[randomIndex];
}

function shareQuote() {
    const quoteText = document.getElementById('quote-text').textContent;

    // For simplicity, we're just logging the quote to the console in this example.
    // In a real application, you'd use a sharing library or API.
    console.log('Shared Quote:', quoteText);
}
