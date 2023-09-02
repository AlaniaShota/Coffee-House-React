import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import dataMean from "../../util/dataMean.json";
import Mean from "../../Components/Mean";
import OurCoffeeSection from "./OurCofeeSection/OurCoffeeSection";

const OurCoffee = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const selectData = dataMean.slice(0, 1);
    setData(selectData);
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="Our Coffee" />
        <title>Our Coffee</title>
      </Helmet>
      <div className="inset-x-0 top-52 ">
        <div className=" object-cover h-[557px] bg-ourCoffeeHeader bg-no-repeat flex flex-col justify-center items-center font-googleFont font-bold text-[#fff] ">
          <h1 className="text-[46px] h-[46px] cursor-default">Our Coffee</h1>
        </div>
      </div>
      <Mean data={data} />
      <OurCoffeeSection />
    </>
  );
};

export default OurCoffee;
