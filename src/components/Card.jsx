import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';

const Card = ({ card }) => {
  return (
    <Fade cascade>
      <div className="max-w-lg mx-auto p-6 bg-gradient-to-br from-blue-800 to-orange-500 rounded-3xl shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-3xl">
        <Zoom>
          <img src={card.photo} alt={card.itemName} className="w-full h-72 object-cover rounded-2xl shadow-lg" />
        </Zoom>
        <div className="text-white text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-3 tracking-widest uppercase">{card.itemName}</h1>
          <p className="text-gray-200 text-sm px-6 italic leading-relaxed mb-4">{card.description}</p>
          <div className="space-y-2 text-lg">
            <p><span className="font-semibold text-yellow-300">Category:</span> <span className="font-light">{card.categoryName}</span></p>
            <p><span className="font-semibold text-yellow-300">Price:</span> <span className="font-light">${card.price}</span></p>
            <p><span className="font-semibold text-yellow-300">Rating:</span> <span className="font-light">⭐ {card.rating}</span></p>
            <p><span className="font-semibold text-yellow-300">Customization:</span> <span className="font-light">{card.customization}</span></p>
            <p><span className="font-semibold text-yellow-300">Processing Time:</span> <span className="font-light">{card.processing}</span></p>
            <p><span className="font-semibold text-yellow-300">Stock Status:</span> <span className="font-light">{card.stockStatus}</span></p>
          </div>
          <button className="mt-6 bg-white text-blue-800 py-2 px-6 rounded-full font-bold uppercase tracking-widest shadow-md hover:bg-gray-200 transition duration-300">
            View Details
          </button>
        </div>
      </div>
    </Fade>
  );
};

export default Card;
