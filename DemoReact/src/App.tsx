import { Fragment } from "react/jsx-runtime";
// import Card from "./components/Card";
import List from "./components/List";
import Boton from "./components/Boton";
import { useState } from "react";
import MenuDesplegable from "./components/MenuDesplegable";
//import CardBody from "./components/CardBody";

function App() {
  /* VISTO EN CLASE 1 REACT */
  // const nombre = "Javier";
  // if (nombre) {
  //   // Si nombre tiene contenido, entonces la condicion será true
  //   return <p>Hola que tal {nombre}</p>;
  // }
  //return <p>Hola que tal, festival 🎵</p>;
  //return <Card title="PRODUCTO 2" text="Producto bueno pero meh" />;
  /*  // CLASE 3 DE REACT  ⬇️
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
  );*/

  // CLASE 4 ⬇️

  // Declaramos un estado con una lista de participantes
  const [participantes, setParticipantes] = useState(["Leia", "Han", "Luke"]);
  // Contador de troopers en la lista
  const numTroopers = participantes.filter((p) =>
    p.startsWith("Trooper"),
  ).length;

  // Estado dentro de la App que diferencia si el boton debe o no habilitarse
  const [estaCargando, setEstaCargando] = useState(false);
  // Fx que definimos con la que el boton va a funcionar al hacer clic
  const manejadorClick = () => setEstaCargando(!estaCargando);

  // Fx para agregar Troopers a la lista
  const agregarParticipante = () =>
    setParticipantes([...participantes, "Trooper" + numTroopers]);

  // Fx para borrar el ultimo participante de la lista
  const borrarParticipante = () => setParticipantes(participantes.slice(0, -1));

  // Fx que se lanza al seleccionar un particpante de la lista
  const alSeleccionarParticipante = (elemento: string) => {
    console.log("Participante seleccionado: " + elemento);
  };

  return (
    <Fragment>
      {/* <Boton alClickear={manejadorClick} estadoBoton={estaCargando}>
        Cargar contenido
      </Boton> */}

      {/* CLASE 4++ */}
      {/* <Boton alClickear={agregarParticipante} subclase="success">
        + Participante
      </Boton>
      <Boton alClickear={borrarParticipante} subclase="danger">
        - Participante
      </Boton>
      <br />
      <br />
      <List
        datos={participantes}
        alSeleccionar={alSeleccionarParticipante}
      ></List> */}

      <MenuDesplegable
        titulo="Tamaño Burger"
        opciones={["Simple", "Doble", "Tapa arterias"]}
        alSeleccionar={(opcion: string) =>
          console.log("Burger seleccionada: " + opcion)
        }
      ></MenuDesplegable>
      <br />
      <MenuDesplegable
        titulo="Comuna"
        opciones={["Concepcion", "Hualpen", "Talcahuano", "San Pedro"]}
        alSeleccionar={(opcion: string) =>
          console.log("Comuna reparto: " + opcion)
        }
      ></MenuDesplegable>
    </Fragment>
  );
}

export default App;
