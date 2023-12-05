import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CustomComponent = styled.div`
  width: 85%;
  height: 25%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5); /* Branco transparente */
  padding: 1pc;
  margin: 1pc;
  display: flex; /* Usa flexbox para alinhar os itens */
  align-items: center; /* Centraliza verticalmente os itens dentro do container */
  justify-content: space-between; /* Alinha os itens ao início do container */
`;

const Paragrafo = styled.p`
  color: black;
  margin-left: 10px; /* Adiciona um espaçamento à esquerda do texto */
  display: flex; /* Usa flexbox para alinhar o texto */
  align-items: center; /* Centraliza verticalmente o texto dentro do seu container */
`;

const Botao = styled.button`
  background-color: #4CAF50; /* Cor de fundo verde */
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #45a049; /* Cor de fundo mais escura quando passa o mouse */
  }

  svg {
    margin-right: 5px; /* Espaçamento entre o ícone e o texto */
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center; /* ou o alinhamento desejado */
  /* Adicione mais estilos conforme necessário */
`;

const Accordion = ({texto, children, link}) => {
  return (
    <>
      <CustomComponent>
        <InnerContainer >
          <img src={children} />
          <Paragrafo>
            {texto}
          </Paragrafo>
        </InnerContainer>
        <Link to={link}>
        <Botao>
          <FaShoppingCart />
          Comprar
        </Botao>
        </Link>
      </CustomComponent>
    </>
  );
};


export default Accordion;
