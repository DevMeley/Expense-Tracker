import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

function Budgets() {
  return (
    <div className="flex flex-col justify-between gap-16">
      <div className=" flex justify-between items-center ">
        <span className="font-bold lg:text-2xl">Budgets</span>
        <button className="flex items-center gap-2 p-2 bg-blue-900 text-white rounded-lg lg:w-32 lg:justify-center">
          <FaPlus /> Add
        </button>
      </div>
      <div className=" flex flex-col gap-4">
        <div className="w-full bg-gray-200 p-4 rounded-lg dark:bg-gray-800">
            <span>Limit: #40,000</span>
        </div>
      </div>
    </div>
  );
}

export default Budgets;
