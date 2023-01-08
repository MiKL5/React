# À propos de de l'API de contexte

Grâce à l'API de contexte on va importer le.s contexte.s ou on veut, dans des segments, des sections, ces caégories du code. Même si elle est assez petite et qu'elle n'a que 4 imbrication ou 3 enfants, ça éviter l'utilisation des pops.

## C'est quoi le contexte ?

Le Contexte offre un moyen de faire passer des données à travers l’arborescence du composant sans avoir à passer manuellement les props à chaque niveau.

Dans une application React typique, les données sont passées de haut en bas (du parent à l’enfant) via les props, mais cela peut devenir lourd pour certains types de props (ex. les préférences régionales, le thème de l’interface utilisateur) qui s’avèrent nécessaires pour de nombreux composants au sein d’une application. Le Contexte offre un moyen de partager des valeurs comme celles-ci entre des composants sans avoir à explicitement passer une prop à chaque niveau de l’arborescence.

## Utiliser le contexte  

Le Contexte est principalement utilisé quand certaines données doivent être accessibles par de nombreux composants à différents niveaux d’imbrication.  
Il est a utiliser avec parcimonie car il rend la réutilisation des composants plus difficile.

## Les limites

Dans la mesure où le contexte utilise une identité référentielle pour déterminer quand se rafraîchir, il y a des cas piégeux qui peuvent déclencher des rafraîchissements involontaires pour les consommateurs lorsque le parent d’un fournisseur se rafraîchit. Par exemple, le code ci-dessous va rafraîchir chaque consommateur, le Provider se rafraîchissant lui-même parce qu’un nouvel objet est créé à chaque fois pour value :
```jsx
class App extends React.Component {
  render() {
    return (
      <MyContext.Provider
        value={{something: 'quelque chose'}}>
        <Toolbar />
      </MyContext.Provider>
    );
  }
}
```
Pour contourner ce problème, il faut placer la valeur dans l’état du parent :
```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {something: 'quelque chose'},
    };
  }

  render() {
    return (
      <Provider value={this.state.value}>
        <Toolbar />
      </Provider>
    );
  }
}
```