import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PC = () => {
    const pcAllData = useLoaderData();
    console.log(pcAllData)

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
                        {
                            pcAllData.map(pcData => <tr className="hover">
                                <th>1</th>
                                <th>{pcData.itemType}</th>
                                <td>{pcData.brandName} {pcData.model}</td>
                                <td>{pcData.supplierName}</td>
                                <td>{pcData.userName}</td>
                                <td>{pcData.email}</td>
                                <td>{pcData.officeID}</td>
                                <td>{pcData.department}</td>
                                <td>{pcData.extNumber}</td>
                                <td>{pcData.assetCode}</td>
                                <td>{pcData.purchaseDate}</td>
                                <td>{pcData.lastServiceDate}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PC;