import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

function Categories() {
  return (
    <div className="flex flex-col justify-between gap-16">
      <div className=" flex justify-between items-center ">
        <span className="font-bold lg:text-2xl">Categories</span>
        <button className="flex items-center gap-2 p-2 bg-blue-900 text-white rounded-lg lg:w-32 lg:justify-center">
          <FaPlus /> Add{" "}
        </button>
      </div>
      <div className=" flex flex-col lg:grid grid-cols-2 gap-4">
        <div className="flex items-center justify-between bg-white p-4 h-24 rounded-lg dark:bg-gray-800">
          <span className="text-lg">Food</span>
          <div className="flex items-center gap-4">
            <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg hover:border border-gray-400">
              <MdModeEditOutline className="text-blue-800" />
            </button>
            <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg hover:border border-gray-400">
              <MdDelete className="text-red-600" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white p-4 h-24 rounded-lg dark:bg-gray-800">
          <span className="text-lg">Food</span>
          <div className="flex items-center gap-4">
            <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg hover:border border-gray-400">
              <MdModeEditOutline className="text-blue-800" />
            </button>
            <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg hover:border border-gray-400">
              <MdDelete className="text-red-600" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white p-4 h-24 rounded-lg dark:bg-gray-800">
          <span className="text-lg">Food</span>
          <div className="flex items-center gap-4">
            <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg hover:border border-gray-400">
              <MdModeEditOutline className="text-blue-800" />
            </button>
            <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg hover:border border-gray-400">
              <MdDelete className="text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
