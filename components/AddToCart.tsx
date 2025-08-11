'use client';

import { useCart } from '@/components/CartContext';

export default function AddToCart(props: {
  id: string;
  name: string;
  price: number;
  image: string;
}) {
  const { add } = useCart();
  return (
    <button className="btn mt-4" onClick={() => add(props)}>
      Add to Cart
    </button>
  );
}
