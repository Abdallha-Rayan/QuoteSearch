const searchInput = document.getElementById("search");
const quoteList = document.getElementById("quoteList");
const errorMsg = document.getElementById("error");
let quotes = [];

async function fetchQuotes() {
    try {
        const response = await fetch("https://dummyjson.com/quotes");
        if (!response.ok) throw new Error("Failed to fetch quotes");
        
        const data = await response.json();
        quotes = data.quotes;
        displayQuotes(quotes);
    } catch (error) {
        errorMsg.textContent = error.message;
    }
}

function displayQuotes(quotesToShow) {
    quoteList.innerHTML = "";
    quotesToShow.forEach(quote => {
        const listItem = document.createElement("li");
        listItem.textContent = quote.quote;
        quoteList.appendChild(listItem);
    });
}

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredQuotes = quotes.filter(q => q.quote.toLowerCase().includes(searchText));
    displayQuotes(filteredQuotes);
});

fetchQuotes();
