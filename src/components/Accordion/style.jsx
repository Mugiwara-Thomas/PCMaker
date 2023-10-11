import styled from "styled-components";

const AccordionWrapper = styled.div`
  width: 95%;
  margin: auto;
  border-radius: 1pc;
  `;

const AccordionItem = styled.div`
  margin: 2pc;
`;

const AccordionTitle = styled.div`
  padding: 1pc;
  background-color: #114444;
  border-radius: 1pc 1pc 0pc 0pc;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const AccordionContent = styled.div`
  padding: 1pc;
  background-color: #357c7c;
  border-radius: 0pc 0pc 1pc 1pc;
`;

const AccordionImageBackground = styled.div`
  width: 6.5pc;
  height: 6.5pc;
  background-color: #41414163;
  border-radius: 11px;
  `;

const AccordionImage = styled.div`
  width: 5pc;
  height: 5pc;
  margin: 0.7pc;
  background-image: url(${(props) => props.urlImage});
  background-size: 100%;
  background-repeat: no-repeat;
`;

const CloseAndOpenButton = styled.div`
  margin-left: 45pc;
`
export {
  AccordionWrapper,
  AccordionItem,
  AccordionTitle,
  AccordionContent,
  AccordionImage,
  AccordionImageBackground, 
  CloseAndOpenButton
};