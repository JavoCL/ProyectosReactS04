import { useState } from "react";

// Definimos que parametros acepta este componente
interface Props {
  titulo: string; // Titulo del menu
  opciones: string[]; // Opciones a mostrar del menu
  alSeleccionar: (opcionElegido: string) => void;
}

function MenuDesplegable({ titulo, opciones, alSeleccionar }: Props) {
  // Definimos un state para verificar el estado de apertura del menu
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Agregamos una Fx que invierte el valor del state menuAbierto
  function abreMenu() {
    // ! : niega o invierte un valor o expresion booleana
    setMenuAbierto(!menuAbierto);
  }

  function manejarClicOpcion(opcionTexto: string) {
    alSeleccionar(opcionTexto);
    setMenuAbierto(false);
  }

  return (
    <div className="dropdown">
      {/* Debe llevar un boton para la interaccion inicial para el despliegue */}
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={abreMenu}
      >
        {/* Establezco el titulo del menu desplegable */}
        {titulo}
      </button>
      {/* Evaluamos el state del menuAbierto.
      Si es true, agregamos " show" a la clase
      Si es false, solo agregamos "" */}
      <ul className={"dropdown-menu" + (menuAbierto == true ? " show" : "")}>
        {/* Cada elemento/opcion del MD lo cambiamos por boton */}

        {/* Recorremos el array 'opciones'
        y para cada texto y cada indice de cada elemento, lo asignamos
        al jsx indicado y lo retornamos*/}
        {opciones.map(function (opcionTexto, indice) {
          return (
            <li key={indice}>
              <button
                className="dropdown-item"
                type="button"
                onClick={function () {
                  manejarClicOpcion(opcionTexto);
                }}
              >
                {opcionTexto}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MenuDesplegable;
