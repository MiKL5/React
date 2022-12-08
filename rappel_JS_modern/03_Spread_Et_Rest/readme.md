# Operateur Spread et Rest

### Spread operator (étendre)

```js
const arr = [1,2,3];
const arr2 = [...arr, 4]
console.log(...arr2);
```
Pratique pour utiliser les éléments à l'intérieur d'un tableau avec une méthode ou copire un tableau dans un autre.
```js
const myObj = {
    a: 1,
    b: 2,
    c: 3,
}
const myObj2 = {
    ...myObj,
    d: 4,
}
console.log(myObj2);
```
Fonctionne de la même manière avec les objets

### Rest operator
```js
function add(...args){
    console.log(args);
    let result = 0;
    for(const arg of args){ // 'for ... of' pour les tableau et 'for ... in' pour les objets
        result += arg;
    }
    return result;
}
console.log(add(2, 2, 20, 50, 900));
```