import React from "react";
import Background from "../components/Background";
import BottomButtons from "../components/BottomButtons";
import PageTitle from "../components/PageTitle";
import useResolution from "../components/hooks/useResolution";

function PersonalInfo() {
  const resolution = useResolution();

  return (
    <div className="bg-blue-50 h-screen md:p-20 ">
      {resolution.isMobile && <Background />}
      <div className="bg-white absolute top-32 w-3/4 left-0 right-0 mx-auto p-6 rounded md:flex md:p-3 md:w-3/4 md:top-auto md:h-max">
        {!resolution.isMobile && <Background />}
        <div className="md:p-2 md:ml-2 md:mt-2 md:gap-2 md:flex md:flex-col md:w-3/5 lg:w-3/5 lg:ml-10 lg:mt-10">
          <PageTitle
            title=" Personal Info"
            text=" Please provide your name, email, address and phone number"
          />
          <form className="md:flex md:flex-col ">
            <label
              htmlFor="name"
              className="block text-indigo-800 text-sm font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="e.g Stephen King"
              className="border-2 w-full p-2 rounded-lg"
            />
            <label
              className="block mt-3 text-indigo-800 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="text"
              id="email"
              placeholder="e.g stephenking@lorem.com"
              className="border-2 w-full p-2 rounded-lg"
            />
            <label
              className="block mt-3 text-indigo-800 text-sm font-semibold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="border-2 w-full p-2 rounded-lg mb-3"
              type="number"
              id="phone"
              placeholder="e.g +1 234 567 890"
            />
          </form>
          {!resolution.isMobile && (
            <BottomButtons firstButtonText="" secondButtonText="Next" />
          )}
        </div>
      </div>
      {resolution.isMobile && (
        <BottomButtons firstButtonText="" secondButtonText="Next" />
      )}
    </div>
  );
}

export default PersonalInfo;
