# **Règles des hooks (crochets)**

Deux règles :
1. Il faut tout le temps les écrire à la racine de la fonction ;
    * C'est à dire tout en haut,  
        * jamais imbriqué dans des blocs,  
        * jamais dans des if / else,
        * jamais dans des boucles, et cætera.  
          
   Parce que React cherche les hook pour mettre à jour les composants, et cætera.
   Si un hook est déclaré dans une condition et qu'elle est fausse, ce hook ne sera pas déclaré et React ne saura pas s'il faut le mettre à jour.  
2. Il faut seulement les appeler dans des composants de type fonction.
    * ne jamais utiliser dans une fonction qui n'est pas un composant React,  
        * La présence de la majuscule fait un composant React  

___
>>>NOTA :  
Tous les hook sont précédés du mot clé *use*