// App.js

import React from "react";
// import Card from "./components/product-list/Cards";
// import cardsData from "./components/cardsData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from "./components/sideNav/SideNav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Clothing from "./components/clothing/Clothing";
import Fashion from "./components/fashion/Fashion";
import Footwear from "./components/product-list/Footwear";
import Header from "./components/header/Header";

const categories = ["footwear", "clothing", "fashion"];

const App = () => {
  return (
    <>
      <Header categories={categories} />
      <Router>
        <div className="container-fluid">
          <div className="row">
            <SideNav categories={categories} />
            <Route path="/category/footwear" component={Footwear} />
            <Route path="/category/clothing" component={Clothing} />
            <Route path="/category/fashion" component={Fashion} />
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
