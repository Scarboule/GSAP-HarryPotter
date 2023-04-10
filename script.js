// Init
let timeline = gsap.timeline();
let letterText = document.getElementById("letter-text");

// Splitter
/*let letters = letterText.innerText.split("");
letterText.innerText = ""; */
let letters = letterText.innerText.split("");
letterText.innerHTML = letters.map(
    letter => letter === " " ? "&nbsp;" : (letter === "\n" ? "<br>" : `<span class="letter">${letter}</span>`)
    ).join("");

letters.forEach(function(letter) {
    let span = document.createElement("span");
    span.className = "letter";
    span.innerText = letter;
    letterText.appendChild(span);
});

// Animation 
let letterSpans = document.querySelectorAll(".letter");


timeline.fromTo(letterSpans, 
    {
        opacity: 0,
        scale: 0,
        rotation: function(index, target) {
            return gsap.utils.random(-90, 90); 
        },
        x: function(index, target) {
            return gsap.utils.random(-400, 400); 
        },
        y: function(index, target) {
            return gsap.utils.random(-400, 400); 
        },
        fontSize: "50px"
    },
    {
        opacity: 1,
        scale: 1,
        rotation: 0,
        x: 0,
        y: 0,
        duration: 0.1,
        stagger: 0.1,
        ease: "power2.inOut",
        fontSize: "32px"
    }
);



