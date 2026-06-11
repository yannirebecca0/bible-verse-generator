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
  text: "Casting all your care upon Him, for He cares for you.",
  author: "1 Peter 5:7",
  category: "Anxiety"
},

{
  text: "When I am afraid, I will trust in You.",
  author: "Psalm 56:3",
  category: "Anxiety"
},

{
  text: "I sought the Lord, and He heard me, and delivered me from all my fears.",
  author: "Psalm 34:4",
  category: "Anxiety"
},

{
  text: "Fear not, for I am with you.",
  author: "Isaiah 41:10",
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
  text: "For I know the thoughts that I think toward you, says the Lord.",
  author: "Jeremiah 29:11",
  category: "Hope"
},

{
  text: "Now may the God of hope fill you with all joy and peace in believing.",
  author: "Romans 15:13",
  category: "Hope"
},

{
  text: "Let us hold fast the confession of our hope without wavering.",
  author: "Hebrews 10:23",
  category: "Hope"
},

{
  text: "Be of good courage, and He shall strengthen your heart.",
  author: "Psalm 31:24",
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
  text: "God is our refuge and strength.",
  author: "Psalm 46:1",
  category: "Strength"
},

{
  text: "He gives power to the weak.",
  author: "Isaiah 40:29",
  category: "Strength"
},

{
  text: "My grace is sufficient for you.",
  author: "2 Corinthians 12:9",
  category: "Strength"
},

{
  text: "Be strong and of good courage.",
  author: "Joshua 1:9",
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
  text: "Trust in the Lord with all your heart.",
  author: "Proverbs 3:5",
  category: "Faith"
},

{
  text: "For we walk by faith, not by sight.",
  author: "2 Corinthians 5:7",
  category: "Faith"
},

{
  text: "Faith comes by hearing, and hearing by the word of God.",
  author: "Romans 10:17",
  category: "Faith"
},

{
  text: "If you have faith as a mustard seed...",
  author: "Matthew 17:20",
  category: "Faith"
},
  {
    text: "Be still, and know that I am God.",
    author: "Psalm 46:10",
    category: "Peace"
  },
  {
  text: "Peace I leave with you, My peace I give to you.",
  author: "John 14:27",
  category: "Peace"
},

{
  text: "You will keep him in perfect peace.",
  author: "Isaiah 26:3",
  category: "Peace"
},

{
  text: "The peace of God, which surpasses all understanding...",
  author: "Philippians 4:7",
  category: "Peace"
},

{
  text: "I will both lie down in peace, and sleep.",
  author: "Psalm 4:8",
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
