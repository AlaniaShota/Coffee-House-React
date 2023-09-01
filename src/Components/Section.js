import React from "react";

const Section = ({ data, search }) => {
  const dataItem = data;
  const searchItem = search;

  return (
    <div className="flex justify-center flex-wrap">
      {dataItem
        .filter((item) => {
          return searchItem === ""
            ? item
            : item.name.toLocaleLowerCase().includes(searchItem) ||
            item.country.toLocaleLowerCase().includes(searchItem);
        })
        .map((item) => (
          <div
            key={item.id}
            className="bg-slate-100 w-[250px] h-[270px] rounded-lg flex flex-col justify-evenly items-center m-[9px] cursor-pointer ease-in duration-[2s] hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-[171px] h-[150px] object-cover "
            />
            <h5 className="text-[16px] h-[21px] ">{item.name}</h5>
            <h6 className="text-[16px] h-[21px] pl-[125px]">{item.price}$</h6>
          </div>
        ))}
    </div>
  );
};

export default Section;
