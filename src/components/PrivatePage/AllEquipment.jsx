import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllEquipment = () => {
    const [equipments, setEquipments] = useState(useLoaderData());
    const [sorted, setSorted] = useState(false);

    const handleSort = () => {
        const sortedEquipments = [...equipments].sort((a, b) => sorted ? a.price - b.price : b.price - a.price);
        setEquipments(sortedEquipments);
        setSorted(!sorted);
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">All Equipment</h1>
            <div className="flex justify-end mb-4">
                <button onClick={handleSort} className="bg-orange-600 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-orange-700 transition duration-300">
                    Sort by Price {sorted ? "(Low to High)" : "(High to Low)"}
                </button>
            </div>
            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="min-w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Item</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Price</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Customization</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {equipments.map((e) => (
                            <tr key={e._id} className="hover:bg-gray-50 cursor-pointer transition duration-200">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={e.photo}
                                                alt={e.itemName}
                                                className="h-12 w-12 rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">{e.itemName}</div>
                                            <div className="text-sm text-gray-500">{e.categoryName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-900">${e.price}</td>
                                <td className="px-6 py-4 text-gray-900">{e.customization}</td>
                                <td className="px-6 py-4">
                                    <Link to={`/viewDetails/${e._id}`}>
                                    <button className="bg-gradient-to-r cursor-pointer from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-md hover:from-cyan-500 hover:to-teal-500 transition duration-300">
                                                View Details
                                            </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipment;
