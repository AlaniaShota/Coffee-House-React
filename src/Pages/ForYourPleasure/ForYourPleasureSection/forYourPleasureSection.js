import React, { useEffect, useState } from "react";
import jsonData from "../../../util/data.json";
import Section from "../../../Components/Section";

const ForYourPleasureSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const selectData = jsonData;
    setData(selectData);
  }, []);

  return (
    <div className=" flex flex-col justify-center items-center flex-wrap font-googleFont  my-[70px] text-[#000]">
      <div className=" w-[950px] p-[25px]">
        <Section data={data} />
      </div>
    </div>
  );
};

export default ForYourPleasureSection;
