import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddEquipment = () => {
    const { users } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const newEquip = {
            photo: form.photo.value,
            itemName: form.itemName.value,
            categoryName: form.categoryName.value,
            description: form.description.value,
            price: form.price.value,
            rating: form.rating.value,
            customization: form.customization.value,
            processing: form.processing.value,
            stockStatus: form.stockStatus.value,
            email: users.email,
        };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newEquip),
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Equipment added successfully!');
            });
    };

    return (
        <div className="max-w-4xl mx-auto p-10 my-10 text-black bg-white rounded-lg shadow-lg ">
            <h1 className="text-3xl text-black font-bold text-center mb-6">Add New Equipment</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input type="text" name="photo" className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter image URL" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Item Name</label>
                        <input type="text" name="itemName" className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter item name" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <input type="text" name="categoryName" className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter category" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input type="text" name="price" className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter price" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Rating</label>
                        <input type="text" name="rating" className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter rating" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Customization</label>
                        <input type="text" name="customization" className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter customization options" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Processing Time</label>
                        <input type="text" name="processing" className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter processing time" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Stock Status</label>
                        <input type="text" name="stockStatus" className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter stock status" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea name="description" className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter description" rows="4" required />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                    Add Equipment
                </button>
            </form>
        </div>
    );
};

export default AddEquipment;