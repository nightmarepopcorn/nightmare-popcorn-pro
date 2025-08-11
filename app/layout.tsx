
import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "@/components/CartContext";
import Brand from "@/components/Brand";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nightmare Popcorn — Horror merch, rare drops, and Friday Night Frights",
  description: "Rare horror merch, watch-party kits, and the weird finds you won’t see anywhere else.",
  openGraph: {
    title: "Nightmare Popcorn",
    description: "Rare horror merch, watch-party kits, and the weird finds you won’t see anywhere else.",
    images: ["/og-image.jpg"]
  },
  icons: { icon: "/favicon.png" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
        <header className="sticky top-0 z-10 backdrop-blur bg-black/60 border-b border-neutral-900">
          <div className="wrap flex items-center justify-between gap-4">
            <Brand />
            <nav className="flex items-center gap-1">
              <Link className="navlink" href="/#drops">Drops</Link>
              <Link className="navlink" href="/#newsletter">Friday Night Frights</Link>
              <Link className="navlink" href="/shop">Shop</Link>
              <Link className="navlink" href="/cart">Cart</Link>
            </nav>
          </div>
        </header>
        <CartProvider>
          <main id="main">{children}</main>
        </CartProvider>
        <footer className="border-t border-neutral-900 mt-8">
          <div className="wrap flex items-center justify-between gap-4 flex-wrap">
            <p className="tiny">© {new Date().getFullYear()} Nightmare Popcorn</p>
            <nav className="flex gap-3 tiny">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <a href="mailto:hi@nightmarepopcorn.com">Contact</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
