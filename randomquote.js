/*
What we need for this app:

A JSON file/API with lots of quotes

A QuoteDisplay object that has properties of "quote" and "author" and get/set
methods for these properties.

Manipulate the following DOM elements:
- quote text
- author text
- tweet button
- new quote button

function loadQuote() {
    var htmlQuote = new Quote (jsonQuote.quote, jsonQuote.name);
    document.getElementById("quote-text") = "<p>" + htmlQuote.quote + "</p>";
    document.getElementById("author-name") = "<p>" + htmlQuote.author + "</p>";
    color scheme = htmlQuote.color;
}


*/

function ranRGBValue () {
    return Math.floor(Math.random() * 256);
}

function randomColorFromStarter(red, green, blue) {
    var avgRed = (ranRGBValue() + red) / 2;
    var avgGreen = (ranRGBValue() + green) / 2;
    var avgBlue = (ranRGBValue() + blue) / 2;
    return "rgb(" + avgRed + "," + avgGreen + "," + avgBlue + ")";
}


function Quote(quote, author) {
    this.quote = quote;
    this.author = author;
    this.color = randomColorFromStarter(144, 237, 149);
}

var quote1 = new Quote("I am a dude", "Eddy Dude");
console.log(quote1);
console.log(randomColorFromStarter(144, 237, 149));