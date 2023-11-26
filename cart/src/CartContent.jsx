import React, { useEffect, useState } from "react";

import MiniCart from "./MiniCart";
import { login, jwt } from "./cart";
import Login from "./Login";

export default function CartContent() {
  const [token, setToken] = useState("");

  return (
    <div>
      <div>JWT: {token}</div>
      <Login />
      <MiniCart />
    </div>
  );
}
