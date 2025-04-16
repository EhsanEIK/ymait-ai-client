import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const UPS = () => {
    const allUPSData = useLoaderData();

    let i = 1;

    // handler for delete pc data from db
    const handleDeleteData = id => {
        fetch(`https://ymait-ai-server.vercel.app/upsInfo/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Deleted UPS Information Successfully.');
                }
            })
    }

    return (
        <div>
            {/* Befor Table Part */}
            <div className='flex gap-5 justify-between mb-3'>
                <h1 className='text-2xl font-bold'>UPS Information List</h1>
                <div className='flex gap-3'>
                    <Link to={'/addUPSInfo'}>
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
                            <th>Supplier Name</th>
                            <th>Purchase Date (D-M-Y)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            allUPSData.map(upsData => <tr key={upsData?._id} className="hover">
                                <th>{i++}</th>
                                <td>{upsData?.brandName} {upsData?.model}</td>
                                <td>{upsData?.userName}</td>
                                <td>{upsData?.email}</td>
                                <td>{upsData?.officeID}</td>
                                <td>{upsData?.department}</td>
                                <td>{upsData?.supplierName}</td>
                                <td>{upsData?.purchaseDate}</td>
                                <td>
                                    <button onClick={() => { handleDeleteData(upsData?._id) }} className="btn bg-red-500 text-white btn-sm rounded-md hover:bg-red-600">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UPS;