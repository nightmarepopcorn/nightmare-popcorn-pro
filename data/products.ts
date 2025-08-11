
export type Product = { id: string; name: string; price: number; description: string; image: string };
export const products: Product[] = [
  { id: 'bleeder-tee', name: 'Bleeder Tee', price: 2800, description: 'Ultra-soft black, subtle print. If you know, you know.', image: '/images/bleeder.jpg' },
  { id: 'watch-kit-001', name: 'Watch-Party Kit #001', price: 4600, description: 'Everything you need for a gore-geous night in.', image: '/images/kit.jpg' },
  { id: 'analog-pin', name: 'Analog Screams Pin', price: 1200, description: 'VHS-core enamel with a gritty finish.', image: '/images/pin.jpg' }
];
