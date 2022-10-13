import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Employees from "./Employees";


const Home = () => {

  let history = useNavigate()

  const handleEdit = (id, name, age) => {
      localStorage.setItem('Name', name)
      localStorage.setItem('Age', age)
      localStorage.setItem('Id', id)
  }

  const handleDelete = (id) => {
       let index = Employees.map(function(e){
           return e.id
       }).indexOf(id)

       Employees.splice(index, 1);

       history('/')
  }
  return (
    <React.Fragment>
      <table class="table container mt-5 shadow p-4">
        <thead>
          <tr>
        
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {Employees && Employees.length > 0
            ? Employees.map((item) => {
                return (
                  <tr>
                   
                    <th scope="row">{item.Name}</th>
                    <td>{item.Age}</td>
                    <td>
                      <Link to={'/edit'}>
                      <button className="btn btn-dark" onClick={() => handleEdit(item.id, item.Name, item.Age)}>Update</button>
                      </Link>
                  </td>
                  <td>
                      <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                  </tr>
                );
              })
            : "item not found"}
        </tbody>
      </table>
      <br></br>

      <Link className="d-grid gap-2 container" to='/create'>
          <Button size='lg'>Create</Button>
      </Link>
    </React.Fragment>
  );
};

export default Home;
