import React, { useEffect, useState } from "react";
import jsonData from "../../../util/data.json";
import Section from "../../../Components/Section";

const OurCoffeeSection = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div className=" flex flex-col justify-center items-center flex-wrap font-googleFont  my-[70px] text-[#000]">
      <div className="flex justify-between w-[350px]">
        <h3 className="font-normal text-[18px]">Lookiing for</h3>
        <input
          type="text"
          className="rounded-md shadow-md border w-[230px] border-slate-300 pl-[3px]"
          placeholder="start typing here..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          value={search}
        />
      </div>
      <div className=" w-[950px] p-[25px]">
        <Section data={data} search={search} />
      </div>
    </div>
  );
};

export default OurCoffeeSection;
