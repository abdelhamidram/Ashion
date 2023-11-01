import React from 'react';
import Product from './Product';
import Products from '../Products-data';

function ProductList() {
  return (
    <div className="product-list flex flex-wrap justify-content-space-around flex-grow ">
      {Products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
