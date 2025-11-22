import React from "react";
import type { Todo } from "../todo";
import {  Trash2 } from "lucide-react";

interface TodoListProps {
  todo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  DeleteTodo: (id: number) => void;
}

export default function TodoList({ todo, setTodo, DeleteTodo }: TodoListProps) {
  const HandleChange = (id: number) => {
    const update = todo.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodo(update);
  };

  return (
    <div className="flex justify-center mt-6">
      <ul className="bg-white w-[500px] max-h-[300px] overflow-y-auto rounded-xl p-5 shadow-md flex flex-col gap-3">
        {todo.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 py-2 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition justify-between"
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => HandleChange(item.id)}
              className="h-5 w-5 accent-blue-600"
            />
            <li
              className={`list-none text-lg ${
                item.completed ? "line-through text-gray-400" : "text-black"
              }`}
            >
              {item.text}
            </li>
            <Trash2 size={24} className="text-red-500" onClick={()=>DeleteTodo(item.id)} />
          </div>
        ))}
      </ul>
    </div>
  );
}
