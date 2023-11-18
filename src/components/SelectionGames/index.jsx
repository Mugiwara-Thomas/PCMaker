import { Button, Input, NumeroDeJogos, Wrapper } from './style';
import { BsBox2 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useState } from "react";
import Cart from '../Cart';

function SelectionGames () {
    const jogos = useSelector((state) => state.carrinho.lista)
    const tamanho = jogos.length

    const [cartIsVisible, setCartIsVisible] = useState(false);

    const handleCartClick = () => {
        setCartIsVisible(true);
    };

    return (
        <Wrapper>
            <Input placeholder="Digite o nome do game"/>
            <Button onClick={handleCartClick}>
                <Wrapper>
                <BsBox2 size={30}/>
                <NumeroDeJogos>
                    {tamanho}
                </NumeroDeJogos>
                </Wrapper>
            </Button>
            <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
        </Wrapper>
    );
}

export default SelectionGames;