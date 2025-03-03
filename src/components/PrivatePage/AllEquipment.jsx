import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllEquipment = () => {

    const equipments = useLoaderData()

    const viewDetails = (id) => {
        console.log(id)
    }


    return (
        <div>
            

            <div className="overflow-x-auto my-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>Customization</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
     {
        equipments.map((e,i)=> 
            <tr>
        <th>
         
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={e.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{e.itemName}</div>
              <div className="text-sm opacity-50">{e.categoryName}</div>
            </div>
          </div>
        </td>
        <td>
          {e.price}
          <br />
          
        </td>
        <td>{e.customization}</td>
        <th>
          <Link to={`/viewDetails/${e._id}`}>
          <button onClick={()=> viewDetails(e._id)} className="btn btn-ghost btn-xs">View Details</button>
          </Link>
        </th>
      </tr>
        )
     }
     
    </tbody>
    {/* foot */}
    
  </table><br />
</div>

        </div>
    );
};

export default AllEquipment;