import React from "react";
import EachPlan from "../components/EachPlan";
import Arcade from "../images/icon-arcade.svg";
import Advanced from "../images/icon-advanced.svg";
import Pro from "../images/icon-pro.svg";
import BottomButtons from "../components/BottomButtons";
import PageTitle from "../components/PageTitle";
import ToggleButton from "../components/ToggleButton";
import Background from "../components/Background";
import useResolution from "../components/hooks/useResolution";
import useToggle from "../components/hooks/useToggle";
function SelectPlan() {
  const resoltion = useResolution();
  const { toggle, handleToggle } = useToggle();
  return (
    <div className="bg-blue-50 w-full h-screen relative md:p-20 ">
      {resoltion.isMobile && <Background />}

      <div className="bg-white absolute top-32 w-11/12 left-0 right-0 mx-auto p-6 rounded-xl md:flex md:p-3 md:top-auto md:h-max md:w-5/6 lg:w-4/5 xl:w-3/5 ">
        {!resoltion.isMobile && <Background />}
        <div className="md:p-2 md:ml-2 md:mt-5 md:w-3/5 lg:p-4 lg:ml-10 lg:mt-10">
          <PageTitle
            title="Select Your Plan"
            text="You have the option of monthly or yearly billing."
          />
          <div className="md:flex md:justify-between md:gap-5 md:leading-10">
            <EachPlan
              image={Arcade}
              title="Arcade"
              yearlyPrice="$90/yr"
              monthlyPrice="$9/mo"
              toggle={toggle}
            />
            <EachPlan
              image={Advanced}
              title="Advanced"
              yearlyPrice="$120/yr"
              monthlyPrice="$12/mo"
              toggle={toggle}
            />
            <EachPlan
              image={Pro}
              title="Pro"
              yearlyPrice="$150/yr"
              monthlyPrice="$15/mo"
              toggle={toggle}
            />
          </div>
          <ToggleButton toggle={toggle} handleToggle={handleToggle} />
          {!resoltion.isMobile && (
            <BottomButtons firstButtonText="Go Back" secondButtonText="Next" />
          )}
        </div>
      </div>
      {resoltion.isMobile && (
        <BottomButtons firstButtonText="Go Back" secondButtonText="Next" />
      )}
    </div>
  );
}

export default SelectPlan;
