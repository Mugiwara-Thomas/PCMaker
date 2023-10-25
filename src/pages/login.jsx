import GlobalStyle from "../styles/GlobalStyle";
import { BoxLogin, BoxLoginInner, ContainerLogin } from "../components/BoxView";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import StyledImage from "../components/StyledImage";

function Login() {
  return (
    <ContainerLogin>
      <GlobalStyle />
      <BoxLogin>
        <StyledImage width="100" height="100" ml="5" src="src/assets/imageLogin.png" />
        <BoxLoginInner>
          <InputBox></InputBox>
          <InputBox></InputBox>
          <Button texto="Login"></Button>
        </BoxLoginInner>
      </BoxLogin>
    </ContainerLogin>
  );
}

export default Login;
