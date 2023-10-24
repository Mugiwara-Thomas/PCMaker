import Nav from "../components/Navbar";
import GlobalStyle from "../styles/GlobalStyle";
import { BoxViewOver } from "../components/BoxView";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

function Login() {
  return (
    <>
      <GlobalStyle />
      <Nav/>
      <BoxViewOver>
        <InputBox descricao="Login"/>
        <InputBox descricao="Password"/>
        <Button />
      </BoxViewOver>
    </>
  );
}

export default Login;
