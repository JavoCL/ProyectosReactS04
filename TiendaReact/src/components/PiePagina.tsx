import { Link } from "react-router-dom";
import { PAGINAS } from "../data/Paginas";

interface Props {
  alCambiarPagina: (nuevaPagina: string) => void;
}

function PiePagina({ alCambiarPagina }: Props) {
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        {PAGINAS.map((pag) => (
          <li className="nav-item">
            <Link
              className="nav-link px-2 text-body-secondary"
              to={pag.ruta}
              onClick={() => alCambiarPagina(pag.nombreCorto)}
            >
              {pag.nombre}
            </Link>
          </li>
        ))}
        {/* <li className="nav-item">
          <Link
            className="nav-link px-2 text-body-secondary"
            to="/"
            onClick={() => alCambiarPagina("Inicio")}
          >
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link px-2 text-body-secondary"
            to="/productos"
            onClick={() => alCambiarPagina("Productos")}
          >
            Productos
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link px-2 text-body-secondary"
            to="/contacto"
            onClick={() => alCambiarPagina("Contacto")}
          >
            Contacto
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link px-2 text-body-secondary"
            to="/nosotros"
            onClick={() => alCambiarPagina("Sobre nosotros")}
          >
            Sobre nosotros
          </Link>
        </li> */}
      </ul>
      <p className="text-center text-body-secondary">
        © 2026 Desarrollo Fullstack II-S04 | DuocUC Concepción
      </p>
    </footer>
  );
}

export default PiePagina;
