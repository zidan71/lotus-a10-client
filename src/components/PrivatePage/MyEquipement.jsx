import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyEquipment = () => {
    const { users } = useContext(AuthContext);
    const [equipment, setEquipment] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/users/equipment/${users.email}`)
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
                fetch(`http://localhost:5000/users/${id}`, { method: "DELETE" })
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {equipment.map((equip) => (
                        <div key={equip._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <img src={equip.photo} alt={equip.itemName} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{equip.itemName}</h2>
                                <p className="text-gray-600 mb-2">{equip.categoryName}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <Link to={`/updateEquip/${equip._id}`} className="text-blue-500 hover:underline">Update</Link>
                                    <button onClick={() => handleDelete(equip._id)} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600">No equipment found for this user.</p>
            )}
        </div>
    );
};

export default MyEquipment;