# Destructuring

>Le **destructuring** est utiliser avec les objets et tableaux.

## Avec les objets
```js
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
```

## Avec les tableaux
```js
const arr = [1,2,3];
const [a,b,c] = arr;
console.log(a,b,c); // affiche 1 2 3
```
>Le **destructuring** peut-être utilisé avec les probs.