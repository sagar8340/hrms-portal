import { getEmployee } from "../data/employeeData";
import { createContext, useEffect, useState } from "react";

export const myContext = createContext(); // empty pipe 

const AppContext = (props) => {
    const [employee, setEmployee] = useState([]);
    const [cardData, setCardData] = useState(null);
     const [filterEmp, setFilterEmp] = useState([]);
     const [subform, setSubform] = useState(()=>JSON.parse(localStorage.getItem("leaveReqForm")) || []);
    useEffect(() => {
        async function fetchData() {
            const data = await getEmployee();
            setEmployee(data);
        }

        fetchData();
    }, []);

    return (
        // flowing water inside the pipe
        <myContext.Provider value={{employee,setEmployee,cardData,setCardData,
        filterEmp,setFilterEmp,subform,setSubform}}>   
            {props.children}
        </myContext.Provider>
    )
}
export default AppContext;
