import React from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Логика регистрации (запрос на сервер и т.п.)

    // Если успешно — переходим на профиль
    navigate("/profile");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Регистрация</h1>
      <input type="text" placeholder="Имя" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Пароль" required />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
