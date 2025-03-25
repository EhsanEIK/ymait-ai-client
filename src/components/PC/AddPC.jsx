import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';

const AddPC = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [serviceDate, setServiceDate] = useState(new Date());

    return (
        <div>
            <form>
                {/* PC Info Part */}
                <div>
                    <h2 className='text-2xl font-bold text-teal-500 uppercase'>PC Info</h2>
                    <hr />
                    <div className='flex gap-5 mt-3'>
                        <select className="select mb-3">
                            <option defaultValue={true}>-- SELECT PC TYPE --</option>
                            <option>Desktop</option>
                            <option>Laptop</option>
                        </select>
                        <label className="input input-bordered flex items-center z-10 gap-2 mb-3">
                            Purchase Date
                            <DatePicker selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </label>
                    </div>
                    <div className='flex gap-5'>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Brand
                            <input type="text" className="grow" placeholder="brand name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Model
                            <input type="text" className="grow" placeholder="model" />
                        </label>
                    </div>
                    <div className='flex gap-5'>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Supplier Name
                            <input type="text" className="grow" placeholder="supplier name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Asset Code
                            <input type="text" className="grow" placeholder="asset code" />
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
                            <input type="text" className="grow" placeholder="user name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Email
                            <input type="text" className="grow" placeholder="email" />
                        </label>
                    </div>
                    <div className='flex gap-5'>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Dept.
                            <input type="text" className="grow" placeholder="department" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Office ID
                            <input type="text" className="grow" placeholder="id no." />
                        </label>
                    </div>
                    <div className='flex gap-5'>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Extension Number
                            <input type="text" className="grow" placeholder="ext. number" />
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
                            <DatePicker selected={serviceDate}
                                onChange={(date) => setServiceDate(date)}
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