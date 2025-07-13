import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import AddBudget from "../Components/AddBudget";
import { useState } from "react";

function Budgets() {
  const [addBudgetModal, setAddBudgetModal] = useState(false)
    
      const openAddBudgetModal = ()=>{
        setAddBudgetModal(true)
      }
      const closeAddBudgetModal = () =>{
        if (addBudgetModal) {
          setAddBudgetModal(false)
        }
      }
  return (
    <div className="flex flex-col justify-between gap-16">
      <div className=" flex justify-between items-center ">
        <span className="font-bold lg:text-2xl">Budgets</span>
        <button onClick={openAddBudgetModal} className="flex items-center gap-2 p-2 bg-blue-900 text-white rounded-lg lg:w-32 lg:justify-center">
          <FaPlus /> Add
        </button>
      </div>
      <div className=" flex flex-col gap-4">
        <div className="w-full bg-white p-4 rounded-lg dark:bg-gray-800">
            <span>Limit: #40,000</span>
        </div>
      </div>
      {addBudgetModal&&
      <AddBudget closeAddBudgetModal={closeAddBudgetModal}/>
      }
    </div>
  );
}

export default Budgets;
