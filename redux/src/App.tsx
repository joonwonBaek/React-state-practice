import "./App.css";

type AppProps = {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

function App({ value, onIncrement, onDecrement }: AppProps) {
  return (
    <div className="App">
      Clicked: {value} times
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

export default App;
