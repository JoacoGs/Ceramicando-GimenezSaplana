import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  const vajilla = ["Bowls", "Cuencos", "Tazas", "Mates"];

  return (
    <div className="container-fluid">
      <NavBar />
      <hr />
      <ItemListContainer items={vajilla} titulo="Productos" />
      <ItemCount stock={5} initial={1} onAdd={0} />
    </div>
  );
}

export default App;
