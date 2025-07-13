import { ImCancelCircle } from "react-icons/im";
import { makeAuthenticatedRequest } from "../../middleware/api";

function AddCategory({ closeAddCategoryModal,setAddCategoryModal, category, setCategory }) {
  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      const categoryData = await makeAuthenticatedRequest("/v1/categories", {
        method: "POST",
        // headers:{"Content-Type": "application/json"}
      });
      if (response.ok) {
        console.log("Category successfully added")
      }
      console.log(categoryData);
      setAddCategoryModal(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      (
      <div className="bg-white p-4 flex flex-col gap-6 rounded-lg shadow-2xl absolute top-20 right-0 left-0 lg:w-92 lg:left-60">
        <div className="flex justify-between">
          <span className="font-bold">Add a Category</span>
          <button onClick={closeAddCategoryModal}>
            <ImCancelCircle />
          </button>
        </div>
        <form onSubmit={handleAddCategory} className="flex flex-col gap-4">
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-gray-100 p-2 rounded-sm outline-0"
            placeholder="e.g Food"
          />
          <button className="bg-blue-800 p-2 rounded-lg text-white">
            Add Category
          </button>
        </form>
      </div>
      )
    </div>
  );
}

export default AddCategory;
