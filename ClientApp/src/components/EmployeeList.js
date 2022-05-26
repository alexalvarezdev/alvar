import React from "react";
import EmployeeInfo from "./EmployeeInfo";

class EmployeeList extends React.Component {
  render() {
    return (
      <ul className="media-list">
        {this.props.list.map((employee) => {
          return (
            <EmployeeInfo
              key={employee.name + employee.value}
              name={employee.name}
              value={employee.value}
            />
          );
        })}
      </ul>
    );
  }
}

export default EmployeeList;