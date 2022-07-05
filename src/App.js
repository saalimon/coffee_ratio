import "./App.css";
import { Outlet, Link } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Card from "./components/Card";
import moka from "./images/moka-pot.png";
import drip from "./images/drip.png";
import cold from "./images/cold-brew.png";

function App() {
  const processList = [
    { name: "Moka pot", image: moka },
    { name: "Pour over", image: drip },
    { name: "Cold brew", image: cold },
  ];

  const itemList = processList.map((item) => (
    <Card key={item} name={item.name} image={item.image} />
  ));
  return (
    <ParallaxProvider scrollAxis="horizontal">
      <div className="App">
        <h1>Coffee Ratio</h1>
        <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
          <Link to="/glinder">Glinder</Link>
        </nav>
        <h2>Select your Coffee process</h2>
        {itemList}
        <div style={{ height: "2000px" }} />
      </div>
    </ParallaxProvider>
  );
}

export default App;
