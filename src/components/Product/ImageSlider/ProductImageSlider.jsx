import React from "react";
import "./ProductImageSlider.css";
import arrow from "../../../assets/arrow.svg";
const ProductImageSlider = ({ images = [4, 4, 5, 6] }) => {
  return (
    <div className='product-image-slider-container'>
      <div className='main-image-container'>
        <img
          src='https://platform.cstatic-images.com/large/in/v2/stock_photos/dd7d076e-45a9-45b2-ab1e-5ce7f3bbcb47/d3a852b8-302e-4b1b-9bbc-850afd719524.png'
          className='product-main-image'
        />
      </div>
      <div className='slider-image-list-container'>
        <div className='arrow-button-container'>
          <img src={arrow} className='forward-button' />
        </div>
        <div className='slider-image-list'>
          {images.map((i) => {
            return (
              <img
                src='https://platform.cstatic-images.com/large/in/v2/stock_photos/dd7d076e-45a9-45b2-ab1e-5ce7f3bbcb47/d3a852b8-302e-4b1b-9bbc-850afd719524.png'
                className='slider-image-item'
              />
            );
          })}
        </div>
        <div className='arrow-button-container'>
          <img src={arrow} className='backward-button' />
        </div>
      </div>
    </div>
  );
};

export default ProductImageSlider;
