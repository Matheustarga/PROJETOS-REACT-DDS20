import React from "react";
import ImgDemon from "../assets/DemonSlayer.jpg"


const MostrarImagens = () => {



  return (
    <div>
      {/* Imagens via link Externo */}
      <h3>Melhor que o Goku</h3>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_cmzkkrXOT0VCkmvSSvRP2tJ5pPRIAgI2Q&s"
        alt=""
        width={300}
        height={400}
      />

      {/* Imagens via pasta assets */}
      <h3>PCD's matando capetas</h3>
      <img src={ImgDemon} alt="" width={450} height={500} />

      {/* Imagens via pasta pública */}
        <h3>Sim ele mesmo</h3>
        <img src="../tamandua.jpg" alt="" width={450} height={500}/>

    </div>
  );
};

export default MostrarImagens;
