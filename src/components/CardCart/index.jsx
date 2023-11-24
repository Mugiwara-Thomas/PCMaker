/* eslint-disable react/prop-types */
import { CardPai, CardFilho, GameName } from './style';
import { useDispatch } from "react-redux";
import { decrement } from "../../features/marketingCart/marketingCart";

function CardCart({endereco, nome, ID}) {

  const dispatch = useDispatch()

  const handleClick = () => {
      dispatch(decrement(ID)) 
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

export default CardCart;