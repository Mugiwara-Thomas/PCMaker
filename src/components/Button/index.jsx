import { ButtonStyle } from "./style";


function Button({texto}) {
    return (
        <>
            <ButtonStyle>
                {texto}
            </ButtonStyle>
        </>
    )
}

export default Button;