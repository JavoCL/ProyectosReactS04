import { Fragment } from "react/jsx-runtime";

function App() {
  return (
    <Fragment>
      <br />
      <h1 className="text-center"> 🛍️Somos "Te lo vendo"🛒</h1>
      <br />

      {/* ============== NAV BAR ============== */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            Inicio
          </a>
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="index.html"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="productos.html">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contacto.html">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  Sobre nosotros
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* ===================================== */}

      <main>
        <div className="container">
          <h3 className="text-center"> Productos Destacados HOY</h3>

          <div className="container text-center">
            <div className="row">
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="img/producto01.jpg"
                    className="card-img-top"
                    alt="La Kalaora wena"
                  />
                  <div className="card-body">
                    <h5 className="card-title TextoTarjeta">Kalaora wena</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card’s content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="img/producto02.jpg"
                    className="card-img-top"
                    alt="La Kalaora prime"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Kalaora prime</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card’s content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="img/producto03.jpg"
                    className="card-img-top"
                    alt="La Kalaora meh"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Kalaora meh 🤷‍♂️</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card’s content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ============== FOOTER ============== */}
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="inicio.html" className="nav-link px-2 text-body-secondary">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="productos.html"
              className="nav-link px-2 text-body-secondary"
            >
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a
              href="contacto.html"
              className="nav-link px-2 text-body-secondary"
            >
              Contacto
            </a>
          </li>
          <li className="nav-item">
            <a href="about.html" className="nav-link px-2 text-body-secondary">
              Sobre nosotros
            </a>
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
