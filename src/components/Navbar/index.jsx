import { NavBar, List, Item, Logo } from "./style";

function Nav() {
  return (
    <>
      <NavBar>
        <List>
          <Logo>PCMaker</Logo>
        </List>
        <List>
          <Item>Home</Item>
          <Item>About</Item>
        </List>
        <List>
          <Item>Login</Item>
        </List>
      </NavBar>
    </>
  );
}

export default Nav;
