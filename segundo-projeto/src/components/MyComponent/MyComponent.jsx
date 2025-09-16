import React from "react";
// importação do css externo, para utilização
import "./MyComponent.css";

const MyComponent = () => {
  return (
    <div>
      <h1>Meu incrível componente</h1>

      <p>Parágrafo muito top do componente</p>

        {/* css utilizando classe  */}
      <p className="azul">Este aqui não vai vazar</p>
        {/* css inline */}
      <h2 style={{ color: "blue", backgroundColor: "pink", fontSize: "100px" }}>
        TEXTO TOP. COM ESTILO TOP TAMBÉM
      </h2>
    </div>
  );
}

export default MyComponent;
