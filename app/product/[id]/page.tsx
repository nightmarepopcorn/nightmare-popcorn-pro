import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import AddToCart from '@/components/AddToCart';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return notFound();

  return (
    <div className="wrap py-6">
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt=""
          className="rounded-2xl border border-neutral-800"
        />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="lead mt-2">${(product.price / 100).toFixed(2)}</p>
          <p className="mt-3">{product.description}</p>
          <AddToCart
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        </div>
      </div>
    </div>
  );
}
