import { useContext, useEffect } from "react";
import { myContext } from "../context/AppContext";
import Navbar from "../components/Navbar";


const LeaveApply = () => {
  const { subform, setSubform } = useContext(myContext);

  const handlleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const submitedData = Object.fromEntries(formData.entries());
    let isDuplicate = subform.some(
      (data) => data.id === submitedData.id && data.FromDate === submitedData.FromDate
    );
    if (isDuplicate) {
      alert('Allready submited data!');
      return;
    } else {
      setSubform(
        [...subform, { ...submitedData, status: "pending.." }])
    }
    alert('Form submitted!')
    e.target.reset();
  }
  useEffect(() => {
    localStorage.setItem("leaveReqForm", JSON.stringify(subform));
  }, [subform])


  return (
    <>
      <Navbar />
      <div className="h-screen mt-3 w-full flex justify-center items-center">
        <form onSubmit={handlleSubmit} className=" w-72 lg:w-96 flex flex-col h-auto rounded-2xl p-8 gap-2 bg-white">
          <label className="  font-bold">Id</label>
          <input className="border" name="id" type="text" />
          <label className="  font-bold">Your name</label>
          <input className="border" name="name" type="text" placeholder="Type your name" />
          <label className="  font-bold">Leave type</label>
          <select name="LeaveType" className="border">
            <option value="">---select leave type---</option>
            <option value="casual">Casual leave</option>
            <option value="without paid">Leave without pay</option>
            <option value="sick">Sick leave</option>
          </select>
          <label className="  font-bold">From date</label>
          <input className="border" name="FromDate" type="date" />
          <label className="  font-bold">To date</label>
          <input className="border" name="ToDate" type="date" />
          <label className="  font-bold">Reason</label>
          <textarea className="border" name="Reason"></textarea>
          <button className="p-2 font-bold border rounded bg-lime-600 cursor-pointer active:scale-95">Submit</button>
        </form>
      </div>
     
    </>
  )
}
export default LeaveApply;


