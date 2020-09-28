
//Create a vairable that will hold the quote and the Author of the quote


// Create an Array of Objects to store in the data for your quotes
// Add data to your quote objects
const quotes = [
    {
        quote: "The best way to remember your wife's birthday is to forget it once.",
        source: "Bertrand Russell",
        citation: "Google",
        year: ''
    },
    {
        quote: "Science is what you know, philosophy is what you don't know.",
        source: "E. Joseph Cossman",
        citation: "Google",
        year: ''
    },
    {
        quote: "Anything that comes easy, comes wrong.",
        source: "Josephine Tessier",
        citation: "Google",
        year: ''
    },
    {
        quote: "Do it, just do it! Don't let your dreams be dreams.",
        source: "Shia LaBeouf",
        citation: "Google",
        year: '2015'
    },
    {
        quote: "Make your life a masterpiece; imagine no limitations on what you can be, have or do",
        source: "Brian Tracy",
        citation: "Google",
        year: ''
    },
]


/* 
Create the getRandomQuote function
The getRandomQuote function should create a random number,
and use that random number to return a random quote object from the quotes array.
*/
    function getRandomQuote() {
        let random = Math.floor(Math.random() * (quotes.length));
        return quotes[random]; // Return command crucial for sending the random quote back to a variable in the printQuote method
        //console.log(quotes[random]); // QA - Successful
        // document.getElementById('html').innerHTML = quotes[random]; // QA - Successful
    }

    // getRandomQuote();
    // console.log(getRandomQuote());

// Create a printQuote Function

function printQuote() {
    let result = getRandomQuote(); // Result equals the returned method of quotes[random] in getRandomQuote() method.
    
    let randomQuote = `
        <p class = "quote">${result.quote}</p> 
        <p class = "source">- ${result.source}
    `

    if(result.year) {
        randomQuote += `
        <span class = "year">- ${result.year}</span> 
    `
    } else if (result.citation) {
        randomQuote += `
        <span class = "citation">-  ${result.citation}</span>
        `
    }

    randomQuote += `</p>`; // Close the paragraph tag and append to the end of the randomQuote variable

    return document.getElementById('html').innerHTML = randomQuote; 

}
// console.log(printQuote()); QA - Successful - Logs randomQuote string and template literal to console.

