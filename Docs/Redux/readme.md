# **Redux** <a href="../"><img align="right" src="./../../src/images/redux.svg" alt="Redux" height="64px"></a>

## **Qu'est-ce que c'est ?**

C'est un moyen de géré son state comme avec l'API de contexte. D'ailleurs Redux utilise l'API de contexte. Il n'est pas seulement utilisable avec React, mais avec tout.  
Il existe cependant une version de _Redux_ adaptée à React avec des fonctionnalités supplémentaires et un environnement adapté.  

> <img align="left" src="./../../src/images/Attention.svg" alt="Warning" height="64x"> Les 2 site de la librairie étant similaire et attention à aller sur le site 'React-Redux'. Néanmoins, les informations fournies sur 'Redux' sont majoritairement réutilisables avec 'React'.  
Ça a beaucoup évolué et quand on cherche dans la documentation, il n'est pas rare de tomber sur d'anciennes versions. C'est parfois gênant, car elle était beaucoup plus compliquée autrefois.  
Dans une recherche Google, il est indispensable de choisir via le bouton 'Outils', 'Moins d'un an' quelle que soit la recherche sur 'React' ; ça limite la quantité de documentions déprécié.  
Exemple : un article de 2017 est presque entièrement déprécié.
---
Néanmoins, il a pour avantage d'être beaucoup plus simple qu'auparavant. Par exemple avec les hooks.

## **Le schéma de Redux**

![Redux schema](./../../src/Docs/reduxSchema.png)

Le store Contient les données et les méthodes pour changer les données.  
À coter, le composant qui est l'interface qui va afficher les données et / ou effectué des actions pour envoyer au store et demander le changement du state.  
1. Il envoi donc un **dispatche** 'expédier ce qu'il veut changer' au **reducer**;  
2. Le **reducer** change le state ;  
3. Il va apporter le nouveau state et composant.  
_C'est le cycle de Redux._

## **Installer Redux**

Deux éléments sont à installer ; 

1. L'outil **_Redux_** saisir `npm install redux` ;
2. 'React-redux' via la commande `react-redux`pour l'intégration optimale.

>>> NOTA  
Dans **Visual Studio Code**, taper `ctrl`+ `ù` pour ouvrir un terminal.