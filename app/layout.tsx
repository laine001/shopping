import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { CartProvider } from "./lib/cart";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: "简物 · 极简购物",
  description: "极简主义购物体验，精选好物。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="antialiased">
      <body>
        <CartProvider>
          <Header />
          <div className="shell">{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}
