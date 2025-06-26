import React, { useState } from "react";
import Button from "../../components/ui/Button/Button";

const AdminQuestions = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [published, setPublished] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ question, answer, published });
    setQuestion("");
    setAnswer("");
    setPublished(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
      <div>
        <label className="block text-sm font-medium text-gray-700">Вопрос</label>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full mt-1 border border-gray-300 rounded-lg p-2"
          rows="2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Ответ</label>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full mt-1 border border-gray-300 rounded-lg p-2"
          rows="4"
          required
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={published}
          onChange={() => setPublished(!published)}
          className="form-checkbox text-primary"
        />
        <span className="text-sm">Показать на сайте</span>
      </div>
      <Button type="submit">Сохранить</Button>
    </form>
  );
};

export default AdminQuestions;
