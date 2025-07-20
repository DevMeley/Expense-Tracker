import { ImCancelCircle } from "react-icons/im";
import { makeAuthenticatedRequest } from "../../middleware/api";
import { useAuth } from "../../Utils/OauthContext";
import { auth } from "../../firebase";

function AddCategory({ closeAddCategoryModal, setAddCategoryModal, name, setName }) {
  const handleAddCategory = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
     if (!user) {
    console.log('User not authenticated')
  }

  
  const token = await user.getIdToken();
    try {
      const res = await fetch("https://expense-tracker-api-gu6c.onrender.com/v1/categories", {
        method: "POST",
        body: JSON.stringify({name}),
       headers:{
        'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
       }
      });
      const data = await res.json()
      console.log(data);
      console.log(typeof(name))
      setAddCategoryModal(false)
    } catch (error) {
      console.log(error.massage);
    }
  };

  return (
    <div>
      <div className="bg-white p-4 flex flex-col gap-6 rounded-lg shadow-2xl absolute top-20 right-0 left-0 lg:w-92 lg:left-60 dark:bg-gray-800">
        <div className="flex justify-between">
          <span className="font-bold">Add a Category</span>
          <button onClick={closeAddCategoryModal}>
            <ImCancelCircle />
          </button>
        </div>
        <form onSubmit={handleAddCategory} className="flex flex-col gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
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

export default AddCategory;
