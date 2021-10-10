const setQuoteText = (text) => {
    const quote_text_div = document.querySelector("#quote-text-div");
    quote_text_div.innerText = `“${text.trim()}”`;
}

const setAuthor = (author) => {
    const quote_author_div = document.querySelector("#quote-author-div");
    quote_author_div.innerText = `– ${author}`;
}

let random_index = Math.floor(Math.random() * quotes.quotes.length)

console.log(`Random index ${random_index}`);

setQuoteText(quotes.quotes[random_index].text);
setAuthor(quotes.quotes[random_index].author);