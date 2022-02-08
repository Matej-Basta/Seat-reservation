import logo from "./logo.svg";
import "./App.css";
import { Seat } from "./components/Seat";

function App() {
  const numberOfSeats = 28;
  return (
    <div className="train-carriage">
      {new Array(numberOfSeats / 4).fill(null).map((element, row) => (
        <div key={row} className="carriage-row">
          <Seat number={row * 4 + 1} />
          <Seat number={row * 4 + 2} />

          <div className="aisle-spacer"></div>

          <Seat number={row * 4 + 3} />
          <Seat number={row * 4 + 4} />
        </div>
      ))}
    </div>
  );
}

export default App;
