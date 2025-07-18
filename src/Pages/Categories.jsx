import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import AddCategory from "../Components/AddCategory";

function Categories() {
  const [name, setName] = useState("");
  const [addCategoryModal, setAddCategoryModal] = useState(false);
  const [categories, setCategories] = useState([]);

  const openAddCategoryModal = () => {
    setAddCategoryModal(true);
  };
  const closeAddCategoryModal = () => {
    if (addCategoryModal) {
      setAddCategoryModal(false);
    }
  };

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
          setCategories(data);
        }
      } catch (error) {
        console.log(error.massage);
      }
    };
    handleCategories();
  }, []);

  return (
    <div className="flex flex-col justify-between gap-16 relative">
      <div className=" flex justify-between items-center ">
        <span className="font-bold lg:text-2xl">Categories</span>
        <button
          onClick={openAddCategoryModal}
          className="flex items-center gap-2 p-2 bg-blue-900 text-white rounded-lg lg:w-32 lg:justify-center"
        >
          <FaPlus /> Add
        </button>
      </div>
      <div className=" flex flex-col lg:grid grid-cols-2 gap-4">
      {categories.map((cats) => (
          <div className="flex items-center justify-between bg-white p-4 h-24 rounded-lg dark:bg-gray-800">
            <span className="text-lg">{cats.name}</span>
            <div className="flex items-center gap-4">
              <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg hover:border border-gray-400">
                <MdModeEditOutline className="text-blue-800" />
              </button>
              <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg hover:border border-gray-400">
                <MdDelete className="text-red-600" />
              </button>
            </div>
          </div>
      ))}
      </div>
      {addCategoryModal && (
        <AddCategory
          closeAddCategoryModal={closeAddCategoryModal}
          name={name}
          setName={setName}
          setAddCategoryModal={setAddCategoryModal}
        />
      )}
    </div>
  );
}

export default Categories;
