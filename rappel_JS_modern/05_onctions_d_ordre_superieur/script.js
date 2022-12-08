const rawArr = [5,6,5889,52,415,120]
// Pour mettre dans un autre tableau les nombres supérieurs à 100 en Javascript procédural, on procède comme suit :
const newArr = [];
for(let i = 0; i < rawarr.length; i++) {
    if(rawArr[i] > 100) {
        newArr.push(rawArr[i]);
    }
}
console.log(newArr);
// Mais ce n'est pas aisément réutilisable.

// En programmation fonctionnelle
// fonction d'ordre supérieur (en l'ocurence 'supArr') car elle a pour paramètre une fonction  
const rawArr1 = [5,6,5889,52,415,120]
function supArr(arr, fn){ 
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            newArr.push(arr[i]);
        }
    }
}
const arrSup100 = supArr(rawArr1, (item) => {
    if(item > 100){
        return item;
    }
})
console.log(arrSup100);
const arrSup10 = supArr(rawArr1, (item) => {
    if(item > 10){
        return item;
    }
})
console.log(arrSup10);