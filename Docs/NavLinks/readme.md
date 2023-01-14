# **NavLink**

Il prend aussi la props `to` mais aussi, `className`, `style`, etc.

Dans `style` on peut mettre une fonction contenant un objet et react-router s'occupe de tout. Une propriété `isActive` répondra 'true' si le lien est actif. 
```jsx
style={({isActive}) => {
    return isActive ? {color: "maroon"} : {color: "black"}
}}
```
Avec les `className` aussi
```jsx
className={({isActive}) => isActive ? "activeLink" : ""}
```