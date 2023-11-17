import Card from "../components/Card";
import Nav from "../components/Navbar";
import Painel from "../components/PainelGames";
import GlobalStyle from "../styles/GlobalStyle";
import PageChooserBar from "../components/PageChooser";
import Button from "../components/Opcao";
import FooterBar from "../components/Footer";
import { WrapperGeneral } from "../styles/GridApp";
import SelectionGames from "../components/SelectionGames";
import { useState } from "react";

// Vai mudar dps
import requestJogos from "../functions/requestGames";


// ------------ Descobrir os jogos do usuario ---------------
// pegar lista de jogos - (redux ou requisião) [x]
// cria um elemento pra cada item da lista -> checkbox (nome do jogo) [x]
// quando selecionar adicionar em uma lista dentro do redux [x]

// ------------ Confirmar os jogos do usuario ----------------
// Tela de carrinho do usuario [ ]
// Mostrar Na tela os jogos escolhidos [ ]
// Botão de confirmar que faz uma requisição pedindo a recomendaçãp [ ]
// Enviar para tela de response quando confirmar a recomendação [ ]


function SelectGame() {
  const [jogos, setJogos] = useState([])

  async function requisicao_aux(){
    let dados = await requestJogos();
    setJogos(dados);
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
          <Button texto={jogo.name} key={jogo.ID} ID={jogo.ID}/>
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
