import React from "react";
import { Helmet } from "react-helmet";
import CoffeeHouseMain from "./CoffeeHouseMain/coffeeHouseMain";
import CoffeeHouseSection from "./CoffeeHouseSection/coffeeHouseSection";

const CoffeeHouse = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Our Coffee" />
        <title>Coffee House</title>
      </Helmet>
      <div className="inset-x-0 top-52 ">
        <div className="object-cover h-[557px] bg-coffeeHouseHeader bg-no-repeat flex flex-col justify-center items-center font-googleFont font-bold text-[#fff] ">
          <h1 className="text-[40px]  h-[44px] cursor-default">
            Everything You Love About Coffee
          </h1>
          <h2 className="text-[26px] h-[27px] pt-[37px] cursor-default">
            We makes every day full of energy and taste
          </h2>
          <h2 className="text-[22px] h-[35px] pt-[57px] cursor-default">
            Want to try our beans?
          </h2>
        </div>
      </div>
      <CoffeeHouseMain />
      <CoffeeHouseSection />
    </>
  );
};

export default CoffeeHouse;
