import styled from "styled-components";

const WrapperGeneral = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.2fr 1fr 20.0fr 15.0fr 0.9fr;
  grid-template-areas:
    "nav"
    "nav-2"
    "main"
    "select"
    "footer";
  text-align: center;
`;

export { WrapperGeneral };
