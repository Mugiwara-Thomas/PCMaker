import { ButtonStyle, ButtonRequestStyle, ButtonStyleResponse } from "./style";


function Button({texto}) {
    return (
        <>
            <ButtonStyle>
                {texto}
            </ButtonStyle>
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

export { ButtonRequest , ButtonResponse }
export default Button;