import { Input, Wrapper } from "../SelectionGames/style";


function InputBox ({descricao}) {
    return (
        <Wrapper>
            <Input placeholder={descricao}/>
        </Wrapper>
    );
}

export default InputBox;