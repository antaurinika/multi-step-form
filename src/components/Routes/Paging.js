import React from "react";
import { Link } from "react-router-dom";
import pages from "./Pages";

function Paging() {
  const generatePage = () => {
    return pages.map((page) => (
      <div key={page.id} className="flex gap-5 w-max">
        <Link to={page.route}>
          <p className="border border-white p-1 w-10 h-min text-center rounded-full md:mt-1 ">
            {page.id}
          </p>
        </Link>
        <div className="hidden md:block md:tracking-tighter">
          <p className="uppercase font-ubuntu-medium text-gray-400 font-semibold text-base md:text-xs lg:text-base">
            Step {page.id}
          </p>
          <p className="uppercase font-ubuntu-medium text-lg font-semibold md:text-base lg:text-lg">
            {page.title}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="absolute top-12 flex text-lg text-white justify-center w-full gap-2 md:flex-col md:ml-4 md:gap-6 md:w-max lg:ml-10 lg:gap-8">
        {generatePage()}
      </div>
    </div>
  );
}

export default Paging;
