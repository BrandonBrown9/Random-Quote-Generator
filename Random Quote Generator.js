
//Create a vairable that will hold the quote and the Author of the quote

const quote = [
    "The best way to remember your wife's birthday is to forget it once. - Bertrand Russell",
    "Science is what you know, philosophy is what you don't know. - E. Joseph Cossman", 
    "Anything that comes easy, comes wrong. - Josephine Tessier"   
];



// Need a Loop to iterate over quotes
function getRandomQuote(arr) {
    let html = '';
    for (let i = 0; i < arr.length; i++) {
        let random = Math.floor(Math.random() * (arr.length) + 1);
        html += `${arr[i]}`;
    }
        //console.log(html);
        return html;
}
document.getElementById("html").innerHTML = getRandomQuote(quote);
    





// Need to display the quotes in the <div class = "Container-Card"></div>

