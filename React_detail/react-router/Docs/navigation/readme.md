# **Créer la navigation**  

React-router-dom permet de gérer les liens grâce au composant Link.  
```jsx
import { Link } from 'react-router-dom'
```
Il est importé dans le fichier dans lequel on gère les liens.  
Ce composant est forcément acompagné de la props `to`, la ligne de code ressemble à ça :
```jsx
<Link to="/">Accueil</Link>
```
Les URL sont conventionnelements en minuscules.  
Les liens de la navbar ont leurs routes dans 'App.js' et le composant y sont importés. L'algorithme de sélection permet de mettre les routes dans n'importe quel ordre. Le plus spécifique l'importe face au moins spédifique.