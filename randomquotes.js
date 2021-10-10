const quote_div = document.querySelector("#quote-div");
const quote_text_div = document.querySelector("#quote-text-div");
const quote_author_div = document.querySelector("#quote-author-div");

quote_text_div.innerText = quotes.quotes[0].text;
quote_author_div.innerText = quotes.quotes[0].author;