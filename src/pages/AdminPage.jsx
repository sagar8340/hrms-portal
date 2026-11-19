import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../components/Navbar';
import { myContext } from '../context/AppContext';

const AdminPage = () => {

    const { subform, setSubform } = useContext(myContext);

    // approved handler function..
    const ApprovedHandle = (id, FromDate) => {

        const updatedleave = subform.map((item) => item.id === id && item.FromDate === FromDate ?
            { ...item, status: "Approved" } : item
        );
        setSubform(updatedleave);

        localStorage.setItem("leaveReqForm", JSON.stringify(updatedleave));
    }

    // Reject handler function..
    const RejectHandle = (id, FromDate) => {
        const updatedleave = subform.map((item) => item.id === id && item.FromDate === FromDate ?
            { ...item, status: "Reject" } : item
        );
        setSubform(updatedleave);

        localStorage.setItem("leaveReqForm", JSON.stringify(updatedleave));
    }

    return (
        <>
            <Navbar />
            <div className="p-6 mt-12 w-[92%] h-screen mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">Leave Approvals (Admin)</h2>
                <div className='flex gap-4 flex-wrap  w-full'>
                    {subform.length === 0 ? (
                        <p className="text-slate-400">No pending request.</p>
                    ) : (
                        subform.map((card) => (
                            <div key={`${card.id}-${card.FromDate}`} className="w-96 bg-white border border-slate-200 rounded-xl p-2 shadow-sm">
                                {/* Header: Name aur Status */}
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="font-semibold text-slate-800 text-[0.9rem] lg:text-[1.3rem]">{card.id}</h3>
                                    <h3 className="font-semibold text-slate-800 text-[0.9rem] lg:text-[1.3rem]">{card.name}</h3>
                                    <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-amber-100 text-amber-700">
                                        {card.status}
                                    </span>
                                </div>

                                {/* Leave Details */}
                                <div className="text-sm text-slate-600 space-y-1.5 mb-4">
                                    <p><span className="font-medium text-slate-500">Leave Type:</span>{card.LeaveType}</p>
                                    <p><span className="font-medium text-slate-500">Dates:</span> {card.FromDate} to {card.ToDate}</p>
                                    <p><span className="font-medium text-slate-500">Reason:</span>{card.Reason}</p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-3 border-t border-slate-100">
                                    <button onClick={() => ApprovedHandle(card.id, card.FromDate)} className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors">
                                        Approve
                                    </button>
                                    <button onClick={() => RejectHandle(card.id, card.FromDate)} className="flex-1 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-sm font-medium transition-colors">
                                        Reject
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default AdminPage;

