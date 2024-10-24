import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);

  // Fetch product data from the backend
  useEffect(() => {
    axios.get('http://localhost:4000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <div>
      <h1>Product Catalog</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
