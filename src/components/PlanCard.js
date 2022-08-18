import React from "react";
import "./PlanCard.css";
const PlanCard = ({ plan, planDuration }) => {
  return (
    <div className="plan-card">
      <div className="card-title">
        <h3>{plan.type}</h3>
        <p>
          On the other hand, we denounce with righteous indignation and dislike
        </p>
      </div>
      <div className="pricing">
        <span>
          {planDuration ? plan.price.monthly + "$" : plan.price.yearly + "$"}
        </span>
        <p>{planDuration ? "/month" : "/year"}</p>
      </div>
      <ul className="card-features">
        <li>
          <i
            className={`fa-solid ${
              plan.videosOfLessons ? "fa-check allowed" : "fa-xmark denied"
            }  icon `}
          ></i>{" "}
          Videos of lessons
        </li>
        <li>
          <i
            className={`fa-solid ${
              plan.homeWorkCheck ? "fa-check allowed" : "fa-xmark denied"
            }  icon `}
          ></i>
          Homework check
        </li>
        <li>
          <i
            className={`fa-solid ${
              plan.additionalPracticalTasks
                ? "fa-check allowed"
                : "fa-xmark denied"
            }  icon `}
          ></i>
          Additional practical tasks
        </li>
        <li>
          <i
            className={`fa-solid ${
              plan.monthlyConf ? "fa-check allowed" : "fa-xmark denied"
            }  icon `}
          ></i>
          Monthly conferences
        </li>
        <li>
          <i
            className={`fa-solid ${
              plan.personalAdvice ? "fa-check allowed" : "fa-xmark denied"
            }  icon `}
          ></i>{" "}
          Personal advice from teacher
        </li>
      </ul>

      <button>Get started</button>
    </div>
  );
};
export default PlanCard;
