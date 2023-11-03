import React from "react";
import BinList from "./components/bin-list/bin-list";
import ShopList from "./components/shop-list/shop-list";
import Navigation from "./components/navigation";
import {Routes, Route } from "react-router-dom";


export default function App() {  
  return (
    <main className="app">
      <Navigation />
        <Routes>
          <Route
            path="/"
            element={<ShopList />}
          />
          <Route
            path="/bin-list"
            element={<BinList/>}
          />
        </Routes>
      </main>
    );
  }


