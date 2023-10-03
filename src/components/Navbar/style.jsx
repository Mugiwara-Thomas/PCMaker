import styled from "styled-components";

const NavBar = styled.div`
  padding: 2pc;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const List = styled.ul`
  display: flex;
  padding: 0pc 1pc;
`;
const Logo = styled.h1`
  font-size: 3pc;
  .span{
    color:'#000'
  }
`;

const Item = styled.li`
  font-size: 2pc;
  padding: 0pc 1pc;
`;

export { NavBar, List, Item, Logo };
