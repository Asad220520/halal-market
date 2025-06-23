import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <h1 className="text-9xl font-extrabold text-red-500 animate-pulse">
        404
      </h1>
      <p className="text-2xl md:text-3xl font-semibold mt-4 mb-2 text-gray-700">
        Упс! Страница не найдена
      </p>
      <p className="text-gray-500 mb-8 max-w-md">
        К сожалению, страница, которую вы ищете, не существует или была
        перемещена.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary-dark transition"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
