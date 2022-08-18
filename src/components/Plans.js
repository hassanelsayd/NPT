import React, { useState } from "react";
import PlanCard from "./PlanCard";
import "./Plans.css";
const Plans = () => {
  const plans = [
    {
      type: "Start",
      price: {
        monthly: "50",
        yearly: "400",
      },
      videosOfLessons: true,
      homeWorkCheck: true,
      additionalPracticalTasks: false,
      monthlyConf: false,
      personalAdvice: false,
    },
    {
      type: "Advance",
      price: {
        monthly: "75",
        yearly: "550",
      },
      videosOfLessons: true,
      homeWorkCheck: true,
      additionalPracticalTasks: true,
      monthlyConf: true,
      personalAdvice: false,
    },
    {
      type: "Premium",
      price: {
        monthly: "100",
        yearly: "900",
      },
      videosOfLessons: true,
      homeWorkCheck: true,
      additionalPracticalTasks: true,
      monthlyConf: true,
      personalAdvice: true,
    },
  ];
  const renderList = () => {
    return plans.map((plan) => {
      return <PlanCard plan={plan} planDuration={monthly} />;
    });
  };
  const [monthly, setMonthly] = useState(true);
  return (
    <div className="plans" id="plans">
      <div className="container">
        <div className="section-info">
          <h2>Here are all our plans</h2>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized
          </p>
          <div className={`plan-duration ${monthly ? "monthly" : "yearly"}`}>
            <span className={monthly ? "active" : ""}>Monthly</span>
            <div className="toggler" onClick={() => setMonthly(!monthly)}>
              <span></span>
            </div>
            <span className={!monthly ? "active" : ""}>Yearly</span>
          </div>
        </div>
        <div className="grid-container">{renderList()}</div>
      </div>
    </div>
  );
};
export default Plans;
