// Configuration de GSAP
// Création d'une timeline pour l'animation
let timeline = gsap.timeline();

// Définition de l'élément cible pour l'animation
let letterText = document.getElementById("letter-text");

// Diviser le texte en caractères individuels
let letters = letterText.innerText.split("");
letterText.innerText = ""; // Réinitialiser le texte du conteneur

// Créer un span pour chaque lettre
letters.forEach(function(letter) {
    let span = document.createElement("span");
    span.className = "letter";
    span.innerText = letter;
    letterText.appendChild(span);
});

// Animation de la lettre d'admission à Poudlard
let letterSpans = document.getElementsByClassName("letter");
timeline.to(letterSpans, {
    opacity: 1,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.inOut",
    onComplete: function() {
    // Animer les lettres pour qu'elles s'alignent et se mettent en place
        timeline.to(letterSpans, {
            x: "random(-50, 50)",
            y: "random(-50, 50)",
            rotation: "random(-360, 360)",
            stagger: {
                from: "random",
                amount: 0.5
            },
            duration: 1,
            ease: "power2.inOut",
            onComplete: function() {
                timeline.to(letterSpans, {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: "power2.inOut"
                });
            }
        });
    }
});