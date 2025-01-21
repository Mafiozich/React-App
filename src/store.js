import { createStore } from "redux";

// Начальное состояние
const initialState = {
  message: "Hello, World!",
};

// Редуктор
const reducer = (state = initialState, action) => {
  if (action.type === "UPDATE_MESSAGE") {
    return { ...state, message: action.payload };
  }
  return state;
};

const store = createStore(reducer);

export default store;
