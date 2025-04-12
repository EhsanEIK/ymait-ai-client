import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';

const AddUPS = () => {
    const [purchaseDate, setPurchaseDate] = useState(new Date());
    const [lastServiceDate, setLastServiceDate] = useState(new Date());

    return (
        <div>
            <h2 className='text-3xl font-bold text-center underline text-zinc-500 uppercase'> UPS Section</h2>
            <form>
                {/* UPS Info Part */}
                <div className='mt-3'>
                    <h2 className='text-xl font-bold text-teal-500'>UPS Information</h2>
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
                    <div className='flex gap-5'>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Extension Number
                            <input name='extNumber' type="text" className="grow" placeholder="ext. number" required />
                        </label>
                    </div>
                </div>

                {/* Service Info Part */}
                <div className='mt-4'>
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
                </div>
                <button className="btn btn-active btn-primary w-full rounded-xl mt-2">Submit</button>
            </form>
            <Link to='/upsInfo'>
                <button className="btn bg-rose-600 text-slate-200 font-bold w-full rounded-xl mt-1">Back</button>
            </Link>
        </div>
    );
};

export default AddUPS;