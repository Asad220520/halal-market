import React from "react";
import ProductCard from "./ProductCard";

const ModerationSection = ({ products, onApprove, onReject }) => (
  <div className="grid gap-4">
    {products.map((p) => (
      <ProductCard
        key={p.id}
        product={p}
        onApprove={() => onApprove(p.id)}
        onReject={() => onReject(p.id)}
      />
    ))}
  </div>
);

export default ModerationSection;
