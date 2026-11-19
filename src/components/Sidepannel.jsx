import React from 'react'
import { Link } from 'react-router-dom';
import { CalendarPlus, LayoutDashboard, ShieldAlert } from "lucide-react";


const Sidepannel = () => {
    return (
        <div className='absolute flex gap-5 flex-col top-0 left-0 z-50 w-48 p-4 rounded-2xl h-72  bg-[#deff87]'>
            {/* here is svg logo svg start  */}
            <svg className="w-14 h-14 drop-shadow-md" viewBox="0 0 40 40" fill="none">
                <defs>
                    <linearGradient id="beeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="50%" stopColor="#F97316" />
                        <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                </defs>

                {/* Hexagon Honeycomb */}
                <path
                    d="M20 2 L35 11 V29 L20 38 L5 29 V11 Z"
                    fill="url(#beeGrad)"
                />

                {/* Protected Core / Human Icon inside */}
                <circle cx="20" cy="16" r="4" fill="#FFFFFF" />
                <path
                    d="M13 28 C13 24 16 22 20 22 C24 22 27 24 27 28"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />
            </svg>
            {/* here is svg logo svg end  */}



            <Link to="/"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium text-[1.2rem]">
                <LayoutDashboard className="w-6 h-6 text-blue-500" />
                <span>Dashboard</span>
            </Link>

            <Link to="/leaveapply"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium text-[1.2rem]">
                <CalendarPlus className="w-6 h-6 text-blue-500" />
                <span>Leave Apply</span>
            </Link>


            <Link to="/adminpage"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium text-[1.2rem]">
                <ShieldAlert size={28} color="#dc2626" />
                <span>Admin</span>
            </Link>

        </div>
    )
}
export default Sidepannel;
