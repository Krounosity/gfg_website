import './App.sass';
import "."

import Navbar from "./components/Navbar";
import Features from "./components/Features";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Landing from "./components/Landing";

import features from "../src/data/features.json";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Landing></Landing>
      <h2>Workshop Features</h2>
      <div className = "features-grid">
        {features.map(f => (
          <Features title={f.title} image = {f.image} content = {f.content}></Features>
        ))}
      </div>
      <About></About>
      <FAQ></FAQ>
    </div>
  );
}

export default App;
