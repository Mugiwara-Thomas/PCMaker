import { CartContainer, CartContent, CartEscapeArea, CartTitle } from "./style";
import { useSelector } from 'react-redux';

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const jogos = useSelector((state) => state.carrinho.lista)

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={handleEscapeAreaClick} />
      <CartContent>
        <CartTitle>Jogos Selecionados</CartTitle>
        {jogos.map((jogo) => (
          <div>{jogo.name}</div>
        ))}
      </CartContent>
    </CartContainer>
  );
};

export default Cart;