import React from 'react';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

interface WomenPageProps {
  addToCart: (product: { id: number; name: string; price: number; image: string }) => void;
}

const WomenPage: React.FC<WomenPageProps> = ({ addToCart }) => {
  const womenProducts = products.filter(product => product.category === 'women');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Women's Collection</h1>
      <ProductList addToCart={addToCart} products={womenProducts} />
    </div>
  );
};

export default WomenPage;