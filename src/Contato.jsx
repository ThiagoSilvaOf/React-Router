import React from "react";
import Head from "./Head";

const Contato = () => {
  return (
    <div className="gridContato animeLeft">
      <Head title="Ranek | Contato" />
      <picture>
        <img src="assets\capa2.png" alt="imagem ilustrativa" />
      </picture>
      <div>
        <h1>Entre em contato.</h1>
        <p>- teste@gmail.com</p>
        <p>- 99999-9999</p>
        <p>- Bahia</p>
      </div>
    </div>
  );
};

export default Contato;
