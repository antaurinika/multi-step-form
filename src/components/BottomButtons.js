import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BottomButtons(props) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div
      className={
        "bg-white w-full h-20 max-w-full absolute bottom-0 md:flex md:w-1/2 md:justify-between md:mb-2 md:h-max md:bg-transparent lg:w-1/2 lg:mb-5 "
      }
    >
      <button
        onClick={() => navigate(-1)}
        className="text-gray-400 font-ubuntu-medium font-semibold mt-5 ml-6  py-2 px-4  "
      >
        {props.firstButtonText}
      </button>

      <button
        onClick={() =>
          location.pathname === "/confirmpurchase"
            ? navigate("/modal")
            : navigate(1)
        }
        className="bg-indigo-900 py-3 tracking-wide px-4 font-medium text-white float-right mt-5 mr-6 md:ml-14 md:mr-0 rounded-lg"
      >
        {props.secondButtonText}
      </button>
    </div>
  );
}

export default BottomButtons;
