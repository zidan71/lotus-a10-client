import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

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
        <div className="bg-gradient-to-b from-orange-400 to-blue-900 p-12 my-20 text-white rounded-xl shadow-2xl max-w-4xl mx-auto mt-16">
            <Fade bottom>
                <h1 className="text-4xl font-bold text-center mb-8 text-yellow-300">Add New Equipment</h1>
                <h1 className="text-4xl font-bold text-center mb-8 text-yellow-300">{users?.email}</h1>
                <h1 className="text-4xl font-bold text-center mb-8 text-yellow-300">{users?.displayName}</h1>
            </Fade>

                


            <Fade bottom delay={300}>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-sm font-semibold text-gray-200">Image URL</label>
                            <input type="text" name="photo" className="mt-2 w-full p-3 border-2 border-gray-500 rounded-md bg-gray-800 text-white placeholder-gray-400" placeholder="Enter image URL" required />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-200">Item Name</label>
                            <input type="text" name="itemName" className="mt-2 w-full p-3 border-2 border-gray-500 rounded-md bg-gray-800 text-white placeholder-gray-400" placeholder="Enter item name" required />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-200">Category</label>
                            <input type="text" name="categoryName" className="mt-2 w-full p-3 border-2 border-gray-500 rounded-md bg-gray-800 text-white placeholder-gray-400" placeholder="Enter category" required />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-200">Price</label>
                            <input type="text" name="price" className="mt-2 w-full p-3 border-2 border-gray-500 rounded-md bg-gray-800 text-white placeholder-gray-400" placeholder="Enter price" required />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-200">Rating</label>
                            <input type="text" name="rating" className="mt-2 w-full p-3 border-2 border-gray-500 rounded-md bg-gray-800 text-white placeholder-gray-400" placeholder="Enter rating" required />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-200">Customization</label>
                            <input type="text" name="customization" className="mt-2 w-full p-3 border-2 border-gray-500 rounded-md bg-gray-800 text-white placeholder-gray-400" placeholder="Enter customization options" />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-200">Processing Time</label>
                            <input type="text" name="processing" className="mt-2 w-full p-3 border-2 border-gray-500 rounded-md bg-gray-800 text-white placeholder-gray-400" placeholder="Enter processing time" />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-200">Stock Status</label>
                            <input type="text" name="stockStatus" className="mt-2 w-full p-3 border-2 border-gray-500 rounded-md bg-gray-800 text-white placeholder-gray-400" placeholder="Enter stock status" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-200">Description</label>
                        <textarea name="description" className="mt-2 w-full p-3 border-2 border-gray-500 rounded-md bg-gray-800 text-white placeholder-gray-400" placeholder="Enter description" rows="4" required />
                    </div>
                    <Fade bottom delay={500}>
                        <button type="submit" className="w-full cursor-pointer bg-yellow-500 text-black py-3 rounded-md hover:bg-yellow-600 transition duration-300">
                            Add Equipment
                        </button>
                    </Fade>
                </form>
            </Fade>
        </div>
    );
};

export default AddEquipment;
