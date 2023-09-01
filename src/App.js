import CoffeeHouse from "./Pages/CoffeeHouse/coffeeHouse";
import Layout from "./Components/Layout";
import { Route, Routes } from "react-router-dom";
import OurCoffee from "./Pages/OurCoffee/ourCoffee";
import AboutCoffee from "./Pages/AboutCoffee/aboutCoffee";
import ForYourPleasure from "./Pages/ForYourPleasure/forYourPleasure";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CoffeeHouse />} />
          <Route path="/our-coffee" element={<OurCoffee />} />
          <Route path="/for-your-pleasure" element={<ForYourPleasure />} />
          <Route path="/about-coffee" element={<AboutCoffee />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
