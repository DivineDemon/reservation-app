import React from "react";

import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "./../../components/header/Header";
import Featured from "./../../components/featured/Featured";
import PropertyList from "./../../components/propertyList/PropertyList";
import FeaturedProperties from "./../../components/featuredProperties/FeaturedProperties";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <div className="homeTitle">Home guests love</div>
        <FeaturedProperties />
      </div>
    </div>
  );
};

export default Home;
