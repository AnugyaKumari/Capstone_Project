import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

export default function Employee() {
  const [employees, setEmployee] = useState([]);
  const [editing, setEditing] = useState(-1);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    salary: '',
    designation: '',
    location: ""
  });

  const handleReset = () => {
    // setEditing(null);
    setNewEmployee({
      name: "",
      salary: '',
      designation: '',
      location: ""
    })
    setEditing(-1)
  };

  const handleFieldChange = (e) => {
    console.log(e.target)
    setNewEmployee(emp => {
      return {
        ...emp,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (editing >= 0) {
      const updatedEmployee = [...employees]
      updatedEmployee[editing] = newEmployee
      setEmployee(updatedEmployee)
      setEditing(-1)
    } else {
      setEmployee(emp => [...emp, newEmployee])
    }
    setNewEmployee({
      name: "",
      salary: '',
      designation: '',
      location: ""
    })
  }

  const handleEdit = (i) => {
    setNewEmployee({ ...employees[i] })
    setEditing(i);
  }

  const handleDeleteEmployee = (i) => {
    const updatedEmployee = employees.filter((emp, index) => index !== i);
    setEmployee(updatedEmployee);
  }
  console.log(newEmployee)
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-4">Employee Registration Form</h1>
            <form onSubmit={handleAddEmployee}>
              {/* Bootstrap form styling */}
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  name="name"
                  value={newEmployee.name}
                  onChange={handleFieldChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Salary:</label>
                <input
                  name="salary"
                  value={newEmployee.salary}
                  onChange={handleFieldChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Designation:</label>
                <input
                  name="designation"
                  value={newEmployee.designation}
                  onChange={handleFieldChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Location:</label>
                <input
                  name="location"
                  value={newEmployee.location}
                  onChange={handleFieldChange}
                  className="form-control"
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary">
                  {editing >= 0 ? "Update" : "Register"}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ml-2"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <h3>Employee List</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Salary</th>
                  <th>Designation</th>
                  <th>Location</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, i) => {
                  return (
                    <tr key={`${emp.name}${i}`}>
                      <td>{i + 1}</td>
                      <td>{emp.name}</td>
                      <td>{emp.salary}</td>
                      <td>{emp.designation}</td>
                      <td>{emp.location}</td>
                      <td>
                        <button  class="btn btn-success" onClick={() => handleEdit(i)}>Edit</button>
                      </td>
                      <td>
                        <button class="btn btn-danger" onClick={() => handleDeleteEmployee(i)}>Delete</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
