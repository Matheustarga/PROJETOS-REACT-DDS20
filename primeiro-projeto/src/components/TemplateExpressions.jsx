import React from 'react'

const TemplateExpressions = () => {
    //Aqui vai códigos javaScript
    let nome = "Matheus";

    let jogador = {
        nome:"Aspas",
        time:"Mibr",
        jogo:"Valorant",
        nivel:"Muito bom"
    }

  return (
    //Aqui vai o seu html
    <div>
        <h2>Olá, meu nome é: {nome}</h2>
        <p>O nome do jogador é:{jogador.nome}, joga atualmente {jogador.jogo} pela equipe {jogador.time}, sendo classificado como {jogador.nivel} </p>

    </div>
  )
}

export default TemplateExpressions
