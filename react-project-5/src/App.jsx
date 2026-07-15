import { useState } from "react";
import "./App.css";
import Card from "./component/Card.jsx";

function App() {
  const [name, setName] = useState("");
  return (
    <Card name={name} setName={setName}>
      <h2>this is parent component : {name}</h2>
    </Card>
  );
}

export default App;
