// Tableau de données pour chaque partie du message
const subjects = ["Vous", "Je", "Les gens", "Le monde"];
const verbs = ["devez", "peut", "doit", "va"];
const actions = ["apprendre", "explorer", "créer", "aimer"];
const complements = ["de nouvelles compétences", "de nouvelles possibilités", "de nouvelles idées", "de nouvelles perspectives"];


function generateRandomMessage() {
  const subject = subjects[Math.floor(Math.random() * subjects.length)];
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];
  const complement = complements[Math.floor(Math.random() * complements.length)];

  const message = subject + " " + verb + " " + action + " " + complement + ".";

  return message;
}


console.log(generateRandomMessage());