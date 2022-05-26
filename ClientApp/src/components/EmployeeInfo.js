import React from "react";

class EmployeeInfo extends React.Component {
  render() {
    return (
    <div>
        <input type="text" name="name" defaultValue={this.props.name} disabled="disabled"></input>
        <input type="number" name="value" defaultValue={this.props.value}></input>
        <button>Update</button>
        <button>Delete</button>
    </div>
    );
  }
}

export default EmployeeInfo;