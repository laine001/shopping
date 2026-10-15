"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS } from "./lib/products";
import { Icon } from "./components/icons";
import { ProductCard } from "./components/ProductCard";

const ICON_STYLE: Record<string, { bg: string; fg: string }> = {
  数码: { bg: "var(--navy-soft)", fg: "var(--navy)" },
  服饰: { bg: "var(--green-soft)", fg: "var(--green)" },
  家居: { bg: "var(--primary-soft)", fg: "var(--primary)" },
  美食: { bg: "#FBF0E4", fg: "#C97B3D" },
  美妆: { bg: "#FCEAEC", fg: "#D4577A" },
  运动: { bg: "var(--navy-soft)", fg: "var(--navy)" },
  母婴: { bg: "#FBF0F0", fg: "#D48A8A" },
  图书: { bg: "var(--green-soft)", fg: "var(--green)" },
};

const ALL = "全部";

export default function Home() {
  const [category, setCategory] = useState<string>(ALL);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const inCat = category === ALL || p.category === category;
      const inQuery = !q || p.name.toLowerCase().includes(q);
      return inCat && inQuery;
    });
  }, [category, query]);

  const scrollToFeeds = () => {
    document.getElementById("feeds")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="main">
      {/* 搜索栏 */}
      <form
        className="search-bar"
        onSubmit={(e) => {
          e.preventDefault();
          scrollToFeeds();
        }}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="搜索好物"
          aria-label="搜索商品"
        />
        <button type="submit" className="search-btn" aria-label="搜索">
          <Icon name="search" size={20} />
        </button>
      </form>

      {/* Banner */}
      <section className="banner">
        <span className="blob one" />
        <span className="blob two" />
        <span className="tag">限时上新</span>
        <h2>极简生活，从一件好物开始</h2>
        <p>精选数码 · 家居 · 服饰，全场满 99 免运费</p>
        <button className="cta" onClick={scrollToFeeds}>
          立即逛逛
        </button>
      </section>

      {/* 金刚区：分类入口，点击筛选，再次点击回到全部 */}
      <section aria-label="商品分类">
        <div className="grid-icons">
          {CATEGORIES.map((c) => {
            const s = ICON_STYLE[c.key] ?? { bg: "var(--navy-soft)", fg: "var(--navy)" };
            const active = category === c.key;
            return (
              <button
                key={c.key}
                className={`icon-cell${active ? " active" : ""}`}
                aria-pressed={active}
                onClick={() => {
                  setCategory(active ? ALL : c.key);
                  scrollToFeeds();
                }}
              >
                <span className="ico" style={{ background: s.bg, color: s.fg }}>
                  <Icon name={c.icon} size={22} />
                </span>
                <span>{c.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 瀑布流 */}
      <section id="feeds">
        <h2 className="section-title">
          为你推荐 <span className="dot">·</span> {filtered.length} 件
        </h2>
        {filtered.length > 0 ? (
          <div className="feeds">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className="empty-tip">没有找到相关商品，换个关键词试试</p>
        )}
      </section>
    </main>
  );
}
