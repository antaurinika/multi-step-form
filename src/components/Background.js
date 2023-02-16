import React from "react";
import bg from "../images/bg-sidebar-mobile.svg";
import bgDesktop from "../images/bg-sidebar-desktop.svg";
import Paging from "./Routes/Paging";
import useResolution from "./hooks/useResolution";

function Background() {
  const resolution = useResolution();
  return (
    <div>
      <div className="w-full h-screen relative md:h-max">
        {resolution.isMobile ? (
          <img src={bg} className="w-full" alt="mobile_background" />
        ) : (
          <img
            src={bgDesktop}
            className="w-5/6 lg:w-full"
            alt="desktop_background"
          />
        )}
      </div>
      <Paging />
    </div>
  );
}

export default Background;
