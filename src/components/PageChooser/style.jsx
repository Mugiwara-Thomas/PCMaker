import styled from 'styled-components';

const PageChooser = styled.div`
  display: flex;
  grid-area: select;
  justify-content: center;
  height:2pc;
  margin: 2pc;
`;

const PageButton = styled.button`
  margin: 0 0.5pc;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? '#ED15ED' : '#BC75BC')};
  color: ${(props) => (props.active ? '#000' : '#fff')};
  text-align: center; 
  line-height: 10px;
  cursor: pointer;
`;

export { PageChooser, PageButton };