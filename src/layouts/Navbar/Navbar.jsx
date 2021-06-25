import { Container, Menu } from "semantic-ui-react";
import { NavLink, useHistory } from "react-router-dom";
import React, { useState } from "react";

import CartSummary from "../CartSummary/CartSummary";
import SignedIn from "../SignedIn/SignedIn";
import SignedOut from "../SignedOut/SignedOut";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false),
    history = useHistory(),
    { cartItems } = useSelector((state) => state.cart);

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
            {cartItems.length > 0 && <CartSummary />}
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
