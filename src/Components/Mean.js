import React from "react";

const Mean = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-row justify-center font-googleFont  my-[70px] text-[#000]"
        >
          <img
            src={item.image}
            alt={item.title}
            className="rounded-lg shadow-lg object-contain h-[358px] mr-[25px]"
          />
          <div className="flex flex-col w-[346px] ml-[25px] hover:shadow-xl rounded-xl duration-[3s] hover:scale-[1.02]">
            <h2 className="text-center h-[26px] text-[24px] font-normal py-[5px]">
              {item.title}
            </h2>
            <hr className=" border-black mt-[35px] " />
            <p className="flex flex-wrap items-center text-center py-[35px] px-[10px]">
              {item.about}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mean;
