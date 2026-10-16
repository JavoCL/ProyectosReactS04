import type { ReactNode } from "react";

// Definicion de propiedades para el boton
type Props = {
  // 'children' sera el contenido que ira dentro de las etiquetas
  // html resultante (debido a su tipo ReactNode)
  children: ReactNode;
  // Valor bool del estado actvado/desactivado del boton
  estadoBoton?: boolean;
  // Fx que asignaremos al boton al momento de hacer clic
  alClickear: () => void;

  subclase?: string;
};

function Boton({
  children,
  estadoBoton,
  alClickear,
  subclase = "primary",
}: Props) {
  return (
    <button
      onClick={alClickear}
      // Evalua el estado del boton para habilitarlo o no
      disabled={estadoBoton}
      type="button"
      // Evalua el estado del boton para seleccionar la clase correcta
      className={`btn btn-${estadoBoton == true ? "secondary" : subclase}`}
    >
      {/* Evalua el estado del boton para mostrar 
      diferente texto en el contenido*/}
      {estadoBoton == true ? "Cargando..." : children}
    </button>
  );
}

export default Boton;
