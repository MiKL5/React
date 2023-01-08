# Le hook 'useParams'

Utiles aux chemins dynamyques afin de faire appel a des api, aller dans des éléments, affihcher les paramètres dynamyques, classer des éléments et cætera.
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

# Le hook 'UseLocation'

Permet de passer du 'state' à travers les liens et avoir plus d'info sur la page actuelle.  
