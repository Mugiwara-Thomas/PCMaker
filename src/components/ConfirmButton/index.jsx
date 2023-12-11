import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import requestResponse from '../../functions/requestResponse';
import { StyledButton } from './style';
import { incrementMinimo, incrementRecomendado } from '../../features/marketingCart/marketingCart'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom'

function ConfirmButton() {
  // Variáveis
  const dispatch = useDispatch();
  const lista = useSelector((state) => state.carrinho.lista)
  // const history = useHistory(); // Instancie o useHistory
  let requisitosMinimos = ""
  let requisitosRecomendados = "";

  

  // Funções
  const handleClick = async () => {
    console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
    try {
      if (lista.length > 0) {
        const requisitos = await requestResponse(lista);
        requisitosMinimos = requisitos.minimun;
        requisitosRecomendados = requisitos.recommended;
        
        
        dispatch(incrementMinimo(requisitosMinimos));
        dispatch(incrementRecomendado(requisitosRecomendados));
        

      } else {
        console.log('A lista de jogos está vazia.');
      }
    } catch (error) {
      console.error('Erro ao obter dados da API:', error);
    }
  };

  return (
    <>
      {lista.length > 0 ? (
        <Link to={`/selectGame/response`}>
          <StyledButton onClick={handleClick}>Confirmar</StyledButton>
        </Link>
      ) : (
        <StyledButton onClick={() => alert('Selecione algum jogo')}>
          Confirmar
        </StyledButton>
      )}
    </>
  );
}

export default ConfirmButton;