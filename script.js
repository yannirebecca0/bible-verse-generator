const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const categoryLabel = document.getElementById("categoryLabel");
const button = document.getElementById("newQuoteBtn");
const categorySelect = document.getElementById("categorySelect");

const quotes = [
  {
    text: "In the multitude of my anxieties within me, Your comforts delight my soul.",
    author: "Psalm 94:19",
    category: "Anxiety"
  },
  {
    text: "Fear not, for I have redeemed you; I have called you by your name; You are Mine.",
    author: "Isaiah 43:1",
    category: "Anxiety"
  },
  {
    text: "Come to Me, all you who labor and are heavy laden, and I will give you rest.",
    author: "Matthew 11:28",
    category: "Peace"
  },
  {
    text: "The Lord is good to those who wait for Him, to the soul who seeks Him.",
    author: "Lamentations 3:25",
    category: "Hope"
  },
  {
    text: "In the world you will have tribulation; but be of good cheer, I have overcome the world.",
    author: "John 16:33",
    category: "Hope"
  },
  {
    text: "My flesh and my heart fail; but God is the strength of my heart and my portion forever.",
    author: "Psalm 73:26",
    category: "Strength"
  },
  {
    text: "The name of the Lord is a strong tower; the righteous run to it and are safe.",
    author: "Proverbs 18:10",
    category: "Strength"
  },
  {
    text: "I can do all things through Christ who strengthens me.",
    author: "Philippians 4:13",
    category: "Strength"
  },
  {
    text: "Now faith is the substance of things hoped for, the evidence of things not seen.",
    author: "Hebrews 11:1",
    category: "Faith"
  },
  {
    text: "For we walk by faith, not by sight.",
    author: "2 Corinthians 5:7",
    category: "Faith"
  },
  {
    text: "Be still, and know that I am God.",
    author: "Psalm 46:10",
    category: "Peace"
  },
  {
    text: "The Lord will fight for you, and you shall hold your peace.",
    author: "Exodus 14:14",
    category: "Peace"
  }
];

function getQuote() {
  const selectedCategory = categorySelect.value;

  let filteredQuotes = quotes;

  if (selectedCategory !== "All") {
    filteredQuotes = quotes.filter(quote => quote.category === selectedCategory);
  }

  const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];

  quoteText.textContent = `"${randomQuote.text}"`;
  authorText.textContent = `- ${randomQuote.author}`;
  categoryLabel.textContent = `Category: ${randomQuote.category}`;
}

button.addEventListener("click", getQuote);
categorySelect.addEventListener("change", getQuote);

getQuote();
