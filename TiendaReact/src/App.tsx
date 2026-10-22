import { Fragment } from "react/jsx-runtime";
import Contenedor from "./components/Contenedor";
import Inicio from "./pages/Inicio";
// Para enrutamiento o navegacion a otras paginas
import { Routes, Route } from "react-router-dom";
import Nosotros from "./pages/Nosotros";
import { useState } from "react";
import Producto2 from "./pages/Producto2";
import BarraNavegacion from "./components/BarraNavegacion";
import PiePagina from "./components/PiePagina";

function App() {
  // Definimos un state que guarde el nombre la pagina actual
  const [paginaActual, setPaginaActual] = useState("Inicio");
  return (
    <Fragment>
      <br />
      <h1 className="text-center"> 🛍️Somos "Te lo vendo"🛒</h1>
      <br />

      {/* ============== NAV BAR ============== */}
      <BarraNavegacion
        paginaActual={paginaActual}
        alCambiarPagina={setPaginaActual}
      ></BarraNavegacion>
      {/* ===================================== */}

      {/* ============== MAIN ============== */}

      <main>
        <Contenedor>
          {/* Estas son las rutas de navegacion dentro del sitio */}
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />}></Route>
            <Route path="/producto/:id" element={<Producto2 />}></Route>
          </Routes>
        </Contenedor>
      </main>

      {/* ============== FOOTER ============== */}
      <PiePagina alCambiarPagina={setPaginaActual}></PiePagina>
      {/* ===================================== */}
    </Fragment>
  );
}

export default App;
