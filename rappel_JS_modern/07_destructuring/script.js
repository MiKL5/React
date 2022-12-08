// AVEC LES TABLEAUX
const pays = {
    nom: "Italie",
    pop: 60 // millions d'hab
}
const {nom, pop} = pays
console.log(nom, pop); // la console affihce Italie, 60.

// un petit tric React
const data = ({nom}) => nom;
console.log(data(pays)); // affiche Italie
// data attend un objet et de la propriété nom, va créer une variable et retourner le nom, donc Italie
console.log(data(555)); // affiche 'undefined'
// Peut-être utiliser avec les probs et on peut s'en passer.

// AVEC LES TABLEAUX
const arr = [1,2,3];
const [a,b,c] = arr;
console.log(a,b,c); // affiche bien 1 2 3