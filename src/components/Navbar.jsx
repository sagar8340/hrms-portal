import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarPlus, LayoutDashboard, ShieldAlert, UserRound, Menu, X } from "lucide-react";
import Sidepannel from './Sidepannel';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    function sidebarfun() {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    }

    return (
        <>
         
            <div className='fixed top-3 left-0 right-0 mx-auto flex justify-between items-center rounded-2xl px-8 bg-white w-[92%] shadow-md z-30'>
                
                <button onClick={sidebarfun}
                    className={`lg:hidden fixed top-7 z-50 text-2xl font-bold transition-all duration-300 ease-in-out
                     ${isOpen ? 'left-48 text-black' : 'left-11 text-black'}`}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <ul className='flex justify-center items-center gap-16 h-14 px-5 '>

                    {/* SVG Logo */}
                    <svg className="w-12 h-12 drop-shadow-md m-3" viewBox="0 0 40 40" fill="none">
                        <defs>
                            <linearGradient id="beeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#F59E0B" />
                                <stop offset="50%" stopColor="#F97316" />
                                <stop offset="100%" stopColor="#EC4899" />
                            </linearGradient>
                        </defs>

                        <path
                            d="M20 2 L35 11 V29 L20 38 L5 29 V11 Z"
                            fill="url(#beeGrad)"
                        />

                        <circle cx="20" cy="16" r="4" fill="#FFFFFF" />
                        <path
                            d="M13 28 C13 24 16 22 20 22 C24 22 27 24 27 28"
                            stroke="#FFFFFF"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                        />
                    </svg>

                    <div
                        className={`fixed top-0 h-56 w-56 transition-all duration-300 z-40 ${isOpen ? "left-8" : "-left-48"}`}>
                        <Sidepannel />
                    </div>

                    <Link to="/"
                        className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium text-[1.3rem]">
                        <LayoutDashboard className="w-6 h-6 text-blue-500" />
                        <span>Dashboard</span>
                    </Link>

                    <Link to="/leaveapply"
                        className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium text-[1.3rem]">
                        <CalendarPlus className="w-6 h-6 text-blue-500" />
                        <span>Leave Apply</span>
                    </Link>

                    <Link to="/adminpage"
                        className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium text-[1.3rem]">
                        <ShieldAlert size={28} color="#dc2626" />
                        <span>Admin</span>
                    </Link>

                </ul>

                <div className='w-12 h-12 shrink-0 flex justify-center bg-gray-300 items-center rounded-full'>
                    <UserRound size={24} />
                </div>
            </div>
        </>
    );
};

export default Navbar;