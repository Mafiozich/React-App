import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setQuery } from "../entities/search/model/searchSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.search.query);

  return (
    <div>
      <input
        type="text"
        placeholder="Введите ингредиенты..."
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />
      <button onClick={() => console.log("Запуск поиска:", query)}>
        Найти
      </button>
    </div>
  );
};
