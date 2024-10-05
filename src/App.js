import './App.css';
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import About from "./components/About";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Features></Features>
      <About></About>
      <FAQ></FAQ>
    </div>
  );
}

export default App;
