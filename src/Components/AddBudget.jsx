import { ImCancelCircle } from "react-icons/im";
import { auth } from "../../firebase";
import { useState } from "react";

function AddBudget({ closeAddBudgetModal, setAddBudgetModal, setLimit, limit}) {
const [budgetlimitError, setBudgetLimitError] = useState("")

  const handleAddBudgetLimit = async (e) => {
      e.preventDefault();
      const user = auth.currentUser;
       if (!user) {
      console.log('User not authenticated')
    }
    const numericLimit = Number(limit);
  if (!limit || isNaN(numericLimit) || numericLimit <= 0) {
      setBudgetLimitError("Please enter a valid budget limit.");
      return;
    }
    const token = await user.getIdToken();
      try {
        const res = await fetch("https://expense-tracker-api-gu6c.onrender.com/v1/budgetlimit", {
          method: "POST",
          body: JSON.stringify({limit: numericLimit }),
         headers:{
          'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
         }
        });
        const data = await res.json()
        console.log(data);
        console.log(typeof(data))
        setAddBudgetModal(false)
      } catch (error) {
        console.log(error.massage);
      }
    };
  return (
    <div>
      <div className="bg-white p-4 flex flex-col gap-6 rounded-lg shadow-2xl absolute top-40 right-2 left-2 lg:w-92 lg:left-60  dark:bg-gray-800">
        <div className="flex justify-between">
          <span className="font-bold">Add a Overall Budget Limit</span>
          <button onClick={closeAddBudgetModal}>
            <ImCancelCircle />
          </button>
        </div>
        <form onSubmit={handleAddBudgetLimit} className="flex flex-col gap-4">
          <input
          value={limit}
          onChange={(e)=> setLimit(e.target.value)}
            className="bg-gray-100 p-2 rounded-sm outline-0 dark:bg-gray-400"
            placeholder="e.g 200,000"
          />
          {budgetlimitError && <span className="text-red-600 text-xs">{budgetlimitError}</span>}
          <button className="bg-blue-800 p-2 rounded-lg text-white">
            Add Limit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBudget;
