import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({ signIn }) {
  return (
    <div>
      <Menu.Item>
        <Button primary onClick={signIn}>
          Log in
        </Button>
        <Button primary style={{ marginLeft: "1rem" }}>
          Sign up
        </Button>
      </Menu.Item>
    </div>
  );
}
