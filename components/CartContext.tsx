
'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type CartItem = { id: string; name: string; price: number; image?: string; qty: number };
type CartCtx = {
  items: CartItem[];
  add: (item: Omit<CartItem, 'qty'>, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  total: number;
};

const Ctx = createContext<CartCtx | null>(null);
export function CartProvider({ children }: { children: React.ReactNode }){
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => {
    try { const raw = localStorage.getItem('np_cart'); if (raw) setItems(JSON.parse(raw)); } catch {}
  }, []);
  useEffect(() => { localStorage.setItem('np_cart', JSON.stringify(items)); }, [items]);
  const api = useMemo(() => ({
    items,
    add: (i, qty=1) => setItems(prev => {
      const ex = prev.find(p => p.id === i.id);
      return ex ? prev.map(p => p.id===i.id ? {...p, qty: p.qty+qty} : p) : [...prev, {...i, qty}];
    }),
    remove: (id) => setItems(prev => prev.filter(p => p.id!==id)),
    setQty: (id, qty) => setItems(prev => prev.map(p => p.id===id ? {...p, qty} : p)),
    clear: () => setItems([]),
    total: items.reduce((s, i) => s + i.price*i.qty, 0)
  }), [items]);
  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}
export const useCart = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
