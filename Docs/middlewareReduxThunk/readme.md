## Redux thunk<a href="../"><img align="right" src="../../src/images/React-icon.svg" alt="React" height="64px"></a>

Est un middleware prêt à l'emploi qui dans le dispatch d'exécuter une fonction asynchrone.  
Il permet de recevoir des données qui iront au store.  
1. Il s'installe via cette commande `npm install redux-thunk`.  
2. Est importé dans le store
```jsx
import thunk from "./redux-thunk"
```
3. Placer à '_applyMiddleware_'
```jsx
applyMiddleware(thunk)
```