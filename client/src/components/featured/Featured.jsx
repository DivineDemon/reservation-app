import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/654901.webp?k=ad07314cf25d93ea3be84fea985906d6f25d0243e016fff9358a44254be4996e&o="
          alt="muscat"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Muscat</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/654916.webp?k=6131545760cc64e9bd76df3da371465e22633dc6e183e52805af7e4548d7520c&o="
          alt="salalah"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Salalah</h1>
          <h2>456 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/861170.webp?k=9c9130f85fe37f7d55a05b4e47ef17be7bf753432a7d4a13c522bf13c74b665e&o="
          alt="nizwa"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Nizwa</h1>
          <h2>789 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
