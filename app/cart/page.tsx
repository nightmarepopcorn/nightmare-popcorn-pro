
'use client';
import { useCart } from "@/components/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CartPage(){
  const { items, setQty, remove, total } = useCart();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const checkout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ items }) });
      const { url } = await res.json();
      window.location.href = url;
    } catch (e) {
      setLoading(false);
      alert('Checkout failed.');
    }
  };

  return (
    <div className="wrap py-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {items.length === 0 ? <p className="lead">Your cart is empty.</p> : (
        <div className="grid gap-3">
          {items.map(i => (
            <div key={i.id} className="card p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <img src={i.image} className="w-20 h-16 object-cover rounded-xl border border-neutral-800" alt="" />
                <div>
                  <div className="font-semibold">{i.name}</div>
                  <div className="lead">${(i.price/100).toFixed(2)}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="number" min={1} value={i.qty} onChange={e => setQty(i.id, parseInt(e.target.value||'1'))} className="w-16 bg-neutral-950 border border-neutral-800 rounded-xl px-2 py-2" />
                <button onClick={() => remove(i.id)} className="btn btn-ghost">Remove</button>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Total: ${(total/100).toFixed(2)}</div>
            <button className="btn" onClick={checkout} disabled={loading}>{loading ? 'Redirecting…' : 'Checkout'}</button>
          </div>
        </div>
      )}
    </div>
  );
}
