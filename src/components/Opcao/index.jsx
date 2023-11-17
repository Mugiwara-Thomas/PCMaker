import { useSelector, useDispatch } from "react-redux";
import { ButtonStyle } from "./style";
import react from 'react'
import { increment } from "../../features/marketingCart/marketingCart";

function Button({texto, ID}) {
    const dispatch = useDispatch()
    const jogos = useSelector((state) => state.carrinho.lista)
    const handleClick = () => {
        dispatch(increment(ID))
        console.log(jogos)
    }

    return (
        <>
            <ButtonStyle onClick={handleClick}>
                {texto}
            </ButtonStyle>
        </>
    )
}


export default Button;
