import React, { useState } from "react";
import { FiUpload, FiTrash2 } from "react-icons/fi";
import adminuser from "../../assets/icons/defaultAvatar.png";

const AdminProfile = () => {
  const [photo, setPhoto] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleDeletePhoto = () => setPhoto(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
  };

  return (
    <div className="max-w-3xl mx-auto pt-36 px-4">
      {/* Фото профиля */}
      <div className="mb-8">
        <h1 className="primary text-xl font-semibold text-primary mb-4">
          Фото профиля
        </h1>
        <div className="flex items-center gap-6">
          <img
            src={photo || adminuser}
            alt="Профиль"
            className="w-24 h-24 rounded-full object-cover border"
          />
          <div className="flex flex-col gap-2">
            <label className="cursor-pointer w-fit">
              <input
                type="file"
                onChange={handlePhotoChange}
                className="hidden"
              />
              <div className="border-2 border-primary rounded px-4 py-2 text-primary flex items-center gap-2 hover:bg-primarytransition">
                <FiUpload />
                Загрузить фото
              </div>
            </label>
            {photo && (
              <button
                onClick={handleDeletePhoto}
                className="flex items-center gap-2 text-red-500 text-sm hover:underline"
              >
                <FiTrash2 />
                Удалить
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Разделитель */}
      <div className="border-b border-gray-200 mb-6" />

      {/* Форма */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="primary text-xl font-semibold text-primary mb-2">
          Данные администратора
        </h2>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="text-sm font-medium">Имя</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Введите имя"
              className="w-full p-3 mt-1 rounded bg-gray-100 outline-none"
            />
          </div>
          <div className="w-1/2">
            <label className="text-sm font-medium">Фамилия</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Введите фамилию"
              className="w-full p-3 mt-1 rounded bg-gray-100 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Электронная почта</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            className="w-full p-3 mt-1 rounded bg-gray-100 outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Телефон</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+7 000 000 0000"
            className="w-full p-3 mt-1 rounded bg-gray-100 outline-none"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 transition"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};
export default AdminProfile;