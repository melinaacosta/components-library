import React from 'react';
import './ProductCard.css';

export interface ProductCardProps {
  name: string;
  imageUrl: string;
  price: number;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, imageUrl, price, discount = 0 }) => {
  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="product-card">
      <img className="product-image" src={imageUrl} alt={name} />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <div className="product-price">
          {discount > 0 && (
            <span className="discounted-price">${discountedPrice.toFixed(2)}</span>
          )}
          <span className={discount > 0 ? "original-price discounted" : "original-price"}>
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
