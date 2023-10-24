import styled from "styled-components";

const BoxViewOver = styled.div`
  width: 85%;
  height: auto;
  overflow: hidden;
  align-content: center;
  margin: 0.8pc auto;
  grid-area: pecas;
  border-radius: 10px;
  background-color: #9B469A;
`;

const BoxViewUnder = styled.div`
  width: 85%;
  height: auto;
  align-content: center;
  margin: 0.8pc auto;
  grid-area: jogos;
  border-radius: 10px;
  background-color: #9B469A;
  overflow: hidden;
  `;

const BoxLogin = styled.div`
  width: 70%;
  border-radius: 10px;
  display: flex;
  height: 30pc;
  background-color: #BC75BC;
  max-width: 60pc;

`;

const BoxLoginInner = styled.div`
  width: 30%;
  border-radius: 10px;  
  height: 28pc;
  margin: 1pc 1pc 0pc auto;
  background-color: #ffffff;  
`;

const ContainerLogin = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  height: 100vh; // 100% view height
  width: 100vw;
  justify-content:center; 
  align-items:center; 
`;




export { BoxViewOver, BoxViewUnder, BoxLogin, ContainerLogin, BoxLoginInner };