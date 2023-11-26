import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getProductById, currency } from "home/products";
import placeAddToCart from "addtocart/placeAddToCart.js";

export default function PDPContent() {
  const { id } = useParams();
  const addToCart = useRef(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    } else {
      setProduct(null);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (addToCart.current) {
      placeAddToCart(addToCart.current, product.id);
    }
  }, [product]);

  if (loading) return <div>Loading...</div>;

  if (!product) return null;

  return (
    <div className="flex text-justify">
      <div className="pr-16">
        <img src={product.image} alt={product.name} width="300px" />
      </div>
      <div className="w-2/3">
        <h3>{product.name}</h3>
        <p className="mt-12 mb-4 text-base font-bold">{product.description}</p>
        <p className="text-sm">{product.longDescription}</p>
        <div className="mt-16">{currency.format(product.price)}</div>
        <div ref={addToCart}></div>
      </div>
    </div>
  );
}
