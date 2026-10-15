"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getProduct } from "../lib/products";
import { useCart } from "../lib/cart";
import { Icon } from "../components/icons";

export default function CartPage() {
  const { items, removeItem, setQty } = useCart();
  const [unselected, setUnselected] = useState<Set<string>>(new Set());

  const selectedItems = useMemo(
    () => items.filter((i) => !unselected.has(i.id)),
    [items, unselected]
  );

  const totalAmount = selectedItems.reduce(
    (s, i) => s + (getProduct(i.id)?.price ?? 0) * i.qty,
    0
  );
  const selectedCount = selectedItems.reduce((s, i) => s + i.qty, 0);
  const allSelected = items.length > 0 && selectedItems.length === items.length;

  const toggleOne = (id: string) => {
    setUnselected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    setUnselected(allSelected ? new Set(items.map((i) => i.id)) : new Set());
  };

  if (items.length === 0) {
    return (
      <main className="main">
        <div className="content-narrow" style={{ textAlign: "center", paddingTop: 60 }}>
          <Icon name="cart" size={56} style={{ color: "var(--text-3)", margin: "0 auto" }} />
          <p className="empty-tip">购物车还是空的</p>
          <Link href="/" className="btn btn-primary" style={{ marginTop: 8 }}>
            去逛逛
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="main main--bar">
      <div className="content-narrow">
        <h1 className="section-title" style={{ marginTop: 4 }}>
          购物车 <span className="dot">·</span> {items.length} 件
        </h1>

        <div className="cart-list">
          {items.map((item) => {
            const p = getProduct(item.id);
            if (!p) return null;
            const [c1, c2] = p.gradient;
            const checked = !unselected.has(item.id);
            return (
              <div className="cart-item" key={item.id}>
                <button
                  className={`checkbox${checked ? " checked" : ""}`}
                  onClick={() => toggleOne(item.id)}
                  aria-label="选择商品"
                >
                  {checked && <Icon name="check" />}
                </button>

                <Link
                  href={`/product/${p.id}`}
                  className="cart-thumb"
                  style={{ background: `linear-gradient(140deg, ${c1}, ${c2})` }}
                >
                  <Icon name={p.icon} size={32} style={{ color: p.fg }} />
                </Link>

                <div className="cart-info">
                  <p className="cart-name">{p.name}</p>
                  <p className="cart-unit">
                    单价 ¥{p.price}
                  </p>
                  <div className="cart-bottom">
                    <div className="qty" style={{ boxShadow: "none", border: "1px solid var(--line)" }}>
                      <button
                        onClick={() => setQty(item.id, item.qty - 1)}
                        disabled={item.qty <= 1}
                        aria-label="减少数量"
                      >
                        <Icon name="minus" size={16} />
                      </button>
                      <span className="num" style={{ fontSize: 14 }}>
                        {item.qty}
                      </span>
                      <button
                        onClick={() => setQty(item.id, item.qty + 1)}
                        aria-label="增加数量"
                      >
                        <Icon name="plus" size={16} />
                      </button>
                    </div>
                    <span className="cart-sub">
                      <span className="sym">¥</span>
                      {p.price * item.qty}
                    </span>
                  </div>
                </div>

                <button
                  className="cart-remove"
                  onClick={() => removeItem(item.id)}
                  aria-label="删除商品"
                >
                  <Icon name="trash" size={19} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* 底部结算栏 */}
      <div className="checkout-bar">
        <div className="checkout-bar-inner">
          <button className="sel-all" onClick={toggleAll}>
            <span className={`checkbox${allSelected ? " checked" : ""}`}>
              {allSelected && <Icon name="check" />}
            </span>
            全选
          </button>
          <div className="total">
            <div className="lbl">合计（{selectedCount} 件）</div>
            <div className="amt">
              <span className="sym">¥</span>
              {totalAmount}
            </div>
          </div>
          <Link
            href="/checkout"
            className={`btn btn-primary${selectedItems.length === 0 ? " disabled" : ""}`}
            aria-disabled={selectedItems.length === 0}
            onClick={(e) => {
              if (selectedItems.length === 0) e.preventDefault();
            }}
          >
            去结算
          </Link>
        </div>
      </div>
    </main>
  );
}
