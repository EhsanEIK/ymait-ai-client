import React, { use, useState } from 'react';
import DatePicker from 'react-datepicker';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AddPC = () => {
    const [purchaseDate, setPurchaseDate] = useState(new Date());
    const [lastServiceDate, setLastServiceDate] = useState(new Date());

    const handleSubmitPCData = event => {
        event.preventDefault();
        const form = event.target;
        const itemType = form.itemType.value;
        const purchaseDate = form.purchaseDate.value;
        const brandName = form.brandName.value;
        const model = form.model.value;
        const supplierName = form.supplierName.value;
        const assetCode = form.assetCode.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const officeID = form.officeID.value;
        const department = form.department.value;
        const extNumber = form.extNumber.value;
        const lastServiceDate = form.lastServiceDate.value;

        const pcData = {
            itemType, purchaseDate, brandName, model, supplierName, assetCode,
            userName, email, officeID, department, extNumber,
            lastServiceDate
        }

        fetch('http://localhost:5000/pcData', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(pcData)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Added PC Data Successfully.');
            })
    }


    return (
        <div>
            <form onSubmit={handleSubmitPCData}>
                {/* PC Info Part */}
                <div>
                    <h2 className='text-2xl font-bold text-teal-500 uppercase'>PC Info</h2>
                    <hr />
                    <div className='flex gap-5 mt-3'>
                        <select name='itemType' className="select mb-3">
                            <option defaultValue={true}>-- SELECT PC TYPE --</option>
                            <option>Desktop</option>
                            <option>Laptop</option>
                        </select>
                        <label className="input input-bordered flex items-center z-10 gap-2 mb-3">
                            Purchase Date
                            <DatePicker name='purchaseDate' selected={purchaseDate}
                                onChange={(date) => setPurchaseDate(date)}
                            />
                        </label>
                    </div>
                    <div className='flex gap-5'>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Brand
                            <input name='brandName' type="text" className="grow" placeholder="brand name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Model
                            <input name='model' type="text" className="grow" placeholder="model" />
                        </label>
                    </div>
                    <div className='flex gap-5'>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Supplier Name
                            <input name='supplierName' type="text" className="grow" placeholder="supplier name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Asset Code
                            <input name='assetCode' type="text" className="grow" placeholder="asset code" />
                        </label>
                    </div>
                </div>

                {/* User Info Part */}
                <div className='mt-6'>
                    <h2 className='text-2xl font-bold text-teal-500 uppercase'>User Info</h2>
                    <hr />
                    <div className='flex gap-5 mt-3'>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            User Name
                            <input name='userName' type="text" className="grow" placeholder="user name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Email
                            <input name='email' type="text" className="grow" placeholder="email" />
                        </label>
                    </div>
                    <div className='flex gap-5'>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Dept.
                            <input name='department' type="text" className="grow" placeholder="department" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Office ID
                            <input name='officeID' type="text" className="grow" placeholder="id no." />
                        </label>
                    </div>
                    <div className='flex gap-5'>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Extension Number
                            <input name='extNumber' type="text" className="grow" placeholder="ext. number" />
                        </label>
                    </div>
                </div>

                {/* Service Info Part */}
                <div className='mt-6'>
                    <h2 className='text-2xl font-bold text-teal-500 uppercase'>Service Info</h2>
                    <hr />
                    <div className='flex gap-5 mt-3'>
                        <label className="input input-bordered flex items-center z-10 gap-2 mb-3">
                            Last Service Date
                            <DatePicker name='lastServiceDate' selected={lastServiceDate}
                                onChange={(date) => setLastServiceDate(date)}
                            />
                        </label>
                    </div>
                </div>
                <button className="btn btn-active btn-primary w-full rounded-xl mt-2">Submit</button>
            </form>
            <Link to='/pcInfo'>
                <button className="btn bg-rose-600 text-slate-200 font-bold w-full rounded-xl mt-1">Back</button>
            </Link>
        </div>
    );
};

export default AddPC;