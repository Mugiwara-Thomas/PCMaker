import Card from "../components/Card";
import Nav from "../components/Navbar";
import Painel from "../components/PainelGames";
import GlobalStyle from "../styles/GlobalStyle";
import PageChooserBar from "../components/PageChooser";
import FooterBar from "../components/Footer";
import { WrapperGeneral } from "../styles/GridApp";
import SelectionGames from "../components/SelectionGames";

function SelectGame() {
  return (
    <>
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
          <Card
            endereco={
              "https://m.media-amazon.com/images/I/91Aa9ZIAaoL._AC_UF1000,1000_QL80_.jpg"
            }
          />
          <Card
            endereco={
              "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg"
            }
          />
          <Card
            endereco={
              "https://www.digiseller.ru/preview/1034230/p1_3295515_507b2716.jpeg"
            }
          />
          <Card
            endereco={
              "https://th.bing.com/th/id/R.8fea3a8d881c15570b1bf26847f4bc07?rik=pX8GQOPfY6Ajhw&pid=ImgRaw&r=0"
            }
          />
          <Card
            endereco={
              "https://img.ibxk.com.br/2018/05/03/red-dead-03201115279005.jpg?ims=328x"
            }
          />
          <Card
            endereco={
              "https://m.media-amazon.com/images/I/91Aa9ZIAaoL._AC_UF1000,1000_QL80_.jpg"
            }
          />
          <Card
            endereco={
              "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg"
            }
          />
          <Card
            endereco={
              "https://www.digiseller.ru/preview/1034230/p1_3295515_507b2716.jpeg"
            }
          />
          <Card
            endereco={
              "https://th.bing.com/th/id/R.8fea3a8d881c15570b1bf26847f4bc07?rik=pX8GQOPfY6Ajhw&pid=ImgRaw&r=0"
            }
          />
          <Card
            endereco={
              "https://img.ibxk.com.br/2018/05/03/red-dead-03201115279005.jpg?ims=328x"
            }
          />
          <Card
            endereco={
              "https://m.media-amazon.com/images/I/91Aa9ZIAaoL._AC_UF1000,1000_QL80_.jpg"
            }
          />
          <Card
            endereco={
              "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg"
            }
          />
          <Card
            endereco={
              "https://www.digiseller.ru/preview/1034230/p1_3295515_507b2716.jpeg"
            }
          />
          <Card
            endereco={
              "https://th.bing.com/th/id/R.8fea3a8d881c15570b1bf26847f4bc07?rik=pX8GQOPfY6Ajhw&pid=ImgRaw&r=0"
            }
          />
          <Card
            endereco={
              "https://img.ibxk.com.br/2018/05/03/red-dead-03201115279005.jpg?ims=328x"
            }
          />
          <Card
            endereco={
              "https://m.media-amazon.com/images/I/91Aa9ZIAaoL._AC_UF1000,1000_QL80_.jpg"
            }
          />
          <Card
            endereco={
              "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg"
            }
          />
          <Card
            endereco={
              "https://www.digiseller.ru/preview/1034230/p1_3295515_507b2716.jpeg"
            }
          />
          <Card
            endereco={
              "https://th.bing.com/th/id/R.8fea3a8d881c15570b1bf26847f4bc07?rik=pX8GQOPfY6Ajhw&pid=ImgRaw&r=0"
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
