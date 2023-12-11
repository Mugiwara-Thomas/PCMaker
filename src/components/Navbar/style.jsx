import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  align-items: center;
  grid-area: nav;
  justify-content: space-between;
  border-bottom: 1px solid #4F4A4A;
`;

const List = styled.ul`
  display: flex;
`;

const Logo = styled.h1`
  font-size: 2pc;
  padding-left: 1pc;
  color: #fff;
  & .span {
    color: #D961D7;
  }
  cursor: pointer;

`;

const Item = styled.li`
  text-decoration: none;
  color: #fff;
  font-size: 1pc;
  padding: 1.5pc;
  cursor: pointer;
  &:hover {
    background-color: #D961D7;
  }
`;

export { NavBar, List, Item, Logo };
