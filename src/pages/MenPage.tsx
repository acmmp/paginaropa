import React from 'react';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

interface MenPageProps {
  addToCart: (product: { id: number; name: string; price: number; image: string }) => void;
}

const MenPage: React.FC<MenPageProps> = ({ addToCart }) => {
  const menProducts = products.filter(product => product.category === 'men');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Men's Collection</h1>
      <ProductList addToCart={addToCart} products={menProducts} />
    </div>
  );
};

export default MenPage;