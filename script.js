const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const button = document.getElementById("newQuoteBtn");

const quotes = [
  {
    text: "In the multitude of my anxieties within me, Your comfort delight my soul.",
    author: "Psalms 94:19"
  },
  {
    text: "The Lord is good to those who wait for him, To the soul who seeks Him.",
    author: "Lamentations 3:25"
  },
  {
    text: "Fear not, for I have redeemed you; I have called you by your name; You are Mine.",
    author: "Isaiah 43:1"
  },
  {
    text: "In the world you will have tribulation; but be of good cheer, I have overcome the world.",
    author: "John 16:33"
  },
  {
    text: "The name of the Lord is a strong tower; The righetous run to it and are safe.",
    author: "Proverbs 18:10"
  },
  {
    text: "Come to Me, all you who labor and are heavy laden, and I will give you rest.",
    author: "Matthew 11:28"
  },
  {
    text: "My flesh and my heart fail; But God is the strength of my heart and my portion forever.",
    author: "Psalm 73:26"
  }
];

function getQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = `"${randomQuote.text}"`;
  authorText.textContent = `- ${randomQuote.author}`;
}

button.addEventListener("click", getQuote);

getQuote();