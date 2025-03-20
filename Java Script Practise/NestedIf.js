/* Nested If Statement: Write code to determine the ticket price for a movie. The 
function should consider the following:
 • If the viewer is under 13, the ticket is free. 
• If the viewer is between 13 and 60, check if it's a weekend. If yes, the ticket 
price is Rs 500; otherwise, it’s Rs 300. 
• If the viewer is over 60, the ticket price is Rs 250. */

let viewer =50;
console.log (`the age of the viewer is: ${viewer} `);
let day;

if (viewer< 13) {
    console.log('The viewer is under 18 so the ticket is free..!!');
}

if ( viewer>13 || viewer<60) {
    if (day === weekend) {
        console.log ('the price of ticket is Rs500..!!');
    }
    else {
        console.log('the price of ticket is Rs.3oo..!!');
    }
}