import React, { Component } from "react";
import {Routes, Route } from "react-router-dom";
import Navigation from "./navigation";

/*import BinList from "";
import ShopList from "*/

class App extends Component {
  state = {binList: []};


  render() {
    return (
      <main className="app">
        <Navigation />
        <Routes>
        <Route
          path="/"
          element={
            <ShopList />
          }
        />
        <Route
          path="/bin-list"
          element={
              <BinList/>
          }
        />
        </Routes>
      </main>
    );
  }
}

export default App;
