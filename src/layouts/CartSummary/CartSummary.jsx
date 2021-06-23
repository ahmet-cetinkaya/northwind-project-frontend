import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

export default function CartSummary() {
  return (
    <Dropdown item text='Cart'>
      <Dropdown.Menu>
        <Dropdown.Item>Asus Laptop</Dropdown.Item>
        <Dropdown.Item>MSI Laptop</Dropdown.Item>
        <Dropdown.Item>Monster Laptop</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item as={NavLink} to='/cart'>
          Go to your card
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
