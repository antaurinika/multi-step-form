import React from "react";
import PageTitle from "../components/PageTitle";
import EachAddOn from "../components/EachAddOn";
import BottomButtons from "../components/BottomButtons";
import Background from "../components/Background";
import useResolution from "../components/hooks/useResolution";
import useToggle from "../components/hooks/useToggle";

function AddOns() {
  const resoltion = useResolution();
  const { toggle } = useToggle();
  return (
    <div>
      <div className="bg-blue-50 w-full h-screen relative md:py-10">
        {resoltion.isMobile && <Background />}
        <div className="bg-white absolute top-32 w-11/12 left-0 right-0 mx-auto p-6 rounded-xl md:flex md:p-3 md:w-5/6 md:top-auto md:h-max lg:w-4/5 xl:w-3/5">
          {!resoltion.isMobile && <Background />}
          <div className="md:flex md:flex-col md:ml-2 md:p-2 md:mt-5 md:w-3/5 lg:ml-10 lg:mt-10">
            <PageTitle
              title="Pick add-ons"
              text="Add-ons help enhance your gaming experinece."
            />
            <EachAddOn
              title="Online service"
              text="Acces to multiplayer games"
              toggle={toggle}
              yearlyPrice="+10$/yr"
              monthlyPrice="+1$/mo"
            />
            <EachAddOn
              title="Larger storage"
              text="Extra 1TB of cloud save"
              toggle={toggle}
              yearlyPrice="+20$/yr"
              monthlyPrice="+2$/mo"
            />
            <EachAddOn
              title="Customizable profile"
              text="Custom theme on your profile"
              toggle={toggle}
              yearlyPrice="+20$/yr"
              monthlyPrice="+2$/mo"
            />
            {!resoltion.isMobile && (
              <BottomButtons
                firstButtonText="Go Back"
                secondButtonText="Next"
              />
            )}
          </div>
        </div>
      </div>
      <div>
        {resoltion.isMobile && (
          <BottomButtons firstButtonText="Go Back" secondButtonText="Next" />
        )}
      </div>
    </div>
  );
}

export default AddOns;
