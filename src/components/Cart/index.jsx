import { CartContainer, CartContent, CartEscapeArea, CartTitle } from "./style";
import { useSelector } from 'react-redux';
import CardCart from "../CardCart";
import ConfirmButton from "../ConfirmButton";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  const allGames = useSelector((state) => state.carrinho.listaDeGames)
  const cartGames = useSelector((state) => state.carrinho.lista)

  const selectedGamesInfo = allGames.filter((game) =>
    cartGames.includes(game.ID)
  );


  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={handleEscapeAreaClick} />
      <CartContent>
        <ConfirmButton />
        <CartTitle>Jogos Selecionados</CartTitle>

        {/* Mostrar os itens que o jogador selecionou */}

        {selectedGamesInfo.map((selectedGame) => (
          <CardCart key={selectedGame.ID} endereco={selectedGame.image} nome={selectedGame.name} ID={selectedGame.ID} />
        ))}
      </CartContent>
    </CartContainer >
  );
};

export default Cart;