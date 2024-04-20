import React from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";

const Produto = () => {
  const [produto, setProduto] = React.useState();
  const [carregando, setCarregando] = React.useState(null);
  const params = useParams();

  React.useEffect(() => {
    setCarregando(false)
    async function handleFetch() {
      const api = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
      );
      const responseJson = await api.json();
      setProduto(responseJson);
    }
    handleFetch();
    setCarregando(true)
  }, []);

  

  return (
    <>
    <Head title={"Ranek | " + params.id} />
      {!carregando && <h2>Carregando...</h2>}
      {produto && (
        <div className="gridProduto">
          <picture>
            {" "}
            <img src={produto.fotos[0].src} alt={produto.id} />{" "}
          </picture>
          <div>
            <h1>{produto.id}</h1>
            <p id="preco">R${produto.preco}</p>
            <p>{produto.descricao}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Produto;
