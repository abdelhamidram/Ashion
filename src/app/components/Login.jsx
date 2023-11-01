import React, { useState, useEffect } from 'react';
import Users from '../Users-data';
import {useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      setUsers(res.data);
    });
  }, [users]);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = Users.find((u) => u.email === email && u.password === password);

    if (user) {
      console.log('Login successful');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <form action="get" className="mt-4 space-y-4" onSubmit={handleLogin}>
          <h1 className="text-2xl font-semibold text-center text-green-500">Login</h1>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <div>
            <label htmlFor="email" className="text-gray-600 text-sm font-medium block">
              Email
            </label>
            <input
              className="w-full text-gray-600 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-600 text-sm font-medium block">
              Password
            </label>
            <input
              className="w-full text-gray-500 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div >
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
            >
              Login
            </button>
            <br />
            <Link to="/registration" className="text-green-500 font-semibold mt-2">
              <span className="text-lg font-medium flex items-center justify-center mt-2">
                <span>Don't have an account?</span>
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
