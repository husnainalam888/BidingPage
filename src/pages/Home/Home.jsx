import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";
import ProductImageSlider from "../../components/Product/ImageSlider/ProductImageSlider";
import VehicleInformation from "../../components/Product/VehicleInformation/VehicleInformation";

function Home() {
  return (
    <div className='home-container'>
      <NavBar />
      <div className='home-hero-section'>
        <a className='white-link'>Home</a>/
        <a className='white-link'>Showroom</a>
        <a className='primary-link'>/MERCEDIES-BENZ</a>
      </div>
      <div className='home-product-name'>
        <h1>MERCEDES-BENZ-C-CLASS 2015</h1>
        <p style={{ fontSize: "1.2rem" }}>VIN - ABJ | ITEM NO.736232</p>
      </div>
      <div className='home-sub-container'>
        <ProductImageSlider />
        <VehicleInformation />
      </div>
    </div>
  );
}

export default Home;
