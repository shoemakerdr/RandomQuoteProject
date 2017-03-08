var twitter;

function loadQuote() {
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