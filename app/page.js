"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (inputText.trim()) {
      setTodos([...todos, inputText.trim()]);
      setInputText("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Simple Testing App
        </h1>

        {/* Counter Section */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Counter Test</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCount(count - 1)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              -
            </button>
            <span className="text-xl font-bold">{count}</span>
            <button
              onClick={() => setCount(count + 1)}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            >
              +
            </button>
          </div>
        </div>

        {/* Todo Section */}
        <div className="mb-6 p-4 bg-green-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Todo Test</h2>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter todo..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === "Enter" && addTodo()}
            />
            <button
              onClick={addTodo}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
          <ul className="space-y-2">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-2 bg-white rounded border"
              >
                <span>{todo}</span>
                <button
                  onClick={() => removeTodo(index)}
                  className="px-2 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Status Section */}
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">App Status</h2>
          <p className="text-sm text-gray-600">
            Counter: {count} | Todos: {todos.length}
          </p>
          <p className="text-xs text-gray-500 mt-1">Ready for testing! 🚀</p>
        </div>
      </div>
    </div>
  );
}
