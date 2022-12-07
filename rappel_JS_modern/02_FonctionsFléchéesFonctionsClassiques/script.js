// fonction classique

function foo(){
    console.log("a");
}
foo();

// function fléchées
const foo = () => {
    console.log("a");
}
foo();

const add = (a,b) => {
    return a + b;
}
console.log(add(2,2)); // réponse 4

const add = (a, b) => a + b;
console.log(add(2, 2)) // sont intérêt est d'être plus courte et plus facile à comprendre

const add = a => a;
console.log(add(2));

// ----------------------------------------------------------------------------------------- //

const myObj = {
    foo: function(){
        console.log('hello');
    }
}
myObj.foo();

const myObj = {
    foo: function () {
        console.log(this);
    }
}
myObj.foo(); // renvoi l'ojet donc pas 'hello' ; myObj est le contexte appelant la focngtion 'foo()'
// C'est une fonction dans un objet ; on appel ça une methode
// this est un mot clé qui peut avoir plusieur rôles, il faut chercher du côté du contexte pour comprendre ce que c'est.
// la fonction fléchée fait référence au contexte engloabant

const myObj = {
    a: "5",
    foo:() => {
        console.log(this.a);
    }
}
myObj.foo(); // undefined car 'a' n'est pas englobée
// foo est le contexte appelant
// this est le contexte englobant
// l'objet window global est len contexte englobant

// CONCLUSION : la function fléchée allége la syntaxe quand on a pas besoin de créer des fonction classiques
//              this est le contexte englobant dans une fonciton fléchée
//              dans une fonction classique, le contexte, c'est ce qui appel.