import styled from 'styled-components';

const ImageButton = styled.button`
  background: url(${props => props.img}) no-repeat;
  width: 5px;  // Defina a largura
  height: 5px; // Defina a altura
  border: none;
`;

export { ImageButton };