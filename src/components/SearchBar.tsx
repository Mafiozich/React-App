import { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Введите ингредиенты..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => onSearch(query)}>Найти</button>
    </div>
  );
};
