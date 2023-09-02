import React from "react";
import { Link } from "react-router-dom";

const SingleItem = ({ data, coffeeId, forYourPleasureId }) => {
  const coffee = data.filter((item) => {
    return item ? item.id === coffeeId || forYourPleasureId : item;
  });

  return (
    <div className="text-[#000] font-googleFont">
      {coffee.map((item) => (
        <div
          key={item.id}
          className="flex flex-row justify-center items-center my-[90px]"
        >
          <img
            src={item.thumbnail}
            alt={item.name}
            className="w-[498px] h-[355px] object-cover"
          />
          <div className="flex flex-col justify-around w-[518px] h-[355px] ml-[25px] p-[20px] hover:shadow-xl rounded-xl duration-[3s] hover:scale-[1.02]">
            <h2 className="text-center h-[26px] text-[24px] font-normal py-[5px]">
              {item.name}
              <hr />
            </h2>
            <h4 className="font-bold">
              Country: <span className="font-normal">{item.country}</span>
            </h4>
            <span className=" font-bold">
              Description:{" "}
              <span className="font-normal">{item.description}</span>
            </span>
            <h4 className="font-bold">
              Price:{" "}
              <span className="font-bolder text-[24px]">{item.price}$</span>
            </h4>
            <Link
              to="/our-coffee"
              className="flex justify-end ml-[220px] mt-[250px] absolute w-[250px] text-[24px] font-bold "
            >
              Back To All
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleItem;
