import React, { useState, useEffect } from "react";

import { getProducts, currency } from "./products";

export default function HomeContent() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
      {loading && <div>Loading...</div>}
      {!loading &&
        products.length &&
        products.map((product) => (
          <a
            key={product.id}
            className="flex flex-col items-center border border-gray-200 p-3 rounded-md cursor-pointer"
          >
            <img src={product.image} alt={product.name} />
            <p className="text-xs font-bold my-4">{product.name}</p>
            <div className="text-xs text-center mb-4">
              {product.description}
            </div>
            <div>{currency.format(product.price)}</div>
          </a>
        ))}
    </div>
  );
}
