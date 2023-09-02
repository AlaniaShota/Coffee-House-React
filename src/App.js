import CoffeeHouse from "./Pages/CoffeeHouse/coffeeHouse";
import Layout from "./Components/Layout";
import { Route, Routes } from "react-router-dom";
import OurCoffee from "./Pages/OurCoffee/ourCoffee";
import AboutCoffee from "./Pages/AboutCoffee/aboutCoffee";
import ForYourPleasure from "./Pages/ForYourPleasure/forYourPleasure";
import SinglePage from "./Pages/SinglePage/singlePage";
import ErrorPage from "./Pages/SinglePage/404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CoffeeHouse />} />
          <Route path="/our-coffee" element={<OurCoffee />} />
          <Route path="/about-coffee" element={<AboutCoffee />} />
          <Route path="/for-your-pleasure" element={<ForYourPleasure />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/our-coffee/:coffeeId" element={<SinglePage />} />
          <Route
            path="/for-your-pleasure/:forYourPleasureId"
            element={<SinglePage />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
