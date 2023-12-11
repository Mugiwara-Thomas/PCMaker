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
          <Link to="/" style={{textDecoration: "none"}}>
            <Item >Home</Item>
          </Link>
          <Link to="/" style={{textDecoration: "none"}}>
            <Item>About</Item>
          </Link>
        </List>
        <List>
          <Item>Login</Item>
        </List>
      </NavBar>
    </>
  );
}

export default Nav;
