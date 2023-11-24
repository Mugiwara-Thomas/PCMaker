import Nav from "./components/Navbar";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./components/Button";
import { Link } from 'react-router-dom';


function App() {    
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <Link to="/selectGame">
        <Button texto="Descubra o PC dos seus sonhos" />
      </Link>
    </>
  );
}

export default App;
