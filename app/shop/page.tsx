
import { products } from "@/data/products";
import Link from "next/link";

export default function Shop() {
  return (
    <div className="wrap py-6">
      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(p => (
          <article key={p.id} className="tile">
            <img src={p.image} alt="" className="tile-img object-cover" />
            <div className="p-4">
              <h2 className="font-semibold">{p.name}</h2>
              <p className="lead">${(p.price/100).toFixed(2)}</p>
              <Link href={`/product/${p.id}`} className="btn mt-2">View</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
