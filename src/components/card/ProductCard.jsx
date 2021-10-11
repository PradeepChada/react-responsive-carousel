import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "./ProductCard.style.scss";
function ProductCard({ productInfo }) {
  return (
    <div className="result-container">
    <div className="product-card">
      {productInfo.inventory.inStock && (
        <div className="out-of-stock">Out of stock</div>
      )}
      <Carousel showThumbs={false}>
        {productInfo.images.map((imgUrl) => (
          <img className="carousel-image" src={imgUrl} alt="ProductImage" />
        ))}
      </Carousel>
      <div className="product-details">
        <div className="product-name">
          {productInfo.description}
        </div>
        <div className="price-details">
          <div className="price-text">Price:</div>
          <div className="mrp">
            ${productInfo.price.mrp.toFixed(2)}
          </div>
          <div className="sale-price">
            ${productInfo.price.salePrice.toFixed(2)}
          </div>
        </div>
        <div className="saved-price">
          You saved ${productInfo.price.youSaved.toFixed(2)} on
          this item.
        </div>
      </div>
    </div>
    <Link to="/">
        <button>Scan More Barcode</button>
      </Link>
  </div>
  );
}

export default ProductCard;
