import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const AddEquipement = () => {

    const {users} = useContext(AuthContext)

    const handleClick = e => {
        e.preventDefault();
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

        console.log(photo,itemName,categoryName,processing,description,price,customization,rating,stockStatus,)

        const newEquip = {
            photo,itemName,categoryName,processing,description,price,customization,rating,stockStatus,
        }

        fetch('http://localhost:5000/users',{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(newEquip)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('added to db')
        })
    }

    return (
        <div>
            <h1 className='text-center text-4xl'>Add Equipement here</h1>

        {users && users?.email ? <div>
            {users.email} <br />
            {users.displayName}
        </div>: ''}

            <form onSubmit={handleClick}>

                <label className="fieldset-label">Image</label>
                <input type="text" name='photo' className="input" placeholder="photo" />

                <label className="fieldset-label">Item Name</label>
                <input type="text" name='itemName' className="input" placeholder="Email" />

                <label className="fieldset-label">Category Name</label>
                <input type="text" name='categoryName' className="input" placeholder="Email" />

                <label className="fieldset-label">Description</label>
                <textarea  name='description' className="textarea" placeholder="Bio"></textarea>

                <label className="fieldset-label">Price</label>
                <input type="text" name='price' className="input" placeholder="Email" />

                <label className="fieldset-label">Rating</label>
                <input type="text" name='rating' className="input" placeholder="Email" />

                <label className="fieldset-label">Customization </label>
                <input type="text" name='customization' className="input" placeholder="Email" />

                <label className="fieldset-label">Processing Time </label>
                <input type="text" name='processing' className="input" placeholder="Email" />

                <label className="fieldset-label">Stock Status</label>
                <input type="text" name='stockStatus' className="input" placeholder="Email" />

                <button className="btn">Add</button>
            <br />

            </form><br />
        </div>
    );
};

export default AddEquipement;