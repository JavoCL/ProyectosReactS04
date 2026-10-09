import { Fragment } from "react/jsx-runtime";
import Card from "./components/Card";
import List from "./components/List";

function App() {
  /* VISTO EN CLASE 1 REACT
  const nombre = "Javier";
  if (nombre) {
    // Si nombre tiene contenido, entonces la condicion será true
    return <p>Hola que tal {nombre}</p>;
  }

  return <p>Hola que tal, festival 🎵</p>;*/
  //return <Card title="PRODUCTO 2" text="Producto bueno pero meh" />;

  // CLASE 3 DE REACT  ⬇️

  const listaSW = ["Leia", "Han", "Luke"];
  const listaVillanos = ["Vader", "Emperor", "Jabba"];

  // Defino una fx extra para el evento de click
  // sobre item de lista, y se la paso a la lista que cree
  const manipuladorSelect = (elemento: string) => {
    console.log("App.tsx: Elemento seleccionado-> " + elemento);
  };

  return (
    <Fragment>
      <List datos={listaSW} alSeleccionar={manipuladorSelect} />
      <br />
      <List datos={listaVillanos} />
    </Fragment>
  );
}

export default App;
