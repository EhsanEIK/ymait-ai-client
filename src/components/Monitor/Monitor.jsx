import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const Monitor = () => {
    const allMonitorData = useLoaderData();

    let i = 1;

    // handler for delete pc data from db
    const handleDeleteData = id => {
        fetch(`https://ymait-ai-server.vercel.app/monitorInfo/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Deleted Monitor Information Successfully.');
                }
            })
    }

    return (
        <div>
            {/* Befor Table Part */}
            <div className='flex gap-5 justify-between mb-3'>
                <h1 className='text-2xl font-bold'>Monitor Information List</h1>
                <div className='flex gap-3'>
                    <Link to={'/addMonitorInfo'}>
                        <button className="btn btn-primary btn-sm rounded-md">Add New</button>
                    </Link>
                    <Link to='/'>
                        <button className="btn bg-slate-600 text-slate-200 font-bold btn-sm rounded-md">Back</button>
                    </Link>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Brand-Model</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Office ID</th>
                            <th>Dept.</th>
                            <th>Asset Code</th>
                            <th>Supplier Name</th>
                            <th>Purchase Date (D-M-Y)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            allMonitorData.map(monitorData => <tr key={monitorData?._id} className="hover">
                                <th>{i++}</th>
                                <td>{monitorData?.brandName} {monitorData?.model}</td>
                                <td>{monitorData?.userName}</td>
                                <td>{monitorData?.email}</td>
                                <td>{monitorData?.officeID}</td>
                                <td>{monitorData?.department}</td>
                                <td>{monitorData?.assetCode}</td>
                                <td>{monitorData?.supplierName}</td>
                                <td>{monitorData?.purchaseDate}</td>
                                <td>
                                    <button onClick={() => { handleDeleteData(monitorData?._id) }} className="btn bg-red-500 text-white btn-sm rounded-md hover:bg-red-600">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Monitor;