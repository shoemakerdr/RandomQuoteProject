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
    **do some js to change the background and button colors to random colors from a palette**
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            jsonArray = JSON.parse(this.responseText);
            var jsonQuote = jsonArray[Math.random() * jsonArray.length];
            document.getElementById("quote-text").innerHTML = htmlQuote.quote;
            document.getElementById("author-name").innerHTML = htmlQuote.name;
        }
    }
    xmlhttp.open("GET", "https://raw.githubusercontent.com/shoemakerdr/RandomQuoteProject/master/quotes.json", true);
    xmlhttp.send();
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