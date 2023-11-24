/* eslint-disable react/prop-types */
import { CardPai, CardFilho, GameName } from './style';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../features/marketingCart/marketingCart";

function Card({endereco, nome, ID}) {
  const allGames = useSelector((state) => state.carrinho.listaDeGames)
  
  
  const dispatch = useDispatch()
  const jogos = useSelector((state) => state.carrinho.lista)
  
  function getCountryByCode(ID) {
    return allGames.filter(
        function(allGames){ return allGames.ID === ID }
    );
  }

  const handleClick = () => {
    const jogoExistente = jogos.find(jogo => jogo === ID);
    if (jogoExistente) {
      console.log(getCountryByCode(jogoExistente))
      dispatch(decrement(ID)) 
    } else {
      dispatch(increment(ID))
    }
  }

  return (
    <>
      <CardPai onClick={handleClick}>
        <CardFilho url={endereco}>
          <GameName>{nome}</GameName> 
        </CardFilho>
      </CardPai>
    </>
  );
}

export default Card;