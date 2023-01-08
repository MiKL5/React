import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Servuces() {
    return (
        <div>
            <h1>Serivces</h1>
            <nav>
                <Link to="/services/developpement">Développement</Link>
                <Link to="/services/cybersecurite">Cyber sécurité</Link>
            </nav>
            <Outlet />
        </div>
    )
}
