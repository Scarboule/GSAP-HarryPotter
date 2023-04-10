const empreintePas = document.getElementById("empreinte");

    // Définissez l'animation GSAP
    const tl = gsap.timeline({ repeat: -1 });

    // Utilisez GSAP pour animer l'empreinte de pas
    tl.to(empreintePas, { duration: 0.5, y: 0, opacity: 0 })
      .to(empreintePas, { duration: 0.5, y: -10, opacity: 1 });
/*const carteContainer = document.getElementById('carte-container');

// Créer un tableau pour stocker les empreintes de pas
const empreintes = [];

// Fonction pour créer une nouvelle empreinte de pas
function creerEmpreinte() {
  const empreinte = document.createElement('img');
  empreinte.src = 'asset/img/footprint-svgrepo-com (1).svg';
  empreinte.classList.add('empreinte');
  carteContainer.appendChild(empreinte);
  return empreinte;
}

// Fonction pour animer une empreinte de pas
function animerEmpreinte(empreinte) {
  gsap.fromTo(
    empreinte,
    { opacity: 0, scale: 0 }, // État initial de l'empreinte (invisible et échelle à 0)
    { duration: 1, opacity: 0, scale: 0.02, ease: 'back.out(1.7)' } // État final de l'empreinte (visible et échelle à 1)
  );
}

// Boucle pour créer et animer les empreintes de pas successives
for (let i = 0; i < 5; i++) { // Modifier le nombre d'empreintes de pas souhaitées (5 dans cet exemple)
  const empreinte = creerEmpreinte();
  empreintes.push(empreinte);
  gsap.delayedCall(i * 0.5, animerEmpreinte, [empreinte]); // Délai d'apparition entre chaque empreinte de pas (0.5 secondes dans cet exemple)
}*/