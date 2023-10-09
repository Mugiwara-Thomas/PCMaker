import styled from "styled-components";

const NavBar = styled.div`
  padding: 2pc;
  display: flex;
  align-items: center;
  grid-area: nav;
  justify-content: space-between;
  border-bottom: 2px solid #4F4A4A;
`;

const List = styled.ul`
  display: flex;
  padding: 0pc 1pc;
`;

const Logo = styled.h1`
  font-size: 3pc;
  color: #fff;
  & .span {
    color: #D961D7;
  }
  cursor: pointer;
`;

const Item = styled.li`
  font-size: 2pc;
  padding: 0pc 1pc;
  cursor: pointer;
`;

export { NavBar, List, Item, Logo };
