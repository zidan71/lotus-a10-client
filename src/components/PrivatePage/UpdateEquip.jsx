import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const UpdateEquip = () => {

    const equipments = useLoaderData();
    const {users} = useContext(AuthContext)

    const { photo,
        itemName,
        categoryName,
        description,
        price,
        rating,
        customization,
        processing,
        stockStatus,
        _id,
    } = equipments;

        const handleClick = (e) => {
            e.preventDefault()
            const form = e.target;
            const photo = form.photo.value;
            const itemName = form.itemName.value;
            const categoryName = form.categoryName.value;
            const description = form.description.value;
            const price = form.price.value;
            const rating = form.rating.value;
            const customization = form.customization.value;
            const processing = form.processing.value;
            const stockStatus = form.stockStatus.value;

            const update = {photo,
                itemName,
                categoryName,
                description,
                price,
                rating,
                customization,
                processing,
                stockStatus,}

                fetch(`http://localhost:5000/users/${_id}`,{
                    method: 'PUT',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body:JSON.stringify(update)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })

        }

    return (
        <div>
            <h1>Updating</h1>


        {   
            users && users?.email ? <div>
                {users.email} <br />
                {users?.displayName}
            </div> : ''
        }



            <form onSubmit={handleClick}>
                {/* Form fields remain the same */}
                
                <label className="fieldset-label">Image</label>
                <input type="text" defaultValue={photo} name='photo' className="input" placeholder="photo" />

                <label className="fieldset-label">Item Name</label>
                <input type="text"  defaultValue={itemName} name='itemName' className="input" placeholder="Email" />

                <label className="fieldset-label">Category Name</label>
                <input type="text" defaultValue={categoryName} name='categoryName' className="input" placeholder="Email" />

                <label className="fieldset-label">Description</label>
                <textarea defaultValue={description} name='description' className="textarea" placeholder="Bio"></textarea>

                <label className="fieldset-label">Price</label>
                <input type="text" defaultValue={price} name='price' className="input" placeholder="Email" />

                <label className="fieldset-label">Rating</label>
                <input type="text" defaultValue={rating} name='rating' className="input" placeholder="Email" />

                <label className="fieldset-label">Customization </label>
                <input type="text" defaultValue={customization} name='customization' className="input" placeholder="Email" />

                <label className="fieldset-label">Processing Time </label>
                <input type="text" defaultValue={processing} name='processing' className="input" placeholder="Email" />

                <label className="fieldset-label">Stock Status</label>
                <input type="text" defaultValue={stockStatus} name='stockStatus' className="input" placeholder="Email" />

                <br />
                <button className="btn">Update</button>
            </form>

        </div>
    );
};

export default UpdateEquip;