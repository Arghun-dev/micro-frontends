import { createSignal, createEffect, Show } from "solid-js";

import { jwt, addToCart } from "cart/cart";

export default ({ id }) => {
  const [loggedIn, setLoggedIn] = createSignal(false);

  createEffect(() => {
    return jwt.subscribe((jwt) => {
      setLoggedIn(!!jwt);
    });
  });

  return (
    <Show when={loggedIn()}>
      <button
        onClick={() => addToCart(id)}
        className="bg-red-900 text-white text-sm py-2 px-5 rounded-md"
      >
        Add To Cart
      </button>
    </Show>
  );
};
