import React from "react";
import "./App.css";

import { Banner, SecondBanner } from "./components/Banners";

function App() {
  return (
    <>
      <Banner>
        <h1>First Banner</h1>
      </Banner>
      <SecondBanner>
        <h1>Second Banner</h1>
      </SecondBanner>
    </>
  );
}

export default App;
