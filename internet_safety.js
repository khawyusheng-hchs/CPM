// Function to display a random quote about internet safety
function displayRandomQuote() {
  const quotes = [
    "The only way to stay safe online is to be cautious and informed.",
    "It's not about being afraid of the internet; it's about using it wisely.",
    "Your online safety is your responsibility. Protect yourself and your data.",
    "Don't trust everything you read online. Verify information before sharing it."
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}

// Call the function to display a quote on page load
window.onload = displayRandomQuote;
