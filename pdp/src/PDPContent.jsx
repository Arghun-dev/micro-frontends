import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById, currency } from "home/products";

export default function PDPContent() {
  const { id } = useParams();
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
      </div>
    </div>
  );
}
