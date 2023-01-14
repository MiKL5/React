# **React router**  

## **Installer _'React-router'_ avec la commande suivante :**  
`npm install react-router-dom`

## **Englober toute l'application avec un '_browser routeur_' depuis _'index.js'_**  
C'est un composant qui donne accés à toutes les fonctIonnalités du router.
importer 'browserRouter'  
```jsx
import {BrowserRouter} from 'react-router-dom'
```
et remplaser  
```jsx
<React.StrictMode>
    <App />
</React.StrictMode>
```
par  
```jsx
<BrowserRouter>
    <App />
</BrowserRouter>
```

## **Dans _'App.js'_, mettre en place le système de route (router)**
```jsx
import {Routes, Route} from "react-router-dom"
```
Dans la `<div>` mettre les balises `<Routes>` englobant `<Route />` contenant deux infos
* le chemin _'path'_ : la racine ;
* un _élément_ à montrer, à créer dans le dossier 'compoents' ;
```jsx
export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} /> {/* tout d'abord, le chemin (path), c'est la racine et un élément à montrer, ici (Home)*/}
            </Routes>
        </div>
    );
}
```
## **Créer _'Home.js'_**
* Dans un dossier _'components'_, crèer un autres dossier _'Home'_ contenant _'Home.js'_
* Faire 'rfc' puis tabulation pour obtenir ce qui suit :
```jsx
import React from 'react'

export default function Home() {
    return (
        <>
            <h1>Bienvenue !</h1>
        </>
    )
}
``` 
* Ajouter ce qui est nécéssaire entre les 'fragments' ou les 'div'

## **Importer le composant _'Home'_ dans _'App.js'_**
Pour gagner du temps faire ìmport Home`puis appuyer sur tabulation ou entrée.
```jsx
import Home from './components/Home/Home';
```

## **Et pour les autres routes, c'est la même chose**

* Importer le composant (comme ci-dessus) ;
* Créer la route :
```jsx
<Route path="/Profile/:id" element={<Profile />} />
```