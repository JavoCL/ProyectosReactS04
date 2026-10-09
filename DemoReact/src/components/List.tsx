import { useState } from "react";

type Propiedades = {
  datos: string[];
  alSeleccionar?: (element: string) => void;
};

// List necesita que le entregue cuales son los
// datos a mostrar en pantalla para la lista
function List({ datos, alSeleccionar }: Propiedades) {
  const [indice, setIndice] = useState(0);

  // Funcion interna que toma un elemento entrante 'mensaje'
  // y lo imprime en consola
  // Tiene un segundo argumento 'index' que al clickear setea
  // el estado 'indice'
  // Similar a JAVA: public void(String mensaje)
  const handleClick = (mensaje: string, index: number) => {
    //console.log(mensaje);
    setIndice(index);
    if (alSeleccionar) {
      alSeleccionar(mensaje);
    }
  };

  return (
    <ul className="list-group" style={{ width: "350px" }}>
      {/*Recorremos el arreglo de datos, con el pivote temporal 'elemento'*/}
      {datos.map((elemento, i) => (
        <li
          // Agregamos el evento onClick adjuntando la fx handleClick definida
          // antes del return e imprimos el elemento que se esta iterando
          onClick={() => handleClick("Elemento[" + i + "]: " + elemento, i)}
          key={elemento}
          className={`list-group-item ${indice == i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
