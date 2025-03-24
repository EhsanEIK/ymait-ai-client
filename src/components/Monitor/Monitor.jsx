import React from 'react';
import { Link } from 'react-router-dom';

const Monitor = () => {
    return (
        <div>
            {/* Befor Table Part */}
            <div className='flex gap-5 justify-between mb-3'>
                <h1 className='text-2xl font-bold'>Monitor List</h1>
                <div className='flex gap-3'>
                    <Link to={'/addNewPCInfo'}>
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
                            <th>User Name</th>
                            <th>Dept.</th>
                            <th>Purchase Date</th>
                            <th>Last Servicing Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        <tr className="hover">
                            <th>1</th>
                            <td>LG</td>
                            <td>Hossain</td>
                            <td>MCD</td>
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