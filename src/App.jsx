import Nav from "./components/Navbar";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./components/Button";
import { Link } from 'react-router-dom';
import { BoxViewOver, BoxViewUnder } from "./components/BoxView";
import Card from "./components/Card";
import { CustomComponent } from "./components/Accordion";


function App() {    
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <div style={{ padding: '1rem' }}>
        <h1>Bem-vindo ao PCMaker</h1>
        <p>
          A PCMaker é a sua plataforma confiável para descobrir o PC ideal para suas necessidades.
          Seja para jogos, trabalho ou estudo, escolha o que quer usar no seu computador e nós 
          ajudamos você a encontrar a melhor configuração que se adapta ao seu estilo e orçamento.
        </p>
      </div>
      <BoxViewOver>
        <CustomComponent>
          <div>
            <Card endereco="https://i.imgur.com/9uocXr8.jpeg" nome="Fortnite" />
            <Card endereco="https://cdn.akamai.steamstatic.com/steam/apps/359550/header.jpg?t=1694635629" nome="Rainbow Six Siege" />
            <Card endereco="https://cdn.akamai.steamstatic.com/steam/apps/1938090/header.jpg?t=1694122677" nome="Call of Duty" />
          </div>
          <div>
            <img src="https://th.bing.com/th/id/OIP.160o_-WlBOP_DAkf5ir9zgHaEK?w=286&h=180&c=7&r=0&o=5&pid=1.7" alt="Descrição da Imagem" />
          </div>
        </CustomComponent>
      </BoxViewOver>
      <BoxViewUnder>
        <h1>Veja as promoções que estão rolando no momento!</h1>
        <p> 🛠 Aguarde mais um pouco, isso está em desenvolvimento 🛠</p>
      </BoxViewUnder>
      <Link to="/selectGame" >
        <Button texto="Descubra o PC dos seus sonhos" />
      </Link>
    </>
  );
}

export default App;
