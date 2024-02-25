# **Les routes imbriquées**<a href="../"><img align="right" src="../../src/images/React-icon.svg" alt="React" height="64px"></a>

Il s'agit d'une sous navigation vers des sous composants.  
Ça incombe d'avoir une balise `<nav>` dans ledit composant.

```jsx
<nav>
    <Link to="services/developpement">Développement</Link>
    <Link to="services/cybersécurite">Cyber sécurité</Link>
</nav>
```

Placer le composant enfant dans le dossier du parent permet d'éviter la confusion, mais on peut le placer dans 'Components'.

>>> NOTA :  
Penser à ouvrir la route du composant parent dans _'App.js'_ pour inclure les routes imbriquées.  
```jsx
        <Route path="/services" element={<Services />}>
          <Route path="/services/developpement" element={<Development/>} />
          <Route path="/services/cybersecurite" element={<Cybersecurity/>} />
        </Route>
```

Enfin, le composant `Outlet` permet de dire au parent ou sort le contenu des enfants.
```jsx
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Servuces() {
    return (
        <div>
            <h1>Serivces</h1>
            <nav>
                <Link to="services/developpement">Développement</Link>
                <Link to="services/cybersécurite">Cyber sécurité</Link>
            </nav>
            <Outlet />
        </div>
    )
}
```