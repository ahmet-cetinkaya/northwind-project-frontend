import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced='right'
          src='https://avatars.githubusercontent.com/u/53148314?v=4'
        ></Image>
        <Dropdown pointing='top left' text='Ahmet'>
          <Dropdown.Menu>
            <Dropdown.Item text='My Account' icon='info' />
            <Dropdown.Item text='Log out' icon='sign-out' onClick={signOut} />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
