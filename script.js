// Init
let timeline = gsap.timeline();
let letterText = document.getElementById("letter-text");

// Splitter
/*let letters = letterText.innerText.split("");
letterText.innerText = ""; */
let letters = letterText.innerText.split("");

let n = letterText.innerText.length;
console.log(n);

letterText.innerHTML = letters.map(
    letter => letter === " " ? "&nbsp;" : (letter === "\n" ? "<br>" : `<span class="letter">${letter}</span>`)
    ).join("");

while(i = 0, i < n, i++){
    letters.forEach(function(letter) {
        let span = document.createElement("span");
        span.className = "letter";
        span.innerText = letter;
        letterText.appendChild(span);
    });
}


// Animation s
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
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.inOut",
        fontSize: "32px"
    }
);

gsap.to('.signature', {duration: 5, strokeDashoffset: 0, ease: 'power2.inOut', stagger: 0.1});

let seal = document.getElementById("seal");

timeline.fromTo(seal,
    {
        opacity: 0,
        scale: 0,
        rotation: -180,
        x: 0,
        y: 0
    },
    {
        opacity: 1,///
        scale: 1,
        rotation: 0,
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.75)",
        width: "200px",
        bottom: "50px",
        right: "50px"
    }
);





