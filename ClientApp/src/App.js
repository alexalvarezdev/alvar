import React, { Component } from 'react';
import EmployeeList from "./components/EmployeeList";

let baseUrl="http://localhost:41478/Employees";


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { employee: [] };
    this.totalSum = 0
  }


  UNSAFE_componentWillMount() {
    fetch("http://localhost:41478/Employees")
      .then((response) => {
        return response.json();
      })
      .then((employee) => {
        this.setState({ employee: employee });
      });
      fetch("http://localhost:41478/List")
      .then((response) => {
        return response.json();
      })
      .then((totalSum) => {
        this.setState({ totalSum: totalSum });
      });
  }

  render() {
    if (this.state.employee.length > 0) {
      return (
        <div>
          <button>Add Employee</button>
          <EmployeeList list={this.state.employee} />
          <div>
            <span>Total Sum for employees that her name starts with A, B or C is: {this.state.totalSum}</span>
          </div>
        </div>
      );
    } else {
      return <p>Load employees...</p>;
    }
  }
}
