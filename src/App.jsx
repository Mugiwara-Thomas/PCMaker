import Card from "./components/Card";
import Nav from "./components/Navbar"
import Painel from "./components/PainelGames";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Painel>
        <Card endereco={"https://img.ibxk.com.br/2018/05/03/red-dead-03201115279005.jpg?ims=328x"}/>
        <Card endereco={"https://m.media-amazon.com/images/I/91Aa9ZIAaoL._AC_UF1000,1000_QL80_.jpg"}/>
        <Card endereco={"https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg"}/>
        <Card endereco={"https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg"}/>
        <Card endereco={"https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg"}/>
        <Card endereco={"https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg"}/>
      </Painel>
    </>
  );
}

export default App;
