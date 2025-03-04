import React from 'react';

const Card = ({card}) => {

   

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row gap-6">
            <img src={card.photo} alt={card.itemName} className="w-full md:w-1/2 h-96 object-cover rounded-lg" />
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl font-bold mb-4">{card.itemName}</h1>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <div className="space-y-2">
                    <p><span className="font-semibold">Category:</span> {card.categoryName}</p>
                    <p><span className="font-semibold">Price:</span> ${card.price}</p>
                    <p><span className="font-semibold">Rating:</span> {card.rating}</p>
                    <p><span className="font-semibold">Customization:</span> {card.customization}</p>
                    <p><span className="font-semibold">Processing Time:</span> {card.processing}</p>
                    <p><span className="font-semibold">Stock Status:</span> {card.stockStatus}</p>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                View Details
                </button>
            </div>
        </div>
    </div>
    );
};

export default Card;