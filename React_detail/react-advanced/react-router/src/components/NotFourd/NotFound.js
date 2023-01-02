import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    // Le choix est de retourner à l'accueil
    const navigate = useNavigate()
    console.log(navigate);
    const goHome = () => {
        navigate("/")
    }
    return (
        <div>
            <h1>Wops, je crois qu'j'me suis perdu.</h1>
            <button onClick={goHome}>Aller à l'accueil</button>
        </div>
    )
}
