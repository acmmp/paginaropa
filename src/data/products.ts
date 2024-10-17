export const products = [
  { id: 1, name: 'Classic T-Shirt', price: 29.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'men' },
  { id: 2, name: 'Slim Fit Jeans', price: 59.99, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'men' },
  { id: 3, name: 'Leather Jacket', price: 199.99, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'men' },
  { id: 4, name: 'Summer Dress', price: 79.99, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'women' },
  { id: 5, name: 'Floral Blouse', price: 49.99, image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'women' },
  { id: 6, name: 'Denim Shorts', price: 39.99, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'women' },
  { id: 7, name: 'Leather Wallet', price: 34.99, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'accessories' },
  { id: 8, name: 'Sunglasses', price: 89.99, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'accessories' },
  { id: 9, name: 'Sneakers', price: 79.99, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'men' },
  { id: 10, name: 'Formal Shirt', price: 69.99, image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'men' },
  { id: 11, name: 'Beanie Hat', price: 24.99, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'accessories' },
  { id: 12, name: 'Elegant Watch', price: 129.99, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'accessories' },
  { id: 13, name: 'Hooded Sweatshirt', price: 54.99, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'men' },
  { id: 14, name: 'Cocktail Dress', price: 89.99, image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'women' },
  { id: 15, name: 'Leather Belt', price: 39.99, image: 'https://images.unsplash.com/photo-1553704571-c32d20e6c74f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'accessories' },
  // Add more products here...
];

// Generate more products
const categories = ['men', 'women', 'accessories', 'sale'];
const productNames = ['T-Shirt', 'Jeans', 'Dress', 'Jacket', 'Shoes', 'Hat', 'Scarf', 'Skirt', 'Sweater', 'Coat'];

for (let i = 16; i <= 100; i++) {
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomName = productNames[Math.floor(Math.random() * productNames.length)];
  const randomPrice = (Math.random() * (199.99 - 19.99) + 19.99).toFixed(2);
  
  products.push({
    id: i,
    name: `${randomCategory.charAt(0).toUpperCase() + randomCategory.slice(1)}'s ${randomName}`,
    price: parseFloat(randomPrice),
    image: `https://source.unsplash.com/500x500/?fashion,${randomCategory},${randomName.toLowerCase()}`,
    category: randomCategory,
  });
}