import React from "react";

function ToggleButton({ toggle, handleToggle }) {
  return (
    <div className="flex px-2 py-4 bg-blue-50 mt-6 justify-center align-middle gap-6 rounded-lg md:mt-4">
      <p
        className={`${
          toggle ? `text-gray-400 font-semibold` : `text-blue-900 font-semibold`
        }`}
      >
        Monthly
      </p>
      <div
        onClick={handleToggle}
        className={`w-10 bg-blue-900 h-5 rounded-full flex mt-0.5 ${
          toggle ? "justify-end" : "justify-start"
        }`}
      >
        <div className="w-3 bg-white h-3 m-1 rounded-full"></div>
      </div>
      <p
        className={`${
          toggle ? `text-blue-900 font-semibold` : `text-gray-400 font-semibold`
        }`}
      >
        Yearly
      </p>
    </div>
  );
}

export default ToggleButton;
