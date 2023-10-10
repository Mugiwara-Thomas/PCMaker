import styled from "styled-components";

const CollapseBox = styled.div`
  display: ${({ open }) => open ? "block" : "none"};
  transition: height 0.5s;
  cursor: pointer;
  grid-area: nav-2;
  background-color: #fff;
`;

export { CollapseBox };