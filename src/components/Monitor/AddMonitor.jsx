import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AddMonitor = () => {
    const [purchaseDate, setPurchaseDate] = useState(new Date());
    // const [lastServiceDate, setLastServiceDate] = useState(new Date());

    const handleSubmitMonitorData = event => {
        event.preventDefault();
        const form = event.target;
        const purchaseDate = form.purchaseDate.value;
        const brandName = form.brandName.value;
        const model = form.model.value;
        const supplierName = form.supplierName.value;
        const assetCode = form.assetCode.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const officeID = form.officeID.value;
        const department = form.department.value;

        const monitorData = {
            purchaseDate, brandName, model, supplierName, assetCode,
            userName, email, officeID, department
        }

        fetch('https://ymait-ai-server.vercel.app/monitorInfo', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(monitorData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Added Monitor Information Successfully.');
                    form.reset();
                    setPurchaseDate(new Date());
                }
            })
    }

    return (
        <div className='grid grid-cols-3 items-center'>
            <div></div>
            <div>
                <h2 className='text-3xl font-bold text-center underline text-zinc-500 uppercase'> Monitor Section</h2>
                <form onSubmit={handleSubmitMonitorData}>
                    {/* Product Info Part */}
                    <div className='mt-3'>
                        <h2 className='text-xl font-bold text-teal-500'>Product Information</h2>
                        <hr />
                        <div className='flex gap-5 mt-3'>
                            <label className="input input-bordered flex items-center z-10 gap-2 mb-3">
                                Purchase Date
                                <DatePicker name='purchaseDate' required
                                    selected={purchaseDate}
                                    onChange={(date) => setPurchaseDate(date)}
                                    dateFormat="dd-MM-yyyy"
                                />
                            </label>
                        </div>
                        <div className='flex gap-5'>
                            <label className="input input-bordered flex items-center gap-2 mb-3">
                                Brand
                                <input name='brandName' type="text" className="grow" placeholder="brand name" required />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mb-3">
                                Model
                                <input name='model' type="text" className="grow" placeholder="model" require />
                            </label>
                        </div>
                        <div className='flex gap-5'>
                            <label className="input input-bordered flex items-center gap-2 mb-3">
                                Supplier Name
                                <input name='supplierName' type="text" className="grow" placeholder="supplier name" required />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mb-3">
                                Asset Code
                                <input name='assetCode' type="text" className="grow" placeholder="asset code" required />
                            </label>
                        </div>
                    </div>

                    {/* User Info Part */}
                    <div className='mt-4'>
                        <h2 className='text-xl font-bold text-teal-500'>User Information</h2>
                        <hr />
                        <div className='flex gap-5 mt-3'>
                            <label className="input input-bordered flex items-center gap-2 mb-3">
                                User Name
                                <input name='userName' type="text" className="grow" placeholder="user name" required />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mb-3">
                                Email
                                <input name='email' type="text" className="grow" placeholder="email" required />
                            </label>
                        </div>
                        <div className='flex gap-5'>
                            <label className="input input-bordered flex items-center gap-2 mb-3">
                                Dept.
                                <input name='department' type="text" className="grow" placeholder="department" required />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mb-3">
                                Office ID
                                <input name='officeID' type="text" className="grow" placeholder="id no." required />
                            </label>
                        </div>
                    </div>

                    {/* Service Info Part */}
                    {/* <div className='mt-4'>
                        <h2 className='text-xl font-bold text-teal-500'>Service Information</h2>
                        <hr />
                        <div className='flex gap-5 mt-3'>
                            <label className="input input-bordered flex items-center z-10 gap-2 mb-3">
                                Last Service Date
                                <DatePicker name='lastServiceDate' required
                                    selected={lastServiceDate}
                                    onChange={(date) => setLastServiceDate(date)}
                                    dateFormat="dd-MM-yyyy"
                                />
                            </label>
                        </div>
                    </div> */}
                    <button className="btn btn-active btn-primary w-full rounded-xl mt-2">Submit</button>
                </form>
                <Link to='/monitorInfo'>
                    <button className="btn bg-slate-600 text-slate-200 font-bold w-full rounded-xl mt-1">Back</button>
                </Link>
            </div>
            <div></div>
        </div>
    );
};

export default AddMonitor;