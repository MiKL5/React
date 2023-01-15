# **Infos utiles**

## **Convention de nommage**  

Les composants (dossiers et fichiers) ont la première lettre en majuscule,

## **L'organisation**  

* Toujours bien structurer le dossier source 'src' avec plusieurs dossiers, notamment quand on a beaucoup de composants ou qu'on faut des grandes apps, alors on créer un dossier 'Containers' ou 'Layout' qui contiennent les pages complètes type 'Accueil', 'Contact', 'Portfolio', ... et importera les composants.

<img align="left" src="./../../src/images/Attention.svg" alt="Warning" title="Warining" widht="auto" height="54x" padding="5px"> Il est important de bien séparer pour ceux qui travailleront avec nous et si on revient longtemps après. [Confer. "Méthodes Agiles"](https://github.com/MiKL5/afpaCDA/blob/master/methodeAgile "Les méthodes Agiles").

## **Reprendre le travail avec un autre ordi**

Les projet est pusher sur 'GitHub' pour ne citer que lui qu'avec la webapp et les fichiers 'pacakage.json' et 'package-lock.json'.  
C'est pourquoi il faut ouvrir un terminal dans le dossier de la webapp. Le raccourcis `ctrl`+ `ù` ouvre un terminal via **Visual Studio Code**. Puis `npm install` pour tout réinstaller. Cette dernière commande va interroger le fichier 'package.json' pour savoir ce qu'il faut récupérer et avec la même version.

---
## Autres infos  

Les "**_import_**" se font entre accolades s'il ne sont pas issus d'un "**_export default_**".  

Le fichier '**_reportWebVitals.js_**' sert à la connexion à Google Analytics.  

Le dossier '**_Container_**' contient les pages, il est déconseilé de le nommé pages car '**Next.js**' est un framework de React qui contient un dossier 'pages'. Il y a un risque de confusion.  

Le dossier '**_redux_**' est un minuscule, ainsi que ce qu'il contient.

`onInput` = déclanche l'évt à chq fous que qqch est écrit.  
`onChange` trigger à la perte du focus.