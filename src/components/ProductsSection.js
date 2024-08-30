import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ProductsSection = () => {
  const scrollLeft = () => {
    document
      .querySelector(".products")
      .scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    document
      .querySelector(".products")
      .scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <section className="products-section">
      <h2>
        DAY-TO-DAY CHOICES THAT WEAVE THE MOST PROFOUND STORIES OF CHARACTER &
        GROWTH.
      </h2>
      <h1>The Taste Is What Makes Difference</h1>
      <div className="products-slider">
        <button className="slider-button left" onClick={scrollLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="products">
          <div className="product">
            <img src="hh1.png" alt="Organic Honey" />
            <h3>Organic Honey</h3>
            <p>Nature's golden nectar, pure and organic</p>
          </div>
          <div className="product">
            <img src="hh2.png" alt="Chocolate Spread" />
            <h3>Chocolate Spread</h3>
            <p>Spread the joy with rich, velvety chocolate</p>
          </div>
          <div className="product">
            <img src="hh3.png" alt="Vermicelli" />
            <h3>Vermicelli</h3>
            <p>Delightful strands of culinary tradition for your meals</p>
          </div>
        </div>
        <button className="slider-button right" onClick={scrollRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <style jsx>{`
        .products-section {
          text-align: center;
          padding: 2rem 1rem;
          background-color: #f9f9f9;
        }

        .products-section h2 {
          font-size: 1.2rem;
          color: #888;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .products-section h1 {
          font-size: 2rem;
          color: #b8860b;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .products-slider {
          position: relative;
          // display: flex;
          align-items: center;
        }

        .products {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          overflow-x: scroll;
          scroll-behavior: smooth;
        }

        .product {
          text-align: center;
        }

        .product img {
          width: 100%;
          height: 200px;
          margin-bottom: 1rem;
        }

        .product h3 {
          font-size: 1.2rem;
          color: #444;
          margin-bottom: 0.5rem;
        }

        .product p {
          font-size: 0.9rem;
          color: #666;
        }

        .slider-button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 24px;
          color: #0047ab;
          position: absolute;
          top: 30%;
          left: 70%;
          right: 70%;
          transform: translateY(-50%);
        }

        .slider-button.left {
          left: 0;
        }

        .slider-button.right {
          right: 0;
        }

        .slider-button:hover {
          color: #002f6c;
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;
