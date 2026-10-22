import { Fragment } from "react/jsx-runtime";
import Contenedor from "../components/Contenedor";
import Tarjeta from "../components/Tarjeta";
import { PRODUCTOS } from "../data/Producto";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <Fragment>
      <h3 className="text-center" style={{ margin: "15px" }}>
        {" "}
        Productos Destacados HOY
      </h3>

      <Contenedor clase="container text-center">
        <div className="row">
          {/* Recorremos el arreglo de productos en Producto.ts
              y para cada elemento (identificado auxiliarmente como 'prod')
              va a generar la tarjeta del producto destacado con los datos
              de prod */}
          {PRODUCTOS.map((prod) => (
            <div className="col">
              <Tarjeta
                titulo={prod.nombre}
                texto={prod.descripcion}
                urlImagen={prod.urlImagen}
                altImagen={prod.altImagen}
              >
                <p className="card-text fw-bold">${prod.precio}</p>
                <Link to={`/producto/${prod.id}`} className="btn btn-primary">
                  +Info
                </Link>
              </Tarjeta>
            </div>
          ))}
        </div>
      </Contenedor>
    </Fragment>
  );
}

export default Inicio;
