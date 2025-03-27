import React from 'react';
import { Link } from 'react-router-dom';

const PC = () => {
    return (
        <div>
            {/* Befor Table Part */}
            <div className='flex gap-5 justify-between mb-3'>
                <h1 className='text-2xl font-bold'>PC List</h1>
                <div className='flex gap-3'>
                    <Link to={'/addPC'}>
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
                            <th>Item</th>
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
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        <tr className="hover">
                            <th>1</th>
                            <th>Laptop</th>
                            <td>HP Probook 440 G10</td>
                            <td>SMART Tech.</td>
                            <td>Sayem</td>
                            <td>sayem@youngonectg.com</td>
                            <td>2040404040</td>
                            <td>Admin</td>
                            <td>3223</td>
                            <td>1600004804</td>
                            <td>13-03-2025</td>
                            <td>13-03-2025</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PC;