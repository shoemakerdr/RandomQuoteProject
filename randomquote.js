/*
Manipulate the following DOM elements:
- quote text[x]
- author text[x]
- tweet button[ ]
- new quote button[ ]

*/
var twitter;

function loadQuote() {
    // do some js to change the background and button colors to random colors 
    // from a palette
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var jsonArray = JSON.parse(this.responseText);
            var jsonQuote = jsonArray[Math.floor(Math.random() * jsonArray.length)];
            document.getElementById("quote-text").innerHTML = "\"" + jsonQuote.quote + "\"";
            document.getElementById("author-name").innerHTML = "- " + jsonQuote.name;
            twitter = "https://twitter.com/intent/tweet?hashtags=FreeCodeCamp&text=" + "\"" + jsonQuote.quote + "\" " + "-" + jsonQuote.name; 
        }
    }
    xmlhttp.open("GET", "https://raw.githubusercontent.com/shoemakerdr/RandomQuoteProject/master/quotes.json", true);
    xmlhttp.send();
}

function ranRGBValue () {
    return Math.floor(Math.random() * 256);
}

// 
function randomColorFromStarter(red, green, blue) {
    var avgRed = (ranRGBValue() + red) / 2;
    var avgGreen = (ranRGBValue() + green) / 2;
    var avgBlue = (ranRGBValue() + blue) / 2;
    return "rgb(" + avgRed + "," + avgGreen + "," + avgBlue + ")";
}