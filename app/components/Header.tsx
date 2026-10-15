"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../lib/cart";
import { Icon } from "./icons";

export function Header() {
  const { totalCount } = useCart();
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="简物 · 回到首页">
          <span className="logo-mark" aria-hidden="true" />
          <span className="logo-text">简物</span>
        </Link>

        <nav className="nav" aria-label="主导航">
          <Link
            href="/"
            className={`nav-link${pathname === "/" ? " active" : ""}`}
          >
            首页
          </Link>
          <Link
            href="/cart"
            className={`nav-link${pathname === "/cart" ? " active" : ""}`}
          >
            购物车
          </Link>
        </nav>

        <Link href="/cart" className="cart-btn" aria-label="购物车">
          <Icon name="cart" size={23} />
          <span key={totalCount} className={`badge${totalCount ? " show" : ""}`}>
            {totalCount > 99 ? "99+" : totalCount}
          </span>
        </Link>
      </div>
    </header>
  );
}
