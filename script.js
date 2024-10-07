const responses = [
  'C\'est certain',
  'Sans aucun doute',
  'Oui, absolument',
  'Très probable',
  'Les signes indiquent que oui',
  'Vous pouvez compter dessus',
  'C\'est sûr',
  'Oui',
  'Ne comptez pas dessus',
  'Ma réponse est non',
  'Mes sources disent non',
  'Peu probable',
  'Très douteux',
  'Non',
  'Essayez encore',
  'Demandez plus tard',
  'Mieux vaut ne pas vous le dire maintenant',
  'Impossible de le prédire maintenant',
  'Concentrez-vous et demandez à nouveau'
];

// Fonction pour obtenir et afficher une réponse aléatoire
function displayResponse() {
  const randomNumber = Math.floor(Math.random() * responses.length);
  const responseText = responses[randomNumber];

  // Afficher la réponse dans l'élément HTML avec l'ID 'response'
  document.getElementById('response').innerText = responseText;
}

// Ajouter un écouteur d'événement pour le bouton
document.getElementById('askButton').addEventListener('click', displayResponse);
