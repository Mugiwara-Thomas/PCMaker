import styled from 'styled-components';

const PageChooser = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
`;

const PageButton = styled.button`
  margin: 0 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? '#ED15ED' : '#BC75BC')};
  color: ${(props) => (props.active ? '#000' : '#000')};
`;

export { PageChooser, PageButton };