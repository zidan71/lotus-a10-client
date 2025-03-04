import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const UpdateEquip = () => {
    const equipment = useLoaderData();
    const { users } = useContext(AuthContext);
    const navigate = useNavigate();

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

        fetch(`http://localhost:5000/users/${equipment._id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedEquip),
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Equipment updated successfully!');
                navigate('/my-equipment');
            });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">Update Equipment</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input type="text" name="photo" defaultValue={equipment.photo} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Item Name</label>
                        <input type="text" name="itemName" defaultValue={equipment.itemName} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <input type="text" name="categoryName" defaultValue={equipment.categoryName} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input type="text" name="price" defaultValue={equipment.price} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Rating</label>
                        <input type="text" name="rating" defaultValue={equipment.rating} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Customization</label>
                        <input type="text" name="customization" defaultValue={equipment.customization} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Processing Time</label>
                        <input type="text" name="processing" defaultValue={equipment.processing} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Stock Status</label>
                        <input type="text" name="stockStatus" defaultValue={equipment.stockStatus} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea name="description" defaultValue={equipment.description} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" rows="4" required />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                    Update Equipment
                </button>
            </form>
        </div>
    );
};

export default UpdateEquip;