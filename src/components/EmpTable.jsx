import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../context/AppContext';
import Spinner from "./Spinner";
import MobileEmpCard from './MobileEmpCard';


const EmpTable = () => {
    const { filterEmp, setCardData } = useContext(myContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [filterEmp]);
    return (
        <div className='w-[92%] h-auto bg-white rounded p-4 mt-4 mx-auto'>
            <h1 className='text-[1.3rem] font-bold mb-2.5'>Employee table</h1>
            {loading ? (
                <div className="w-full py-16 flex items-center justify-center">
                    <Spinner />
                </div>
            ) : filterEmp.length === 0 ? (
                <div className="w-full py-16 flex items-center justify-center">
                    <h1>No employees!</h1>
                </div>
            )
                : (
                    <>
                        <MobileEmpCard />

                        <table className='w-full hidden md:table'>
                            <thead>
                                <tr className='border-3 border-green-400 rounded-lg p-1 bg-amber-100'>
                                    <th className='p-2 whitespace-nowrap'>Employee Name</th>
                                    <th className='p-2 whitespace-nowrap'>Employee Code</th>
                                    <th className='p-2 whitespace-nowrap'>Department</th>
                                    <th className='p-2 whitespace-nowrap'>Designation</th>
                                    <th className='p-2 whitespace-nowrap'>Leave Status</th>
                                    <th className='p-2 whitespace-nowrap'>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filterEmp.map((data) => (
                                    <tr
                                        key={data.id}
                                        className='text-center cursor-pointer hover:bg-gray-50'
                                        onClick={() => setCardData(data)}
                                    >
                                        <td className='border-b border-b-blue-800 p-2 whitespace-nowrap'>{data.name}</td>
                                        <td className='border-b border-b-blue-800 p-2 whitespace-nowrap'>{data.id}</td>
                                        <td className='border-b border-b-blue-800 p-2 whitespace-nowrap'>{data.department}</td>
                                        <td className='border-b border-b-blue-800 p-2 whitespace-nowrap'>{data.role}</td>
                                        <td className='border-b border-b-blue-800 p-2 whitespace-nowrap'>
                                            <span className={
                                                `px-3 font-bold rounded-2xl ${data.status === 'Present' ? 'bg-green-200'
                                                    : data.status === 'Absent' ? 'bg-red-200' :
                                                        'bg-yellow-200'}`
                                            }>
                                                {data.status}
                                            </span>
                                        </td>
                                        <td className='border-b border-b-blue-800 p-2 whitespace-nowrap'>
                                            <span className='px-3 bg-blue-500 text-white font-bold rounded-2xl'>
                                                View details
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
        </div>
    );
};

export default EmpTable;