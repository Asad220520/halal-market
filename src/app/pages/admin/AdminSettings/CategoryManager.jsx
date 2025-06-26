import React, { useState } from "react";
import { Trash2, Pencil, Plus } from "lucide-react";

const CategoryManager = () => {
  const [categories, setCategories] = useState([
    "Замороженные продукты",
    "Здоровье и красота",
    "БАД и витамины",
  ]);
  const [newCategory, setNewCategory] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAdd = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
    }
  };

  const handleDelete = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(categories[index]);
  };

  const saveEdit = () => {
    const updated = [...categories];
    updated[editIndex] = editValue.trim();
    setCategories(updated);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="p-6 rounded-xl shadow-sm space-y-4">
      <h2 className="text-xl font-semibold">Управление категориями</h2>

      <div className="flex gap-2">
        <input
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Новая категория"
          className="border outline-none border-gray-400 rounded px-3 py-2 w-full"
        />
        <button
          onClick={handleAdd}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-1"
        >
          <Plus size={18} />
          Добавить
        </button>
      </div>

      <ul className="space-y-2">
        {categories.map((cat, index) => (
          <li
            key={index}
            className="flex justify-between items-center px-3 py-2 rounded border border-gray-400 text-gray-700"
          >
            {editIndex === index ? (
              <input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onBlur={saveEdit}
                autoFocus
                className="border outline-none border-gray-400 rounded px-3 py-2 w-full"
              />
            ) : (
              <span>{cat}</span>
            )}
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(index)}
                className="text-blue-500 hover:text-blue-700"
              >
                <Pencil size={16} />
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryManager;
