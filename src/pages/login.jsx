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
        <StyledImage width="30" height="30" ml="5" src="src/assets/imageLogin.png" />
        <BoxLoginInner>
          <InputBox></InputBox>
          <InputBox></InputBox>
          <Button></Button>
        </BoxLoginInner>
      </BoxLogin>
    </ContainerLogin>
  );
}

export default Login;
