import { ImCancelCircle } from "react-icons/im";

function AddBudget({ closeAddBudgetModal}) {
  return (
    <div>
      <div className="bg-white p-4 flex flex-col gap-6 rounded-lg shadow-2xl absolute top-40 right-2 left-2 lg:w-92 lg:left-60  dark:bg-gray-800">
        <div className="flex justify-between">
          <span className="font-bold">Add a Category</span>
          <button onClick={closeAddBudgetModal}>
            <ImCancelCircle />
          </button>
        </div>
        <form className="flex flex-col gap-4">
          <input
            className="bg-gray-100 p-2 rounded-sm outline-0 dark:bg-gray-400"
            placeholder="e.g Food"
          />
          <button className="bg-blue-800 p-2 rounded-lg text-white">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBudget;
