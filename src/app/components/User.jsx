"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./User.css"; 

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      setUsers(res.data);
    });
  }, [users]);

  return (
    <div className="user-container">
      <h2 className="font-bold text-green-400 ">User Information</h2>
      <table className="user-table border-solid border-black border">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Phone</th>
            <th>City</th>
            <th>Street</th>
            <th>Number</th>
            <th>Zipcode</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {users.map(user => { return (
            <tr key={user.id}>
              <td>{user.name.firstname}</td>
              <td>{user.name.lastname}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>{user.address.city}</td>
              <td>{user.address.street}</td>
              <td>{user.address.number}</td>
              <td>{user.address.zipcode}</td>
            </tr>
          )}
        )}
        </tbody>
      </table>
    </div>
  );
}

export default User;
