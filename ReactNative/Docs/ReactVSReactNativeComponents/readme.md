# **Différences entre React et React Native** <a href="../"><img align="right" src="../../../src/images/react-native.png" alt="React" height="64px"></a>

La logique est la même, on importe toujours React `import React from "React";` car React Native fonctionne grâce à la librairie React.

Ce sont les balises html sont remplacées par des composants importés de React Native, les majuscules sont nécessaires :
* les `<div>` et `</div>` deviennent `<view>` et `</view>` :
* les `<p>` et `</p>` deviennent `<Text>` et `</Text>`.
* les `<button>` et `</button>` deviennent `<Button>` et `</Button>`
    * `onClick` devient `onPress` pour presser l'écran tactile.  

Ces éléments seront compilés en code Natif.