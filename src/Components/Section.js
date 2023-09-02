import React from "react";
import { Link } from "react-router-dom";

const Section = ({ data, search }) => {
  return (
    <div className="flex justify-center flex-wrap">
      {data
        .filter((item) => {
          return search
            ? item.name.toLocaleLowerCase().includes(search) ||
                item.country.toLocaleLowerCase().includes(search)
            : item;
        })
        .map((item) => (
          <Link
            to={`/${"our-coffee"}/${item.id}`}
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
          </Link>
        ))}
    </div>
  );
};

export default Section;
