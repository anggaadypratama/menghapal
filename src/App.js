import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/style/random.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { DataContextProvider as DataProvider } from "../src/components/Context/DataContext";

import { Wrap } from "./Layout/wrapper";
import $ from "jquery";
import { Footer } from "./components/Child Component/footer";

const App = () => {
  document.title = `Ngapalkeun`;
  return (
    <div className="App">
      <div>
        <DataProvider>
          <Wrap />
          <Footer />
        </DataProvider>
      </div>
    </div>
  );
};

export default App;
