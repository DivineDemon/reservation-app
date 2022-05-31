import React from "react";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max500/106393405.jpg?k=237d0a65974505ec4d34765c230ad8c6198e0cc4f807e4f8c542ef95c89a38ab&o="
          alt="barcelona"
          className="fpImg"
        />
        <span className="fpName">The Patio Barcelona</span>
        <span className="fpCity">Barcelona</span>
        <span className="fpPrice">Starting from OMR 322</span>
        <div className="fpRating">
          <button>9.1</button>
          <span>Wonderful</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max500/40890517.jpg?k=cd55de5463af8988f78fd675904a43d02f77570debe9977c4c1fe658030b6d29&o="
          alt="rome"
          className="fpImg"
        />
        <span className="fpName">Appartamento Benincampi</span>
        <span className="fpCity">Rome</span>
        <span className="fpPrice">Starting from OMR 120</span>
        <div className="fpRating">
          <button>9.7</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max500/74065694.jpg?k=7d852b0255118faf9ca8f22ac30b033f8b7448ad7f47867f13bd213c6cb2e411&o="
          alt="budapest"
          className="fpImg"
        />
        <span className="fpName">VIP Residence Budapest</span>
        <span className="fpCity">Budapest</span>
        <span className="fpPrice">Starting from OMR 149</span>
        <div className="fpRating">
          <button>9.6</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max500/62261541.jpg?k=3ef9943ed49b4959b2cb9fbbb4f75ee2a7a6c9460bbfd7634b6fcd23674863f3&o="
          alt="barcelona"
          className="fpImg"
        />
        <span className="fpName">Midtown Apartments</span>
        <span className="fpCity">Barcelona</span>
        <span className="fpPrice">Starting from OMR 141</span>
        <div className="fpRating">
          <button>9.4</button>
          <span>Wonderful</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
