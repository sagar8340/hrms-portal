const initialEmployees = [
  {
    id: "EMP101",
    name: "Aman Sharma",
    department: "Production",
    role: "Machine Operator",
    status: "Present",
    punchInTime: "08:30 AM",
    punchOutTime: "-",
    presentDays: 22,
    absentDays: 2,
  },
  {
    id: "EMP102",
    name: "Pooja Verma",
    department: "Quality Control",
    role: "Quality Inspector",
    status: "Present",
    punchInTime: "-",
    punchOutTime: "-",
    presentDays: 20,
    absentDays: 1,
  },
  {
    id: "EMP103",
    name: "Rajesh Kumar",
    department: "Maintenance",
    role: "Technician",
    status: "Present",
    punchInTime: "08:45 AM",
    punchOutTime: "-",
    presentDays: 24,
    absentDays: 0,
  },
  {
    id: "EMP104",
    name: "Sunil Patil",
    department: "Logistics",
    role: "Forklift Driver",
    status: "Absent",
    punchInTime: "-",
    punchOutTime: "-",
    presentDays: 18,
    absentDays: 4,
  },
  {
    id: "EMP105",
    name: "Neha Singh",
    department: "HR & Admin",
    role: "HR Executive",
    status: "Present",
    punchInTime: "09:00 AM",
    punchOutTime: "06:00 PM",
    presentDays: 25,
    absentDays: 1,
  },
];
//  save raw data to local Storage.
if (!localStorage.getItem("employeeData")) {
  localStorage.setItem("employeeData", JSON.stringify(initialEmployees));
}

// using setTimeout & promises I have created async data
export function getEmployee(){
 return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const data = JSON.parse(localStorage.getItem("employeeData")) || [];
      resolve(data);
    },1000)
  });
}
