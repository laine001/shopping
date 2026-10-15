"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getProduct } from "../../lib/products";
import { useCart } from "../../lib/cart";
import { Icon } from "../../components/icons";

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const { addItem } = useCart();

  const id = Array.isArray(params.id) ? params.id[0] : (params.id as string);
  const product = getProduct(id ?? "");

  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  if (!product) {
    return (
      <main className="main">
        <p className="empty-tip">商品不存在或已下架</p>
        <Link href="/" className="btn btn-primary btn-block">
          返回首页
        </Link>
      </main>
    );
  }

  const [c1, c2] = product.gradient;

  const handleAdd = () => {
    addItem(product.id, qty);
    setAdded(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 1200);
  };

  const handleBuy = () => {
    addItem(product.id, qty);
    router.push("/checkout");
  };

  return (
    <main className="main main--bar">
      <div className="content-narrow">
        <div className="detail-top">
          <div
            className="detail-img"
            style={{ background: `linear-gradient(140deg, ${c1} 0%, ${c2} 100%)` }}
          >
            <Icon
              name={product.icon}
              size={96}
              className="di-icon"
              style={{ color: product.fg }}
            />
          </div>
          <Link href="/" className="back-btn" aria-label="返回首页">
            <Icon name="back" size={20} />
          </Link>
        </div>

        <div className="detail-body">
          <span className="detail-cat">{product.category}</span>
          <h1 className="detail-title">{product.name}</h1>
          <div className="detail-price">
            <span className="cur">
              <span className="sym">¥</span>
              {product.price}
            </span>
            {product.originalPrice && (
              <span className="old">¥{product.originalPrice}</span>
            )}
          </div>
          <p className="detail-desc">{product.desc}</p>

          <div className="qty-row">
            <span className="label">数量</span>
            <div className="qty">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                disabled={qty <= 1}
                aria-label="减少数量"
              >
                <Icon name="minus" size={18} />
              </button>
              <span className="num">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="增加数量">
                <Icon name="plus" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 底部操作栏 */}
      <div className="action-bar">
        <div className="action-bar-inner">
          <button className="btn btn-outline" onClick={handleAdd}>
            {added ? "已加入 ✓" : "加入购物车"}
          </button>
          <button className="btn btn-primary" onClick={handleBuy}>
            立即购买
          </button>
        </div>
      </div>
    </main>
  );
}
