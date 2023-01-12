# **React router**  

## **Installer 'React-router' avec la commande suivante :**  
`npm install react-router-dom`

## **Englober toute l'application avec un browser routeur depuis 'index.js'**  
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

## **Dans App.js, mettre en place le système de route (router)**
```jsx
import {Routes, Route} from "react-router-dom"
```
Dans la `<div>` mettre les balises `<Routes>` englobant `<Route />` contenant deux infos
* le chemin 'path' : la racine ;
* un élément à montrer, à créer dans le dossier 'compoents' ;
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
## **Créer 'Home.js'**
* Dans un dossier 'components', crèer un autres dossier 'Home' contenant 'Home.js'
* Dans le fichier 'rfc' puis tabulation pour obtenir ce qui suit :
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

## **Importer le composant 'Home' dans 'App.js'**
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