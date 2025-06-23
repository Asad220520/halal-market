import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      Детальная страница товара: <strong>{id}</strong>
    </div>
  );
}
