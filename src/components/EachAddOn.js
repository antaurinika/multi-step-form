import React from "react";

function EachAddOn(props) {
  return (
    <div className="flex border-2 justify-between border-gray-300 px-3 py-3  mt-5 rounded-lg">
      <div className="flex gap-5">
        <input type="checkbox" className="scale-150" />
        <div className="ml-1 mr-4">
          <h1 className="font-semibold text-blue-800">{props.title}</h1>
          <p className="text-xs text-gray-400 font-ubuntu-medium">
            {props.text}
          </p>
        </div>
      </div>
      <p className="mt-2 text-sm text-purple-500 font-semibold">
        {props.toggle ? props.yearlyPrice : props.monthlyPrice}
      </p>
    </div>
  );
}

export default EachAddOn;
