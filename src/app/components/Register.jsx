import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'street':
        setStreet(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'zipcode':
        setZipcode(value);
        break;
      default:
        break;
    }
  };

  const createUser = () => {
    axios.post("http://localhost:3000/createUser", {
      name: {
        firstname: firstName,
        lastname: lastName,
      },
      email,
      username,
      password,
      phone,
      address: {
        street,
        city,
        zipcode,
      },
    })
    .then((res) => {
      setUsers(res.data);
    })
    .catch((error) => {
      console.error("Error creating user:", error);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      setUsers(res.data);
    });
  }, [users]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-2">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <form className="mt-4 space-y-4" action="post">
          <h1 className="text-2xl font-semibold text-center text-gray-600">Register</h1>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="text-gray-600 text-sm font-medium block">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="text-gray-600 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
                placeholder="First Name"
                value={firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="text-gray-600 text-sm font-medium block">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-4 py-2 border text-gray-600 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Last Name"
                value={lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="text-gray-600 text-sm font-medium block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="text-gray-600 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="username" className="text-gray-600 text-sm font-medium block">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border rounded-md text-gray-600 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Username"
              value={username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-600 text-sm font-medium block">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400 text-gray-600"
              placeholder="Password"
              value={password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-gray-600 text-sm font-medium block">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400 text-gray-600"
              placeholder="Phone"
              value={phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="street" className="text-gray-600 text-sm font-medium block">
              Street
            </label>
            <input
              type="text"
              id="street"
              name="street"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400 text-gray-600"
              placeholder="Street"
              value={street}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="city" className="text-gray-600 text-sm font-medium block">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400 text-gray-600"
              placeholder="City"
              value={city}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="zipcode" className="text-gray-600 text-sm font-medium block">
              Zipcode
            </label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400 text-gray-600"
              placeholder="Zipcode"
              value={zipcode}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none mb-2"
              onClick={createUser}
            >
              Register
            </button>
            <Link to="/login" className="text-green-500 font-semibold">
              <span className="text-lg font-medium flex items-center justify-center space-x-1 mt-2">
                <span>Already have an account?</span>
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
