# **Les hooks utilitaires**

## **Le hook 'useParams'**

Utiles aux chemins dynamiques afin de faire appel à des api, aller dans des éléments, afficher les paramètres dynamiques, classer des éléments et cætera.
```jsx
export default function Profile() {
  const params = useParams();

  return (
    <div>
      <h1>Welcome to ur profile {params.id}</h1>
    </div>
  )
}
```

## **Le hook 'UseLocation'**

Permet de passer du 'state' à travers les liens et avoir plus d'info sur la page actuelle.  

_Exemple_ :
```jsx
export default function Home() {
    return (
        <>
            <h1>Bienvenue !</h1>
            <Link
            to="/Contact"
            // state={"test"}>Contact</Link>
            // ou un objet si par exemple on fait un quiz et qu'on veut garder des données tel qu'un score
            state={{fromeHome: "Hello"}}>Contact</Link>
        </>
    )
}
```
Puis dans 'Contact.js'
```jsx
export default function Contact() {
    const location = useLocation()
    console.log(location);
    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}
```