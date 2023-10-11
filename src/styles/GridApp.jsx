import styled from "styled-components";

const WrapperGeneral = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 6pc 1fr 20.0fr 15.0fr 0.9fr;
  grid-template-areas:
    "nav"
    "nav-2"
    "main"
    "select"
    "footer";
  text-align: center;
`;

const WrapperResponse = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: auto 25pc auto auto;
  grid-template-areas:
    "nav"
    "pecas"
    "jogos"
    "footer";
  text-align: center;
`;

export { WrapperGeneral, WrapperResponse };
