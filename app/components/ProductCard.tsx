import Link from "next/link";
import type { Product } from "../lib/products";
import { Icon } from "./icons";

export function ProductCard({ product }: { product: Product }) {
  const [c1, c2] = product.gradient;
  return (
    <Link href={`/product/${product.id}`} className="product-card">
      <div
        className="p-img"
        style={{
          background: `linear-gradient(140deg, ${c1} 0%, ${c2} 100%)`,
          aspectRatio: product.tag === "热卖" || product.price > 1000 ? "1 / 1" : "4 / 5",
        }}
      >
        {product.tag && <span className="p-tag">{product.tag}</span>}
        <Icon
          name={product.icon}
          size={44}
          className="p-img-icon"
          style={{ color: product.fg }}
        />
      </div>
      <div className="p-info">
        <p className="p-name">{product.name}</p>
        <p className="p-price">
          <span className="sym">¥</span>
          {product.price}
          {product.originalPrice && (
            <span className="p-sale">¥{product.originalPrice}</span>
          )}
        </p>
      </div>
    </Link>
  );
}
