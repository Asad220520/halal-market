import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { slug } = useParams();

  return (
    <div>
      Категория: <strong>{slug}</strong>
    </div>
  );
}
