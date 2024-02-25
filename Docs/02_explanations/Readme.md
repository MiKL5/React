# **Quelques explications** <a href="../"><img align="right" src="../../src/images/React-icon.svg" alt="React" height="64px"></a>

### **À propos de '_package.json_'**
Il contient les commandes.  
  
**npm start** : lance le live server au port 3000  
**npm build** : Envoyer le paquet sur un serveur web  
**npm test** : faire des tests  
  
'***eslintConfig***' : petites règles de codage  
'***browserlist***' : règles pour les navigateurs  
  
### **À propos de '_package-lock.json_'**

C'est une sorte de photo de ce qui a été installer et Fait référence au dossier '***Node_modules***'.

### **À propos de public**

Toute l'application React apparaît dans la div 'root' d'index.html.  
C'est une '**SPA**' **S**ingle **p**age **a**pplication.

* Les avantages :  
    * Pas de latence entre les pages ;
    * Tout est préchargé ;
    * Il faut chercher / montrer des composants.

Les images vont soit dans 'public' sont dans 'src'.  
Le fichier '***manifest.json***' sert aux progressive webapp, c'est-à-dire fonctionner sur mobile est navigateur.
Les '***robots.txt***' pour les pages que l'on ignore ou non.

### **À propos du dossier source 'src'**

C'est ici qu'on développe.

Le fichier '***App.js***' contient les composants et les éléments importés qui sont fournis à la div.  
'L'**index.js**' render le contenu dans la "`<div>` root".  
'L'**index.css**' est le css global.