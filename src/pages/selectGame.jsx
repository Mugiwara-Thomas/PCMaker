import Card from "../components/Card";
import Nav from "../components/Navbar";
import Painel from "../components/PainelGames";
import GlobalStyle from "../styles/GlobalStyle";
import PageChooserBar from "../components/PageChooser";
import FooterBar from "../components/Footer";
import { WrapperGeneral } from "../styles/GridApp";
import SelectionGames from "../components/SelectionGames";
import { useState } from "react";
import { increment, decrement } from "../features/marketingCart/marketingCart";

// Vai mudar dps
import requestJogos from "../functions/requestGames";


function SelectGame() {
  const [jogos, setJogos] = useState([])

  async function requisicao_aux(){
    let dados = await requestJogos();
    setJogos(dados);
  }
  
  requisicao_aux()

  return (
    <>
      <select>
        {jogos.map((jogo) => (
          <option key={jogo.ID} value={jogo.name}> {jogo.name}</option>
        ))}
      </select>
      <WrapperGeneral>
        <GlobalStyle />

        <Nav />
        <SelectionGames />
        <Painel response={false}>
          <Card
            endereco={
              "https://img.ibxk.com.br/2018/05/03/red-dead-03201115279005.jpg?ims=328x"
            }
          />
        </Painel>
        <PageChooserBar />
        <FooterBar />
      </WrapperGeneral>
    </>
  );
}

export default SelectGame;
