import React from 'react';
import './Products.css';

function Products() {
  return (
    <div className="Products--container">
      <div className="Products--header">
        <h1>Our Amazing Products</h1>
        <p>Explore our range of innovative products.</p>
      </div>
      <div className="Products--product-list">
        <div className="Products--product">
          <img
            src="https://via.placeholder.com/150"
            alt="Product 1"
            className="Products--product-image"
          />
          <h2>Product 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            nec odio.
          </p>
        </div>
        <div className="Products--product">
          <img
            src="https://via.placeholder.com/150"
            alt="Product 2"
            className="Products--product-image"
          />
          <h2>Product 2</h2>
          <p>
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui.
          </p>
        </div>
       
      </div>
    </div>
  );
}

export default Products;
