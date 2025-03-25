import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const AddPC = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <form>
                {/* PC Info Part */}
                <div>
                    <h2 className='text-3xl font-bold text-teal-500 uppercase'>PC Info</h2>
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
                <button className="btn btn-active btn-primary w-full rounded-xl">Submit</button>
            </form>
        </div>
    );
};

export default AddPC;