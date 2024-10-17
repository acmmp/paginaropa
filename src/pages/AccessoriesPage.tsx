import React from 'react';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

interface AccessoriesPageProps {
  addToCart: (product: { id: number; name: string; price: number; image: string }) => void;
}

const AccessoriesPage: React.FC<AccessoriesPageProps> = ({ addToCart }) => {
  const accessoriesProducts = products.filter(product => product.category === 'accessories');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Accessories</h1>
      <ProductList addToCart={addToCart} products={accessoriesProducts} />
    </div>
  );
};

export default AccessoriesPage;