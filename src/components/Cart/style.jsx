import styled from "styled-components";

const CartContainer = styled.div`
  position: fixed;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 0.3s ease;

  `;
  
  const CartEscapeArea = styled.div`
  width: 100%;
  `;
  
  const CartContent = styled.div`
  height: 100%;
  min-width: 500px;
  background-color: rgb(31, 31, 31);
  padding: 20px;
  margin: auto 0;
  // isso aqui adiciona scroll quando necessário
  overflow-y: auto; 
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    min-width: 85%;
  }
`;
const CartTitle = styled.p`
  font-size: 1.325rem;
  font-weight: 600;
  margin: 1pc;
  color: white;
`;
const CartTotal = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 15px;
`;

export { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal };