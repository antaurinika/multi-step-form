import React from "react";

function PageTitle(props) {
  return (
    <div>
      <h1 className="text-2xl mb-3 font-ubuntu-bold font-bold text-blue-900">
        {props.title}
      </h1>
      <p className=" text-gray-400 mb-2">{props.text}</p>
    </div>
  );
}

export default PageTitle;
