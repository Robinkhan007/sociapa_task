import React from "react";
// import honeycombImage from "./honeycomb.jpg"; // Replace with your actual image import

const ProductShowcase = () => {
  return (
    <div className="showcase-container">
      <div className="showcase-content">
        <div className="showcase-text">
          <p className="tagline">FIND YOUR FAVORITE CHOICES OF A HEARTY MEAL</p>
          <p className="product-highlight">PRODUCTS THAT MAKE A DIFFERENCE</p>
          <h2 className="title">Products That Make A Difference</h2>
        </div>
        <div className="showcase-body">
          <div className="image-container">
            <img
              src={'honeycombImage'}
              alt="Honeycomb"
              className="honeycomb-image"
            />
          </div>
          <div className="product-details">
            <h3 className="product-title">Organic Honey</h3>
            <p className="product-subtitle">
              Nature's golden nectar, pure and organic
            </p>
            <p className="product-description">
              Organic honey is a delightful concoction that not only pleases the
              taste buds but also offers a plethora of health benefits. Unlike
              conventional honey, which may contain traces of pesticides and
              other chemicals, organic honey is produced without the use of
              synthetic pesticides or fertilizers.
            </p>
            <div className="product-images">
              <img
                src="/path/to/product-image1.jpg"
                alt="Organic Honey Jar"
                className="product-image"
              />
              <img
                src="/path/to/product-image2.jpg"
                alt="Organic Honey"
                className="product-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
