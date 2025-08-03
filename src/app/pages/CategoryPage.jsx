import { useState } from "react";
import CategoryCard from "../components/ui/CategoryCard/CategoryCard";
import axios from "axios";
import API_BASE_URL from "../../config/api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
   const { id,  } = useParams();
  const [categories, setCategories] = useState([]);
  async function getCategories() {
    let res = await axios.get(`${API_BASE_URL}/categories/${id}/`);
    setCategories(res.data.subcategories);
  }
  useEffect(() => {
    getCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container  mx-auto px-4  pb-4 sm:pb-12">
      <div className='flex justify-center flex-wrap gap-2 items-center sm:gap-4  sm:items-start"'>
        {categories.map((el, id) => (
          <CategoryCard el={el} key={id} />
        ))}
      </div>
    </div>
  );
}
