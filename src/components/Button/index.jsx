import { ButtonStyle, ButtonRequestStyle, ButtonStyleResponse, ButtonStyleHome } from "./style";


function Button({texto}) {
    return (
        <>
            <ButtonStyle>
                {texto}
            </ButtonStyle>
        </>
    )
}

function ButtonHome({texto}) {
    return (
        <>
            <ButtonStyleHome>
                {texto}
            </ButtonStyleHome>
        </>
    )
}

function ButtonResponse({texto}) {
    return (
        <>
            <ButtonStyleResponse>
                {texto}
            </ButtonStyleResponse>
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

export { ButtonRequest , ButtonResponse, ButtonHome }
export default Button;