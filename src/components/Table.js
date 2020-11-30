import React, { Component } from "react";
import employees from "../employees"

const employeeTable = []
employees.forEach(employee => 
    employeeTable.push(
        <tr> 
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.department}</td>
            <td>{employee.role}</td>
            <td>{employee.salary}</td>
        </tr>
    )
)
// TODO: Add keys to dynamically generated table rows

class Table extends Component {

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>Role</th>
                        <th>Salary</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {employeeTable} 
                </tbody>
               
            </table>
        )
    }
}

export default Table