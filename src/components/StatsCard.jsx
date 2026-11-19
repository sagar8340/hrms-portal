import { useContext } from "react";
import { myContext } from "../context/AppContext";
import { Users, CalendarOff, Clock, CalendarDays } from 'lucide-react';

const StatsCard = () => {
    const { employee, subform } = useContext(myContext);
    const pendingData = subform.filter((p) => p.status === "pending..")
    const Onleave = subform.filter((p) => p.status === "Approved")

    return (
        <>
            <div className='w-full max-w-5xl lg:max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5 p-2 mt-20'>
                <div className=' rounded bg-blue-200'>
                    <h1 className='ml-2 mt-3 font-bold text-[1rem] lg:text-[1.2rem]'>Total Employees</h1>
                    <div className='flex justify-around items-center h-12'>
                        <span className='text-[1.2rem]'>{employee.length}</span>
                        <span><Users size={28} strokeWidth={2.2} /></span>
                    </div>
                </div>

                <div className=' rounded bg-green-200'>
                    <h1 className='ml-2 mt-3 font-bold text-[1rem] lg:text-[1.2rem]'>On Leave Today</h1>
                    <div className='flex justify-around items-center h-12'>
                        <span className='text-[1.2rem]'>{Onleave.length}</span>
                        <span><CalendarOff size={28} className="text-red-500" /></span>
                    </div>
                </div>

                <div className=' rounded bg-amber-200'>
                    <h1 className='ml-2 mt-3 font-bold text-[1rem] lg:text-[1.2rem]'>Pending Approvals</h1>
                    <div className='flex justify-around items-center h-12'>
                        <span className='text-[1.2rem]'>{pendingData.length}</span>
                        <span><Clock size={28} className="text-amber-500" /></span>
                    </div>
                </div>

                <div className=' rounded bg-purple-200'>
                    <h1 className='ml-2 mt-3 font-bold text-[1rem] lg:text-[1.2rem]'>Leave Available</h1>
                    <div className='flex justify-around items-center h-12'>
                        <span className='text-[1.2rem]'>15</span>
                        <span><CalendarDays size={28} className="text-blue-500" /></span>
                    </div>
                </div>
            </div>
          

        </>

    )
}
export default StatsCard;
