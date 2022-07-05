import { Link } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Card from "../components/Card";
import moka from "../images/moka-pot.png";

function Glinder() {
  const processList = [
    {
      name: "Timemore C2",
      image: moka,
      details: [
        "Espresso: 10-14 Clicks",
        "Pour Over: 18-24 Clicks",
        "French Press: 25-27 Clicks",
      ],
    },
  ];
  const itemList = processList.map((item) => (
    <Card
      key={item}
      name={item.name}
      image={item.image}
      details={item.details}
    />
  ));
  return (
    <ParallaxProvider scrollAxis="horizontal">
      <div className="App">
        <h1>Glinder Setting</h1>
        <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
          <Link to="/">Homepage</Link>
        </nav>
        <h2>Select your glinder</h2>
        {itemList}
      </div>
    </ParallaxProvider>
  );
}

export default Glinder;
