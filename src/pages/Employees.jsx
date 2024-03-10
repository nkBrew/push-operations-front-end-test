import React, { useState, useEffect } from "react";
import employeeData from "../employee_data.json";
import EmployeeCard from "../components/Cards/EmployeeCard";

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [searchByName, setSearchByName] = useState("");

  const mapEmployeeData = () => {
    const employeesToSet = employeeData.map((e) => ({
      employeeId: e.employee_id,
      firstName: e.first_name,
      lastName: e.last_name,
      totalHours: e.labour
        .map((l) => l.total)
        .reduce((partialSum, a) => partialSum + a, 0),
    }));

    setEmployees(employeesToSet);
  };

  useEffect(() => {
    mapEmployeeData();
  }, []);

  const renderEmployeeCards = () => {
    const filteredEmployees = employees.filter((e) =>
      searchByName
        ? `${e.firstName} ${e.lastName}`.toLowerCase().includes(searchByName)
        : true
    );

    if (filteredEmployees.length === 0) {
      return <div className="employees-not-found">No employees match!</div>;
    }

    return filteredEmployees.map((e) => (
      <EmployeeCard
        key={`key-${e.employeeId}`}
        employeeId={e.employeeId}
        firstName={e.firstName}
        lastName={e.lastName}
        totalHours={e.totalHours}
      />
    ));
  };
  return (
    <div className="page-outer-wrapper">
      <div className="page-inner-container">
        <input
          className="searchbar"
          placeholder="Filter employees by name"
          onChange={(e) => setSearchByName(e.target.value)}
        />
        <div className="employee-cards-container">{renderEmployeeCards()}</div>
      </div>
    </div>
  );
};

export default EmployeesPage;
