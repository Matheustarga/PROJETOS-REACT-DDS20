import React from 'react'
import { useState } from 'react'

const Listagem = () => {
    const [lista,setLista] = useState(["Pedro", "Cris", "Manoel", "Altair", "Moacyr"])

    const [jogadores] = useState([
        {id:1, nome:"Kaká", time:"Milan", number:8},
        {id:2, nome:"Faker", time:"SKT-T1", number:1},
        {id:3, nome:"Aspas", time:"Loud", number:2}
    ]);

    const [numero,setNumber] = useState(1);

  return (
    <div>

        <button onClick={() => {
            setNumber(numero + 1)
            setLista([...lista, numero])
        }}>
            Adicionar na lista
        </button>

        <h3>Listagem</h3>
        <ul>
            {lista.map((item, index) => (<li key={index}>{item}</li>)) }
            <li>João Lucas</li>
            <li>Marcelo</li>

        </ul>
        <h3>Jogadores</h3>
        <ul>
            {jogadores.map((item) => (
                <li key={item.id}>O jogador <strong>{item.nome}</strong> Jogou no time <strong>{item.time}</strong> com a camisa <strong>{item.number}</strong> </li>
                ))}
        </ul>

        
      
    </div>
  )
}

export default Listagem
