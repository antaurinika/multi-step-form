import React from "react";
import checkedImg from "../images/icon-thank-you.svg";
import Background from "../components/Background";
import useResolution from "../components/hooks/useResolution";
function LastPageModal() {
  const { isMobile } = useResolution();
  return (
    <div className="bg-blue-50 w-full h-screen relative md:p-10">
      {isMobile && <Background />}
      <div className="bg-white absolute top-32 w-11/12 left-0 right-0 mx-auto p-6 rounded-xl shadow-lg md:flex md:p-3 md:top-auto md:h-max md:w-5/6 lg:w-4/5 xl:w-3/5">
        {!isMobile && <Background />}
        <div className="md:p-2  md:w-3/5 md:mt-5 lg:p-4 lg:mt-10 lg:ml-10">
          <img
            src={checkedImg}
            alt="check"
            className="w-max block m-auto mt-12"
          />
          <h1 className="text-center text-2xl text-blue-900 font-bold mt-5 font-ubuntu-bold">
            Thank you!
          </h1>
          <p className="text-center text-gray-400 tracking-wider my-5 p-3">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to eamil us
            at support@loremgaming.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default LastPageModal;
