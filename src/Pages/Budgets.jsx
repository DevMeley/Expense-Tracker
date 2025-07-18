import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import AddBudget from "../Components/AddBudget";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";

function Budgets() {
  const [addBudgetModal, setAddBudgetModal] = useState(false);
  const [limit, setLimit] = useState();
  const [limitValue, setLimitValue] = useState([])

  const openAddBudgetModal = () => {
    setAddBudgetModal(true);
  };
  const closeAddBudgetModal = () => {
    if (addBudgetModal) {
      setAddBudgetModal(false);
    }
  };

  useEffect(() => {
    const handleCategories = async () => {
      const user = auth.currentUser;
      if (!user) {
        console.log("User not authenticated");
      }
      const token = await user.getIdToken();
      try {
        const res = await fetch(
          "https://expense-tracker-api-gu6c.onrender.com/v1/budgetlimit/limit",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setLimitValue(data);
        }
      } catch (error) {
        console.log(error.massage);
      }
    };
    handleCategories();
  }, []);

  return (
    <div className="flex flex-col justify-between gap-16">
      <div className=" flex justify-between items-center ">
        <span className="font-bold lg:text-2xl">Budgets</span>
        <button
          onClick={openAddBudgetModal}
          className="flex items-center gap-2 p-2 bg-blue-900 text-white rounded-lg lg:w-32 lg:justify-center"
        >
          <FaPlus /> Add
        </button>
      </div>
      <div className=" flex flex-col gap-4">
        {limitValue.map((item)=>(
        <div className="w-full bg-white p-4 rounded-lg dark:bg-gray-800">
          <span>Limit: #{item.limit}</span>
        </div>
        ))}
      </div>
      {addBudgetModal && (
        <AddBudget
          closeAddBudgetModal={closeAddBudgetModal}
          setAddBudgetModal={setAddBudgetModal}
          limit={limit}
          setLimit={setLimit}
        />
      )}
    </div>
  );
}

export default Budgets;
