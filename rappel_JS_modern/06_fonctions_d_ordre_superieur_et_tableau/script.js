const arr = [1,2,3,4,5,6];
// La méthode 'map'
const mapedArr = arr.map(x => x + 10);
// Elle retourne un nouveau tableau avec 1+10, etc.
console.log(mapedArr); // retourne bien un tableau allant de 11 à 16.

// la méthode 'filter'
const filteredArr = arr.filter(num => num > 2)
console.log(filteredArr); // retourne ce qui est > 2.

// La méthode foreach
arr.forEach(val => {
    console.log(val - 90);
}) // retourne les valeurs jusqu'à -90 exclu
// foreach ne retourne pas un tableau, il est plutôt utiliser pour retourner une autre méthode avec toutes les valeures d'un tableau.
// foreach peut servir à mettre tout les bouton d'un site dans un tableau et coller à chaque bouton 'AddEventListener'.