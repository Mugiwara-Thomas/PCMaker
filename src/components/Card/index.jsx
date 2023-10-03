/* eslint-disable react/prop-types */
import { CardPai, CardFilho } from './style';

function Card({endereco}) {
  return (
    <>
      <CardPai>
        <CardFilho url={endereco}></CardFilho>
      </CardPai>
    </>
  );
}

export default Card;