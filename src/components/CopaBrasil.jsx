
import React from 'react'
import { useState } from 'react'
import './CopaBrasil.css'

function CopaBrasil({ id, position, birth, name, team, number, score, isStarter }) {

    const ageCup = 1994 - birth
    const ageNow = 2023 - birth

    const phrase1 = (`${name} possuia ${ageCup} anos de idade na copa de 94!`)
    const phrase2 = (`${name} possui ${ageNow} anos de idade!`)
    const [phrase, setPhrase] = useState(phrase1);
    const handlePhrase = () => {(phrase === phrase1) ? setPhrase(phrase2) : setPhrase(phrase1)}
    
    const phrase3 = (`Marcou algum gol na copa de 94?`)
    const phrase4 = (`Marcou ${score}`)
    const [phrase0, setPhrase0] = useState(phrase3);
    const handlePhrase0 = () => {(phrase0 === phrase3) ? setPhrase0(phrase4) : setPhrase0(phrase3)}

    return (
        <div>

            <h2>
                {name} {number} {isStarter ? <span className="isStarter"> Titular</span> : <span className="isStarter"> Reseva</span>}
            </h2>

            <fieldset className={id % 2 === 0 ? 'green' : 'yellow'}>

                <ul>
                    <li>Posção: {position};</li>
                    <li>{phrase};</li>
                    <li>Clube: {team};</li>
                    <li>{phrase0}</li>
                </ul>

                <button onClick={handlePhrase}> Idade</button>
                <button onClick={handlePhrase0}> Gol?</button>
            </fieldset>
        </div>
    )
}

export default CopaBrasil