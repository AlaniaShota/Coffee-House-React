import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Error" />
        <title>Error</title>
      </Helmet>
      <div className="font-googleFont text-[#000]">
        <div className="inset-x-0 top-52 ">
          <div className=" h-[150px] bg-black  flex flex-col justify-center items-center font-googleFont font-bold text-[#fff] "></div>
        </div>

        <div className="flex flex-row justify-center items-center my-[90px]">
          <div className=" border object-contain w-[388px] h-[355px] bg-errorPage  bg-no-repeat"></div>
          <div className="flex flex-col justify-around w-[518px] h-[355px] ml-[25px] p-[20px] hover:shadow-xl rounded-xl duration-[3s] hover:scale-[1.02]">
            <h2 className="text-center h-[26px] text-[24px] font-normal py-[5px]">
              <span>Something is gone wrong</span>
              <hr />
            </h2>
            <h4 className="font-bold">
              Country: <span className="font-normal">Could not be found</span>
            </h4>
            <span className=" font-bold">
              Description: <span className="font-normal">Back to main page</span>
            </span>
            <h4 className="font-bold">
              Price: <span className="font-bolder text-[24px]">###$</span>
            </h4>
            <Link
              to="/"
              className="flex justify-end ml-[220px] mt-[250px] absolute w-[250px] text-[24px] font-bold "
            >
              Back to page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
