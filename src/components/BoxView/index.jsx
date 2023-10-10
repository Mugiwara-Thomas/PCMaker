import styled from "styled-components";

const BoxViewOver = styled.div`
  width: ${({ width }) => width}%;
  height: ${({ height }) => height}%;
  margin: auto;
  grid-area: main;
  border-radius: 10px;
  background-color: #9B469A;
`;

const BoxViewUnder = styled.div`
  width: ${({ width }) => width}%;
  height: ${({ height }) => height}%;
  margin: auto;
  grid-area: select;
  border-radius: 10px;
  background-color: #9B469A;
`;

export {BoxViewOver, BoxViewUnder};