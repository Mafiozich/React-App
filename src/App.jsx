import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);

  const changeMessage = () => {
    dispatch({
      type: "UPDATE_MESSAGE",
      payload: "Message updated!",
    });
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={changeMessage}>Change Message</button>
    </div>
  );
};

export default App;
