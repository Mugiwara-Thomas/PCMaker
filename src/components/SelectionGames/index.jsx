import { Button, Input, NumeroDeJogos, Wrapper } from './style';
import { BsBox2 } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../../features/marketingCart/marketingCart';

function SelectionGames () {
    const numeroDeJogos = useSelector((state) => state.carrinho.list);
    const dispatch = useDispatch()

    return (
        <Wrapper>
            <Input placeholder="Digite o nome do game"/>
            <Button onClick={() => dispatch(increment())}>
                <Wrapper>
                <BsBox2 size={30}/>
                <NumeroDeJogos>
                    {numeroDeJogos}
                </NumeroDeJogos>
                </Wrapper>
            </Button>
        </Wrapper>
    );
}

export default SelectionGames;