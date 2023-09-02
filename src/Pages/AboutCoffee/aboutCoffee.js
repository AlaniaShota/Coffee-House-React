import React from "react";
import { Helmet } from "react-helmet";
import dataCoffeeHouse from "../../util/dataCoffeeHouse.json";
import dataBeans from "../../util/dataBeans.json";

const AboutCoffee = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="About Coffee" />
        <title>About Coffee</title>
      </Helmet>
      <div className=" object-cover h-[557px] bg-aboutCoffeeHeader bg-no-repeat flex flex-col justify-center items-center font-googleFont font-bold text-[#fff] ">
        <h1 className="text-[40px]  h-[44px] cursor-default">About Coffee</h1>
      </div>
      <div className="font-googleFont text-[#000] cursor-default">
        <div className="flex justify-evenly p-5 my-20 mx-20">
          <h2 className="font-bold text-[24px]">
            Where does coffee come from?
          </h2>
          <p className="text-center w-[673px] font-normal text-[18px]   rounded-lg hover:shadow-lg ease-in duration-[2s] hover:scale-103">
            Coffee is grown in more than 50 countries around “the coffee belt”,
            including locations such as Africa, Latin America and Asia. These
            areas have just the right combination of altitude, soil and weather,
            providing the perfect climate for growing the most delicious beans.
          </p>
        </div>
        <div className="flex flex-row justify-evenly items-center bg-gray-100 h-[749px]">
          {dataCoffeeHouse.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-space rounded-lg shadow-lg w-[370px] h-[699px] ease-in duration-[1s] hover:scale-[1.02] bg-white"
            >
              <img
                src={item.image}
                alt={item.country}
                className="w-[370px] h-[360px] object-cover rounded-t-lg "
              />
              <h2 className="text-[21px] font-bold p-[15px]">{item.country}</h2>
              <p className="px-[15px] text-[16px] font-normal">{item.about}</p>
              <p className="px-[15px] text-[16px] font-medium">
                {item.fertilizer[0]}
              </p>
              <p className="px-[15px] text-[16px] font-medium">
                {item.fertilizer[1]}
              </p>
              <p className="px-[15px] text-[16px] font-medium">
                {item.fertilizer[2]}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-evenly  p-5 my-20 mx-20">
          <h2 className="font-bold text-[24px]">
            Get to know your coffee beans
          </h2>
          <p className="flex items-center flex-wrap text-center  font-normal text-[18px]  w-[923px]  rounded-lg hover:shadow-lg ease-in duration-[2s] hover:scale-103">
            It may surprise you to learn that coffee beans actually come from
            the fruit (called “cherries”) of the coffee plant. The cherries are
            edible but taste absolutely nothing like coffee, in fact, they
            possess a mild and slightly sweet flavouring – a far cry from the
            rich and flavoursome coffee beans inside. There are over 120
            varieties of coffee plants and each variety has its own distinct
            flavour. Most of the coffee we drink comes from either Arabica or
            Robusta coffee beans, or a blend of the two.
          </p>
        </div>
        <div className=" flex flex-wrap justify-center">
          {dataBeans.map((item) => (
            <div
              key={item.id}
              className="flex justify-center m-[30px] ease-in duration-[1s] hover:scale-[1.03]"
            >
              <div className="flex flex-col px-[10px] shadow-lg rounded-tl-lg rounded-bl-lg">
                <h1 className="text-center font-bold text-[21px]">
                  {item.name}
                </h1>
                <p className=" text-[17px] text-center font-medium w-[450px]">
                  {item.about}
                </p>
              </div>
              <img
                src={item.img}
                alt={item.name}
                className="w-[450px]  object-cover shadow-lg rounded-br-lg rounded-tr-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutCoffee;
