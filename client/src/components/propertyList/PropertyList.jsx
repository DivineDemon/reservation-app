import React from "react";
import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
          alt="hotels"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>123 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
          alt="apartments"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>456 Apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt="resorts"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>123 Resorts</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
