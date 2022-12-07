// Scope

function foo(){
    var x = 5;
    console.log(x);
}
foo();

function foo() {
    if(true){
        var x = 5;
    }
    console.log(x);
}
foo(); // is not defined car la portée s'arrête au bloc


// Redéclaration

var x =5;
var x =10;
// on ne redéclare pas let et const
// let x=5; // ne fonctionne pas
// const x=5; // non plus
console.log(x);


// Hoisting

function foo(){
    console.log("hello");
}
foo();

console.log(x);
var x = 10; // undefined

console.log(x);
let x = 10; // can't access befor initialization

console.log(x);
const x = 10; // can't access befor initialization


// Objet global (window)

var maVarX = 10;
console.log(window); // une autre librairie du même nom passe au dessus et créer des conflits car 'var' est stocké

let maVarX = 10;
console.log(window); // maVarX est strocké dans un endroit spécial

const maVarX = 10;
console.log(window); // maVarX est strocké dans un endroit spécial


// Différence basique

var x = 10;
x = "abc";
console.log(x);

var x = {a: 5};
x = [b: 5];
console.log(x);

// par définition une constante ne peut pas être redéfinie
// par contre

const x { a: 5};
x.a = 10;
console.log(x); // C'est l'intérieur de l'objet qui change, ça pointe toujours vers le même objet




