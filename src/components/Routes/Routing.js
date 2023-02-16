import React from "react";
import { Route, Routes } from "react-router-dom";
import AddOns from "../../Pages/AddOns";
import FinishingUp from "../../Pages/FinishingUp";
import LastPageModal from "../../Pages/LastPageModal";
import PersonalInfo from "../../Pages/PersonalInfo";
import SelectPlan from "../../Pages/SelectPlan";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="plans" element={<SelectPlan />} />
        <Route path="addons" element={<AddOns />} />
        <Route path="confirmpurchase" element={<FinishingUp />} />
        <Route path="modal" element={<LastPageModal />} />
      </Routes>
    </>
  );
}
