import styled from "styled-components";

const StyledImage = styled.img`
  width: ${props => props.width}%;
  height: ${props => props.height}%;
  margin-left: ${props => props.ml}%;
`;

export default StyledImage;
