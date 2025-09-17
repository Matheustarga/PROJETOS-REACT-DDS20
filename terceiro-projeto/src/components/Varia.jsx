import React from "react";
import { useState } from "react"; //importanto hooks

const Varia = () => {
  //Criando variavel padrão

  let itgo = "Shazam";
  let numero = "26";

  //Varaivel com hook useState

  const [img,setImg] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWbj8wELPQHm-0oGBMcRSwkLiazjfiTPrIg&s")
  const [heroi,setHeroi] = useState("Homem de Ferro");
  const [number, setNumber] = useState(0);
  return (
    <div>
      {/* USO DE VARIÁVEIS PADRÃO */}
      <p>A palavra sorteada foi: {itgo}</p>

      <h1>{numero}</h1>

      <button
        onClick={() => {
          numero++;
          console.log(numero);
        }}
      >
        Aumentar contagem
      </button>

      {/* USO DE VARIÁVEIS A PARTIR DE AGORA */}
      <h1>{number}</h1>

      <button
        onClick={() => {
          setNumber(number + 1);
          console.log(number);
        }}
      >
        Aumentar contagem
      </button>

      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        Diminuir contagem
      </button>

      <button
        onClick={() => {
          setNumber(number - number);
        }}
      >
        Resetar contagem
      </button>

{/* Crie um título com nome de héroi, e um botão que revele sua identidade */}
        <h1>{heroi}</h1>
        <img src={img} alt="" />
         <br />
        <button onClick={() => {setHeroi("Tony Stark");setImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9oS2rxDoPVxav4AUqPCGL2zUfqUB1OSnJA&s")} } >Mostrar CPF</button>
       
        

    </div>
  );
};

export default Varia;
