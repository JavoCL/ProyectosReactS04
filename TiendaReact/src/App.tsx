import { Fragment } from "react/jsx-runtime";
import Contenedor from "./components/Contenedor";
import Inicio from "./pages/Inicio";
// Para enrutamiento o navegacion a otras paginas
import { Routes, Route } from "react-router-dom";
import Nosotros from "./pages/Nosotros";
import { Link } from "react-router-dom";
import { useState } from "react";
import Producto2 from "./pages/Producto2";

function App() {
  // Definimos un state que guarde el nombre la pagina actual
  const [paginaActual, setPaginaActual] = useState("Inicio");
  return (
    <Fragment>
      <br />
      <h1 className="text-center"> 🛍️Somos "Te lo vendo"🛒</h1>
      <br />

      {/* ============== NAV BAR ============== */}
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
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => setPaginaActual("Inicio")}
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/productos"
                  onClick={() => setPaginaActual("Productos")}
                >
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contacto"
                  onClick={() => setPaginaActual("Contacto")}
                >
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/nosotros"
                  onClick={() => setPaginaActual("Sobre nosotros")}
                >
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* ===================================== */}

      {/* ============== MAIN ============== */}

      <main>
        <Contenedor>
          {/* Estas son las rutas de navegacion dentro del sitio */}
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />}></Route>
            <Route path="/producto" element={<Producto2 />}></Route>
          </Routes>
        </Contenedor>
      </main>

      {/* ============== FOOTER ============== */}
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link
              className="nav-link px-2 text-body-secondary"
              to="/"
              onClick={() => setPaginaActual("Inicio")}
            >
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link px-2 text-body-secondary"
              to="/productos"
              onClick={() => setPaginaActual("Productos")}
            >
              Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link px-2 text-body-secondary"
              to="/contacto"
              onClick={() => setPaginaActual("Contacto")}
            >
              Contacto
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link px-2 text-body-secondary"
              to="/nosotros"
              onClick={() => setPaginaActual("Sobre nosotros")}
            >
              Sobre nosotros
            </Link>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          © 2026 Desarrollo Fullstack II-S04 | DuocUC Concepción
        </p>
      </footer>
      {/* ===================================== */}
    </Fragment>
  );
}

export default App;
