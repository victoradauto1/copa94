import React from 'react'
import './CopaBrasil.css'
import { useState } from 'react'


function CopaBrasil({ id, position, birth, name, team, number, isStarter }) {

    const ageCup = 1994 - birth
    const ageNow = 2023 - birth
    // const handleName = ()=> {console.log (`A idade atual do jogador ${name} é de ${ageNow}`)}

    const phrase1 = (`A idade do jogador ${name} na Copa de 1994 era de ${ageCup}`)
    const phrase2 = (`A idade do jogador ${name} é de ${ageNow}`)

    const [phrase, setPhrase] = useState(phrase1);

    const handlePhrase = ()=> { 
        if (phrase === phrase1) { setPhrase(phrase2)} else { setPhrase(phrase1)}
    }

   

    return (
        <div>
            <h2>
                {name} {number} {isStarter ? <span className="isStarter"> Titular</span> : <span className="isStarter"> Reserva</span>}
            </h2>

            <fieldset className={id %2 === 0 ? 'green' : 'yellow'}>

                <ul>
                    <li>Posição: {position}</li>
                    <li>{phrase}</li>
                    <li>Clube: {team}</li>
                </ul>

                {/* <button onClick={handleName}> Idade atual</button> */}
                <button onClick={handlePhrase}> Idade atual</button>

            </fieldset>

        </div>
    )
}

export default CopaBrasil