import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import AddExpenses from "../Components/AddExpenses";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";

function Expenses() {
  const [addExpensesModal, setAddExpensesModal] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const openaddExpensesModal = () => {
    setAddExpensesModal(true);
  };
  const closeAddCategoryModal = () => {
    if (addExpensesModal) {
      setAddExpensesModal(false);
    }
  };

  // fetch all expenses
  useEffect(() => {
    const handleAllExpenses = async () => {
      // Authenticate
      const user = auth.currentUser;
      if (!user) {
        console.log("User not authenticated");
      }

      const token = await user.getIdToken();

      try {
        const res = await fetch(
          "https://expense-tracker-api-gu6c.onrender.com/v1/expenses",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        console.log(data);
        setExpenses(data);
      } catch (error) {
        console.log(error);
      }
    };
    handleAllExpenses();
  }, []);
  return (
    <div className="flex flex-col justify-between gap-16">
      <div className=" flex justify-between items-center">
        <span className="font-bold lg:text-2xl">Expenses</span>
        <button
          onClick={openaddExpensesModal}
          className="flex items-center gap-2 p-2 bg-blue-900 text-white rounded-lg lg:w-32 lg:justify-center"
        >
          <FaPlus /> Add
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span>Filter by</span>
          <select
            name="filter"
            className="outline-0 bg-white p-2 rounded-lg w-34 dark:bg-gray-600"
          >
            <option>All</option>
            <option value="High">Category</option>
            <option value="Medium">date</option>
          </select>
        </div>
        <div className="text-sm overflow-x-auto">
          <table className=" bg-white dark:bg-gray-800 rounded-lg lg:w-full">
            <thead>
              <tr className="border-b border-gray-400 dark:border-gray-700">
                <th className="px-2 py-2 text-left">Date</th>
                <th className="px-2 py-2 text-left">Category</th>
                <th className="px-2 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr>
                  <td className="px-4 py-2">{expense.createdAt}</td>
                  <td className="px-4 py-2">{expense.catName}</td>
                  <td className="px-4 py-2">{expense.naration}</td>
                  <td className="px-4 py-2">{expense.amount}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg hover:border border-gray-400">
                      <MdModeEditOutline className="text-blue-800" />
                    </button>
                    <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg hover:border border-gray-400">
                      <MdDelete className="text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {addExpensesModal && (
        <AddExpenses
          closeAddCategoryModal={closeAddCategoryModal}
          setAddExpensesModal={setAddExpensesModal}
          setExpenses={setExpenses}
        />
      )}
    </div>
  );
}

export default Expenses;
