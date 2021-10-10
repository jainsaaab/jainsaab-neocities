const setQuoteText = (text) => {
    const quote_text_div = document.querySelector("#quote-text-div");
    quote_text_div.innerText = `“${text.trim()}”`;
}

const setAuthor = (author) => {
    const quote_author_div = document.querySelector("#quote-author-div");
    quote_author_div.innerText = `– ${author}`;
}

const getIndex = () => {
    const random_index = Math.floor(Math.random() * quotes.quotes.length)
    console.log(`Random index ${random_index}`);
    return random_index;
}

const displayQuote = () => {
    const index = getIndex();
    setQuoteText(quotes.quotes[index].text);
    setAuthor(quotes.quotes[index].author);
}

const refresh = displayQuote;

window.onload = () => {
    console.log('document loaded');
    displayQuote();
}