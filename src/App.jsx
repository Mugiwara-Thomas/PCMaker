import Nav from "./components/Navbar";
import GlobalStyle from "./styles/GlobalStyle";
import { ButtonHome } from "./components/Button";
import { Link } from 'react-router-dom';
import { BoxViewOver, BoxViewUnder } from "./components/BoxView";
import Card from "./components/Card";
import { CustomComponent } from "./components/Accordion";
import SiteInfo from "./components/SiteInfo";
import SitePromos from "./components/SitePromos";


function App() {    
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <SiteInfo />
      <BoxViewOver>
        <CustomComponent>
          <div>
            <Card endereco="https://i.imgur.com/9uocXr8.jpeg" nome="Fortnite" />
            <Card endereco="https://cdn.akamai.steamstatic.com/steam/apps/359550/header.jpg?t=1694635629" nome="Rainbow Six Siege" />
            <Card endereco="https://cdn.akamai.steamstatic.com/steam/apps/1938090/header.jpg?t=1694122677" nome="Call of Duty" />
          </div>
          <div>
            <img src="https://i.imgur.com/2ofAbKT.png" alt="Descrição da Imagem" width={"750pc"} height={"auto"}/>
          </div>
        </CustomComponent>
      </BoxViewOver>
      <BoxViewUnder>
        <SitePromos />
      </BoxViewUnder>
      <div style={{ display: "flex", justifyContent: "center"}}>
        <Link to="/selectGame" >
          <ButtonHome texto="Descubra o PC dos seus sonhos" />
        </Link>
      </div>

    </>
  );
}

export default App;
