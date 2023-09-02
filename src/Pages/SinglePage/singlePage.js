import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsonData from "../../util/data.json";
import { Helmet } from "react-helmet";
import SingleItem from "../../Components/SingleItem";

const SinglePage = () => {
  const [data, setData] = useState([]);

  const { coffeeId } = useParams();
  const { forYourPleasureId } = useParams();

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="Coffee House" />
        <title>Coffee House</title>
      </Helmet>
      <div className="inset-x-0 top-52 ">
        <div className=" object-cover h-[557px] bg-forYourPleasureHeader bg-no-repeat flex flex-col justify-center items-center font-googleFont font-bold text-[#fff] ">
          <h1 className="text-[46px] h-[46px] cursor-default">Coffee House</h1>
        </div>
      </div>
      <SingleItem
        data={data}
        coffeeId={coffeeId}
        forYourPleasureId={forYourPleasureId}
      />
    </>
  );
};

export default SinglePage;
