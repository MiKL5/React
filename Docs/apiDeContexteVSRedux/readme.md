# **API de Contexte vs Redux**

## **C'est quoi une API ?**

Une interface de programmation d'application, est un ensemble de définitions et de protocoles qui facilite la création et l'intégration des applications.

## **Ça sert à quoi l'API de contexte ?**

Cet outil est immanent à React et permet de gérer le 'state' globalement.  

Les 'props drilling' passent du parent (haut) à l'enfant (bas). Si on partage à un enfant qui est 10 imbrications plus bas, ça va être très long et fastidieux de lui faire passer une 'props' et va alourdir le code. C'est limité car il devient très long dans ce cas de faire une petite action.  

C'est pour ça que 'context API' vient englober pour fournir en interne des données sans intervenir entre tous les parents et enfants.

Utilité : thème (dark mode), authentification, langues... Ce sont les changements qu'on ne fait pas tout le temps, donc des changements globaux.

___
## **C'est quoi Redux** ? <img align="right" src="./../../src/images/redux.svg" alt="Redux" title="Redux" widht="auto" height="64px">

Redux

Utilité : les grandes applications, beaucoup de states et les mises à jour ciblées (avec des filtres, des boutons...) et beaucoup de fonctionnalités. Alors pour les changements rapides et nombreux à plein d'endroits différents. Ça a l'avantage de ne pas mettre à jour des composants qui utiliseraient du state entre parent et enfant, de mettre également des middlewares.  

## Leurs points communs :
* les 2 sont des states manager, ils ont donc le même but ;
* Redux utilise en interne l'API de contexte ;


>>> NOTA  
Un middleware est un logiciel qui fournit des services et des fonctionnalités unifiés aux applications dans divers environnements unifiés, qu'ils soient multicloud, conteneurisés ou de cloud hybride, pour permettre aux équipes de développement et d'exploitation de créer et déployer des applications plus efficacement. Un middleware joue le rôle de lien entre les applications, les données et les utilisateurs.