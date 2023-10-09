import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  grid-area: nav-2;
  margin: 1% 3%;
`;

const NumeroDeJogos = styled.div`
  background-color: red;
  color: white;
  border-radius: 90px;
  width: 2pc;
  height: 2pc;
`;
const Button = styled.button`
  width: auto;
  height: 11.5vh;
  background-color: #a749e0;
  font-size: 1em;
  border: 2px solid #000;
  border-radius: 11px;
  padding: 1em;
  margin-left: 1pc;
  cursor: pointer;

  &:hover{
    background-color: #b86ce7;
  }
`;

const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  $size: props.$size || "1em",
}))`
  width: 80vw;
  max-height: 10vh;
  color: #4f4a4a;
  font-size: 1em;
  border: 2px solid #4f4a4a;
  border-radius: 11px;
  background-color: #ffffff;
  padding: ${(props) => props.$size};
`;

export { NumeroDeJogos, Input, Button, Wrapper };
