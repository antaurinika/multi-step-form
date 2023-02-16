import React from "react";
import PageTitle from "../components/PageTitle";
import BottomButtons from "../components/BottomButtons";
import Background from "../components/Background";
import useResolution from "../components/hooks/useResolution";
import useToggle from "../components/hooks/useToggle";

function FinishingUp() {
  const { isMobile } = useResolution();
  const { toggle } = useToggle();
  return (
    <div className="bg-blue-50 w-full h-screen relative md:p-10">
      {isMobile && <Background />}

      <div className="bg-white absolute top-32 w-11/12 left-0 right-0 mx-auto p-6 rounded-xl md:flex md:p-3 md:top-auto md:h-max md:w-5/6 lg:4/5 xl:w-3/5">
        {!isMobile && <Background />}
        <div className="md:p-2 md:ml-2 md:mt-5 md:w-3/5 lg:p-4 lg:ml-10 lg:mt-10">
          <PageTitle
            title="Finishing Up"
            text="Double-check everything looks OK before confirming."
          />
          <div className="bg-blue-50 rounded-lg">
            <div className="flex justify-between p-3 border-b-2 mx-3">
              <div>
                <h1 className="text-blue-900 font-bold">
                  Arcade {toggle ? "(Yearly)" : "(Monthly)"}
                </h1>
                <p className="text-gray-400 font-semibold underline w-min">
                  Change
                </p>
              </div>
              <p className="mt-2 text-blue-900 font-bold">$9/mo</p>
            </div>
            <div className="flex justify-between p-3 mx-3">
              <p className=" text-gray-400 font-semibold">Online service</p>
              <p className="text-blue-900 font-semibold">$1/mo</p>
            </div>
            <div className="flex justify-between p-3 mx-3">
              <p className=" text-gray-400 font-semibold">Larger storage</p>
              <p className="text-blue-900 font-semibold">$2/mo</p>
            </div>
          </div>
          <div className="flex justify-between mx-3 px-3 pt-6">
            <p className=" text-gray-400 font-semibold">
              Total (per {toggle ? "year" : "month"})
            </p>
            <p className="text-lg text-blue-700 font-bold">$9/mo</p>
          </div>
          {!isMobile && (
            <BottomButtons
              firstButtonText="Go Back"
              secondButtonText="Confirm"
            />
          )}
        </div>
      </div>
      {isMobile && (
        <BottomButtons firstButtonText="Go Back" secondButtonText="Confirm" />
      )}
    </div>
  );
}

export default FinishingUp;
