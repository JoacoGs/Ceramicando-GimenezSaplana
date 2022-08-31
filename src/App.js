import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const vajilla = ["Bowls", "Cuencos", "Tazas", "Mates"];

  return (
    <div className="container-fluid">
      <NavBar />
      <hr />
      <ItemListContainer items={vajilla} titulo="Productos" />
    </div>
  );
}

export default App;
