import { Link } from "react-router-dom";
import { PAGINAS } from "../data/Paginas";

interface Props {
  paginaActual: string;
  alCambiarPagina: (nuevaPagina: string) => void;
}

function BarraNavegacion({ paginaActual, alCambiarPagina }: Props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <p className="navbar-brand">{paginaActual}</p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {PAGINAS.map((pag) => (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={pag.ruta}
                  onClick={() => alCambiarPagina(pag.nombreCorto)}
                >
                  {pag.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default BarraNavegacion;
