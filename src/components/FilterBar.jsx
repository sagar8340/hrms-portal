import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { myContext } from '../context/AppContext';

const FilterBar = () => {
  const { employee, subform, setFilterEmp } = useContext(myContext);
  const [allinput, setAllinput] = useState({
    surch: "",
    status: "All",
    department: "All"
  })

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setAllinput({ ...allinput, [name]: value })
  }

  useEffect(() => {
    const updatedEmployees = employee.map((item) =>
      subform.some(data =>
        data.id === item.id && data.status === "Approved") ? { ...item, status: "On Leave" } : item
    );

    const selectedEmp = updatedEmployees.filter((data) =>
      (
        data.name.toLowerCase().includes(allinput.surch.toLowerCase()) ||
        data.id.toLowerCase().includes(allinput.surch.toLowerCase())
      ) &&
      (allinput.status === "All" || allinput.status === data.status) &&
      (allinput.department === "All" || allinput.department === data.department)
    );

    setFilterEmp(selectedEmp);

  }, [employee, subform, allinput]);
  // console.log(filterEmp)
  return (
    <div className='w-[96%] lg:w-[55%] mx-auto h-30 mb-8 rounded-2xl mt-5 flex flex-wrap items-center gap-1 p-2'>
      <input onChange={inputHandler} type="text" name="surch" value={allinput.surch} placeholder='search employee'
       className='border-2 w-[45%] bg-white border-green-400 rounded-lg p-2 text-[0.9rem] min-w-48 ' />

      <select onChange={inputHandler} name="status" className='border-2 bg-white border-green-400 w-[32%] min-w-32 rounded-lg p-2 text-[0.9rem]'>
        <option value="All">All</option>
        <option value="Present">Present</option>
        <option value="On Leave">On Leave</option>
        <option value="Pending">Pending</option>
      </select>

      <select onChange={inputHandler} name="department" className='border-2 bg-white border-green-400 w-[43%] min-w-36 rounded-lg p-2 text-[0.9rem]'>
        <option value="All">All</option>
        <option value="Production">Production</option>
        <option value="Quality Control">Quality Control</option>
        <option value="Maintenance">Maintenance</option>
        <option value="Logistics">Logistics</option>
        <option value="HR & Admin">HR & Admin</option>
      </select>
    </div>
  )
}
export default FilterBar;
