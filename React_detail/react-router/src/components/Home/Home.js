import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <h1>Bienvenue !</h1>
            <Link
            to="/Contact"
            // state={"test"}>Contact</Link>
            // ou un objet
            state={{fromeHome: "Hello"}}>Contact</Link>
        </>
    )
}