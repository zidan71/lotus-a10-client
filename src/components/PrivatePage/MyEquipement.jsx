import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const MyEquipement = () => {
    const { users } = useContext(AuthContext);
    const [equipment, setEquipment] = useState([]);

    useEffect(() => {
      
          
            fetch(`http://localhost:5000/users/equipment/${users.email}`)
                .then(res => res.json())
                .then(data => setEquipment(data))
                .catch(error => console.error('Error fetching equipment:', error));
        
    }, []);

    return (
        <div>
            <h1>My Equipment</h1>
            {equipment.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {equipment.map((equip, index) => (
                       <div className="card bg-base-100 w-96 shadow-sm">
                       <figure>
                         <img
                           src={equip.photo}
                           alt="Shoes" />
                       </figure>
                       <div className="card-body">
                         <h2 className="card-title">{equip.itemName}</h2>
                         <p>{equip.categoryName}</p>
                         <div className="card-actions justify-end">
                           <button className="btn btn-accent">Update</button>
                           <button className="btn btn-error">Delete</button>
                         </div>
                       </div>
                     </div>
                    ))}
                </div>
            ) : (
                <p>No equipment found for this user.</p>
            )}
        </div>
    );
};

export default MyEquipement;