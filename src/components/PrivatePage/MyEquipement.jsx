import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Zoom, Fade } from 'react-awesome-reveal';

const MyEquipment = () => {
    const { users } = useContext(AuthContext);
    const [equipment, setEquipment] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-10-server-theta-sand.vercel.app/users/equipment/${users.email}`)
            .then(res => res.json())
            .then(data => setEquipment(data))
            .catch(error => console.error('Error fetching equipment:', error));
    }, [users.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-server-theta-sand.vercel.app/users/${id}`, { method: "DELETE" })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire("Deleted!", "Your equipment has been deleted.", "success");
                        setEquipment(equipment.filter(e => e._id !== id));
                    });
            }
        });
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">My Equipment</h1>
            {equipment.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {equipment.map((equip) => (
                        <Zoom delay={100} key={equip._id}>
                            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
                                <img src={equip.photo} alt={equip.itemName} className="w-full h-48 object-cover rounded-t-lg" />
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-white mb-2">{equip.itemName}</h2>
                                    <p className="text-gray-100 mb-4">{equip.categoryName}</p>
                                    <div className="text-gray-200 space-y-2">
                                        <p><span className="font-semibold">Price:</span> ${equip.price}</p>
                                        <p><span className="font-semibold">Customization:</span> {equip.customization}</p>
                                        <p><span className="font-semibold">Rating:</span> {equip.rating}</p>
                                    </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <Link to={`/updateEquip/${equip._id}`} className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                                            Update
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(equip._id)}
                                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600">No equipment found for this user.</p>
            )}
        </div>
    );
};

export default MyEquipment;
