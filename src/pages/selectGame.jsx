import Card from "../components/Card";
import Nav from "../components/Navbar";
import Painel from "../components/PainelGames";
import GlobalStyle from "../styles/GlobalStyle";
import FooterBar from "../components/Footer";
import { WrapperGeneral } from "../styles/GridApp";
import SelectionGames from "../components/SelectionGames";
import { useState } from "react";
import requestJogos from "../functions/requestGames";
import { useDispatch } from 'react-redux';
import { incrementAll } from "../features/marketingCart/marketingCart";

function SelectGame() {
  const dispatch = useDispatch()
  const [jogos, setJogos] = useState([])
  

  async function requisicao_aux(){
    let dados = await requestJogos();
    setJogos(dados);
    dispatch(incrementAll(dados)) 
    // console.log(allGames)
  }


  
  requisicao_aux()

  return (
    <>
      <WrapperGeneral>
        <GlobalStyle />

        <Nav />
        <SelectionGames />
        <Painel response={false}>
        {jogos.map((jogo) => (
          <Card endereco={jogo.image} nome={jogo.name} key={jogo.ID} ID={jogo.ID}/>
        ))}
          {/*<Card
            endereco={
              "https://img.ibxk.com.br/2018/05/03/red-dead-03201115279005.jpg?ims=328x"
            }
          />*/}
        </Painel>

        {/*<PageChooserBar /> */}
        <FooterBar />
      </WrapperGeneral>
    </>
  );
}

export default SelectGame;
