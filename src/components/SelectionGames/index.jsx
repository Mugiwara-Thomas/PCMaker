import { Button, Input, NumeroDeJogos, Wrapper } from './style';
import { BsBox2 } from 'react-icons/bs';

function SelectionGames () {
    const numeroDeJogos = 10;

    return (
        <Wrapper>
            <Input placeholder="Digite o nome do game"/>
            <Button>
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