import { ButtonStyle, ButtonRequestStyle } from "./style";


function Button({texto}) {
    return (
        <>
            <ButtonStyle>
                {texto}
            </ButtonStyle>
        </>
    )
}


function ButtonRequest({texto, funcao}){
    return(
        <div>
          <ButtonRequestStyle onClick={funcao}>{texto}</ButtonRequestStyle>
        </div>
      );
}

export { ButtonRequest }
export default Button;