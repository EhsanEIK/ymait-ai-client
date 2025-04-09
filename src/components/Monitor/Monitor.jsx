import React from 'react';
import { Link } from 'react-router-dom';

const Monitor = () => {
    return (
        <div>
            {/* Befor Table Part */}
            <div className='flex gap-5 justify-between mb-3'>
                <h1 className='text-2xl font-bold'>Monitor List</h1>
                <div className='flex gap-3'>
                    <Link to={'/addMonitorInfo'}>
                        <button className="btn btn-primary btn-sm rounded-md">Add New</button>
                    </Link>
                    <Link to='/'>
                        <button className="btn bg-rose-600 text-slate-200 font-bold btn-sm rounded-md">Back</button>
                    </Link>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Brand/Model</th>
                            <th>Supplier Name</th>
                            <th>User Name</th>
                            <th>Email Address</th>
                            <th>Office ID</th>
                            <th>Dept.</th>
                            <th>Ext. No.</th>
                            <th>Asset Code</th>
                            <th>Purchase Date</th>
                            <th>Last Servicing Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        <tr className="hover">
                            <th>1</th>
                            <td>LG</td>
                            <td>SMART</td>
                            <td>Hossain</td>
                            <td>hossain@email.com</td>
                            <td>20000000</td>
                            <td>MCD</td>
                            <td>3535</td>
                            <td>1600003535</td>
                            <td>13-03-2025</td>
                            <td>13-03-2025</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Monitor;