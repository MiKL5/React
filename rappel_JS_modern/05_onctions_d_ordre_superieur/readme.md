# Fonction d'ordre supérieur

>Cette fonction prend en paramètre une autre fonction et / ou en retourne une autre.  
Cela permet de mettre au même endroit des action ou de la logique un peu plus complexe et surtout de pourvoir effectué des actions multiples avec une seule et même fonction.  

```js
// fonction d'ordre supérieur (en l'ocurence 'supArr')
const rawArr = [5,6,5889,52,415,120]
function supArr(arr, fn){ 
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            newArr.push(arr[i]);
        }
    }
}
const arrSup100 = supArr(rawArr, (item) => {
    if(item > 100){
        return item;
    }
})
console.log(arrSup100);
const arrSup10 = supArr(rawArr, (item) => {
    if(item > 10){
        return item;
    }
})
console.log(arrSup10);
```
>La pregrammation fonctionnelle apporte beaucoup de possibilités (<, <=, =, >=, >, 'true', 'false', les types, etc).