import React from "react";
import  {Footer,Blog,Possibility,Features,Header,WhatGPT} from './container';
import { Article,Brand,CTA,Feature,Navbar } from "./components";
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
