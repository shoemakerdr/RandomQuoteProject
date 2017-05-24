
document.addEventListener("DOMContentLoaded", function() {

    // define elements
    const tweetButton = document.getElementById("tweet-button");
    const quoteDiv = document.getElementById("quote-text");
    const nameDiv = document.getElementById("author-name");
    const changeButton = document.getElementById("change-button");
    let twitterURL;

    // initial quote loading/rendering
    loadQuote();

    // binding event listeners
    changeButton.addEventListener('click', loadQuote);

    tweetButton.addEventListener('click', () => {
        window.open(twitterURL, '_blank');
    });

    // gets new quote from quotes.json
    function loadQuote() {
        fetch('https://raw.githubusercontent.com/shoemakerdr/RandomQuoteProject/master/quotes.json')
            .then(res => res.json())
            .then(render)
            .catch(err => console.log(err));
    }

    // renders quote to page
    function render(data) {
        const rand = data[Math.floor(Math.random() * data.length)];
        quoteDiv.innerHTML = `"${rand.quote}"`;
        nameDiv.innerHTML = `- ${rand.name}`;
        // redefine twitterURL for new quote
        twitterURL = `https://twitter.com/intent/tweet?hashtags=FreeCodeCamp&text="${rand.quote} "-${rand.name}`;
    }

});
