# **Introduction à JSX**

### **JavaScript Syntax Extension**, parfois appelé JavaScript XML.  
---
**C'est une extension React de la syntaxe du langage JavaScript qui permet de structurer le rendu des composants à l'aide d'une syntaxe familière est similaire en apparence au HTML**

## **Pourquoi JSX ?**

Le fonctionnement d’une UI conditionnera toujours les logiques de rendu, de la gestion des événements à la préparation des données pour l’affichage, en passant par l’évolution de l’état au fil du temps. React assume pleinement cet état de fait.

Au lieu de séparer artificiellement les technologies en mettant le balisage et la logique dans des fichiers séparés, React sépare les préoccupations via des unités faiblement couplées appelées « composants », qui contiennent les deux. 

React ne vous oblige pas à utiliser JSX, mais la plupart des gens y trouvent une aide visuelle quand ils manipulent l’interface utilisateur dans le code JavaScript. Ça permet aussi à React de produire des messages d’erreurs et d’avertissements plus utiles.

Les composants permettent de découper l’interface utilisateur en éléments indépendants et réutilisables, chaque élément est considéré isolement.  
Conceptuellement, les composants sont comme des fonctions JavaScript. Ils acceptent des entrées quelconques (appelées « props ») et renvoient des éléments React décrivant ce qui doit apparaître à l’écran.  

---
>>>NOTA !  
>JSX étant plus proche de JavaScript que de HTML, React DOM utilise la casse camelCase comme convention de nommage des propriétés.  
Par exemple, `class` devient `className` et `tabindex` devient `tabIndex`.