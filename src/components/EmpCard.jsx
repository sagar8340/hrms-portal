import React, { useContext } from 'react'
import { X, UserRound } from 'lucide-react';
import { myContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
const EmpCard = () => {
    const { cardData, setCardData } = useContext(myContext);
    return (
        <>
            <div className="fixed inset-0 z-50 flex  items-center justify-center ">
                <div className='h-64 w-72 rounded border p-2 bg-white relative z-10'>
                    {/* profile section Start */}
                    <div className=' w-[94%] inline-block'>
                        <div className='flex gap-1 items-center p-1'>
                            <span className='h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center'>
                                <UserRound size={25} />
                            </span>
                            <div>
                                <h1 className='text-[1rem] font-bold'>{cardData.name}</h1>
                                <p className='text-[0.9rem]'>{cardData.role}<span className='font-bold text-[0.9rem]'>{cardData.id}</span></p>
                            </div>
                        </div>

                    </div>
                    <button className='absolute mt-0 ml-0 cursor-pointer'
                        onClick={() => setCardData(null)}
                    >
                        <X className="w-5 h-5" />
                    </button>
                    {/* profile section End */}
                    {/* Horizontal line */}
                    <div className='w-full border'></div>
                    {/* status */}
                    <div className='flex w-full justify-between mt-2'>
                        <div>
                            <h1 className='text-[0.9rem]'>Leave status</h1>
                            <p className='text-[0.9rem]'>{cardData.status}</p>
                        </div>
                        <div>
                            <h1 className='text-[0.9rem]'>Present Days</h1>
                            <p className='text-[0.9rem]'>{cardData.presentDays}</p>
                        </div>
                        <div>
                            <h1 className='text-[0.9rem]'>Absent Days</h1>
                            <p className='text-[0.9rem]'>{cardData.absentDays}</p>
                        </div>
                    </div>
                    {/* Time Table section */}
                    <h1 className='m-1 font-bold'>Daily Timing</h1>
                    <table className='m-auto'>
                        <thead>
                            <tr className='border-2'>
                                <th className='border-2 px-4'>Punch in</th>
                                <th className='border-2 px-4'>Punch out</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border-2 px-4'>{cardData.punchInTime}</td>
                                <td className='border-2 px-4'>{cardData.punchOutTime}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* apply for leave button section */}
                    <div className='flex h-12 w-full justify-end items-end'>
                        <Link
                            to="/leaveapply"
                            className='p-2 text-[0.9rem] bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600'
                        >
                            Apply for leave
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EmpCard;
