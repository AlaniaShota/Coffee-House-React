import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Mean from "../../Components/Mean";
import dataMean from "../../util/dataMean.json";
import ForYourPleasureSection from "./ForYourPleasureSection/forYourPleasureSection";

const ForYourPleasure = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataMean.slice(1));
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="Our Coffee" />
        <title>For Your Pleasure</title>
      </Helmet>
      <div className="inset-x-0 top-52 ">
        <div className=" object-cover h-[557px] bg-forYourPleasureHeader bg-no-repeat flex flex-col justify-center items-center font-googleFont font-bold text-[#fff] ">
          <h1 className="text-[46px] h-[46px] cursor-default">
            For Your Pleasure
          </h1>
        </div>
      </div>
      <Mean data={data} />
      <ForYourPleasureSection />
    </>
  );
};

export default ForYourPleasure;
