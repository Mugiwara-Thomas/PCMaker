import { NavBar, List, Item, Logo } from "./style";

function Nav() {
  return (
    <>
      <NavBar>
        <List>
          <Logo>
            <span>PCM</span>
            aker
          </Logo>
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
