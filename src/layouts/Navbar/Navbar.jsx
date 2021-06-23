import React, { useState } from "react";
import CartSummary from "../CartSummary/CartSummary";
import { Menu, Container } from "semantic-ui-react";
import SignedIn from "../SignedIn/SignedIn";
import SignedOut from "../SignedOut/SignedOut";
import { NavLink, useHistory } from "react-router-dom";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false),
    history = useHistory();

  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed='top'>
        <Container>
          <Menu inverted secondary>
            <Menu.Item name='home' as={NavLink} to='/' />
            <Menu.Item name='messages' />
          </Menu>

          <Menu.Menu position='right'>
            <CartSummary />
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
