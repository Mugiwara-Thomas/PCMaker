import GlobalStyle from "../styles/GlobalStyle";
import { BoxLogin, BoxLoginInner, ContainerLogin } from "../components/BoxView";
import Button from "../components/Button";
import StyledImage from "../components/StyledImage";
import { TextoPrincipal, Wrapper, WrapperCheckbox } from "../components/LoginComponents/style";
import { InputLogin, CheckBox } from "../components/LoginComponents";

function Login() {
  return (
    <ContainerLogin>
      <GlobalStyle />
      <BoxLogin>
        <StyledImage width="100" height="100" ml="5" src="src/assets/imageLogin.png" />
        <BoxLoginInner>

          <Wrapper>
            <TextoPrincipal>
              Welcome
            </TextoPrincipal>
            <TextoPrincipal>
              Back
            </TextoPrincipal>
          </Wrapper>

          <InputLogin texto="Login"></InputLogin>
          <InputLogin texto="Password"></InputLogin>
          <WrapperCheckbox>
          <CheckBox></CheckBox>
          </WrapperCheckbox>

          <Button texto="Login"></Button>
        </BoxLoginInner>
      </BoxLogin>
    </ContainerLogin>
  );
}

export default Login;
