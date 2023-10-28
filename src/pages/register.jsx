import GlobalStyle from "../styles/GlobalStyle";
import { BoxLogin, BoxRegisterInner, ContainerRegister } from "../components/BoxView";
import Button from "../components/Button";
import StyledImage from "../components/StyledImage";
import { TextoPrincipal, WrapperCheckbox } from "../components/LoginComponents/style";
import { InputLogin, CheckBox } from "../components/LoginComponents";
import { ImageButton } from "../components/ImageButton/style";

function Register() {
  return (
    <ContainerRegister>
      <GlobalStyle />
      <BoxLogin>
        <StyledImage width="100" height="100" ml="5" src="src/assets/imageRegister.png" />
        <BoxRegisterInner>
  
            <TextoPrincipal>
              Create
            </TextoPrincipal>
            <TextoPrincipal>
              Account
            </TextoPrincipal>

          <InputLogin texto="Name"></InputLogin>
          <InputLogin texto="Email"></InputLogin>
          <InputLogin texto="Password"></InputLogin>
          <InputLogin texto="Confirm password"></InputLogin>

          <WrapperCheckbox>
          <CheckBox></CheckBox>
          </WrapperCheckbox>

          <Button texto="Create"></Button>
        </BoxRegisterInner>
      </BoxLogin>
    </ContainerRegister>
  );
}

export default Register;