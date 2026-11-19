import React, { useContext } from 'react';
import { myContext } from '../context/AppContext';

const MobileEmpCard = () => {
  const { filterEmp, setCardData } = useContext(myContext);

  return (
    <div className="md:hidden">
      {filterEmp.map((data) => (
        <div
          key={data.id}
          onClick={() => setCardData(data)}
          className="border-2 border-green-400 rounded-lg overflow-hidden cursor-pointer mb-3"
        >
          <div className="bg-amber-100 p-2 flex justify-between font-bold border-b border-green-400">
            <span>{data.name}</span>
            <span>{data.id}</span>
          </div>

          <div className="p-3 border-b-2 border-b-blue-800 space-y-1 text-sm">
            <p><b>Department:</b> {data.department}</p>
            <p><b>Designation:</b> {data.role}</p>

            <div className="flex justify-between items-center pt-2">
              <span className={`px-3 font-bold rounded-2xl ${
                data.status === 'Present' ? 'bg-green-200' :
                data.status === 'Absent' ? 'bg-red-200' : 'bg-yellow-200'
              }`}>
                {data.status}
              </span>
              <span className="px-3 bg-blue-500 text-white font-bold rounded-2xl">
                View details
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileEmpCard;