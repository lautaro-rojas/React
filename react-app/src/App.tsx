import Title from "./components/Title";
import Card from "./components/Card";
import List from "./components/List";
import Button from "./components/Button/Button";
import { CardBody } from "./components/Card";
import "./App.css";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(!isLoading);
  };

  const listData = ["Coca", "Manaos", "Sprite", "Paso de los toros"];
  const list2: string[] = [];
  const handleSelect = (element: string) => {
    alert(`You selected ${element}`);
  };
  const handleSelect2 = (element: string) => {
    console.log(`You selected ${element}`);
  };

  const content =
    list2.length !== 0 ? (
      <List data={list2} onSelect={handleSelect} />
    ) : (
      <p>No data</p>
    );

  //#region Ejercicio 2
  const [data, setData] = useState([
    "Max Verstappen",
    "Checo Perez",
    "Franco Colapinto",
  ]);
  const addPilot = () => {
    setData([...data, "New Pilot"]);
  };
  const deletePilot = () => {
    setData(data.slice(0, -1));
  };

  //#endregion

  return (
    <div className="container">
      <Title />
      <Card>
        <CardBody title="Card Title" text="This is the card text." />
        <List data={listData} onSelect={handleSelect} />
      </Card>
      <p></p>
      <List data={listData} onSelect={handleSelect2} />
      <p></p>
      {content}
      <Button isLoading={isLoading} onClick={handleClick}>
        {isLoading ? "Loading..." : "Click me"}
      </Button>
      <div className="ejercicio 2">
        <Card>
          <CardBody title="Ejercicio 2" text="Este es el ejercicio 2" />
          <Button onClick={addPilot}>Add</Button>
          <Button onClick={deletePilot}>Delete</Button>
          <List
            data={data}
            onSelect={(element) => alert(`You selected ${element}`)}
          />
        </Card>
      </div>
    </div>
  );
}

export default App;
