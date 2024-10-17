import React from 'react';
import ProductList from '../components/ProductList';

interface SalePageProps {
  addToCart: (product: { id: number; name: string; price: number; image: string }) => void;
}

const SalePage: React.FC<SalePageProps> = ({ addToCart }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-red-600">Sale Items</h1>
      <ProductList addToCart={addToCart} category="sale" />
    </div>
  );
};

export default SalePage;