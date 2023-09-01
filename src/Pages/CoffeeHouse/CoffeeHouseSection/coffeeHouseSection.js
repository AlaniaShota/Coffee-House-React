import React, { useState, useEffect } from "react";
import jsonData from "../../../util/data.json";
import Section from "../../../Components/Section";

const CoffeeHouseSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const selectData = jsonData.slice(0, 3);
    setData(selectData);
  }, []);

  return (
    <>
      <div className="flex justify-evenly flex-wrap bg-coffeeHouseSection bg-no-repeat object-cover h-[597px] font-googleFont text-[#000]">
        <h2 className="h-[28px] w-full text-[24px] text-center font-bold pt-[58px] cursor-default">
          Our Best
        </h2>
        <Section data={data} />
      </div>
    </>
  );
};

export default CoffeeHouseSection;
