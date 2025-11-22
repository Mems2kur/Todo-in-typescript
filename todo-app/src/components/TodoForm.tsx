interface TodoFormProps {
  AddTodo: () => void;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function TodoForm({ AddTodo, query, setQuery }: TodoFormProps) {
  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    AddTodo();
    setQuery("");
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex justify-center mt-8">
      <form 
        onSubmit={handlesubmit}
        className="flex items-center bg-white shadow-md rounded-full px-4 py-3 w-[600px] max-w-[90%]"
      >
        <input
          type="text"
          value={query}
          onChange={handleInput}
          placeholder="Add a new task..."
          className="flex-1 p-2 rounded-l-full outline-none text-black placeholder-gray-500"
        />

        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-800 transition text-white px-5 py-2 rounded-full ml-2"
        >
          Add
        </button>
      </form>
    </div>
  );
}
