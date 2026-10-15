"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getProduct } from "../lib/products";
import { useCart } from "../lib/cart";
import { Icon } from "../components/icons";

export default function CheckoutPage() {
  const { items, clear } = useCart();
  const router = useRouter();
  const [placed, setPlaced] = useState(false);

  const subtotal = items.reduce(
    (s, i) => s + (getProduct(i.id)?.price ?? 0) * i.qty,
    0
  );
  const discount = subtotal >= 199 ? 20 : 0;
  const shipping = subtotal >= 99 ? 0 : 10;
  const total = subtotal - discount + shipping;

  if (items.length === 0 && !placed) {
    return (
      <main className="main">
        <div className="content-narrow" style={{ textAlign: "center", paddingTop: 60 }}>
          <p className="empty-tip">还没有可结算的商品</p>
          <Link href="/" className="btn btn-primary" style={{ marginTop: 8 }}>
            去逛逛
          </Link>
        </div>
      </main>
    );
  }

  const submit = () => {
    clear();
    setPlaced(true);
  };

  return (
    <main className="main main--bar">
      <div className="content-narrow">
        <h1 className="section-title" style={{ marginTop: 4 }}>
          确认订单
        </h1>

        {/* 收货地址 */}
        <section className="addr-card">
          <span className="pin">
            <Icon name="location" size={20} />
          </span>
          <div>
            <span className="who">陈小明</span>
            <span className="tel">138****8888</span>
            <p className="street">北京市朝阳区建国路 88 号 3 号楼 1201 室</p>
          </div>
        </section>

        {/* 商品清单 */}
        <h2 className="section-title">商品清单</h2>
        <section className="sum-card">
          {items.map((i) => {
            const p = getProduct(i.id);
            if (!p) return null;
            const [c1, c2] = p.gradient;
            return (
              <div className="sum-item" key={i.id}>
                <span
                  className="thumb"
                  style={{ background: `linear-gradient(140deg, ${c1}, ${c2})` }}
                >
                  <Icon name={p.icon} />
                </span>
                <span className="name">{p.name}</span>
                <span className="qty">×{i.qty}</span>
                <span className="amt">¥{p.price * i.qty}</span>
              </div>
            );
          })}
        </section>

        {/* 费用明细 */}
        <h2 className="section-title">费用明细</h2>
        <section className="sum-card">
          <div className="sum-row">
            <span className="k">商品金额</span>
            <span className="v">¥{subtotal}</span>
          </div>
          <div className="sum-row">
            <span className="k">运费</span>
            <span className={`v${shipping === 0 ? " free" : ""}`}>
              {shipping === 0 ? "免运费" : `¥${shipping}`}
            </span>
          </div>
          <div className="sum-row">
            <span className="k">优惠</span>
            <span className={`v${discount ? " discount" : ""}`}>
              {discount ? `-¥${discount}` : "暂无"}
            </span>
          </div>
          <div className="sum-row grand">
            <span className="k">应付合计</span>
            <span className="v">
              <span className="sym">¥</span>
              {total}
            </span>
          </div>
        </section>
      </div>

      {/* 底部提交栏 */}
      <div className="action-bar">
        <div className="action-bar-inner">
          <div className="total" style={{ textAlign: "right" }}>
            <div className="lbl" style={{ fontSize: 12, color: "var(--text-3)" }}>
              应付
            </div>
            <div className="amt" style={{ color: "var(--primary)", fontWeight: 800, fontSize: 20 }}>
              <span style={{ fontSize: 13 }}>¥</span>
              {total}
            </div>
          </div>
          <button className="btn btn-primary" onClick={submit}>
            提交订单
          </button>
        </div>
      </div>

      {/* 下单成功弹窗 */}
      {placed && (
        <div className="modal-mask">
          <div className="modal" role="dialog" aria-modal="true">
            <div className="ok">
              <Icon name="check" />
            </div>
            <h3>下单成功</h3>
            <p>我们会尽快为你发货，感谢选购。</p>
            <button
              className="btn btn-primary btn-block"
              onClick={() => router.push("/")}
            >
              返回首页
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
