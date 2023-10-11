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

export {BoxViewOver, BoxViewUnder};