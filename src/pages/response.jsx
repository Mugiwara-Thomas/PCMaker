import React, { useState, useEffect } from "react";
import Nav from "../components/Navbar";
import GlobalStyle from "../styles/GlobalStyle";
import FooterBar from "../components/Footer";
import Painel from "../components/PainelGames";
import Card from "../components/Card";
import { BoxViewOver, BoxViewUnder } from "../components/BoxView";
import { useSelector } from 'react-redux';
import Accordion from "../components/Accordion";
import { ButtonResponse } from "../components/Button";
import LoadingSpinner from "../components/Spinner";

function Response() {
  const [loading, setLoading] = useState(true); // Novo estado para o loading
  const [requisitoAtual, setRequisitoAtual] = useState("Mínimo"); // Estado para controlar o requisito atual

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); // Ativa o loading quando o useEffect terminar
    }, 18000);

    return () => clearTimeout(timeout);
  }, []);

  const allGames = useSelector((state) => state.carrinho.listaDeGames)
  const cartGames = useSelector((state) => state.carrinho.lista)
  const specsMinimas = useSelector((state) => state.carrinho.specsMinimas)
  const specsRecomendadas = useSelector((state) => state.carrinho.specsRecomendadas)

  const [minimo, setMinimo] = useState(true)
  const [carregado, setCarregado] = useState(false);

  const [specsAtuais, setSpecsAtuais] = useState(specsMinimas);
  useEffect(() => {
    // Verifica se specsMinimas já está disponível
    if (specsMinimas) {
      setSpecsAtuais(specsMinimas);
    }
  }, [specsMinimas]);

  console.log(specsAtuais)
  const selectedGamesInfo = allGames.filter((game) =>
    cartGames.includes(game.ID)
  );

  function mudarParaMinimo() {
    if (minimo) {
      setMinimo(false);
      setSpecsAtuais(specsRecomendadas);
      setRequisitoAtual("Recomendado"); // Atualiza o estado para "Recomendado"
    } else {
      setMinimo(true);
      setSpecsAtuais(specsMinimas);
      setRequisitoAtual("Mínimo"); // Atualiza o estado para "Mínimo"
    }
  }
  return (
    <>
      {loading ? ( // Renderiza o spinner se estiver carregando
        // Aqui pode ser o componente do spinner de loading
        <LoadingSpinner />
      ) : (
        // Se o carregamento terminou, renderize o conteúdo normal
        <>
          <GlobalStyle />
          <Nav />
          <BoxViewOver>
            <div onClick={mudarParaMinimo}>
              <ButtonResponse texto={"Alterar Requisito"} />
            </div>
            <p>Requisito atual: {requisitoAtual}</p> 
            <>
              <Accordion texto={specsAtuais.cpu?.Model} children={specsAtuais.cpu?.imgage} link={specsAtuais.cpu?.link} />
              <Accordion texto={specsAtuais.gpu?.Model} children={specsAtuais.gpu?.imgage} link={specsAtuais.gpu?.link} />
              <Accordion texto={specsAtuais.ram?.size} children={specsAtuais.ram?.imgage} link={specsAtuais.ram?.link} />
              <Accordion texto={specsAtuais.Motherboard?.Model} children={specsAtuais.Motherboard?.imgage} link={specsAtuais.Motherboard?.link} />
              <Accordion texto={specsAtuais.fonte?.power} children={specsAtuais.fonte?.imgage} link={specsAtuais.fonte?.link} />
            </>
          </BoxViewOver>
          <BoxViewUnder>
            <Painel >
              {selectedGamesInfo.map((selectedGame) => (
                <Card key={selectedGame.ID} endereco={selectedGame.image} nome={selectedGame.name} ID={selectedGame.ID} />
              ))}
            </Painel>
          </BoxViewUnder>
          <FooterBar />
        </>
      )}
    </>
  );
}

export default Response;
