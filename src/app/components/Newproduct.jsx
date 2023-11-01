import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Newproduct() {

  const [products, setProducts] = useState([]);
  const [title, settitle] = useState('');
  const [price, setprice] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');
  const [image, setimage] = useState('');
  const [rate, setrate] = useState('');
  const [count, setcount] = useState('');


  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'title':
        settitle(value);
        break;
      case 'price':
        setprice(value);
        break;
      case 'description':
        setdescription(value);
        break;
      case 'category':
        setcategory(value);
        break;
      case 'image':
        setimage(value);
        break;
      case 'rate':
        setrate(value);
        break;
      case 'count':
        setcount(value);
        break;
      default:
        break;
    }
  };

  const createProduct = () => {
    axios.post("http://localhost:3000/createProduct", {
        title,
        price,
        description,
        category,
        image,
        rating: {
         rate,
         count,
        },
    })
    .then((res) => {
      setProducts(res.data);
    })
    .catch((error) => {
      console.error("Error creating Product:", error);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setProducts(res.data);
    });
  }, [products]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-2">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <form className="mt-4 space-y-4" action="post">
          <h1 className="text-2xl font-semibold text-center text-gray-600">Newproduct</h1>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="title" className="text-gray-600 text-sm font-medium block">
               Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="text-gray-600 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
                placeholder="First Name"
                value={title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="text-gray-600 text-sm font-medium block">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="w-full px-4 py-2 border text-gray-600 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Last Name"
                value={price}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="description" className="text-gray-600 text-sm font-medium block">
              Description
            </label>
            <input
              type="description"
              id="description"
              name="description"
              className="text-gray-600 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
              placeholder="description"
              value={description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="text-gray-600 text-sm font-medium block">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="w-full px-4 py-2 border rounded-md text-gray-600 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="category"
              value={category}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="image" className="text-gray-600 text-sm font-medium block">
              Photo
            </label>
            <input
              type="image"
              id="image"
              name="image"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400 text-gray-600"
              placeholder="image"
              value={image}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="rate" className="text-gray-600 text-sm font-medium block">
              Rate
            </label>
            <input
              type="text"
              id="rate"
              name="rate"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400 text-gray-600"
              placeholder="rate"
              value={rate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="count" className="text-gray-600 text-sm font-medium block">
              Count
            </label>
            <input
              type="text"
              id="count"
              name="count"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400 text-gray-600"
              placeholder="count"
              value={count}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none mb-2"
              onClick={createProduct}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newproduct;
