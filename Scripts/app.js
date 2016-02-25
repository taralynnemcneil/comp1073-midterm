/* ===============================================
		  File Name: App
          Authour: Tara McNeil
          Site Name: Midterm | Tara McNeil
          File Description: Javascript
================================================ */

// setup your IIFE (Immediately Invoked Function Expression)
var travelReport = (function () {

console.log("App Started...")

/* ==============================================
        Replace Paragraphs
    ============================================== */

// intro paragraph
var replaceIntroParagraph = function () {
    var introParagraph;
    introParagraph = document.getElementById('IntroParagraph');
    introParagraph.innerHTML = "Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals.<br />Greece has 1,400 islands, though only 230 of them are inhabited.<br />And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.";
};
replaceIntroParagraph();
// end intro paragraph

// Folegandros
var replaceFolegandros = function () {
    var folegandros;
    folegandros = document.getElementById('Folegandros');
    folegandros.innerHTML = "Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.";    
};
replaceFolegandros();
// end Folegandros

// Alonissos
var replaceAlonissos = function () {
    var alonissos;
    alonissos = document.getElementById('Alonissos');
    alonissos.innerHTML = "Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy."; 
};
replaceAlonissos();
// End Alonissos

// Spetses
var replaceSpetses = function () {
    var spetses;
    spetses = document.getElementById('Spetses');
    spetses.innerHTML = "This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.";
};
replaceSpetses();
// end Spetses

// Amorgos
var replaceAmorgos = function () {
    var amorgos;
    amorgos = document.getElementById('Amorgos');
    amorgos.innerHTML = "Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff.";
}; 
replaceAmorgos();
// end Amorgos

// ---- Syros ----- //   
var replaceSyros = function () {
    var syros;
    syros = document.getElementById('Syros');
    syros.innerHTML = "A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.";
}; 
replaceSyros();
// end syros

// Milos
var replaceMilos = function () {
    var milos;
    milos = document.getElementById('Milos');
    milos.innerHTML = "This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as 'the island of colours' it's home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape.";
}; 
replaceMilos();
// end milos

// hydra
var replaceHydra = function () {
    var hydra;
    hydra = document.getElementById('Hydra');
    hydra.innerHTML = "The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves.";
}; 
replaceHydra();
// end hundra

// Ithaca
var replaceIthaca = function () {
    var ithaca;
    ithaca = document.getElementById('Ithaca');
    ithaca.innerHTML = "Most famous for being the home of Odysseus, and a prominent figure in Homer's 'The Odyssey,' Ithaca is said to have been inhabited since the 2nd millennium BC. Made up of two islands joined by a narrow strip of land, many visit it to see the legendary sites mentioned by Homer. However, Ithaca is more than its mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and sleepy fishing villages full of Byzantine churches and monasteries.";
}; 
replaceIthaca();
// end ithaca

// gavdos
var replaceGavdos = function () {
    var Gavdos;
    Gavdos = document.getElementById('Gavdos');
    Gavdos.innerHTML = "";
}; 
replaceGavdos();
//end gavdos

/* ==============================================
        Contnact Section
    ============================================== */
    var firstName;
    firstName = document.getElementById("firstName");
    var lastName;
    lastName = document.getElementById("lastName");
    var email;
    email = document.getElementById("email");
    var comments;
    comments = document.getElementById("comments");
    var button = document.getElementById('submit');
    button.addEventListener("click", function (){
        console.log("Clicked", firstName.value, lastName.value, email.value, comments.value);
    });
})();