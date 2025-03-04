import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Fade, Zoom } from 'react-awesome-reveal';

const ViewDetails = () => {
    const equipment = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gradient-to-b my-10 from-orange-400 to-blue-900 rounded-lg shadow-lg">
            <Fade bottom cascade>
                <div className="flex flex-col md:flex-row gap-6">
                    <Zoom delay={200}>
                        <img
                            src={equipment.photo}
                            alt={equipment.itemName}
                            className="w-full md:w-1/2 h-96 object-cover rounded-lg shadow-xl transform hover:scale-105 transition duration-500"
                        />
                    </Zoom>
                    <div className="w-full md:w-1/2 text-white">
                        <h1 className="text-4xl font-bold mb-6 text-shadow-md">{equipment.itemName}</h1>
                        <p className="text-lg text-gray-300 mb-6">{equipment.description}</p>
                        <div className="space-y-4">
                            <p><span className="font-semibold text-orange-300">Category:</span> {equipment.categoryName}</p>
                            <p><span className="font-semibold text-orange-300">Price:</span> ${equipment.price}</p>
                            <p><span className="font-semibold text-orange-300">Rating:</span> {equipment.rating}</p>
                            <p><span className="font-semibold text-orange-300">Customization:</span> {equipment.customization}</p>
                            <p><span className="font-semibold text-orange-300">Processing Time:</span> {equipment.processing}</p>
                            <p><span className="font-semibold text-orange-300">Stock Status:</span> {equipment.stockStatus}</p>
                        </div>
                        <Zoom delay={400}>
                            <button className="mt-6 cursor-pointer w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 px-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                                Buy Now
                            </button>
                        </Zoom>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default ViewDetails;
