import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import requestResponse from '../../functions/requestResponse';
import { StyledButton } from './style';


function ConfirmButton () {
  const dispatch = useDispatch();
  const lista = useSelector((state) => state.carrinho.lista)
  const handleClick = async () => {
    try {
      const jogos = await requestResponse(lista); 
      console.log(jogos);
    } catch (error) {
      console.error('Erro ao obter dados da API:', error);
    }
  };

  return (
    <>
      <StyledButton onClick={handleClick}>Confirmar</StyledButton>
    </>
  );
}

export default ConfirmButton;