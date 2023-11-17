import { Button, Input, NumeroDeJogos, Wrapper } from './style';
import { BsBox2 } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../../features/marketingCart/marketingCart';

function SelectionGames () {
    const jogos = useSelector((state) => state.carrinho.lista)
    const tamanho = jogos.length
    const dispatch = useDispatch()

    return (
        <Wrapper>
            <Input placeholder="Digite o nome do game"/>
            <Button onClick={() => dispatch(increment())}>
                <Wrapper>
                <BsBox2 size={30}/>
                <NumeroDeJogos>
                    {tamanho}
                </NumeroDeJogos>
                </Wrapper>
            </Button>
        </Wrapper>
    );
}

export default SelectionGames;