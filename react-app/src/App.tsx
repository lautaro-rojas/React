import Title from "./components/Title";
import Card from "./components/Card";
import List from "./components/List";
import { CardBody } from "./components/Card";
import "./App.css";

function App() {
  const listData = ["Coca", "Manaos", "Sprite", "Paso de los toros"];
  const handleSelect = (element: string) => {
    alert(`You selected ${element}`);
  };
  const handleSelect2 = (element: string) => {
    console.log(`You selected ${element}`);
  };
  return (
    <div className="container">
      <Title />
      <Card>
        <CardBody title="Card Title" text="This is the card text." />
        <List data={listData} onSelect={handleSelect} />
      </Card>
      <List data={listData} onSelect={handleSelect2} />
    </div>
  );
}
export default App;
