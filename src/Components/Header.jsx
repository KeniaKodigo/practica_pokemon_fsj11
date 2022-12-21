/** componente funcional */
import React from "react";

export default function Header(){

    return (
        <header>
            <h1 className="titulo">API POKEMON</h1>
            <nav>
                <ul>
                    <li>Principal</li>
                    <li>Lista 1</li>
                    <li>Lista 2</li>
                </ul>
            </nav>
        </header>
    )
}