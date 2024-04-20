import React from "react";
import Head from "./Head";
import { useNavigate } from "react-router-dom";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function handleFetch() {
      const api = await fetch("https://ranekapi.origamid.dev/json/api/produto");
      const responseJson = await api.json();
      setProdutos(responseJson);
    }
    handleFetch();
  }, []);

 

  return (
    <div className="containerProdutos animeLeft">
    <Head title="Ranek"/>
      {produtos &&
        produtos.map((produto) => (
          <div key={produto.id} onClick={() => navigate(`/produto/${produto.id}`)}>
            <img className="fotoProduto" src={produto.fotos[0].src} />
            <p>{produto.id}</p>
          </div>
        ))}
    </div>
  );
};

export default Produtos;
