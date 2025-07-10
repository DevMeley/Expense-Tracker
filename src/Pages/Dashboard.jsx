import AreaChartComponent from "../Components/AreaChartComponent";
import PieChartComponent from "../Components/PieChartComponent";
import { FaMoneyBillAlt } from "react-icons/fa";
import { SiActualbudget } from "react-icons/si";
import RecentExpenses from "../Components/RecentExpenses";

function Dashboard() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row justify-between">
      <div className="flex flex-col gap-16 lg:flex-3 ">
        <span className="font-bold lg:text-2xl">Dashboard</span>
        <div className="flex justify-between items-center gap-2">
          <div className="p-4 bg-gray-200 dark:bg-gray-600 rounded-lg h-full lg:w-64 ">
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 lg:gap-4 lg:text-lg">
                <FaMoneyBillAlt className="text-green-600 size-5 lg:size-10" />
                Total Expenses
              </span>
              <span className="text-2xl font-bold text-gray-900 dark:text-gray-200">#400,000</span>
              <span className="text-xs font-light text-gray-500 dark:text-gray-300">
                This month
              </span>
            </div>
          </div>
          <div className="p-4 bg-gray-200 dark:bg-gray-600 rounded-lg h-full lg:w-64">
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 lg:gap-4 lg:text-lg">
                <SiActualbudget className="text-red-600 size-5 lg:size-10" />
                Budget Limit
              </span>
              <span className="text-2xl font-bold text-gray-900 dark:text-gray-200">#400,000</span>
              <span className="text-xs font-light text-gray-500 dark:text-gray-300">
                This month
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="p-4 w-full bg-gray-200 dark:bg-gray-800 rounded-lg flex flex-col gap-4">
            <span>This Month</span>
            <AreaChartComponent />
          </div>
          <div className="p-4 w-full bg-gray-200 dark:bg-gray-800 rounded-lg flex flex-col gap-4">
            <span>Expenses per category</span>
            <div className="flex items-center gap-4">
              <PieChartComponent />
              <div className="">
                <span> 🍎 Food</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col w-full lg:flex-2 h-full bg-gray-200 dark:bg-gray-800 rounded-lg p-4 ">
        {<RecentExpenses/>}
      </div>
    </div>
  );
}

export default Dashboard;
