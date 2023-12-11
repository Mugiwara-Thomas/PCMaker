import React from "react";
import styled, { keyframes } from "styled-components";

// Animação do spinner
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Estilo do spinner e container para centralizar
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ajuste a altura de acordo com a necessidade */
  background-color: rgba(0, 0, 0, 0.5); /* Cor preta com opacidade */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Spinner = styled.div`
  border: 6px solid rgba(0, 0, 0, 0.1); /* Aumenta a espessura */
  border-top: 6px solid #333; /* Muda a cor */
  border-radius: 50%;
  width: 60px; /* Aumenta o tamanho */
  height: 60px; /* Aumenta o tamanho */
  animation: ${spin} 1s linear infinite;
`;

// Componente Spinner
const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
