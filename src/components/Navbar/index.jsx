import { NavBar, List, Item, Logo } from "./style";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <NavBar>
        <List>
          <Logo>
            <span className="span">PCM</span>
            aker
          </Logo>
        </List>
        <List>
          <Link to="/">
            <Item>Home</Item>
          </Link>
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
