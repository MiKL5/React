let x = 2; // environnement extérieur
const add1 => x += yield;
console.log(add1(2)); //  4
console.log(add1(2)); //  6
console.log(add1(2)); //  8
console.log(add1(2)); // 10
console.log(add1(2)); // 12
// la fonction ci-avant a effet à l'extérieur (car x prend +y) et ne retourne pas la même chose car elle ajoute 2 à chaque itération. C'est une fonction impure.


// ci après la fonctiin pure
const add2 = (a,b) => a + b;
console.log((add2(2, 2)));
console.log((add2(2, 2)));
console.log((add2(2, 2)));
console.log((add2(2, 2)));
console.log((add2(2, 2)));
console.log((add2(2, 2)));
// il n'y a pas d'environnement externe et elle retourne toujours le même resultat.