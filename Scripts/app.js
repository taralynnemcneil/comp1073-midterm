// setup your IIFE (Immediately Invoked Function Expression)
var travelReport = (function () {

"use strict";
console.log("App Started...")

// replace paragraphs
var replaceIntroParagraph = function () {
    var introParagraph;
    introParagraph = document.getElementById('IntroParagraph');
    introParagraph.innerHTML = "Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals.<br />Greece has 1,400 islands, though only 230 of them are inhabited.<br />And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.";
};
replaceIntroParagraph();

var replaceFolegandros = function () {
    var folegandros;
    folegandros = document.getElementById('Folegandros');
    folegandros.innerHTML = "Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.";    
};




})();

