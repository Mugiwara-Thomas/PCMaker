import React from 'react';
import styled from 'styled-components';

const CustomComponent = styled.div`
  width: 95%;
  height: 25%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5); /* Branco transparente */
  padding: 1pc;
  margin: 1pc;
  /* Adicione outros estilos conforme necessário */
`;

const Paragrafo = styled.p`
color: black;
`
const Accordion = ({texto}) => {
  return (
    <>
      <CustomComponent>
        <Paragrafo>
          {texto}
        </Paragrafo>
      </CustomComponent>
    </>
  );
};


export default Accordion;
