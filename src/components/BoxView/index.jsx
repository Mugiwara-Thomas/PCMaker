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
  height: 60%;
  background-color: #BC75BC;
  max-width: 80%;
  @media (width <= 1500px) {
      max-width: 60%;
      height: 80%;
  }
`;

const BoxLoginInner = styled.div`
  width: 60%;
  border-radius: 10px;  
  height: 95%;
  margin-top: 1%;
  margin-right: 2%;
  background-color: #ffffff;  
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ContainerRegister = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  height: 100vh; // 100% view height
  width: 100vw;
  justify-content:center; 
  align-items:center; 
`;

const BoxRegisterInner = styled.div`
  width: 60%;
  border-radius: 10px;  
  height: 95%;
  margin-top: 1%;
  margin-right: 2%;
  background-color: #ffffff;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { BoxViewOver, BoxViewUnder, BoxLogin, ContainerLogin, BoxLoginInner, ContainerRegister, BoxRegisterInner };