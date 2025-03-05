import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const UpdateEquip = () => {
    const equipment = useLoaderData();
    const { users } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedEquip = {
            photo: form.photo.value,
            itemName: form.itemName.value,
            categoryName: form.categoryName.value,
            description: form.description.value,
            price: form.price.value,
            rating: form.rating.value,
            customization: form.customization.value,
            processing: form.processing.value,
            stockStatus: form.stockStatus.value,
        };

        fetch(`https://assignment-10-server-theta-sand.vercel.app/users/${equipment._id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedEquip),
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Equipment updated successfully!');
            });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6 text-teal-600">Update Equipment</h1>
            <h1 className="text-4xl font-bold text-center mb-8 text-teal-600">{users?.email}</h1>
                <h1 className="text-4xl font-bold text-center mb-8 text-teal-600">{users?.displayName}</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input type="text" name="photo" defaultValue={equipment.photo} className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Item Name</label>
                        <input type="text" name="itemName" defaultValue={equipment.itemName} className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <input type="text" name="categoryName" defaultValue={equipment.categoryName} className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input type="text" name="price" defaultValue={equipment.price} className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Rating</label>
                        <input type="text" name="rating" defaultValue={equipment.rating} className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Customization</label>
                        <input type="text" name="customization" defaultValue={equipment.customization} className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Processing Time</label>
                        <input type="text" name="processing" defaultValue={equipment.processing} className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Stock Status</label>
                        <input type="text" name="stockStatus" defaultValue={equipment.stockStatus} className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea name="description" defaultValue={equipment.description} className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" rows="4" required />
                </div>
                <button type="submit" className="w-full cursor-pointer bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2 px-4 rounded-md hover:from-cyan-500 hover:to-teal-500 transition duration-300">
                    Update Equipment
                </button>
            </form>
        </div>
    );
};

export default UpdateEquip;
