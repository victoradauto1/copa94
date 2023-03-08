import CopaBrasil from "./components/CopaBrasil"
import { Formulario } from "./components/Formulario"
import { useContext } from "react"
import { ListaContext } from "./context/ListaContext"

function App() {
  
  const { copaBrasil94 } = useContext(ListaContext)
  
  return (
    <div className="App">

      <h1>
        <span className="color1">Seleção</span>
        <span className="color2"> Brasileira </span>
        <span className="color3">94</span>
      </h1>

      <img src="https://s2.glbimg.com/6G5w4lAk9YJnisNU-PqLDvB3AUY=/0x0:650x500/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ee6202d7f3f346a7a5d7affb807d8893/internal_photos/bs/2021/g/2/dzmtZJQu6CEQCwfZAing/sele-c3-a7-c3-a3o-1.jpg" alt="Seleção titular da copa de 1994 - USA" />

      <p>(Equipe titular no jogo contra Itália - Final)</p>

      <h2>Lista de jogadores</h2>

      {copaBrasil94.map ((set) =>(

        <CopaBrasil
        key={set.id}
        id={set.id}
        position={set.position}
        birth={set.birth}
        name={set.name}
        team={set.team}
        number={set.number}
        score={set.score}
        isStarter={set.isStarter}/>
      ))}


    </div>
  )
}

export default App