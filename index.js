
// Mixed message

const citation = document.getElementById("msg-info");
const buttonMessage = document.getElementById("btn-msg");

// Tableaux de données pour chaque partie de la citation

const beginnings = ["La vie", "Le bonheur", "Le succès", "L'amour"];
const middles = ["est un voyage", "se trouve dans les petits riens",
  "s'obtient par la persévérance", "ne connaît pas de limites"];
const ends = ["qui mérite d'être vécu", "quand on regarde dans la bonne direction",
  "lorsqu'on y met tout son coeur", "qui peut transformer le monde"];

// Fonction de génération de citation aléatoire

function generateRandomQuote() {
  const beginning = beginnings[Math.floor(Math.random() * beginnings.length)];
  const middle = middles[Math.floor(Math.random() * middles.length)];
  const end = ends[Math.floor(Math.random() * ends.length)];

  citation.innerText = ` ${beginning} ${middle} ${end} . `;

}

// Affichage de la citation générée
buttonMessage.addEventListener("click", generateRandomQuote)
