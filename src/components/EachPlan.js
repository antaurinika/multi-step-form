import React from "react";

function EachPlan(props) {
  return (
    <div className="flex border-2 gap-6 mt-4 p-3 rounded-lg md:flex-col md:w-full">
      <img src={props.image} className="md:w-1/3" alt="icon" />
      <div>
        <h1 className="text-blue-900 font-bold font-ubuntu-bold md:tex-sm">
          {props.title}
        </h1>

        <p className="text-gray-400 font-semibold md:text-sm">
          {props.toggle ? props.yearlyPrice : props.monthlyPrice}
        </p>
        {props.toggle && (
          <p className="text-blue-800 font-semibold md:text-sm">
            2 free months
          </p>
        )}
      </div>
    </div>
  );
}

export default EachPlan;
