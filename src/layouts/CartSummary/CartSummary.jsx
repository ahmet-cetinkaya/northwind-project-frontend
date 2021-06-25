import { Dropdown, Label } from "semantic-ui-react";

import { NavLink } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Dropdown item text='Cart'>
      <Dropdown.Menu>
        {cartItems.map((cartItem) => (
          <Dropdown.Item key={cartItem.product.id}>
            {cartItem.product.productName}
            <Label>{cartItem.quantity}</Label>
          </Dropdown.Item>
        ))}
        <Dropdown.Divider />
        <Dropdown.Item as={NavLink} to='/cart'>
          Go to your card
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
