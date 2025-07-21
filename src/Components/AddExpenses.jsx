import { use, useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { auth } from "../../firebase";

function AddExpenses({
  closeAddCategoryModal,
  setAddExpensesModal,
  setExpenses,
}) {
  const [catOptions, setCatOptions] = useState([]);
  const [formData, setFormData] = useState({
    catName: "",
    amount: "",
    naration: "",
  });

  // handle form submitton
  const handleAddExpenses = async (e) => {
    e.preventDefault();

    const numericAmount = Number(formData.amount);
    if (!formData.amount || isNaN(numericAmount) || numericAmount <= 0) {
      console.log("Please enter a valid budget limit.");
      return;
    }

    // Just to confirm the form is working
    console.log(formData.catName, numericAmount, formData.naration);
    console.log(typeof numericAmount);

    // Authenticate
    const user = auth.currentUser;
    if (!user) {
      console.log("User not authenticated");
    }

    const token = await user.getIdToken();

    // Now let's post to API
    try {
      const res = await fetch(
        "https://expense-tracker-api-gu6c.onrender.com/v1/expenses",
        {
          method: "POST",
          body: JSON.stringify({ ...formData, amount: numericAmount }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setExpenses(data);
      setAddExpensesModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  // fetch various categories
  useEffect(() => {
    const handleCategories = async () => {
      try {
        const res = await fetch(
          "https://expense-tracker-api-gu6c.onrender.com/v1/categories",
          {
            method: "GET",
          }
        );
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setCatOptions(data);
        }
      } catch (error) {
        console.log(error.massage);
      }
    };
    handleCategories();
  }, []);
  return (
    <div>
      <div className="bg-white p-4 flex flex-col gap-6 rounded-lg shadow-2xl absolute top-40 right-2 left-2 lg:w-92 lg:left-60 dark:bg-gray-800">
        <div className="flex justify-between">
          <span className="font-bold">Add an Expenses</span>
          <button onClick={closeAddCategoryModal}>
            <ImCancelCircle />
          </button>
        </div>
        <form onSubmit={handleAddExpenses} className="flex flex-col gap-6">
          <label className="flex flex-col gap-2">
            <span>Category</span>
            <select
              value={formData.catName}
              onChange={(e) =>
                setFormData({ ...formData, catName: e.target.value })
              }
              name="category"
              className="outline-none bg-gray-200 p-2 rounded-sm outline-0 dark:bg-gray-400"
            >
              <option value="value">category</option>
              {catOptions.map((options) => (
                <option
                  className="dark:bg-gray-600 bg-gray-200"
                  value={options.catName}
                >
                  {options.catName}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span>Amount in Naira</span>
            <input
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
              className="bg-gray-100 p-2 rounded-sm outline-0 dark:bg-gray-400"
              placeholder="e.g 2000"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Description</span>
            <input
              value={formData.naration}
              onChange={(e) =>
                setFormData({ ...formData, naration: e.target.value })
              }
              className="bg-gray-100 p-2 rounded-sm outline-0 dark:bg-gray-400"
              placeholder="What is the expense about"
            />
          </label>

          <button className="bg-blue-800 p-2 rounded-lg text-white">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddExpenses;
