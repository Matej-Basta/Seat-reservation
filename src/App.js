import logo from "./logo.svg";
import "./App.css";
import { Seat } from "./components/Seat";

function App() {
  return (
    <div className="train-carriage">
      <div className="carriage-row">
        <Seat number="1" availability="occupied" />
        <Seat number="2" availability="free" />

        <div className="aisle-spacer"></div>

        <Seat number="3" availability="free" />
        <Seat number="4" availability="selected" />
      </div>
      <div className="carriage-row">
        <Seat number="5" availability="occupied" />
        <Seat number="6" availability="occupied" />

        <div className="aisle-spacer"></div>

        <Seat number="7" availability="free" />
        <Seat number="8" availability="free" />
      </div>
      <div className="carriage-row">
        <Seat number="8" availability="free" />
        <Seat number="9" availability="occupied" />

        <div className="aisle-spacer"></div>

        <Seat number="10" availability="free" />
        <Seat number="11" availability="selected" />
      </div>
      <div className="carriage-row">
        <Seat number="12" availability="occupied" />
        <Seat number="13" availability="selected" />

        <div className="aisle-spacer"></div>

        <Seat number="14" availability="free" />
        <Seat number="15" availability="selected" />
      </div>
      <div className="carriage-row">
        <Seat number="16" availability="occupied" />
        <Seat number="17" availability="selected" />

        <div className="aisle-spacer"></div>

        <Seat number="18" availability="free" />
        <Seat number="19" availability="occupied" />
      </div>
    </div>
  );
}

export default App;
