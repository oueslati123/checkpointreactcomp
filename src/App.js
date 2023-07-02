import "./App.css";
import BorderExample from "./component/card";
import NavScrollExample from "./component/navbar";

function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <div className="content">
        <BorderExample className="Box1" />
        <BorderExample className="box2" />
      </div>
    </div>
  );
}

export default App;
