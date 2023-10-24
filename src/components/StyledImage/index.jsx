import styled from "styled-components";

const StyledImage = styled.img`
  width: ${props => props.width}pc;
  height: ${props => props.height}pc;
  margin-left: ${props => props.ml}%;
`;

export default StyledImage;
