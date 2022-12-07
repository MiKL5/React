# Différences entre les fonctions classsiques et les fonctions fléchées  

```javascript
// fonction classique
function add(a, b) {
    return a + b;
}
console.log(add(2, 2))
```
La fonction fléchée rend le code simple plus claire par sa syntaxe et plus facile à lire.  
On peut mettre en une ligne quand il y a juste un return dans la fonciton fléchée.  
```js
// fonciton fléchée
const add = (a, b) => a + b; // les parenthèses sont inutiles s'il n'y a qu'un argument
console.log(add(2, 2))
```
