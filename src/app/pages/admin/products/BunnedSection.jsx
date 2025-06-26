import React from "react";
import BannedProductCard from "./BunnedProductCard";

const BannedSection = ({ bannedProducts, onDelete }) => (
  <div className="grid gap-4">
    {bannedProducts.map((p) => (
      <BannedProductCard
        key={p.id}
        product={p}
        onDelete={() => onDelete(p.id)}
      />
    ))}
  </div>
);

export default BannedSection;
