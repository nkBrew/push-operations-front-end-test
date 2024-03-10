import React from "react";

const EmployeeCard = ({ firstName, lastName, totalHours }) => {
  return (
    <div className="employee-card">
      <div className="employee-card-inner">
        <div className="employee-card-name">
          {firstName} {lastName}
        </div>
        <div className="employee-card-hours">
          <div className="employee-card-hours-label">Total Hours</div>
          <div>{totalHours}</div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
