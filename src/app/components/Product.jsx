"use client";
import React, { useState } from 'react';
import  Link from 'react-router-dom';


function Product({ product }) {
  const { title, price, description, category, image, rating } = product;
  const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);
  const [isTitleExpanded, setTitleExpanded] = useState(false);

  const descriptionClass = isDescriptionExpanded ? '' : 'line-clamp-3';
  const titleClass = isTitleExpanded ? '' : 'line-clamp-1';

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4 mt-4 hover:scale-110 ">
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
        <img src={image} alt={title} className="w-full max-h-60 object-cover object-center" />
        <div className="p-4">
          <h2 className={`text-lg font-semibold text-gray-800 mb-2 ${titleClass}`}>{title}</h2>
          <p className={`text-gray-600 text-sm mb-2 ${descriptionClass}`}>{description}</p>
          {description.length > 3 * 40 && !isDescriptionExpanded && (
            <button
              className="text-green-500 underline"
              onClick={() => setDescriptionExpanded(true)}
            > Read More </button>
            
          ) || <button
          className="text-green-500 underline"
          onClick={() => setDescriptionExpanded(false)}
        > Read less </button>}

          <div className="flex justify-between items-center">
            <p className="text-lg font-bold text-green-500">${price.toFixed(2)}</p>
            <p className="text-gray-500">{category}</p>
          </div>
          <div className="mt-2 flex items-center">
            <p className="text-gray-500">Rating: {rating.rate} ({rating.count} reviews)</p>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full focus:outline-none">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
