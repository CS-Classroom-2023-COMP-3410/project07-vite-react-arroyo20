import { useState } from 'react';
import Card from '../components/Card';

function ProductsPage({ products, addToCart, cart }) {
  const [sortBy, setSortBy] = useState('default');

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name') return a.title.localeCompare(b.title);
    return a.id - b.id;
  });

  return (
    <div>
      <h1>Products Page</h1>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name</option>
        </select>

        <strong>
          Cart ({cart.reduce((t, i) => t + i.quantity, 0)} items)
        </strong>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '20px' }}>
        {sortedProducts.map(product => (
          <Card
            key={product.id}
            title={product.title}
            description={`${product.description} - $${product.price}`}
            imageUrl={product.imageUrl}
            actions={[
              {
                label: `Add to Cart ($${product.price})`,
                onClick: () => addToCart(product),
                disabled: product.stock <= 0
              }
            ]}
          >
            <p>In stock: {product.stock}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
