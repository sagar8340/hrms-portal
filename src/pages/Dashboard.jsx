import { useContext } from "react";
import EmpCard from "../components/EmpCard";
import EmpTable from "../components/EmpTable";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import { myContext } from "../context/AppContext";
import FilterBar from "../components/FilterBar";

const Dashboard = () => {
  const { cardData } = useContext(myContext);
  // console.log(cardData)
  return (
    <>
      <div className="h-auto w-full overflow-x-hidden">
        <Navbar />
        <StatsCard />
        <FilterBar />
        {cardData ? <EmpCard /> : null}
        <EmpTable />
        <footer className="text-center text-xs text-gray-400 py-4 mt-6 border-t border-gray-200">
          © 2026 HRMS Portal • Built with React & Tailwind CSS
        </footer>
      </div>
    </>
  )
}

export default Dashboard;